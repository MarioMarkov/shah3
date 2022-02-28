// // let username=document.getElementById("uname")
// // let pass = document.getElementById("psw")

let users =[
    {uname:"Halka1",pass:"1"},
    {uname:"Halka2",pass:"2"},
    {uname:"Halka3",pass:"3"}
    
]

let login = false;

function logSubmit(event) {

    console.log(users)
    let uname = event.target["uname"].value
    let upass = event.target["psw"].value
    document.getElementById("wrong").innerHTML = "";
    users.forEach(user => {
        console.log(uname + " "+ user.uname)
        if (user.uname == uname){
            if(user.pass == upass){
                login = true;
                window.location.href = 'loginpage.html';
                console.log("wellcome to shahIII")
                return;
            }else{
                document.getElementById("wrong").innerHTML = "Wrong Password!";
            }
        }else{
            document.getElementById("wrong").innerHTML = "Wrong Username!";
        }
    });
   



    event.preventDefault();
  }

const form = document.getElementById('form');

form.addEventListener('submit', logSubmit);