/* eslint-disable react/prop-types */
import { Button, TextField } from '@mui/material'
import axios from 'axios';

const Signup = ({ setToggle }) => {
    let data = {};
    const setData = (e) => {
        data[e.target.name] = e.target.value
    }
    const sendData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/register', data).then(res => console.log(res.data))
    }
    return (
        <form onSubmit={sendData} method='post'>
            <div className='signupForm'>
                <h1>Signup Form</h1>
                <TextField id="standard-basic1" label="Enter Name" variant="standard" name='name' onChange={setData} />
                <br />
                <TextField id="standard-basic2" label="Enter Email" variant="standard" name='email' onChange={setData} />
                <br />
                <TextField id="standard-basic3" label="Enter Password" variant="standard" name='password' type='password' onChange={setData} />
                <br />
                <TextField id="standard-basic4" label="Enter Gender" variant="standard" name='gender' onChange={setData} />
                <br />
                <Button variant="contained" color='warning' type='submit'>Submit</Button>
                <br />
                <a onClick={() => setToggle("login")} > Already Account? Log in</a>
            </div>
        </form>
    )
}

export default Signup