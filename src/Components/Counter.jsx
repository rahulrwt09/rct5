import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addaction, reduceaction } from '../Redux/Action';

const Counter = () => {
  const counter = useSelector((store)=>store.counter);
  const dispatch1= useDispatch();
  
  const handelAdd = ()=>{
    dispatch1(addaction(1))
  }
  const handelreduce =()=>{
    dispatch1(reduceaction(2))
  }
  console.log(counter)  
  return (
    
    <div>
         <h1>Counter{counter}</h1>
         <button onClick= {handelAdd}>Ad</button>
         <button onClick= {handelreduce}>reduce</button>
    </div>
  )
}

export default Counter
