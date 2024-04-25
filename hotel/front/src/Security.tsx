import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './css/Account.css'
import './css/App.css'
import {useNavigate} from 'react-router-dom'
import { useEffect, useRef , useContext } from 'react'
import {Shared} from './App.tsx'

const Security = ()=>{
  
  const {state , dispatch} = useContext(Shared);
  const handleChange =  (e)=>{
    e.preventDefault();
    let property = e.target.children[0].name;
    console.log(property);
    let formData = {
      [property] : e.target.children[0].value
    }
    dispatch({method:"POST",type:"SUCCESS",payload:{url:"/auth/update",formData:JSON.stringify(formData),headers:{"Content-Type":"application/json"}}})
  }


  useEffect(()=>{
    if(state.Success.length || state.Errors.length){
      setTimeout(()=>dispatch({type:"CLEAR"}),2000)
    }
  },[state.Success,state.Errors])
    
  let dataRefs = {
    password : useRef<HTMLHeadingElement>(null),
  }

  let formRefs = {
    password : useRef<HTMLFormElement>(null),
  }

    const setEditableData = (formRef : any , dataRef : any)=>{
      formRef.current?.classList.toggle("d-block");
      dataRef.current?.classList.toggle("d-none");
    }

    
    return (
     <>
    <Nav/>
    <div  className="login-container flex-column justify-content-start align-items-start " style={{minHeight:"90vh",width:"90%" ,padding:"30px",margin:"auto"}} >
     <h6><a href="./">Account </a>{">"} Login & Security</h6>
     <h3>Login & Security</h3>
     <div  style={{gap:"5%"}} className=" pt-3 w-100 ">

     <br/>
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

      
     {Object.entries(dataRefs).map(([fieldName , dataRef])=>{return (
      <div style={{width:"80%"}} className="input-wrapper account-wrapper d-flex ">
         <div className="d-flex flex-column justify-content-center">
          <h6>{fieldName}</h6>
          {state.User.type!="google" && fieldName=="password" &&(
            <form ref={formRefs[fieldName]}>
            <label htmlFor="old_password">Current Password</label>
            <input name="old_password" type="password"/>
            <label htmlFor="password">New Password</label>
            <input name="password" type="password"/>
            <input type="submit" value="save"/>
            </form>
          )}
          
          <h6 ref={dataRef} className="text-muted">**********</h6>
        </div>
        {state.User.type!="google" && fieldName=="password" &&(
        <div>
            <button onClick={()=> setEditableData(formRefs[fieldName],dataRef)} className="btn">Edit</button>
        </div>
        )}
        </div>
        )})}
      <br/>
      <hr/>
      <h3>Account</h3>
      <div className="d-flex justify-content-between">
        <div className="w-50 d-flex align-items-center " >
        <h6>Deactivate your account</h6>
        </div>
        <div className="w-50  ">
        <button className="btn">DeActivate</button>
        </div>
      </div>
       
        
      </div>

      
     </div>
  
  <Footer/>
  </>
    )
}

export default Security;