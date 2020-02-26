import React, { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import Layout from '../../components/Layouts/Layout';
import { FirebaseContext } from '../../firebase/index';
import Error404 from '../../components/Layouts/404';
import { ProductContainer } from '../../components/StyleComponents/Product';
import { InputSpace, Submit } from '../../components/StyleComponents/Form';
import Button from '../../components/StyleComponents/Button';

const Product = () => {
  const [ hasVoted, setHasVoted ] = useState(false)
  const [ comment, setComment ] = useState({ content: '' })
  const [ product, setProduct ] =  useState({}) 
  const [ error, setError ] = useState(false)
  const [ consultDB, setConsultDB ] = useState(true)
  // Get the actual query
  const router = useRouter()
  const { query: {id} } = router;
  
  // connect to firebase
  const { firebase, user } = useContext(FirebaseContext);

  useEffect(() => {
    if (id && consultDB) {
      const getProduct = async () => {
        const productQuery = await firebase.db.collection('products').doc(id);
        const product = await productQuery.get();
        if (product.exists) {
          setProduct(product.data())
          setConsultDB(false)
        } else {
          setError(true)
        }
      }
      getProduct()
    } 
  }, [id])

  // TODO: Add a beautiful loading component 
  if (Object.keys(product).length === 0 && !error) return <p>Cargando...</p>

  const { comments, created, description, enterprise, name, url, urlImage, votes, author, haveVoted } = product

  const handleVote = () => {
    if (!user) {
      return router.push('/login')
    }
    const newTotal = votes + 1
    
    // Check if the user have voted
    if (haveVoted.includes(user.uid)) {
      setHasVoted(true)
      return
    }

    // Save that the user has voted
    const hasVoted = [...haveVoted, user.uid]

    // Update database
    firebase.db.collection('products').doc(id).update({ 
      votes: newTotal,
      haveVoted: hasVoted,
    })
    
    // Update the state
    setProduct({
      ...product,
      votes: newTotal,
    })

    setConsultDB(true);
  }

  // Funciones para crear comentario 
  const handleChange = e => {
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    })
  }

  // Check if the comment is created by the author of the product 
  const isAuthor = id => {
    if (author.id === id) {
      return true
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(!user){
      return router.push('/login')
    }
    // Aditional information for the comment
    comment.userId = user.uid
    comment.userName = user.displayName

    // Add comment to the original array
    const newComments = [...comments, comment]

    // Update the db
    firebase.db.collection('products').doc(id).update({ 
      comments: newComments,
    })

    // Update the state
    setProduct({
      ...product,
      comments: newComments,
    })

    setConsultDB(true);
  }

  // Check if the user authenticated is th author of the product
  const canDelete = () => {
    if (!user) return false;
    if (author.id === user.uid) return true
  }

  const deleteProduct = async () => {
    if (!user) {
      return router.push('/login')
    }
    if (author.id !== user.uid) {
      return router.push('/login')
    }
    try {
      await firebase.db.collection('products').doc(id).delete()
      router.push('/')
    } catch (error) {
      console.log(error);
    }
  }

  const { content } = comment
  return (
    <Layout>
      <>
        { error ? <Error404 /> : (
          <ProductContainer>
            <h1 className="product__title">{name}</h1>
            <div className="product__container">
              <div>
                <p>Publicado hace: { formatDistanceToNow( new Date(created), {locale: es} )} </p>
                <p>Por: {author.name} de {enterprise} </p>
                <img src={urlImage} />
                <p>{description}</p>
                
                { user && (
                  <>
                    <h2>Agrega tu comentario</h2>
                    <form
                      onSubmit={handleSubmit}
                    >
                      <InputSpace>
                        <input
                          type="text"
                          name="content"
                          value={content}
                          onChange={handleChange}
                          placeholder="Ingresa tu commentario"
                        />
                      </InputSpace>
                      <Submit
                        type="submit"
                        value="Agregar comentario"
                      />
                    </form>
                  </>
                )}

                <h2 className="comment__title">Comentarios</h2>
                { comments.length === 0 ? <p>Aun no hay commentarios</p> : (
                  <ul>
                    {comments.map((comment, i) => (
                      <li key={comment.userId + i} className="comment__content">
                        <p>{comment.content}</p>
                        <div className="author__details">
                          <p>
                            Escrito por  <span>{comment.userName}</span>
                          </p>
                          { isAuthor(comment.userId) && <p className="author__details-isauthor">Es creador</p>}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                
              </div>
              <aside>
                <Button
                  target="_blank"
                  callToAction="true"
                  href={url}
                >Visitar Url</Button>
                
                <div className="product__votes">
                  <p className="product__votes-p">{votes} Votos</p>
                  { user && ( 
                    <Button
                      onClick={handleVote}
                    >
                      Votar
                    </Button>
                  )}
                  { hasVoted && 
                    <p className="product__votes-voted">Ya has votado por este producto</p>}
                </div>
              </aside>
            </div>

            { canDelete() &&
              <div className="product__delete">
                <Button
                  onClick={deleteProduct}
                  callToAction="true"
                >Eliminar producto</Button>
              </div>
            }
          </ProductContainer>
        )}
      </> 
    </Layout>
  );
};

export default Product;