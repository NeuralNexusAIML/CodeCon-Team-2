import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../CSS/form.css'

function AddJobDetailsComp() {

    // const customcard = {
    //     border: '2px solid black'
    // };

    // const customip = {
    //     border: 'none',
    //     borderBottom: '1px solid black',
    //     borderRadius: 0,
    //     padding: 0,
    //     backgroundColor: 'transparent',
    // };

    const [title,setTitle]=useState('');
    const [orgname,setOrgname]=useState('');
    const [location,setLocation]=useState('');
    const [time,setTime]=useState('');
    const [capacity,setCapacity]=useState('');
    const [skills,setSkills]=useState('');
    const [desc,setDesc]=useState('');
    const [exp,setExp]=useState('');

    const handleClick=()=>{
        console.log(title,orgname,location,time,capacity,skills,desc,exp);
        axios.post('http://localhost:8000/addjobdetails',{title:title,orgname,location,time,capacity,skills,desc,exp}).then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>
        
        {/* <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card" style={customcard}>
                        <div className="card-body">
                            <h3 className="card-title">Add Job</h3>
                            <form>
                                <div className="form-row">
                                    
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Job Title</span>
                                    <input type="text" class="form-control" value={title} name='title' onChange={(e)=>{setTitle(e.target.value)}} placeholder="Name of the Job title" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Organisation Name</span>
                                    <input type="text" class="form-control" value={orgname} name='orgname' onChange={(e)=>{setOrgname(e.target.value)}} placeholder="Name of your company" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Time</span>
                                    <input type="text" class="form-control" value={time} name='time' onChange={(e)=>{setTime(e.target.value)}} placeholder="Time of work" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Capacity</span>
                                    <input type="text" class="form-control" value={capacity} name='capacity' onChange={(e)=>{setCapacity(e.target.value)}} placeholder="No of employees in your company " aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Skills</span>
                                    <input type="text" class="form-control" value={skills} name='skills' onChange={(e)=>{setSkills(e.target.value)}} placeholder="Enter your skill requirement" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Description</span>
                                    <input type="text" class="form-control" value={desc} name='desc' onChange={(e)=>{setDesc(e.target.value)}} placeholder="Description about the job" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Experience</span>
                                    <input type="text" class="form-control" value={exp} name='exp' onChange={(e)=>{setExp(e.target.value)}} placeholder="minimum experience requirement" aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    <div class="input-group mb-3">
                                    <span class="input-group-text" id="basic-addon1">Location</span>
                                    <input type="text" class="form-control" value={location} name='locat' onChange={(e)=>{setLocation(e.target.value)}} placeholder="Location " aria-label="Username" aria-describedby="basic-addon1"/>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div className="container">
        <div className=" text-center mt-5 ">
            <h1>PostJob</h1>            
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
                            <label for="form_name" style={{marginRight:"230px"}}>Title</label>
                            <input id="form_name" type="text" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" placeholder="Please enter your job type*" required="required" data-error="Firstname is required." style={{width:"580px"}}/>
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginRight:"200px",marginTop:"10px"}}>Organisation Name</label>
                            <input id="form_name" type="text" name="orgname" className="form-control" value={orgname}  onChange={(e)=>{setOrgname(e.target.value)}} placeholder="Please enter your job type*" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_lastname"style={{marginRight:"194px",marginTop:"10px"}}>Timings</label>
                            <input id="form_lastname" type="text"  value={time} name='time' onChange={(e)=>{setTime(e.target.value)}} className="form-control" placeholder="Please enter last date of applying*" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginRight:"170px",marginTop:"20px"}}>Job Capacity</label>
                            <input id="form_name" type="text"  value={capacity} name='capacity' onChange={(e)=>{setCapacity(e.target.value)}} className="form-control" placeholder="Please enter your job type*" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_lastname"style={{marginRight:"194px",marginTop:"20px"}}>Skills</label>
                            <input id="form_lastname" type="text"  value={skills} name='skills' onChange={(e)=>{setSkills(e.target.value)}} className="form-control" placeholder="Please enter last date of applying*" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginRight:"170px",marginTop:"20px"}}>Experience</label>
                            <input id="form_name" type="text"   value={exp} name='exp' onChange={(e)=>{setExp(e.target.value)}} className="form-control" placeholder="Please enter your job type*" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_email" style={{marginRight:"220px",marginTop:"20px"}}>Description</label>
                            <input id="form_email" type="text"  className="form-control" value={desc} name='desc' onChange={(e)=>{setDesc(e.target.value)}} placeholder="Please enter your city*" required="required" data-error="Valid email is required."/>    
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_email" style={{marginRight:"220px",marginTop:"20px"}}>Description</label>
                            <input id="form_email" type="text"  className="form-control" value={location} name='location' onChange={(e)=>{setLocation(e.target.value)}} placeholder="Please enter your city*" required="required" data-error="Valid email is required."/>    
                        </div>
                    </div>
                </div>

                <div className="row">
                    
                    <div className="col-md-12" style={{marginTop:"20px",width:"100%"}}>  
                        <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" value="Send Message" onClick={handleClick}/>
                    </div>
                    </div>
                    </div>
                    </form>
                    </div>
                        </div>


                </div>

                </div>

            </div>
            </div> */}
        <div className="container">
        <div className=" text-center mt-5 ">
            <h1>PostJob</h1>            
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
                            <label for="form_name" style={{marginRight:"230px"}}>Title</label>
                            <input id="form_name" type="text" className="form-control" placeholder="Please enter your job type*" value={title} name='title' onChange={(e)=>{setTitle(e.target.value)}} required="required" data-error="Firstname is required." style={{width:"580px"}}/>
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginRight:"100px",marginTop:"10px",border:"black"}}>Orgnaisation Name</label>
                            <input id="form_name" type="text" name="orgname" className="form-control" value={orgname}  onChange={(e)=>{setOrgname(e.target.value)}}placeholder="Please enter your job type*" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_lastname"style={{marginRight:"160px",marginTop:"10px"}}>Timings</label>
                            <input id="form_lastname" type="text"  value={time} name='time' onChange={(e)=>{setTime(e.target.value)}}  className="form-control" placeholder="Please enter last date of applying*" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_name" style={{marginRight:"150px",marginTop:"20px"}}>Job Capacity</label>
                            <input id="form_name" type="text" value={capacity} name='capacity' onChange={(e)=>{setCapacity(e.target.value)}} className="form-control" placeholder="Please enter your job type*" required="required" data-error="Firstname is required."/>
                            
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_lastname"style={{marginRight:"180px",marginTop:"20px"}}>Experience</label>
                            <input id="form_lastname" type="text" value={exp} name='exp' onChange={(e)=>{setExp(e.target.value)}}className="form-control" placeholder="Please enter last date of applying*" required="required" data-error="Lastname is required."/>
                                                            </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_email" style={{marginRight:"200px",marginTop:"20px"}}>Skills</label>
                            <input id="form_email" type="text" value={skills} name='skills' onChange={(e)=>{setSkills(e.target.value)}}className="form-control" placeholder="Please enter your city*" required="required" data-error="Valid email is required."/>    
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="form_need" style={{marginRight:"50px",marginTop:"20px"}}>Please specify your need *</label>
                            <select id="form_need" value={location} name='locat' onChange={(e)=>{setLocation(e.target.value)}}className="form-control" required="required" data-error="Please specify your need.">
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
                            <label for="form_message" style={{marginRight:"380px",marginTop:"20px"}}>Job Description</label>
                            <textarea id="form_message" value={desc} name='desc' onChange={(e)=>{setDesc(e.target.value)}}className="form-control" placeholder="Write your message here." rows="4" required="required" data-error="Please, leave us a message." style={{border:"black"}}></textarea
                                >
                            </div>

                        </div>
                    <div className="col-md-12" style={{marginTop:"20px",marginLeft:"70px",width:"100%"}}>  
                        <input type="submit" className="btn btn-success btn-send  pt-2 btn-block" onClick={handleClick} value="Send Message" />
                    
                </div>
             </div>
        </div>
         </form>
        </div>
            </div>


    </div>

    </div>

</div>
</div>


    </div>
  )
}

export default AddJobDetailsComp