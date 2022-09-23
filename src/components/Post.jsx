import React, { useState } from 'react';
import styles from './Post.module.css'
import Comment from './Comment';
import Avatar from './Avatar';
import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { PublishedDateFormatted, PublishedDateRelativeNow } from './DataUtils';

const Post = ({author, content, publishAt}) => {

    const [comments, setComments] = useState([])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishAt, "d 'de' LLLL 'ás' HH:mm'h'",{
        locale:ptBR
    });

    const publishedDateRelativeNow = formatDistanceToNow(publishAt, {
        locale:ptBR,
        addSuffix:true,
    })


    const handleNewComment = () => {
        event.preventDefault();
        setComments([...comments,newCommentText])
        setNewCommentText('')
    }

    const handleNewCommentChange = () => {
        setNewCommentText(event.target.value)
    }

     const deleteComment = (commnentToDelete) => {
        const newCommentsWithoutDeleteOne = comments.filter(comment => {
            return comment !== commnentToDelete
        })

        setComments(newCommentsWithoutDeleteOne)
     }



    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>{publishedDateRelativeNow}</time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleNewComment} className={styles.commentForm}>
                <strong>Deixe Seu Feedback</strong>

                <textarea 
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um Comentario'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>

            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    )
                })}
            </div>
        </article>
    );
}

export default Post;
