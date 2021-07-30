import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import './header.styles.scss';
import {ReactComponent as  Logo} from '../../assets/crown.svg';
import {auth} from '../../firebase/firebase.util';

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to="/">
        <Logo className='logo'></Logo>
        </Link>
        <div className='options'>
        <Link className='option' to='/shop'>
            SHOP
        </Link>
        <Link className='option' to='shop'>
            CONTACT
        </Link>
       {
           currentUser?
           <div className='option' onClick={() => auth.signOut()} >LOGOUT</div>
            :
            <Link className='option' to='./signIn'>
                LOGIN
            </Link>
       }
        </div>

    </div>
)

const mapStateToProps = (state) =>({
    currentUser: state.user.currentUser
})

 
export default connect(mapStateToProps)(Header);
