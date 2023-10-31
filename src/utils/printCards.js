import { INIT_LESS_MAX_SCREEN, 
         INIT_MEDIUM_SCREEN, 
         INIT_MORE_MAX_SCREEN, 
         INIT_SMALL_SCREEN, 
         MAX_SCREEN, 
         MEDIUM_SCREEN, 
         SMALL_SCREEN, 
         STEP_MAX_SCREEN, 
         STEP_MEDIUM_SCREEN,
         STEP_SMALL_SCREEN } from "./constants.js";

function printCards() {
    const counter = { init: INIT_MORE_MAX_SCREEN, step: STEP_MAX_SCREEN }
    if (window.innerWidth < MAX_SCREEN) {
        counter.init = INIT_LESS_MAX_SCREEN
        counter.step = STEP_MEDIUM_SCREEN
    }
    if (window.innerWidth < MEDIUM_SCREEN) {
        counter.init = INIT_MEDIUM_SCREEN
        counter.step = STEP_SMALL_SCREEN
    }
    if (window.innerWidth < SMALL_SCREEN) {
        counter.init = INIT_SMALL_SCREEN
        counter.step = STEP_SMALL_SCREEN
    }
    return counter
}

export default printCards;