import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import MyImage from '../images/Discover.Apply.Thrive.jpg'
import axios from 'axios'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../CSS/Car.css"
import Img1 from '../images/apple.jpg'
import Img2 from '../images/goldman.jpg'
import Img3 from '../images/microsoft.jpg'

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
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
    <div>

        <Navbar/>
        <div>
        <img src={MyImage} width="99.999%" height="auto"/>
      </div>
    <div className='mainjs'>
      </div>
      <br/>
      <div className="App"> 
      <Carousel responsive={responsive}>
      <div className="Card">
          <img src={Img1} style={{height:"220px"}}/>
          <h2>Apple</h2>
          <p className='price'>70,000</p>
          <p>Software Developer Intern</p>
          <p>
              <button><Link to='/login'style={{color:"white"}}>Apply</Link></button>
          </p>
      </div>
      <div className="Card">
          <img src={Img2} style={{height:"220px"}}/>
          <h2>Goldman Sachs</h2>
          <p className='price'>60,000 </p>
          <p>Ethical hacker Intern</p>
          <p><button><Link to='/login' style={{color:"white"}}>Apply</Link></button></p>
      </div>
      <div className="Card">
          <img src="https://media.istockphoto.com/id/1169427542/photo/google.jpg?s=612x612&w=0&k=20&c=rqoG1nVPxeZeIHFqs0M2TI7CBwpZ1rOTG2H3PWTrdBY=" style={{height:"220px"}}/>
          <h2>Google</h2>
          <p className='price'>1,50,000</p>
          <p>Graphic Designer</p>
          <p>
              <button><Link to='/login' style={{color:"white"}}>Apply</Link></button>
          </p>
      </div>
      <div className="Card">
          <img src={Img3} style={{height:"220px"}}/>
          <h2>Microsoft</h2>
          <p className='price'>1,00,000</p>
          <p>Data Scientist</p>
          <p>
              <button><Link to='/login' style={{color:"white"}}>Apply</Link></button>
          </p>
      </div>
      
    </Carousel>;
    
  </div>
    </div>
  )
}

export default Home