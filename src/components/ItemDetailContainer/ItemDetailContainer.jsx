import { useEffect, useState } from "react"
// import { pedirDatos } from "../../helpers/pedirDatos"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { db } from "../../firebase/config"
import { doc, getDoc } from "firebase/firestore"
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    
    useEffect(()=> {
        setLoading(true)
        // 1) armar la referencia del doc
        const docRef = doc(db, "productos", itemId)
        // 2) llamada a la referencia (async)
        getDoc(docRef)
            .then((doc) => {
                const itemRef = {
                    id: doc.id,
                    ...doc.data()
                }
                setItem(itemRef)     
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
        // pedirDatos()
        //     .then((res) => setItem( res.find((el) => el.id === Number(itemId)) ))
        //     .catch((err) => console.log(err))
        //     .finally(() => setLoading(false))
    },[])

    return (
        <div className="item__container container bg-white py-8 flex flex-row flex-wrap justify-center max-w-6xl">
        {
            loading
                ? <Loader/>
                : <ItemDetail item={item} key={item.id}/>
        }
    </div>
    )
}
export default ItemDetailContainer