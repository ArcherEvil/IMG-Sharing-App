import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar/Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Navbar = () => {
	const loginInf = useSelector((state) => state.login);

    const router = useRouter();
    const MainPage = () => {
    router.push('/')}
	return (
		<nav className={styles.Navbar}>
			<p onClick={() => MainPage()}>IMG Sharing App</p>
			<Profile isLogged={loginInf[0]} />
		</nav>
	);
};

const Profile = ({isLogged}) => {
   const router = useRouter();
	const Login = () => {
		router.push('/login')
	};

	return (
		<>
		{isLogged ? 
			<p>YES</p>
		:
		<button onClick={() => Login()} className={styles.Login}>
			Login
		</button>
			}
		</>
	);
};

export default Navbar;
