import "./Login.css";

const Login = () => {
  return (
    <section className="body">
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h1>Sign in to your account</h1>
            <form action="#">
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="checkbox-group">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  required
                />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#" className="forgot-password">
                Forgot password?
              </a>
              <button type="submit" className="submit-btn">
                Sign in
              </button>
              <p className="sign-up-link">
                Don’t have an account yet? <a href="#">Sign up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
