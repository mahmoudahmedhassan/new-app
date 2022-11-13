import React from 'react';
import classes from './user.module.css'
import OverLay from '../users table/OverLay';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { TfiBackRight } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

function User() {
    const { userData } = useSelector(state => state.userDataSlice);
    console.log(userData)
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <OverLay tableUsersData={userData} /> 
            </div>
            <button onClick={()=>navigate('/users')} title='رجوع' className={classes.back}><TfiBackRight style={{fontSize: '24px'}}/></button>

            <div style={{ paddingTop: '200px', marginBottom: '30px', textAlign: 'center' }}>
                <form className={classes.form}>
                    <div className={classes.form_input_felid}>
                    <Form.Control
                          type="text"
                          placeholder="post"
                    />
                     <Button variant="success">post</Button> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default User