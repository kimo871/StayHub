import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './css/Login.css'
import './css/helper.css'
import {useRef,useContext,useEffect} from 'react'
import {Shared} from './App.tsx'
const SignUp = ()=>{
  const {state,dispatch} = useContext(Shared);
  useEffect(()=>{
    return ()=> dispatch({type:"CLEAR"});
  },[])
  const name = useRef<HTMLInputElement>(null);
  const email=  useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const phone = useRef<HTMLInputElement>(null);
  const confirm_password = useRef<HTMLInputElement>(null);

  const formHandle = (e:any)=>{
   e.preventDefault();

   const Validator = {
    name : validateName,
    email:validateEmail ,
    phoneNumber : validatePhone,
    password : validatePassword,
    confirm_password : comaprePassword
   }

   const data = {name:Validator["name"](name.current?.value) ? name.current?.value : null ,
                 email:Validator["email"](email.current?.value)? email.current?.value : null,
                 password:Validator["password"](password.current?.value) ? password.current?.value : null,
                 phoneNumber:Validator["phoneNumber"](phone.current?.value)? phone.current?.value : null,
                 confirm_password:Validator["confirm_password"](password.current?.value,confirm_password.current?.value) ? confirm_password.current?.value : null };

  let errors = [];

   Object.keys(data).forEach((item)=>{
      if(data[item]==null) errors.push("Incorrect "+ item + " format !");
   })
   console.log(errors)
   if(errors.length)dispatch({type:"FAILURE",payload:errors})
   else{
    dispatch({type:"CLEAR",payload:errors});
    dispatch({method:"POST",type:"SUCCESS" , payload:{url:"/auth/signup",formData:JSON.stringify(data),headers:{"Content-Type":"application/json"}}});
  }


   
  }

  

   const validatePhone = (s:string):boolean=>{
    const phoneNumberRegex = /^\d{11}$/;
    return phoneNumberRegex.test(s);
   }

   const validateName = (s:string): boolean => {
     const segments = s.split(/\s+/);
     const regex_Name = /^[A-Za-z]+$/;
     return segments.every(segment => regex_Name.test(segment));
   }

   const validateEmail = (s: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(s);
   };


   const validatePassword = (password:string) : boolean => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=])(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
  };

  const comaprePassword = (pass : string , confirm_password : string) : boolean =>{
     return  pass === confirm_password;
  }
    return (
        <>
        <Nav/>
        <div className="login-container">
           <div className="login-wrapper">
            <div className="login-from-wrapper">
            <h1 style={{fontSize:"80px",fontWeight:"800",textAlign:"center"}}>Welcome </h1>
            <p style={{textAlign:"center",fontWeight:"400"}}>we are glad to see you back with us.</p>
            
            {state.Errors.length!=0 &&(
            <>
            <div className="error">
            {state.Errors.map((item)=>{
              return (
                <>
                <p><i className="fa-solid fa-circle-exclamation"></i> &nbsp;{item}</p>
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

             <form onSubmit={formHandle} className="login">
              <div data-value="1"  className="input-wrapper"><input ref={name} placeholder="Your name" type="text" name="name" required/></div> 
              <div data-value="2" className="input-wrapper"><input ref={email} placeholder="Your email" type="text" name="email" required/></div> 
              <div data-value="3" className="input-wrapper"><input ref={phone} placeholder="Your Phone" type="number" name="phone" required/></div>
               <div data-value="4" className="input-wrapper"><input ref={password} placeholder="password" type="password" name="password" required/></div>
               <div data-value="5" className="input-wrapper"><input ref={confirm_password} placeholder="confrim password" type="password" name="confirm_password" required/></div> 
               <div className="input-wrapper"><input  type="submit" value="Signup"/></div>
             </form>
             
             
             
             </div>
             <div className="img-wrapper"><img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/></div>
           </div>
        </div>
        <Footer/>
        
        </>
    )
}

export default SignUp;