import styles from '../styles/Login/login.module.css'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import firebaseConfig from '../Components/Firebase';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';



const login = () => {

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const LoginGoogle = () => {
        signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
                console.log(user)
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				const email = error.customData.email;
				const credential = GoogleAuthProvider.credentialFromError(error);
			});
            
        }
    return (
			<main className={styles.Main}>
				<div className={styles.LoginBox}>
                    <p>Login Page</p>
                    <button onClick={() => LoginGoogle()}>Login With Google</button>
                </div>
			</main>
	);
}

export default login