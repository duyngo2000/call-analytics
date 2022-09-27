import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Container } from "./contants"
import { Title } from "./contants"
const Item = styled.div``
const Name = styled.span`
  font-weight: 600;
`
const Wrapper1 = styled.div`
  margin: 0 -5px;
  height: calc(100% - 20px);
`
const Wrapper2 = styled.div`
  height: calc(100% - 6px);
  display: flex;
  justify-content: space-between;
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 8px;
`
const Menu = styled.div``
const Menu2 = styled.div`
  text-align: right;
`
const Value = styled.span``

const ContactDetails = ({ data }) => {
  console.log("data", data)
  const [item, setItem] = useState({})
  useEffect(() => {
    if (JSON.stringify(data) !== "{}") {
      console.log("abc", data.audioCredit)
      setItem(data)
    }
  }, [data])
  return (
    <Container>
      <Title>ContactDetails</Title>
      <Wrapper1>
        <Wrapper2>
          <Menu>
            <Item>
              <Name>ContactID: </Name>
              <Value>{data.audioID}</Value>
            </Item>
            <Item>
              <Name>CustomerID: </Name>
              <Value>
                {JSON.stringify(data) !== "{}" &&
                  data.audioCredit.agent.agentID}
              </Value>
            </Item>
            <Item>
              <Name>Agent: </Name>
              {
                <Value>
                  {JSON.stringify(data) !== "{}" &&
                    data.audioCredit.agent.agentID}
                </Value>
              }
            </Item>
            <Item>
              <Name>Contact Date: </Name>
              <Value>
                {JSON.stringify(data) !== "{}" && data.audioCredit.date}{" "}
                {JSON.stringify(data) !== "{}" && data.audioCredit.time_start}
              </Value>
            </Item>
          </Menu>
          <Menu2>
            <Item>
              <Name>Contact Type: </Name>
              <Value>
                {JSON.stringify(data) !== "{}" && data.audioCredit.type}
              </Value>
            </Item>
            <Item>
              <Name>Call Hold Duration: </Name>
              <Value>
                {JSON.stringify(data) !== "{}" &&
                  data.audioCredit.callHoldDration}
              </Value>
            </Item>
            <Item>
              <Name>Call Duration: </Name>
              <Value>
                {JSON.stringify(data) !== "{}" && data.audioCredit.callDuration}
              </Value>
            </Item>
          </Menu2>
        </Wrapper2>
      </Wrapper1>
    </Container>
  )
}

export default ContactDetails
