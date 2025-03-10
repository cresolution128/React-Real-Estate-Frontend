import * as Yup from 'yup';
export const ContactSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Das eingegebene Passwort ist zu kurz.')
    .max(50, 'Das eingegebene Passwort ist zu lang.')
    .required('Dies ist ein Pflichtfeld.'),
  name: Yup.string().required('Please enter your name'),
  email: Yup.string()
    .email('Not a valid email address')
    .required('Please enter your email'),
  subject: Yup.string().required('Please enter your subject'),
  message: Yup.string().required('Please enter your message'),
});
