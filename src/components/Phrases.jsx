import React from "react"
import styled from "styled-components"
import { Container, Title } from "./contants"

const Wrapper = styled.div`
  margin: 0 -10px;
  height: calc(100% + 5px);
  overflow: scroll;
  display: flex;
  position: relative;
  justify-content: space-between;
`
const Wrapper1 = styled.div`
  flex: 1;
  margin: 0 5px;
`
const Wrapper2 = styled.div`
  height: calc(100% - 23px);
  border: 1px solid #ccc;
  padding: 0 5px;
  border-radius: 8px;
  overflow-y: scroll;
  position: relative;
  @media screen and (max-width: 576px) {
    padding: 5px;
    height: 100px;
  }
`
const Wrapper3 = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  right: 0;
  bottom: 0;
`
const Ul = styled.div``
const Li = styled.div``
const Phrases = ({ data }) => {
  console.log(data)
  return (
    <Container>
      <Wrapper>
        <Wrapper1>
          <Title>Agent Phrases</Title>
          <Wrapper2>
            <Wrapper3>
              <Ul>
                {JSON.stringify(data) !== "{}" &&
                  data.audioMatch.rules.map((item) =>
                    item.key.map((item2, index) => (
                      <Li key={index}>{item2.agent}</Li>
                    ))
                  )}
                {JSON.stringify(data) !== "{}" &&
                  data.audioMatch.rules.map((item) =>
                    item.key.map((item2, index) => (
                      <Li key={index}>{item2.agent}</Li>
                    ))
                  )}
              </Ul>
            </Wrapper3>
          </Wrapper2>
        </Wrapper1>
        <Wrapper1>
          <Title>Customer Phrases</Title>
          <Wrapper2>
            <Wrapper3>
              <Ul>
                {JSON.stringify(data) !== "{}" &&
                  data.audioMatch.rules.map((item) =>
                    item.key.map((item2, index) => (
                      <Li key={index}>{item2.customer}</Li>
                    ))
                  )}
                {JSON.stringify(data) !== "{}" &&
                  data.audioMatch.rules.map((item) =>
                    item.key.map((item2, index) => (
                      <Li key={index}>{item2.customer}</Li>
                    ))
                  )}
              </Ul>
            </Wrapper3>
          </Wrapper2>
        </Wrapper1>
      </Wrapper>
    </Container>
  )
}

export default Phrases
