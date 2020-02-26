import styled from '@emotion/styled';

const HeaderContainer = styled('header')`
  border-bottom: 2px solid var(--gray-three);
  padding: 1rem 0; 

  .container {
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    font-family: 'PT Sans', serif;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }

  .container__left,
  .container__right {
    display: flex;
    align-items: center;
  }

  .container__left {
    flex-wrap: wrap;
  }

  .container__right {
    justify-content: space-around;
  }

  .container__left-logo {
    color: var(--orange);
    font-size: 4rem;
    line-height: 0;
    font-weight: 700;
    font-family: 'Roboto Slab', serif;
    margin: 0 2rem;
  }

  .container__right-name {
    margin-right: 2rem;
  }
`;

export default HeaderContainer;
