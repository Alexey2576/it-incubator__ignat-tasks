import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
   name: string
   setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
   setKeyPressCallback: (e: KeyboardEvent<HTMLInputElement>) => void
   addUser: (e: MouseEvent<HTMLButtonElement>) => void
   error: string
   totalUsers: number
   isDisabled: boolean
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
   {name, setNameCallback, addUser, error, totalUsers, setKeyPressCallback, isDisabled} // деструктуризация пропсов
) => {
   const inputClass = error === "" ? s.someClass : s.error // need to fix with (?:)

   return (
      <div>
         <input value={name} onChange={setNameCallback} onKeyPress={setKeyPressCallback} className={inputClass}/>
         <span>{error}</span>
         <button disabled={isDisabled} onClick={addUser}>add</button>
         <span>{totalUsers}</span>
      </div>
   )
}

export default Greeting
