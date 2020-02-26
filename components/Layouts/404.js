import React from 'react';
import styled from '@emotion/styled';

const ErrorContainer = styled('div')`
  height: calc(100vh - 178px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1, h2 {
    text-align: center;
  }
`;

const Error404 = () => {
  return (
    <ErrorContainer>
      <h1>Ups... Error 404</h1>
      <h2>Este producto no existe</h2>
    </ErrorContainer>
  );
};

export default Error404;