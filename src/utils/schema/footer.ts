import * as Yup from 'yup';

export const EmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Required'),
});
