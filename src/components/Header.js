import React from 'react'
import styled from 'styled-components'

import { ReactComponent as LogoSvg } from '../assets/logo.svg'
import DemoForm from './DemoForm';

const Div = styled.div`
  margin-bottom: 32px;
  display: flex;
  align-items: center;
`

const LogoDiv = styled.div`
  padding-right: 16px;
  margin-right: 16px;
  border-right: 1px solid black;
`

const Header = () => (
  <Div>
    <LogoDiv>
      <LogoSvg width={60} height={60}/>
    </LogoDiv>
    <DemoForm/>
  </Div>
)

export default Header
