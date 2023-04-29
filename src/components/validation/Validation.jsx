import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().min(2).required("Required"),
});
