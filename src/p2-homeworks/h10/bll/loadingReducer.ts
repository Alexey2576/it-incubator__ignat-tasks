const initState = {
    isLoading: false
}

export type StateType = typeof initState
export type ActionsType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: StateType = initState, action: ActionsType): StateType => {
    switch (action.type) {
        case "SET_IS_LOADING": {
            return { ...state, ...action.payload }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: 'SET_IS_LOADING', payload: { isLoading }})

