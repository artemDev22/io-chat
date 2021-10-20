import {MessageList} from "./components/MessageList";
import {useChat} from "../../hooks/useChat";
import {MessageForm} from "./components/MessageForm";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import {useEffect} from "react";
import {getUser} from "../../actions/userActions";
import {ROOM_ID} from "../../constants/messageConstants";


const Chat = ({history}) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.auth)

    const { user, loading, error } = useSelector(state => state.userReducer)
    useEffect(() => {
        if (!name) {
            history.push("/login")
        }
        dispatch(getUser(name))
    }, [name])
    const { removeMessage, messages, sendMessage, toggleLike } = useChat(ROOM_ID, user)
    return (
        <Container>
            <h2 className='text-center'>Room: {ROOM_ID}</h2>
            {loading ? <div>loading</div> :
                error ? <div>{error}</div> :
                <>
                    <MessageList messages={messages} removeMessage={removeMessage} toggleLike={toggleLike} user={user} />
                    <MessageForm user={user} sendMessage={sendMessage} />
                </>
            }

        </Container>
    )
}



export default Chat;