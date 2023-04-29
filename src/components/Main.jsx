import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Main() {

  let params = useParams();

  return (
    <div className='mt-5'>
      <h1>This is Main</h1>
      <ul>
        <li><Link to="tshirts"> T-Shirts </Link></li>
        <li><Link to="shoes"> Shoes </Link></li>
      </ul>
      <Outlet/>

      {/* {params.size} */}
    </div>
  )
}
export default Main


