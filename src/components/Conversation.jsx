import React from "react"
import styled from "styled-components"
import { Container, Title } from "./contants"

const Wrapper1 = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 -5px;
  height: 150px;
  overflow: scroll;
  position: relative;
`
const Wrapper2 = styled.div``
const Ul = styled.ul`
  height: 100%;
  position: absolute;
  /* top: 0; */
  bottom: 0;
`
const Li = styled.li`
  list-style: none;
`

const Time = styled.span`
  font-weight: bold;
  font-size: 14px;
`
const Name = styled.span`
  font-weight: bold;
  font-size: 14px;
`
const Content = styled.span``
const Conversation = ({ data }) => {
  return (
    <Container>
      <Title>Conversation</Title>
      <Wrapper1>
        <Wrapper2>
          <Ul>
            {JSON.stringify(data) !== "{}" &&
              data.audioText.map((item) => (
                <Li>
                  <Time>[{item.voiceLayer.duration}]: </Time>
                  <Name>
                    {item.voiceLayer.voiceNumber === "1" ? "Agent" : "Customer"}
                  </Name>
                  <Content>: {item.voiceLayer.content}</Content>
                </Li>
              ))}
          </Ul>
        </Wrapper2>
      </Wrapper1>
    </Container>
  )
}

export default Conversation
