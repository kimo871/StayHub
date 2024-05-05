import './css/Nav.css'
import './css/helper.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import { useContext , useState , useRef, useEffect } from 'react';
import {Shared} from './App.tsx'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {useNavigate} from 'react-router-dom'
function Nav (){
  const navigate = useNavigate();

  const afterLogOut = ()=>{
    navigate("/");
  }

  const logOut = (e:any)=>{
     dispatch({method:"GET" , type:"LOGOUT",payload:{url:"/auth/logout",then:afterLogOut}}); 
  }

  

  const triggerShow = ()=>{
     element3.current?.classList.toggle("d-block");
  }


    const element = useRef<HTMLDivElement>(null);
    const element2 = useRef<HTMLDivElement>(null);
    const element3 = useRef<HTMLDivElement>(null);
    const current = useRef<HTMLElement>(null);

    const handleShow = ()=>{
        element.current?.classList.toggle("r-0");
        
    }
    const {state,dispatch} = useContext(Shared);

    useEffect(()=>{
      if(window.scrollY){
         current.current.classList.add("fixed");
      }
      else{
        current.current.classList.remove("fixed");
      }
      
    },[window.scrollY])

    

    return (<>

    { state.User && state.User.status=="pending" && (
      <Stack ref={element2} sx={{ width: '100%' }} spacing={12}>
      <Alert style={{padding:"10px"}}severity="warning" onClose={() => {if (element2.current) {
                       element2.current.style.display = "none";
}}}>
        Your Email is Not verified You should verify it for having access to full user functionality&nbsp;
        <a style={{textDecoration:"underline"}} href="/otp/verify">Verify Email</a>
      </Alert>
      </Stack>
    )}
      
        <div className="wrapper-div w-100 ">
           <nav ref={current} className="navbar light-theme dark-theme w-100 p-2 ">
            <ul className="logo w-25 d-flex align-items-center ">
                <li>
                  <svg width="160" height="75.05133700139422" viewBox="0 0 390 145.70207431955492" className="looka-1j8o68f"><defs id="SvgjsDefs1780"></defs><g id="SvgjsG1781"  transform="matrix(1,0,0,1,0,0)" fill="#0f08ad"><rect xmlns="http://www.w3.org/2000/svg" width="390" height="121" rx="10" ry="10"></rect></g><g id="SvgjsG1782"  transform="matrix(2.7904032201751447,0,0,2.7904032201751447,16.651237914033207,-10.694430099654824)" fill="#f9f9f9"><path d="M2.64 40 l-1.0399 -5.4 l6.24 0 c0.45332 0 0.68 -0.2 0.68 -0.6 l0 -5.28 c0 -0.4 -0.08 -0.64 -0.24 -0.72 s-0.44 -0.12 -0.84 -0.12 l-3 0 c-0.42668 0 -0.83336 -0.03332 -1.22 -0.1 s-0.73336 -0.22 -1.04 -0.46 s-0.54668 -0.57332 -0.72 -1 s-0.26 -1 -0.26 -1.72 l0 -9.84 c0 -1.1467 0.31332 -2.06 0.94 -2.74 s1.62 -1.02 2.98 -1.02 l8 0 l1 5.4 l-6.56 0 c-0.48 0 -0.72 0.21332 -0.72 0.64 l0 5.28 c0 0.29332 0.07332 0.49332 0.22 0.6 s0.36668 0.16 0.66 0.16 l3.64 0 c0.93332 0 1.6466 0.22 2.14 0.66 s0.74 1.2067 0.74 2.3 l0 9.56 c0 1.6 -0.32668 2.7333 -0.98 3.4 s-1.8066 1 -3.46 1 l-7.16 0 z M30.305 11 l1.44 5.4 l-3.88 0 l0 23.6 l-5.92 0 l0 -23.6 l-3.88 0 l1.52 -5.4 l10.72 0 z M39.129999999999995 36.4 l-0.52 3.6 l-5.84 0 l5.24 -29 l6.2 0 l5.24 29 l-5.84 0 l-0.52 -3.6 l-3.96 0 z M39.769999999999996 31.8 l2.68 0 l-1.32 -10.28 z M61.754999999999995 40 l-6.12 0 l0 -7.36 l-5.56 -21.64 l6 0 l2.6 13.68 l2.64 -13.68 l6 0 l-5.56 21.64 l0 7.36 z M86.54 40 l-5.92 0 l0 -11.6 l-3.16 0 l0 11.6 l-5.92 0 l0 -29 l5.92 0 l0 12.4 l3.16 0 l0 -12.4 l5.92 0 l0 29 z M96.08500000000001 40 c-1.68 0 -2.8533 -0.34668 -3.52 -1.04 s-1 -1.84 -1 -3.44 l0 -24.52 l5.92 0 l0 23.28 c0 0.21332 0.03332 0.37332 0.1 0.48 s0.22 0.16 0.46 0.16 l2.04 0 c0.24 0 0.39332 -0.05332 0.46 -0.16 s0.1 -0.26668 0.1 -0.48 l0 -23.28 l5.92 0 l0 24.52 c0 1.6 -0.33332 2.7467 -1 3.44 s-1.84 1.04 -3.52 1.04 l-5.96 0 z M117.35000000000001 16.08 l0.000039062 7.6 l2.72 0 c0.21332 0 0.38664 -0.06 0.51996 -0.18 s0.2 -0.31332 0.2 -0.58 l0 -6.28 c0 -0.37332 -0.17332 -0.56 -0.52 -0.56 l-2.92 0 z M120.87000000000002 28.92 c0 -0.32 -0.08 -0.54004 -0.24 -0.66004 s-0.37332 -0.18 -0.64 -0.18 l-2.64 0 l0 6.84 l2.92 0 c0.24 0 0.4 -0.04668 0.48 -0.14 s0.12 -0.24664 0.12 -0.45996 l0 -5.4 z M126.35000000000002 22.48 c0 0.72 -0.14 1.34 -0.42 1.86 s-0.80668 0.88668 -1.58 1.1 c0.8 0.05332 1.38 0.33332 1.74 0.84 s0.54 1.08 0.54 1.72 l0 7.52 c0 1.6 -0.33332 2.7467 -1 3.44 s-1.84 1.04 -3.52 1.04 l-10.52 0 l0 -29 l11.32 0 c1.1467 0 2.0067 0.32 2.58 0.96 s0.86 1.4933 0.86 2.56 l0 7.96 z"></path></g><g id="SvgjsG1783"  transform="matrix(0.7453548348784248,0,0,0.7453548348784248,50.065749301339515,137.5415554427441)" fill="#0b0575"><path d="M20.4 7 l-1.4 1.64 q-0.82 -0.84 -1.96 -1.32 t-2.4 -0.48 q-1.64 0 -2.99 0.74 t-2.11 2.02 q-0.78 1.34 -0.78 2.98 q0 1.56 0.84 2.88 q0.8 1.24 2.15 1.97 t2.91 0.73 q1.44 0 2.68 -0.62 t2.06 -1.72 l1.34 1.82 q-1.14 1.28 -2.73 1.99 t-3.37 0.71 q-2.22 0 -4.08 -1.08 q-1.82 -1.04 -2.86 -2.86 q-1.08 -1.86 -1.08 -4.08 q0 -2.14 1.14 -3.94 q1.08 -1.72 2.93 -2.73 t3.97 -1.01 q1.66 0 3.16 0.64 q1.46 0.6 2.58 1.72 z M36.84 12.440000000000001 q0 -1.6 -0.82 -2.9 q-0.78 -1.26 -2.13 -1.98 t-2.93 -0.72 q-1.64 0 -2.99 0.74 t-2.11 2.02 q-0.78 1.34 -0.78 2.98 q0 1.56 0.84 2.88 q0.8 1.24 2.15 1.97 t2.92 0.73 t2.92 -0.76 t2.13 -2.04 q0.8 -1.34 0.8 -2.92 z M39 12.559999999999999 q0 2.16 -1.12 3.98 q-1.08 1.74 -2.93 2.77 t-3.99 1.03 q-2.22 0 -4.08 -1.08 q-1.82 -1.04 -2.86 -2.86 q-1.08 -1.86 -1.08 -4.08 q0 -2.14 1.14 -3.94 q1.08 -1.72 2.93 -2.73 t3.97 -1.01 q2.18 0 4.04 1.06 q1.82 1.04 2.88 2.82 q1.1 1.86 1.1 4.04 z M55.14 9.74 l-5.1 6.1 l-5.06 -6.1 l0 10.26 l-2.14 0 l0 -12.82 l-1.74 -2.1 l2.82 0 l6.1 7.32 l6.18 -7.32 l2.82 0 l-1.74 2.1 l0 12.82 l-2.14 0 l0 -10.26 z M64.3 14.02 l0 5.98 l-2.18 0 l0 -14.92 l10.5 0 l0 2.2 l-8.32 0 l0 4.52 q0.62 -0.36 1.38 -0.48 q0.56 -0.1 1.44 -0.1 l3.26 0 l0 2.22 l-3.26 0 q-0.82 0 -1.44 0.1 q-0.76 0.14 -1.38 0.48 z M88.92 12.440000000000001 q0 -1.6 -0.82 -2.9 q-0.78 -1.26 -2.13 -1.98 t-2.93 -0.72 q-1.64 0 -2.99 0.74 t-2.11 2.02 q-0.78 1.34 -0.78 2.98 q0 1.56 0.84 2.88 q0.8 1.24 2.15 1.97 t2.92 0.73 t2.92 -0.76 t2.13 -2.04 q0.8 -1.34 0.8 -2.92 z M91.08000000000001 12.559999999999999 q0 2.16 -1.12 3.98 q-1.08 1.74 -2.93 2.77 t-3.99 1.03 q-2.22 0 -4.08 -1.08 q-1.82 -1.04 -2.86 -2.86 q-1.08 -1.86 -1.08 -4.08 q0 -2.14 1.14 -3.94 q1.08 -1.72 2.93 -2.73 t3.97 -1.01 q2.18 0 4.04 1.06 q1.82 1.04 2.88 2.82 q1.1 1.86 1.1 4.04 z M96.66 7.26 l0 4.96 q0.62 -0.36 1.38 -0.48 q0.56 -0.1 1.44 -0.1 l2.84 0 q1.18 0 1.84 -0.54 q0.7 -0.58 0.7 -1.74 q0 -1.1 -0.74 -1.64 q-0.64 -0.46 -1.8 -0.46 l-5.66 0 z M103.04 17.64 l-1.82 -3.82 l-1.74 0 q-0.82 0 -1.44 0.1 q-0.76 0.14 -1.38 0.48 l0 5.6 l-2.18 0 l0 -14.92 l7.84 0 q1.38 0 2.44 0.52 t1.64 1.48 q0.62 1.02 0.62 2.4 q0 1.68 -0.9 2.76 t-2.54 1.5 l1.16 2.38 q0.5 0.74 0.78 1.04 q0.34 0.38 0.65 0.51 t0.81 0.13 l0.22 0 l0.48 -0.02 l0 2.22 q-1.16 0 -1.72 -0.08 q-0.94 -0.16 -1.6 -0.62 q-0.78 -0.56 -1.32 -1.66 z M122.38 7.279999999999999 l-5.26 0 l0 12.72 l-2.12 0 l0 -12.72 l-5.32 0 l0 -2.2 l12.7 0 l0 2.2 z M143.34 9.74 l-5.1 6.1 l-5.06 -6.1 l0 10.26 l-2.14 0 l0 -12.82 l-1.74 -2.1 l2.82 0 l6.1 7.32 l6.18 -7.32 l2.82 0 l-1.74 2.1 l0 12.82 l-2.14 0 l0 -10.26 z M152.5 14.02 l0 3.8 l9.2 0 l0 2.18 l-11.38 0 l0 -14.92 l10.5 0 l0 2.2 l-8.32 0 l0 4.52 q0.62 -0.36 1.38 -0.48 q0.56 -0.1 1.44 -0.1 l3.26 0 l0 2.22 l-3.26 0 q-0.82 0 -1.44 0.1 q-0.76 0.14 -1.38 0.48 z M167.38 14.02 l0 3.8 l9.2 0 l0 2.18 l-11.38 0 l0 -14.92 l10.5 0 l0 2.2 l-8.32 0 l0 4.52 q0.62 -0.36 1.38 -0.48 q0.56 -0.1 1.44 -0.1 l3.26 0 l0 2.22 l-3.26 0 q-0.82 0 -1.44 0.1 q-0.76 0.14 -1.38 0.48 z M191.18 7.279999999999999 l-5.26 0 l0 12.72 l-2.12 0 l0 -12.72 l-5.32 0 l0 -2.2 l12.7 0 l0 2.2 z M205.58 15.46 q0 1.46 -0.88 2.6 q-0.86 1.08 -2.37 1.68 t-3.41 0.6 q-1.74 0 -3.38 -0.81 t-2.76 -2.25 l1.56 -1.46 q1.94 2.34 4.58 2.34 q1.16 0 2.12 -0.28 q1.06 -0.32 1.64 -0.9 q0.66 -0.64 0.66 -1.52 q0 -1.06 -0.66 -1.6 q-0.56 -0.46 -1.66 -0.6 q-0.64 -0.08 -2.1 -0.08 q-2.68 0 -4.09 -0.98 t-1.41 -2.88 q0 -1.2 0.71 -2.28 t1.95 -1.72 q1.28 -0.68 2.84 -0.68 q1.76 0 3.18 0.54 q1.52 0.58 2.82 1.82 l-1.36 1.6 q-1.22 -0.98 -2.22 -1.37 t-2.42 -0.39 q-0.82 0 -1.53 0.34 t-1.13 0.91 t-0.42 1.21 q0 1.72 3.18 1.72 q2.54 0 4.02 0.52 q1.4 0.5 2 1.52 q0.54 0.9 0.54 2.4 z M226.98 7 l-1.4 1.64 q-0.82 -0.84 -1.96 -1.32 t-2.4 -0.48 q-1.64 0 -2.99 0.74 t-2.11 2.02 q-0.78 1.34 -0.78 2.98 q0 1.56 0.84 2.88 q0.8 1.24 2.15 1.97 t2.91 0.73 q1.44 0 2.68 -0.62 t2.06 -1.72 l1.34 1.82 q-1.14 1.28 -2.73 1.99 t-3.37 0.71 q-2.22 0 -4.08 -1.08 q-1.82 -1.04 -2.86 -2.86 q-1.08 -1.86 -1.08 -4.08 q0 -2.14 1.14 -3.94 q1.08 -1.72 2.93 -2.73 t3.97 -1.01 q1.66 0 3.16 0.64 q1.46 0.6 2.58 1.72 z M243.42 12.440000000000001 q0 -1.6 -0.82 -2.9 q-0.78 -1.26 -2.13 -1.98 t-2.93 -0.72 q-1.64 0 -2.99 0.74 t-2.11 2.02 q-0.78 1.34 -0.78 2.98 q0 1.56 0.84 2.88 q0.8 1.24 2.15 1.97 t2.92 0.73 t2.92 -0.76 t2.13 -2.04 q0.8 -1.34 0.8 -2.92 z M245.57999999999998 12.559999999999999 q0 2.16 -1.12 3.98 q-1.08 1.74 -2.93 2.77 t-3.99 1.03 q-2.22 0 -4.08 -1.08 q-1.82 -1.04 -2.86 -2.86 q-1.08 -1.86 -1.08 -4.08 q0 -2.14 1.14 -3.94 q1.08 -1.72 2.93 -2.73 t3.97 -1.01 q2.18 0 4.04 1.06 q1.82 1.04 2.88 2.82 q1.1 1.86 1.1 4.04 z M249.42 7.18 l-1.74 -2.1 l2.82 0 l9.58 11.4 l0 -11.4 l2.2 0 l0 14.92 l-2.16 0 l-8.56 -10.26 l0 10.26 l-2.14 0 l0 -12.82 z M280.08000000000004 5.08 l-6.26 14.92 l-2.58 0 l-6.16 -14.92 l2.36 0 l5.1 12.48 l5.14 -12.48 l2.4 0 z M285.06 14.02 l0 3.8 l9.2 0 l0 2.18 l-11.38 0 l0 -14.92 l10.5 0 l0 2.2 l-8.32 0 l0 4.52 q0.62 -0.36 1.38 -0.48 q0.56 -0.1 1.44 -0.1 l3.26 0 l0 2.22 l-3.26 0 q-0.82 0 -1.44 0.1 q-0.76 0.14 -1.38 0.48 z M298.2 7.18 l-1.74 -2.1 l2.82 0 l9.58 11.4 l0 -11.4 l2.2 0 l0 14.92 l-2.16 0 l-8.56 -10.26 l0 10.26 l-2.14 0 l0 -12.82 z M317.59999999999997 20 l-2.14 0 l0 -14.92 l2.14 0 l0 14.92 z M324.18 14.02 l0 3.8 l9.2 0 l0 2.18 l-11.38 0 l0 -14.92 l10.5 0 l0 2.2 l-8.32 0 l0 4.52 q0.62 -0.36 1.38 -0.48 q0.56 -0.1 1.44 -0.1 l3.26 0 l0 2.22 l-3.26 0 q-0.82 0 -1.44 0.1 q-0.76 0.14 -1.38 0.48 z M337.32 7.18 l-1.74 -2.1 l2.82 0 l9.58 11.4 l0 -11.4 l2.2 0 l0 14.92 l-2.16 0 l-8.56 -10.26 l0 10.26 l-2.14 0 l0 -12.82 z M367.36 7 l-1.4 1.64 q-0.82 -0.84 -1.96 -1.32 t-2.4 -0.48 q-1.64 0 -2.99 0.74 t-2.11 2.02 q-0.78 1.34 -0.78 2.98 q0 1.56 0.84 2.88 q0.8 1.24 2.15 1.97 t2.91 0.73 q1.44 0 2.68 -0.62 t2.06 -1.72 l1.34 1.82 q-1.14 1.28 -2.73 1.99 t-3.37 0.71 q-2.22 0 -4.08 -1.08 q-1.82 -1.04 -2.86 -2.86 q-1.08 -1.86 -1.08 -4.08 q0 -2.14 1.14 -3.94 q1.08 -1.72 2.93 -2.73 t3.97 -1.01 q1.66 0 3.16 0.64 q1.46 0.6 2.58 1.72 z M373.08 14.02 l0 3.8 l9.2 0 l0 2.18 l-11.38 0 l0 -14.92 l10.5 0 l0 2.2 l-8.32 0 l0 4.52 q0.62 -0.36 1.38 -0.48 q0.56 -0.1 1.44 -0.1 l3.26 0 l0 2.22 l-3.26 0 q-0.82 0 -1.44 0.1 q-0.76 0.14 -1.38 0.48 z"></path></g></svg>
                </li>
            </ul>
            
            <ul className="items align-items-center w-75 justify-content-end">
            <li><Link to="/">Home</Link></li>
                <li>About</li>
                
              

                <ul className="user-section d-flex align-items-center mr-4">
            {!state.isAuthenticated &&(<>
              <li><Link to="/auth/login"><i className="fa-solid fa-door-open" style={{}}></i>&nbsp; Login</Link></li>
              <li><Link to="/auth/signup"><i className="fa-solid fa-user-plus" style={{}}></i>&nbsp; Signup</Link> </li>
              </>
            )}

            {state.isAuthenticated &&   (
                <>
                   <li  style={{marginTop:"20px",textAlign:"center"}} onClick={()=>triggerShow()}><i   className="fa-solid fa-user"></i>
                   <p>Account</p>
                    <div ref={element3} className="dropdown" >
                      <ul id="drop">
                       <li><a  href="/account">WishList</a></li>
                       <li><a  href="/account">Settings</a></li>
                       <li><a  href="/account">Orders</a></li>
                      </ul>
                    </div>
                   </li>
                   <li style={{marginTop:"20px",textAlign:"center"}} onClick={logOut}><i  className="fa-solid fa-right-from-bracket"></i>
                   <p>Logout</p> </li>
                </>
            )}
                </ul>
                
            </ul>
            <ul className="mobile-items align-items-center w-75 justify-content-end">
              <li onClick={handleShow}><i className="fa-solid fa-align-justify"></i></li>
            </ul>
           
           </nav>
           
           <div ref={element} className="mobile-menu">
            <div className="wrapper">
            <i onClick={handleShow} className="fa-solid fa-close"></i>
           <ul className="items d-flex flex-column align-items-center w-75 justify-content-end">
            <li><Link to="/">Home</Link></li>
            <li><Link  to="/auth/login">About</Link></li>
            {!state.isAuthenticated && (
                <>
                <li><Link  to="/auth/login"><i className="fa-solid fa-door-open" ></i>&nbsp; Login</Link></li>
                <li> <Link to="/auth/signup"><i className="fa-solid fa-user-plus"></i>&nbsp; Signup</Link></li>
                </>
            )}

            {state.isAuthenticated && (
                <>
                <li><Link  to="/auth/login"><i className="fa-solid fa-user" ></i>&nbsp; Account</Link>
                 <div className="p-2 ">
                   <ul>
                    <li className=" mt-3"><a href="">WishList</a></li>
                    <li className=" mt-3"><a href="">Settings</a></li>
                    <li className=" mt-3"><a href="">Orders</a></li>
                   </ul>
                 </div>
                 </li>
                <li> <Link to="/auth/signup"><i className="fa-solid fa-door-open"></i>&nbsp; Logout</Link></li>
                </>
               )}
           
            </ul>
            
            </div>
           </div>
        </div>
        </>
    )

}

export default Nav;