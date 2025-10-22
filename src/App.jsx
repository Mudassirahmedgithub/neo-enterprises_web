// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your pages
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Testimonials from './pages/testimonials';
import Products from './pages/Product';
import About from './pages/AboutUs';
import Contact from './pages/Contact';
import Flax from './components/products/flax';
import Granites from './components/products/granite';
import Clove from './components/products/clove';
import Cardamom from './components/products/cardomon';
import BlackPepper from './components/products/blackPepper';
import SoyabeanFlakes from './components/products/Soyabeen';
import SoyabeanMeal from './components/products/soyabeanMeal';
import Makhana from './components/products/lotusSeeds';
import GraniteNeoChocolate from './components/products/granite/NeoChocolate';
import GraniteNeoGalaxy from './components/products/granite/NeoGalaxy';
import GraniteNeokTize from './components/products/granite/NeokTize';
import GraniteNeoTanBlue from './components/products/granite/NeoTanBlue';
import GraniteNeoTanRed from './components/products/granite/NeoTanRed';
import GraniteNeoTigerShade from './components/products/granite/NeoTigerShade';
import GraniteNeoTomato from './components/products/granite/NeoTomato';
import StarBlue from './components/products/granite/StarBlue';

// Import Header/Footer
import Header from './components/Header';
import Footer from './components/footer';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='font-sans text-gray-800'>
        {/* Header */}
        <Header />

        {/* Routes */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/testimonials' component={Testimonials} />
          <Route exact path='/products/granite' component={Granites} />
          <Route exact path='/products/clove' component={Clove} />
          <Route exact path='/products/cardomon' component={Cardamom} />
          <Route exact path='/products/blackPepper' component={BlackPepper} />
          <Route exact path='/products/soyabeanMeal' component={SoyabeanMeal} />
          <Route exact path='/products/Soyabeen' component={SoyabeanFlakes} />
          <Route exact path='/products/lotusSeeds' component={Makhana} />
          <Route exact path='/products/flax' component={Flax} />
          <Route exact path='/products/granite/NeoChocolate' component={GraniteNeoChocolate} />
          <Route exact path='/products/granite/NeoGalaxy' component={GraniteNeoGalaxy} />
          <Route exact path='/products/granite/NeokTize' component={GraniteNeokTize} />
          <Route exact path='/products/granite/NeoTanBlue' component={GraniteNeoTanBlue} />
          <Route exact path='/products/granite/NeoTanRed' component={GraniteNeoTanRed} />
          <Route exact path='/products/granite/NeoTigerShade' component={GraniteNeoTigerShade} />
          <Route exact path='/products/granite/NeoTomato' component={GraniteNeoTomato} />
          <Route exact path='/products/granite/StarBlue' component={StarBlue} />
          <Route path='/products' component={Products} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
