import axios from "axios";
import { createContext, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState();

    // fetching prods from API
    const fetchAllProds = async() => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products")
            setData(res.data);
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const obj = {
        data, setData,
        fetchAllProds
    }

    return <DataContext.Provider value={obj} >{children}</DataContext.Provider>
}
