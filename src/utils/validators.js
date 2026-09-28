// Reusable validation rules. Each rule takes the field's value and returns an
// error message (string) — or null when the value is fine.
// Pass your own message to override the default text.

const text = (value) => String(value ?? "").trim();

export const required =
  (message = "Må fylles ut.") =>
  (value) =>
    text(value) ? null : message;

export const email =
  (message = "Ugyldig e-postadresse.") =>
  (value) =>
    !text(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text(value)) ? null : message;

// Norwegian numbers: 8 digits (optionally +47 / 0047). Foreign numbers:
// + or 00, country code and 7–15 digits. Spaces, dashes, dots and brackets are ignored.
export const phone =
  (message = "Ugyldig telefonnummer.") =>
  (value) => {
    const n = text(value).replace(/[\s().-]/g, "");
    if (!n) return null;
    const valid =
      /^(?:(?:\+|00)47)?[2-9]\d{7}$/.test(n) || /^(?:\+|00)[1-9]\d{6,14}$/.test(n);
    return valid ? null : message;
  };
