import React, {Component} from 'react';
import {Switch,Link,Route,Redirect} from 'react-router-dom';
import axios from 'axios';
import queryString from 'querystring';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import trending from './components/trending';
import  movies from './components/movies';
import  series from './components/series';
import NotFound from './components/not-found';
import NavBar from './components/Navbar';
import movieId from './components/movieid';
import seriesId from './components/seriesid';
import search from './components/search';

class App extends Component {
  state = { 
      
  };

    // Functional components can be called same as state components
    //Redirect always works when use only in Render Function
  render(){ 
    return ( 
      <div>
      <NavBar/>
      <Switch>
      <Route path='/navigation' component={NavBar}/>
      <Route path="/movie/:id" component={movieId}/> 
      <Route path="/tv/:id" component={seriesId}/> 
      <Route path="/trending" component={trending}/>
      <Route path="/movies"   component={movies}/>  
      <Route path="/series"   component={series}/>
      <Route path="/search"   component={search}/>
      <Redirect from="/" exact to="/trending"/>
      <Route path="/not-found"  component={NotFound}/>
      <Redirect to="/not-found"/>
      </Switch>
      </div>
    );
  }
}
 
export default App;
