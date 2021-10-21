import {MessageList} from "./components/MessageList";
import {useChat} from "../../hooks/useChat";
import {MessageForm} from "./components/MessageForm";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "react-bootstrap";
import {useEffect} from "react";
import {getUser, getUsers, getUsersByChat} from "../../actions/userActions";
import {UserList} from "./components/UserList";
import Loader from "../../components/Loader";
import {getChat} from "../../actions/chatActions";


const Chat = ({history}) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.auth)

    const { user,  loading: userLoading, error: userError } = useSelector(state => state.userReducer)
    const { chat, loading: chatLoading, error: chatError } = useSelector(state => state.chatReducer)
    const { users, loading: usersLoading, error: usersError } = useSelector(state => state.usersReducer)
    const { users: chatUsers, loading: chatUsersLoading, error: chatUsersError } = useSelector(state => state.usersByChatReducer)

    useEffect(() => {
        if (!name) {
            history.push("/login")
        }
        dispatch(getUser(name))
        dispatch(getUsers())
        if (chat) {
            selectChat(chat._id)
            dispatch(getUsersByChat(chat.users))
        }
    }, [name, chat])

    const createChat = selectedChat => {
        const ids = [selectedChat._id, user._id];
        dispatch(getChat(ids));
    }

    const { removeMessage, messages, sendMessage, toggleLike, selectChat } = useChat(user, chat)
    return (
        <Container>
            {chat ?
                userLoading || chatLoading || usersLoading ? <Loader /> :
                    userError || chatError || usersError ? <div>error</div> :
                        <>
                            <h2 className='text-center'>Room: {chat._id}</h2>
                            <UserList users={users} createChat={createChat} />
                            <MessageList messages={messages} removeMessage={removeMessage} toggleLike={toggleLike} user={user} />
                            <MessageForm user={user} sendMessage={sendMessage} />
                        </> : <div>select chat pls</div>
            })


        </Container>
    )
}



export default Chat;