import React from "react";
import styled from "styled-components";

const LoadingText = styled.div`
  color: #cdcecf;
  font-size: 28px;
`;
const LoadingDots = styled.div`
  margin: auto;
  margin-top: 30px;
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #cdcecf;
  color: #cdcecf;
  animation: dotFlashing 1s infinite linear alternate;
  animation-delay: 0.5s;
  &::before,
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
  }
  &::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #cdcecf;
    color: #cdcecf;
    animation: dotFlashing 1s infinite linear alternate;
    animation-delay: 0s;
  }
  &::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #cdcecf;
    color: #cdcecf;
    animation: dotFlashing 1s infinite linear alternate;
    animation-delay: 1s;
  }

  @keyframes dotFlashing {
    0% {
      background-color: #cdcecf;
    }
    50%,
    100% {
      background-color: #fdfeff;
    }
  }
`;

export const Loading = () => {
  return (
    <>
      <LoadingText>Loading</LoadingText>
      <LoadingDots />
    </>
  );
};
