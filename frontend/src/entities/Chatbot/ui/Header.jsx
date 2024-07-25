import styled from "styled-components";
import back from "../../../assets/BackButton.svg";

function Header(){
    return(
    <Wrapper>
        <Back src={back}/>
        <Title>탄수발자국 챗봇</Title>
    </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 5.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    position: relative;
    background-color: #fff;
`

const Back = styled.img`
    width: 3.6rem;
    height: 3.6rem;
    position: absolute;
    left: 2rem;

`

const Title = styled.div`
color: var(--Gray8, #262829);
text-align: center;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`