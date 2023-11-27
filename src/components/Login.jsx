/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Button, TextField } from '@mui/material'
import "axios"
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Login = ({ setToggle }) => {
    const setData = (e) => {
        let data = {}
        const tosterSuccess = (data) => toast.success(data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        const tosterError = (data) => toast.error(data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
        e.preventDefault()
        const emailReg = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        console.log(e.target.email.value)
        if (emailReg.test(e.target.email.value)) {
            data = {
                "email": e.target.email.value ?? null,
                "password": e.target.password.value
            }
            axios.post("http://localhost:3000/login", data).then(res => res.data.msg ? tosterSuccess(res.data.msg) : tosterError(res.data.err));
        }
        else {
            toast.error('Invalid Email or password', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }
    return (
        <>
            <form onSubmit={setData} method='POST'>
                <div className='signupForm'>
                    <h1>Login Form</h1>
                    <TextField id="standard-basic" label="Enter Email" variant="standard" name='email' />
                    <br />
                    <TextField id="standard-basic" label="Enter Password" variant="standard" name='password' type='password'></TextField>
                    <br />
                    <Button variant="contained" color='warning' type='submit'>Submit</Button>
                    <br />
                    <a onClick={() => setToggle("signup")} > Don't have Account? Sign up</a>
                </div>
                <ToastContainer />
            </form>
        </>
    )
}

export default Login