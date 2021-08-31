import Axios from "axios"
//import { ADD_ROLE_FAIL, ADD_ROLE_REQUEST, ADD_ROLE_SUCCESS, GET_ROLE_FAIL, GET_ROLE_REQUEST, GET_ROLE_SUCCESS, USER_REGISTRATION_FAIL, USER_REGISTRATION_REQUEST, USER_REGISTRATION_SUCCESS } from "./usermanagementconstants.js"


export const listRoles = () => async (dispatch, getState) => {

    dispatch({
        type: GET_ROLE_REQUEST
    })
    const { userSignin: { userInfo } } = getState()
    try {
        const { data } = await Axios.get("http://playzoneauth-env.eba-xjues2uq.us-east-1.elasticbeanstalk.com/api/auth/getroleByRoleId/1", {
            headers: { Authorization: `Bearer ${userInfo.accessToken}` }
        })
        dispatch({
            type: GET_ROLE_SUCCESS,
            payload: data
        })

    } catch (e) {
        dispatch({
            type: GET_ROLE_FAIL,
            payload: e.message
        })

    }

}

export const GET_ROLE_REQUEST = "GET_ROLE_REQUEST";
export const GET_ROLE_SUCCESS = "GET_ROLE_SUCCESS";
export const GET_ROLE_FAIL = "GET_ROLE_FAIL";

export const  ADD_ROLE_REQUEST = "ADD_ROLE_REQUEST";
export const  ADD_ROLE_SUCCESS = "ADD_ROLE_SUCCESS";
export const  ADD_ROLE_FAIL = "ADD_ROLE_FAIL";