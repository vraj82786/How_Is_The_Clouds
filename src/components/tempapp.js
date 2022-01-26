import React from 'react';
import { useEffect, useState } from 'react';
import "./CSS/style.css";


const Tempapp = () => {

  const [city, setCity] = useState("");
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=cb43f9b983978a066202485df4f619d5`;
      const response = await fetch(url);
      const data = await response.json();
      setCity(data.main)
      console.log(data);
    };
    fetchApi();
  }, [search])

  return (
    <>
      <div className="box">
        <div className='Heading'>
        <i className="fas fa-sun icon"></i>
          <h1>My Weather</h1>
        </div>
        <div className="inputData">
          <input type="search" value={search} className='inputFeild' onChange={(event) => { setSearch(event.target.value) }} />
        </div>
        {!city ? (<p className='errorMsg'> No Data Found</p>) : (
          <>
            <div className='info'>
              <h2 className="location">
                <i className="fas fa-street-view"></i>{search}
              </h2>
              <h1 className='temp'>
                {city.temp}<>&deg;</>C
              </h1>
              <div className='tempmin_max'>
                <h3>Min : {city.temp_min}<>&deg;</>Cel </h3>
                <h3>Max : {city.temp_max}<>&deg;</>Cel </h3> 
              </div>
            </div>
          </>
        )}
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
    </>
  )
};

export default Tempapp;
