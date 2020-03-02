import React, { useState } from 'react';
import styled from '@emotion/styled';
import Router from 'next/router';

const FormContainer = styled('form')`
  position: relative;

  input{
    border: 1px solid var(--gray-three);
    padding: 1rem;
    min-width: calc(100vw - 110px);
    
    @media (min-width: 576px) {
      min-width: calc(100vw - 100px);
    }

    @media (min-width: 768px) {
      min-width: 300px;
    }
  }
  button{
    height: 3rem;
    width: 3rem;
    display: block;
    background-size: 4rem;
    background-image: url(/static/img/search.png);
    background-repeat: no-repeat;
    position: absolute;
    background-position: 0;
    right: 1rem;
    top: 5px;
    background-color: white;
    text-indent: -9000px;
    border: none;
  }

  button:hover {
    cursor: pointer
  }

  button:focus {
    outline: none;
  }
`;

const Search = () => {
  const [ search, setSearch ] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') return

    // Redirect the user to /search
    Router.push({
      pathname: '/busqueda',
      query: { q : search }
    })
  }

  return (
    <FormContainer
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Buscar productos"
        onChange={e => setSearch(e.target.value)}
      />
      <button type="submit">Send</button>
    </FormContainer>
  );
};

export default Search;