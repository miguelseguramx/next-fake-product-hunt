import styled from '@emotion/styled';

export const Product = styled('li')`
  padding: 2rem;
  margin: 0rem 0rem 2rem;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) { 
    padding: 4rem;
    display: grid;
    grid-template-columns: 1fr 4fr .6fr;
    column-gap: 2rem;
  }
`

export const ProductImage = styled('div')`

`;

export const ProductDescription = styled('div')`

`;

export const Title = styled('a')`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  :hover {
    cursor: pointer;
  }
`;

export const Description = styled('p')`
  font-size: 1.7rem;
  margin: 0;
  color: #888;
`

export const Coments = styled('div')`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    padding: .3rem 1rem;
    margin-right: 2rem;
  }
  img {
    width: 2rem;
    margin-right: 2rem;
  }
  p {
    font-size: 1.6rem;
    margin-right: 1rem;
    font-weight: 700;
    &:last-of-type {
        margin: 0;
    }
  }
`;

export const Image = styled('img')`
  width: 200px;
`

export const Votes = styled('div')`
  text-align: center; 
  border: 2px solid var(--gray-three);
  width: 100%;

  div {
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    display: block;
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }

 .votes__simbol {
   font-size: 3rem;
 }

  @media (min-width: 768px) { 
    padding: 2rem 2rem;
  }
`;
