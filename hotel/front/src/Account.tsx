import React, { useEffect  , useContext} from 'react';
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './css/Account.css'
import {useNavigate} from 'react-router-dom'
import {Shared} from './App.tsx'
function Account (){
  const navigate = useNavigate();
  const {state,dispatch} = useContext(Shared);
  useEffect(()=>{
    dispatch({method:"GET",type:"AUTHENTICATED" , payload:{url:"/auth/protected"}});
    return ()=> dispatch({type:"CLEAR"})
  },[])

   return (
    <>
    <Nav/>
    <div  className="login-container flex-column justify-content-start align-items-start " style={{minHeight:"90vh",width:"90%" ,padding:"30px",margin:"auto"}} >
     <h3>Account</h3>
     <h6>{state.User.name}, {state.User.email}</h6>
     <div  style={{gap:"5%"}} className=" pt-3 w-100  d-flex flex-wrap">
      
      <div onClick={()=> navigate("/account/personal")} className=" box-account">
     
        <i className="fa-solid fa-file"></i>
        <h5>Personal Info</h5>
        <h6 className="text-muted">Provide personal details and how we can reach you</h6>
       
      </div>
      
      <div  onClick={()=> navigate("/account/security")} className=" box-account">
        <i className="fa-solid fa-shield-halved"></i>
        <h5>Login & Security </h5>
        <h6 className="text-muted">Provide personal details and how we can reach you</h6>
      </div>
      <div  onClick={()=> navigate("/account/payment")} className=" box-account">
        <i className="fa-regular fa-credit-card"></i>
        <h5>Payments & Payouts </h5>
        <h6 className="text-muted">Review payments, payouts, coupons, and gift cards</h6>
      </div>
      <div  onClick={()=> navigate("/account/wishlist")} className="box-account">
        <i className="fa-solid fa-heart"></i>
        <h5>WishList</h5>
        <h6 className="text-muted">Set your default language, currency, and timezone</h6>
      </div>
      <div  onClick={()=> navigate("/account/preferences")} className="box-account">
        <i className="fa-solid fa-bookmark"></i>
        <h5>Preferences</h5>
        <h6 className="text-muted">Set your default language, currency, and timezone</h6>
      </div>
     </div>
  </div>
  <Footer/>
  </>
   )
}

export default Account;