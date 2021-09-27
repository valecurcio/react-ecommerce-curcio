import React,{useState, useEffect} from 'react'
//Components
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
    const [fixedScroll, setFixedScroll] = useState(false)
    useEffect(() => {
        function onScrollWindow() {
            if(window.scrollY > 116){
                setFixedScroll(true)
            }
        }
        window.addEventListener("scroll", onScrollWindow)
    }, [])

    return (
        <div className="App">
            <NavBar fixed={fixedScroll} />
            <ItemListContainer />
        </div>
    );
}

export default App;