import React, {useState,useEffect} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import './Form.css';  
import { Link } from 'react-router-dom';

export default function Register() {
    const [submitted, setSubmitted] = useState(false);
    const [country,setCountry] = useState([]);
    const [res,setRes] = useState(0);

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    
    const validationSchema = Yup.object({
        firstname : Yup.string().required("Firstname is mandatory"),
        lastname : Yup.string().required("lastname is mandatory"),
        gen: Yup.string().required("female/male"),
        email : Yup.string().email("Invalid Email").required("Pls Enter a Email"),
        age:Yup.number().typeError("Enter a valid age").min(20," Min Age is 20").max(60,"Max age is 60"),
        phonenumber : Yup.string().matches(phoneRegExp,"Invalid"),
        institute: Yup.string().required("Req"),
        department : Yup.string().required("Req"),
        country: Yup.string().required("req")
    })


    const { handleSubmit,handleChange,values,errors} = useFormik({
        initialValues: {
            firstname:'',
            lastname:'',
            age:0,
            gen:'',
            email:'',
            phonenumber: '',
            institute:'',
            department :'',
            country: -1
        },
        validationSchema,
        onSubmit(values) {
            console.log("=============Submitted");
            console.log(values);
            setSubmitted(true);
           

            const reqOptios = {
                method:"POST",
                headers : {
                  "Content-Type":"application/json"   
                },
                body: JSON.stringify(values)
              };
        
            fetch(" http://localhost:4000/records",reqOptios).then(res => res.json()).then(data=>{
                console.log("saved");
                console.log(data.id);
                setRes(data.id);
              }) 
        }
    }) 
    

      useEffect(()=>{
        console.log("Executed after render method=======");
        fetch("http://localhost:4001/country").then(res => res.json()).then(data=>{
          console.log(data);
          setCountry(data);
        }).catch(e=>{
          console.error("ERR in country.json...");
          console.error(e);
        }).finally(()=>{
          console.log("loaded");
        })
    },[])

    return (
        <div><br></br>
            <div className="container-md ">
            <div className="col-sm-8">
            <div className="card text-center">
            <div className="card-header"><h4>STUDENT Registration</h4></div>
            <div className="card-body">
            <form onSubmit={handleSubmit} noValidate>
            
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>First Name</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="firstname" onChange={handleChange} values={values.firstname} placeholder="First Name" />
                            <h6>{errors.firstname ? errors.firstname : null}</h6>
                            
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Last Name</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="lastname" onChange={handleChange} values={values.lastname} placeholder="Last Name" /> 
                            <h6>{errors.lastname ? errors.lastname : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>AGE</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input type="text" name="age" onChange={handleChange} values={values.age} placeholder="age" /> 
                            <h6>{errors.age ? errors.age : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Gender</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                        <input type="text" name="gen" onChange={handleChange} values={values.gen} placeholder="Gender"/> 
                        <h6>{errors.gen ? errors.gen : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Email ID</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-3 form-group">
                            <input  type="text" name="email" onChange={handleChange} values={values.email} placeholder="EmailID"/> 
                           <h6> {errors.email ? errors.email : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Phone Number</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="phonenumber" onChange={handleChange} values={values.phonenumber} placeholder="Mobile No" /> 
                           <h6>{errors.phonenumber ? errors.phonenumber : null}</h6> 
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Institute </h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="institute" onChange={handleChange} values={values.institute} placeholder="Institute " /> 
                           <h6>{errors.institute ? errors.institute : null}</h6> 
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Department</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                            <input  type="text" name="department" onChange={handleChange} values={values.department} placeholder="Department" /> 
                           <h6> {errors.department ? errors.department : null}</h6>
                        </div>
                </div>
                <div className="row">
                <div className="col-sm-4 form-group">
                    <h5>Country Origin</h5>
                </div>
                <div className="col-sm-1 form-group">
                    <label className="control-label">:</label></div>
                        <div className="col-sm-1 form-group">
                        <select name="country" onChange={handleChange} value={values.country}>
                            <option value="-1">Please select a country of origin</option>
                            {country.map((x) => {
                            return <option key={x.id} value={x.name}>{x.name}</option>;
                            })}
                        </select> 
                           <h6> {errors.country ? errors.country : null}</h6>
                        </div>
                </div><br></br>
                    <button className="btn btn-dark" >Submit </button>
                    <h1></h1> <Link  className="btn btn-primary active" to={'/dashborad'}>Back</Link>
            </form>
            </div>
         </div>
    </div>
</div>
</div>
    )
}
