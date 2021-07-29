import React from 'react'
import { useSelector } from 'react-redux'

const Weathercard = () => {
  const Data =useSelector((state) =>state.placeData)
  console.log(Data.location)
    // const Data =""
    const d= Date()
    
    return (
        <div>
             <div>
            {Data.location?
              // data section
              <div>
                <div>{Data.location.name},{Data.location.country}</div>
                <img src={Data.current.condition.icon} />
                <div>{Data.current.condition.text}</div>
                <div>{Data.current.temp_c}°c</div>
                <div>{d.toString()}</div>
                <div>
                  {/* wind data */}
                  <div class="wind-pressure">
                    <ul border="2 " align="left">

                      <li>wind speed:{Data.current.wind_kph}{""}kph</li>


                      <li>wind degree:{Data.current.wind_degree}°</li>
                      <li>wind diraction:{Data.current.wind_dir}</li>

                    </ul>
                    <ul border="" align="left">

                      <li>Pressure:
                        {Data.current.pressure_mb}{""}mb</li>


                      <li>Precipitation:{Data.current.precip_mm}{""}mb</li>


                      <li>Humidity:{Data.current.humidity}{""}mb</li>

                    </ul>
                  </div>

                </div>
              </div>

              : <div>data not found</div>
            }
          </div>
        </div>
    )
}

export default Weathercard
