import React from "react";
import styled from "styled-components";
import { MEDIA_QUERY_S } from './constants/Breakpoints'

const FooterWrapper = styled.div`
  height: 38px;
  position: relative;
  bottom: -76px;
  width: 100%;
  box-shadow: 0px -10px 10px 10px #fff;
  background: #fff;
  z-index: 99;
  line-height: 30px;
  ${MEDIA_QUERY_S}{
    border-bottom: #aaadaf 8px solid;
  }
`;

const FooterBody = styled.footer`
  margin: auto;
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  align-items: left;
  line-height: 30px;
  align-items: center;
  ${MEDIA_QUERY_S} {
    padding: 0 10px;
  }
`;

const InfoSection = styled.div`
  display: flex;
`;

const FooterText = styled.p`
  line-height: 30px;
  font-size: 16px;
`;

const CCIcon = styled.img`
  margin: auto 5px;
  height: 20px;
  ${MEDIA_QUERY_S} {
    margin: auto 10px;
  }
`;

const SocialSection = styled.div`
  text-align: right;
`;

const SocialIcon = styled.img`
  display: inline-block;
  height: 28px;
  width: 28px;
  margin: 0 5px;
  ${MEDIA_QUERY_S} {
    margin: 0 15px;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterBody>
        <InfoSection>
          <FooterText>JAS0N HUANG</FooterText>
          <CCIcon src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cc.logo.circle.svg" />
          <FooterText>2021</FooterText>
        </InfoSection>
        <SocialSection>
          <a href="https://github.com/jas0nhuang">
            <SocialIcon src="./img/github.svg" />
          </a>
          <a href="mailto:jas0nhuang@tuta.io">
            <SocialIcon src="./img/email.svg" />
          </a>
        </SocialSection>
      </FooterBody>
    </FooterWrapper>
  );
}
