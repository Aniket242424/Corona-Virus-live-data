import React from 'react';

import { Cards, CountryPicker, Chart, Footer, Header, About, Help } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/Covid-19.png';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedin, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';

library.add(faEnvelope, faKey, faFacebookF, faLinkedin);


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <BrowserRouter>
<Header />
        <div className={styles.container}>
          
          <img className={styles.image} src={image} alt="COVID-19" />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Switch>
            <Route exact path="/" render={() => <Cards data={data} />} />

            <Route exact path="/chart" render={() =>
              <Chart data={data} country={country} />} />

            <Route exact path="/about" render={() => <About />} />
            <Route exact path="/help" render={() => <Help />} />
          </Switch>

        </div>
        <Footer />


      </BrowserRouter>
    );
  }
}

export default App;

{/*       
      <div className={styles.container}>
        
        
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        <Footer />
      </div> */}