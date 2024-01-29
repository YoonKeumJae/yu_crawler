import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const GoogleBtn = () => {
  const navigate = useNavigate();
  
  const onClickGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <button onClick={onClickGoogle}> continue with google </button>;
};

export default GoogleBtn;
