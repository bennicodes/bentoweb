import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { site } from "../../data/site";
import { pricingPlans } from "../../data/pricingPlans";
import useFormValidation from "../../hooks/useFormValidation";
import { required, email, phone } from "../../utils/validators";

const needs = ["Ny nettside", "Fornye nettsiden", "Nettbutikk", "Usikker ennå"];

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  need: needs[0],
  plan: "",
  message: "",
  website: "", // honeypot — real people never see or fill this
};

// Which fields are checked, and the (short) message shown for each problem.
// Rules and default texts live in src/utils/validators.js.
const rules = {
  name: [required("Skriv inn navn.")],
  email: [required("Skriv inn e-post."), email()],
  phone: [required("Skriv inn telefonnummer."), phone()],
  message: [required("Skriv en kort melding.")],
};

// `asPage` = the /kontakt page, where the heading is the page's h1.
const Contact = ({ asPage = false }) => {
  const [form, setForm] = useState(emptyForm);
  const { errors, validate, clearError } = useFormValidation(rules);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const formRef = useRef(null);
  const { email: contactEmail, phone: contactPhone } = site.contact;

  // Price cards link here with ?pakke=… — preselect that package.
  const [params] = useSearchParams();
  const chosenPlan = params.get("pakke");
  useEffect(() => {
    if (chosenPlan && pricingPlans.some((p) => p.name === chosenPlan)) {
      setForm((f) => ({ ...f, plan: chosenPlan }));
    }
  }, [chosenPlan]);

  const Heading = asPage ? "h1" : "h2";

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((f) => ({ ...f, [field]: value }));
    clearError(field);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return; // bot

    const firstInvalid = validate(form);
    if (firstInvalid) {
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const { serviceId, templateId, publicKey } = site.emailjs;
    if (!serviceId || !templateId || !publicKey) {
      // Dev-only hint; visitors never see internal details in the console.
      if (import.meta.env.DEV) console.warn("EmailJS mangler nøkler — se .env.example");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name.trim(),
          reply_to: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim() || "—",
          need: form.need,
          plan: form.plan || "Ikke valgt",
          message: form.message.trim(),
        },
        { publicKey },
      );
      setStatus("sent");
      setForm(emptyForm);
    } catch (err) {
      if (import.meta.env.DEV) console.error(err);
      setStatus("error");
    }
  };

  const fieldProps = (field) => ({
    id: `kontakt-${field}`,
    name: field,
    value: form[field],
    onChange: update(field),
    "aria-invalid": errors[field] ? "true" : undefined,
    "aria-describedby": errors[field] ? `kontakt-${field}-feil` : undefined,
  });

  const errorFor = (field) =>
    errors[field] && (
      <p id={`kontakt-${field}-feil`} className={styles.error}>
        {errors[field]}
      </p>
    );

  return (
    <section id="kontakt" className={`section ${styles.band}`} aria-labelledby="kontakt-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro} data-reveal>
          <Heading id="kontakt-title" className={`section-title ${asPage ? styles.pageTitle : ""}`}>
            La oss lage noe <span className="accent">bra</span> sammen.
          </Heading>
          <p className={styles.lede}>
            Fortell litt om bedriften din og hva du ser for deg. Du får svar fra
            en person — ikke fra en automatisk kø.
          </p>

          <ol className={styles.next}>
            <li>Du sender en melding</li>
            <li>Vi tar en uforpliktende prat</li>
            <li>Du får skisse og fast pris</li>
          </ol>

          {(contactEmail || contactPhone || site.contact.city) && (
            <ul className={styles.direct}>
              {contactEmail && (
                <li>
                  <Icon name="mail" />
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </li>
              )}
              {contactPhone && (
                <li>
                  <Icon name="phone" />
                  <a href={`tel:${contactPhone.replace(/\s/g, "")}`}>{contactPhone}</a>
                </li>
              )}
              {site.contact.city && (
                <li>
                  <Icon name="pin" />
                  Basert i {site.contact.city} — jobber i hele Norge
                </li>
              )}
            </ul>
          )}
        </div>

        <div className={styles.pad} data-reveal>
          {status === "sent" ? (
            <div className={styles.sent} role="status">
              <Icon name="check" size={48} className={styles.sentIcon} />
              <h3>Takk! Meldingen er sendt.</h3>
              <p>Vi leser alle henvendelser selv og svarer deg på e-post så snart vi kan.</p>
              <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
                Send en melding til
              </Button>
            </div>
          ) : (
            <form ref={formRef} className={styles.form} onSubmit={onSubmit} noValidate>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="kontakt-name">Navn *</label>
                  <input type="text" autoComplete="name" required {...fieldProps("name")} />
                  {errorFor("name")}
                </div>
                <div className={styles.field}>
                  <label htmlFor="kontakt-company">Bedrift</label>
                  <input type="text" autoComplete="organization" {...fieldProps("company")} />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="kontakt-email">E-post *</label>
                  <input type="email" autoComplete="email" inputMode="email" required {...fieldProps("email")} />
                  {errorFor("email")}
                </div>
                <div className={styles.field}>
                  <label htmlFor="kontakt-phone">Telefon *</label>
                  <input
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    {...fieldProps("phone")}
                    aria-describedby={`kontakt-phone-hint${errors.phone ? " kontakt-phone-feil" : ""}`}
                  />
                  <p id="kontakt-phone-hint" className={styles.hint}>
                    Så vi kan ringe deg hvis e-posten ikke når frem.
                  </p>
                  {errorFor("phone")}
                </div>
              </div>

              <fieldset className={styles.chips}>
                <legend>Hva trenger du?</legend>
                {needs.map((need) => (
                  <label key={need} className={styles.chip}>
                    <input
                      type="radio"
                      name="need"
                      value={need}
                      checked={form.need === need}
                      onChange={update("need")}
                    />
                    <span>{need}</span>
                  </label>
                ))}
              </fieldset>

              <div className={styles.field}>
                <label htmlFor="kontakt-plan">Pakke (valgfritt)</label>
                <select {...fieldProps("plan")}>
                  <option value="">Vet ikke ennå</option>
                  {pricingPlans.map((p) => (
                    <option key={p.id} value={p.name}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="kontakt-message">Fortell kort om prosjektet *</label>
                <textarea
                  rows={5}
                  required
                  placeholder="F.eks. «Vi er et snekkerfirma i Asker som trenger en ny nettside …»"
                  {...fieldProps("message")}
                />
                {errorFor("message")}
              </div>

              <div className={styles.honeypot} aria-hidden="true">
                <label htmlFor="kontakt-website">Nettside</label>
                <input type="text" tabIndex={-1} autoComplete="off" {...fieldProps("website")} />
              </div>

              {status === "error" && (
                <p className={styles.formError} role="alert">
                  Meldingen ble ikke sendt. Prøv igjen om litt
                  {contactEmail ? (
                    <>
                      , eller send en e-post direkte til <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
                    </>
                  ) : (
                    "."
                  )}
                </p>
              )}

              <Button
                type="submit"
                arrow={status !== "sending"}
                disabled={status === "sending"}
                className={styles.submit}
              >
                {status === "sending" ? "Sender …" : "Send melding"}
              </Button>
              <p className={styles.privacy}>
                Vi bruker opplysningene kun til å svare på henvendelsen din — ingen
                nyhetsbrev eller telefonsalg.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
