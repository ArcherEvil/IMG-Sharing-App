import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar/Navbar.module.css';

const Navbar = () => {
    const router = useRouter();
    const MainPage = () => {
    router.push('/')}
	return (
		<nav className={styles.Navbar}>
			<p onClick={() => MainPage()}>IMG Sharing App</p>
			<Profile />
		</nav>
	);
};

const Profile = () => {
   const router = useRouter();
	const Login = () => {
		router.push('/login')
	};

	return (
		<button onClick={() => Login()} className={styles.Login}>
			Login
		</button>
	);
};

export default Navbar;
