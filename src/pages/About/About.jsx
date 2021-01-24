import React from 'react';
import styled from 'styled-components'

const AboutSection = styled.section`
  padding: 20px 70px;
`

const AboutTitle = styled.h1`
  text-align: left;
  font-size: 28px;
`

const AboutContent = styled.div`
  text-align: left;
`

export default function About() {
  return (
    <AboutSection>
      <AboutTitle>About</AboutTitle>
      <AboutContent>JAS0N HUANG</AboutContent>
    </AboutSection>
  );
}
