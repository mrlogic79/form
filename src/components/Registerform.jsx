import React from 'react';
import { ErrorMessage, FastField, Form, Formik, FieldArray } from 'formik'
import validationSchema from './validationSchema'
import Personalerror from './Personalerror';
import FavoritsField from './FavoritsField';


<validationSchema/>

const initialValues ={
    name: '',
    email: '',
    password: '',
    bio: '',
    address:{
        city: '',
        postalCode:''
    },
    phone:['' , ''],
    favorits:['']
}
const onSubmit = (values , submitProps)=>{
    console.log(submitProps);
    setTimeout(()=>{
        submitProps.setSubmitting(false)
    },5000)
}

const Registerform = () => {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        // validateOnMount
        >


            {formik=>{
                console.log(formik);
                return (
                    <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
                        <div className="row w-100 justify-content-center align-items-center">
                            <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-2 px-3'>
                                <Form className='row'>
                                    <h1 className='text-center'>
                                        <i className='fas fa-user-plus text-primary'></i>
                                    </h1>
                                    <div className="mb-2">
                                        <label htmlFor="name" className="form-label">نام</label>
                                        <FastField type="text" className="form-control" id="name" name='name' placeholder="لطفا از حروف لاتین استفاده کنید"/>
                                        <ErrorMessage name='name'component={Personalerror} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="email" className="form-label">ایمیل</label>
                                        <FastField type="email" className="form-control" id="email" name='email'/>
                                        <ErrorMessage name='email'component={Personalerror} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="form-label">رمز عبور</label>
                                        <FastField type="password" className="form-control" id="password" name='password'/>
                                        <ErrorMessage name='password'component={Personalerror} />
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="password" className="form-label">بیوگرافی</label>
                                        <FastField type="text" className="form-control" id="bio" name='bio' component="textarea"
                                        
                                        />
                                        <ErrorMessage name='bio' component={Personalerror}/>
                                    </div>
        
        
        
                                    <div className="mb-2 col-6">
                                        <label htmlFor="city" className="form-label">شهر</label>
                                        <FastField type="text" className="form-control" id="city" name='address.city'/>
                                        <ErrorMessage name='address.city'component={Personalerror} />
                                    </div>
                                    <div className="mb-2 col-6">
                                        <label htmlFor="postalCode" className="form-label">کد پستی</label>
                                        <FastField type="text" className="form-control" id="postalCode" name='address.postalCode'/>
                                        <ErrorMessage name='address.postalCode' component={Personalerror}/>
                                    </div>
        
        
                                    <div className="mb-2 col-6">
                                        <label htmlFor="mobilePhone" className="form-label">شماره موبایل</label>
                                        <FastField type="text" className="form-control" id="mobilePhone" name='phone[0]'/>
                                        <ErrorMessage name='phone[0]'component={Personalerror} />
                                    </div>
                                    <div className="mb-2 col-6">
                                        <label htmlFor="telePhone" className="form-label">شماره ثابت</label>
                                        <FastField type="text" className="form-control" id="telePhone" name='phone[1]'/>
                                        <ErrorMessage name='phone[1]' component={Personalerror}/>
                                    </div>
        
                                    <div className="mb-2">
                                        <FieldArray type="text" className="form-control" id="favorits" name='favorits'>
                                            {props=> <FavoritsField {...props}/>}
                                        </FieldArray>        
                                    </div>
        
                                    <div className='text-center w-100'>
                                        <button type="submit" className="btn btn-primary" 
                                        disabled={ !(formik.dirty && formik.isValid) || formik.isSubmitting}
                                        >
                                            {
                                                formik.isSubmitting ? (
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                ) : ("ثبت نام")
                                            }
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }}


        </Formik>
    );
}

export default Registerform;