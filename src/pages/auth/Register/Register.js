import React from 'react'
import unitedFlag from '../../../components/assets/united-states.png';
import SliderLogin from '../login/slider'
import { Formik, Form, } from 'formik';
import { TextField } from '../login/TextField';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { insertUserData } from '../../../redux/auth/loginSlice'
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { FaUserAlt ,FaPhone,FaRegAddressCard} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

function Registration() {
  const {loading, error } = useSelector(state => state.userRegisterSlice)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = Yup.object({
    UserName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    lastName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    Phone: Yup.string().max(11, 'Must be 11 numbers ').required('Required'),
    Password: Yup.string().required(),
    Email: Yup.string().email('Email is invalid').required('Email is required'),
    Id: Yup.string().max(15, 'Must be 15 numbers ').required('Required'),
  })

  return (
    <div>
      <div className='userDetails'>
        <Container className='main_container'>
          <Row>
            <Col md={6}>

              <div className='ss'>
                <div className='platform'>

                  <div className='platform-smart-gate'>

                    <div className='platform_name'>
                      <span>S</span>mart <span>G</span>ate
                    </div>
                    <div className='login_lang'>
                      <img src={unitedFlag} alt={unitedFlag} height="30px" />
                    </div>

                  </div>

                  <div className='platform-title text-center'>
                    <h1>Hello!</h1>
                  </div>

                </div>

                <Formik
                  initialValues={{
                    UserName: '',
                    Password: '',
                    Email:'',
                    firstName:'',
                    lastName:''

                    // Phone:'',
                    // Id:''

                  }}
                validationSchema={validate}
                onSubmit={(values, { resetForm }) => {
                  console.log(values)
                  dispatch(insertUserData(values))
                  resetForm({ values: '' });
                  // navigate('./loginUser')
                }}
                >
                  {(formik) => (
                    <div>

                      <Form >
                        <Row>
                          <Col sm={12}>
                            <TextField name="UserName" type="text" placeholder="UserName" icon={<FaUserAlt/>} />
                          </Col>
                          <Col sm={12}>
                            <TextField name="firstName" type="text" placeholder="firstName" icon={<FaUserAlt/>} />
                          </Col>
                          <Col sm={12}>
                            <TextField name="lastName" type="text" placeholder="lastName" icon={<FaUserAlt/>} />
                          </Col>
                          <Col sm={12}>
                            <TextField name="Email" type="email" placeholder="Email" icon={<MdAlternateEmail/>} />
                          </Col>
                          
                          {/* <Col sm={12}>
                            <TextField name="Phone" type="number" placeholder="Phone" icon={<FaPhone/>} />
                          </Col> */}
                          {/* <Col sm={12}>
                            <TextField name="Id" type="number" placeholder="Card Number" icon={<FaRegAddressCard/>}/>
                          </Col> */}
                          <Col sm={12}>
                            <TextField name="Password" type="Password" placeholder="Password" icon={<RiLockPasswordLine/>} />
                          </Col> 
                        </Row>
                        {/* <div>{error && <p style={{ color: 'red' }}> {error} </p>}</div> */}

                        <div className="">
                          <button className="btn btn-dark mt-3"
                            type="submit"
                            style={{ width: '100%', background: '#4B77BE', border: 'none' }}>
                            {/* {loading ? 'Loading...' : 'Registration'}     */} Registration
                          </button>
                        </div>
                      </Form>

                    </div>
                  )}

                </Formik>

                <footer className="footer text-center">

                  <div className="support my-5">
                    <p className="text-center">
                      for technical support call us on
                      <a className="text-center" href="/">
                        samrt@gate.com
                      </a>
                    </p>
                  </div>
                  <div className='footer-footer'>
                    <p>All Rights Reserved by Smart Gate admin. Designed and Developed by</p>
                    <a href="/" style={{ color: '#095ffc' }}> Smart Gate</a>
                  </div>
                </footer>

              </div>

            </Col>

            <Col md={6} className='p-0'>
              <div className='slider_login'>
                <SliderLogin />
              </div>
            </Col>
          </Row>
        </Container>


      </div >
    </div>
  )
}

export default Registration