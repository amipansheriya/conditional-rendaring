import React from "react";
import {useState} from 'react';
import App from "./App";
import Login from "./login";



function Signup()
{

    const [sign,setsign]=useState(true);

    if(sign == false)
    {
      return(
        <>
            <Login/>
        </>
      )
    }


    return(
        <>
            <div className='login'>
        <form>
          <table className='login-table' cellSpacing={0}>
            <caption><h2>sign-up form</h2></caption>
            
            <tr>
              <td className='login-label'>
                EMAIL
              </td>
              <td className='login-input'>
                <input type="text" placeholder='email'/>
              </td>
            </tr>
            

            <tr>
              <td className='login-label'>
                PASSWORD
              </td>
              <td className='login-input'>
                <input type="password" placeholder='password'/>
              </td>
            </tr>

            <tr>
              <td colSpan={2} className='login-button'>
                <input type="button" value={'Signup'} className='log-button'/>
              </td>
            </tr>

            <tr>
              <td className='go-signup' colSpan={2}>
                <button href='#' onClick={()=>setsign(false)}>go to login</button>
              </td>
            </tr>

          </table>
        </form>
      </div>
        </>
    )
}
export default Signup;