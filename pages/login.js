import styles from '../styles/Login/login.module.css'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import firebaseConfig from '../Components/Firebase';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';



const login = ({users, IDs}) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
	const db = getFirestore(app);

		const LoginGoogle = async () => {
			console.log('login google');
        signInWithPopup(auth, provider)
			.then((result) => {
				const user = result.user;
                console.log(user)
				if (!IDs.includes(user.uid)) {

				
				try {
					const docRef = addDoc(collection(db, 'users'), {
						userName: user.displayName,
						Photo: user.photoURL,
						email: user.email,
						ID: user.uid,
					});
					console.log('Document written with ID: ', docRef.id);
				} catch (e) {
					console.error('Error adding document: ', e);
				}
				}
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
export async function getStaticProps() {

	const users = []
	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);
	const querySnapshot = await getDocs(collection(db, 'users'));

	querySnapshot.forEach((doc) => {
		users.push(doc.data());
	});
	const IDs = users.map((user) => user.ID)


	return {
		props: {
			users,
			IDs
		},
	};
}


export default login