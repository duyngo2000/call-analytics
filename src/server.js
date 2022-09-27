export const backgroundSync = () => {
    navigator.serviceWorker.ready.then((swRegistration) =>
      swRegistration.sync.register("post-data").catch(err => console.log(err))
    )
}
export const sendData = (data)=>{
    fetch(
      "https://traveol.herokuapp.com/api/contact",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch(err=>{
        console.log(err)
        backgroundSync()
      })
  }