"use client"
import React, { useState } from "react";
import styles from "./auth.module.css";
import Link from "next/link";

const Login = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")



    const onButtonClick = async () => {
        // Construct the user data
        const userData = {
            name,
            email,
            password
        };

        // Make a POST request to the API endpoint
        try {
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.ok) {
                // Handle success - maybe clear the form or redirect the user
                console.log('Registration successful', data);
            } else {
                // Handle errors - maybe set error messages
                console.error('Registration failed', data);
                if (data.status === 400) {
                    // Set fields missing error
                } else if (data.status === 409) {
                    // Set user exists error
                }
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };


    return <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
            <div>Register</div>
        </div>
        <br />
        <div className={styles.inputContainer}>
            <input
                value={name}
                placeholder="Enter your name here"
                onChange={ev => setName(ev.target.value)}
                className={styles.inputBox} />
            <label className={styles.errorLabel}>{emailError}</label>
        </div>
        <br />
        <div className={styles.inputContainer}>
            <input
                value={email}
                placeholder="Enter your email here"
                onChange={ev => setEmail(ev.target.value)}
                className={styles.inputBox} />
            <label className={styles.errorLabel}>{emailError}</label>
        </div>
        <br />
        <div className={styles.inputContainer}>
            <input
                type="password"
                value={password}
                placeholder="Enter your password here"
                onChange={ev => setPassword(ev.target.value)}
                className={styles.inputBox} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <div className={styles.inputContainer}>
            <input
                className={styles.inputButton}
                type="button"
                onClick={onButtonClick}
                value={"Register"} />
        </div>
        <Link href={"/login"}>Already registered then Login</Link>
    </div>
}

export default Login