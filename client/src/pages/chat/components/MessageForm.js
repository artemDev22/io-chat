import { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

export const MessageForm = ({ user, sendMessage }) => {

    const [text, setText] = useState('')

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        const trimmed = text.trim()
        if (trimmed) {
            sendMessage({ text: text, name: user.name })
            setText('')
        }
    }

    return (
        <>
            <Form onSubmit={handleSendMessage}>
                <Form.Group className='d-flex'>
                    <Form.Control
                        value={text}
                        onChange={handleChangeText}
                        type='text'
                        placeholder='Message...'
                    />
                    <Button variant='success' type='submit'>
                        Отправить
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}