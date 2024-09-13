import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import logo from '/LOGO.jpg';
import Button from "../Button";

const Container = styled.div`
  height: 95vh;
  display: flex;
  flex-direction: column;
  gap: 4vh;
  justify-content: center;
  align-items: center;
  h1 {
    // padding: 3rem;
    font-size: 3rem;
    // color: #04110B;
  }
  span {
    display: flex;
    gap: 2rem;
    margin: 3rem;
  }
`;

function SplashScreen() {
  const nav=useNavigate();
  return (
    <div>
      <Container>
        <img src={logo} alt="logo"></img>
        <h1>Farm Hub</h1>
        <span>
          <Button Text="Log In" onClick={()=>{nav("./login")}}/>
          <Button Text="Sign Up" onClick={()=>{nav("./signup")}}/>
          {/* <NavButton
            Text="Log In"
            Add="./login"
            onClick={() => {
              console.log("clicked");
            }}
          />
          <NavButton
            Text="Sign Up"
            Add="./signup"
            onClick={() => {
              console.log("clicked");
            }}
          /> */}
        </span>
      </Container>
    </div>
  );
}

export default SplashScreen;
