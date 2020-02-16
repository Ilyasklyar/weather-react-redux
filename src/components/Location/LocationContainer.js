import React from 'react';
import { getWeatherThunkCreator } from '../../redux/location-reducer';
import Location from './Location';
import { connect } from 'react-redux';


const LocationContainer = (props) => {

  const onRequestCity = (cityName) => {
    props.getWeatherThunkCreator(cityName);
  }

  return <Location sky={props.sky} temp={props.temp} wind={props.wind} onRequestCity={onRequestCity} city={props.city} />
}

const mapStateToProps = (state) => {
  return {
    temp: state.locationReducer.temp,
    city: state.locationReducer.city,
    wind: state.locationReducer.wind,
    sky: state.locationReducer.sky,
  }
}


export default connect(mapStateToProps, { getWeatherThunkCreator })(LocationContainer);