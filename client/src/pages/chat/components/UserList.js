import { Accordion, Card, Button } from 'react-bootstrap'
import { RiRadioButtonLine } from 'react-icons/ri'

export const UserList = ({ users, createChat }) => {
    const onClickHandler = (user) => {
        createChat(user)
    }
    return (
        <Accordion className='mt-4'>
            <Card>
                <Card.Header bg='none'>
                    <Accordion.Toggle
                        as={Button}
                        variant='info'
                        eventKey='0'
                        style={{ textDecoration: 'none' }}
                    >
                        {/*Active users{' '}*/}
                        {/*<Badge variant='light' className='ml-1'>*/}
                        {/*    {activeUsers}*/}
                        {/*</Badge>*/}
                    </Accordion.Toggle>
                </Card.Header>
                {users.map(user => (
                    <Accordion.Collapse eventKey='0' key={user_id}>
                        <Card.Body onClick={onClickHandler(user)}>
                            <RiRadioButtonLine
                                className={`mb-1 ${
                                    user.online ? 'text-success' : 'text-secondary'
                                }`}
                                size='0.8em'
                            />{' '}
                            {user.name}
                        </Card.Body>
                    </Accordion.Collapse>
                ))}
            </Card>
        </Accordion>
    )
}