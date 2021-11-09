import React from 'react'
import style from './Message.module.css'

type TypeProps = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: TypeProps) {
    return (
        <div>
            <div className={style.messageBlock}>
                <div className={style.imgBlock}>
                    <div className={style.ava}><img src={props.avatar} alt="photo"/></div>

                </div>
                <div className={style.textBlock}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.message}>{props.message}</p>
                    <p className={style.time}>{props.time}</p>
                </div>

            </div>
        </div>
    )
}

export default Message;
