import React, {ChangeEvent, useState} from 'react'
import {AffairType, filterAffairs, FilterType} from "../../HW2";
import s from './AlternativeAffairsBody.module.css'
import AlternativeAffair from "./AlternativeAffair/AlternativeAffair";
import plus from '../assets/plus.png';

type AlternativeAffairsBody = {
   data: Array<AffairType>
   setFilter: (filter: FilterType) => void
   deleteAffairCallback: (id: number) => void
   changeCheckBoxCallback: (id: number) => void
   addNewCardCallback: (text: string) => void
}

function AlternativeAffairsBody(props: AlternativeAffairsBody) {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const [valueTextArea, setValueTextArea] = useState<string>("");

   const setAll = () => {
      filterAffairs(props.data, "all");
      return props.setFilter("all");
   }
   const setHigh = () => {
      props.setFilter("high")
      return filterAffairs(props.data, "high")
   }
   const setMiddle = () => {
      props.setFilter("middle")
      return filterAffairs(props.data, "middle")
   }
   const setLow = () => {
      props.setFilter("low")
      return filterAffairs(props.data, "low")
   }
   const addCard = () => props.addNewCardCallback(valueTextArea)
   const setChangeValueTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {setValueTextArea(e.currentTarget.value)}
   const setVisibleSomeBlocks = () => setIsVisible(!isVisible)

   let styleTextArea = {
      display: "none"
   }
   let styleButtonAddNewCard = {
      display: "flex"
   }
   let styleButtonAddCard = {
      display: "none"
   }

   if (isVisible) {
      styleTextArea.display = "flex"
      styleButtonAddNewCard.display = "none"
      styleButtonAddCard.display = "flex"
   } else {
      styleTextArea.display = "none"
      styleButtonAddNewCard.display = "flex"
      styleButtonAddCard.display = "none"
   }

   return (
      <div className={s.affairs}>
         {/* === Блок с задачами из БД === */}
         <div className={s.affairs_block}>
            {props.data.map(a => <AlternativeAffair
               id={a._id}
               key={a._id}
               affair={a}
               deleteAffairCallback={props.deleteAffairCallback}
               changeCheckBoxCallback={props.changeCheckBoxCallback}/>)}
         </div>

         {/* === Блок с кнопкой добавления новой карточки === */}
         <div>
            <textarea className={s.add_card_input}
                      style={styleTextArea}
                      value={valueTextArea}
                      onChange={setChangeValueTextArea}>
            </textarea>
         </div>
         <div className={s.add_card}>
            <div className={s.add_cardCreate} style={styleButtonAddCard}>
               <button className={s.add_card_btnCreate} onClick={addCard}>Add card</button>
               <button className={s.add_cardClose} onClick={setVisibleSomeBlocks}>X</button>
            </div>
            <button className={s.add_card_btn} onClick={setVisibleSomeBlocks} style={styleButtonAddNewCard}>
               <img className={s.add_card_btn_imgAdd} src={plus} alt="plus"/>
               Add new card
            </button>
         </div>

         {/* === Блок с кнопками фильтрации === */}
         <div className={s.btn_block}>
            <button className={s.btn} onClick={setAll}>All</button>
            <button className={s.btn} onClick={setHigh}>High</button>
            <button className={s.btn} onClick={setMiddle}>Middle</button>
            <button className={s.btn} onClick={setLow}>Low</button>
         </div>
      </div>
   )
}

export default AlternativeAffairsBody;