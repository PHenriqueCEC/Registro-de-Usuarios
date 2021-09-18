import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 60px;
    background: #000;
    border-bottom: 5px solid #ffd200;



    display: flex; //A partir daqui começam a se comportar como caixas

`

export const LeftSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    p {
        height: 40px;
        text-align: left;
        color: #FFF;
        font-size: 30px;
    } 


`

export const RightSide = styled.div`
    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    input {
        
        height: 25px;
        margin: 0 10px;
    }

    button {
        height: 30px;
        margin 0 10px;
    }

`