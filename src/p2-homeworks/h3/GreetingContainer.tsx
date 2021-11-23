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
   const [error, setError] = useState<string>('')
   const [isDisabled, setIsDisabled] = useState<boolean>(true)

   const setKeyPressCallback = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 32) {
         setError("Username should`t contain spaces");
         setIsDisabled(true);
      } else {
         setError("")
         setIsDisabled(false);
      }
   }
   const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
      if (error === "") {
         setName(e.currentTarget.value)
         setIsDisabled(false)
      }
      if (e.currentTarget.value.length === 0) {
         setError("Enter username")
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
