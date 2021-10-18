import { createContext } from "react"

export const ThemeContext = createContext({
    
})

const INITIAL_STATE = { dark_mode: false }

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return {darkMode: !state.darkMode}
    }
}