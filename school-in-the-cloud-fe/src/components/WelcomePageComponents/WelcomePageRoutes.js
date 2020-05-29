import React from 'react';
import { useHistory } from 'react-router-dom';
import './StyleComponents.css';

const initialState = {
    selectOption: {
        student: "student",
        volunteer: "volunteer",
        admin: "admin"
    }
}


function WelcomePageRoutes() {
    const { selectOption } = initialState;
    const history = useHistory();

    //ONCHANGE option
    const takeMeToLogin = () => {
        history.push(`/api/auth/login`);       
    }

    const takeMeToRegister = (e) => {
        if (e.target.value !== '') {
            history.push(`/api/${e.target.value}/register`);
        }
    }




    return (
        <>
        <h1 className="mainHeader">Welcome to the School in the Cloud!</h1> 
        
        <section className="Navbar-Intro">             
            <div>   
                           
                <h2 className='welcomeHeader'>Already have an account?</h2>
                <p className="matchFonts">Select one of the following to log in.</p>
                <select className="registerSelect" onChange={takeMeToLogin}>
                    <option value=''>Select</option>
                    <option value={selectOption.student}>Student</option>
                    <option value={selectOption.volunteer}>Volunteer</option>
                    <option value={selectOption.admin}>Admin</option>
                </select>
            </div>




            <div>
                <h2 className='welcomeHeader'>Don't have an account and need to register?</h2>
                <p className="matchFonts">Select one to register</p>
                <select className="registerSelect" onChange={takeMeToRegister}>
                    <option value=''>Select</option>
                    <option value={selectOption.student}>Student</option>
                    <option value={selectOption.volunteer}>Volunteer</option>
                    <option value={selectOption.admin}>Admin</option>
                </select>

            </div>

        </section>

        </>

    );
}

export default WelcomePageRoutes;
