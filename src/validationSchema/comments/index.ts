import * as yup from 'yup';

export const commentValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  client_id: yup.string().nullable(),
});
