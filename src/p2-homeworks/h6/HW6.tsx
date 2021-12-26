import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import './HW6.css'

function HW6() {
   const [value, setValue] = useState<string>('')

   const save = () => {
      saveState<string>('editable-span-value', value)
   }
   const restore = () => {
      setValue(restoreState('editable-span-value', "Empty"))
   }

   return (
      <div className={"hw6"}>
         <h2>Homeworks 6</h2>

         {/*should work (должно работать)*/}
         <div className={"group"}>
            <SuperEditableSpan value={value}
                               onChangeText={setValue}
                               className={"superEditableSpan"}
                               spanProps={{children: value ? undefined : 'Click  and enter text...'}}/>
         </div>
         <SuperButton onClick={save} className={"btn"}>save</SuperButton>
         <SuperButton onClick={restore} className={"btn"}>restore</SuperButton>

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<AlternativeSuperEditableSpan/>*/}
         <hr/>
      </div>
   )
}

export default HW6
