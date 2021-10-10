import {MessageList} from "./components/MessageList";
import {useChat} from "../../hooks/useChat";
import {MessageForm} from "./components/MessageForm";
import {useSelector} from "react-redux";
import {Container} from "react-bootstrap";


const Chat = ({history}) => {
    const roomId = "free"
    const { name } = useSelector(state => state.auth)
    if (!name) {
        history.push("/login")
    }
    const {removeMessage, messages, sendMessage, editMessage} = useChat(roomId)
    return (
        <Container>
            <h2 className='text-center'>Room: {roomId}</h2>
            <MessageList messages={messages} removeMessage={removeMessage} />
            <MessageForm username={name} sendMessage={sendMessage} />
        </Container>
    )
}



export default Chat;