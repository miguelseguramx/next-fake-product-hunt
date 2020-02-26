import React from 'react';
import Header from './Header';
import { Global, css } from '@emotion/core';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          :root{
            --gray-principal: #3d3d3d;
            --gray-secondary: #6F6F6F;
            --gray-three: #e1e1e1;
            --orange: #DA552F; 
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: 'PT Sans', sans-serif;
          }

          h1, h2, h3{
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }
          h1, h2{
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }
          h3{
            font-family: 'PT Sans', sans-serif;
          }
          ul{
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a{
            text-decoration: none;
          }

          img {
            max-width: 100%;
          }
        `}
      />
        
      <Head>
        {/* <div> */}
          <title>Product Hunt</title>
          <link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700|Roboto+Slab:400,700&display=swap" rel="stylesheet" />
          <link href="/static/css/app.css" rel="stylesheet" />
          <link href="/static/css/normalize.css" rel="stylesheet" />
        {/* </div> */}
      </Head> 

      <Header />
      <main>
        {props.children}
      </main>
    </>
  );
};

export default Layout;