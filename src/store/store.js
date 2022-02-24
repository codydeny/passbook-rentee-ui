import axios from 'axios';
import React from 'react';
import { withSnackbar } from 'notistack';
import {Auth, Firestore as db} from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from "firebase/firestore";

const StoreContext = React.createContext();

// Then create a provider Component
class StoreProvider extends React.Component {
  constructor(props){
    super(props);
    // Application Global State
    this.state = {
        // State Examples
        mongoAPIKey : "",
        isLoggedIn : localStorage.getItem('token') ? true : false,
        user : [],
        data : "I am Loaded From Global State",
        errors : {},
        firestore : {},
        marketData : {},
        pairsToTrack : [],
        loading : false,
        inProgressRentees : {
          9026272824 : 9026272824
        }
    }
}

  render() {
    return (
      <StoreContext.Provider value = {{ 
        state: this.state,

        addInProgressRentee : (rentee) => {
          this.setState({
            inProgressRentees : {
              [rentee] : rentee,
              ...this.state.inProgressRentees
            }
          })
        },

        removeInProgressRentee : (rentee) => {
          let temp = this.state.inProgressRentees
          delete temp[rentee]
          this.setState({
            inProgressRentee : temp
          })
        },
        // Actions
        // State Mutations
        changeState :(data)=> {
            // change state
            // this.setState({
            //     token : "",
            //     isLoggedIn : true
            //   })
        }, 
      }} 	
        >
        {this.props.children}
      </StoreContext.Provider>
    )
  }
}

export {StoreContext};

export default withSnackbar(StoreProvider);