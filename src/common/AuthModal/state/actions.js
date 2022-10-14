import {OPEN, CLOSE,SAVE_AUTH} from "."

export const OPEN_AUTH_MODAL = () =>{
    return {
        type:OPEN
    }
}


export const CLOSE_AUTH_MODAL = () =>{
    return {
        type:CLOSE
    }
}



export const OPEN_SIGNIN_AUTH_MODAL = () =>{
    return {
        type:OPEN
    }
}


export const CLOSE_SIGNIN_AUTH_MODAL = () =>{
    return {
        type:CLOSE
    }
}


export const  SAVE_AUTH_DETAILS_TO_STORE = (payload) =>{
    console.log(payload)
return {
    type:SAVE_AUTH,
    payload
}
}