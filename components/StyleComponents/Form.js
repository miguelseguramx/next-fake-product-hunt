import styled from '@emotion/styled';

export const Form = styled('form')`
  max-width: 600px;
  width: 95%;
  margin: 5rem auto;

  fieldset {
    margin: 2rem 0;
    border: 1px solid var(--gray-three);
    font-size: 1.7rem;
    padding: 2rem;
  }
`;

export const InputSpace = styled('div')`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  
  label {
    flex: 0 0 100px;
    font-size: 1.8rem;
    @media (min-width: 576px) {
      flex: 0 0 150px;
    }
  }

  textarea,
  input {
    flex: 1;
    padding: 1rem;
  }

  textarea {
    height: 300px;
  }
`;

export const Submit = styled('input')`
  background-color: var(--orange);
  width: 100%;
  padding: 1.5rem;
  text-align: center;
  color: #FFF;
  text-transform: uppercase;
  border: none;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;

  &:hover{
    cursor: pointer;
  }
`;

export const TitleCenter = styled('h1')`
  text-align: center;
  margin-top: 5rem;
`;

export const Error = styled('p')`
  background-color: red;
  padding: 1rem;
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  font-size: 1.4rem;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  margin: 2rem 0;
`;