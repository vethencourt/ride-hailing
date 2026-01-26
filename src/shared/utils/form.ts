export function checkRequired(value: any): boolean | string {
  return !!value || 'el campo es requerido'
}

export function checkEmail(val: string): boolean | string {
  const emailPattern =
    /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailPattern.test(val) || 'Por favor ingresa un correo electrónico válido'
}

export function checkPassword(password: string) {
  return (val: string): boolean | string =>
    val === password || 'Las contraseñas deben coincidir'
}
