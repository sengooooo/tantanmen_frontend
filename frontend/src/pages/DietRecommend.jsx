import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import Header from "../entities/DietRecommend/ui/Header";
import Tabbar from "../entities/DietRecommend/ui/Tabbar";
import Allergy from "../entities/DietRecommend/ui/Allergy";
import EatingHabit from "../entities/DietRecommend/ui/EatingHabit";
import StandardButton from "../shared/components/StandardButton/StandardButton";
import { newAllergyTypeState, newEatingHabitTypeState } from "../shared/state/DietRecommend";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { dietIdState, recommendedResultState } from "../shared/state/DietRecommendResult";
import { sendPreferences } from "../entities/DietRecommend/api/api";

function DietRecommend() {
    const btnRef = useRef();
    const navigate = useNavigate();
    const [tab, setTab] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [newAllergyType, setNewAllergyType] = useRecoilState(newAllergyTypeState);
    // eslint-disable-next-line no-unused-vars
    const [newEatingHabitType, setNewEatingHabitType] = useRecoilState(newEatingHabitTypeState);
    // eslint-disable-next-line no-unused-vars
    const [_, setRecommendedResult] = useRecoilState(recommendedResultState)
    // eslint-disable-next-line no-unused-vars
    const [__, setDietId] = useRecoilState(dietIdState)
    const [isActivate, setIsActivate] = useState(false);

    function renderContent() {
        if (tab === 0) {
            return <Allergy />;
        } else if (tab === 1) {
            return <EatingHabit />;
        }
    }

    function handleButtonClick() {
        if (isActivate) {
            if(tab === 0){
                setTab(1)
            }else if(tab === 1){
                sendPreferences(newAllergyType, newEatingHabitType, setRecommendedResult, setDietId)
                navigate('/diet-recommend-result');    
            }
            
        }
    }

    useEffect(() => {
        if(tab === 0){
            if(newAllergyType.length !== 0){
            setIsActivate(true);    
            }else {
            setIsActivate(false);    
            }
        }else if(tab === 1){
            
        if (
            newAllergyType.length !== 0 &&
            newEatingHabitType.length !== 0
        ) {
            setIsActivate(true);
        } else {
            setIsActivate(false);
        }
        }
    }, [newAllergyType, newEatingHabitType]);

    return (
        <MainLayout>
            <Header />
            <Tabbar tab={tab} setTab={setTab} />
            {renderContent()}
            <ButtonWrap>
                <StandardButton
                    title={tab === 0 ? '식습관 탭으로 이동' : '식단 추천받기'}
                    color={isActivate ? 'white' : '#BABEC0'}
                    backgroundColor={isActivate ? 'black' : '#E3E5E7'}
                    onClick={handleButtonClick}
                    ref={btnRef}
                />
            </ButtonWrap>
        </MainLayout>
    );
}

export default DietRecommend;

const MainLayout = styled.div`
    height: 100%;
`;

const ButtonWrap = styled.div`
    position: fixed;
    bottom: 0;
    padding: 0 2rem 2rem 2rem;
    width: 430px;

    @media (max-width: 428px) {
        width: 95%;
        padding: 0;
        left: 2.5%;
        bottom: 2rem;
    }
`;
