import * as yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const invitationValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    acct_name: '',
    presupuesto_tech: "1.000.000 a 4.000.00",
}

export const invitationSchema = yup.object().shape({
    firstName: yup.string().required('El nombre es requerido.'),
    lastName: yup.string().required('El apellido es requerido.'),
    email: yup.string().email('Ingrese un correo electrónico valido.').required('El correo electrónico es requerido.'),
    phone: yup.string().matches(phoneRegExp, 'Ingrese un número telefonico valido.').min(10, 'El número debe tener 10 digitos'),
    acct_name: yup.string().required('El nombre de la empresa es requerido.'),
    presupuesto_tech: yup.string().required('El presupuesto es requerido.'),
}).required()