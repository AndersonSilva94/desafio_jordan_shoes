import Banner from './components/Banner';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Slider from './components/Slider';
import StoreTitle from './components/StoreTitle';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

function App() {

  return (
    <div className="App">
      <Banner />
      <StoreTitle />
      <Slider />
      <Home />
      <Footer />
      <Checkout />
      <GlobalStyle />
    </div>
  )
}

export default App
