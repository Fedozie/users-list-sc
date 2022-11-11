import React, { useState } from 'react';
import styled from 'styled-components';
import Card from '../../UI/card';
import Input from '../../UI/input';
import Button from '../../UI/button';
import Modal from '../../UI/modal';

const AddUserCard = styled(Card)`
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;
`;

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState()

    const userNameHandler = (e) => {
        setEnteredUsername(e.target.value);
    }

    const ageHandler = (e) => {
        setEnteredAge(e.target.value);
    }

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age"
            })
            return;
        }
        if (enteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age"
            })
            return;
        }

        setEnteredUsername('');
        setEnteredAge('');
    }

    const errorHandler = () => {
        setError(null)
    }

    return (
        <div>
            {error &&
                <Modal
                    title={error.title}
                    message={error.message}
                    errorFxn={errorHandler}
                />}
            <AddUserCard>
                <form onSubmit={addUserHandler}>
                    <Input
                        type={"text"}
                        id={"username"}
                        label={"Username"}
                        value={enteredUsername}
                        changeHandler={userNameHandler}
                    />
                    <Input
                        type={"number"}
                        id={"age"}
                        label={"Age"}
                        value={enteredAge}
                        changeHandler={ageHandler}
                    />
                    <Button type={'submit'}>
                        Add User
                    </Button>
                </form>
            </AddUserCard>
        </div>
    );
}

export default AddUser;