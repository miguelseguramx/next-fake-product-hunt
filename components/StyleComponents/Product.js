import styled from '@emotion/styled';

export const ProductContainer = styled('div')`
  max-width: 1200px;
  width: 95%;
  padding: 1rem 0;
  margin: 0 auto;

  .product__title {
    text-align: center;
    margin-top: 5rem;
  }

  .product__container {
    @media (min-width:768px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 2rem;
    }
  }

  .comment__title {
    margin: 2rem 0;
  }

  .comment__content {
    border: 1px solid var(--gray-three);
    padding: 2rem;
  }

  .comment__content span {
    font-weight: bold;
  }

  .author__details {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .author__details-isauthor {
    padding: .5rem 2rem;
    background-color: var(--orange);
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
  }

  .product__votes {
    margin-top: 8rem;
  }

  .product__votes-p {
    text-align: center
  }

  .product__votes-voted {
    background-color: red;
    padding: 1rem;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 1.4rem;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    margin: 2rem 0;
  }

  .product__creator {
    padding: .5rem 2rem;
    background-color: #DA552F;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    display: inline-block;
    text-align: center;
  }

  .product__delete {
    margin: 3rem 0rem;
  }
`;
