import { createContext, useState } from 'react'
import { AppContextProps } from './AppContextProps';

const defaultContext = {
    collapsed: false,
    toggleCollapsed: () => {}
}

const AppContext = createContext(defaultContext);

export function AppContextProvider( props: AppContextProps ){
const [collapsed, setCollapsed] = useState(false);

function toggleCollapsed(){
    setCollapsed(!collapsed);
}

return <AppContext.Provider value={{collapsed, toggleCollapsed}}>{props.children}</AppContext.Provider>

}


export default AppContext