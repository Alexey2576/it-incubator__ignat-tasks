import React, {ChangeEvent, MouseEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
   users: UserType[]
   addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
   const [name, setName] = useState<string>('')
   const [error, setError] = useState<string>("error")
   const [isDisabled, setIsDisabled] = useState<boolean>(true)

   const setKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
      console.log(e.keyCode === 8)
      if (e.charCode === 32 && name.length === 0) {
         setError("Error text");
         setIsDisabled(true);
      }
      else if (e.charCode === 32) {
         setError("Error text");
         setIsDisabled(false);
      } else {
         setError("")
         setIsDisabled(false);
      }
      if (e.charCode === 13 && name.length !== 0) {
         alert(`Hello ${name}!`)
         addUserCallback(name)
         setName("")// need to fix
         setIsDisabled(true)
      }
   }
   const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
      if (error === "") {
         setName(e.currentTarget.value)
         setIsDisabled(false)
      }
      if (e.currentTarget.value.length === 0) {
         setError("Error text");
         setIsDisabled(true)
      }
   }
   const addUser = (e: MouseEvent<HTMLButtonElement>) => {
      if (name !== "") {
         alert(`Hello ${name}!`)
         addUserCallback(name)
         setName("")// need to fix
         setIsDisabled(true)
      }
   }

   const totalUsers = users.length // need to fix

   return (
      <Greeting
         name={name}
         setNameCallback={setNameCallback}
         setKeyPressCallback={setKeyPressCallback}
         addUser={addUser}
         error={error}
         totalUsers={totalUsers}
         isDisabled={isDisabled}
      />
   )
}

export default GreetingContainer
