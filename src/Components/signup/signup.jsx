
export default function Signup() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Sign Up</h2>
                <form>
  <div className="input-group">
    <label htmlFor="username">Username</label>
    <input type="text" id="username" placeholder="Enter username" required />
  </div>
  <div className="input-group">
    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="Enter email" required />
  </div>
  <div className="input-group">
    <label htmlFor="password">Password</label>
    <input type="password" id="password" placeholder="Enter password" required />
  </div>
  <div className="input-group">
    <label htmlFor="confirmPassword">Confirm Password</label>
    <input type="password" id="confirmPassword" placeholder="Confirm password" required />
  </div>
  <button type="submit" className="btn">Sign Up</button>
</form>          
            </div>
        </div>
    );
}  