import React from "react";
import { useState } from "react";
import Signup from "./signup";
  function Login()
  {

    const [sign,setsign]=useState(false);

    if(sign == true)
    {
      return(
        <Signup/>
      )
    }

    return(

        <>
            <div className='login'>
        <form>
          <table className='login-table' cellSpacing={0}>
            <caption><h2>login form</h2></caption>
            <tr>
              <td className='login-label'>
                USERNAME
              </td>
              <td className='login-input'>
                <input type="text" placeholder='username'/>
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
                <input type="button" value={'LOGIN'} className='log-button'/>
              </td>
            </tr>

            <tr>
              <td className='go-signup' colSpan={2}>
                <button href='#' onClick={()=>setsign(true)}>go to signup</button>
              </td>
            </tr>

          </table>
        </form>
      </div>
        </>

    );
  }
  export default Login;