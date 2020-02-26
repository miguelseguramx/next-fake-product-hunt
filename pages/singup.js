import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layouts/Layout';
import { Form, InputSpace, TitleCenter, Submit, Error } from '../components/StyleComponents/Form';

import firebase from '../firebase/index';

// Handle Form
import useForm from '../hooks/useForm';
import validationSingUp from '../validations/validationSingUp';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
}

const SingUp = () => {
  const [ error, setError ] = useState(false)  
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur } = useForm(INITIAL_STATE, validationSingUp, createAccount) 

  const { name, email, password } = values

  async function createAccount () {
    try {
      await firebase.SingUp(name, email, password)
      Router.push('/')
    } catch (error) {
      setError(error.message)
      console.error('Hubo un error al crear el usuario', error.message)
    }
  }

  return (
    <Layout>
      <>
        <TitleCenter>
          Crear cuenta
        </TitleCenter>
        <Form onSubmit={handleSubmit} noValidate>
          <InputSpace>
            <label htmlFor="name">Nombre</label>
            <input
              id="name"
              type="text"
              placeholder="Escribe tu nombre aqui"
              value={name}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </InputSpace>
          { errors.name && <Error>{errors.name}</Error> }
          <InputSpace>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="algo@example.com"
              value={email}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </InputSpace>
          { errors.email && <Error>{errors.email}</Error> }
          <InputSpace>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="Ingresa una contraseña segura"
              value={password}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              />
          </InputSpace>
          { errors.password && <Error>{errors.password}</Error> }
          { error && <Error>{error}</Error>}
          <Submit
            type="submit"
            value="Crear cuenta"
          />
        </Form>
      </>
    </Layout>
  );
};

export default SingUp