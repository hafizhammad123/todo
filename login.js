let firstName = document.querySelector(".firstName")
let emial = document.querySelector(".emial")
let password = document.querySelector(".password")



function register(e) {
    e.preventDefault()

    if (!firstName.value || !emial.value || !password.value) {
        alert("enter all data")
    } else {
        let userObj = {
            userName: firstName.value,
            userEmail: emial.value,
            UserPassword: password.value
        }

        let userData = localStorage.getItem("todayUser")
        console.log(userData)   
        if (userData === null) {
            userData = [userObj]
        }else{
            userData = JSON.parse(userData)
            userData.push(userObj)
        }

        localStorage.setItem("todayUser",JSON.stringify(userData))

        alert("data register")

    }
}


