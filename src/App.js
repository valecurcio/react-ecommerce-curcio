//import React,{useState, useEffect} from 'react'
import './App.css';
import AppRouter from './AppRouter/AppRouter';

function App() {
    // const [fixedScroll, setFixedScroll] = useState(false)
    // useEffect(() => {
    //     function onScrollWindow() {
    //         if(window.scrollY > 161){
    //             setFixedScroll(true)
    //         }else{
    //             setFixedScroll(false)
    //         }
    //     }
    //     window.addEventListener("scroll", onScrollWindow)
    // }, [])

    return (
        <div className="App">
            <AppRouter />
        </div>
    );
}

export default App;