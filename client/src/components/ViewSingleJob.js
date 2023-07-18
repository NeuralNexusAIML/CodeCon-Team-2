import React,{useEffect,useState} from 'react'
import '../CSS/data.css'
import {useParams,Link} from 'react-router-dom'
import axios from 'axios'




function ViewSingleJob() {
  const [data,setdata]=useState([])
  const {id}=useParams();
  const [uid,setuid] = useState('')
  useEffect(()=>{
    const fetchdata = async ()=>{
      axios.get(`http://localhost:8000/job/${id}`).then((res)=>{
        console.log(res.data)
        setdata(res.data.data)
        setuid(res.data.data._id)
        console.log(uid)
      }).catch((err)=>{
      console.log(err)
      })
    }
    fetchdata();
  },[])
  return (
    <div>
      <section class="hero" id="home">
          <div class="container">
            <h2 class="h1 hero-title">{data.title}</h2>

            <p class="hero-text">
              {data.desc}
            </p>

            <div class="btn-group">
              <a href="#gallery"
                ><button class="btn btn-primary">Search</button></a
              >

              <button class="btn btn-secondary">Explore</button>
            </div>
          </div>
        </section>
      <div className='cardcccc' >
       <div className='question-112'>
        <div className='hr1tag row-1'>
        <hr/>
        </div>
        <div className='row-12 namesunder'>
          <div className='col-6 totalname'>
            <div className='name111'>
              Organisation Name
            </div>
            <div className='name112' style={{marginRight:"320px"}}>
        <h6>{data.orgname}</h6>
            </div>
          </div> 
          <div className='col-6 totalname'>
            <div className='name111'>
              Location
            </div>
            <div className='name112' style={{marginRight:"300px"}}>
        <h6>{data.location}</h6>
            </div>
            
          </div> 
        </div>
        <div className='hr1tag row-3'> 
        <hr/>
        </div>
        <div className='row-12 name113'>
          Required Skills:
        </div>
        <div className="totalname1">
        <h6>{data.skills}</h6>
        </div>
        <div className='row-12 name113'>
          Minimum Experience required
        </div>
        <div className="totalname1">
        <h6>{data.exp}</h6>
        </div>
        <div className='row-12 name113'>
          Timings:
        </div>
        <div className="totalname1">
        <h6>{data.time}</h6>
        </div>
        <div className='row-12 name113'>
          Number of Employees currently working
        </div>
        <div className="totalname1">
        <h6>{data.capacity}</h6>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button"><Link to='/apply' state={{data:data}} style={{textDecoration:"none",color:"white"}}>Apply</Link></button>
      </div>
      </div>
      </div>
    <div>
    {/* <div class="container12121">
        <div>
            <img src="./z31Q4Akh_400x400.jpg" alt="img" height="150px" width="150px"/>
        </div>
        <div>
            <h4>{data.title}</h4>
            <h5>{data.time}</h5>

            <p>{data.desc}</p>
        </div>
        <div>
            <p>
                <b>Country:</b> {data.location}
                <br/>
                <b>Experience:</b> {data.exp}
                <br/>
                <b>Capacity</b> {data.capacity}
                <br/>
            </p>
            <button type="button" class="btn btn-primary">View this job</button>
        </div>
    </div> */}
    </div>
    </div>
  )
}

export default ViewSingleJob