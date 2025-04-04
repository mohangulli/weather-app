import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp()
{
    const [weatherInfo,setWeatherInfo]=useState(
        {
            city:"wandeland",
            feelslike:24.68,
            temp:25.05,
            tempMin:25.05,
            humidity:47,
            tempMax:25.05,
            weather:"haze",
        }
    )
    let UpdateInfo=(newInfo)=>{
setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}} >
<h2>Weather app by mohan</h2>
<SearchBox  UpdateInfo={UpdateInfo}/>
<InfoBox info={weatherInfo} />
        </div>
    )
}