import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import {useRef,useContext,useEffect , } from 'react'
import {useNavigate} from 'react-router-dom'
import {Shared} from './App.tsx'
import './css/Login.css'
const Login = ()=> {
  const navigate = useNavigate();
  const {state,dispatch} = useContext(Shared);
  useEffect(()=>{
   return ()=> dispatch({type:"CLEAR"})
  },[])

  useEffect(()=>{
   if(state.Success.length){
    setTimeout(()=>navigate("/"),2000);
   }
  },[state])

 

  const username = useRef<HTMLInputElement>(null);;
  const password = useRef<HTMLInputElement>(null);

   const formHandle = (e:any)=>{
   e.preventDefault();
   const data = {email:username.current?.value,password:password.current?.value};
   dispatch({method:"POST",type:"SUCCESS", payload:{url:"/auth/login",formData:JSON.stringify(data),headers:{"Content-Type":"application/json"}}});

   }
    return (
        <>
        <Nav/>
        <div className="login-container">
           <div className="login-wrapper">
            <div className="login-from-wrapper">
            <h1 style={{fontSize:"80px",fontWeight:"800",textAlign:"center"}}>Welcome </h1>
            <p style={{textAlign:"center",fontWeight:"400"}}>we are glad to see you back with us.</p>
            {state.Errors.length!=0 && (
            <>
            <div className="error">
            {state.Errors.map((item)=>{
              return (
                <>
                <p key={Math.random()*10}><i className="fa-solid fa-circle-exclamation"></i> &nbsp;{item}</p>
                <br/>
                </>
                
              )
             })}
              </div>
              </>
            )}


            
        {state.Success.length!=0 &&(
            <>
            <div className="success">
            {state.Success.map((item)=>{
              return (
                <>
                <p key={Math.random()*10}><i className="fa-solid fa-circle-exclamation"></i> &nbsp;{item}</p>
                <br/>
                </>
                
              )
             })}
              </div>
              </>
            )}
            
             <form onSubmit={formHandle}  method="POST" className="login">
              <div  className="input-wrapper"><input ref={username} placeholder="email" type="text" name="email"/></div> 
               <div className="input-wrapper"><input ref={password} placeholder="password" type="password" name="password"/></div>
               <div className="input-wrapper"><input  type="submit" value="Login"/></div>
                <div className="hr-text">Login To Others</div>
               <center><button type="button" className="btn"><a href="/auth/google"> <i className="fa-brands fa-google"></i> &nbsp; Login with google </a></button></center>
         
             </form>
             
            
             </div>
             <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></div>
           </div>
           </div>
           <Footer/>
           
        
        </>

    )
}

export default Login;