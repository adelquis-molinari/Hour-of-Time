import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import CircleLoader from "react-spinners/CircleLoader";
import './App.css';
import Nav from '../components/Nav/Nav';
import Cards from '../components/Card/Cards';
import About from '../components/About/About';
import Ciudad from '../components/Ciudad/Ciudad';



function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState((false));
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },500)
  },[])
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
      <div className="App">
        <Route path='/' render={() => <Nav onSearch={onSearch}/>} />
        {
          loading ?(
            <div className='d-loader'>
          <CircleLoader size={150} color={'#E2D21C'} loading={loading} />
          </div>
          ) :(
            <>
        <Route path='/about' render={()=> <About/> } />
        <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />
        <Route exact path='/ciudad/:ciudadId' render={({match}) => <Ciudad city={onFilter(match.params.ciudadId)} />} />
        </>
          )
}
      </div>
  );
}

export default App;
