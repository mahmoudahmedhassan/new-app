import React from 'react';
import classes from './user.module.css'
import OverLay from '../users table/OverLay';
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { TfiBackRight } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
function User() {
    const { userData } = useSelector(state => state.userDataSlice);
    console.log(userData)
    const navigate = useNavigate();
    const [t] = useTranslation();

    return (
        <div>
            <div>
                <OverLay tableUsersData={userData} /> 
            </div>
            <button onClick={()=>navigate('/users')} title='رجوع' className={classes.back}><TfiBackRight style={{fontSize: '24px'}}/></button>

            <div style={{ paddingTop: '125px', marginBottom: '30px', textAlign: 'center' }}>
                <form className={classes.form}>
                    <div className={classes.form_input_felid}>
                    <Form.Control
                          type="text"
                          placeholder={t('post')}
                    />
                     <Button variant="success">{t('post')}</Button> 
                    </div>
                </form>
            </div>
        </div>
    )
}

export default User