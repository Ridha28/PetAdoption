import '../assets/styles/signup.css'
import LogIn from './login';
function SignUp() {
    return (
      
      <div className='Are'>
          
  
          <form>
            <h1>Sign Up</h1>
  
            
          
  
            <lable>NAME</lable>
            <br></br>
            
          <input type="text" id="name" name="name" placeholder="your name" />
          <br></br>
          <br></br>

          <lable>DOB</lable>
          <br></br>
            
          <input type="text" id="name" name="name" placeholder="your dob" />
          <br></br>
          <br></br>

          <lable>EMAIL</lable>
          <br></br>
            
          <input type="text" id="name" name="name" placeholder="your mail" />
          <br></br>
          <br></br>
        
          <lable>PHONE NUMBER</lable>
          <br></br>
            
          <input type="text" id="name" name="name" placeholder="your number" />
          <br></br>
          <br></br>

            <lable>PASSWORD</lable>
            <br></br>

          <input type="text" id="name" name="name" placeholder="password" />
          <br></br>
          <br></br>
          <button>Submit</button>
          <br></br>
          <br></br>
          <a class="btn btn-secondary" href='login.js' role="button">Already have an account?</a>
           
          </form>
        
      </div>
    );
  }
  
  export default SignUp;