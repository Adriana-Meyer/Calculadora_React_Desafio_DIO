import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #c4c4c4;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #2a2b2a;
    width: 30%;
    min-height: 500px; 
    border-radius: 10px;
    box-shadow: 10px 10px 21px -4px rgba(0,0,0,0.75);
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-items: center;
    margin-top: 40px;   
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;    
`