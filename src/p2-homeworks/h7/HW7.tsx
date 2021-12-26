import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'
import "./HW7.css"
import {AlternativeSuperRadio} from "./common/c6-SuperRadio/AlternativeSuperRadio";

const arr = ['Air', 'Clouds', 'Earth', 'Water']

function HW7() {
   const [value, onChangeOption] = useState<string>(arr[2])

   return (
      <div className={"HW7"}>
         <h2>homeworks 7</h2>

         {/*should work (должно работать)*/}
         <div>
            <SuperSelect
               options={arr}
               value={value}
               onChangeOption={onChangeOption}
               className={"super_select"}
            />
         </div>
         <div>
            <SuperRadio
               name={'radio'}
               options={arr}
               value={value}
               onChangeOption={onChangeOption}
            />
         </div>

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeSuperSelect/>*/}
         <AlternativeSuperRadio options={arr}
                                name={'radio'}
                                onChangeOptions={onChangeOption}
                                value={value}/>
         <hr/>
      </div>
   )
}

export default HW7
