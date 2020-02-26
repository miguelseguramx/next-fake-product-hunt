export default function validationProduct(values) {
  let errors = {} ;
  const { name, enterprise, url, description } = values
  
  if (!name) {
    errors.name = "El nombre es obligatorio"
  }

  if (!enterprise) {
    errors.enterprise = "La empresa es obligatorio"
  }
  
  if (!url) {
    errors.url = "La url del prodcuto es obligatoria"
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(url)) {
    errors.url = "Url invalida"
  }

  if (!description) {
    errors.description = "Agrega la descripcion de tu producto"
  }
  
  return errors
}
