import React, { useState } from 'react';
import Router from 'next/router';
import Layout from '../components/Layouts/Layout';
import { Form, InputSpace, TitleCenter, Submit, Error } from '../components/StyleComponents/Form';

import firebase from '../firebase/index';

// Handle Form
import useForm from '../hooks/useForm';
import validationLogIn from '../validations/validationLogIn';

const INITIAL_STATE = {
  email: '',
  password: '',
}

const Login = () => {
  const [ error, setError ] = useState(false)  
  const {
    values,
    errors,
    handleSubmit,
    handleChange,
    handleBlur } = useForm(INITIAL_STATE, validationLogIn, loginToAccount) 

  const { email, password } = values

  async function loginToAccount () {
    try {
      await firebase.LogIn(email, password)
      Router.push('/')
    } catch (error) {
      setError(error.message)
      console.error('Hubo un error al ¿autenticar el usuario', error.message)
    }
  }

  return (
    <Layout>
      <>
        <TitleCenter>
          Iniciar sesion
        </TitleCenter>
        <Form onSubmit={handleSubmit} noValidate>
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
              placeholder="Ingresa tu contraseña"
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
            value="Iniciar Sesion"
          />
        </Form>
      </>
    </Layout>
  );
};

export default Login
