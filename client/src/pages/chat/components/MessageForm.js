import { useState } from 'react'

import { Form, Button } from 'react-bootstrap'

export const MessageForm = ({ username, sendMessage }) => {

    const [text, setText] = useState('')

    const handleChangeText = (e) => {
        setText(e.target.value)
    }

    const handleSendMessage = (e) => {
        e.preventDefault()
        const trimmed = text.trim()
        if (trimmed) {
            console.log({ text: text, name: username })
            sendMessage({ text: text, name: username })
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