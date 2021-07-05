import React, { useState } from 'react';
// import firebase from "firebase";
import Styles from './Postuploder.module.css';
import { Input, Button, } from '@material-ui/core';
import { db, storage } from '../firebaseconfig'
import profilepic from '../../images/profilepic.jpg'
function PostUploader({ username }) {
    const [Caption, setCaption] = useState('');
    const [Progress, setProgress] = useState(0)
    const [Image, setImage] = useState('');
    const [Location, setLocation] = useState('');
    const fileupload = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    }
    const upload = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref('images/' + Image.name).put(Image);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(progress);
            },
            (err) => {
                console.log(err);
                alert(err.message);
            },
            () => {
                storage.ref("images")
                    .child(Image.name)
                    .getDownloadURL()
                    .then(url => {
                        db.collection("posts").add({
                            // timestamp: firebase.firestore.FieldValue.serverTimestamp,
                            caption: Caption,
                            username: username,
                            profilepic: profilepic,
                            postimg: url,
                            location: Location,
                        });
                        setProgress(0);
                        setCaption('');
                        setImage('');
                        setLocation('')
                    })
            }
        )
    }
    return (
        <div className={Styles.container}>

            <input type="file" onChange={fileupload}></input>
            <Input type="text" placeholder="Enter Location..." value={Location}
                onChange={(e) => {
                    setLocation(e.target.value);
                }}></Input>
            <Input type="text" placeholder="Enter Caption..." value={Caption}
                onChange={(e) => {
                    setCaption(e.target.value);
                }}></Input>
            <progress value={Progress} max='100' />
            <Button onClick={upload}>Upload</Button>
        </div>
    )
}

export default PostUploader
