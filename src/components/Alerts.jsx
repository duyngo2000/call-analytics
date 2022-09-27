import React from "react"
import styled from "styled-components"
import { Container, Title } from "./contants"
const Wrapper1 = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 0 -5px;
  height: calc(100% - 18px);
  overflow: scroll;
  position: relative;
  @media screen and (max-width: 576px) {
    padding: 5px;
    height: 100px;
  }
`
const Wrapper2 = styled.ul`
  position: absolute;
  top: 0;
  left: 10px;
  right: 0;
  bottom: 0;
`
const Item = styled.li`
  list-style: none;
`
const Name = styled.p``

const Alerts = ({ data }) => {
  return (
    <Container>
      <Title>Alerts</Title>
      <Wrapper1>
        <Wrapper2>
          {JSON.stringify(data) !== "{}" &&
            data.audioMatch.rules.map((item) => (
              <Item key={item.name}>
                <Name>{item.name}</Name>
              </Item>
            ))}
          <Item>
            <Name>item.name</Name>
          </Item>
        </Wrapper2>
      </Wrapper1>
    </Container>
  )
}

export default Alerts
