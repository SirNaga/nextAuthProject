"use client"
import React, {useContext, useState} from "react";
import styles from "./auth.module.css";
import Link from "next/link";
import {MyContext} from "../ToggleLoginState";
import {useSession} from "next-auth/react";


const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const { loginStatus, setLoginStatus } = useContext(MyContext);
    const { data: session } = useSession()


    const  onButtonClick = async () => {
        setEmailError("")
        setPasswordError("")

        // Check if the user has entered both fields correctly
        if ("" === email) {
            setEmailError("Please enter your email")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please enter a valid email")
            return
        }

        if ("" === password) {
            setPasswordError("Please enter a password")
            return
        }

        if (password.length < 7) {
            setPasswordError("The password must be 8 characters or longer")
            return
        }

        const userData = {
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                setLoginStatus(true);
                console.log(loginStatus)
            } else {
                // Handle errors - maybe set error messages
                console.error('Login failed', data);
                if (data.status === 400) {
                    // Set fields missing error
                } else if (data.status === 409) {
                    // Set user exists error
                }
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }

    }

    return <div className={styles.mainContainer}>
        <div className={styles.titleContainer}>
            <div>Login</div>
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
                value={"Log in"} />
        </div>
        <Link href={"/register"}>No account yet then register</Link>
    </div>

}

export default Login
