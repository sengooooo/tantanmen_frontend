import styled from "styled-components"
import ChoicesNonclickable from "../../../shared/components/choices_nonclickable/ChoicesNonclickable"
import { useRecoilValue } from "recoil"
import { newAllergyTypeState, newEatingHabitTypeState } from "../../../shared/state/DietRecommend"


function SelectedKeyword(){

    const newAllergyType = useRecoilValue(newAllergyTypeState)
    const newEatingHabitType = useRecoilValue(newEatingHabitTypeState)


    return(
        <MainLayout>
            <Title>선택한 키워드</Title>
            
                <ChoicesNonclickable
                allergies={newAllergyType}
                eatingHabits={newEatingHabitType}
                />
            
        </MainLayout>
    )
}

export default SelectedKeyword

const MainLayout = styled.div`
padding: 2rem;
background-color: white;
`

const Title = styled.div`
color: #262829;
font-family: "Noto Sans KR";
font-size: 2rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: 1.6rem
`