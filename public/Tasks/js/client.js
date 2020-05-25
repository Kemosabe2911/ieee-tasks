const name= document.getElementById('name');
const email=  document.getElementById('email');
const submit= document.getElementById('submit');

submit.addEventListener(submit,fetchData);

function fetchData(e){
    e.preventDefault();
    fetch("http://localhost:3000/Tasks/tasks1.html",{
        method: "POST"
    }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}