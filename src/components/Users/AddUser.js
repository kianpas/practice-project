import React, { useState } from 'react'

import ErrorModal from '../UI/ErrorModal';
import Button from '../UI/Button';
import Card from '../UI/Card';
import classes from "./AddUser.module.css"


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        //이름, 나이가 비어있을 경우
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return;
        }
        //나이가 1보다 적을 경우
        if (enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age ( > 0)."
            })
            return;
        }
        console.log(enteredUsername, enteredAge);
        console.log(props);
        props.onAddUser(enteredUsername, enteredAge);
        //초기화
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = () =>{
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label className={classes.input.label} htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
