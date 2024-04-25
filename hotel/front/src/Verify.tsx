import { useContext, useEffect , useRef } from "react";
import {useNavigate} from 'react-router-dom'
import {Shared} from "./App.tsx"
import "./css/Login.css";
const Verify = ()=>{
  const navigate = useNavigate();
 const {state,dispatch} = useContext(Shared);
 const inputs = useRef([] as HTMLInputElement[]);
 const submit = useRef<(HTMLInputElement)>(null);
 const timeElem = useRef<(HTMLInputElement)>(null);
 let  timeWatcher:number=1e4;

 

 const Timer = (intialTime:number , element:any)=>{
    let time : number = intialTime ;
    timeWatcher=intialTime ;
    const interval = setInterval(()=>{
        let minutes : number = parseInt((time/60).toString(),10) ,  seconds = parseInt((time%60).toString(),10);
        let minutesStr = minutes < 10 ? "0" + minutes : minutes;
        let secondsStr = seconds < 10 ? "0" + seconds : seconds;

        element.innerHTML = minutesStr+ ":"+ secondsStr;
        time--;
        timeWatcher = time;
        if(time < 0 ) clearInterval(interval);
    },1000)

 }

 const TimeValidator = (time:number)=>{
    return time > 0;
 }

 useEffect(()=>{
   
    console.log(state);
    fetch("/otp/sendMail").then((res)=>{if(res.status==200){
      inputs.current[0].focus();
      inputs.current[0].removeAttribute("disabled");
      Timer(90,timeElem.current);
    }});

    let flag : boolean =true;

    inputs.current?.map((item :any,index)=>{
        item.addEventListener("keyup",(e:any)=>{
           const nextInput = index == inputs.current?.length-1 ? null : index+1;
           console.log(e)

           if(e.key=="Backspace"){
            flag=false;
            submit.current?.classList.remove("active");
            submit.current?.setAttribute("disabled","true");
            item.value="";
      
           }

           else if(e.key.length==1){
            if(item.value.length>1){
                flag=false;
                item.value="";
                console.log("dd")
                console.log("fff")
                submit.current?.classList.remove("active");
                submit.current?.setAttribute("disabled","true");
               }
               else if(item.value.length==1){
                flag=true;
                if(nextInput!=null){
                    inputs.current[nextInput].removeAttribute("disabled");
                    inputs.current[nextInput].focus();
                }
               }
               else{
                flag=false;
               }
           }

           console.log(index)

           if(flag && inputs.current[inputs.current.length-1].value.length==1){
            console.log(item.value)
               submit.current?.classList.add("active")
               submit.current?.removeAttribute("disabled");
           }
        })
    })
 },[])

 useEffect(()=>{
    if(state.Success.length)setTimeout(()=>navigate("/"),1500);
 },[state])

 const handleForm = (e:any)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {otp:"",email:""};

  for (let [key, value] of formData.entries()) {
    data["otp"] += value;
    console.log(key)
  }
  data["email"]=  "mk5";
  if(TimeValidator(timeWatcher))dispatch({method:"POST",payload:{url:"/otp/verify",formData:JSON.stringify(data),headers:{
    "Content-Type":"application/json",
 }},type:"SUCCESS"})

 else dispatch({type:"FAILURE",payload:["Time Expired"]})
  
  console.log(data)
 }

 


 
 return (<>
    <div  className="login-container flex-column" style={{minHeight:"100vh",width:"90%" ,margin:"auto"}} >

    {state.Success.length!=0 && (
            <>
            <div style={{width:"20%"}} className="success">
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
    {state.Errors.length!=0 && (
            <>
            <div style={{width:"20%"}} className="error">
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

    <h1 style={{fontSize:"60px",fontWeight:"800",textAlign:"center"}}>OTP Verification </h1>
    <p  style={{textAlign:"center",fontWeight:"400"}}>Dear {state.User.name} , We have sent a One-Time Password (OTP) to mail  : <strong>{state.User.email}</strong>. <br/> Please check your inbox (could be in spam) and enter the OTP below to complete the verification process:</p>
    <p>Remaining Time :<span ref={timeElem} className="text-warning"></span></p>
    <form  method="POST" onSubmit={handleForm} style={{gap:"30px"}} className="d-flex flex-wrap justify-content-center verify" >
    {Array.from({ length: 4 }, (_, index) => (
  <input
    key={index}
    name={Math.random().toString()}
    ref={(item) => (inputs.current[index] = item as HTMLInputElement)} // Type assertion here
    className="w-15"
    type="number"
    disabled
  />
))}
        <input  ref={submit} className="w-50" type="submit" value="Verify OTP" disabled/>
    </form>
    <br/>
    <p className="text-black-50">Didn't receive Otp? <span><strong className="text-dark">Resend Otp</strong></span></p>
    </div>
   
    </>
 )
}

export default Verify