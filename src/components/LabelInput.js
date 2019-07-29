import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  margin-bottom: 16px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
`

const Input = styled.input`
  line-height: 22px;
  border-radius: 2px;
  border: 1px solid black;
  outline: none;
  padding: 2px 8px;
  font-size: 14px;
`

const LabelInput = ({ label, inputRef, value }) => (
  <Div>
    <Label>{label}</Label>
    <Input ref={inputRef} defaultValue={value}/>
  </Div>
)

export default LabelInput
