import styled from 'styled-components'

export const FourthSectionContainer = styled.div`

background: #2c9cb3;
color:#fff;
/*
height: 800px;
display: flex;
position: relative;
justify-content:center;
align-items: center;
padding: 0 30px;
position: relative;
z-index:1;
*/
@media screen and (max-width:768px){
        padding:100px 0;
    }
`


export const InfoWrapper = styled.div`
    display:grid;
    z-index:1;
    height:860px;
    width:100%;
    max-width:1100px;
    margin-right: auto;
    margin-left: auto;
    padding:0 24px;
    justify-content: center;
 `

export const InfoRow = styled.div`
    display:grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items:center;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px){
      flex-direction: column;
    }
 `


export const Column1 = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col1;
    text-align: right;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding:0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width:540px;
    padding-top:0;
    padding-bottom:60px;
`
export const TopLine = styled.p`
    color:#03045e;
    font-size:16px;
    font-weight:700;
    letter-spacing:1.4px;
    text-transform: uppercase;
    margin-bottom:16px;
    text-align: right;
`

export const Heading = styled.h1`
    margin-bottom:24px;
    font-size:48px;
    line-height:1.1;
    font-weight:600;
    color: #f7f8fa;

    @media screen and (max-width: 480px){
        font-size:32px;
    }
`

export const SubTitle = styled.p`
    margin-bottom:35px;
    font-size:18px;
    line-height:24px;
    color: #fff;
    text-align: right;
`

export const ImgWrap = styled.div`
    max-width:550px;
    height: 100%;
`

export const Img = styled.img`
    width:80%;
    margin: 0 0 10px 0;
    padding-right:0;
`