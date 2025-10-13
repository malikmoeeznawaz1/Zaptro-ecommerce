import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState();

    const obj = {
        data, setData
    }

    return <DataContext.Provider value={obj} >{children}</DataContext.Provider>
}
