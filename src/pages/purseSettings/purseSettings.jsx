import { useGoogleLogin, hasGrantedAllScopesGoogle } from '@react-oauth/google'
import usePurse from "../../web3/hooks/usePurse";
import { useParams } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';





const PurseSettings = () => {
  const { id } = useParams();
  const {
    getPurseData,
  } = usePurse();

  const { addToast } = useToasts()
  const onSuccessesHandler = async (params) => {
    const purseData = await getPurseData(id);
    checkAccess(params);
    try {
      const res = await fetch(
        "https://chainedthrift-server.herokuapp.com/api/google-calender/add-event",
        // "http://localhost:8000/api/google-calender/add-event",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: params.code,
            startTimestamp: Number(purseData.timeCreated.toString()),
            frequencyInDays: Number((Number(purseData.time_interval.toString()) / 86400) - 1),
            rounds: Number(Number(purseData.max_member_num) - 1),
            description: "ChainThrift Payment Notification",
          }),
        }
      );
      addToast("Notication successfully added!", {
        appearance: "success",
      });

    } catch (error) {
      console.error(error, "notification error")
    }
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
    <div className="flex items-center mt-10">
      <p className="font-bold text-black dark:text-white">To Add Notification Sign in with:</p>
      <button
        className="p-0 m-0 text-black rounded-md"
        onClick={() => {
          googleLogin()
        }}
      >
        <img src="/assets/google_light.png" alt='google_light'></img>
      </button>

    </div>
  )
};

export default PurseSettings;
