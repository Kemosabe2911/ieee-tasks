const name= document.getElementById('name');
const email=  document.getElementById('email');
const myForm= document.getElementById('myForm');

myForm.addEventListener(submit,function(e){
    e.preventDefault();
    fetchData;
});

function fetchData(){
    
    fetch("http://localhost:3000/Tasks/tasks1.html",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}