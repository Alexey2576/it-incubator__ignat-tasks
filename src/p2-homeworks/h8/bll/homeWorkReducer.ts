import {UserType} from "../HW8";

export type ActionType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
   switch (action.type) {
      case 'sort': {
         const sortedState = [...state].sort((x, y) => x.name.localeCompare(y.name))
         return action.payload === 'up' ? sortedState : sortedState.reverse()
      }
      case 'check': {
         return state.filter(u => u.age >= action.payload)

      }
      default: return state
   }
}

export const sortAC = (payload: 'up' | 'down') => ({type: 'sort', payload} as const)
export const checkAC = (payload: number) => ({type: 'check', payload} as const)