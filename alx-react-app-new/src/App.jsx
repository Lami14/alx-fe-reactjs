// src/App.jsx
import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter'; // <- Add this line

function App() {
  return (
    <div>
      <Header />
      <UserProfile name="Lamla Mhlana" age={23} bio="Frontend dev from SA" />
      <MainContent />
      <Counter /> {/* <- Add this line */}
      <Footer />
    </div>
  );
}

export default App;
