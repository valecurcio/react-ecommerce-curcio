import React from 'react'
import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <div>
            <h1>Ups! - Buscamos por todos lados pero no encontramos la ruta que buscás. Quizás quieras volver al <Link to="/">Inicio.</Link></h1>
        </div>
    )
}
