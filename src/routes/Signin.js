import { useState } from "react";
import GoogleBtn from "../components/GoogleBtn";
import styled from "styled-components";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Title = styled.span``;
const SignInForm = styled.form``;
const Input = styled.input``;
const SubmitBtn = styled.button``;
const Signup = styled.span``;

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    if (e.name === "email") {
      setEmail(e.target.value);
    }
    if (e.name === "password") {
      setPassword(e.target.value);
    }
  };

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <Title>Sign in</Title>
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
        <SubmitBtn type="submit" onClick={onSubmit}>
          Submit
        </SubmitBtn>
      </SignInForm>
      <GoogleBtn />
      <Signup>
        Don't have an account? <Link to="/signup">Sign up &rarr;</Link>
      </Signup>
    </Wrapper>
  );
};

export default Signin;
