import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { fetchMe, loginRequest, userSelector } from "../../slices/user";

export const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(userSelector);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const { username, password } = inputs;
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMe());
    if (user !== "") {
      history.push("/");
    }
  }, [dispatch, user, history]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = inputs;
    await dispatch(loginRequest(username, password));
    dispatch(fetchMe());
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Login</button>
      </form>
    </section>
  );
};

export default Login;
