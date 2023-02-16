import React, { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();

  const { login, getAllData } = useContext(AuthContext);
  const email = useRef("");
  const password = useRef("");
  const handleClick = async (e) => {
    e.preventDefault();
    await getAllData();
    await login({
      email: email.current.value,
      password: password.current.value,
    });
    navigate("/blogs");
  };
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Medium</h1>
          <p>
            “Happiness is a butterfly, which when pursued, is always just beyond
            your grasp, but which, if you will sit down quietly, may alight upon
            you.”
          </p>
          <span>Not registered ? </span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" ref={email} placeholder="Username" required />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              required
            />
            <button type="submit" onClick={handleClick}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
