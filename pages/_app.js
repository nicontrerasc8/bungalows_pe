import { useEffect, useState } from 'react'
import LoadingContainer from '../Components/LoadingContainer';
import NavBar from '../Components/NavBar'
import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/Home.css'
import WhatsAppButton from '../Components/WhatsAppButton';
import Footer from '../Components/Footer';
import { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import * as ga from "../lib/analytics"
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  const [Loading, setLoading] = useState(true);
  const router = useRouter()

  const handleRouteChange = (url) => {
    window.gtag('config', '[Tracking ID]', {
      page_path: url,
    });
  };

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);
  


  return (
      <>
      {Loading && <LoadingContainer/>}
      <NavBar/>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          error: {
            icon: "❌",
            duration: 5000,
            style: {
                background: "var(--white)",
                color: "var(--red)",
                fontWeight: "600",
                border: "3px solid",
            },
          },
          success:{
              icon: '🚀',
              duration: 5000,
              style: {
                  background: "#4BB543",
                  color: "var(--white)",
                  fontWeight: "600",
                  border: "3px solid",
              },
          }
        }}
      />
      <WhatsAppButton/>
      <Footer/>
    </>
  )
}

export default MyApp
