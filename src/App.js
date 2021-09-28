import React,{useState, useEffect} from 'react'
import './App.css';
//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
    const [fixedScroll, setFixedScroll] = useState(false)
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
        <div className="App">
            <NavBar fixed={fixedScroll} />
            <ItemListContainer />
            <ItemDetailContainer />
        </div>
    );
}

export default App;