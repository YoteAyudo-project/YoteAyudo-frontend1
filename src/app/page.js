
import React from 'react';
import Header from '../components/Headercomponent/Header.jsx';
import MainComponent from '../components/MainComponent/MainComponent.jsx';
import Footer from '../components/FooterComponent/Footer.jsx';

export default function Home() {
  return (
    <main className="h-full mx-auto w-full">
      <Header />
      < MainComponent/>
      <Footer />
    </main>
  );
}
