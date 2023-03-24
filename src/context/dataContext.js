import { useState, createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({children}) => {
    const [list, setList] = useState([])

    return(
        <DataContext.Provider
            value ={{list, setList}}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;