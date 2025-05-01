import React,{ useState} from 'react';
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

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

      return (
    <div>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo}/>
    </div>
   
  )
}



