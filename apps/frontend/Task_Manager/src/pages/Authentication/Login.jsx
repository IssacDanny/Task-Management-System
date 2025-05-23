import React, { useState } from 'react'
import AuthenticationLayout from '../../components/AuthenticationLayout' 
import { useNavigate, Link } from "react-router-dom";
import Input from '../../components/Inputs/Input';
import { validateEmail } from '../../utils/helper';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login API Call
  };
  return <AuthenticationLayout>
    <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className='text-xl font-semibold text-black'>Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>
          Please enter your details to log in
        </p>

        <form onSubmit={handleLogin}>
          <Input
            Value={email}
            onChange={({ target }) => setEmail(target.value)}
            label='Email Address'
            placeholder="user@example.com"
            type="text"
            />

            <Input
              Value={password}
              onChange={({ target }) => setPassword(target.value)}
              label='Password'
              placeholder="Min 8 character"
              type="password"
            />

            {error && <p className='text-red-500 text-xs p-2.5'>{error}</p>}

            <button type='submit' className='btn-primary'>
              LOGIN
            </button>

            <p className='text-[13px] text-slate-800 mt-3'>
              Don't have an account?{" "}
              <Link className="font-medium text-primary underline" to="/signUp">
                SignUp
              </Link>
            </p>
        </form>
      </div>
    </AuthenticationLayout>;
  
};

export default Login