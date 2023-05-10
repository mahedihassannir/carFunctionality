import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { contexM } from '../AuthProvider/ContexProvider';

const Register = () => {

    let { createUser } = useContext(contexM)


    let handleRegister = e => {
        e.preventDefault()

        let from = e.target

        let email = from.email.value
        let password = from.password.value

        let final = { email, password }

        console.log(final)
        createUser(email, password)

            .then(res => {
                let user = res.user
                console.log(user);
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div>
            <div className='w-full h-screen flex justify-center items-center'>
                <div className='w-[400px] border-2 rounded-md pb-10'>
                    <h1 className='text-center font-bold py-3 text-2xl'>Register</h1>
                    <form onSubmit={handleRegister} className='ml-5'>
                        <label >

                            <span>
                                email
                            </span>

                        </label>
                        <input className='py-4 pl-2 w-11/12 border-2  rounded-md' placeholder='Your email' type="email" name="email" id="" />

                        <label htmlFor="">
                            <span>password</span>
                        </label>
                        <input className=' pl-2 py-4 w-11/12 border-2  rounded-md' placeholder='Type password' type="password" name="password" id="" />

                        <label htmlFor="">
                            <span>confirm  password</span>
                        </label>
                        <input className=' pl-2 py-4 w-11/12 border-2  rounded-md' placeholder='conform password' type="password" name="password2" id="" />

                        <div>
                            <input className='w-11/12 mx-auto hover:bg-blue-400 py-3  rounded-md bg-blue-300 hover:text-white mt-3' value="Register" type="submit" name="" id="" />
                        </div>
                        <div className='text-center'>

                            <Link className='text-blue link' to="/Login">
                                have an account<span className='text-orange-500'>Login</span>
                            </Link>

                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Register;