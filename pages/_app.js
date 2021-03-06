import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase/index';
import useAuth from '../hooks/useAuth';

const MyApp = ({ Component, pageProps } ) => {
  const user = useAuth()
  return (
    <FirebaseContext.Provider
      value={{
        firebase,
        user
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  )
}

export default MyApp;
