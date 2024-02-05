"use client"

import Link from 'next/link'
import React, {useContext} from 'react'
import styles from './navbar.module.css'
import {MyContext} from "../../ToggleLoginState";

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
        style: "styles.link",
    },
];

const Navbar = () => {
    const {loginStatus, setLoginStatus} = useContext(MyContext);
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Web Engineering Project
            </Link>
            <div className={styles.links}>
                {links.map(link => (
                    <Link key={link.id} href={link.url} className={styles.links}>{link.title}
                    </Link>
                ))}
                <p>
                    <Link href={"/login"} className={styles.logout}>{"Login/Sign up"}
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Navbar