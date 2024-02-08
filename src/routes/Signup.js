import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Title,
  Form,
  Input,
  Signin,
  Error,
  Logo,
  SubmitBtn,
  LinkToSignin,
} from "../styles/routes/StyledSignup.js";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      console.log("error");
      return;
    }
    try {
      setIsLoading(true);
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(credentials.user, {
        displayName: name,
      });
      navigate("/");
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Wrapper>
      <Logo src="/Logo.svg" />
      <Title>회원가입</Title>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="이름"
          name="name"
          onChange={onChange}
          required
        />
        <Input
          type="email"
          placeholder="이메일"
          name="email"
          onChange={onChange}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={onChange}
          required
        />
        <SubmitBtn type="submit">
          {isLoading ? "로딩중..." : "회원가입"}
        </SubmitBtn>
      </Form>
      {error !== "" ? null : <Error>{error}</Error>}
      <Signin>
        이미 계정이 있으신가요?{" "}
        <LinkToSignin to="/signin">로그인 &rarr;</LinkToSignin>
      </Signin>
    </Wrapper>
  );
};

export default Signup;
