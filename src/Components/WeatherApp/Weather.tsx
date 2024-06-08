import React, { Component, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import axios from 'axios';

interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: { text: string };
    humidity: number;
    wind_kph: number;
  };
}

interface WeatherAppState {
  city: string;
  weatherData: WeatherData | null;
  loading: boolean;
  error: string | null;
}

class Weather extends Component<{}, WeatherAppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      city: '',
      weatherData: null,
      loading: false,
      error: null
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ city: event.target.value });
  };

  fetchWeather = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ loading: true, error: null });
    const { city } = this.state;
    try {
    const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=c2a623add98448cfa4272716240806&q=${city}&aqi=no`
      );
      
      this.setState({ weatherData: response.data, loading: false });
    } catch (error) {
      this.setState({ error: 'City not found. Please try again.', loading: false });
    }
  };

  render() {
    const { city, weatherData, loading, error } = this.state;

    return (
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" >
          Weather App
        </Typography>
        <form onSubmit={this.fetchWeather} style={{ display: 'flex', marginBottom: '20px' }}>
          <TextField
            fullWidth
            variant="outlined"
            label="Enter City"
            value={city}
            onChange={this.handleInputChange}
          />
          <Button variant="contained" color="primary" type="submit" style={{ marginLeft: '10px' }} >
            Get Weather
          </Button>

        </form>

        
        {loading && <div>Loading...</div>}
        {error && <Typography color="error">{error}</Typography>}
        {weatherData && (
          <Box>
            <Typography variant="h5">
              {weatherData.location.name}, {weatherData.location.country}
            </Typography>
            <Typography variant="body1">
              Temperature: {weatherData.current.temp_c} °C
            </Typography>
            <Typography variant="body1">
              Weather: {weatherData.current.condition.text}
            </Typography>
            <Typography variant="body1">
              Humidity: {weatherData.current.humidity} %
            </Typography>
            <Typography variant="body1">
              Wind Speed: {weatherData.current.wind_kph} kph
            </Typography>
          </Box>
        )}

      </Container>
    );
  }
}

export default Weather;


// import React, { Component } from 'react'
// import { Box, Button, TextField, Typography  } from '@mui/material';

// interface WeatherData{
//     location:{
//         name:string;
//         country:string;
//     };
//     current:{
//         temp_c: number;
//         condition:{text:string};
//         humidity: number;
//         wind_kph:number;
//     }
// }
// interface WeatherState{
//     city: string;
//       weatherData: WeatherData | null;
//       loading: boolean;
//       error: string | null;
// }


//  class Weather extends Component<{},WeatherState> {
// constructor(props : {}){
//     super(props);
//     this.state = {
//         city:'',
//         weatherData: null,
//               loading: false,
//               error: null
//     }
// }



//   render() {
//     return (
//       <Box sx={{textAlign:'center'}}>
//         <Typography sx={{fontWeight:'bold'}}>Create Weather App</Typography>
// <TextField
// variant='outlined'
// label="enter a city"
// // value={city}


// />
// <Button variant='contained' color='primary' type='submit'>Get Weather </Button>

//       </Box>
//     )
//   }
// }
// export default Weather;