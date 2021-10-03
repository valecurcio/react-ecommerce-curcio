import React, {useState} from 'react';
import logo from '../../assets/bsas-vinyl.png'
import './NavBar.css';
import { Link } from 'react-router-dom';
//external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
//import IconButton from '@material-ui/core/IconButton';
import CartWidget from '../CartWidget/CartWidget';
//import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';


const NavBar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [categories, setCategories] = useState([
        {
            name: 'Rock',
            id: 'Rock'
        },
        {
            name: 'Pop',
            id: 'Pop'
        },
        {
            name: 'Jazz',
            id: 'Jazz'
        }
    ]);
    return (
            <AppBar position={props.fixed ? 'fixed' : 'static'} className={`main-navbar ${props.fixed ? 'navbar-scroll' : ''}`}>
                <Toolbar>
                    <Typography variant="h6">
                        <div className="container-logo">
                            <img src={logo} alt={'logo'}/>
                        </div>
                    </Typography>
                    <ul className="navbar-list">
                        <li><Link className="links" to="/"><Button color="inherit">Home</Button></Link></li>
                        {/* <li><Link to="/producto"><Button color="inherit">Vinilos</Button></Link></li> */}
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
                            return <MenuItem key={category.id} onClick={handleClose}><Link className="links" to={`/category/${category.id}`}>{category.name}</Link></MenuItem>
                            
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