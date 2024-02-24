import React, { useState } from 'react'
import {data} from './data'
function Product() {

  
  return (
    <div   style={{display:"flex",gap:'20px'}} >
{data.map((el)=>
<div className="card" style={{width: '18rem'}}>
  <img src={el.img} className="card-img-top" alt="..."  style={{height:"200px"}} />
  <div className="card-body">
    <h5 className="card-title">{el.name}</h5>
   <p className="card-text">{el.prix}</p>
   
  </div>
</div>
)}






    </div>
  )
}

export default Product