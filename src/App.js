import './App.css';
import React from 'react';
import {   Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument } from './firebase/firebase.util';

import {setCurrentUser} from './redux/user/user.actions'
import {connect} from 'react-redux';


class App extends React.Component{



  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;
   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
          
            id: snapShot.id,
            ...snapShot.data()
          
        });
      });
     
    }
    setCurrentUser(userAuth);

    });

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signIn' component={SignInAndSignUpPage}/>
        </Switch>
        
      </div>
    );
  }
 
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
