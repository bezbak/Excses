
import * as yup from "yup"

export const PasswordValidations = yup.object().shape({
  password: yup.string().min(6, "Пароль должен быть более 6 символов").required("Пароль обязателный!"),
  confirmPassword: yup.string().required("Подтверждение пароля обязательно")
  .oneOf([yup.ref('password'), ''], 'Пароли должны совпадать'),
})

export const Registrvalidations = yup
.object()
.shape({
    email: yup.string().email("Неправильная почта").required("Почта обязательная!"),
    fullName: yup.string().required("Имя ползователья обязательна!"),
    password: yup.string().min(6, "Пароль должен быть более 6 символов").required("Пароль обязателный!"),
    confirmPassword: yup.string().required("Подтверждение пароля обязательно")
  })
  
export const LoginValidations = yup.object().shape({
    email: yup.string().email("Неправильная почта").required("Почта обязательная!"),
    password: yup.string().min(6, "Пароль должен быть более 6 символов").required("Пароль обязателный!"),
  })

export const EmailValidations = yup.object().shape({
    email: yup.string().email("Неправильная почта").required("Почта обязательная!"),
  })