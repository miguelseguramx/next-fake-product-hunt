import React from 'react';
import Link from 'next/link'
import { Product, ProductDescription, ProductImage, Title, Description, Coments, Image, Votes } from '../StyleComponents/ProductDetails';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';

const ProductDetails = ({ product }) => {
  const { id, comments, created, description, enterprise, name, url, urlImage, votes, } = product
  return (
    <Product>
      <ProductImage>
        <Image src={urlImage} alt={name}/>
      </ProductImage>
      <ProductDescription>
        <Link href="/productos/[id]" as={`/productos/${id}`}> 
          <Title>{name}</Title>
        </Link>
        <Description>{description}</Description>
        <Coments>
          <img src="/static/img/coment.png" alt="comentarios"/>
          <p>{comments.length} Comentarios</p>
        </Coments>
        <p>Publicado hace: { formatDistanceToNow( new Date(created), {locale: es} )} </p>
      </ProductDescription>
      <Votes>
        <div>
          <p className="votes__simbol">&#9650;</p>
          <p>{votes}</p>
        </div>
      </Votes>
    </Product>
  );
};

export default ProductDetails;
