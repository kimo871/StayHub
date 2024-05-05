import { useEffect , useContext , useRef , } from 'react';
import { useParams } from 'react-router-dom';
import './css/Details.css'
import Nav from './Nav';
import Footer from './Footer';
import {Shared} from './App.tsx'

const HotelDetails = ()=>{
  const {state,dispatch} = useContext(Shared);
  const {id} = useParams();
 

    useEffect(()=>{

      dispatch({method:"GET",type:"ADD_COUNTRIES",payload:{url:"http://localhost:3000/hotels/countries"}})
      dispatch({method:"GET",type:"HOTEL_DETAILS",payload:{url:`http://localhost:3000/hotels?id=${id}`}})
     
      
    },[])


    useEffect(()=>{
    console.log(state)
    })

    

    const gallery = useRef<HTMLDivElement>();
    const root = useRef<HTMLDivElement>();

    const togglePhotos = ()=>{
       gallery.current.classList.toggle("d-block");
       root.current.classList.toggle("blur")
    }

    return (
      
      <>
     <div ref={gallery} className="fixed-overlay ">
      <i onClick={togglePhotos} className="fa-solid fa-close"></i>
      <div>
        {state.Results.length!=0 && state.Results[0].images.map((img:any)=>{
          return (
            <div className="grid">
              <img src={`http://photos.hotelbeds.com/giata/bigger/${img.path}`}/>
            </div>
          )
        })}
      
      </div>
    </div>
     <div ref={root}>
     <Nav/>
     <div  className="login-container flex-column justify-content-start align-items-start " style={{minHeight:"90vh",width:"90%" ,padding:"30px",margin:"auto"}} >
     {state.Results.length!=0 && state.Results.map((hotel:any)=>{
         return (
          <>
          <h3>{`${hotel.name.content}`}</h3>
          <div className="grid-container pt-3">
            {hotel.images.length!=0 && hotel.images.splice(0,5).map((img:any,index:number)=>{
              return (
                
            <div style={{gridRow:(index==0 ? "1/3":""),gridColumn:(index==0 ? "1/3":"")}} className="grid">
               <img src={"http://photos.hotelbeds.com/giata/bigger/"+img.path}/>
            </div>
                
              )
            })}
            {
              /*
            <div style={{gridRow:"1/3",gridColumn:"1/3"}} className="grid">
              <img src="https://a0.muscache.com/im/pictures/75e16e63-5e00-4b29-a90e-e1d2f88a64c8.jpg?im_w=1200"/>
            </div>
   
            <div className="grid">
            <img src="https://a0.muscache.com/im/pictures/07f35ab8-962e-48b7-8467-2e37163e18ed.jpg?im_w=720"/>
            </div>
   
            <div className="grid">
            <img src="https://a0.muscache.com/im/pictures/cab6f695-931f-454a-abae-6d33361346a3.jpg?im_w=720"/>
            </div>
   
            <div className="grid">
            <img src="https://a0.muscache.com/im/pictures/07f35ab8-962e-48b7-8467-2e37163e18ed.jpg?im_w=720"/>
            </div>
   
            <div className="grid">
            <img src="https://a0.muscache.com/im/pictures/cab6f695-931f-454a-abae-6d33361346a3.jpg?im_w=720"/>
            </div> 
            */
          }
          </div>
          
          <button onClick={togglePhotos} className="bg-dark text-white mt-4">Show All Photos</button>
   
          <div style={{fontWeight:"400",gap:"40px"}} className="pt-4 w-100 d-flex justify-content-between">
             <div className="w-75 box-model">
             <section>
               <h4>{`${hotel.name.content}`}</h4><span className="text-muted">Category : 3 star</span>
               <p className="text-muted"><i className="fa-solid fa-person"></i>&nbsp;2 guests <br/>
                <i className="fa-solid fa-bed"></i>&nbsp;1 bedroom <br/>
                 <i className="fa-solid fa-bath"></i>&nbsp;1 bath </p>
                 <hr/>
                 <h5>Description</h5>
               <span className="text-muted">{`${hotel.description.content}`}</span>
              </section>
              <hr/>
              <section>
              <h5>Contact Infromation</h5>
              <p className="text-muted mb-0"><i className="fa-solid fa-envelope"></i>&nbsp; Email: {hotel.email}</p>
              <p className="text-muted mb-0"><i className="fa-solid fa-phone"></i>&nbsp; Phones :-
              <ul className="text-muted">
                {hotel.phones.length!=0 && hotel.phones.map((phone:any)=>{
                  return  <li>{`${phone.phoneNumber} (${phone.phoneType})`}</li>
                })}
              </ul>
   </p>
              <p className="text-muted mb-0"><i className="fa-solid fa-earth"></i>&nbsp; Website:<a href={`http://${hotel.web}`}>{hotel.web}</a></p>
              </section>
             </div>
   
             <div  className="w-25 box-model">
               <h5>105$</h5>
              <form style={{gap:"15px"}} className="d-flex flex-column">
               <div className="input-wrapper">
                 <input type="date"/>
               </div>
   
               <div className="input-wrapper">
                 <input type="date"/>
               </div>
   
               <div className="input-wrapper">
                 <input type="submit" value="order"/>
               </div>
               </form>
             
             </div>
   
          </div>
          </>
         )
        })}  
     </div>
     <Footer/>
     </div>
     </>
    );
}

export default HotelDetails;