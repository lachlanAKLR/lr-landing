import React from 'react';
import Nav from '../components/Nav';
import GlobalStyles from '../styles/GlobalStyles'; 
import { LandingImage } from '../components/LandingImage';


export default function HomePage() { 
  return ( 
    <>
      <GlobalStyles />
      <Nav />
      <LandingImage />  
    </>
  );
}
 