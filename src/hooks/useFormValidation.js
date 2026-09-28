import { useCallback, useState } from "react";

// Generic form validation.
//
//   const rules = { email: [required("Skriv inn e-post."), email()] };
//   const { errors, validate, clearError, reset } = useFormValidation(rules);
//
// Each field lists its rules in order; the first one that fails wins.
// `validate(values)` shows all errors and returns the first invalid field
// name (to focus it), or null when the whole form is valid.
export default function useFormValidation(rules) {
  const [errors, setErrors] = useState({});

  const validate = useCallback(
    (values) => {
      const found = {};
      for (const [field, fieldRules] of Object.entries(rules)) {
        for (const rule of fieldRules) {
          const message = rule(values[field], values);
          if (message) {
            found[field] = message;
            break;
          }
        }
      }
      setErrors(found);
      return Object.keys(found)[0] ?? null;
    },
    [rules],
  );

  const clearError = useCallback((field) => {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }, []);

  const reset = useCallback(() => setErrors({}), []);

  return { errors, validate, clearError, reset };
}
