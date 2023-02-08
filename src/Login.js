import React from 'react'
import google from './google.png'
const Login = () => {
  return (
    <>

      <div className="container">
        <div class="row">
          <div class="col-md-6 -flex bg-image"></div>
          <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">
              <div class="container-main">
                {/* <div class="row"> */}
                <div class="col-md mx-auto">
                  <h3 class="display-3">Welcome Back!<br /></h3>
                  <h4 className='display-4'>Login to your Account</h4>
                  {/* <br></br> */}
                  <form class="form-horizontal">
                    <div class="form-group">
                      <input type="email" id="formControlLg" class="form-control form-control-lg" placeholder='Email' />
                    </div>
                    <div class="form-group">
                      <input type="password" id="formControlLg" class="form-control form-control-lg" placeholder='Password' />
                    </div>
                    <div class="form-group">
                      <div class="checkbox">
                        <label><input type="checkbox" class="larger"/> Remember me</label>

                        {/* <label className='forgot'> Forgot Password?</label> */}
                      </div>
                    </div>
                    <br></br>
                    <div>
                      <button type="submit" id='login-btn' class="form-control form-control-lg" >Login</button>
                    </div>
                    <div>
                      <button type="button" id='login-google' class="form-control form-control-lg"><img src={google} className="google-logo"></img>Login with Google</button>
                    </div>
                    <div id="sign" class="text-center d-flex justify-content-between mt-4"><href>Don't have an account? <a href="">
                      <href class="sign-up">Sign Up</href></a></href></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div>  */}
    </>
  )
}
export default Login;