export const TEXTS = {
  labels: {
    firstname: "Nombre",
    lastname: "Apellido",
    dni: "DNI",
    email: "Correo",
    password: "Contraseña",
    confirmPassword: "Confirmar",
  },
  placeholders: {
    firstname: "Nombre",
    lastname: "Apellido",
    dni: "12345678",
    email: "correo@ejemplo.com",
    password: "••••••••",
    confirmPassword: "••••••••",
  },
  buttons: {
    submit: "Crear cuenta",
    submitting: "Creando cuenta...",
  },
  links: {
    haveAccount: "¿Ya tienes una cuenta?",
    login: "Inicia sesión",
    termsPrefix: "Al crear una cuenta, aceptas nuestros",
    terms: "Términos y condiciones",
  },
  errors: {
    firstnameRequired: "El nombre es obligatorio",
    lastnameRequired: "El apellido es obligatorio",
    dniRequired: "El DNI es obligatorio",
    dniMax: "El DNI no puede tener más de 12 caracteres",
    dniInvalid: "El DNI solo puede contener números",
    emailInvalid: "Email inválido",
    passwordShort: "Debe tener al menos 6 caracteres",
    confirmPasswordShort: "Debes confirmar la contraseña",
    passwordsMismatch: "Las contraseñas no coinciden",
  },
};

export const TEXTS_VERIFICATION = {
  title: "¡Ya casi estás! Revisa tu correo",
  description:
    "Te enviamos un enlace de verificación a tu dirección de correo electrónico. Por favor, haz clic en él para activar tu cuenta.",
  note: "El enlace es válido por 24 horas.",
  buttons: {
    resend: "Reenviar correo",
    backToLogin: "Volver al inicio de sesión",
  },
};
