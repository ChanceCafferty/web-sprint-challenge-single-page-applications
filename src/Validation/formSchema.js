import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Name is required!')
        .min(2, "name must be at least 2 characters"),
    size: yup
        .boolean()
        .oneOf(['small', 'medium', 'large'], 'must choose a size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    bacon: yup.boolean(),
    chicken: yup.boolean(),
    special: yup
    .string()
})

export default formSchema;