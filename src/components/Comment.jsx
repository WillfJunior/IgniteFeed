import { ThumbsUp, Trash } from 'phosphor-react';
import React, {useState} from 'react';
import Avatar from './Avatar';
import styles from './Comment.module.css'
import { PublishedDateFormatted, PublishedDateRelativeNow } from './DataUtils';

const Comment = ({content, onDeleteComment}) => {

    const [likeCount, setLikeCount] = useState(0)

    const handleLikeCount = () => {
        setLikeCount(likeCount + 1)
    }

    const handleDeleteComment = () => {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/willfjunior.png'/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Willians Junior</strong>
                            <time title='21 de setembro ás 13:22' dateTime='2022-09-21 13:22:00'>Cerca há 1h atras</time>

                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeCount}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}

export default Comment;
