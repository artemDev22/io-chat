import TimeAgo from 'react-timeago'
import { ListGroup, Card, Button } from 'react-bootstrap'
import { AiOutlineDelete } from 'react-icons/ai'

export const MessageItem = ({ message, removeMessage }) => {

    const handleRemoveMessage = () => {
        removeMessage(message._id)
    }

    const { text, name, createdAt, currentUser } = message
    return (
        <ListGroup.Item
            className={`d-flex ${currentUser ? 'justify-content-end' : ''}`}
        >
            <Card
                bg={`${currentUser ? 'primary' : 'secondary'}`}
                text='light'
                style={{ width: '55%' }}
            >
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <Card.Text as={TimeAgo} date={createdAt} className='small' />
                    <Card.Text>{name}</Card.Text>
                </Card.Header>
                <Card.Body className='d-flex justify-content-between align-items-center'>
                    <Card.Text>{text}</Card.Text>
                    {currentUser && (
                        <Button
                            variant='none'
                            className='text-warning'
                            onClick={handleRemoveMessage}
                        >
                            <AiOutlineDelete />
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </ListGroup.Item>
    )
}