import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "../modules/login.module.css";
import backdrop from "../images/loginPage.jpg"

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password);
    navigate("/dashboard");
  };
  return (
    <section className={styles.container}>
      <img src={backdrop} alt="Login Backdrop" className={styles.backdropImage}/>
      <div className={styles.card}>
        <h2 className={styles.heading}>Welcome Back</h2>
        <p className={styles.subheading}>
          Log in to manage your projects, crew, and finances.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className={styles.buttonContainer}>
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
