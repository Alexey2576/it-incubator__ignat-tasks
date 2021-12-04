import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import errorr from './Error.svg'
import success from './Success.svg'

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
   const someInput = error === "" ? s.success : s.error // need to fix with (?:)

   return (
      <div className={s.greeting}>
         <div className={s.inputBlock}>
            <div className={s.inputTextBlock}>
               { error === "" && name.length !==0 && <img src={success} alt="success" className={s.imgSuccess}/> }
               <label htmlFor="input" className={s.label}>Please! Enter your email address!</label>
            </div>
            <input value={name}
                   onChange={setNameCallback}
                   onKeyPress={setKeyPressCallback}
                   className={`${s.input} ${someInput}`}
                   name="input"
            />
            <div className={s.errorBlock}>
               { error === "Error text" && <img src={errorr} alt="Error" className={s.imgError}/> }
               <span className={s.textError}>{error}</span>
            </div>
         </div>
         <div className={s.buttonBlock}>
            <button disabled={isDisabled} onClick={addUser} className={s.button}>BUTTON</button>
            <span className={s.total}>TOTAL USERS:  {totalUsers}</span>
         </div>
      </div>
   )
}
// <input type="checkbox"
//        className={s.checkbox}
//        id={`affair${props.id}`}
//        name={`affair${props.id}`}
//        checked={props.affair.valueCheck}
//        onClick={changeValueCheckBox}/>
// <label htmlFor={`affair${props.id}`}
//        className={s.text}>{props.affair.name}</label>

export default Greeting
