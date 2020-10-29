import styled from "styled-components";

export const Body = styled.div `
    border: 3px solid #cc0000;
    width: 100%;
    height: 95vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: lightgray;
`

export const Add = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 16px;
`

export const Name = styled.h2 `
    font-size: 60px;
    font-weight: bold;
    color: #cc0000;
    margin: 0 0;
`

export const AddButton = styled.button `
    margin-top: 8px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #cc0000;
    }
`

export const ClearButton = styled.button `
    font-size: 18px;
    cursor: pointer;
    &:hover {
        color: white;
        background-color: #cc0000;
    }
`

export const Words = styled.div `
    font-size: 24px;
    margin-bottom: 16px;
`