import { createContext, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { BlogArr, BlogArrEsp } from "./arrays"
import { Espanol } from "./traducciones/espanol"
import { Ingles } from "./traducciones/ingles"

const CartConext = createContext()
const UseCartContext = () => useContext(CartConext)

const Aleman = {
    id: 3,
    title: "Alemán",
    lang: "🇩🇪",
    firstHead: "Lassen Sie sich von Oxapampa überraschen",
    secondHead: "Our village lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    firstButton:"Check the houses",
}

export default UseCartContext
export const ContextProvider = ({children}) => {
   
    const [Language, setLanguage] = useState(Espanol)

    const ChangeLanguage = (val) => {
        switch (val) {
            case 1:
                setLanguage(Espanol)
                break;
            case 2: 
                setLanguage(Ingles)
                break;
            case 3: 
                setLanguage(Aleman)
                break;
            default:
                break;
        }
    }

    

    return <CartConext.Provider
    value={{
      ChangeLanguage, Language
    }}
    >
        {
            children
        }
    </CartConext.Provider>
}