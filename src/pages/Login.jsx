

const Login = () => {
  return (
    <>
    
    <div>
<h1>Login</h1>

<div className="">
<input type="text" placeholder="Username" required=" " />
</div>

<div>
  <input type="text" placeholder="Password" required=" " />
</div>

<div>
  <label> <input type="checkbox"  />Remember me</label>
  <a href="#">Forgot password</a>
</div>

<div>
  <button type="submit">Login</button>

  <div>
    <p>Don't have an account? <a href="#">Register</a></p>
  </div>
</div>
    </div>
    </>
  )
}

export default Login