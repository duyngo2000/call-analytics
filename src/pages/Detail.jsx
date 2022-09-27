import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Alerts from "../components/Alerts"
import Audio from "../components/Audio"
import ContactDetails from "../components/ContactDetails"
import Conversation from "../components/Conversation"
import FILE1 from "../components/files/file1"
import Metadata from "../components/Metadata"
import Phrases from "../components/Phrases"
import Scores from "../components/Scores"

const Top = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr 4fr;
  grid-gap: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
`
const Bottom = styled.div``
const Detail = () => {
  const [data, setData] = useState({})

  const itemID = window.location.pathname.slice(1)
  useEffect(() => {
    fetch(`https://r2-call-analytics.devops-cloudflare.workers.dev/${itemID}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json)
      })
      .catch((err) => {
        const id = itemID.split("_")[1]
        getData(id)
        console.log("Request Failed", err)
      })
  }, [itemID])

  const getData = (key) => {
    // key là kiểu string
    // khúc dưới sẽ chuyển string sang number
    const indexedDB = window.indexedDB
    const request = indexedDB.open("cars", 1)
    request.onerror = function (e) {
      console.error("error", e)
    }
    request.onupgradeneeded = function () {
      const db = request.result
      db.createObjectStore("cars", { keyPath: "id" })
    }
    request.onsuccess = function () {
      const db = request.result
      const transaction = db.transaction("cars", "readwrite")
      const store = transaction.objectStore("cars")
      const getKeyData = store.getAll(key)
      getKeyData.onsuccess = function () {
        console.log("getKeyData.result", getKeyData.result[0].data)
        setData(getKeyData.result[0].data)
      }
      transaction.oncomplete = function () {
        db.close()
      }
    }
  }

  if (Object.keys(data).length !== 0) {
    console.log(data)
  }
  return (
    <>
      <Top>
        <ContactDetails data={data} />
        <Metadata data={data} />
        <Audio />
      </Top>
      <Top>
        <Scores />
        <Alerts data={data} />
        <Phrases data={data} />
      </Top>
      <Bottom>
        <Conversation data={data} />
      </Bottom>
    </>
  )
}

export default Detail
