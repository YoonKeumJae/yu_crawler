import { useState } from "react";
import GoogleBtn from "../components/GoogleBtn";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Title,
  SignInForm,
  Input,
  SubmitBtn,
  Signup,
  Logo,
  LinkToSignup,
  AutoSigninCheckbox,
  CheckboxWrapper,
} from "../styles/routes/StyledSignin.js";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [autoSignin, setAutoSignin] = useState(false);

  const onChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const navigate = useNavigate();

  const onAutoSignin = (e) => {
    setAutoSignin(e.target.checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (autoSignin) {
      await setPersistence(auth, browserLocalPersistence).then(async () => {
        await signInWithEmailAndPassword(auth, email, password);
      });
      navigate("/");
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Wrapper>
      <Logo src="/Logo.svg" />
      <Title>로그인</Title>
      <SignInForm>
        <Input
          onChange={onChange}
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <Input
          onChange={onChange}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <CheckboxWrapper>
          <AutoSigninCheckbox type="checkbox" onChange={onAutoSignin} />
          자동로그인
        </CheckboxWrapper>
        <SubmitBtn type="submit" onClick={onSubmit}>
          로그인
        </SubmitBtn>
      </SignInForm>
      <GoogleBtn />
      <Signup>
        아직 계정이 없으신가요?{" "}
        <LinkToSignup to="/signup">회원가입 &rarr;</LinkToSignup>
      </Signup>
    </Wrapper>
  );
};

export default Signin;
