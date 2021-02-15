export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const ADD_MEM = "ADD_MEM";
export const RECALL_MEM = "RECALL_MEM";
export const DEL_MEM = "DEL_MEM";

export const addOne = () => {
    return ({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return ({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return ({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return ({type:CLEAR_DISPLAY});
}

export const addMem = () => {
    return ({type:ADD_MEM});
}

export const recallMem = () => {
    return ({type:RECALL_MEM});
}

export const deleteMem = () => {
    return ({type:DEL_MEM});
}