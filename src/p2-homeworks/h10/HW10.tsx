import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {Dispatch} from "redux";
import {ActionsType, loadingAC, StateType} from "./bll/loadingReducer";
import './HW10.css'
import preloader from '../h10/assets/preloader.svg'

function HW10() {
   const {isLoading} = useSelector<AppStoreType, StateType>(store => store.loading)
   const dispatch = useDispatch<Dispatch<ActionsType>>()

   const setLoading = () => {
      dispatch(loadingAC(true))
      console.log('loading...')
      setTimeout(() => {
         dispatch(loadingAC(false))
      }, 2000)
   };

   return (
      <div className={"HW10"}>
         <h2>homeworks 10</h2>

         <div className={"loading_block"}>
            {isLoading
               ? <div className={"loading"}>
                  <img src={preloader} alt="preloader"></img>
               </div>
               : <div className={"btn"}>
                  <SuperButton onClick={setLoading}>Set loading</SuperButton>
               </div>}
         </div>

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<Alternative/>*/}
         <hr/>
      </div>
   )
}

export default HW10
