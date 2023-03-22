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
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.title}>Login</div>
      <div className={`${styles.inputContainer} ${styles.ic1}`}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
          placeholder=" "
          className={styles.input}
        />
        <div className={`${styles.cut}`}></div>
        <label className={styles.placeholder}>Username (email)</label>
        <p className={styles.error}>{errors.username && errors.username}</p>
      </div>
      <div className={`${styles.inputContainer} ${styles.ic1}`}>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
          placeholder=" "
          className={styles.input}
        />
        <div className={`${styles.cut}`}></div>
        <label className={styles.placeholder}>Password</label>
        <p className={styles.error}>{errors.password && errors.password}</p>
      </div>
      <button type="submit" className={`btn ${styles.submit}`}>
        Login
      </button>
    </form>
  );
}

export default Form;
