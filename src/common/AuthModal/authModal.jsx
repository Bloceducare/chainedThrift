import { Fragment } from "react";
import { useToasts } from "react-toast-notifications";
import useInput from "../../hooks/useInput";
import { validEmail,validUsername } from "../../utils/helpers";
import "./auth.scss";


export const AuthModal = ({ onClose,createAccountHandler }) => {
    const {
        value:email,
        valueChangeHandler:emailChangeHandler,
        isInvalid:emailErr,
        blurHandler:emailBlurHandler
    } =  useInput((value) => validEmail.test(value));

    const {
        value:username,
        valueChangeHandler:usernameChangeHandler,
        isInvalid:usernameErr,
        blurHandler:usernameBlurHandler
    } =  useInput((value) => validUsername.test(value));
    
    let {addToast} = useToasts()

        const emailError = emailErr? 'border-error' : 'border-input';
        const usernameError = usernameErr? 'border-error' : 'border-input'

    const submit = () =>{
        if(!email || !username)return addToast("missing fields!",{appearance:"error"})
        createAccountHandler(email, username)
        onClose()
    }

    return (
        <Fragment>
            <div className="my-8 mt-2 font-semibold text-black dark:text-white-1">
                Sign-in and start building your savings with ChainedThrift.
            </div>

            <div className="flex justify-center mb-4">
                <img src="/assets/thrift.png" alt="thrift-logo" />
            </div>
            <form>
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block mb-2 text-xs text-black dark:text-white-1"
                    >
                        Username
                    </label>
                    <input
                        onChange={usernameChangeHandler}
                        value={username}
                        onBlur={usernameBlurHandler}
                        type="text"
                        className={`w-full px-2 py-2 text-black dark:text-white ${usernameError} bg-transparent outline-none border rounded border-gray-10`}
                    />
                    {usernameErr && <p className="mt-1 text-red-500">username should be  8 characters and can contain alphanumeric characters</p>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-xs text-black dark:text-white">
                        Email Address
                    </label>
                    <input
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={email}
                        type="email"
                        className={`w-full px-2 py-2 text-black dark:text-white  ${emailError}  outline-none bg-transparent border rounded border-gray-10`}
                    />
                    {emailErr && <p className="mt-1 text-red-500">Wrong email format. format should be e.g example@gmail.com</p>}
                </div>
            </form>

            <div className="flex items-center my-4 space-x-2">
                <div>
                    <img src="/assets/fa.png" alt="icon" />
                </div>
                <div>
                    <p className="text-xs text-black dark:text-white-1">
                        Select your preferred username
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>
                    <img src="/assets/famark.png" alt="icon" />
                </div>
                <div>
                    <p className="text-xs text-black dark:text-white-1">
                        Input an e-mail address for purpose of setting
                        reminders.
                    </p>
                </div>
            </div>

            <p className="my-4 text-black  dark:text-white">
                By inputing your email address and connecting your wallet using
                ChainedThrift, you agree to{" "}
                <a
                    className="mr-1 text-base font-normal underline font-Poppins text-linear"
                    href="https://drive.google.com/file/d/1LH0tX4qrbQyagSFtEcDTrJIE7VqkpmHp/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    Terms of Service
                </a>
                and{" "}
                <a href="/privacy-policy" className="underline text-linear">
                    {" "}
                    Privacy Policy.
                </a>
            </p>

            <div className="flex justify-center space-x-2 item-center">
                <button
                    onClick={onClose}
                    className="w-full p-1 font-semibold text-black rounded-full  border-linear md:p-4 lg:p-4 before:bg-white-1 dark:before:bg-dark-1 dark:text-white-1"
                >
                    Cancel
                </button>
                <button onClick={submit} disabled={emailErr || usernameErr} className="w-full p-1 font-semibold text-white rounded-full bg-pallet-5 dark:text-white md:p-4 lg:p-4">
                    Create Account
                </button>
            </div>
        </Fragment>
    );
};
