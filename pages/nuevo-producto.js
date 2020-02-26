import React, { useState, useContext } from 'react';
import Router, { useRouter } from 'next/router';
import FileUploader from 'react-firebase-file-uploader';
import Layout from '../components/Layouts/Layout';
import { Form, InputSpace, TitleCenter, Submit, Error } from '../components/StyleComponents/Form';
import Error404 from '../components/Layouts/404';
import { FirebaseContext } from '../firebase/index';
// Handle Form
import useForm from '../hooks/useForm';
import validationProduct from '../validations/validationProduct';

const INITIAL_STATE = {
  name: '',
  enterprise: '',
  url: '',
  description: '',
}

const NewProduct = () => {

  // State from the images
  const [ imageName, setImage ] = useState('')
  const [ uploading, setUploading ] = useState(false)
  const [ progress, setProgress ] = useState(0)
  const [ urlImage, setUrlImage ] = useState('')

  // Errors while you're creating a´product 
  const [ error, setError ] = useState(false)  
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur } = useForm(INITIAL_STATE, validationProduct, createProduct) 

  const { name, enterprise, url, description } = values

  // Context for the crud operations
  const { user, firebase } = useContext(FirebaseContext);

  // Hook to redirect
  const router = useRouter()

  async function createProduct () {
    if (!user) {
      return router.push('/login');
    }

    // Create the object of the new product
    const product = {
      name, 
      enterprise,
      url,
      urlImage,
      description,
      votes: 0,
      comments: [],
      created: Date.now(),
      author: {
        id: user.uid,
        name: user.displayName,
      },
      haveVoted: []
    }

    firebase.db.collection('products').add(product)
    
    return router.push('/');
  }

  const handleUploadStart = () => {
    setUploading(true); 
    setProgress(0);
  }
  const handleProgress = progress => setProgress({ progress });
  const handleUploadError = error => {
    setUploading(error);
    console.error(error);
  };
  const handleUploadSuccess = filename => {
    setProgress(100);
    setUploading(false)
    setImage(filename)
    firebase
      .storage
      .ref("products")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        setUrlImage(url)
      });
  };

  if (!user) return Error404

  return (
    <Layout>
      { !user ? <Error404/> : (
        <>
          <TitleCenter>
            Crear Producto
          </TitleCenter>
          <Form onSubmit={handleSubmit} noValidate>
            <fieldset>
              <legend>Informacion General</legend>  
              <InputSpace>
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Nombre del producto"
                  value={name}
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
              </InputSpace>
              { errors.name && <Error>{errors.name}</Error> }
              <InputSpace>
                <label htmlFor="enterprise">Empresa</label>
                <input
                  id="enterprise"
                  type="text"
                  placeholder="facebook.example"
                  value={enterprise}
                  name="enterprise"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
              </InputSpace>
              { errors.enterprise && <Error>{errors.enterprise}</Error> }
              <InputSpace>
                <label htmlFor="image">Imagen</label>
                <FileUploader
                  accept="images/*"
                  id="image"
                  name="image"
                  randomizeFilename
                  storageRef={firebase.storage.ref("products")}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress={handleProgress}
                />
              </InputSpace>
              <InputSpace>
                <label htmlFor="url">Url</label>
                <input
                  id="url"
                  type="text"
                  placeholder="https://mi-producto.com"
                  value={url}
                  name="url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
              </InputSpace>
              { errors.url && <Error>{errors.url}</Error> }
            </fieldset>
            <fieldset>
              <legend>Sobre tu producto</legend>
              <InputSpace>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  placeholder="Ingresa una description"
                  value={description}
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
              </InputSpace>
              { errors.description && <Error>{errors.description}</Error> }
            </fieldset>
              { error && <Error>{error}</Error>}
              <Submit
                type="submit"
                value="Crear producto"
              />
          </Form>
        </>  
      )}
    </Layout>
  );
};

export default NewProduct
