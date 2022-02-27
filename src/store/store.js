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

        submitForm : (e, extras={}) => {
          e.preventDefault();
          let formData = new FormData(e.target);
          formData = Object.fromEntries(formData)
          formData = {...formData, ...extras}
          console.log(formData)
        },

        initConsent : async (mobile) => {
          this.setState({ loading : true });
          // /api/v1/consent/init
          console.log(mobile)
          await axios.post(`/api/v1/consent/init`, {
            "phone_number": mobile,
            "redirect_url": "https://passbook-rentee-ui.netlify.app/anumati"
          }).then((res)=> {
            this.setState({ loading : false });
            this.setState({ consent : res.data });
          })

        },

        getAgreeement : async (leaseId) => {
          this.setState({ loading : true });
          // /api/v1/consent/init
          console.log(leaseId)
          await axios.get(`/api/v1/lease/${leaseId}`).then((res)=> {
            this.setState({ loading : false });
            this.setState({ consent : res.data });
          })

        },

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