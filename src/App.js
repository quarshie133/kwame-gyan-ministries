import './App.css';
import MainSection from './components/pages/MainSection';
import NavHeroSection from './components/pages/NavHeroSection';
import SecondMainSection from './components/pages/SecondMainSection';


function App() {
  return (
    <div className="App">
      <NavHeroSection />
      <MainSection />
      <SecondMainSection />
    </div>
  );
}

export default App;
