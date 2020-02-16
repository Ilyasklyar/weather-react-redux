const ADD_WEATHER = 'ADD-WEATHER'

let initialState = {
    city: '',
    temp: '',
    wind: '',
    sky: ''
};


const locationReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_WEATHER: {
            state = { ...state };
            if (action.data.cod === '404') {
                state.city = action.data.message;
            }
            else {
                state.city = action.city;
                state.temp = Math.floor(action.data.main.temp - 273.15);
                state.wind = action.data.wind.speed;
                state.sky = action.data.weather[0];
            }

            return state;
        }
        default:
            return state;
    }
}


export const addWeather = (data, city) => ({ type: ADD_WEATHER, data, city })


export const getWeatherThunkCreator = (cityName) => {

    return (dispatch) => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cf7b9417dec5608a11143ce1de452dc3`)
            .then(response => response.json())
            .then(data => dispatch(addWeather(data, cityName)))
    }
}

export default locationReducer;