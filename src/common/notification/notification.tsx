import React from 'react'
import { useGoogleLogin, hasGrantedAllScopesGoogle } from '@react-oauth/google'

function Notication() {
    const onSuccessesHandler = async (params) => {
        console.log("params: ", params);
        const hasAccess = checkAccess(params);
        console.log("hasAccess: ", hasAccess);
        const res = await fetch(
            "http://localhost:8000/api/google-calender/add-event",
            {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    code: params.code,
                    startTimestamp: Date.now() / 1000 + 86400,
                    frequencyInDays: 3,
                    rounds: 3,
                    description: "100 USDC thrift commitment",
                }),
            }
        );

        console.log("calender: ", res);
    };
    const onFailureHandler = (params) => {
        console.log("params: ", params);
    };

    const checkAccess = (tokenResponse) => {
        return hasGrantedAllScopesGoogle(
            tokenResponse,
            "openid",
            "email",
            "profile",
            "https://www.googleapis.com/auth/calendar"
        );
    };

    const googleLogin = useGoogleLogin({
        flow: "auth-code",
        scope: "openid email profile https://www.googleapis.com/auth/calendar",
        onSuccess: onSuccessesHandler,
        onError: onFailureHandler,
    });

    return (
        <div>
            <button onClick={() => {
                googleLogin()
            }}>
                ADD NOTIFICATION
            </button>

        </div>
    )
}

export default Notication