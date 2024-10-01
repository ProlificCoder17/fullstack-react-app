import { useEffect, useState } from 'react';
import Header from '../Header/Header';

const Body = () => 
    {
        const [count,setCount]=useState(1)
        useEffect(() => {
            console.log("useEffect")
        },[count])
  return (      
    <div className='body'>
        <Header count={count}/>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={()=>setCount(count-1)}>-</button>
    </div>
  )
}

export default Body