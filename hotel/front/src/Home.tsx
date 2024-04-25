 import {Shared} from './App.tsx'
 import Footer from './Footer.tsx'
 import {useContext, useEffect , useState} from 'react'
 import Pagination from '@mui/material/Pagination';
 import Stack from '@mui/material/Stack';
 import './css/App.css'
 import './css/helper.css'
 import Nav from './Nav.tsx'
 const Home = ()=>{
    const {state,dispatch} = useContext(Shared);
    const [pgNumber , setPg] = useState(1);
    const handlePagination = (event:any,pgNumbertemp:any)=>{
      console.log("pagination number " , pgNumber,event);
      if(pgNumbertemp != pgNumber) setPg(pgNumbertemp)
    }
    useEffect(()=>{
      window.scrollTo(0,0);
    },[pgNumber])
    
    useEffect(()=>{
      dispatch({method:"GET",type:"AUTHENTICATED" , payload:{url:"/auth/protected"}});
      return ()=> dispatch({type:"CLEAR"})
    },[])

   
    return (<>
        <Nav/>
        <div className="content-A">
      <div className="cover"/>
      <div style={{lineHeight:2.7,  padding:"25px"}} className="content d-flex justify-content-center align-items-center flex-column w-100 text-white">
        <h2>Book Your Stay</h2>
        <p>Welcome to StayHub − a great alpine chalet in the best Switzerland ski resort.</p>
        <form className="w-100 search d-flex flex-wrap justify-content-center">
          <div >
            <label htmlFor="checkin">Checkin *</label>
            <input  type="date" name="checkin"/>
           
          </div>
          <div>
          <label htmlFor="checkout">Checkout *</label>
          <input   type="date" name="checkout" required />
          
          </div>
          <div>
          <label htmlFor="children">Children</label>
          <select  name="children">
            <option selected value="1">1</option>
            <option  value="2">2</option>
            <option  value="3">3</option>
          </select>
          </div>
          <div>
          <label htmlFor="adults">Adults</label>
          <select  name="adults">
            <option selected value="1">1</option>
            <option  value="2">2</option>
            <option  value="3">3</option>
          </select>
          </div>
          <div>
            <label htmlFor="d">&nbsp;</label>
            <input type="submit" value="Search" />
          </div>
        </form>
      </div>
    </div>
    
    <div   className="result-section p-5">
    <div style={{gap:"6.5%"}} className="Results d-flex  flex-wrap">
      

      {state.Results.length!=0 && state.Results.map((hotel:any)=>{
        {console.log(hotel)}
          return (
            <div key={hotel.hotel_id} className="hotel">
            <div style={{borderRadius:"3%"}} className="gallery w-100">
            <i style={{color:"grey"}} className="fa-solid fa-heart"></i>
            
              <img style={{borderRadius:"3%"}} className="w-100 h-100" src={hotel.property.photoUrls[0].replace(/square60/ig,'square1800')}/>
            </div>
            <div className="hotel-info d-flex flex-column">
             <h6 style={{fontSize:"18px"}}>{hotel.property.name}</h6>
             <span>354 kilometres away</span>
             <span><b className="text-dark">
              </b> night </span>
            </div>
            
          </div>
          )
        })}
    </div>
    <div style={{gap:"1%"}} className="pagination justify-content-center">
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