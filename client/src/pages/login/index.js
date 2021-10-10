import {useEffect, useRef, useState} from "react";
import io from "socket.io-client";
import {Button, Form} from "react-bootstrap";
import {loginName} from "../../actions/userActions";
import {useDispatch} from "react-redux";



const Login = ({history}) => {
    const [name, setName] = useState('')
    const socketRef = useRef(null)
    const SERVER_URL = 'http://localhost:3001'
    const dispatch = useDispatch()
    useEffect(() => {
        socketRef.current = io(SERVER_URL)
    });

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginName(name))
        history.push("/chat")
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    return <Form
        className='mt-5'
        style={{ maxWidth: '320px', margin: '0 auto' }}
    >
        <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control value={name} onChange={handleChangeName} />
        </Form.Group>
        {name && (
            <Button variant='success' onClick={handleSubmit}>
                Chat
            </Button>
        )}
    </Form>
}

export default Login;