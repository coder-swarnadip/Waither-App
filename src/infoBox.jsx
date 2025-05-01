import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './infoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AirIcon from '@mui/icons-material/Air';

export default function InfoBox({ info, aqiData }) {
    const [showAQIDetails, setShowAQIDetails] = useState(false);
    const CLOUD_URL = "https://images.unsplash.com/photo-1678038069651-c2fd8f978fc9?q=80&w=1971&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1608357032732-1e8cb6291d1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1639426980676-132cf5823ef5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1558920778-a82b686f0521?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const CLEAR_URL = "https://images.unsplash.com/photo-1702383295296-29d95af73a68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    /* let info = {
        city: "kolkata",
        description
            :
            "overcast clouds",
        feelsLike
            :
            28.63,
        humidity
            :
            60,
        temp
            :
            27.42,
        tempMax
            :
            27.42,
        tempMin
            :
            27.42
    } */
    return (
        <div className='info-box'>

            <div className='card-container'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 && info.cloud > 84
                            ? RAIN_URL
                            : info.temp > 25
                                ? HOT_URL
                                : info.temp < 12
                                    ? COLD_URL
                                    : info.temp >= 15 && info.temp <= 25 && info.humidity > 25 && info.humidity < 60
                                        ? CLEAR_URL
                                        : 51 < info.cloud < 84 ? CLOUD_URL : CLEAR_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 && info.cloud > 84
                                ? <ThunderstormIcon />
                                : info.temp > 25
                                    ? <ThermostatIcon />
                                    : info.temp < 12
                                        ? <AcUnitIcon />
                                        : info.temp >= 15 && info.temp <= 25 && info.humidity > 25 && info.humidity < 60
                                            ? <WbSunnyIcon />
                                            : 51 < info.cloud < 84 ? <CloudQueueIcon /> : <WbSunnyIcon />}

                        </Typography>
                        <p>Country code:{info.country}</p>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>


                            <div className="air">
                                < AirIcon /> &nbsp;&nbsp;<h4>Air Quality = {aqiData.main && aqiData.components && (
                                    aqiData.main.aqi === 1 ? "Good" :
                                        aqiData.main.aqi === 2 ? "Fair" :
                                            aqiData.main.aqi === 3 ? "Moderate" :
                                                aqiData.main.aqi === 4 ? "Poor" :
                                                    aqiData.main.aqi === 5 ? "Very Poor" : "Unhealthy"
                                )}</h4>
                            </div>





                            <p>Temperature = <b>{info.temp}&deg;C</b></p>
                            <p>Humidity = {info.humidity}%</p>
                            <p>Min Temperature = {info.tempMin}&deg;C</p>
                            <p>Max Temperature = {info.tempMax}&deg;C</p>
                            <p>weather can be described as <i><b>{info.description}</b></i> and Feels Like = {info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className="btn" size="small" onClick={() => setShowAQIDetails(!showAQIDetails)}>{!showAQIDetails ? "Show AQI details" : "Hide AQI details"}</Button>

                    </CardActions>
                    {showAQIDetails && aqiData.components && (
                        <div style={{ marginLeft: '10px' }}>
                            <p><b> {aqiData.main && aqiData.components && (
                                    aqiData.main.aqi === 1 ? "Good" :
                                        aqiData.main.aqi === 2 ? "Fair" :
                                            aqiData.main.aqi === 3 ? "Moderate" :
                                                aqiData.main.aqi === 4 ? "Poor" :
                                                    aqiData.main.aqi === 5 ? "Very Poor" : "Unhealthy"
                                )} air quality.</b></p>
                            <p>PM2.5: {aqiData.components.pm2_5} µg/m³</p>
                            <p>PM10: {aqiData.components.pm10} µg/m³</p>
                            <p>CO: {aqiData.components.co} µg/m³</p>
                            <p>NO₂: {aqiData.components.no2} µg/m³</p>
                            <p>O₃: {aqiData.components.o3} µg/m³</p>
                            <p>SO₂: {aqiData.components.so2} µg/m³</p>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    )
}
