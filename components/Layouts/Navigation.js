import React, { useContext } from 'react';
import Link from 'next/link';
import Nav from '../StyleComponents/Nav';
import { FirebaseContext } from '../../firebase/index';

const Navigation = () => {
  const { user } = useContext(FirebaseContext)
  return (
    <Nav>
      <Link href="/"><a>Inicio</a></Link>
      <Link href="/popular"><a>Populares</a></Link>
      { user && (
        <Link href="/nuevo-producto"><a>Nuevo Producto</a></Link>
      )}
    </Nav>
  );
};

export default Navigation;