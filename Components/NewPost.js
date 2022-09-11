import { useDispatch } from 'react-redux';
import { NewPostAction } from '../Redux/Actions';
import styles from '../styles/NewPost/NewPost.module.css'


const NewPost = () => {

    const dispatch = useDispatch();

  return (
    <div className={styles.NewPost}>
        <div className={styles.NewPostOff} onClick={() => dispatch(NewPostAction())} />
    </div>
  )
}

export default NewPost