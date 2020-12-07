console.log("connected")
let userData = [
    ["Kaleb", "Burd", "Instructor", "JavaScript"],
    ["Froilan", "Miranda", "Instructor", "COBOL"],
    ["Froilanda", "Miran", "Student", "Java"],
    ["Val", "Fragier", "Instructor", "JavaScript"],
];

let button = document.getElementsByTagName("button")
let input = document.getElementsByTagName("input")
console.log(button)

button[0].addEventListener("click", () => {
    console.log("click")
    user1.fname = input[0].value
    user1.lname = input[1].value
    user1.age = input[2].value
    user1.password = input[3].value
    user1.confirmpassword = input[4].value
    validatePassword(user1.password, user1.confirmpassword)
    console.log(user1)
})


let user1 = {
    fname: "",
    lname: "",
    age: "",
    password: "",
    confirmpassword: ""
   
}    

function validatePassword(password, confirmpassword){
    if(password == confirmpassword){
        alert ("Form successfully completed")    
    } else{
        alert("Passwords do not match")
    }
}
    
