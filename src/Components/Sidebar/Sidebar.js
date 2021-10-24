import React, { useState, useEffect } from 'react';
import Styles from "./Sidebar.module.css";
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Input } from '@material-ui/core';
import { auth } from '../firebaseconfig';
import PostUploader from '../postupload/PostUploader'


function Sidebar({ User, setUser }) {
    function getModalStyle() {
        const top = 50;
        const left = 50;


        return {
            top: `${top}%`,
            left: `${left}%`,

            transform: `translate(-${top}%, -${left}%)`,
        };
    }
    const useStyles = makeStyles((theme) => ({
        paper: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '30%',
            left: '30%',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
        form: {

            display: 'flex',
            flexDirection: 'column'

        }
    }));

    const classes = useStyles();
    const { modalStyle } = useState(getModalStyle);
    const [Email, setEmail] = useState('');
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Open, setOpen] = useState(false);
    const [Login, setLogin] = useState(false);

    const signup = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(Email, Password)
            .then((authUser) => {
                return authUser.user.updateProfile({
                    displayName: Username,
                })

            })
            .catch((err) => window.alert('error:' + err))
        setOpen(false);
    }

    const login = () => {
        auth.signInWithEmailAndPassword(Email, Password)
            .then(() => window.alert('logedin'))
            .catch((err) => window.alert(err))
        setLogin(false)
    }

    useEffect(() => {
        const unsync = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                setUser(authUser)


            }
            else {
                setUser(null)
            }
        });
        return () => {
            unsync();
        };
    }, [User, setUser])
    return (
        <div className={Styles.majorcontainer}>
            <Modal
                open={Open}
                onClose={() => setOpen(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                    <br />
                    <form className={classes.form}>
                        <Input type="text" placeholder="Email.."
                            onChange={(e) => {

                                setEmail(e.target.value);

                            }} />
                        <br />

                        <Input type="text" placeholder="Username.."
                            onChange={(e) => {

                                setUsername(e.target.value);

                            }} />
                        <br />

                        <Input type="password" placeholder="Password.." onChange={(e) => {

                            setPassword(e.target.value);

                        }} />
                        <br />

                        <Button type="submit" onClick={signup}>Sign up</Button>
                    </form>
                </div>
            </Modal>
            <Modal
                open={Login}
                onClose={() => setLogin(false)}>
                <div style={modalStyle} className={classes.paper}>
                    <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="" />
                    <br />
                    <form className={classes.form}>
                        <Input type="text" placeholder="Email.."
                            onChange={(e) => {

                                setEmail(e.target.value);

                            }} />
                        <br />
                        <Input type="password" placeholder="Password.." onChange={(e) => {

                            setPassword(e.target.value);

                        }} />
                        <br />
                        <Button onClick={login}>Login</Button>
                    </form>
                </div>
            </Modal>
            {User?.displayName ?
                <>
                    <h1>Hey {User.displayName}</h1>
                    <Button onClick={() => {
                        auth.signOut();

                    }}>Log out</Button>
                    <PostUploader username={User.displayName} />
                </> :
                <div className={Styles.Button}>
                    <Button onClick={() =>
                        setOpen(true)
                    }>Sign Up</Button>


                    <Button onClick={() =>
                        setLogin(true)
                    }>Log In</Button>
                </div>}

        </div>
    )
}

export default Sidebar;
