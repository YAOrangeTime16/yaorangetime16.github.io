import React from 'react';
import './styles/uikit.css';
import './styles/custom.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const App = () => (
      <div className="uk-container">
          <Header />
          <Body />
          <hr />
          <Footer />
      </div>
)

export default App;