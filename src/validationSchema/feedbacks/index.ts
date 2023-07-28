import * as yup from 'yup';

export const feedbackValidationSchema = yup.object().shape({
  comment: yup.string().nullable(),
  strategy_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
