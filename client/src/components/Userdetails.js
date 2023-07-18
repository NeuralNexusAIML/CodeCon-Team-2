import React,{useState} from 'react'
//import "../CSS/form.css"
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function Userdetails() {
    const location = useLocation();
    const data = location.state?.data;

    const [orgname,setOrgname] = useState(data? data.orgname:'not possible');
    const [email,setEmail] = useState('');
    const [phoneno,setPhoneno] = useState('');
    const [job,setJob] = useState('');
    const [exp,setExp] = useState('');
    const [city,setCity] = useState('');
    const [country,setCountry] = useState('');
    const [resume,setResume] = useState('');

    const handleClick = ()=>{
        console.log(orgname,resume,email,phoneno,job,exp,city,country);
        axios.post('http://localhost:8000/applyforjob',{orgname:orgname,email,phoneno,job,exp,city,country,resume}).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
        <div>
            <div className="container">
        <div className=" text-center mt-5 ">
            <h1>Apply For Job</h1>            
        </div>
    <div className="row ">
      <div className="col-lg-7 mx-auto">
        <div className="card mt-2 mx-auto p-4 bg-light">
            <div className="card-body bg-light">
       
            <div className = "container">
                             <form id="contact-form" role="form">
            <div className="controls">
            <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginRight:"5%"}}>Organaisation Name</label>
                            <input id="form_name" type="text" name="orgname" value={orgname} className="form-control" placeholder="type org name*" required="required" data-error="Firstname is required." style={{width:"580px"}}/>
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginTop:"20px"}}>Email</label>
                            <input id="form_name" type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Please enter your email*" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_lastname"style={{marginRight:"150px",marginTop:"20px"}}>Phone number</label>
                            <input id="form_lastname" type="text" name="phoneno" value={phoneno} onChange={(e)=>{setPhoneno(e.target.value)}} className="form-control" placeholder="Please enter u r phone number*" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginRight:"150px",marginTop:"20px"}}>Job Cateogory</label>
                            <input id="form_name" type="text" name="job" value={job} onChange={(e)=>{setJob(e.target.value)}} className="form-control" placeholder="Please enter your job type*" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_lastname"style={{marginRight:"150px",marginTop:"20px"}}>Experience</label>
                            <input id="form_lastname" type="text" name="exp" value={exp} onChange={(e)=>{setExp(e.target.value)}} className="form-control" placeholder="Please enter u r experience*" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_email" style={{marginRight:"230px",marginTop:"20px"}}>City</label>
                            <input id="form_email" type="email" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}} className="form-control" placeholder="Please enter your city*" required="required" data-error="Valid email is required."/>    
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_need" style={{marginRight:"100px",marginTop:"20px"}}>Choose country*</label>
                            <select id="form_need" name="country" value={country} onChange={(e)=>{setCountry(e.target.value)}}className="form-control" required="required" data-error="Please specify your need.">
                                <option value="" selected disabled>Country</option>
                                <option >India</option>
                                <option >Australia</option>
                                <option >US</option>
                                <option >Other</option>
                            </select>
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                            <label for="form_message" style={{marginRight:"470px",marginTop:"10px",height:"20px"}}>Resume</label>
                            <textarea id="form_message" name="resume" value={resume} onChange={(e)=>{setResume(e.target.value)}} className="form-control" placeholder="Post your resume link here." rows="4" required="required" data-error="Please, leave us a message."></textarea
                                >
                            </div>

                        </div>
                    <div className="col-md-12" style={{marginTop:"20px",width:"100%",marginLeft:"50px"}}>  
                        <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Send Message" onClick={handleClick} />
                    
                </div>
             </div>
        </div>
         </form>-
        </div>
            </div>


    </div>

    </div>

</div>
</div>

        </div>

  )
}