import React from 'react';
import logo from '../../assets/bsas-vinyl.png'
import './NavBar.css';
//external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {

    return (
            <AppBar position="static" className="main-navbar">
                <Toolbar>
                    <Typography variant="h6">
                        <div className="container-logo">
                            <img src={logo} alt={'logo'}/>
                        </div>
                    </Typography>
                    <ul className="navbar-list">
                        <li><Button color="inherit">Home</Button></li>
                        <li><Button color="inherit">Vinilos</Button></li>
                        <li><Button color="inherit">Preguntas Frecuentes</Button></li>
                        <li><Button color="inherit">Contacto</Button></li>
                    </ul>
                </Toolbar>
            </AppBar>
    );
}

export default NavBar;