import React, { useState } from 'react';
import SearchBox from './SearchBox.jsx';
import InfoBox from './infoBox.jsx';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        /*  city: "kolkata",
         country: "India",
         description: "overcast clouds",
         feelsLike: 28.63,
         humidity: 60,
         temp: 27.42,
         tempMax: 27.42,
         tempMin: 27.42 */


    });

    let [aqiData, setAqiData] = useState({
       
    });


    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    let updateAqi = (result) => {
        setAqiData(result);
       // console.log(result);
    }


    return (
        <div>
            <SearchBox updateInfo={updateInfo} updateAqi={updateAqi} />
            <InfoBox info={weatherInfo} aqiData={aqiData} />
        </div>

    )
}



