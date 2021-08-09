import React, {useState,useEffect}from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Form.css'

export default function ViewList() {
    const[res,setResult]=useState([]);
    const[res1,setRes]=useState([]);
    const handleDelete=(e)=>{
        e.preventDefault();
          const id=e.target.id;
          console.log(id);
          const url=` http://localhost:4000/records/${id}`
          axios.delete(url)
          .then(res1 => {
            console.log(res1);
            setRes(res1.data);
            console.log(res1.data);
          })
      }
    useEffect(()=>{
        console.log("Executed after render method=======");
        axios.get("http://localhost:4000/records").then(res => {
          console.log(res);
          setResult(res.data);
        }).catch(e=>{
          console.error("ERR in country.json...");
          console.error(e);
        }).finally(()=>{
          console.log("loaded");
        })
    },[res1])

    return (
        <div>
            <div>
                <br></br>
                <div className="container-lg-10 ">
            <div className="col-sm-15">
            <div className="card"> 
            <div className="card-header"><h4>List of Accounts</h4></div>
            <div className="card-body"> 
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                    <th scope="col">ID</th> 
                    <th scope="col">FirstName</th>
                    <th scope="col">LastName</th>
                    <th scope="col">AGE</th>
                    <th scope="col">Gender</th>
                    <th scope="col">EmailID</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Institue</th>
                    <th scope="col">Department</th>
                    <th scope="col">Country</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {res.map((x)=>{
                    return <><tr>
                    <td><label key={x.id}>{x.id}</label></td>
                    <td><label key={x.id}>{x.firstname}</label></td>
                    <td><label key={x.id}>{x.lastname}</label></td>
                    <td><label key={x.id}>{x.age}</label></td>
                    <td><label key={x.id}>{x.gen}</label></td>
                    <td><label key={x.id}>{x.email}</label></td>
                    <td><label key={x.id}>{x.phonenumber}</label></td>
                    <td><label key={x.id}>{x.institute}</label></td>
                    <td><label key={x.id}>{x.department}</label></td>
                    <td><label key={x.id}>{x.country}</label></td>
                    <td><button className="btn btn-danger" id={x.id} onClick={handleDelete}>Remove</button></td>
                    </tr></>})}
                </tbody>
            </table>
        </div>
    </div></div>
</div></div>
</div>
 )
}
