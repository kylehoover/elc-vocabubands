'use strict'

import React from 'react'

const Login = () => (
  <div className='login align-center'>
    <h1>Welcome to Vocabubands!</h1>
    <a href='https://cas.byu.edu/cas/login?service=http://localhost:8080' className='btn btn-primary' id='home-login'>Login to view your lists</a>
  </div>
)

export default Login
