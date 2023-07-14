import "../CSS/Signin.css"
import React,{useState} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Signup() {
    const navigate=useNavigate()
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [userType,setuserType]=useState('')
    const [secretKey,setsecretKey]=useState('')
  
    const register=()=>{
        console.log(username,password,email,userType);
        if(userType==='Company' && secretKey!="Secretidentity"){
            alert("Invalid")
        }else{
            axios.post('http://localhost:8000/register',{
                username:username,
                password,
                email,
                userType
            }).then((res)=>{
                console.log(res.data);
                navigate()
            }).catch((err)=>{
                console.log(err)
            })
        }
    }

  return (
    <div><div>
        <Navbar/>
    </div>
        
        <section className="Form my-4 mx-5">
        <div> 
                <div className="row no-gutters">
                    <div className="col-lg-5 px-5 pt-5">
                        <img src="https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=600" className="image-fluid" alt="" />
                    </div>
                    <div className=" fill-the-form col-lg-7 px-5 pt-3">
                        
                        <div className="container-1">

                        <h3 className="font-weight-bold py-3">Sign up to your Account</h3>
                       <form action="">
                        {/* <div  style={{display:"flex",justifyContent:"center"}}>
                            <p>Register as: </p>
                            <input type="radio" name="userType" value="Employee" onChange={(e)=>{setuserType(e.target.value)}} style={{height:"10px",marginLeft:"20px"}}/>
                            Employee
                            <input type="radio" name="userType" value="Company" onChange={(e)=>{setuserType(e.target.value)}} style={{height:"10px",marginRight:"60x"}}/>
                            Company
                        </div> */}
                        <div className="col-md-6">
                        <div className="form-group" style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
                            <label for="form_need" style={{marginRight:"100px",marginTop:"20px"}}>User Type</label>
                            <select id="form_need" name="userType" value={userType} onChange={(e)=>{setuserType(e.target.value)}}className="form-control" required="required" data-error="Please specify your need." style={{width:"500px"}}>
                                <option value="" selected disabled>User Type</option>
                                <option >Employee</option>
                                <option >Company</option>
                            </select>
                            
                        </div>
                    </div>
                            {userType==="Company"?<div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="text" name="secretKey"  onChange={(e)=>{setsecretKey(e.target.value)}} placeholder="SecretKey" className="form-control my-3 p-2" autoComplete="off" required/>
                                </div>
                            </div>: null}
                            
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="text" name="username" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="Username" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}  placeholder="Email-Address" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row input-box-1" >
                                <div className="col-lg-7">
                                    <input type="Password" name="password" value={password} onChange={(e)=>{setpassword((e.target.value))}}  placeholder="Password" className="form-control my-3 p-2" required/>
                                    
                                </div>
                            </div>
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <Link to='/Login'>
                                    <button type="button" onClick={register} className="btn1 mt-3 mb-4">Register</button>
                                    </Link>
                                </div>
                            </div>
                            <p>Already have an account? <a href=""><Link to='/Login'>Log in</Link></a></p>
                       </form>
                        </div>
                    </div>
                </div>
          </div>
      </section>


    </div>
  )
}

export default Signup