import styled from 'styled-components'

export const FirstSectionContainer = styled.div`
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

::before{
    content: '';
    position:absolute;
    top:0;
    right:0;
    left:0;
    bottom:0;
    background: linear-gradient(180deg, #0000005c 0%, rgba(0,0,0,0.6) 100%),
                linear-gradient(180deg, #00000067 0%, transparent 100% );
    z-index:2;
}
`

export const FirstSectionBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`


export const FirstSectionContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display:flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export const FirstSectionH1 = styled.h1`
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
export const FirstSectionP = styled.p`
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
export const FirstBtnWrapper = styled.div`
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