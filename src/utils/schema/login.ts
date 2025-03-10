import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Das eingegebene Passwort ist zu kurz.')
    .max(50, 'Das eingegebene Passwort ist zu lang.')
    .required('Dies ist ein Pflichtfeld.'),
  email: Yup.string()
    .email('Bitte geben Sie eine gültige E-Mail ein.')
    .required('Dies ist ein Pflichtfeld.'),
});
