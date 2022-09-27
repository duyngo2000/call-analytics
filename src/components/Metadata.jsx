import React from "react"
import styled from "styled-components"
import { Container, Title } from "./contants"
const Wrapper1 = styled.div`
  height: calc(100% - 20px);
  margin: 0 -5px;
  position: relative;
  @media screen and (max-width: 576px) {
    padding: 5px;
    height: 100px;
  }
`
const Wrapper2 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -5px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: scroll;
  padding: 5px;
`
const Menu = styled.table`
  border-collapse: collapse;
  width: 100%;
`
const Item = styled.tr``
const Name = styled.td`
  border: 1px solid #ccc;
`
const API = [
  {
    name: "AgentID",
    value: 266444441111111111,
  },
  {
    name: "AgentName",
    value: "my.nguyen.44",
  },
  {
    name: "Agent_Extension",
    value: 26644,
  },
  {
    name: "Agent_Hangup_Status",
    value: "False",
  },
  {
    name: "AgentID",
    value: 26644,
  },
  {
    name: "AgentName",
    value: "my.nguyen.44",
  },
  {
    name: "Agent_Extension",
    value: 26644,
  },
  {
    name: "Agent_Hangup_Status",
    value: "False",
  },
]
const Metadata = ({ data }) => {
  return (
    <Container>
      <Title>Metadata</Title>
      <Wrapper1>
        <Wrapper2>
          <Menu>
            <Item>
              <Name>AgentID</Name>
              <Name>
                {JSON.stringify(data) !== "{}" &&
                  data.audioCredit.agent.agentID}
              </Name>
            </Item>
            <Item>
              <Name>AgentName</Name>
              <Name>
                {JSON.stringify(data) !== "{}" && data.audioCredit.agent.name}
              </Name>
            </Item>
            <Item>
              <Name>Agent_Extension</Name>
              <Name>
                {JSON.stringify(data) !== "{}" && data.audioCredit.agent.cty}
              </Name>
            </Item>
            <Item>
              <Name>Agent_Hangup_Status</Name>
              <Name>
                {JSON.stringify(data) !== "{}" &&
                  data.audioCredit.agent.hotline}
              </Name>
            </Item>
            <Item>
              <Name>AgentID</Name>
              <Name>
                {JSON.stringify(data) !== "{}" &&
                  data.audioCredit.agent.hotline}
              </Name>
            </Item>
            <Item>
              <Name>AgentID</Name>
              <Name>
                {JSON.stringify(data) !== "{}" &&
                  data.audioCredit.agent.hotline}
              </Name>
            </Item>
            <Item>
              <Name>AgentID</Name>
              <Name>
                {JSON.stringify(data) !== "{}" &&
                  data.audioCredit.agent.hotline}
              </Name>
            </Item>
          </Menu>
        </Wrapper2>
      </Wrapper1>
    </Container>
  )
}

export default Metadata
