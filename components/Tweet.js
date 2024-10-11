import styles from '../styles/Tweet.module.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg, faTrash } from '@fortawesome/free-solid-svg-icons';



function Tweet(props) {

 // let 
    
  
  
    return (
        <div className={styles.row}>
            <div className={styles.ligne1}>
                <FontAwesomeIcon icon={faEgg} /> 
                <h6>{props.username}</h6><span>@{props.pseudo}</span>
            </div>
            <div>
                <p> {props.post} </p>
            </div>
            <FontAwesomeIcon icon={faTrash} />
            
        </div>

  )
}

export default Tweet;