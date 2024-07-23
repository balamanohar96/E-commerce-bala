//venkateswara rao
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// using styleComponets for css
const ButtonContainer = styled.span`
  position: fixed;
  bottom: 32px;
  right: 32px;
  align-items: center;
  height: 45px;
  width: 45px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  color: #ab99bd;
  animation: action 1s infinite alternate;
  background-color: #c5837c;
  border-radius: 4px;
  transition: opacity 0.4s, color ease-in-out 0.2s, ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
    isScrollButtonVisible ? "flex" : "none"};

  &:hover {
    opacity: 0.9;
  }
`;

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", checkScrollHeight);

    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ButtonContainer isScrollButtonVisible={showButton} onClick={scrollToTop}>
      <svg
        style={{ width: "20px" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path d="M246.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 109.3 361.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160zm160 352l-160-160c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L224 301.3 361.4 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3z" />
      </svg>
    </ButtonContainer>
  );
};

export default BackToTopButton;
