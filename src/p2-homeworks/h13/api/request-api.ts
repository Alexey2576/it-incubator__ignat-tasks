import axios from 'axios'

export type ResponseAPIType = {
   errorText: string
   info: string
   yourBody: { success: boolean }
   yourQuery: Object
}
export const RequestApi = {
   setCheckboxValue(checked: boolean) {
      return axios.post<ResponseAPIType>('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked})
         .then(res => res.data)
   }
}