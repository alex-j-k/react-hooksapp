import React, { useState, useEffect } from 'react';
import {v1 as uuid} from 'uuid';
import NewSongForm from './NewSongForm';


const SongList = () => {

    const [songs, setSongs] = useState([
        {title: 'almost home', id:1 },
        {title: 'memory goslpel', id:2 },
        {title: 'this wild darkness', id:3 },
    ]);

    const [age, setAge] = useState(20);


    const addSong =(title) => {
        setSongs([...songs, {title: title, id:uuid()}])
    }
    useEffect(() => {
        console.log('useefect hook ran', songs)
    }, [songs]);
    useEffect(() => {
        console.log('useefect hook ran', age)
    }, [age]);
    return (  
        <div className="song-list">
            <ul>
               {songs.map(song => {
                   return(
                   <li key={song.id} >{song.title}</li>
                   )
               })}
            </ul>
            <NewSongForm addSong={addSong}></NewSongForm>
            <button onClick={() => setAge(age + 1)}>add one to age: {age}</button>
        </div>
    );
}
 
export default SongList;