import React, {forwardRef} from 'react';
import './css/Message.css'
import {CardContent, Card, Typography} from "@material-ui/core";

const Message = (props, ref) => {

    const isUser = props.username === props.message?.username

    return (
        <div ref={ref} className={`message ${isUser ? 'message__user' : ''}`}>
            <Card className={`${isUser ? 'message__userCard' : 'message__guestCard'}`}>
                <CardContent>
                    <Typography variant={'h5'} component={'h4'}>
                        {!isUser && `${props.message?.username || 'Unknown User'}:`}  {props.message?.message}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default forwardRef(Message) ;