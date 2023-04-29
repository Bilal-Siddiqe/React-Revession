import React from 'react'
import Cards, { MyFunc } from './Cards'
import { useState } from 'react';

function Main() {


  const [count, updateCount] = useState("");

  function upd() {
    updateCount(count+"Hy");
  }




  return (
    <div className='mt-5'>
      <h1>This is Main</h1>
      {/* <Cards/> */}

      <div>
        <h1>State Count</h1>
        <h1>{count}</h1>
        <button onClick={upd}>Add+1</button>

      </div>


    </div>
  )
}

export default Main