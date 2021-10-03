import React from 'react'
import './LoadingScreen.css';
import loading from '../../assets/loadingscreen.gif'

export default function LoadingScreen() {
    return (
        <div>
            <img className="loading-icon" src={loading} alt={'cargando...'}/>
        </div>
    )
}
