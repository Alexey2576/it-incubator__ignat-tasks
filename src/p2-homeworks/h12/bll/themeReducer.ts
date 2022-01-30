type initStateType = {
    theme: string
}

const initState = {
    theme: 'some'
};

export const themeReducer = (state: initStateType = initState, action: ActionCreatorsType): initStateType => {
    switch (action.type) {
        case "CHANGE_THEME":
            return {...state, theme: action.theme};
        default: return state;
    }
};
type ActionCreatorsType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => ({type: "CHANGE_THEME", theme} as const); // fix any