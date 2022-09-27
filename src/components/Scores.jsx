import React from "react"
import styled from "styled-components"
import { Container, Title } from "./contants"
const Wrapper1 = styled.div`
  margin: 0 -5px;
  height: calc(100% - 18px);
  border: 1px solid #ccc;
  border-radius: 8px;
`
const Wrapper2 = styled.table`
  margin: 5px;
  border-collapse: collapse;
  width: calc(100% - 10px);
  text-align: center;
`
const Item = styled.tr``
const Name = styled.th`
  border: 1px solid #ccc;
  background-color: #ccc;
`
const Content = styled.td`
  border: 1px solid #ccc;
`
const Scores = () => {
  return (
    <Container>
      <Title>Scores</Title>
      <Wrapper1>
        <Wrapper2>
          <Item>
            <Name>Name</Name>
            <Name>Value</Name>
          </Item>
          <Item>
            <Content>QA SCORRE</Content>
            <Content>25.0</Content>
          </Item>
        </Wrapper2>
      </Wrapper1>
    </Container>
  )
}

export default Scores
