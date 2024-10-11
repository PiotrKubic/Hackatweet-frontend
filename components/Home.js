import styles from '../styles/Home.module.css';
import styles1 from "../styles/Profil.module.css";
import Tweet from './Tweet';
import Profil from './Profil';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEgg, faTrash } from '@fortawesome/free-solid-svg-icons';




function Home() {
  
    const [counter , setCounter] = useState(0)
    const [tweetData, setTweetData] = useState([]);
    const [profilData, setProfilData] = useState()

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
          .then(response => response.json())
          .then(data => {
            setTweetData(data)
            console.log(data)

          });

        
       }, []);

    const tweets = tweetData.map((data, i) => { 
       return <Tweet 
            key={i}
            post={data.post}
            username={data.user.username}
            pseudo={data.user.pseudo}/>;
    })
  
  
    return (
        <div className={styles.main}>
            
            <div className={styles.all}>
                <div className={styles.gauche}>
                    <div className={styles.lfi}>
                        <img src="logo.png" alt="Logo" className={styles.logo}/>
                    </div>
                    <div className={styles.ps}>
                       <Profil/>
                    </div>
                </div>
                
                
                <div className={styles.haut}>
                    <h1>Home</h1>
                    <input className={styles.searchbar} type="text" placeholder="What's Up" onChange={(e) => setCounter(e.target.value.length)}/>
                    <div className={styles.sign}>   
                        <span>{counter}/180</span>
                        <button type="button" className={styles.btn}>Tweet</button>
                    </div>
                </div>
                
                
                <div className={styles.milieu}>
                    {tweets}
                </div>
                
                
                <div className={styles.droite}>
                    <h1>Trends</h1>
                    <div>
                        boite des hastags

                    </div>
                </div>

            </div>
        </div>
  );
}

export default Home;