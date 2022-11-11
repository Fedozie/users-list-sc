import React from "react";
import styled from "styled-components";
import Button from "./button";
import Card from "./card";

const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background: rgba(0, 0, 0, 0.75);
`;

const StyledModal = styled(Card)`
    position: fixed;
    top: 30vh;
    left: 10%;
    width: 80%;
    z-index: 100;
    overflow: hidden;
`;

const ModalHeader = styled.header`
    background: ${({ theme }) => theme.colors.mainPurple};
    padding: 1rem;

    & > h2{
        margin: 0;
        color: ${({ theme }) => theme.colors.white}
    }
`;

const ModalContent = styled.div`
    padding: 1rem;
`;

const ModalFooter = styled.footer`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
`;

const Modal = ({title, message, errorFxn}) => {
    return (
        <div>
            <Backdrop/>
            <StyledModal>
                <ModalHeader>
                    <h2>{title}</h2>
                </ModalHeader>
                <ModalContent>
                    <p>{message}</p>
                </ModalContent>
                <ModalFooter>
                    <Button onClick={errorFxn}>Go Back</Button>
                </ModalFooter>
            </StyledModal>
        </div>
    )
};

export default Modal;