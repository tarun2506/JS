document.getElementById('button').addEventListener('click', loadData);

function loadData(){
  //Create an XHR Object
  const xhr = new XMLHttpRequest();
  console.log("ReadyState", xhr.readyState);

  //OPEN
  xhr.open('GET', 'data.txt', true);
  console.log('ReadyState', xhr.readyState);

  //Optional - Used for spinners/loaders
  xhr.onprogress = function(){
    console.log('ReadyState', xhr.readyState)
  }


  xhr.onload = function(){
    console.log('ReadyState', xhr.readyState);
    document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    if(this.status === 200){
      console.log(this.responseText);
    }
  }
  // xhr.onreadystatechange = function(){
  //   if(this.status === 200 && this.readyState===4){
  //     console.log(this.responseText);
  //   }
  // }
  xhr.onerror = function(){
    console.log('Req Error..');
  }

  xhr.send();

  //ReadyState Values
  //0: rquest not initialized
  //1: server connection established
  //2: rquest received
  //3: processing req
  //4: request finsihed and response is ready


  // HTTP Statuses:
  //200: 'Ok'
  //403: 'Forbidden'
  //404: 'Not Found'
}