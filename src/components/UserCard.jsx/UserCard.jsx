import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserCard = ({userInfo}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={userInfo.avatar} />

            <Card.Body>
                <Card.Title>{userInfo.name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">{userInfo.email}</Button>
            </Card.Body>
        </Card>
    )
}

export default UserCard;