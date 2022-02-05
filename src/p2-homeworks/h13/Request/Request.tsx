import React, {useState} from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import s from "../../h12/HW12.module.css";
import style from './request.module.css'
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestApi, ResponseAPIType} from "../api/request-api";
import {Response} from "../Response/Response";

export const Request = () => {
   const [checked, setChecked] = useState(false)
   const [response, setResponse] = useState<ResponseAPIType | null>(null)
   const [message, setMessage] = useState<string>("Сейчас будет магия")
   const [errorFlag, setErrorFlag] = useState(false)

   const onChangeCheckedHandler = () => setChecked(!checked)
   const onClickRequestHandler = () => {
      RequestApi.setCheckboxValue(checked)
         .then(data => {
            setResponse(data)
            setErrorFlag(false)
         })
         .catch(error => {
            error.response ? setResponse(error.response.data) : setMessage("Магии не будет. Иди в консоль")
            console.log(error)
            setErrorFlag(true)
         })
   }
   const onClickResetHandler = () => setResponse(null)

   return (
      <div className={style.request}>
         <SuperCheckbox checked={checked}
                        onChangeChecked={onChangeCheckedHandler}
                        className={style.checkbox}
         >
            Поставь "Галку", нажми кнопку
         </SuperCheckbox>
         <div>
            <SuperButton className={s.btn}
                         onClick={onClickRequestHandler}
            >
               Request
            </SuperButton>
            <SuperButton className={s.btn}
                         disabled={response === null}
                         onClick={onClickResetHandler}
            >
               Reset
            </SuperButton>
         </div>
         <div className={style.response}>
            {
               response
                  ? <Response response={response}
                              error={errorFlag}/>
                  : <p className={style.magic}>{message}</p>
            }
         </div>
      </div>
   );
};