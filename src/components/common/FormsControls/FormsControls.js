import React from 'react';
import style from './FormsControls.module.css'; 

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error 
  
    return(
        <div className={style.formControl+' '+ (hasError ? style.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
           { hasError && <div>
                 <span>{meta.error}</span>
            </div>}
        </div>
    )
}