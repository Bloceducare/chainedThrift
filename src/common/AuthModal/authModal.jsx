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
            <div className="mt-2 text-black dark:text-white-1 font-semibold my-8">
                Sign-in and start building your savings with ChainedThrift.
            </div>

            <div className="flex justify-center mb-4">
                <img src="/assets/thrift.png" alt="thrift-logo" />
            </div>
            <form>
                <div className="mb-4">
                    <label
                        htmlFor="username"
                        className="block text-xs text-black dark:text-white-1 mb-2"
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
                    {usernameErr && <p className="text-red-500 mt-1">username should be greater than 8 characters and can contain alphanumeric characters</p>}
                </div>

                <div className="mb-6">
                    <label className="block block text-xs text-black dark:text-white mb-2">
                        Email Address
                    </label>
                    <input
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        value={email}
                        type="email"
                        className={`w-full px-2 py-2 text-black dark:text-white  ${emailError}  outline-none bg-transparent border rounded border-gray-10`}
                    />
                    {emailErr && <p className="text-red-500 mt-1">Wrong email format. format should be e.g example@gmail.com</p>}
                </div>
            </form>

            <div className="flex items-center space-x-2 my-4">
                <div>
                    <img src="/assets/fa.png" alt="icon" />
                </div>
                <div>
                    <p className="text-black dark:text-white-1 text-xs">
                        Select your preferred username
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <div>
                    <img src="/assets/famark.png" alt="icon" />
                </div>
                <div>
                    <p className="text-black dark:text-white-1 text-xs">
                        Input an e-mail address for purpose of setting
                        reminders.
                    </p>
                </div>
            </div>

            <p className=" my-4 text-black dark:text-white ">
                By inputing your email address and connecting your wallet using
                ChainedThrift, you agree to{" "}
                <a
                    className="text-base font-normal font-Poppins mr-1 text-linear underline"
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

            <div className="flex item-center justify-center space-x-2">
                <button
                    onClick={onClose}
                    className=" font-semibold border-linear rounded-full p-1 md:p-4 lg:p-4 before:bg-white-1 dark:before:bg-dark-1 w-full text-black dark:text-white-1"
                >
                    Cancel
                </button>
                <button onClick={submit} disabled={emailErr || usernameErr} className="bg-pallet-5 font-semibold text-white dark:text-white w-full rounded-full p-1 md:p-4 lg:p-4">
                    Create Account
                </button>
            </div>
        </Fragment>
    );
};
