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

export const ProductContainerLoading = styled('div')`
    max-width: 1200px;
  width: 95%;
  padding: 1rem 0;
  margin: 0 auto;

  .product__container {
    @media (min-width:768px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      column-gap: 2rem;
    }
  }
  
  .product__title--loading {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  .product__votes--loading-p {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  .comment--loading {
    width: 100%;
    max-width: 700px;
    height: 100px;
    margin: 1rem 0;
    border-radius: 2rem;
    background-image: linear-gradient(to right,#F0F0F0,#FCFCFC,#F0F0F0);
  }

  .description__item--loading {
    width: 600px;
    height: 20px;
    background-color: black;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .loading__box {
    width: 60px;
    height: 20px;
    display: block;
    border-radius: 2rem;
    background-image: linear-gradient(to right,#F0F0F0,#FCFCFC,#F0F0F0);
  }

  .details__box {
    display: flex;
  }

  .loading__box--title {
    width: 200px;
    height: 30px;
  }
  
  .loading__box--details {
    width: 100px;
    margin: .2rem 2rem;
  }

  .loading__box--image {
    width: 100%;
    max-width: 700px;
    height: 300px;
  }

  .loading__box--votes {
    width: 20px;
    margin: 3px 10px;
  }

  .description__loading {
    max-width: 700px;
  }
  
  .description__loading div{
    margin: 1rem 0;
  }

  .loading__box--1 {
    width: 100%;
  }

  .loading__box--2 {
    width: 85%;
  }

  .loading__box--3 {
    width: 90%;
  }

  .loading__box--4 {
    width: 80%;
  }

  .loading__box--5 {
    width: 40%;
  }

`;