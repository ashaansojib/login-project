import React from 'react';

const Register = () => {

    const handlerSubmit = (event) =>{
        event.preventDefault();
        const user = event.target.email.value;
        const password = event.target.password.value;
        console.log(user, password)
    }
    
    return (
        <form className='space-y-2 p-4' onSubmit={handlerSubmit}>
            <h3 className='font-semibold text-xl'>Please Login</h3>
            <input onChange={emailHandler} className='border' type="text" name="email" id="" placeholder='Type Your Email'/>
            <br />
            <input onBlur={passwordHandler} type="password" name="password" id="" placeholder='Type Password' className='border' />
            <br />
            <input type="submit" value="Login" className='border cursor-pointer py-2 px-4 rounded-md font-semibold hover:text-sky-300' />
        </form>
    );
};

export default Register;