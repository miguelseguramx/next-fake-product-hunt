import styled from '@emotion/styled';

const Nav = styled('nav')`
  padding-left: 0rem;
  margin: 1rem auto;

  a {
    font-size: 1.8rem;
    margin-left: 2rem;
    color: var(--gray-secondary);
    font-family: 'PT Sans', sans-serif;

    &:first-of-type {
      margin-left: 0rem;
    }

    &:last-of-type{
      margin-right: 0;
    }
  }

  @media (min-width: 768px) {
    margin: 0;
    padding-left: 2rem;

    a:first-of-type {
      margin-left: 2rem;
    }
  }
`;

export default Nav
