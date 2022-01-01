import {UserType} from "../HW8";

export type ActionType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
   switch (action.type) {
      case 'sort': {
         const sortedState = [...state.sort((x, y) => x.name.localeCompare(y.name))]
         if (action.payload === 'up') return sortedState
         if (action.payload === 'down') return sortedState.reverse()
         return [...state]
      }
      case 'check': {
         if (action.payload === 18) return [...state.filter(u => u.age >=18)]
         return [...state]
      }
      default:
         return [...state]
   }
}

export const sortAC = (payload: string) => ({type: 'sort', payload} as const)
export const checkAC = (payload: number) => ({type: 'check', payload} as const)