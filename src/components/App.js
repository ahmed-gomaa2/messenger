import React, {useEffect, useState} from 'react';
import {Button, FormControl, InputLabel, Input} from "@material-ui/core";
import './css/App.css'
import Message from "./Message";
import firebase from "../config/firebase";
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from "@material-ui/core";

const App = () => {
    const [input, setInput] = React.useState('')
    const [messages, setMessages] = React.useState([])
    const [username, setUsername] = useState('')
    const db = firebase.firestore()

    useEffect(() => {
        setUsername(prompt('please enter your name!'))
    }, [])


    useEffect(() => {
        db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => {
                return {id: doc.id, message: doc.data()}
            }))
        })
    }, [])

    console.log(messages)

    const handleInputChange = e => {
        setInput(e.target.value)
    }


    const sendMessage = e => {
        e.preventDefault()
        db.collection('messages').add({
            username:username,
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className={'app'}>
            <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt=""/>
            <h1>Welcome {username || 'Unknown User'}</h1>
            <form className={'app__form'} action="">
                <FormControl className={'app__formControl'}>
                    <Input className={'app__input'} placeholder={'Enter a message...'} value={input} onChange={handleInputChange} />
                    <IconButton className={'app__iconButton'} disabled={!input} color={'primary'} variant={'contained'} type={'submit'} onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>
                </FormControl>

            </form>
            <FlipMove>
                    {messages?.map(({id, message}) => {
                        return <Message key={id} username={username} message={message} />
                    })}
            </FlipMove>

        </div>
    );
};

export default App;