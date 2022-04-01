import React, { useState } from "react";
import axios from "axios";

import * as yup from 'yup'
import schema from './Validation/formSchema';

import { Switch, Link, Route } from "react-router-dom";

import OrderForm from './Components/OrderForm'


const initialFormValues = {
  username: '',
  size: '',
  pepperoni: '',
  sausage: false,
  bacon: false,
  chicken: false,
  special: ''
}

const initialFormErrors = {
  username: '',
  size: '',
  pepperoni: '',
  sausage: '',
  bacon: '',
  chicken: '',
  special: ''
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [orders, setOrders] = useState([]);
  
  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
      .then(res => {
        console.log(res.data)
        setOrders([ res.data, ...orders ])
      })
      .catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  
  return (
    <div className='App'>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/pizza' id='order-pizza'>Pizza</Link>
      </header>
      <Switch>
        <Route exact path='/'>
        <h1>Lambda Eats</h1>
        <p>It's Pizza Time!</p>
        </Route>

        <Route path='/pizza'>
          <h2>ORDER SOME PIZZA GOOBER</h2>
          <OrderForm id='pizza-form'
          values={formValues} 
          change={handleChange} 
          errors={formErrors} 
          submit={handleSubmit}
          />
        </Route>
      </Switch>  
    </div>
  );
};


export default App;
