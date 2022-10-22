import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 500px;
    width: 80%;
    margin: 0 auto;

    p{
        width: 722px;
        height: 96px;
        font-size: 20px;
        line-height: 32px;
    }

    .contentHub{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .div{
        gap: 1rem;
    }

    .buttonFull{
    width: 184px;
    height: 52px;
    background: #0072D2;
    padding: 15px 27px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
    }

    .buttonOff{
    width: 115px;
    height: 52px;
    background: #131318;
    padding: 15px 27px;
    border: none;
    border-radius: 3px;
    font-weight: bold;
    border: 1px solid #ffffff;
    cursor: pointer;
    }

   

`

export const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;

`

export const Banner = styled.div`
    width: 184px;
    height: 267px;
    background-image: url(../.././capa.png);

`

export const ContentArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 135px;
    left: 510px;
    width: 600px;
    font-size: 24px;
    font-weight: bold;
    
`

export const ContentButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 212px;
    left: 510px;
    gap: 1.5rem;

`


export const ContainerMobile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 360px;
    height: 250px;
    background: #19191F;
    border-radius: 20px 20px 0px 0px;
  
    

`