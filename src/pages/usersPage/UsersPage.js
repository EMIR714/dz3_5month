import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, deleteAllUsersAction } from "../../redux/action";
import User from "../../components/user/User";

function UsersPage() {
    const { value, users } = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(""); 

    const changeInput = (event) => {
        setInputValue(event.target.value); 
    }

    const addUser = () => {
        dispatch(addUserAction(inputValue)); 
        setInputValue(""); 
    }

    const deleteAllUsers = () => {
        dispatch(deleteAllUsersAction());
        setInputValue(""); 
    }

    return (
        <div>
            <input
                type="text"
                placeholder="name"
                onChange={changeInput}
                value={inputValue} 
            />
            <button onClick={addUser}>add</button>
            <button onClick={deleteAllUsers}>delete all</button>
            {users.map((user, idx) => (
                <User key={idx} userName={user} />
            ))}
        </div>
    );
}

export default UsersPage;

