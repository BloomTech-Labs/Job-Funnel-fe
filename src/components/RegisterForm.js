import React, {useState} from "react";


const RegisterForm = (props) => {
  const [register, setRegister] = useState({
    first_name: '',
    last_name: '',
    email:'',
    password:'',
    user_type: '',
    isLoggedIn: false
  })

  const handleChange = event => {
    setRegister({ ...register, [event.target.name]: event.target.value })
  }


  const handleSubmit = event => {
    event.preventDefault();
    props.history.push('/dashboard')
  }


    return (
        <div>
            <form>
                <h4>Register</h4>
                <div onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="first_name"
                        placeholder="Enter Your First Name"
                        value={register.first_name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="last_name"
                        placeholder=" Enter Your Last Name"
                        value={register.last_name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        value={register.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder=" Create a Password"
                        value={register.password}
                        onChange={handleChange}
                    />
                    <select value={register.user_type} onChange={handleChange}>
                        <option name="applicant">Job Applicant</option>
                        <option name="recruiter">Recruiter</option>
                    </select>
                       
                        

                  
                </div>
                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm;


