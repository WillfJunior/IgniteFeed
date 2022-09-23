import { ThumbsUp, Trash } from 'phosphor-react';
import React from 'react';
import Avatar from './Avatar';
import styles from './Comment.module.css'

const Comment = ({comment}) => {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://github.com/willfjunior.png' />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>will Junior</strong>
                            <time title='21 de setembro ás 13:22' dateTime='2022-09-21 13:22:00'>Cerca há 1h atras</time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{comment}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    );
}

export default Comment;
