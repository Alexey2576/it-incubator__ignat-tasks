import React, {MouseEvent} from "react";
import s from './HW12.module.css'
import './../h7/HW7.css'
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {AlternativeSuperRadio} from "../h7/common/c6-SuperRadio/AlternativeSuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
   const theme = useSelector<AppStoreType, string>((state: AppStoreType) => state.theme.theme)
   const dispatch = useDispatch()

   const onClickButtonHandler = (e: MouseEvent<HTMLButtonElement>) => dispatch(changeThemeC(e.currentTarget.name))
   const onClickRadioHandler = (e: MouseEvent<HTMLInputElement>) => dispatch(changeThemeC(e.currentTarget.value))
   const onChangeOptionHandler = (theme: string) => dispatch(changeThemeC(theme))

   const fullClassTheme = `${s.HW12} ${s[theme]}`
   const fullClassTextTheme = `${s.text} ${s[theme + '-text']}`
   return (
      <div className={fullClassTheme}>
         <h2>homeworks 12</h2>
         <span className={fullClassTextTheme}>Inner text</span>
         <div className={s.super_block}>
            <SuperButton className={s.btn} onClick={onClickButtonHandler} name={"some"}>Some</SuperButton>
            <SuperButton className={s.btn} onClick={onClickButtonHandler} name={"red"}>Red</SuperButton>
            <SuperButton className={s.btn} onClick={onClickButtonHandler} name={"dark"}>Dark</SuperButton>
         </div>
         <div className={s.super_block}>
            <AlternativeSuperRadio name={'radio'}
                                   options={themes}
                                   onClick={onClickRadioHandler}
            />
         </div>
         <div className={s.super_block}>
            <SuperSelect options={themes}
                         value={theme}
                         onChangeOption={onChangeOptionHandler}
                         className={"super_select"}
            />
         </div>
         <hr/>
      </div>
   );
}

export default HW12;
