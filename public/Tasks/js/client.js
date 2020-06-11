const name= document.getElementById('name');
const email=  document.getElementById('email');
const myForm= document.getElementById('myForm');

myForm.addEventListener(submit,function(e){
    e.preventDefault();
    postData('http://localhost:3000/tasks/tasks1', { Name: name, Email : email })
    .then(data => {
      console.log(data); // JSON data parsed by `response.json()` call
    })
    .catch(err =>{
        console.error(err); //Console logging error
    });
});

/*function fetchData(){
    
    fetch("http://localhost:3000/Tasks/tasks1.html",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    .then((res)=> res.json())
    .then(data=>{
        console.log(data);
    });
    axios(
        {
            method: "POST",
            url: "http://localhost:3000/Tasks/tasks1.html",
            data: {
                Name: name,
                Email: email
            }
        }
    )
    .then(res => console.log(res))
    .catch(err => console.error(err));
}*/

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
