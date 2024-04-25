import { useEffect, useReducer, useState , createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import './css/helper.css'
import Nav from './Nav.tsx'
import Home from './Home.tsx'
import Login from './Login.tsx'
import SignUp from './SignUp.tsx';
import Footer from './Footer.tsx'
import Verify from './Verify.tsx'
import Invalid from './Invalid.tsx'
import Account from './Account.tsx'
import Personal from './Personal.tsx'
import Security  from "./Security.tsx" 
import { dataMiddleware , rootReducer} from './Reducers.ts'

interface user {
  status: string // Define the status property if it's optional
  email:string,
  name:string,
  type:string
}

 let inital : user={email:"",name:"",status:"",type:""};

interface GlobalState {
  Results: any[]; // Define the type of Results according to your use case
  Success: any[]; // Define the type of Success according to your use case
  Errors: any[]; // Define the type of Errors according to your use case
  User?: user; // Optional User property
  isAuthenticated: boolean;
}

const globalState = {
  Results: [],
  Success:[],
  Errors:[],
  User:inital,
  isAuthenticated:false
}
const Shared = createContext({ state: globalState, 
dispatch: (action:any) => {}});

const applyMiddleware = (initialReducer:any ,initialState:any,  ...middlewares:Function[]):[any,any]=>{
  const [state,dispatch] = useReducer(initialReducer , initialState);
  let enhancedDispatch = dispatch;
 middlewares.reverse().map((middleware:Function )=>{
     enhancedDispatch = middleware(dispatch)(enhancedDispatch);
 })

 return [state,enhancedDispatch];
}




function App()  {

let [state,dispatch] = applyMiddleware(rootReducer, globalState,dataMiddleware);

 useEffect(()=>{
 
 },[])


  return (
    <>
    <BrowserRouter>
    <Shared.Provider value={{state,dispatch}}>
  <Routes>
    <Route path="/"  >
        <Route  index path="" element={<Home/>} />
        <Route path="auth">
        <Route path="signup" element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
        </Route>

        <Route  path="otp">
        <Route path="verify" element={<Verify/>}/>
        </Route>

        <Route  path="account">
        <Route index path="" element={<Account/>}/>
        <Route path="personal" element={<Personal/>}/>
        <Route path="security" element={<Security/>}/>
        <Route path="payment" element={<Verify/>}/>
        <Route path="wishlist" element={<Verify/>}/>
        </Route>

    <Route path="*" element={<Invalid/>}/>

    </Route>

  </Routes>
     
    </Shared.Provider>
    
    </BrowserRouter>
    
    </>
  )
}

export {App ,Shared};
