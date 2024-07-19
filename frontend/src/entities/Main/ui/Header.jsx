import styled from "styled-components";

import randomImage from '../../../assets/randomImage.png'

function Header(){
    return(
        <MainLayout>
            {/* 레이아웃 용 hidden 컴포넌트 */}
            <StyledLogin style={{
                visibility: 'hidden'
            }}>
                로그인
            </StyledLogin>

            <StyledLogo src={randomImage}/>

            <StyledLogin>
                로그인
            </StyledLogin>

        </MainLayout>
    )
}
export default Header;


const MainLayout = styled.div`
width:100%;
height: 6rem;
display: flex;
justify-content: space-between;
align-items: center;
padding:0 20px 0 20px
`

const StyledLogo = styled.img`
`

const StyledLogin = styled.div`
color: var(--Primary-color1, #EF6038);
text-align: right;
font-family: "Noto Sans KR";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`