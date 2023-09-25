import React from "react";
import {useForm} from "react-hook-form"
import './App.css'

function App(){
  const {register,handleSubmit,formState: { errors },} = useForm();

const onSubmit = (data) => {
  console.log(data);

};

return(
<div className="container">
 <h1>React Hook Form</h1>
  <form onSubmit={handleSubmit(onSubmit)}>

    <input type="text" id="name"{...register("name", {required: true})} placeholder="Username" /> <br/>
    {errors.name && <span>Username is required</span>}

    <input type="email" id="email" {...register("email", {required: true,  patten: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })}placeholder="Email" /><br></br>
    {errors.email && <span>Please enter a valid email address</span>}

    <input type="password" id = "password" {...register("password", {required:true})} placeholder="Password" /><br></br>
    {errors.password && <span>Password is required</span>}

  
    <button type="submit">Submit</button>
  </form>
</div>
)
};



export default App;