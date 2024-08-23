import Main from "./src/components/Content"
import Header from "./src/components/Header"
import "./style.css"

const name = localStorage.getItem("name") || "flowers"



const header = document.querySelector("#header"),
      main = document.querySelector("#content"),
      alert = document.querySelector("#prew"),
      largeImg = document.querySelector("#large-img"),
      video = document.querySelector("#video"),
      btn = document.querySelector("#btn")

console.dir(video)



function headerCont() {
  header.innerHTML = Header()
  const form = document.querySelector("form"),
  filterr = document.querySelector("#filter")

  
  filterr.addEventListener("change" , () => {
    localStorage.setItem("type" , filterr.value)
  })

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = form["input"].value.trim()
    form.reset()
    localStorage.setItem("name" , value)

    if(localStorage.getItem("type") === 'photo'){
      getData(`https://pixabay.com/api/?key=34960420-9863e874162accfdc199effdb&q=${value}&image_type=photo`)
    }else{
      getData(`https://pixabay.com/api/videos/?key=34960420-9863e874162accfdc199effdb&q=${value}`)
    }
    
  })
  
}







function request(){
  window.addEventListener("DOMContentLoaded" , () => {
    const filterr = document.querySelector("#filter")


    if(localStorage.getItem("type") === 'photo'){
      filterr[0].selected = true
    }else{
      filterr[1].selected = true
    }
  })
  
}
request()




function mainCont(data) {
  main.innerHTML = Main()

  const cont = document.querySelector("#cont")

  function loadImg(item){
    const img = document.createElement("img")
    img.classList = "item"
    img.setAttribute("src" , `${item.previewURL}`)
    img.setAttribute("dataId", `${item.id}`)
    const id = img.getAttribute("dataId")
    img.addEventListener("click", () => {
      if (id !== item.id) {
        largeImg.setAttribute("src" , `${item.largeImageURL}`)
      }
      showAlert()
    })
    cont.appendChild(img)
  }

  function loadVid(item) {
    const vid = document.createElement("img")
    vid.classList = "item "
    vid.setAttribute("src" , `${item.videos.tiny.thumbnail}`)
    vid.setAttribute("dataId", `${item.id}`)
    const id = vid.getAttribute("dataId")
    vid.addEventListener("click", () => {
      if (id !== item.id) {
        video.setAttribute("src" , `${item.videos.large.url}`)
      }
      showAlert()
    })
    cont.appendChild(vid)
  }


  data.forEach((item) => {
    if(item.videos){
      loadVid(item)
    }else{
      loadImg(item)
    }
  })
  btn.addEventListener("click", () => {closeAlert()})
}





async function getData(url) {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data.hits)
    mainCont(data.hits)
  } catch (err) {
    console.log(err)
  }
}



headerCont()
if(localStorage.getItem("type") === 'video'){
  getData(`https://pixabay.com/api/videos/?key=34960420-9863e874162accfdc199effdb&q=${name}`)
  console.log("ifget")
}else{
  getData(`https://pixabay.com/api/?key=34960420-9863e874162accfdc199effdb&q=${name}&image_type=photo`)
  console.log("elsegert")
}



function showAlert(){
    alert.classList.remove("hidden")
    alert.classList.add("flex")
    if(localStorage.getItem("type") === 'photo'){
      video.classList.add("hidden")
      largeImg.classList.remove("hidden")
      largeImg.classList.add("flex")
    }else{
      video.autoplay = true
      largeImg.classList.add("hidden")
      video.classList.remove("hidden")
      video.classList.add("flex")
    }
}


function closeAlert(){
    alert.classList.remove("flex")
    alert.classList.add("hidden")
    video.pause()
}