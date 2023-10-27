import { InitLessMaxScreen, 
         InitMediumScreen, 
         InitMoreMaxScreen, 
         InitSmallScreen, 
         MaxScreen, 
         MediumScreen, 
         SmallScreen, 
         StepMaxScreen, 
         StepMediumScreen, 
         StepSmallScreen 
        } from "./constants.js";

function printCards() {
    const counter = { init: InitMoreMaxScreen, step: StepMaxScreen }
    if (window.innerWidth < MaxScreen) {
        counter.init = InitLessMaxScreen
        counter.step = StepMediumScreen
    }
    if (window.innerWidth < MediumScreen) {
        counter.init = InitMediumScreen
        counter.step = StepSmallScreen
    }
    if (window.innerWidth < SmallScreen) {
        counter.init = InitSmallScreen
        counter.step = StepSmallScreen
    }
    return counter
}

export default printCards;