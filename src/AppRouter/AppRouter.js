import React,{useState, useEffect} from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import CartProvider from '../context/CartContext'
//Pages
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Error404 from '../pages/Error404'
import ItemDetail from '../pages/ItemDetail'
import FAQ from '../pages/FAQ'
import CartPage from '../pages/CartPage'


export default function AppRouter() {

    const[fixedScroll, setFixedScroll] = useState(false)

    useEffect(() => {
        function onScrollWindow() {
            if(window.scrollY > 161){
                setFixedScroll(true)
            }else{
                setFixedScroll(false)
            }
        }
        window.addEventListener("scroll", onScrollWindow)
    }, [])

    return (
            //Creo un wrapper BrowserRouter que contiene todos los Route
            <CartProvider>
                <BrowserRouter>
                    <NavBar fixed={fixedScroll} />
                        <Switch>
                            <Route path="/contacto" component={Contact} />
                            <Route path="/item/:idItem" component={ItemDetail} />
                            <Route path="/category/:idCategory" component={Home} />
                            <Route path="/faq" component={FAQ} />
                            <Route path="/cart" component={CartPage} />
                            <Route path="/" component={Home} />
                            <Route path="*" component={Error404} />
                        </Switch>
                        {/* Agregar Footer */}
                </BrowserRouter>
            </CartProvider>
    )
}
