
import './App.scss';
import {React,useState} from 'react'
import axios from 'axios';
const Card =({fristname,lastname,email,avater})=>{
  return(
    <div className='card' >
     <div className="header"></div>
    <img src={avater} alt="" />
    <div className="footer">
      <div>
    <h3><span className="material-symbols-outlined">person</span>{fristname}&nbsp;{lastname}</h3>
      </div>
      <div>
    <h3><span className="material-symbols-outlined">email</span>{email}</h3>
      </div>
    </div>
    
    </div>
  )
}

const App = () => {
  const [userData,setUserData] = useState([]);
  const api_key="https://reqres.in/api/users?page=1";
  const fatchapi = async()=>{
    const Data= await axios.get(api_key);
    setUserData(Data.data.data);
   }
  console.log(userData);
  return (
    <>
    <div className='nav'>
        <button onClick={fatchapi}>Get User</button>
      </div>
    <section>
    <div className='body' >      
      {
        userData.map((item,index)=>(
          <Card key={index} lastname={item.last_name} fristname={item.first_name} avater={item.avatar} email={item.email}/>
        ))
      }
 </div>
    </section>
    </>
  )
}

export default App


