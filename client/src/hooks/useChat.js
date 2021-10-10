import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import {useSelector} from "react-redux";
import {SERVER_URL} from "../constants/apiUrl";

export const useChat = (roomId) => {
    const [messages, setMessages] = useState([])

    const { name } = useSelector(state => state.auth)

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(SERVER_URL)

        socketRef.current.emit('message:get')

        socketRef.current.on('messages', (messages) => {
            const newMessages = messages.map((msg) =>
                msg.name === name ? { ...msg, currentUser: true } : msg
            )
            // обновляем массив сообщений
            setMessages(newMessages)
        })

        return () => {
            socketRef.current.disconnect()
        }
    }, [roomId, name])

    // функция отправки сообщения
    // принимает объект с текстом сообщения и именем отправителя
    const sendMessage = ({ text, name }) => {
        // добавляем в объект id пользователя при отправке на сервер
        socketRef.current.emit('message:add', {
            text,
            name,
        })
    }
    const editMessage = ({text, name, likes}) => {
        // добавляем в объект id пользователя при отправке на сервер
        socketRef.current.emit('message:edit', {
            text,
            name,
            likes,
        })
    }

    const removeMessage = (messageId) => {
        console.log('here')
        socketRef.current.emit('message:remove', messageId)
    }

    return { messages, sendMessage, removeMessage, editMessage }
}