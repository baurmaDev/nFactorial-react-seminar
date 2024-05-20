import { mockData } from "../../mockData";
import UserCard from "../UserCard.jsx/UserCard";


const UserCards = () => {
    return (
        <div>
            {
                mockData.map(userData => (
                    <div>{userData.name}</div>
                ))
            }
            <UserCard />
        </div>
    )
}

export default UserCards;