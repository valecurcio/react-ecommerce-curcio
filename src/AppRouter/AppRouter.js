import React,{useState, useEffect} from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import Error404 from '../pages/Error404'
import ProductDetail from '../pages/ProductDetail'
import FAQ from '../pages/FAQ'

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
            <BrowserRouter>
            <NavBar fixed={fixedScroll} />
                <Switch>
                    <Route path="/contacto" component={Contact} />
                    <Route path="/category/:categoryId" component={Home} />
                    <Route path="/producto" component={ProductDetail} />
                    <Route path="/producto/:productId" component={ProductDetail} />
                    <Route path="/faq" component={FAQ} />
                    <Route path="/" component={Home} />
                    <Route path="*" component={Error404} />
                </Switch>
                {/* Agregar Footer */}
            </BrowserRouter>
    )
}
