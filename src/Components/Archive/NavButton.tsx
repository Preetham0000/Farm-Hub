import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const NavButton = styled.button`
  background-color: #111827;
  border: 1px solid transparent;
  border-radius: .75rem;
  box-sizing: border-box;
  color: #FFFFFF !important;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var",ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.9rem 1.8rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
  *{
    text-decoration: none;
    color: #fff;
  }
:hover {
    color: #fff;
    background-color: #119748;
  }
`

interface prop{
  Text: String;
  onClick: () => void;
  Add : string;
}

function Button({Text ,onClick , Add = '' }:prop) {
  return (
    <NavButton onClick={onClick}> 
    <Link to= {Add}>
        {Text}
    </Link>
    </NavButton>
  )
}

export default Button