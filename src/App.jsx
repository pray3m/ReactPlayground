import { useState } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs= [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special characters!",
      label:"Username",
      pattern:"^[A-Za-z0-9]{3,16}$",
      required:true,

    },
    {
      id:2,
      name:"email",
      type:"email",
      placeholder:"Email",
      errorMessage:"It should be valid email!",
      label:"Email",
      required:true,

    },
    {
      id:3,
      name:"birthday",
      type:"date",
      label:"Birthday"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      errorMessage:"Minimum eight characters, at least one uppercase letter, one lowercase letter and one number!",
      label:"Password",
      pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",   
      required:true,
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      errorMessage:"Password didn't match!",
      label:"Confirm password",
      required:true,
      pattern:values.password,
    },
  ]


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const onChange=(e) => {
    setValues({...values,[e.target.name]:e.target.value})
  }

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input)=>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
