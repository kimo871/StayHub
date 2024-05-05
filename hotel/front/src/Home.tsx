 import {Shared} from './App.tsx'
 import Footer from './Footer.tsx'
 import {useContext, useEffect , useRef, useState} from 'react'
 import { useNavigate } from 'react-router-dom';
 import Pagination from '@mui/material/Pagination';
 import Stack from '@mui/material/Stack';
 import './css/App.css'
 import './css/helper.css'
 import Nav from './Nav.tsx'
 const Home = ()=>{
    const navigate = useNavigate();
    const {state,dispatch} = useContext(Shared);
    const [flag,setFlag] = useState(false)
    const [pgNumber , setPg] = useState(1);
    const handlePagination = (event:any,pgNumbertemp:any)=>{
      console.log("pagination number " , pgNumber,event);
      if(pgNumbertemp != pgNumber) setPg(pgNumbertemp)
    }

    const img_elem = useRef<HTMLImageElement>(null)

    const handleError = (e)=>{
    return e.target.src="https://www.pngkey.com/png/detail/360-3608307_placeholder-hotel-house.png";
    }


    const handleWish = ()=>{
      if(!state.isAuthenticated){
        navigate("/auth/login")
      }
    }

    useEffect(()=>{
      window.scrollTo(0,0);
    },[pgNumber])
    
    useEffect(()=>{
      dispatch({method:"GET",type:"AUTHENTICATED" , then:getHotels,payload:{url:"/auth/protected"}});
      dispatch({method:"GET",type:"ADD_HOTELS",payload:{url:"http://localhost:3000/hotels/try"}})
      console.log(state)
      return ()=> dispatch({type:"CLEAR"})
    },[])

    const getHotels = () =>{
      return 1;
    }

   
    return (<>
  <Nav/>
  <div className="content-A">
          
      <div className="cover"/>
      <div style={{lineHeight:2.7,  padding:"25px"}} className="content d-flex justify-content-center align-items-center flex-column w-100 text-white">
        <h2>Book Your Stay</h2>
        <p>Welcome to StayHub − a great alpine chalet in the best Switzerland ski resort.</p>
        <form className="w-100 search d-flex flex-wrap justify-content-center">
        <div >
            <label htmlFor="country">Country </label>
            <div className="input-wrapper">
              <select name="location" >
                <option value="en">Egypt</option>
              </select>
               </div> 
          </div>

          <div >
            <label htmlFor="destination">Destination </label>
            <div className="input-wrapper">
            <select name="destination" >
                <option value="cu">Cairo</option>
              </select>
              </div> 
          </div>
          <div >
            <label htmlFor="checkin">Checkin *</label>
           <div className="input-wrapper"><input  type="date" name="checkin"/></div> 
           
          </div>
          <div>
          <label htmlFor="checkout">Checkout *</label>
          <div className="input-wrapper"><input type="date" name="checkout" required /></div>
          
          </div>
          {/* <div>
          <label htmlFor="children">Children</label>
          <select  name="children">
            <option selected value="1">1</option>
            <option  value="2">2</option>
            <option  value="3">3</option>
          </select>
          </div> */}
          {/* <div>
          <label htmlFor="adults">Adults</label>
          <select  name="adults">
            <option selected value="1">1</option>
            <option  value="2">2</option>
            <option  value="3">3</option>
          </select>
          </div> */}
          <div>
            <label htmlFor="d">&nbsp;</label>
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
    </div>
    
    <div   className="result-section p-5">
      <h4>Advanced Search</h4>
    <div style={{gap:"1.5%",rowGap:"40px"}} className="p-2 Results d-flex  flex-wrap">
      

      {state.Results.length!=0 && state.Results.map((hotel:any)=>{
        {console.log(hotel)}
          return (
            <div onClick={()=>navigate(`/hotel/${hotel.code}`)} key={hotel.code} className="hotel">
            <div style={{borderRadius:"3%"}} className="gallery w-100">
            <i onClick={handleWish} className="fa-solid fa-heart"></i>
            
              <img onError={handleError} style={{borderRadius:"3%"}} className="w-100 h-100" src={"http://photos.hotelbeds.com/giata/bigger/"+hotel.images[0].path}/>
            </div>
            <div className="hotel-info d-flex flex-column">
             <h6 style={{fontSize:"18px"}}>{hotel.name.content}</h6>
             <span><i className="fa-solid fa-location-crosshairs"></i>&nbsp; {`${hotel.city.content} , ${hotel.countryCode} `}</span>
             <span><i className="fa-solid fa-phone"></i>&nbsp; {`${hotel.phones[1].phoneNumber}`}</span>
            </div>
            
          </div>
          )
        })}
    </div>
    <div style={{marginTop:"3%"}} className="pagination justify-content-center">
    <Stack spacing={2}>
      <Pagination count={5} onChange={handlePagination} showFirstButton showLastButton />
    </Stack>
    
    </div>
    </div>
    <Footer/>
    </>
    )
}

export default Home;