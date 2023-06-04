import Banner from './components/Banner';
import Footer from './components/Footer';
import Slider from './components/Slider';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {

  return (
    <div className="App">
      <Banner />
      <Slider />
      <Home />
      <Footer />
      <GlobalStyle />
    </div>
  )
}

export default App
