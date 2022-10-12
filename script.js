/*
function changeToInt(v) {
  let result = Number.parseInt(v);
  if (!result) {
    return 'Please! Provide a number'
  }
  return result
}
*/
/*

function makeWord(text) {
  try {
    let str = text.trim()
    let words = str.split(" ");
    return words
  }catch(err) {
   console.log( 'Please Provide a String ')
  }
}
let word = makeWord(60);

console.log(word)
*/
/*
const xhr= new XMLHttpRequest()

xhr.open('GET','https://jsonplaceholder.typicode.com/users')

xhr.onreadystatechange = function (e){
  if (xhr.readyState===4) {
    if(xhr.status === 200){
      let users = JSON.parse(xhr.response)
      console.log(users)
    }else {
    console.log(xhr.status)
    } 
  }
}

xhr.send()

*/
function getRequest (url, callback) {
  const xhr = new XMLHttpRequest
  xhr.open('GET',url)
  
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let response= JSON.parse(xhr.response)
        callback(null,response)
      } else {
        callback(xhr.status,null)
      }
    }
  }
  xhr.send()
}

getRequest('https://jsonplaceholder.typicode.com/users',(err,res) =>{
  if(err){
    console.log(err)
  }else{
    console.log(res)
    res.forEach(function (r) {
      alert(r.name)
    })
  }
} )

getRequest('https://jsonplaceholder.typicode.com/posts',(err,res) =>{
  if(err){
    console.log(err)
  }else{
    res.forEach(r => console.log( r.title) )
  }
} )