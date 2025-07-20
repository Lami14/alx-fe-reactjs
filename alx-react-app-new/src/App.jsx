import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={30} bio="Frontend developer who loves exploring new cities." />
      <Footer />
    </div>
  );
}

export default App;
