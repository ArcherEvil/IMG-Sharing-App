import Meta from "./Meta";
import Navbar from './Navbar';
import { useSelector } from 'react-redux';
import NewPost from "./NewPost";
import {useTransition, animated} from 'react-spring';

const Layout = ({ children }) => {
	const newPostToggle = useSelector((state) => state.newpost)
	const transitions = useTransition(newPostToggle, {
		from: { x: 0, y: -800, opactiy: 0 },
		enter: { x: 0, y: 0, opactiy: 1 },
		leave: { x: 0, y: -800, opactiy: 0 },
	});
	const AnimatedNewPost = animated(NewPost);

	return (
		<>
			<Meta />
			{transitions(({style, item}) => (item && <AnimatedNewPost />))}
			<Navbar />
			{children}
		</>
	);
};

export default Layout