import React, { useContext } from 'react';
import Link from 'next/link';
import Search from '../UI/Search';
import Navigation from './Navigation';
import Button from '../StyleComponents/Button';
import HeaderContainer from '../StyleComponents/HeaderContainer';
import { FirebaseContext } from '../../firebase/index';

const Header = () => {
  const { user, firebase } = useContext(FirebaseContext);
  return (
    <HeaderContainer>
      <div className="container">
        <div className="container__left">
          <Link href="/">
            <p className="container__left-logo">P</p>
          </Link>
          <Search />
          <Navigation />
        </div>
        <div className="container__right">
          { user ? (
            <>
              <p className="container__right-name">Hola: {user.displayName}</p>
              <Button callToAction="true" onClick={() => firebase.LogOut()}> 
                Cerrar sesion
              </Button>
            </>
          ) : (
            <>
              <Link href="/login">
                <Button callToAction="true">Login</Button>
              </Link>
              <Link href="/sing-up">
                <Button>Crear una cuenta</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;