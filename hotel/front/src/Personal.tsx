import Nav from './Nav.tsx'
import Footer from './Footer.tsx'
import './css/Account.css'
import './css/App.css'
import { useRef , useContext , useEffect } from 'react'
import {Shared} from './App.tsx'
const Personal = ()=>{

  useEffect(()=>{
    dispatch({method:"GET",type:"AUTHENTICATED" , payload:{url:"/auth/protected"}});
    return ()=> dispatch({type:"CLEAR"})
  },[])


  


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
    name : useRef<HTMLHeadingElement>(null),
    email : useRef<HTMLHeadingElement>(null),
    phoneNumber : useRef<HTMLHeadingElement>(null),
    address : useRef<HTMLHeadingElement>(null),
    governId: useRef<HTMLHeadingElement>(null)
  }

  let formRefs = {
    name : useRef<HTMLFormElement>(null),
    email : useRef<HTMLFormElement>(null),
    phoneNumber : useRef<HTMLFormElement>(null),
    address : useRef<HTMLFormElement>(null),
    governId: useRef<HTMLHeadingElement>(null)
  }

    const setEditableData = (formRef : any , dataRef : any)=>{
      formRef.current?.classList.toggle("d-block");
      dataRef.current?.classList.toggle("d-none");
    }

    
    return (
     <>
    <Nav/>
    <div  className="login-container flex-column justify-content-start align-items-start " style={{minHeight:"90vh",width:"90%" ,padding:"30px",margin:"auto"}} >
     <h6><a href="./">Account </a>{">"} Personal</h6>
     <h3>Perosnal Info</h3>
     <div  style={{gap:"5%"}} className=" pt-3 w-100 ">
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
      <div key={fieldName} style={{width:"80%"}} className="input-wrapper account-wrapper d-flex  ">
         <div >
          <h6>{fieldName}</h6>
          {state.User.type!="google" && fieldName=="email" &&(
             <form method="POST" onSubmit = {handleChange} ref={formRefs[fieldName]}>
             <input name={fieldName} type="text"/>
             <input type="submit" value="save"/>
             </form>
          )}

          
             <form method="POST" onSubmit = {handleChange} ref={formRefs[fieldName]}>
             <input name={fieldName} type="text"/>
             <input type="submit" value="save"/>
             </form>
          
          
          <h6 ref={dataRef} className="text-muted">{state.User[fieldName] !== undefined ? state.User[fieldName] : "undefined" }</h6>
        </div>
        {state.User.type=="basic" && (
         <div>
          <button onClick={()=> setEditableData(formRefs[fieldName],dataRef)} className="btn">Edit</button>
         </div>
        )}

        {state.User.type=="google" && fieldName!="email" &&(
         <div>
          <button onClick={()=> setEditableData(formRefs[fieldName],dataRef)} className="btn">Edit</button>
         </div>
        )}
        
        </div>
        )})}

        
      </div>

      
     </div>
  
  <Footer/>
  </>
    )
}

export default Personal;