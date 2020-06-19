import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import axios from 'axios'
import * as Yup from 'yup'

import Home from './Home'
import Form from './Form'
import formSchema from './formSchema'
import Confirmation from './Confirmation'

const initialFormValues = {
  /// Text Inputs ///
  name: '',
  instructions: '',
  /// Dropdown ///
  size: '',
  ///// CHECKBOXES /////
  toppings: {
    pepperoni: false,
    pineapple: false,
    onion: false,
    spinach: false,
  },
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialDisabled = true

export default function App() {
  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)  


  const onInputChange = evt => {
    const { name, value } = evt.target
  
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      });

      setFormValues({
        ...formValues,
        [name]: value
      })
  }

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target

    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    console.log('submitted!')

    axios
      .post('http://localhost:3004/confirmation', formValues)
      .then(res => {
        setOrders([...orders, res.data]);
        console.log("Success", res);
      })
      .catch(err => console.log(err.response))
      .finally(() => {
        setFormValues(initialFormValues)
      })
    }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])
  
  return (
    <div className='App'>
      <nav>
        <h1 className='header'>Lambda Eats</h1>
        <div className='nav-links'>
          <Link to='/'>Home</Link>
          <br />
          <Link to='/'>Help</Link>
        </div>
      </nav>
  
      <Switch>
        <Route path="/confirmation">
          {
          orders.map(order => {
            return (
              <Confirmation key={order.id} order={order} />
            )
          })
          }
        </Route>

        <Route path="/pizza">
          <Form 
            values={formValues}
            onInputChange={onInputChange}
            onCheckboxChange={onCheckboxChange}
            onSubmit={onSubmit}
            disabled={disabled}
            errors={formErrors}
          />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
