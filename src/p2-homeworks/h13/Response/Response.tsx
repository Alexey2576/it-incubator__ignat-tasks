import React from 'react';
import {ResponseAPIType} from "../api/request-api";
import s from './response.module.css'

type ResponseType = {
   response: ResponseAPIType
   error: boolean
}
export const Response: React.FC<ResponseType> = (
   {
      response,
      error
   }
) => {

   const fullClassResponseName = `${error ? s.error : s.not_error} ${s.response_message}`
   const title = !error ? "Статус 200. Всё ОК!!!" : "Статус 500. Что-то пошло не так!!!"
   return (
      <div className={s.response}>
         <h3 className={s.title}>{title}</h3>
         <div className={fullClassResponseName}>
            <div className={s.message_block}>
               <p className={s.message}>errorText</p>
               <p className={s.text}>{response.errorText}</p>
            </div>
            <div className={s.message_block}>
               <p className={s.message}>info</p>
               <p className={s.text}>{response.info}</p>
            </div>
            <div className={s.message_block}>
               <p className={s.message}>yourBody</p>
               <p className={s.text}>{JSON.stringify(response.yourBody)}</p>
            </div>
            <div className={s.message_block}>
               <p className={s.message}>yourQuery</p>
               <p className={s.text}>{JSON.stringify(response.yourQuery)}</p>
            </div>
         </div>
      </div>
   );
};