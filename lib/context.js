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
    const [Products, setProducts] = useState([])
    const [FinalWhatsAppString, setFinalWhatsAppString] = useState("")

    const AddToCart = (info) => {


        const existing = Products.find((p) => p.n === info.n)
        if(existing) {
            existing.c += info.c
            setProducts([...Products])
        }
        else setProducts(Products => [...Products, {
            img: info.img,
            n: info.n,
            p: info.p,
            c: info.c
        }])
        toast.success("¡El producto fue añadido al carrito!")
    }

    const ProductsCount = () => {
        return Products.reduce((acc, p) => (acc += p.c), 0)
    }

    const TotalProductsPrice = () => {
        return Products.reduce((acc, p) => (acc += p.c * p.p), 0)
    }

    useEffect(() => {
      console.log(Products)
    }, [Products, ])
    
    

    useEffect(() => {
        var aux = []
        Products.forEach(e => {

            var auxiliar
            if(e.cantidad > 1) auxiliar = e.cantidad + " unidades de " + e.name 
            else auxiliar = e.cantidad + " unidad de " + e.name 

            aux.push(auxiliar)
        });
        var FinalMessage = aux.join(", ") + "."
        setFinalWhatsAppString(FinalMessage)
    }, [Products])

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
        ChangeLanguage, Language, Products, setProducts, AddToCart, ProductsCount, FinalWhatsAppString, TotalProductsPrice
        }}>
        {
            children
        }
    </CartConext.Provider>
}