import React, { useState } from "react";
import {Link} from 'react';
import { useMutation } from "@apollo/client";
// need to create the mutation
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/Auth';

export default function Login (props) {
  const[fromState, setFormState] = useState({email:'', password:''});
  const[Login,{error,data}]= useMutation(LOGIN_USER);


  const change =(event)=> {
    const{name, value} = event.target;
    setFormState({
      ...fromState,
      [name]: value,
    });
  };

const submitForm = async (event) =>{
  event.preventdefault();
  console.log(fromState);
  try{
    const {data}= await Login({
      variables:{...fromState}
    });
    Auth.login(data.login.token);
  }catch (e){
    console.error(e);
  }

  setFormState({
    email:'',
    password:'',
  })
}


};




