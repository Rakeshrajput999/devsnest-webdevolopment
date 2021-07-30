import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const fetchApi = async () => {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=b2fd3e03718846b5aac165256212707&q=${Area}`)
    const data = await res.json()
    setData(data)
      ;

  }
  const [Location, setLocation] = useState("")
  const [Area, SetArea] = useState("Delhi")
  const [Data, setData] = useState({})
  const d = new Date()


  useEffect(() => { fetchApi() }, [Area])




  return (
    <div className="App">
      <div className="parant-div">
        <div className="child-div">
          {/* search bar */}
          <div className="search-bar">
            <input className="input-bar" type="text" value={Location} onChange={(e) => {
              setLocation(e.target.value)
            }} placeholder="eg.Mungeli..." />
            <button className="input-button" onClick={() => {
              SetArea(Location)

            }}><i className="fas fa-cloud-sun"></i></button>




          </div>
          {/* -------------------------------------------------------- */}
          {/* output section */}
          <div>
            {Data.location ?
              // data section
              <div className="weather-con-div">
                <div>{Data.location.name},{Data.location.country}</div>
                <img src={Data.current.condition.icon} />
                <div>{Data.current.condition.text}</div>
                <div>{Data.current.temp_c}°c</div>
                <div>{d.toDateString()}</div>
                <div>
                  {/* wind data */}
                  <div className="wind-pressure">
                    <ul style={{listStyleType:'none'}}>
                      <li>wind-speed:{Data.current.wind_kph}{""}kph</li>
                     <li>wind-degree:{Data.current.wind_degree}°</li>
                      <li>wind-diraction:{Data.current.wind_dir}</li>
                    </ul>
                    <ul style={{listStyleType:'none'}} >
                      <li>Pressure:{Data.current.pressure_mb}{""}mb</li>
                      <li>Precipitation:{Data.current.precip_mm}{""}mm</li>
                      <li>Humidity:{Data.current.humidity}{""}</li>
                       </ul>
                  </div>
                </div>
              </div>

              : <div>data not found</div>
            }
          </div>
          {/* ---------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default App;
