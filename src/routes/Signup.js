import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

const Wrapper = styled.div``;
const Title = styled.span``;
const Form = styled.form``;
const Input = styled.input``;
const Signin = styled.span``;
const Error = styled.span`
  color: tomato;
`;

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.name === "name") {
      setName(e.target.value);
    }
    if (e.name === "email") {
      setEmail(e.target.value);
    }
    if (e.name === "password") {
      setPassword(e.target.value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) return;
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
      <Title>Sign up</Title>
      <Form onSubmit={onSubmit}>
        <Input
          type="text"
          placeholder="Name"
          name="name"
          onChange={onChange}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={onChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChange}
          required
        />
        <Input type="submit" value={isLoading ? "Loading..." : "Submit"} />
      </Form>
      {error !== "" ? null : <Error>{error}</Error>}
      <Signin>
        Already have an account? <Link to="/signin">Sign in &rarr;</Link>
      </Signin>
    </Wrapper>
  );
};

export default Signup;
