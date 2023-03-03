import { createContext, useState } from 'react'
import { AppContextProps } from './AppContextProps';

const defaultContext = {
    collapsed: false,
    toggleCollapsed: () => {},
    selectedMenuItem: 'dashboard',
    setSelectedMenuItem: (key: string) => {}
}

const AppContext = createContext(defaultContext);

export function AppContextProvider( props: AppContextProps ){
const [collapsed, setCollapsed] = useState(false);
const [selectedMenuItem, setSelectedMenuItem] = useState('dashboard');

function toggleCollapsed(){
    setCollapsed(!collapsed);
}

return <AppContext.Provider 
            value={{collapsed, toggleCollapsed, selectedMenuItem, setSelectedMenuItem}}>
            {props.children}
        </AppContext.Provider>

}


export default AppContext