console.log("Welcome To Evox")
localStorage.setItem("update_status", true)
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

localStorage.setItem("emoji", "😂")
const BtnLog = document.getElementById("login");
BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("info").style.display = "block"
    document.getElementById("info").style.color = "white"
    document.getElementById("info").innerHTML = `Παρακαλω Περιμενετε..`
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    readTextFile("./03/users.json", function (text) {
        var user = JSON.parse(text)
        if(username === user.u1.username) {
                                    if(password === user.u1.password) {
                                        document.getElementById("info").style.display = "block"
                                        document.getElementById("info").style.color = "green"
                                        document.getElementById("info").innerHTML = `Καλωσορίσατε, ${username}!`
                                        localStorage.setItem("account", `{"password": "${password}"}`)
                                        localStorage.setItem("user", username)
                    document.location.href = "../index.html"
                                    } else {
                                        document.getElementById("info").style.display = "block"
                                        document.getElementById("info").style.color = "red"
                                        document.getElementById("info").innerHTML = `Ο κωδικος προσβασης για τον χρηστη ${username} ειναι λαθος.`
                                    }
        } else if(username === user.u2.email) {
                                    if(password === user.u2.password) {
                                        document.getElementById("info").style.display = "block"
                                        document.getElementById("info").style.color = "green"
                                        document.getElementById("info").innerHTML = `Καλωσορίσατε, ${username}!`
                                        localStorage.setItem("account", `{"password": "${password}"}`)
                                        localStorage.setItem("user", username)
                    document.location.href = "../index.html"
                                    } else {
                                        document.getElementById("info").style.display = "block"
                                        document.getElementById("info").style.color = "red"
                                        document.getElementById("info").innerHTML = `Ο κωδικος προσβασης για τον χρηστη ${username} ειναι λαθος.`
                                    }
        } else if(username === user.u3.email) {
                                    if(password === user.u3.password) {
                                        document.getElementById("info").style.display = "block"
                                        document.getElementById("info").style.color = "green"
                                        document.getElementById("info").innerHTML = `Καλωσορίσατε, ${username}!`
                                        localStorage.setItem("account", `{"password": "${password}"}`)
                                        localStorage.setItem("user", username)
                    document.location.href = "../index.html"
                                    } else {
                                        document.getElementById("info").style.display = "block"
                                        document.getElementById("info").style.color = "red"
                                        document.getElementById("info").innerHTML = `Ο κωδικος προσβασης για τον χρηστη ${username} ειναι λαθος.`
                                    }
        } else {
            document.getElementById("info").style.display = "block"
            document.getElementById("info").style.color = "red"
            document.getElementById("info").innerHTML = `Ο Χρηστης ${username} Δεν Υπαρχει.`
        }
    })
})
