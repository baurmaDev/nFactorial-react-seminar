import { mockData } from "../../mockData";
import UserCard from "../UserCard.jsx/UserCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserCards = () => {
    return (
        <div>
            {
                mockData.map(userData => (
                    <UserCard userInfo={userData} />
                ))
            }
        </div>
    )
}

export default UserCards;