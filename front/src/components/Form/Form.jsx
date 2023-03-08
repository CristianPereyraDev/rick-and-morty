import { useState } from "react";
import { validateLoginForm } from "./validation";
import styles from "./Form.module.css";

function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
    setErrors(validateLoginForm(newUserData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // La función login viene por props.
    props.login(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleInputChange}
      />
      <p className={styles.error}>{errors.username && errors.username}</p>

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleInputChange}
      />
      <p className={styles.error}>{errors.password && errors.password}</p>

      <button type="submit">Login</button>
    </form>
  );
}

export default Form;
