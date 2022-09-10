import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar/Navbar.module.css';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { DropDownAction, loginAction } from '../Redux/Actions';




const Navbar = () => {
	const loginInf = useSelector((state) => state.login);
    const router = useRouter();
    const MainPage = () => {
    router.push('/')}
	return (
		<nav className={styles.Navbar}>
			<p onClick={() => MainPage()}>IMG Sharing App</p>
			<Profile isLogged={loginInf[0]} data={loginInf[1]} />
		</nav>
	);
};

const Profile = ({isLogged, data}) => {

	const router = useRouter();
	const dispatch = useDispatch()

	const SignOut = () => {
		dispatch(loginAction(null));
		localStorage.setItem('cdl', null);
		localStorage.setItem('isCdl', null);
		router.push('/')
	}

	const DropDownState = useSelector((state) => state.dropdown);

	const Login = () => {
		router.push('/login')
	};

	const DropDownMenu = () => {
		return (
			<div className={styles.DropDownMenu}>
				<button>Profile</button>
				<button onClick={() => SignOut()}>Sign Out</button>
			</div>
			)
	}

	return (
		<>
			{isLogged ? (
				<div onClick={() => dispatch(DropDownAction())} className={styles.Profile}>
					<div className={styles.ProfileImg}>
						<Image
						src={`/api/imagefetcher?url=${encodeURIComponent(data.Photo)}`}
						width={50}
						height={50}>

						</Image>
					</div>
					{DropDownState ? 
					<DropDownMenu/>
				:
				<></>}
				</div>
			) : (
				<button onClick={() => Login()} className={styles.Login}>
					Login
				</button>
			)}
		</>
	);
};

export default Navbar;
