import { useSignature } from "../web3/hooks/useSignature";
import { useState } from "react";
import { SAVE_AUTH_DETAILS_TO_STORE } from "../common/AuthModal";
import { useSignInMessage, useSignUpMessage } from "../web3/constants";
import { useWeb3React } from "@web3-react/core";
import { useToasts } from "react-toast-notifications";
import { useDispatch } from "react-redux";

export const shortenAddress = (address) => {
    if (!address) return null;
    return `${address.substr(0, 6)}...${address.substr(
        address.length - 4,
        address.length
    )}`;
};

export const fallbackCopyToClipBoard = (text) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand("copy");
        return successful;
    } catch (err) {
        return false;
    } finally {
        document.body.removeChild(textArea);
    }
};

export const copyToClipBoard = (text) => {
    if (!navigator.clipboard) return fallbackCopyToClipBoard(text);
    return navigator.clipboard
        .writeText(text)
        .then(() => {
            return true;
        })
        .catch((err) => {
            console.error(err);
            return false;
        });
};

export const isValidAmountValue = (value) =>
    /^\d{1,5}$|(?=^.{1,5}$)^\d+\.\d{0,2}$/.test(value);

export const isPositiveInt = (value) => /^\+?([1-9]\d*)$/.test(value);

export const formatDate = (epochTime) => {
    const date = new Date(epochTime * 1000);
    const dateArray = date.toString().split(" ");

    return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
};

export const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const validUsername = new RegExp("^[A-Za-z][A-Za-z0-9_]{2,7}$");

export const baseUrl = "https://cors-chainthrift.herokuapp.com/https://chainedthrift-server.herokuapp.com/api/user/";


export const useAuthFunc = () => {
    const { sign } = useSignature();
    const { message } = useSignInMessage();
    const { signupmessage } = useSignUpMessage();
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(true);
    const { account } = useWeb3React();
    const { addToast } = useToasts();

    const dispatch = useDispatch();

    const createAccountHandler = async (email, username) => {
        let url = `${baseUrl}create-user`;
        setLoading(true);
        try {
            let signatureOutput = await sign(signupmessage);
            let resData = {
                signature: signatureOutput,
                message: signupmessage,
                userData: {
                    walletAddress: account,
                    email: email,
                    username: username.toLowerCase(),
                },
            };

            let res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(resData),
                headers: {
                    "Content-type": "application/json",
                },
            });
            let data = await res.json();
            if (res.status === 409) {
                setOpen(!open);
                setLoading(false);
                addToast(data?.error?.message, { appearance: "error" });
            } else if(res.status === 400){
                setOpen(!open);
                setLoading(false);
                console.log(data)
                addToast(data?.error?.message.message, { appearance: "error" });
            } else{
                setLoading(false);
                localStorage.setItem("token", data.token);
                addToast("account created successfull", {
                    appearance: "success",
                });
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
        // get username and password field
        // call signSignature and return signature
    };

    const signHandler = async () => {
        let url = `${baseUrl}get-user`;
        setLoading(true);
        try {
            let output = await sign(message);
            let resData = {
                signature: output,
                message: message,
                address: account,
            };

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(resData),
                headers: {
                    "Content-type": "application/json",
                },
            });
            let result = await response.json();
            const { token } = result;
            dispatch(SAVE_AUTH_DETAILS_TO_STORE(result));
            localStorage.setItem("token", token);
            setOpen(false);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    };

    return {
        createAccountHandler,
        loading,
        signHandler,
        open,
        setOpen,
        setLoading
    };
};
