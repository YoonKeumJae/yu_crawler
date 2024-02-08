import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { Button, GoogleLogo } from "../styles/components/StyledGoogleBtn.js";

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

  return (
    <Button onClick={onClickGoogle}>
      <GoogleLogo src="/GoogleLogo.svg" />
      Google 로그인
    </Button>
  );
};

export default GoogleBtn;
