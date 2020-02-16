import React from 'react';
import { Field, reduxForm } from 'redux-form';
import style from './Location.module.css';
import { requred, maxLength } from '../Validator/validator'
import { Input } from '../common/FormsControls/FormsControls';

const Location = (props) => {

    const onSubmit = (formData) => {
        props.onRequestCity(formData.cityName)
    }

    return (
        <div>
            <GetCityReduxForm onSubmit={onSubmit} />
            <div className={style.center}>
                <div className={style.city}><b>{props.city}</b> </div>
                <div className={(props.city && props.city !== "city not found") ? style.display : style.displaynone}>
                    <span>{`температура: ${props.temp}`}</span>
                    <br />
                    <span>{`ветер: ${props.wind} м/с`}</span>
                    <br></br>
                    <span>{`облачность: ${props.sky.description}`}</span>
                </div>
            </div>
        </div>
    );
}

const maxLengthSize = maxLength(60);

const GetCityNameForm = (props) => {
    return (
        <form className={style.form} onSubmit={props.handleSubmit}>
            <Field component={Input} name={'cityName'} className={style.input}
                placeholder={'City'} validate={[requred, maxLengthSize]}
            />
            <button className={style.btn}>Показать</button>
        </form>
    )
}

const GetCityReduxForm = reduxForm({ form: 'city' })(GetCityNameForm)

export default Location;