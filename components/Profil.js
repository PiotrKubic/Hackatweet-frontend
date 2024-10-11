import styles from "../styles/Profil.module.css";
import Image from "next/image";
import { useState } from "react";
import { isUserConnected } from "../reducers/users";
import { useDispatch , useSelector} from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg, faTrash } from '@fortawesome/free-solid-svg-icons';





function Profil() {
  
  //  const user = useSelector((state) => state.isUserConnected.value)
  let user = {username : 'Bryan', pseudo : 'LeBG'}
  
    return (
        <div>
            <div className={styles.profil}>
                <FontAwesomeIcon icon={faEgg} className={styles.icone}/> 
                    <div className={styles.user}>
                        <h1>{user.username}</h1>
                        <p>@{user.pseudo}</p>
                    </div>
                </div>
            <button className={styles.logout}>Logout</button>
        </div>

       
  );
}

export default Profil;