import React from 'react'
import { ProductContainerLoading } from '../StyleComponents/Product'
import { InputSpace } from '../StyleComponents/Form'
import Button from '../StyleComponents/Button'

const LoadingProduct = () => {
  return (
    <ProductContainerLoading>
      <h1 className="product__title--loading">
        <span className="loading__box loading__box--title"></span>
      </h1>
      <div className="product__container">
        <div>
          <p className="details__box">Publicado hace: <span className="loading__box loading__box--details"></span> </p>
          <p className="details__box">Por: <span className="loading__box loading__box--details"></span> </p>
          <div className="loading__box loading__box--image"></div>
          <div className="description__loading">
            <div className="loading__box loading__box--1"></div>
            <div className="loading__box loading__box--2"></div>
            <div className="loading__box loading__box--3"></div>
            <div className="loading__box loading__box--4"></div>
            <div className="loading__box loading__box--5"></div>
          </div>
         
          <h2>Agrega tu comentario</h2>
          <form readOnly>
            <InputSpace>
              <input placeholder="Ingresa tu commentario" />
            </InputSpace>
            <Button callToAction="true">Agregar comentario</Button>
          </form>

          <h2 className="comment__title">Comentarios</h2>
          <div className="comment--loading"></div>
          <div className="comment--loading"></div>
          <div className="comment--loading"></div>
          
        </div>
        <aside>
          <Button callToAction="true">Visitar Url</Button>          
          <div className="product__votes">
            <p className="product__votes--loading-p"> <span className="loading__box loading__box--votes"></span> Votos</p>
            <Button>
              Votar
            </Button>
          </div>
        </aside>
      </div>
    </ProductContainerLoading>
  );
};

export default LoadingProduct;