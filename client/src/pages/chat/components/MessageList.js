import { useRef, useEffect } from 'react'
import { ListGroup } from 'react-bootstrap'
import { MessageItem } from './MessageItem'

const listStyles = {
    height: '80vh',
    border: '1px solid rgba(0,0,0,.4)',
    borderRadius: '4px',
    overflow: 'auto'
}

export const MessageList = ({ messages, removeMessage }) => {
    const messagesEndRef = useRef(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [messages])
    return (
        <>
            <ListGroup variant='flush' style={listStyles}>
                {messages.map((msg) => (
                    <MessageItem
                        key={msg._id}
                        message={msg}
                        removeMessage={removeMessage}
                    />
                ))}
                <span ref={messagesEndRef}></span>
            </ListGroup>
        </>
    )
}