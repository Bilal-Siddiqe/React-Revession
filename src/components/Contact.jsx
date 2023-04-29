import React from 'react';
import { useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function Contact() {

  const [load, setLoad] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => { setLoad(false)}, 500);
  });

  function chng(){
    setCounter(counter+1);
    setLoad(true);
  }

  return (
    <div>
      <center>

        <div className='my-5'>
          
          <ClipLoader
            color={"blue"}
            loading={load}
            size={200}      
          />

        </div>
        <button onClick={chng}>Show {counter}</button>
      </center>
    </div>
  )
}

export default Contact