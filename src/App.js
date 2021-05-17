import React, { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Routes from './routes/Routes';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
