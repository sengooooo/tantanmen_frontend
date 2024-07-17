import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Modal from './Modal';

function CalendarCell({ schedule, index, today }) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleCellClick = () => {
        setIsModalVisible(true);
    };

    const handleModalClick = () => {
        setIsModalVisible(false);
    };

    useEffect(()=>{
        console.log('there')
        console.log(schedule)
    }, [])

    return (
        <>
            <StyledContainer onClick={handleCellClick}>

                <StyledDate isToday={today === index}>{index+1}</StyledDate>
                
                    {schedule.map((e,i)=>(
                        <StyledScheduleContainer>
                            {e}
                        </StyledScheduleContainer>
                    ))}
                
            </StyledContainer>

            {/* 모달 */}
            {isModalVisible && (
                <StyledModalContainer onClick={handleModalClick}>
                    <StyledModal onClick={(e) => e.stopPropagation()}>
                        <Modal setIsModalVisible={setIsModalVisible} index={index}/>
                    </StyledModal>
                </StyledModalContainer>
            )}
        </>
    );
}

export default CalendarCell;

const StyledContainer = styled.div`
    width: 100%;
    height: 78px;
    border-radius: 4px;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background: #DEDEDE;
    }
`;

const StyledDate = styled.div`
    background-color:${props => props.isToday ? '#FF6464' : 'transparent'};
    border-radius: 50%;
    padding: 2px;
    color: #000;
    text-align: center;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 16px;
`

const StyledScheduleContainer = styled.div`

    width: 100%;
    background-color: white;
    padding: 1px 2px;
    font-family: "Pretendard Variable";
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    overflow: hidden;
    white-space: nowrap;
    // text-overflow: ellipsis;
    max-width: 9ch;
    margin-bottom: 3px;
`

const StyledModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const StyledModal = styled.div`
    width: 380px;
    height: 454px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;