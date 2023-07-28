import * as yup from 'yup';

export const orderValidationSchema = yup.object().shape({
  strategy_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
