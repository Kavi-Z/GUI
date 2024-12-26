import './Login.css'
export default function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Enter username" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="Enter password" />
                    </div>
                    <button type="submit" className="btn">Login</button>
                </form>
                <p className="signup-link">Don't have an account? <a href="/signup">Sign up</a></p>
            </div>
        </div>
    );
}
