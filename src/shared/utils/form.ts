export function checkRequired(value: any): boolean | string {
  return !!value || 'el campo es requerido'
}
