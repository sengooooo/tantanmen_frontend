import Header from '../entities/AddSchedule/ui/Header'
import TitleSection from '../entities/AddSchedule/ui/TitleSection'
import HeadingTitle from '../entities/AddSchedule/ui/HeadingTitle'
import DietLog from '../entities/AddSchedule/ui/DietLog'
import InputCalorie from '../entities/AddSchedule/ui/InputCalorie'
import ActivityLog from '../entities/AddSchedule/ui/ActivityLog'
import { useEffect} from "react";
import { newScheduleState } from '../shared/state/AddSchedule'
import { useRecoilState, useRecoilValue } from "recoil";
import { useLocation} from "react-router-dom";
import { augustState, crntClickedDayState, crntClickedMonthState, crntClickedIndexOfSchedulesState } from '../shared/state/calendar'

function AddSchedule(){
    const [_, setNewSchedule] = useRecoilState(newScheduleState);
    const location = useLocation();

    const august = useRecoilValue(augustState);
    const crntClickedDay = useRecoilValue(crntClickedDayState);
    const crntClickedMonth = useRecoilValue(crntClickedMonthState);
    const crntClickedIndexOfSchedules = useRecoilValue(crntClickedIndexOfSchedulesState);
    
    useEffect(() => {
        const crntSchedule = august[crntClickedDay]?.[crntClickedIndexOfSchedules];

        if (crntSchedule) {
            if (location.state?.calorie) {
                setNewSchedule((prev) => ({
                    ...prev,
                    calorie: location.state?.calorie || prev.calorie
                }));
            }else{
                setNewSchedule(crntSchedule);
            }
            
        } else {
            setNewSchedule((prev) => ({
                ...prev,
                calorie: location.state?.calorie || prev.calorie
            }));
        }
        
    }, [crntClickedMonth, august, crntClickedDay, crntClickedIndexOfSchedules, location.state]);

    return(
    <>
    <Header />
    <TitleSection />
    <HeadingTitle />
    <DietLog />
    <InputCalorie />
    <ActivityLog />
    </>
    )
}

export default AddSchedule;