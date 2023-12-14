import '../assets/styles/login.css'
function LogIn() {
    return (
      
      <div>
          
        
          <form>
            <h1>Login </h1>
          
          <br></br>
  
            <lable>NAME</lable>
            <br></br>
          <input type="text" id="name" name="name" placeholder="your name" />
          <br></br>
          <br></br>
        
            <lable>PASSWORD</lable>
            <br></br>
          <input type="password" id="password" name="password" placeholder="password" />
          <br></br>
          <br></br>

          <button>Submit</button>
          <br></br>
          <br></br>
          <a class="btn btn-secondary" href="signup.js" role="button">Don't have an account?</a>
           
        
          </form>
        
      </div>
    );
  }
  
  export default LogIn;