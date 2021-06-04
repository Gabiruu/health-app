import styled from 'styled-components'


export const SecondSectionContainer = styled.div`
    background: #2e4e65;
    color:#fff;
    height: 700px;
    padding-top: 10px;
    /*

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

export const SecondSectionHeader = styled.div`
    text-align: center;
    font-size: 35px;
    margin-block-start: 0;
    margin-block-end: 0;
`

export const HeaderTitle = styled.h1`
    padding: 20px 0;
`
/* Container for flexboxes */

export const SecondSectionRow = styled.div`
    display: flex;
  @media (max-width: 600px) {
      flex-direction: column;
    }
`

/* Create three equal columns that sits next to each other */
export const SecondSectionColumn = styled.div`
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 50px;
`

export const SecondSectionDoubleColumn = styled.div`
    -webkit-flex: 2;
    -ms-flex: 2;
    flex: 2;
    padding: 0 50px;
`

export const Img = styled.img`
  width:100%;
`

export const AboutTitle = styled.h3`
    font-size: 40px;
`
export const AboutText = styled.p`
 font-size: 20px;
`