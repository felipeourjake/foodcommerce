import { isValidCPF, isValidCNPJ, isValidMobilePhone } from '@brazilian-utils/brazilian-utils';
import * as yup from "yup";

export const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
    tel: yup
        .string()
        .required('Campo obrigatório')
        .transform(v => v.replace(/[^\d]/g, ''))
        .test('validatePhone', 'Telfone inválido', (v) => isValidMobilePhone(v)),
    document: yup
        .string()
        .required('Campo obrigatório')
        .transform(v => v.replace(/[^\d]/g, ''))
        .test('validaDoc', 'CPF ou CNPJ inválido', (v) => isValidCPF(v) || isValidCNPJ(v)),
    cep: yup.string().required('Campo obrigatório'),
    street: yup.string().required('Campo obrigatório'),
    number: yup.string().required('Campo obrigatório'),
    complement: yup.string(),
    neighborhood: yup.string().required('Campo obrigatório'),
    city: yup.string().required('Campo obrigatório'),
    uf: yup.string().required('Campo obrigatório'),
    paymentForm: yup.string().required('Selecione uma forma de pagamento')
  }).required();

export type FormData = yup.InferType<typeof schema>;