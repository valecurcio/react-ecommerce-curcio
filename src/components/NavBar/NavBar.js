import React, { useState, useEffect } from 'react';
import logo from '../../assets/bsas-vinyl.png'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase/firebase';
//external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CartWidget from '../CartWidget/CartWidget';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const NavBar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const db = getFirestore();
    const categoryCollection = db.collection("categories");
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    useEffect(() => {
      const db = getFirestore();
      const categoryCollection = db.collection("categories");
      categoryCollection.get().then((querySnapshot) => {
        if(querySnapshot.size === 0) {
          console.log('No hay resultados');
        }
        setCategories(
          querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        )
      });
    }, []);
    const [categories, setCategories] = useState([]);
  
    return (
            <AppBar position={props.fixed ? 'fixed' : 'static'} className={`main-navbar ${props.fixed ? 'navbar-scroll' : ''}`}>
                <Toolbar>
                    <Typography variant="h6">
                        <div className="container-logo">
                        <Link className="links" to="/"><img src={logo} alt={'logo'}/></Link>
                        </div>
                    </Typography>
                    <ul className="navbar-list">
                        <li><Link className="links" to="/"><Button color="inherit">Home</Button></Link></li>
                        <li><Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Vinilos
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {categories.map( (category) => {
                            return <MenuItem key={category.id} onClick={handleClose}><Link className="links" to={`${category.address}`}>{category.id}</Link></MenuItem>
                            
                        }
                        )}
      </Menu></li>
                        
                        <li><Link className="links" to="/faq"><Button color="inherit">Preguntas Frecuentes</Button></Link></li>
                        <li><Link className="links" to="/contacto"><Button color="inherit">Contacto</Button></Link></li>
                    </ul>
                    <CartWidget />
                </Toolbar>
            </AppBar>
    );
}

export default NavBar;