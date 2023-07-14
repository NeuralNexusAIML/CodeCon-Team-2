import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import '../CSS/style.css'
import axios from 'axios'
function ViewJobs() {
   const [data,setdata] = useState('')
  
  useEffect(()=>{
    axios.get('http://localhost:8000/viewjobs').then((res)=>{
      console.log(res.data)
      setdata(res.data.data)
      console.log(data.length)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

return (
<div className="App"> 
<div className='flex-123'>
            {
              data.length>0?
              data.map((item,index)=>{
                return (
                  <div className='card-card-123' style={{height:"280px",width:"350px",marginLeft:"20px"}}>
                    <div className='question-q' style={{height:"90px",justifyContent:"center",backgroundColor:"#bc8f8f"}}>{item?.title}</div>
                    <div className='questiondesc-q' style={{justifyContent:"left",marginBottom:"20px",marginLeft:"20px"}}>{item?.desc}</div>
                    <button type="button" class="btn btn-light" style={{marginTop:"60px",marginLeft:"220px"}}><Link to={`/SingleJob/${item._id}`} style={{textDecoration:"none"}}>Apply</Link></button>
                  </div>
                )
              }):"no data found"
            }
          </div>
</div>
)
}

export default ViewJobs