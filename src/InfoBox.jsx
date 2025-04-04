import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info})
{
    const INIT_URL="https://images.unsplash.com/photo-1711100894141-28e08ebce547?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SE9UJTIwd0VBVEhFUnxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTiUyMHdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL="https://media.istockphoto.com/id/1071567148/photo/victorian-house-during-snowstorm.webp?a=1&b=1&s=612x612&w=0&k=20&c=nKQPgaswngbJonAjZtiHS2HN4YeRFOioCH3sDVR-Wcc=";


    return(

        <div className="InfoBox">
        
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80
            ?RAIN_URL
            :info.temp>15
            ?HOT_URL:
            COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {info.humidity>80
            ?<ThunderstormIcon/>
            :info.temp>15
            ?<SunnyIcon />:
            <AcUnitIcon/>}
          

        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature-{info.temp}</p>
            <p>Temperature-{info.humidity}&deg;c</p>
            <p>min Temperatue={info.tempMin}&deg;c</p>
            <p>max Temperatue={info.tempMax}&deg;c</p>
            <p>The  weather can be described as <i>{info.weather}</i> can de feels={info.feelslike}&deg;c</p>


          </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}