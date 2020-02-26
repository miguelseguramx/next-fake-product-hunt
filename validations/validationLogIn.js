export default function validationLogIn(values) {
  let errors = {} ;
  const { email, password } = values

  if (!email) {
    errors.email = "El email es obligatorio"
  } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ) {
    errors.email = "Email no valido"
  }

  if (!password) {
    errors.password = "La contraseña es obligatoria";
  } else if ( password.length < 8 ) {
    errors.password = "La contraseña debe ser de al menos 8 caracteres"
  } else if ( password.search(/\s/i) !== -1) {
    errors.password = "La contraseña no debe de tener espacios en blanco"
  }
  
  return errors
}
