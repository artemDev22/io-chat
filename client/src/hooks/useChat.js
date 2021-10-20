import { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import {SERVER_URL} from "../constants/apiUrl";

export const useChat = (roomId, user) => {
    const [messages, setMessages] = useState([])
    const socketRef = useRef(null)

    useEffect(() => {

        socketRef.current = io(SERVER_URL)

        socketRef.current.emit('message:get')

        socketRef.current.on('messages', (messages) => {
            const newMessages = messages.map((msg) =>
                msg.name === user.name ? { ...msg, currentUser: true } : checkLiked(msg)
            )
            console.log(messages)
            setMessages(newMessages)
        })

        return () => {
            socketRef.current.disconnect()
        }
    }, [roomId, user])

    const checkLiked = (msg) => {
        const existedLike = msg.likes.filter(like => user._id === like).length;
        if (existedLike) {
            return {...msg, liked: true}
        }
        return msg;
    }
    const sendMessage = ({ text, name }) => {
        socketRef.current.emit('message:add', {
            text,
            name,
        })
    }
    const editMessage = ({text, name, likes}) => {
        socketRef.current.emit('message:edit', {
            text,
            name,
            likes,
        })
    }

    const removeMessage = (messageId) => {
        socketRef.current.emit('message:remove', messageId)
    }

    const toggleLike = (data) => {
        socketRef.current.emit('message:like', data)
    }

    return { user, messages, sendMessage, removeMessage, editMessage, toggleLike }
}