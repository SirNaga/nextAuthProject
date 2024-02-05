'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Link from "next/link";
import bg from '/public/bg.png'
import {useContext} from "react";
import {MyContext} from "./ToggleLoginState";

export default function Home() {
    const { loginStatus, setLoginStatus } = useContext(MyContext);
    return (
        <div className={styles.container}>
            <div className={styles.texts}>
                <h1 className={styles.title}>Share and engage with global content!</h1>
                <p className={styles.catchphrase}>Picture Perfect Moments, Endless Connections
                    – Where Every Image Tells a Story and Every Comment Paints a Conversation! Join the Visual
                    Symphony!</p>
                <div>
                    <Link href={"/register"}>
                        <button className={styles.registerbutton} disabled={loginStatus}>Register Now</button>
                    </Link>
                </div>
            </div>
            <div className={styles.item}>
                <Image src={bg} alt="" className={styles.img}/>
            </div>
        </div>
    )
}
