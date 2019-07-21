import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import dateFormat from 'dateformat'
import './assets/img/favicon.ico'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css'
import './assets/scss/main.scss'
import Header from './components/presentational/header/Header'
import Footer from './components/presentational/footer/Footer'

//Lazy loading is the technique of rendering only-needed or critical user interface items.
const Home = lazy(() => import(/*webpackChunkName: "home"*/ './app/Home'))
const Compaigns = lazy(() => import(/*webpackChunkName: "Compaigns"*/ './app/Compaigns'))

window.onload = () => {
    ReactDOM.render(
        <Router>
            <div className='main'>
                <Header/>
                <Suspense fallback={<span className="loading" />}>
                    <Switch>
                        <Route exact path="/" name="Home" component={Home} />} />
                        <Route path="/compaigns" name="Compaigns" component={Compaigns} />} />
                    </Switch>
                </Suspense>
                <Footer/>
            </div>
        </Router>
    , document.getElementById('root'));
        
}
