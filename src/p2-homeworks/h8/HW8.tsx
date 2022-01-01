import React, {useState} from 'react'
import {checkAC, homeWorkReducer, sortAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import './HW8.css'

export type UserType = {
   _id: number
   name: string
   age: number
}

const initialPeople: UserType[] = [
   {_id: 0, name: 'Кот', age: 3},
   {_id: 1, name: 'Александр', age: 66},
   {_id: 2, name: 'Коля', age: 16},
   {_id: 3, name: 'Виктор', age: 44},
   {_id: 4, name: 'Дмитрий', age: 40},
   {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
   const [people, setPeople] = useState<UserType[]>(initialPeople)

   const finalPeople = people.map(p => (
      <div key={p._id} className={"people"}>
         <span className={"people__name"}>{p.name}</span>
         <span className={"people__age"}>{p.age}</span>
      </div>
   ))

   const sortUp = () => setPeople(homeWorkReducer(initialPeople, sortAC('up')))
   const sortDown = () => setPeople(homeWorkReducer(initialPeople, sortAC('down')))
   const check = () => setPeople(homeWorkReducer(initialPeople, checkAC(18)))

   return (
      <div className={"HW8"}>
         <h2>homeworks 8</h2>
         <div className={"wrapper"}>
            <div className={"peoples"}>
               <div className={"peoples__header"}>
                  <div className={"peoples__header__name"}>Name</div>
                  <div className={"peoples__header__age"}>Age</div>
               </div>
               {finalPeople}
            </div>
         </div>

         <span>
            <SuperButton onClick={sortUp} className={"btn"}>
               Sort UP
            </SuperButton>
         </span>
         <span>
            <SuperButton onClick={sortDown} className={"btn"}>
               Sort DOWN
            </SuperButton>
         </span>
         <span>
            <SuperButton onClick={check} className={"btn"}>
               Check 18
            </SuperButton>
         </span>
         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativePeople/>*/}
         <hr/>
      </div>
   )
}

export default HW8
