import styled from 'styled-components'

export const LastSectionContainer = styled.div`
    height: 800px;
    background-color: #48CAE4;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content:center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index:1;

`
export const LastSectionContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const LastSectionH1 = styled.h1`
    color:#CAF0F8;
    font-size:48px;
    text-align:center;
    @media screen and (max-width: 768px)  {
        font-size:40px;
    }
    @media screen and (max-width: 480px)  {
        font-size: 32px;
    }
`
export const LastSectionP = styled.p`
    margin-top:24px;
    color:#CAF0F8;
    font-size:24px;
    text-align: center;
    max-width:600px;

    @media screen and (max-width: 768px)  {
        font-size:24px;
    }
    @media screen and (max-width: 480px)  {
        font-size: 18px;
    }
`
export const LastBtnWrapper = styled.div`
    margin-top:32px;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    position: relative;
`


export const StoreBtn = styled.div`
    max-width:550px;
    height: 100%;
`

export const Img = styled.img`
    width:30%;
    margin: 0 0 0px 10px;
    padding-right:0;
    max-height: 50px;
`