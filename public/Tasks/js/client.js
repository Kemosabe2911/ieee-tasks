const name= document.getElementById('name');
const email=  document.getElementById('email');
const myForm= document.getElementById('myForm');

myForm.addEventListener(submit,function(e){
    e.preventDefault();
    fetchData;
});

function fetchData(){
    
    /*fetch("http://localhost:3000/Tasks/tasks1.html",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    .then((res)=> res.json())
    .then(data=>{
        console.log(data);
    });*/
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
}