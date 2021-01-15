import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const FooterWrapper = styled.div`
  height: 38px;
  position: relative;
  bottom: -76px;
  width: 100%;
  border-bottom: #aaadaf 8px solid;
  box-shadow: 0px -10px 10px 10px #fff;
  background: #fff;
  z-index: 99;
  line-height: 30px;
`

const FooterBody = styled.footer`
  margin: auto;
  padding: 0 10px;
  display: flex;
  width: 100%;
  max-width: 1080px;
  align-items: left;
  line-height: 30px;
  align-items: center;
 `
 const FooterText = styled.p`
  line-height: 30px;
  font-size: 16px;
`

const CCIcon = styled.img`
  margin: auto 10px;
  height: 20px;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterBody>
      <FooterText>JAS0N HUANG</FooterText>
      <CCIcon src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Cc.logo.circle.svg" />
      <FooterText>2021</FooterText>
      </FooterBody>
    </FooterWrapper>
  )
}
