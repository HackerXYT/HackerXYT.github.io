//window.addEventListener('beforeunload', function (event) {
//	fetch(`${srv}/setOffline?username=${localStorage.getItem("t50-username")}`)
//		.then(response => {
//			if (!response.ok) {
//				throw new Error(`HTTP error! Status: ${response.status}`);
//			}
//			return response.text();
//		})
//		.then(offline => {
//			if (offline === "200") {
//				console.log("Offline Set!")
//			}
//		})
//		.catch(error => {
//			console.error('Set Offline error:', error);
//		});
//});


//var disabled = new Audio('./ui-sounds/qa_exit_old.mp3');
//var ac_complete = new Audio('./ui-sounds/action_complete.mp3');
//var qastart = new Audio('./ui-sounds/qa_start.mp3');
//var qaexit = new Audio('./ui-sounds/qa_exit.mp3');
//var notifications = new Audio('./ui-sounds/notifications.mp3');
//var notice_s = new Audio("./ui-sounds/notice.mp3")
sessionStorage.removeItem("place")

//let voxHTML = document.getElementById("VOXhtml").innerHTML
//let currentHTML = localStorage.getItem("voxHTML")
//if (currentHTML) {
//	if (currentHTML !== voxHTML) {
//		localStorage.setItem('voxHTML', voxHTML)
//		const message = "Updating.."
//		const oldhtml = document.getElementById("notification").innerHTML
//		var notification = document.getElementById('notification');
//		if (notification.className.includes("show")) {
//			notification.classList.remove('show');
//			setTimeout(function () {
//				document.getElementById("notification").innerHTML = message
//				notification.classList.add('show');
//				setTimeout(function () {
//					notification.classList.remove('show');
//				}, 2500);
//			}, 500)
//		} else {
//			document.getElementById("notification").innerHTML = message
//			notification.classList.add('show');
//			setTimeout(function () {
//				notification.classList.remove('show');
//			}, 2500);
//		}
//		setTimeout(function () {
//			document.getElementById("notification").innerHTML = oldhtml
//		}, 3000)
//	} else {
//		console.log("Updated To Latest")
//	}
//} else {
//	localStorage.setItem('voxHTML', voxHTML)
//	const message = "Updating.."
//	const oldhtml = document.getElementById("notification").innerHTML
//	var notification = document.getElementById('notification');
//	if (notification.className.includes("show")) {
//		notification.classList.remove('show');
//		setTimeout(function () {
//			document.getElementById("notification").innerHTML = message
//			notification.classList.add('show');
//			setTimeout(function () {
//				notification.classList.remove('show');
//			}, 2500);
//		}, 500)
//	} else {
//		document.getElementById("notification").innerHTML = message
//		notification.classList.add('show');
//		setTimeout(function () {
//			notification.classList.remove('show');
//		}, 2500);
//	}
//	setTimeout(function () {
//		document.getElementById("notification").innerHTML = oldhtml
//	}, 3000)
//}
var account_show = new Howl({
	src: ['./ui-sounds/qa_start_old.mp3'],
	volume: 1
});

var hero = new Howl({
	src: ['./ui-sounds/hero.mp3'],
	volume: 1
});
var error = new Howl({
	src: ['./ui-sounds/critical.mp3'],
	volume: 1
});
var disabled = new Howl({
	src: ['./ui-sounds/qa_exit_old.mp3'],
	volume: 1
});

var ac_complete = new Howl({
	src: ['./ui-sounds/action_complete.mp3'],
	volume: 1
});
var qastart = new Howl({
	src: ['./ui-sounds/qa_start.mp3'],
	volume: 1
});
var qaexit = new Howl({
	src: ['./ui-sounds/qa_exit.mp3'],
	volume: 1
});
var notificationsMP3 = new Howl({
	src: ['./ui-sounds/notifications.mp3'],
	volume: 1
});
var notif_out = new Howl({
	src: ['./ui-sounds/notif_out.mp3'],
	volume: 1
});
var notice_s = new Howl({
	src: ['./ui-sounds/notice.mp3'],
	volume: 1
});
var settings_open = new Howl({
	src: ['./ui-sounds/settings_open.mp3'],
	volume: 1
});
var sline_open = new Howl({
	src: ['./ui-sounds/sline_in.mp3'],
	volume: 1
});
var sline_close = new Howl({
	src: ['./ui-sounds/sline_out.mp3'],
	volume: 1
});
var sline_refresh = new Howl({
	src: ['./ui-sounds/sline_refresh.mp3'],
	volume: 1
});
var click = new Howl({
	src: ['./ui-sounds/click_button.mp3'],
	volume: 1
});
var click_social = new Howl({
	src: ['./ui-sounds/click_social.mp3'],
	volume: 1
});
var more_opt = new Howl({
	src: ['./ui-sounds/more_options.mp3'],
	volume: 1
});
var more_opt_c = new Howl({
	src: ['./ui-sounds/more_options_c.mp3'],
	volume: 1
});
var login_ok = new Howl({
	src: ['./ui-sounds/login.mp3'],
	volume: 1
});
sessionStorage.removeItem("more_options")

function fadeError(method) {
	var targetColor = "rgb(255, 99, 71)";
	let element;
	if (method == "1") {//EMAIL WRONG
		element = document.getElementById("email");
		element.style.backgroundColor = targetColor;
	} else if (method == "2") {//PASWORD WRONG
		element = document.getElementById("password");
		element.style.backgroundColor = targetColor;
	} else if (method == "3") {//BOTH WRONG
		element1 = document.getElementById("email");
		element1.style.backgroundColor = targetColor;
		element2 = document.getElementById("password");
		element2.style.backgroundColor = targetColor;
		setTimeout(function () {
			element1.style.backgroundColor = "rgba(252, 252, 252, 0.259)";
			element2.style.backgroundColor = "rgba(252, 252, 252, 0.259)";
		}, 2000)
		return;
	}
	setTimeout(function () {
		element.style.backgroundColor = "rgba(252, 252, 252, 0.259)";
	}, 2000)
}
let currScreen = "Home"
function switchNAV(element) {
	let place = element.innerHTML
	let goTo;
	//currScreen = sessionStorage.getItem("place")
	//if (!currScreen) {
	//	currScreen = "Home"
	//}
	if (place.includes("Home")) {
		console.log("Home")
		goTo = "Home"
	} else if (place.includes("Explore")) {
		console.log("Explore")
		goTo = "Explore"
	} else if (place.includes("Notifications")) {
		console.log("Notifications")
		goTo = "Notifications"
	} else if (place.includes("Profile")) {
		console.log("Profile")
		goTo = "Profile"

	}

	if (goTo !== "Home") {
		$("#appUP").fadeOut("fast", function () {
			document.getElementById("appUP").innerHTML = `Epsilon • ${goTo}`
			$("#appUP").fadeIn("fast")
		})

	} else {
		$("#appUP").fadeOut("fast", function () {
			document.getElementById("appUP").innerHTML = `Epsilon 5.0.0 [G] • Florida 0.1`
			$("#appUP").fadeIn("fast")
		})

	}



	if (goTo === currScreen) {
		if (currScreen === "Notifications" && !document.getElementById("notifications").classList.contains("active")) {
			switchNAV(element)
		}
		console.log("Cannot Go To The Same Place")

	} else {

		if (goTo === "Explore") {


			let secureline = document.getElementById("secureline")
			let notifications = document.getElementById("notifications")
			if (currScreen === "Home") {
				document.getElementById("gateway").classList.remove("active")
				secureline.classList.remove("secureline")
				secureline.classList.remove("slideL-R")
				secureline.classList.add("slideR-L")
				secureline.classList.add("active")
				//slide from right to left
			} else if (currScreen === "Notifications") {
				notif_out.play()
				notifications.classList.remove("active")
				secureline.classList.remove("slideR-L")
				//notifications.classList.add("vox")
				secureline.classList.remove("secureline")
				//secureline.classList.remove("slideL-R")
				secureline.classList.add("slideR-L")
				setTimeout(function () {

					secureline.classList.add("active")
				}, 250)
				//slide from left to right
			} else if (currScreen === "Profile") {
				document.getElementById("myAcc").classList.remove("active")
				secureline.classList.remove("secureline")
				secureline.classList.remove("slideR-L")
				secureline.classList.add("slideL-R")
				secureline.classList.add("active")
				//slide from left to right
			} else if (currScreen === "Profile") {
				return;
			}
			sline_open.play()
			setActive(goTo)
		} else if (goTo === "Notifications") {
			setActive(goTo)
			let notifications = document.getElementById("notifications")
			let secureline = document.getElementById("secureline")
			if (currScreen === "Home") {
				notifications.classList.remove("slideR-L");
				notifications.classList.add("slideL-R");
				document.getElementById("gateway").classList.remove("active")
				notifications.classList.add("active");
				notifications.style.opacity = "1"
				show_notif()

				//slide from right to left
			} else if (currScreen === "Explore") {
				sline_close.play()
				secureline.classList.remove("active")
				notifications.classList.remove("slideL-R")
				notifications.classList.add("slideR-L")
				notifications.classList.add("active")
				notifications.style.opacity = "1"
				show_notif()
				//slide from left to right
			} else if (currScreen === "Profile") {
				notifications.classList.remove("slideL-R");
				notifications.classList.add("slideR-L");
				document.getElementById("myAcc").classList.remove("active")
				notifications.classList.add("active");
				notifications.style.opacity = "1"
				show_notif()
				setTimeout(function () {
					notifications.classList.remove("slideR-L");
					notifications.classList.add("slideL-R");
				}, 800)

				//slide from left to right
			}
			notificationsMP3.play()

		} else if (goTo === "Home") {
			let notifications = document.getElementById("notifications")
			let secureline = document.getElementById("secureline")
			if (currScreen === "Notifications") {
				notif_out.play()
				//if (notifications.classList.contains("slideL-R")) {
				//	notifications.classList.remove("slideL-R")
				//	notifications.classList.add("slideR-L")
				//} else {
				//	notifications.classList.remove("slideR-L")
				//	notifications.classList.add("slideL-R")
				//}
				notifications.classList.remove("active")
				document.getElementById("gateway").classList.add("active")
				setActive(goTo)
				//slide from left to right
			} else if (currScreen === "Explore") {
				sline_close.play()
				if (secureline.classList.contains("slideL-R")) {
					secureline.classList.remove("slideL-R")
					secureline.classList.add("slideR-L")
				} else {
					secureline.classList.remove("slideR-L")
					secureline.classList.add("slideL-R")
				}
				secureline.classList.remove("active")

				document.getElementById("gateway").classList.add("active")
				setActive(goTo)
				//slide from left to right
			} else if (currScreen === "Profile") {
				document.getElementById("gateway").classList.add("active")
				document.getElementById("myAcc").classList.remove("active")

			}
			setActive(goTo)
		} else if (goTo === "Profile") {
			$("#nav-Notifications-text").fadeOut("fast")
			setActive("Profile")
			if (currScreen === "Home") {
				document.getElementById("gateway").classList.remove("active")
				document.getElementById("myAcc").classList.add("active")
				show_account()
			} else if (currScreen === "Notifications") {
				notif_out.play()
				document.getElementById("notifications").classList.remove("active")
				document.getElementById("myAcc").classList.add("active")
				show_account()
			} else if (currScreen === "Explore") {
				sline_close.play()
				document.getElementById("secureline").classList.remove("active")
				document.getElementById("myAcc").classList.add("active")
				show_account()
			} else {
				return;
			}

		}
		currScreen = goTo
		//sessionStorage.setItem("place", goTo)
	}
}

function setActive(option) {
	if (option === "2") {
		return;
		//currScreen = "Settings"
	}
	//Home, Chats, Notifications, Profile
	const homeH = `<svg fill="#ecececb3" width="30px" height="30px" viewBox="0 0 24 24" id="home-alt-1"
                    data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                    <path id="primary"
                        d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0,1.42,1.42l.29-.3V20.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,11.29Z"
                        ></path>
                </svg>
<span style="display: none">Home</span>`
	const chatsH = `<svg fill="#ecececb3" width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <title>explore-solid</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"/>
                      </g>
                      <g id="icons_Q2" data-name="icons Q2">
                        <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM34.7,14.7,28,28,14.7,34.7a1.1,1.1,0,0,1-1.4-1.4L20,20l13.3-6.7A1.1,1.1,0,0,1,34.7,14.7ZM24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"/>
                        <path d="M24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"/>
                      </g>
                    </g>
                  </svg>
<span style="display: none">Explore</span>`
	const notificationsH = `<i class="fas fa-bell"></i>
<span style="display: none">Notifications</span>`
	const home = document.getElementById("nav-Home")
	const chats = document.getElementById("nav-Chats")
	const notifications = document.getElementById("nav-Notifications")
	//const profile = document.getElementById("nav-Profile")
	notifications.innerHTML = notificationsH
	home.innerHTML = homeH
	chats.innerHTML = chatsH
	//notifications.innerHTML = notificationsH
	notifications.style.color = "#787676"
	home.classList.remove("active")
	chats.classList.remove("active")
	notifications.classList.remove("active")
	const profileD = document.getElementById("profile-pfp")
	profileD.classList.remove("active")


	if (option === "Home") {
		home.classList.add("active")
		$("#nav-Notifications-text").fadeOut("fast")
		home.innerHTML = `<svg fill="#1e1917" width="30px" height="30px" viewBox="0 0 24 24" id="home-alt-1"
                    data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                    <path id="primary"
                        d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0,1.42,1.42l.29-.3V20.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V12.41l.29.3a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,11.29Z"
                        style="fill: rgb(0, 0, 0);"></path>
                </svg>
	<span style="display: none">Home</span>`
	} else if (option === "Explore") {
		chats.classList.add("active")
		$("#nav-Notifications-text").fadeOut("fast")
		chats.innerHTML = `<svg fill="#1e1917" width="30px" height="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <title>explore-solid</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="invisible_box" data-name="invisible box">
                        <rect width="48" height="48" fill="none"/>
                      </g>
                      <g id="icons_Q2" data-name="icons Q2">
                        <path d="M24,2A22,22,0,1,0,46,24,21.9,21.9,0,0,0,24,2ZM34.7,14.7,28,28,14.7,34.7a1.1,1.1,0,0,1-1.4-1.4L20,20l13.3-6.7A1.1,1.1,0,0,1,34.7,14.7ZM24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"/>
                        <path d="M24,22a2,2,0,1,0,2,2A2,2,0,0,0,24,22Zm0,0a2,2,0,1,0,2,2A2,2,0,0,0,24,22Z"/>
                      </g>
                    </g>
                  </svg>
	<span style="display: none">Explore</span>`
	} else if (option === "Notifications") {
		notifications.classList.add("active")
		//$("#nav-Notifications-text").fadeIn("fast")
		notifications.style.color = "#1e1917"
		notifications.innerHTML = `${notifications.innerHTML}<span style="display: none">Notifications</span>`
	} else if (option === "Profile") {
		profileD.classList.add("active")
	}
}
function skip() {
	let Skipped;
	try {
		log("Skipped!", "red")
		try {
			clearInterval(Skipped)
		} catch (error) {
			//
			console.error(error)
		}
	} catch (error) {
		Skipped = setInterval(function () {
			log("Skipped!", "red")
		}, 800)
	}

	$("#container").fadeIn("slow", function () {
		$("#loading").fadeOut("slow")
		$("#loading-div-text").fadeOut("fast")
		$("#loading-text").fadeOut("slow")
	})
}

function custombg() {
	return;
	document.getElementById("st1").style.display = ""
	document.getElementById("st2").style.display = ""
	document.getElementById("st3").style.display = ""
	document.getElementById("st4").style.display = ""
	document.getElementById("current").style.display = "none"
	let blur = localStorage.getItem("cbg-blur")
	if (localStorage.getItem("cbg")) {
		let name = localStorage.getItem("cbg")
		document.getElementById("st1").classList.remove("active")
		if (name === "default_bg.png") {
			document.getElementById("bgname").innerHTML = "Default"
			document.getElementById("bgname").style.color = "#868686"
			document.getElementById("st1").classList.add("active")
			document.getElementById("background").innerHTML = `<div id="bgimaget" class="background" style="background: radial-gradient(circle, #400000, #000000)"></div>`
		} else if (name === "stock1.jpg") {
			document.getElementById("bgname").innerHTML = "Evox Epsilon"
			document.getElementById("bgname").style.color = "#fff"
			document.getElementById("st2").classList.add("active")
			if (blur) {
				document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock1.jpg');background-size: cover;background-position: center;filter: blur(${blur}px);"></div>`
			} else {
				document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock1.jpg');background-size: cover;background-position: center;filter: blur(10px);"></div>`
			}

		} else if (name === "stock2.jpg") {
			document.getElementById("bgname").innerHTML = "Sea"
			document.getElementById("bgname").style.color = "#fff"
			document.getElementById("st3").classList.add("active")
			//document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock2.jpg');background-size: cover;background-position: center;filter: blur(10px);"></div>`
			if (blur) {
				document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock2.jpg');background-size: cover;background-position: center;filter: blur(${blur}px);"></div>`
			} else {
				document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock2.jpg');background-size: cover;background-position: center;filter: blur(10px);"></div>`
			}
		} else if (name === "stock4.jpg") {
			document.getElementById("bgname").innerHTML = "Dark Desert"
			document.getElementById("bgname").style.color = "#fff"
			document.getElementById("st4").classList.add("active")
			//document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock4.jpg');background-size: cover;background-position: center;filter: blur(10px);"></div>`
			if (blur) {
				document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock4.jpg');background-size: cover;background-position: center;filter: blur(${blur}px);"></div>`
			} else {
				document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('./bgs/stock4.jpg');background-size: cover;background-position: center;filter: blur(10px);"></div>`
			}
		} else if (name.includes("#")) {
			document.getElementById("st1").classList.add("active")
			document.getElementById("bgname").innerHTML = "Custom Color"
			document.getElementById("bgname").style.color = "#fff"
			document.getElementById("background").innerHTML = `<div  id="bgimaget" class="background" id="bgimaget" style="background: radial-gradient(circle, ${name}, #000000)"></div>`
		} else {
			document.getElementById("bgname").innerHTML = `${localStorage.getItem("t50-username")}'s custom`
			document.getElementById("bgname").style.color = "#eae1a5"
			//document.getElementById("background").innerHTML = `<div class="background" style="background-image: url('${name}');background-size: cover;background-position: center;filter: blur(10px);"></div>`
			document.getElementById("current").innerHTML = `<img class="active" id="st5" onclick="addbg(this)" src="${name}">`
			document.getElementById("current").style.display = ""
			if (blur) {
				document.getElementById("background").innerHTML = `<div id="bgimaget" class="background" style="filter: blur(${blur}px);background-image: url('${name}');background-size: cover;background-position: center;"></div>`
			} else {
				document.getElementById("background").innerHTML = `<div id="bgimaget" class="background" style="filter: blur(10px);background-image: url('${name}');background-size: cover;background-position: center;"></div>`
			}
			//base64
		}

	} else {
		//No Custom BG
	}

	try {
		if (document.getElementById("st5").classList.contains("active") && document.getElementById("st1").classList.contains("active")) {
			document.getElementById("st1").style.display = "none"
		} else if (document.getElementById("st5").classList.contains("active") && document.getElementById("st2").classList.contains("active")) {
			document.getElementById("st2").style.display = "none"
		} else if (document.getElementById("st5").classList.contains("active") && document.getElementById("st3").classList.contains("active")) {
			document.getElementById("st3").style.display = "none"
		} else if (document.getElementById("st5").classList.contains("active") && document.getElementById("st4").classList.contains("active")) {
			document.getElementById("st4").style.display = "none"
		}
	} catch (error) {
		console.log("Couldn't Customize Custom BG Displays. Ignoring")
	}

}

let whichOneActive = null
let timeActive = 0
let activeInterval;

function load(app, isCustom, dir) {
	// Retrieve ownership information from localStorage
	let notes = localStorage.getItem("notes-owned");
	let images = localStorage.getItem("images-owned");
	let chatvia = localStorage.getItem("chatvia-owned");
	let username = localStorage.getItem("t50-username");

	sessionStorage.removeItem("extRun");

	// Ensure that the username is available
	if (!username) {
		console.error("Username not found in localStorage.");
		createLocalNotification("Error!", "Username not found.");
		return;
	}

	// App configuration
	const appConfig = {
		notes: { owned: notes === "true", path: "./Notes/" },
		images: { owned: images === "true", path: "./image gallery/" },
		chatvia: { owned: chatvia === "true", path: "./customize/" },
		transports: { owned: username === "papostol", path: "./gmp/gmaps.html" },
		emails: { owned: true, path: "./mails/" },
		tasco: { owned: true, path: "../tasco/" },
		secureline: { owned: true, path: "./secureline/" },
		dc: { owned: true, path: "../DC/" },
		Home: { owned: username === "papostol", path: "./Home/" },
		OASA: { owned: username === "papostol", path: "./oasa/" },
		deluxe: { owned: username === "papostol", path: "../tascoNotes/" }
	};

	// Handle the case where the app is not in the configuration
	if (appConfig[app]) {
		if (appConfig[app].owned) {
			sessionStorage.setItem("EmitApp", app === "images" ? "images" : "evox");

			// Special handling for 'images' app
			if (app === "images" && localStorage.getItem("t50-autologin") === "true") {
				localStorage.setItem("img-app-username", username);
				localStorage.setItem("rem-email", localStorage.getItem("t50-email"));
				localStorage.setItem("img-app-email", localStorage.getItem("t50-email"));
			}

			launchAppN(appConfig[app].path);
		} else {
			log("App Not Owned!", "red");
			createLocalNotification("Error!", `App '${app}' is not owned by ${username}`);
		}
	} else if (isCustom && dir) {
		// Handle custom directories
		sessionStorage.setItem("EmitApp", "evox");
		sessionStorage.removeItem("extRun");
		launchAppN(dir);
	} else {
		// Handle unknown apps or missing information
		console.warn(`'${app}' is not owned or doesn't exist! ${isCustom}, ${dir}`);
		if (!localStorage.getItem("customApps")) {
			createLocalNotification("An Error Occurred", `'${app}' is not owned or doesn't exist!`);
		}

	}

	// Handle app activity tracking
	whichOneActive = app;
	activeInterval = setInterval(() => {
		timeActive += 1;
	}, 1000);

	const appFrame = setInterval(() => {
		if (sessionStorage.getItem("extRun") === "back" ||
			(document.getElementById("launchApp").contentWindow.location.href.includes("PreloadApp.html") && timeActive > 2)) {

			console.log("Hiding App Frame User Returned To Gateway");
			clearInterval(activeInterval);
			activeInterval = null;

			let playTimeData = localStorage.getItem(`${whichOneActive}_timeUsed`);
			if (playTimeData) {
				const current = JSON.parse(playTimeData);
				const newPlayTime = Number(current.playtime) + Number(timeActive);
				console.log(`Total Play Time For ${whichOneActive} Is ${newPlayTime} sec`);
				localStorage.setItem(`${whichOneActive}_timeUsed`, JSON.stringify({ playtime: newPlayTime, app: current.app }));
			} else {
				console.log(`Fresh Play Time For ${whichOneActive} Is ${timeActive} sec`);
				localStorage.setItem(`${whichOneActive}_timeUsed`, JSON.stringify({ playtime: timeActive, app: whichOneActive }));
			}

			timeActive = 0;
			document.getElementById("launchApp").src = "PreloadApp.html";
			$("#launchApp").fadeOut("slow");

			$("#iframeContainer").fadeOut("slow", () => {
				document.getElementById("navbar").classList.add("active");
			});

			attachedApps.forEach(appName => {
				const playTime = howMuchPlay(appName);
				document.getElementById(`playTime-${appName}`).innerText = playTime;
				console.log("Setting new playTime for", appName, playTime);
			});

			sessionStorage.removeItem("extRun");
			clearInterval(appFrame);
		} else {
			console.log(`Current: ${document.getElementById("launchApp").contentWindow.location.href}`);
		}
	}, 100);
}

function launchAppN(app) {
	setTimeout(function () {
		document.getElementById("launchApp").src = app
	}, 1100)
	$("#iframeContainer").fadeIn("slow")
	$("#launchApp").fadeIn("slow", function () {
		document.getElementById("navbar").classList.remove("active")
		//if (localStorage.getItem("topNav") !== "disabled") {
		//	document.getElementById("apple-style").classList.remove("active")
		//}
	})
}

function buy(app) {
	//$("#settings").fadeOut("fast")
	console.log("Start Buying Process")
	$("#loading").fadeIn("slow")
	$("#popup").removeClass("active");
	$(`#buy${app}`).fadeIn("fast")
	$("#buy-products").addClass("active");
	document.getElementById('gateway').style.filter = 'blur(50px)'
	$("#buy-products").fadeIn("slow", function () {
		$("#loading").fadeOut("slow")
	})
	//Say that user doesnt own the app ask if he wants to buy it
}

function buy_back() {
	$("#bottom-logo").fadeOut("slow", function () {
		$("#settings").fadeIn("fast")
	})
	document.getElementById('gateway').style.filter = 'none'
	let pm_cc_sb = document.getElementById("cc-pm")//Payment method credit card standby
	let pm_pp_sb = document.getElementById("pp-pm")
	let pm_code_sb = document.getElementById("ccode-pm")
	pm_cc_sb.checked = false;
	pm_pp_sb.checked = false;
	pm_code_sb.checked = false;
	$("#buy-products").removeClass("active");
	$(`#buychatvia`).fadeOut("fast")
	$(`#buyimages`).fadeOut("fast")
	$(`#buynotes`).fadeOut("fast")
	$("#purchase").fadeOut("fast")
	$("#choose_pm").fadeIn("slow")
	$("#code_pm").fadeOut("slow")
}

function purchase(app) {
	if (app === "notes") {
		document.getElementById("purch-app-img").src = "EvoxNotes.png"
		document.getElementById("purch-app-text").innerHTML = "Evox Notes"
	} else if (app === "images") {
		document.getElementById("purch-app-img").src = "t50-img.png"
		document.getElementById("purch-app-text").innerHTML = "Evox Images"
	} else if (app === "chatvia") {
		document.getElementById("purch-app-img").src = "chatvia-img.png"
		document.getElementById("purch-app-text").innerHTML = "Chatvia"
	} else {
		log("A compatible app hasn't been defined")
	}
	$(`#buychatvia`).fadeOut("fast", function () {
		$(`#buyimages`).fadeOut("fast", function () {
			$(`#buynotes`).fadeOut("fast", function () {
				$("#purchase").fadeIn("fast")
				document.getElementById("cont-pur").innerHTML = `<button onclick="continue_purch('${app}')" class="transparent-button" style="width:100%">Continue</button>`
			})
		})
	})
}

function continue_purch(app) {
	let pm_cc = document.getElementById("cc-pm").checked
	let pm_pp = document.getElementById("pp-pm").checked
	let pm_code = document.getElementById("ccode-pm").checked
	if (pm_cc) {
		log("Got pm_cc", "green")
		alert("Credit Card Purchases Are Currently Not Available!")
	} else if (pm_pp) {
		log("Got pm_pp", "green")
		alert("PayPal Purchases Are Currently Not Available!")
	} else if (pm_code) {
		log("Got pm_code", "green")
		$("#choose_pm").fadeOut("slow", function () {
			$("#code_pm").fadeIn("slow")
			document.getElementById("cont-pur").innerHTML = `<button onclick="check_ccode('${app}')" class="transparent-button" style="width:100%">Confirm</button>`
		})
	} else {
		log("Operation Failed", "red")
	}
}

function check_ccode(app) {
	$("#loading").fadeIn("slow")
	let coupon = document.getElementById("coupon").value
	const url = `${srv}/accounts?applications=${app}&coupon=${coupon}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`;

	fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			const capitalizedApp = app.charAt(0).toUpperCase() + app.slice(1);
			if (data === `Registered To Evox ${capitalizedApp}`) {
				if (localStorage.getItem("t50-autologin") === "true") {
					console.log("Nothing")
					$("#loading").fadeOut("slow")
					$("#gateway").fadeOut("slow")
					$("#buy-products").fadeOut("slow", function () {
						document.getElementById("gateway").innerHTML = `<div class="animation-ctn container">
					<div class="icon icon--order-success svg">
						<svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
						  <g fill="none" stroke="#22AE73" stroke-width="2"> 
							<circle cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
							<circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
							<polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"/>   
						  </g> 
						</svg>
					  </div>
			  </div>`
						$("#gateway").fadeIn("slow", function () {
							document.getElementById('gateway').style.filter = 'none'
							setTimeout(function () {
								restart()
							}, 2000)
						})
					})


				} else {
					localStorage.setItem("t50-autologin", true)
					localStorage.setItem("remove-autolg", true)
					document.getElementById("auto-login").innerHTML = `Enabled`

					$("#loading").fadeOut("slow")
					$("#gateway").fadeOut("slow")
					$("#buy-products").fadeOut("slow", function () {
						document.getElementById("gateway").innerHTML = `<div class="animation-ctn container">
					<div class="icon icon--order-success svg">
						<svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
						  <g fill="none" stroke="#22AE73" stroke-width="2"> 
							<circle cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
							<circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
							<polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"/>   
						  </g> 
						</svg>
					  </div>
			  </div>`
						$("#gateway").fadeIn("slow", function () {
							document.getElementById('gateway').style.filter = 'none'
							setTimeout(function () {
								restart()
							}, 2000)
						})
					})
				}
			} else if (data === "Invalid Coupon") {
				$("#loading").fadeOut("slow")
				document.getElementById(`coupon`).classList.add('shake');
				setTimeout(function () {
					document.getElementById(`coupon`).classList.remove('shake');
				}, 500);
			} else if (data === `Evox ${capitalizedApp} is already owned by ${localStorage.getItem("t50-username")}`) {
				$("#loading").fadeOut("slow")
				document.getElementById(`coupon`).classList.add('shake');
				setTimeout(function () {
					document.getElementById(`coupon`).classList.remove('shake');
				}, 500);
				localStorage.setItem("t50-autologin", true)
				localStorage.setItem("remove-autolg", true)
				document.getElementById("auto-login").innerHTML = `Enabled`
				restart()
			} else if (data === "Application Does Not Exist") {
				log("Function Wasn't Used Correctly")
			}
		})
		.catch(error => {
			console.error('Fetch error:', error);
		});
}
function uielements() {

	let notes = localStorage.getItem("notes-owned")
	let images = localStorage.getItem("images-owned")
	let chatvia = localStorage.getItem("chatvia-owned")
	console.log(notes, images, chatvia)
	//$("#navbar").fadeIn("fast")
	document.getElementById("navbar").classList.add("active")
	//if (localStorage.getItem("topNav") !== "disabled") {
	//	document.getElementById("apple-style").classList.add("active")
	//}
	$("#navigator").fadeIn("slow")
	//$("#settings").fadeIn("slow")
	//$("#vox").fadeIn("slow")
	var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (width > 768) {
		//$("#pc").fadeIn("slow")
		console.log("This is PC")
	}

	//getFriends("pre")

	if (sessionStorage.getItem("pfp")) {
		document.getElementById("usr-img").src = sessionStorage.getItem("pfp")
	} else {
		document.getElementById("usr-img").src = "reloading-pfp.gif"
	}



	if (sessionStorage.getItem("pfp")) {
		document.getElementById("profile-pfp").src = sessionStorage.getItem("pfp")
	} else {
		sessionStorage.setItem("show_profile", "waiting")
	}
	//if (!localStorage.getItem("error_DC")) {
	//	$("#errors").fadeIn("slow") //DONT FADE IN, NO ERRORS
	//}

	//$("#profile").fadeIn("fast")

	document.getElementById("dots").innerHTML = `<div
	style="background-color: #33333370; border: none; color: #fff; padding: 15px; font-size: 16px; border-radius: 100%; cursor: pointer; display: flex; align-items: center; text-decoration: none; transition: background-color 0.3s ease;"><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="none">
	<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	<path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
	</svg></div>`
	//$("#dots").fadeIn("slow")

	pfp()
	loadPFPget(localStorage.getItem("t50-username"))
		.then(image => {
			if (document.getElementById("profile-pfp").src != "reloading-pfp.gif" && image != document.getElementById("usr-img").src) {
				// Open a connection to the IndexedDB database
				const request = indexedDB.open('EvoxSocial');

				request.onerror = function (event) {
					console.log("Error opening database");
				};

				request.onsuccess = function (event) {
					const db = event.target.result;

					// Access the "Profiles" object store
					const transaction = db.transaction(['Profiles'], 'readwrite');
					const objectStore = transaction.objectStore('Profiles');

					// Use the delete() method to remove the value with the specified key
					const deleteRequest = objectStore.delete(localStorage.getItem("t50-username"));

					deleteRequest.onsuccess = function (event) {
						console.log("Value selfuser deleted successfully");
						loadPFPget(localStorage.getItem("t50-username"))
							.then(image => {
								document.getElementById("usr-img").src = image
								document.getElementById("profile-pfp").src = image
							}).catch(error => {
								console.error("No local self image found:", error);
							});
					};

					deleteRequest.onerror = function (event) {
						console.log("Error deleting value selfuser");
					};
				};
			} else {
				document.getElementById("usr-img").src = image
				document.getElementById("profile-pfp").src = image
			}

		})
		.catch(error => {
			console.error("No local self image found:", error);
		});
	document.getElementById("usr-name").innerHTML = localStorage.getItem("t50-username")
	document.getElementById("usr-email").innerHTML = localStorage.getItem("t50-email")
	if (notes == "true") {
		console.log("Notes OK")
		document.getElementById("notes-own-ui-status").innerHTML = "Owned"
	} else if (notes == "false") {
		console.log("Notes Not")
		document.getElementById("notes-own-ui-status").innerHTML = `Not Owned <button onclick='buy("notes")' style='margin-left:15pxdisplay: inline-block;padding: 10px 20px;text-decoration: none;color: #fff;background-color: #333;border: none;border-radius: 4px;transition: background-color 0.3s ease;cursor: pointer;'>Buy</button>`
	}
	if (images == "true") {
		console.log("Images Ok")
		document.getElementById("images-own-ui-status").innerHTML = "Owned"
	} else if (images == "false") {
		console.log("Images Not")
		document.getElementById("images-own-ui-status").innerHTML = `Not Owned <button onclick='buy("images")' style='margin-left:15pxdisplay: inline-block;padding: 10px 20px;text-decoration: none;color: #fff;background-color: #333;border: none;border-radius: 4px;transition: background-color 0.3s ease;cursor: pointer;'>Buy</button>`
	}
	if (chatvia == "true") {
		console.log("Chatvia OK")
		document.getElementById("chatvia-own-ui-status").innerHTML = "Servers Offline"
	} else if (chatvia == "false") {
		console.log("Chatvia Not")
		document.getElementById("chatvia-own-ui-status").innerHTML = `Not Owned <button onclick='buy("chatvia")' style='margin-left:15pxdisplay: inline-block;padding: 10px 20px;text-decoration: none;color: #fff;background-color: #333;border: none;border-radius: 4px;transition: background-color 0.3s ease;cursor: pointer;'>Buy</button>`
	} else {
		console.log("ChatVia Ownership Error")
	}

	let autologin = localStorage.getItem("t50-autologin")
	if (autologin === "true") {
		document.getElementById("auto-login").innerHTML = `Enabled`
		document.getElementById("auto-login").style.color = ``
	} else if (autologin === "false") {
		document.getElementById("auto-login").innerHTML = `Disabled`
		document.getElementById("auto-login").style.color = `#eb2424`
	} else {
		document.getElementById("auto-login").innerHTML = `Disabled`
		document.getElementById("auto-login").style.color = `#eb2424`
	}

	fetch(`${srv}/setOnline?username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			if (data === "200") {
				fetch(`${srv}/getOnlineUsers`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						return response.text();
					})
					.then(users => {
						const onlineUsers = JSON.parse(users)
						console.log(onlineUsers)
					})
					.catch(error => {
						console.error('Fetch error:', error);
					});
			}

		})
		.catch(error => {
			console.error('Fetch error:', error);
		});

}


function settings() {

	if (sessionStorage.getItem("blockBottomLogout") === "true") {
		shake_me("logout_confirm")
		return;
	}


	//console.log(document.getElementById("popup").classList.contains("active"))
	if (document.getElementById("popup").classList.contains("active") === false) {
		//document.getElementById("navbar").classList.remove("active")
		setActive("2")
		//if (localStorage.getItem("topNav") !== "disabled") {
		//	document.getElementById("apple-style").classList.remove("active")
		//}
		return_to_options("reset")


		settings_open.play()
		//document.body.style.overflow = 'hidden';
		//document.getElementById("gateway").style.overflow = "hidden" removed from epsilon to prevent unable to scroll in gateway after opening settings 
		//navigator("settings_tonexus")
		$("#dots").fadeOut("slow")
		$("#profile").fadeOut("slow")
		if (document.getElementById("animatedButton_notif").style.display === "block") {
			
			var animatedButton = document.getElementById("animatedButton_notif");
			animatedButton.style.opacity = "0";
			animatedButton.style.transform = "translateY(20px)";
			setTimeout(function () {
				animatedButton.style.display = "none";
			}, 500); // Adjust the timing as needed
		}
		if (document.getElementById("animatedButton_chats").style.display === "block") {
			//document.getElementById("gateway").style.overflow = "hidden" removed from epsilon to prevent unable to scroll in gateway after opening settings 
			var animatedButton2 = document.getElementById("animatedButton_chats");
			animatedButton2.style.opacity = "0";
			animatedButton2.style.transform = "translateY(20px)";
			setTimeout(function () {
				animatedButton2.style.display = "none";
			}, 500); // Adjust the timing as needed
		}
		document.getElementById('notifications').style.filter = 'blur(20px)'
		document.getElementById('secureline').style.filter = 'blur(20px)'
		document.getElementById('myAcc').style.filter = 'blur(20px)'
		document.getElementById('gateway').style.filter = 'blur(20px)'; // Add a blur effect to the mainContent
		//$("#bottom-logo").fadeIn("slow")
		//$("#settings").fadeOut("slow")
		setTimeout(function () {
			$("#popup").addClass("active");
			//$("#popup").fadeIn("fast")
			//document.body.style.overflow = 'hidden';
		}, 100)
	} else if (document.getElementById("popup").classList.contains("active")) {
		//document.getElementById("navbar").classList.add("active")
		//if (localStorage.getItem("topNav") !== "disabled") {
		//	document.getElementById("apple-style").classList.add("active")
		//}


		//$("#navigator").fadeOut("fast")
		navigator("sett_def")
		try {
			goback.play()
		} catch (error) {
			console.error("error playing audio")
		}

		document.getElementById('notifications').style.filter = 'none'
		document.getElementById('secureline').style.filter = 'none'
		document.getElementById('myAcc').style.filter = 'none'
		document.getElementById('gateway').style.filter = 'none'; // Add a blur effect to the mainContent
		//$("#bottom-logo").fadeOut("slow", function () {
		//$("#settings").fadeIn("slow")
		//})

		setTimeout(function () {
			$("#popup").removeClass("active");
			if (sessionStorage.getItem("block_interactions") === "true") {
				//notice("Sorry. Servers Are Offline")
				return;
			}
			//$("#dots").fadeIn("slow")
			//$("#profile").fadeIn("slow")

			if (sessionStorage.getItem("more_options") === "active") {
				console.log("Showing more options")
				var animatedButton = document.getElementById("animatedButton_notif");
				animatedButton.style.display = "block";
				setTimeout(function () {
					animatedButton.style.opacity = "1";
					animatedButton.style.transform = "translateY(0)";
				}, 100);
				//animatedButton_chats
				var animatedButton2 = document.getElementById("animatedButton_chats");
				animatedButton2.style.display = "block";
				setTimeout(function () {
					animatedButton2.style.opacity = "1";
					animatedButton2.style.transform = "translateY(0)";
				}, 100);
			}
			//$("#popup").fadeOut("fast")
			//document.body.style.overflow = 'hidden';
		}, 100)
	}

}

function close_popup() {
	//$("#profile").fadeIn("fast")
	fetch(`${srv}/notifications?process=get&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			//return;
			//THIS IS TO CHECK FOR NEW NOTIFS
			console.log("Fetching Notifications")
			if (data === `{"notifications":[]}` || data === "No notifications!") {
				console.log("No Notifications")
				//Do nothing
			} else {
				const notifications = JSON.parse(data)
				const numNotifications = notifications.notifications.length;
				const localNotif = localStorage.getItem("notifications_seen")
				if (localNotif) {
					const notifNum = Number(localNotif)
					if (notifNum < numNotifications) {
						var animatedButton = document.getElementById("animatedButton_notif");
						//animatedButton.classList.add("fadeInOut")
						//animatedButton.style.display = "block";
						//animatedButton.innerHTML = `<svg id="notif" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="25px" height="25px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet">
            //<path stroke="#fff" stroke-width="2" class="clr-i-outline--badged clr-i-outline-path-1--badged" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/><path class="clr-i-outline--badged clr-i-outline-path-2--badged" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15a10.92,10.92,0,0,0-.16-1.79,7.44,7.44,0,0,1-2.24-.84,8.89,8.89,0,0,1,.4,2.64v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3H5.13a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15A8.8,8.8,0,0,1,18,6.31a8.61,8.61,0,0,1,4.76,1.44A7.49,7.49,0,0,1,22.5,6c0-.21,0-.42,0-.63a10.58,10.58,0,0,0-3.32-1V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83Z"/><circle class="clr-i-outline--badged clr-i-outline-path-1--badged clr-i-badge" cx="30" cy="6" r="5"/>
            //<rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
        //</svg>`
						//setTimeout(function () {
						//	animatedButton.style.opacity = "1";
						//	animatedButton.style.transform = "translateY(0)";
						//}, 100);
						createLocalNotification("Gateway", "You have new notifications")
					} else {
						console.log("No new notifications")
					}
				} else {
					console.log("No Local Value")
				}
			}


		})
		.catch(error => {
			console.error('Fetch error:', error);
		});
	settings()
}

function pfp(give) {
	return new Promise((resolve, reject) => {
		let user = localStorage.getItem("t50-username");
		if (user != null) {
			document.getElementById("usr-img-opt").src = "reloading-pfp.gif"
			const url = `${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${user}`;
			fetch(url)
				.then(response => response.text())
				.then(data => {
					if (data.indexOf("base64") === -1) {
						// If it doesn't contain "base64", add the prefix
						data = "data:image/jpeg;base64," + data;
					}
					document.getElementById("usr-img-opt").src = `${data}`
					document.getElementById("usr-img").src = `${data}`;
					document.getElementById("profile-pfp").src = `${data}`
					if (sessionStorage.getItem("show_profile") === "waiting") {//pfp shit
						//$("#profile").fadeIn("slow")
					}
					if (give === "giveback") {
						//profilesLocal("self", data)
						resolve(data);
					}
					try {
						sessionStorage.setItem("pfp", data);
					} catch (error) {
						console.error("Couldn't add PFP to sessionStorage")
					}

				})
				.catch(error => {
					console.error(error);
					reject(error);
				});
		} else {
			reject("User not found");
		}
	});
}

function auto_login() {
	let autologin = localStorage.getItem("t50-autologin")
	if (autologin === "true") {
		localStorage.setItem("t50-autologin", false)
		document.getElementById("auto-login").style.color = `#eb2424`
		document.getElementById("auto-login").innerHTML = `Disabled`
	} else {
		localStorage.setItem("t50-autologin", true)
		document.getElementById("auto-login").innerHTML = `Enabled`
		document.getElementById("auto-login").style.color = ``
	}
}

function restart() {
	$("#popup").removeClass("active");
	$("#settings").fadeOut("fast")
	$("#gateway").fadeOut("fast", function () {
		document.getElementById("navbar").classList.remove("active")
		//document.getElementById("apple-style").classList.remove("active")
		//$("#bottom-logo").fadeOut("fast", function () {
		setTimeout(function () {
			window.location.reload()
		}, 250)

		//})
	})

}

function logoff() {
	console.log("Will run");
	$("#stuck").fadeIn("fast");
	FloridaDelete()
	$("#popup").removeClass("active");
	//$("#navigator").fadeOut("fast", function () {
	sessionStorage.clear();
	$("#gateway").fadeOut("fast", function () {
		localStorage.clear();
		setTimeout(function () {
			window.location.reload();
		}, 250);
	});
	//});

	//var keysToRemove = ['t50pswd', 't50-email', 't50-autologin', 't50-username', 'notes-owned', 'images-owned', 'chatvia-owned'];
	//keysToRemove.forEach(function (key) {
	//	localStorage.removeItem(key);
	//});
	//var keysToRem = ['skipped', 'loaded', 'loggedinpswd', 'loggedin'];
	//keysToRem.forEach(function (key) {
	//	sessionStorage.removeItem(key);
	//});

}

function fix() {
	alert("This function will fix any local errors created by beta builds. All local data will be deleted!")
	localStorage.clear()
	sessionStorage.clear()
	window.location.reload()
}

function shake_me(what) {
	document.getElementById(`${what}`).classList.add('shake');
	setTimeout(function () {
		document.getElementById(`${what}`).classList.remove('shake');
	}, 500);
}
function mergeOldIPS() {
	$("#mergeOldIPS").fadeOut("fast")
	createLocalNotification('Merge Has Started', "You will be notified when everything is complete.")
	fetch(`${srv}/authip?method=mergeOldDb&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(mergeIP => {
			if (mergeIP === 'Complete') {
				if (document.getElementById("authips").style.display === "none") {
					createLocalNotification('Merge Complete', "Return To Logged In & IP Adresses to see changes.")
				} else {
					createLocalNotification('Merge Complete', "Now loading the new ip adresses.")
					show_authip()
				}

				//
			} else {
				console.error("Merge Failed", mergeIP)
				createLocalNotification('Merge Failed', mergeIP)
			}
		}).catch(error => {
			console.log("Ignoring optional authip function [merge error]")
		})
}
function show_authip() {

	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Cannot get external IP adresses while offline!')
		var ipv4List = document.getElementById("ipv4-list");
		ipv4List.innerHTML = ""
		var anchor = document.createElement("a");
		anchor.setAttribute("href", "#");
		anchor.setAttribute("style", "height: 50%");
		anchor.classList.add("apple-button");
		anchor.style.backgroundColor = "grey"
		anchor.innerHTML = `<img src="error.svg">
				${localStorage.getItem("IPV4")}`;
		ipv4List.appendChild(anchor);
		console.log("No Values!")
		//return;
	} else {
		//ipv4-list
		var ipv4List = document.getElementById("ipv4-list");
		ipv4List.innerHTML = `<div class="loading loading--circle" id="load-notifications" title="Loading">
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
			y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
			<path fill="#fff"
				d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
				<animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 25 25"
					to="360 25 25" dur="0.6s" repeatCount="indefinite" />
			</path>
		</svg>
	</div>`
		fetch(`${srv}/authip?method=Eread&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(data => {
				//console.log(data)
				fetch(`${srv}/authip?method=read&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						return response.text();
					})
					.then(mergeIP => {
						fetch(`${srv}/authip?method=mergeComplete&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
							.then(response => {
								if (!response.ok) {
									throw new Error(`HTTP error! Status: ${response.status}`);
								}
								return response.text();
							})
							.then(complete => {
								if (complete !== "Yes") {
									$("#mergeOldIPS").fadeIn("fast")
								}
							}).catch(error => {
								console.log("Ignoring optional authip function [merge error]")
							})
					}).catch(error => {
						console.log("Ignoring optional authip function [merge error]")
					})
				var ipAddressesS = JSON.parse(data);
				var ipAddresses = ipAddressesS;
				console.log(ipAddresses)
				if (data === "[]") {
					var ipv4List = document.getElementById("ipv4-list");
					ipv4List.innerHTML = ""
					var anchor = document.createElement("a");
					anchor.setAttribute("href", "#");
					anchor.setAttribute("style", "height: 50%");
					anchor.classList.add("apple-button");
					anchor.style.backgroundColor = "red"
					anchor.innerHTML = `<img src="error.svg">
		There are no IP adresses saved!<br>Try reloading Gateway.`;
					ipv4List.appendChild(anchor);
					console.log("No Values!")
					return;
				}

				// Get the element with id "ipv4-list"
				var ipv4List = document.getElementById("ipv4-list");
				ipv4List.innerHTML = ""
				// Loop through each IP address
				ipAddresses.adresses.forEach(function (eachIP) {
					console.log(eachIP)
					if (eachIP.ip === localStorage.getItem("IPV4")) {
						var anchor = document.createElement("a");
						anchor.setAttribute("href", "#");
						anchor.setAttribute("style", "height: 50%");
						anchor.classList.add("apple-button-withicon");
						anchor.classList.add("truncated-text");
						anchor.style.backgroundColor = "#3879e0"
						anchor.innerHTML = `<img style="width: auto; height: 30px;margin-right: 10px;border-radius: 7px;" src="https://flagsapi.com/${eachIP.country}/flat/64.png"></img>${eachIP.ip}`;
						anchor.onclick = function () {
							let json = {
								"innerHTML": eachIP
							}
							removeIP(json);
						};
						ipv4List.appendChild(anchor);
						return;
					}
					if (eachIP.ip === "1") {
						return;
					}
					if (eachIP.ip === "null") {
						var anchor = document.createElement("a");
						anchor.setAttribute("href", "#");
						anchor.setAttribute("style", "height: 50%");
						anchor.classList.add("apple-button");
						anchor.style.backgroundColor = "red"
						anchor.innerHTML = `<img src="danger.svg">
			IP Verification is disabled!<br>Re-enable 2FA by removing this value.`;
						anchor.onclick = function () {
							let json = {
								"innerHTML": "null"
							}
							removeIP(json);
						};
						ipv4List.appendChild(anchor);
						return;
					}
					// Create a new anchor element
					var anchor = document.createElement("a");

					// Set href attribute to "#"
					anchor.setAttribute("href", "#");

					// Set style attribute for height
					anchor.setAttribute("style", "height: 50%");

					// Add class "apple-button"
					anchor.classList.add("apple-button-withicon");
					anchor.classList.add("truncated-text");

					// Set the inner text to the IP address
					if (eachIP.bogon) {
						anchor.innerHTML = `<img style="width: auto; height: 30px;margin-right: 10px;border-radius: 7px;" src="bogon.svg"></img>${eachIP.ip}`;
					} else {
						anchor.innerHTML = `<img style="width: auto; height: 30px;margin-right: 10px;border-radius: 7px;" src="https://flagsapi.com/${eachIP.country}/flat/64.png"></img>${eachIP.ip}`;
					}

					anchor.onclick = function () {
						removeIP(this);
					};

					// Append the anchor element to the ipv4List
					ipv4List.appendChild(anchor);
				});

			}).catch(error => {
				console.error(error)
			})
	}

	navigator("authip")
	$("#main_popup_settings").fadeOut("fast", function () {
		$("#authips").fadeIn("fast")
	})
}

let birth_data;
function show_account() {
	//account_show.play()
	//navigator("show_account")


	fetch(`${srv}/accounts?birth=get&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			if (data === "") {
				document.getElementById("options_section_0_birthdate").innerHTML = "Not set"
			} else {
				document.getElementById("options_section_0_birthdate").innerHTML = data
				birth_data = data
				let dateParts = data.split('/');

				let day = parseInt(dateParts[0]);
				let month = parseInt(dateParts[1]);
				let year = parseInt(dateParts[2]);

				document.getElementById("day_b").value = day
				document.getElementById("month_b").value = month
				document.getElementById("year_b").value = year
			}


		}).catch(error => {
			console.error(error)
		})
	console.log("Changing Screens to account")
	document.getElementById("usr-email-opt").innerHTML = localStorage.getItem("t50-email")
	document.getElementById("usr-name-opt").innerHTML = localStorage.getItem("t50-username")
	if (sessionStorage.getItem("pfp")) {
		document.getElementById("usr-img-opt").src = sessionStorage.getItem("pfp")
	} else {
		document.getElementById("usr-img-opt").src = document.getElementById("usr-img").src
	}

	//$("#main_popup_settings").fadeOut("fast", function () {
	//	$("#account_options").fadeIn("fast")
	//})
}

function return_settings() {
	navigator("settings_tonexus")
	try {
		goback.play()
	} catch (error) {
		console.error("Audio couldn't be played. Restart")
	}

	$("#account_options").fadeOut("fast", function () {
		$("#main_popup_settings").fadeIn("fast")
	})
}
function username_email_icon_show() {
	navigator("username_email_icon_show")
	document.getElementById("options_section_1_username").innerHTML = localStorage.getItem("t50-username")
	document.getElementById("options_section_1_email").innerHTML = localStorage.getItem("t50-email")
	getBirth()
	//if (localStorage.getItem("t50-birthdate")) {
	//	document.getElementById("options_section_1_birthdate").innerHTML = localStorage.getItem("t50-birthdate")
	//} else {
	//	document.getElementById("options_section_1_birthdate").innerHTML = "Not set"
	//}

	if (localStorage.getItem("announcements-enabled")) {
		document.getElementById("options_section_1_announcements").innerHTML = localStorage.getItem("announcements-enabled")
	} else {
		document.getElementById("options_section_1_announcements").innerHTML = "Enabled"
	}
	loademails()
	$("#main_settings").fadeOut("fast", function () {
		$("#username_email_icon_show").fadeIn("fast")
	})

}


function disable2FA() {
	//disable 2fa
	fetch(`${srv}/authip?method=forceadd&email=${localStorage.getItem("t50-email")}&username=${localStorage.getItem("t50-username")}&password=${atob(localStorage.getItem("t50pswd"))}&ip=null`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			document.getElementById("2fa_status").innerHTML = "Off"
			document.getElementById("2fa_button").onclick = function () {
				enable2FA(this);
			};
			localStorage.setItem("2fa_status", "Off")
			disabled.play()

		}).catch(error => {
			console.error(error)
		})
}

function enable2FA() {
	fetch(`${srv}/authip?method=RemoveIP&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&ip=null`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log("IP Remove Data", data)
			document.getElementById("2fa_status").innerHTML = "On"
			document.getElementById("2fa_button").onclick = function () {
				disable2FA(this);
			};
			localStorage.setItem("2fa_status", "On")
			ac_complete.play()

		}).catch(error => {
			console.error(error)
		})
}
function pswd_secure() {
	navigator("password_secure")
	if (sessionStorage.getItem("block_interactions") === "true") {
		//notice("Sorry. Servers Are Offline")
		if (localStorage.getItem("2fa_status") === "On") {
			document.getElementById("2fa_status").innerHTML = "On"
		} else if (!localStorage.getItem("2fa_status")) {
			document.getElementById("2fa_status").innerHTML = "Unknown"
		} else {
			document.getElementById("2fa_status").innerHTML = "Off"
		}
	} else {
		loademails()

		document.getElementById("options_section_0_email").innerHTML = localStorage.getItem("t50-email")
		fetch(`${srv}/authip?method=Eread&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(data => {
				console.log(data)
				if (data.includes("null")) {
					document.getElementById("2fa_status").innerHTML = "Off"
					document.getElementById("2fa_button").onclick = function () {
						enable2FA();
					};
					localStorage.setItem("2fa_status", "Off")
				} else {
					document.getElementById("2fa_status").innerHTML = "On"
					document.getElementById("2fa_button").onclick = function () {
						disable2FA();
					};
					localStorage.setItem("2fa_status", "On")
				}

			}).catch(error => {
				console.error(error)
			})
	}

	//if (localStorage.getItem("2fa_status")) {
	//	document.getElementById("2fa_status").innerHTML = localStorage.getItem("2fa_status")
	//} else {
	//	document.getElementById("2fa_status").innerHTML = "Off"
	//}
	document.getElementById("trusted_email").innerHTML = localStorage.getItem("t50-email")
	//document.getElementById("options_section_1_username").innerHTML = localStorage.getItem("t50-username")
	//document.getElementById("options_section_1_email").innerHTML = localStorage.getItem("t50-email")
	//if(localStorage.getItem("t50-birthdate")) {
	//	document.getElementById("options_section_1_birthdate").innerHTML = localStorage.getItem("t50-birthdate")
	//} else {
	//	document.getElementById("options_section_1_birthdate").innerHTML = "Not set"
	//}
	//
	//if(localStorage.getItem("announcements-enabled")) {
	//	document.getElementById("options_section_1_announcements").innerHTML = localStorage.getItem("announcements-enabled")
	//} else {
	//	document.getElementById("options_section_1_announcements").innerHTML = "Enabled"
	//}
	$("#main_popup_settings").fadeOut("fast", function () {
		$("#pswd_secure").fadeIn("fast")
	})
}

function show_social() {
	if (sessionStorage.getItem("block_interactions") === "true") {
		//notice("Sorry. Servers Are Offline")
		//return;
	}
	$("#deliv-1-svg").fadeOut("fast", function () {
		document.getElementById("deliv-1-svg").innerHTML = `<svg width="25px" height="25px" style="position:absolute;top: 20px;right:20px;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
		xml:space="preserve">
		<path fill="#7697f7"
			d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
			<animateTransform attributeType="XML" attributeName="transform" type="rotate"
				from="0 25 25" to="360 25 25" dur="0.3s" repeatCount="indefinite" />
		</path>
	</svg>`
		$("#deliv-1-svg").fadeIn("fast")
		setTimeout(function () {
			$("#gridSection").fadeOut("fast", function () {
				$("#evox_social").fadeIn("fast")
				navigator("evox_social")
				document.getElementById("deliv-1-svg").innerHTML = `<svg style="position:absolute;top: 20px;right:20px;" xmlns="http://www.w3.org/2000/svg"
				width="25px" height="25px" viewBox="0 0 24 24" fill="none">
				<path fill-rule="evenodd" clip-rule="evenodd"
					d="M12 2.75C11.3096 2.75 10.75 3.30964 10.75 4C10.75 4.69036 11.3096 5.25 12 5.25C12.6904 5.25 13.25 4.69036 13.25 4C13.25 3.30964 12.6904 2.75 12 2.75ZM9.25 4C9.25 2.48122 10.4812 1.25 12 1.25C13.5188 1.25 14.75 2.48122 14.75 4C14.75 5.51878 13.5188 6.75 12 6.75C10.4812 6.75 9.25 5.51878 9.25 4ZM16.9894 7.16382C18.4102 6.85936 19.75 7.94247 19.75 9.39553C19.75 10.3779 19.1214 11.2501 18.1894 11.5608L16.0141 12.2859C15.877 12.3316 15.795 12.3591 15.7342 12.3821C15.6957 12.3966 15.6795 12.4044 15.6756 12.4063C15.5935 12.4582 15.5488 12.5528 15.561 12.6491C15.562 12.6534 15.5663 12.6709 15.5795 12.7098C15.6004 12.7714 15.6313 12.8522 15.6832 12.987L16.93 16.2287C17.4901 17.6849 16.4152 19.25 14.8549 19.25C14.0571 19.25 13.3205 18.8225 12.9246 18.1298L12 16.5117L11.0754 18.1298C10.6795 18.8225 9.94287 19.25 9.14506 19.25C7.58484 19.25 6.50994 17.6849 7.07002 16.2287L8.31681 12.987C8.36869 12.8522 8.3996 12.7714 8.42051 12.7098C8.43373 12.6709 8.43803 12.6534 8.43901 12.6491C8.4512 12.5528 8.40652 12.4582 8.32443 12.4063C8.32052 12.4044 8.30434 12.3966 8.26583 12.3821C8.20501 12.3591 8.12301 12.3316 7.98592 12.2859L5.81062 11.5608C4.87863 11.2501 4.25 10.3779 4.25 9.39553C4.25 7.94247 5.58979 6.85936 7.0106 7.16382L8.90817 7.57044C9.01467 7.59326 9.06443 7.60392 9.11353 7.61407C11.0177 8.00795 12.9823 8.00795 14.8865 7.61407C14.9356 7.60392 14.9853 7.59326 15.0918 7.57044L16.9894 7.16382ZM18.25 9.39553C18.25 8.89743 17.7907 8.52615 17.3037 8.63052L15.4034 9.03773C15.3006 9.05975 15.2453 9.0716 15.1903 9.08298C13.0857 9.51831 10.9143 9.51831 8.80969 9.08298C8.7547 9.0716 8.69947 9.05977 8.59688 9.03779L6.69631 8.63052C6.20927 8.52615 5.75 8.89743 5.75 9.39553C5.75 9.73228 5.96549 10.0313 6.28497 10.1378L8.46026 10.8629C8.47839 10.8689 8.49661 10.8749 8.5149 10.881C8.72048 10.9491 8.93409 11.0199 9.1102 11.1286C9.69929 11.4922 10.0186 12.169 9.92485 12.8548C9.89681 13.0599 9.81566 13.2698 9.73756 13.4718C9.73061 13.4898 9.72369 13.5077 9.71683 13.5255L8.47004 16.7672C8.28784 17.2409 8.63751 17.75 9.14506 17.75C9.40459 17.75 9.64422 17.6109 9.77299 17.3856L11.3488 14.6279C11.4823 14.3942 11.7309 14.25 12 14.25C12.2691 14.25 12.5177 14.3942 12.6512 14.6279L14.227 17.3856C14.3558 17.6109 14.5954 17.75 14.8549 17.75C15.3625 17.75 15.7122 17.2409 15.53 16.7672L14.2832 13.5255C14.2763 13.5077 14.2694 13.4898 14.2624 13.4718C14.1843 13.2698 14.1032 13.0599 14.0751 12.8548C13.9814 12.169 14.3007 11.4922 14.8898 11.1286C15.0659 11.0199 15.2795 10.9491 15.4851 10.881C15.5034 10.8749 15.5216 10.8689 15.5397 10.8629L17.715 10.1378C18.0345 10.0313 18.25 9.73228 18.25 9.39553ZM5.21639 14.1631C5.40245 14.5332 5.25328 14.984 4.88321 15.1701C3.36229 15.9348 2.75 16.7949 2.75 17.5C2.75 18.2637 3.47401 19.2048 5.23671 19.998C6.929 20.7596 9.31951 21.25 12 21.25C14.6805 21.25 17.071 20.7596 18.7633 19.998C20.526 19.2048 21.25 18.2637 21.25 17.5C21.25 16.7949 20.6377 15.9348 19.1168 15.1701C18.7467 14.984 18.5975 14.5332 18.7836 14.1631C18.9697 13.793 19.4205 13.6439 19.7906 13.8299C21.4366 14.6575 22.75 15.9 22.75 17.5C22.75 19.2216 21.2354 20.5305 19.3788 21.3659C17.4518 22.2331 14.8424 22.75 12 22.75C9.15764 22.75 6.54815 22.2331 4.62116 21.3659C2.76457 20.5305 1.25 19.2216 1.25 17.5C1.25 15.9 2.5634 14.6575 4.20941 13.8299C4.57948 13.6439 5.03032 13.793 5.21639 14.1631Z"
					fill="#7697f7" />
			</svg>`
			})

		}, 200)
	})
	//$("#main_popup_settings").fadeOut("fast", function () {
	//	$("#evox_social").fadeIn("fast")
	//	navigator("evox_social")
	//})
}

function show_search() {
	navigator("show_search")
	$("#evox_social").fadeOut("fast", function () {
		$("#add_friends").fadeIn("fast")
	})
	//document.getElementById("options_section_1_username").innerHTML = localStorage.getItem("t50-username")
	//document.getElementById("options_section_1_email").innerHTML = localStorage.getItem("t50-email")
	//if(localStorage.getItem("t50-birthdate")) {
	//	document.getElementById("options_section_1_birthdate").innerHTML = localStorage.getItem("t50-birthdate")
	//} else {
	//	document.getElementById("options_section_1_birthdate").innerHTML = "Not set"
	//}
	//
	//if(localStorage.getItem("announcements-enabled")) {
	//	document.getElementById("options_section_1_announcements").innerHTML = localStorage.getItem("announcements-enabled")
	//} else {
	//	document.getElementById("options_section_1_announcements").innerHTML = "Enabled"
	//}
	//$("#bottom-logo").fadeOut("fast")
	if (sessionStorage.getItem("block_interactions") === "true") {
		if (localStorage.getItem("evoxUsers")) {
			console.log("Will try spawning")
			let data = localStorage.getItem("evoxUsers")
			let userlist = JSON.parse(data);
			let containerId = "list-container";
			var listContainer = document.getElementById(containerId);
			listContainer.style.textAlign = "";
			listContainer.style.marginTop = "";
			listContainer.innerHTML = "<!--Empty-->";
			let usersInfo = [];


			// Fetch emails for each user individually
			userlist.forEach(username => {
				if (username === localStorage.getItem("t50-username")) {
					return;
				}
				if (!localStorage.getItem("friends")) {
					createLocalNotification("Gateway", 'Cannot load global list (Friends 404)')
					return;
				}
				let friends = localStorage.getItem("friends")
				let sentRequests;
				let skipbutton;
				let addButton;
				// Check if the username already exists in the list
				if (listContainer.querySelector(`#user-${username}-email`) === null) {
					var userContainer = document.createElement("div");
					userContainer.className = "list-user-info";

					var userCircle = document.createElement("div");
					userCircle.className = "user-circle";
					userCircle.innerHTML = `<img onclick="fullimage(this)" src="loading-circle.gif" id="${username}-pfp" alt="User ${username} Image">`;
					var userDetails = document.createElement("div");
					userDetails.className = "user-details";

					var userName = document.createElement("div");
					userName.className = "user-name";
					userName.textContent = username;

					var userEmail = document.createElement("div");
					userEmail.className = "user-email";
					userEmail.id = `user-${username}-email`;
					userEmail.textContent = 'offline';
					if (JSON.stringify(friends).includes(username)) {
						skipbutton = true
						userDetails.appendChild(userName);
						userDetails.appendChild(userEmail);

						userContainer.appendChild(userCircle);
						userContainer.appendChild(userDetails);

						listContainer.appendChild(userContainer);
						let localValue = localStorage.getItem("sent_friend_requests");

						// Parse the retrieved data into an array or initialize an empty array
						let requests = localValue ? JSON.parse(localValue) : [];

						// Assuming 'username' is the value you want to remove
						let indexToRemove = requests.indexOf(username);
						console.log(indexToRemove)
						if (indexToRemove !== -1) {
							// Remove the element from the array
							requests.splice(indexToRemove, 1);

							// Save the updated array back to localStorage
							localStorage.setItem("sent_friend_requests", JSON.stringify(requests));
						} else {
							console.log("Username not found in the array");
						}
					}

					if (!localStorage.getItem("sentReq")) {
						createLocalNotification("Gateway", 'Cannot load global list (SentReq 404)')
						return;
					}
					let usersSent = localStorage.getItem("sentReq")
					sentRequests = usersSent
					if (sentRequests && sentRequests.includes(username) && skipbutton !== true) {
						addButton = document.createElement("a");
						addButton.href = "#";
						addButton.id = username;
						addButton.onclick = function () {
							shake_me(this.id);
						};
						addButton.className = "apple-button-list";
						addButton.textContent = "Sent";
						userDetails.appendChild(userName);
						userDetails.appendChild(userEmail);

						userContainer.appendChild(userCircle);
						userContainer.appendChild(userDetails);
						userContainer.appendChild(addButton);

						listContainer.appendChild(userContainer);
					} else if (skipbutton !== true) {
						addButton = document.createElement("a");
						addButton.href = "#";
						addButton.id = username;
						addButton.onclick = function () {
							//addfriend(this);
						};
						addButton.className = "apple-button-list";
						addButton.textContent = "Add";

						userDetails.appendChild(userName);
						userDetails.appendChild(userEmail);

						userContainer.appendChild(userCircle);
						userContainer.appendChild(userDetails);
						userContainer.appendChild(addButton);

						listContainer.appendChild(userContainer);
					}
					let reqStatus = false

					//INDEXDB
					console.log(username)
					loadPFP(username, "-pfp")
					if (sentRequests.includes(username)) {
						reqStatus = true
					}
					let userObj = {
						"username": username,
						"email": 'offline',
						"friends": JSON.stringify(friends).includes(username),
						"requested": reqStatus
					};

					usersInfo.push(userObj); // Push user object to the array

					// Store JSON array in session storage
					sessionStorage.setItem("usersInfo", JSON.stringify(usersInfo));


				}



			})
			Promise.resolve().then(() => {
				// Add the transparent placeholder after the loop that adds user information
				var transparentPlaceholder = document.createElement("div");
				transparentPlaceholder.className = "transparent-placeholder";
				listContainer.parentNode.appendChild(transparentPlaceholder);
			}).catch(error => {
				console.error(error);
			});
		}
	}

}
function acceptfriend(element) {
	document.getElementById(element.id).innerHTML = `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px" width="25px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
	xml:space="preserve">
	<path fill="#fff"
		d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
		<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25"
			to="360 25 25" dur="0.5s" repeatCount="indefinite" />
	</path>
</svg>`
	console.log("Accepting Request From", element.id)
	fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&todo=acceptRequest&who=${element.id}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			element.innerHTML = "Friends"
			ac_complete.play()

		}).catch(error => {
			console.error(error)
		})
}

function showCoverUpBox() {
	document.getElementById('upload-box-cover').click();
}

function setUserCover() {
	const input = document.getElementById('upload-box-cover');
	const file = input.files[0];

	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const base64String = e.target.result;
			// Now you have the base64 representation of the selected image
			//console.log(base64String);
			document.getElementById("upload-box-cover").disabled = true
			//cancelPFPOpt()
			document.getElementById("user-video-self").src = "uploading.mp4"
			fetch(`${srv}/profiles`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: localStorage.getItem("t50-username"),
					pfp: base64String,
					method: "userCover"
				})
			})
				.then(response => response.text())
				.then(data => {
					cancelPFPOpt()
					if (data === "done") {
						createLocalNotification("User Cover Successfully Set", "Users can now see the video you selected in your profile.")
						fetch(`${srv}/profiles?name=${localStorage.getItem("t50-username")}&authorize=cover`)
							.then(response => {
								if (!response.ok) {
									throw new Error(`HTTP error! Status: ${response.status}`);
								}
								return response.text();
							})
							.then(coverIMG => {
								if (coverIMG !== "None") {
									document.getElementById("user-video-self").src = coverIMG
								}
							})
							.catch(error => {
								console.error(error);
							})
					} else {
						createLocalNotification("Something Failed..", `Data: ${data}`)
					}
				})
				.catch(error => {
					console.error(error);
					createLocalNotification("Something Failed..", `Error: ${error}`)
				});
		};
		reader.readAsDataURL(file);
	}

	// Reset the input value to allow selecting the same file again
	input.value = '';
}
function setProfileBG(base64String) {

}
let friendinterval;
function showFriend(element) {
	$("#stuck").fadeIn("fast")
	navigator("showFriend")
	try {
		clearInterval(friendinterval);
	} catch (error) {
		// Handle the error (optional)
		console.error("Error clearing interval:", error.message);
	}
	console.log(element)
	let elem = element.id
	var nameArray = elem.split('-');
	var friend = nameArray[1];

	sessionStorage.setItem("showing_friend", `secureline-${friend}`)
	try {
		//document.getElementById("secureline-username").id = `secureline-${friend}`
		document.getElementById("friend-email").innerHTML = document.getElementById(`user-${friend}-email-friends`).innerHTML
		document.getElementById("friend-pfp").src = document.getElementById(`${friend}-pfp-friends`).src
		if (document.getElementById("friend-pfp").src.includes("loading-circle.gif")) {
			friendinterval = setInterval(function () {
				document.getElementById("friend-pfp").src = document.getElementById(`${friend}-pfp-friends`).src
			}, 500)
		}

		document.getElementById("friend-username").innerHTML = friend
		$("#friends").fadeOut("fast", function () {
			fetch(`${srv}/accounts?email=${document.getElementById("friend-email").innerHTML}&username=${friend}&method=last_login`)
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.text();
				})
				.then(data => {
					fetch(`${srv}/profiles?name=${friend}&authorize=cover`)
						.then(response => {
							if (!response.ok) {
								throw new Error(`HTTP error! Status: ${response.status}`);
							}
							return response.text();
						})
						.then(coverIMG => {
							if (coverIMG !== "None") {
								document.getElementById("user-video-forDisplay").src = coverIMG
							}
							fetch(`${srv}/accounts?email=${document.getElementById("friend-email").innerHTML}&username=${friend}&birth=get`)
								.then(response => {
									if (!response.ok) {
										throw new Error(`HTTP error! Status: ${response.status}`);
									}
									return response.text();
								})
								.then(bd => {
									if (bd !== "") {
										document.getElementById("Friendbirth").style.display = ""
										document.getElementById("FriendbirthTXT").innerHTML = bd
									} else {
										document.getElementById("Friendbirth").style.display = "none"
									}
									if (data !== "Unknown") {
										const date = printTimeOrDate(data)
										document.getElementById("last_seen").innerHTML = date
										$("#user-friend").fadeIn("fast")
									} else {
										document.getElementById("last_seen").innerHTML = data
										$("#user-friend").fadeIn("fast")
									}
									$("#stuck").fadeOut("fast")


								})
								.catch(error => {
									console.error(error);
								})
						}).catch(error => {
							console.error(error);
						})




				})
				.catch(error => {
					console.error(error);
				});



		})
	} catch (error) {
		console.log("Error Detected! Fixing..\n", error)
		return_to_options('user-friend'); navigator('show_friends')
		showFriend(element)

	}

}
function show_friends() {
	navigator("show_friends")
	$("#load-users-friends").fadeIn("fast")
	$("#main_settings").fadeOut("fast", function () {
		$("#friends").fadeIn("fast")
	})
	if (sessionStorage.getItem("block_interactions") === "true") {
		//notice("Cannot change while servers are offline.")
		let data = localStorage.getItem("friends")
		if (data === "") {
			$("#load-users-friends").fadeOut("fast", function () {
				let containerId = "list-friends";
				var listContainer = document.getElementById(containerId);
				listContainer.style.textAlign = "center";
				listContainer.style.marginTop = "50px";
				listContainer.innerHTML = "No Friends";
			});
			return;
		}
		if (data === null) {
			$("#load-users-friends").fadeOut("fast", function () {
				let containerId = "list-friends";
				var listContainer = document.getElementById(containerId);
				listContainer.style.textAlign = "center";
				listContainer.style.marginTop = "50px";
				listContainer.innerHTML = "Local Friends List Is Empty";
			});
			return;
		}
		$("#load-users-friends").fadeOut("fast")
		const user_requests = JSON.parse(data);
		let containerId = "list-friends";
		var listContainer = document.getElementById(containerId);
		listContainer.style.textAlign = "";
		listContainer.style.marginTop = "";
		listContainer.innerHTML = "<!--Empty-->";
		user_requests.forEach(username => {
			let addButton;
			if (listContainer.querySelector(`#user-${username}-email`) === null) {
				var userContainer = document.createElement("div");
				userContainer.className = "list-user-info";
				userContainer.id = `friend-${username}`;
				//userContainer.onclick = function () {
				//	showFriend(this);
				//};
				var userCircle = document.createElement("div");
				userCircle.className = "user-circle";
				userCircle.innerHTML = `<img src="loading-circle.gif" id="${username}-pfp-friends" alt="User ${username} Image">`;
				var userDetails = document.createElement("div");
				userDetails.className = "user-details";

				var userName = document.createElement("div");
				userName.className = "user-name";
				userName.textContent = username;

				var userEmail = document.createElement("div");
				userEmail.className = "user-email";
				userEmail.id = `user-${username}-email-friends`;
				userEmail.textContent = 'offline';

				userDetails.appendChild(userName);
				userDetails.appendChild(userEmail);

				userContainer.appendChild(userCircle);
				userContainer.appendChild(userDetails);

				listContainer.appendChild(userContainer);
				loadPFP(username, '-pfp-friends')
			}
		});
		Promise.resolve().then(() => {
			// Add the transparent placeholder after the loop that adds user information
			var transparentPlaceholder = document.createElement("div");
			transparentPlaceholder.className = "transparent-placeholder";
			listContainer.parentNode.appendChild(transparentPlaceholder);
		}).catch(error => {
			console.error(error);
		});
	} else {
		fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=friends`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(data => {
				console.log(data);
				localStorage.setItem("friends", data)
				if (data === "") {
					$("#load-users-friends").fadeOut("fast", function () {
						let containerId = "list-friends";
						var listContainer = document.getElementById(containerId);
						listContainer.style.textAlign = "center";
						listContainer.style.marginTop = "50px";
						listContainer.innerHTML = "No Friends";
					});
					return;
				}
				const user_requests = JSON.parse(data);
				let containerId = "list-friends";
				var listContainer = document.getElementById(containerId);
				listContainer.style.textAlign = "";
				listContainer.style.marginTop = "";
				listContainer.innerHTML = "<!--Empty-->";
				user_requests.forEach(username => {
					fetch(`${srv}/accounts?method=getemailbyusername&username=${username}`)
						.then(response => {
							if (!response.ok) {
								throw new Error(`HTTP error! Status: ${response.status}`);
							}
							return response.text();
						})
						.then(profileemail => {
							let addButton;
							if (listContainer.querySelector(`#user-${username}-email`) === null) {
								var userContainer = document.createElement("div");
								userContainer.className = "list-user-info";
								userContainer.id = `friend-${username}`;
								userContainer.onclick = function () {
									showFriend(this);
								};
								var userCircle = document.createElement("div");
								userCircle.className = "user-circle";
								userCircle.innerHTML = `<img src="loading-circle.gif" id="${username}-pfp-friends" alt="User ${username} Image">`;
								var userDetails = document.createElement("div");
								userDetails.className = "user-details";

								var userName = document.createElement("div");
								userName.className = "user-name";
								userName.textContent = username;

								var userEmail = document.createElement("div");
								userEmail.className = "user-email";
								userEmail.id = `user-${username}-email-friends`;
								userEmail.textContent = profileemail;

								userDetails.appendChild(userName);
								userDetails.appendChild(userEmail);

								userContainer.appendChild(userCircle);
								userContainer.appendChild(userDetails);

								listContainer.appendChild(userContainer);
								loadPFP(username, '-pfp-friends')
								//fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
								//	.then(response => {
								//		if (!response.ok) {
								//			throw new Error(`HTTP error! Status: ${response.status}`);
								//		}
								//		return response.text();
								//	})
								//	.then(profileimage => {
								//		if (profileimage.indexOf("base64") === -1) {
								//			profileimage = "data:image/jpeg;base64," + profileimage;
								//			document.getElementById(`${username}-pfp-friends`).src = profileimage;
								//		} else {
								//			document.getElementById(`${username}-pfp-friends`).src = profileimage;
								//		}
								//	})
								//	.catch(error => {
								//		console.error("Cannot set src for", username);
								//		console.error(error);
								//	});
							}
						})
						.catch(error => {
							console.error(error);
						});
				});

				Promise.resolve().then(() => {
					// Add the transparent placeholder after the loop that adds user information
					var transparentPlaceholder = document.createElement("div");
					transparentPlaceholder.className = "transparent-placeholder";
					listContainer.parentNode.appendChild(transparentPlaceholder);
				}).catch(error => {
					console.error(error);
				});

				$("#load-users-friends").fadeOut("fast");
			})
			.catch(error => {
				console.error(error);
			});
	}




}

function show_requests() {
	navigator("show_requests")
	$("#load-users-requests").fadeIn("fast")

	document.getElementById("list-requests").innerHTML = ""
	$("#evox_social").fadeOut("fast", function () {
		$("#friend_requests").fadeIn("fast")
	})
	if (sessionStorage.getItem("block_interactions") === "true") {
		//notice("Cannot change while servers are offline.")
		//return;
		let data = localStorage.getItem("requests")
		if (data === "None") {
			$("#load-users-requests").fadeOut("fast", function () {
				let containerId = "list-requests";
				var listContainer = document.getElementById(containerId);
				listContainer.style.textAlign = "center";
				listContainer.style.marginTop = "50px";
				listContainer.innerHTML = "No Local Friend Requests"
			})
			return;
		}
		if (data === null) {
			$("#load-users-requests").fadeOut("fast", function () {
				let containerId = "list-requests";
				var listContainer = document.getElementById(containerId);
				listContainer.style.textAlign = "center";
				listContainer.style.marginTop = "50px";
				listContainer.innerHTML = "No Friend Requests Data (Locally)"
			})
			return;
		}
		const user_requests = JSON.parse(data)
		let containerId = "list-requests";
		var listContainer = document.getElementById(containerId);
		listContainer.style.textAlign = "";
		listContainer.style.marginTop = "";
		listContainer.innerHTML = "<!--Empty-->";
		user_requests.forEach(username => {
			let addButton;
			// Check if the username already exists in the list
			if (listContainer.querySelector(`#user-${username}-email`) === null) {
				var userContainer = document.createElement("div");
				userContainer.className = "list-user-info";

				var userCircle = document.createElement("div");
				userCircle.className = "user-circle";
				userCircle.innerHTML = `<img src="loading-circle.gif" id="${username}-pfp-requests" alt="User ${username} Image">`;
				var userDetails = document.createElement("div");
				userDetails.className = "user-details";

				var userName = document.createElement("div");
				userName.className = "user-name";
				userName.textContent = username;

				var userEmail = document.createElement("div");
				userEmail.className = "user-email";
				userEmail.id = `user-${username}-email-requests`;
				userEmail.textContent = "offline";


				addButton = document.createElement("a");
				addButton.href = "#";
				addButton.id = username;
				addButton.onclick = function () {
					shake_me(this.id);
				};
				addButton.className = "apple-button-list";
				addButton.textContent = "Accept";


				userDetails.appendChild(userName);
				userDetails.appendChild(userEmail);

				userContainer.appendChild(userCircle);
				userContainer.appendChild(userDetails);
				userContainer.appendChild(addButton);

				listContainer.appendChild(userContainer);
				loadPFP(username, '-pfp-requests')
			}
		});
		$("#load-users-requests").fadeOut("fast");
	} else {
		fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=getRequests`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(data => {
				console.log(JSON.stringify(data))
				localStorage.setItem("requests", data)
				if (data === "None") {
					$("#load-users-requests").fadeOut("fast", function () {
						let containerId = "list-requests";
						var listContainer = document.getElementById(containerId);
						listContainer.style.textAlign = "center";
						listContainer.style.marginTop = "50px";
						listContainer.innerHTML = "No Friend Requests"
					})
					return;
				}
				const user_requests = JSON.parse(data)
				let containerId = "list-requests";
				var listContainer = document.getElementById(containerId);
				listContainer.style.textAlign = "";
				listContainer.style.marginTop = "";
				listContainer.innerHTML = "<!--Empty-->";
				user_requests.forEach(username => {
					fetch(`${srv}/accounts?method=getemailbyusername&username=${username}`)
						.then(response => {
							if (!response.ok) {
								throw new Error(`HTTP error! Status: ${response.status}`);
							}
							return response.text();
						})
						.then(profileemail => {
							let addButton;
							// Check if the username already exists in the list
							if (listContainer.querySelector(`#user-${username}-email`) === null) {
								var userContainer = document.createElement("div");
								userContainer.className = "list-user-info";

								var userCircle = document.createElement("div");
								userCircle.className = "user-circle";
								userCircle.innerHTML = `<img src="loading-circle.gif" id="${username}-pfp-requests" alt="User ${username} Image">`;
								var userDetails = document.createElement("div");
								userDetails.className = "user-details";

								var userName = document.createElement("div");
								userName.className = "user-name";
								userName.textContent = username;

								var userEmail = document.createElement("div");
								userEmail.className = "user-email";
								userEmail.id = `user-${username}-email-requests`;
								userEmail.textContent = profileemail;


								addButton = document.createElement("a");
								addButton.href = "#";
								addButton.id = username;
								addButton.onclick = function () {
									acceptfriend(this);
								};
								addButton.className = "apple-button-list";
								addButton.textContent = "Accept";


								userDetails.appendChild(userName);
								userDetails.appendChild(userEmail);

								userContainer.appendChild(userCircle);
								userContainer.appendChild(userDetails);
								userContainer.appendChild(addButton);

								listContainer.appendChild(userContainer);
								loadPFP(username, '-pfp-requests')
								//fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
								//	.then(response => {
								//		if (!response.ok) {
								//			throw new Error(`HTTP error! Status: ${response.status}`);
								//		}
								//		return response.text();
								//	})
								//	.then(profileimage => {
								//		if (profileimage.indexOf("base64") === -1) {
								//			// If it doesn't contain "base64", add the prefix
								//			profileimage = "data:image/jpeg;base64," + profileimage;
								//			document.getElementById(`${username}-pfp-requests`).src = profileimage
								//		} else {
								//			document.getElementById(`${username}-pfp-requests`).src = profileimage
								//		}
								//
								//
								//	}).catch(error => {
								//		console.error("Cannot set src for", username)
								//		console.error(error)
								//	})
							}
						});
					$("#load-users-requests").fadeOut("fast");
				})
					.catch(error => {
						console.error(error);
					});
			}).catch(error => {
				console.error(error);
			});
	}


}
function addfriend(element) {
	//if (localStorage.getItem("sent_friend_requests")) {
	//	if (localStorage.getItem("sent_friend_requests").includes(element.id)) {
	//		shake_me(element.id)
	//		return;
	//	}
	//}
	console.log(element.id)
	document.getElementById(element.id).innerHTML = `<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px" width="25px" height="20px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
	xml:space="preserve">
	<path fill="#fff"
		d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
		<animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25"
			to="360 25 25" dur="0.5s" repeatCount="indefinite" />
	</path>
</svg>`
	fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&todo=friendRequest&who=${element.id}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			if (data === "Success") {
				let requests = localStorage.getItem("sent_friend_requests");

				// Parse the retrieved data into an array or initialize an empty array
				requests = requests ? JSON.parse(requests) : [];

				// Push the new value to the array
				requests.push(element.id);

				// Save the updated array back to localStorage
				//localStorage.setItem("sent_friend_requests", JSON.stringify(requests));
				document.getElementById(element.id).innerHTML = `Sent`
				notice_s.play()
			}
		}).catch(error => {
			console.error(error);
		});

}
function submit_search() {
	console.log("Unready")
	//value = document.getElementById("")
}


function loadusers() {
	let url = `${srv}/search?search=`;

	fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			localStorage.setItem("evoxUsers", data)
			let userlist = JSON.parse(data);
			let containerId = "list-container";
			var listContainer = document.getElementById(containerId);
			listContainer.style.textAlign = "";
			listContainer.style.marginTop = "";
			listContainer.innerHTML = "<!--Empty-->";
			let usersInfo = [];


			// Fetch emails for each user individually
			userlist.forEach(username => {
				if (username === localStorage.getItem("t50-username")) {
					return;
				}
				fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=friends`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						return response.text();
					})
					.then(friends => {
						let sentRequests;

						fetch(`${srv}/accounts?method=getemailbyusername&username=${username}`)
							.then(response => {
								if (!response.ok) {
									throw new Error(`HTTP error! Status: ${response.status}`);
								}
								return response.text();
							})
							.then(profileemail => {
								let skipbutton;
								let addButton;
								// Check if the username already exists in the list
								if (listContainer.querySelector(`#user-${username}-email`) === null) {
									var userContainer = document.createElement("div");
									userContainer.className = "list-user-info";

									var userCircle = document.createElement("div");
									userCircle.className = "user-circle";
									userCircle.innerHTML = `<img onclick="fullimage(this)" src="loading-circle.gif" id="${username}-pfp" alt="User ${username} Image">`;
									var userDetails = document.createElement("div");
									userDetails.className = "user-details";

									var userName = document.createElement("div");
									userName.className = "user-name";
									userName.textContent = username;

									var userEmail = document.createElement("div");
									userEmail.className = "user-email";
									userEmail.id = `user-${username}-email`;
									userEmail.textContent = profileemail;
									if (JSON.stringify(friends).includes(username)) {
										skipbutton = true
										userDetails.appendChild(userName);
										userDetails.appendChild(userEmail);

										userContainer.appendChild(userCircle);
										userContainer.appendChild(userDetails);

										listContainer.appendChild(userContainer);
										let localValue = localStorage.getItem("sent_friend_requests");

										// Parse the retrieved data into an array or initialize an empty array
										let requests = localValue ? JSON.parse(localValue) : [];

										// Assuming 'username' is the value you want to remove
										let indexToRemove = requests.indexOf(username);
										console.log(indexToRemove)
										if (indexToRemove !== -1) {
											// Remove the element from the array
											requests.splice(indexToRemove, 1);

											// Save the updated array back to localStorage
											localStorage.setItem("sent_friend_requests", JSON.stringify(requests));
										} else {
											console.log("Username not found in the array");
										}
									}

									fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=sentRequests`)
										.then(response => {
											if (!response.ok) {
												throw new Error(`HTTP error! Status: ${response.status}`);
											}
											return response.text();
										})
										.then(usersSent => {
											localStorage.setItem("sentReq", usersSent)
											sentRequests = usersSent
											if (sentRequests && sentRequests.includes(username) && skipbutton !== true) {
												addButton = document.createElement("a");
												addButton.href = "#";
												addButton.id = username;
												addButton.onclick = function () {
													shake_me(this.id);
												};
												addButton.className = "apple-button-list";
												addButton.textContent = "Sent";
												userDetails.appendChild(userName);
												userDetails.appendChild(userEmail);

												userContainer.appendChild(userCircle);
												userContainer.appendChild(userDetails);
												userContainer.appendChild(addButton);

												listContainer.appendChild(userContainer);
											} else if (skipbutton !== true) {
												addButton = document.createElement("a");
												addButton.href = "#";
												addButton.id = username;
												addButton.onclick = function () {
													addfriend(this);
												};
												addButton.className = "apple-button-list";
												addButton.textContent = "Add";

												userDetails.appendChild(userName);
												userDetails.appendChild(userEmail);

												userContainer.appendChild(userCircle);
												userContainer.appendChild(userDetails);
												userContainer.appendChild(addButton);

												listContainer.appendChild(userContainer);
											}
											let reqStatus = false

											//INDEXDB
											console.log(username)
											loadPFP(username, "-pfp")
											if (sentRequests.includes(username)) {
												reqStatus = true
											}
											let userObj = {
												"username": username,
												"email": profileemail,
												"friends": JSON.stringify(friends).includes(username),
												"requested": reqStatus
											};

											usersInfo.push(userObj); // Push user object to the array

											// Store JSON array in session storage
											sessionStorage.setItem("usersInfo", JSON.stringify(usersInfo));

										}).catch(error => {
											console.error(error);
										});
								}
							}).catch(error => {
								console.error(error);
							});
					}).catch(error => {
						console.error(error);
					});


			})
			Promise.resolve().then(() => {
				// Add the transparent placeholder after the loop that adds user information
				var transparentPlaceholder = document.createElement("div");
				transparentPlaceholder.className = "transparent-placeholder";
				listContainer.parentNode.appendChild(transparentPlaceholder);
			}).catch(error => {
				console.error(error);
			});
		}).catch(error => {
			console.error(error);
		});

}

//old
//function handlesearch(value) {
//	console.log("Length", value.length);
//	if (value.length < 0) {
//		console.log("Declined");
//		return;
//	} else {
//		let result;
//		const usernamesJSON = sessionStorage.getItem("usersInfo");
//		if (usernamesJSON) {
//			const usernames = JSON.parse(usernamesJSON);
//			console.log(usernames);
//			const data = JSON.parse(usernamesJSON)
//
//			result = data.filter(entry =>
//				entry.username.toLowerCase().includes(value) ||
//				entry.email.toLowerCase().includes(value)
//			);
//		} else {
//			console.log("No user information found in sessionStorage.");
//		}
//		// add timeout if search is started or end value exists in div
//		console.log("Accepted");
//		$("#load-users").fadeIn("fast");
//		let url = `${srv}/search?search=${value}`;
//		const data = result
//				if (JSON.stringify(data) === '"[]"') {
//					$("#load-users").fadeOut("fast", function () {
//						let containerId = "list-container";
//						var listContainer = document.getElementById(containerId);
//						listContainer.style.textAlign = "center";
//						listContainer.style.marginTop = "50px";
//						listContainer.innerHTML = `No user found named ${value}`
//					})
//					return;
//				} else {
//					console.log(`${JSON.stringify(data)} != "[]"`)
//				}
//				let userlist = data;
//				let containerId = "list-container";
//				var listContainer = document.getElementById(containerId);
//				listContainer.style.textAlign = "";
//				listContainer.style.marginTop = "";
//				listContainer.innerHTML = "<!--Empty-->";
//
//				// Fetch emails for each user individually
//				userlist.forEach(val => {
//					if (val.username === localStorage.getItem("t50-username")) {
//						return;
//					}
//					fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=friends`)
//						.then(response => {
//							if (!response.ok) {
//								throw new Error(`HTTP error! Status: ${response.status}`);
//							}
//							return response.text();
//						})
//						.then(friends => {
//							let sentRequests;
//									let skipbutton;
//									let addButton;
//									// Check if the username already exists in the list
//									if (listContainer.querySelector(`#user-${val.username}-email`) === null) {
//										var userContainer = document.createElement("div");
//										userContainer.className = "list-user-info";
//
//										var userCircle = document.createElement("div");
//										userCircle.className = "user-circle";
//										userCircle.innerHTML = `<img src="loading-circle.gif" id="${val.username}-pfp" alt="User ${val.username} Image">`;
//										var userDetails = document.createElement("div");
//										userDetails.className = "user-details";
//
//										var userName = document.createElement("div");
//										userName.className = "user-name";
//										userName.textContent = val.username;
//
//										var userEmail = document.createElement("div");
//										userEmail.className = "user-email";
//										userEmail.id = `user-${val.username}-email`;
//										userEmail.textContent = val.email;
//										if (JSON.stringify(friends).includes(val.username)) {
//											skipbutton = true
//											userDetails.appendChild(userName);
//											userDetails.appendChild(userEmail);
//
//											userContainer.appendChild(userCircle);
//											userContainer.appendChild(userDetails);
//
//											listContainer.appendChild(userContainer);
//											let localValue = localStorage.getItem("sent_friend_requests");
//
//											// Parse the retrieved data into an array or initialize an empty array
//											let requests = localValue ? JSON.parse(localValue) : [];
//
//											// Assuming 'username' is the value you want to remove
//											let indexToRemove = requests.indexOf(val.username);
//											if (indexToRemove !== -1) {
//												// Remove the element from the array
//												requests.splice(indexToRemove, 1);
//
//												// Save the updated array back to localStorage
//												localStorage.setItem("sent_friend_requests", JSON.stringify(requests));
//											} else {
//												console.log("Username not found in the array");
//											}
//										}
//
//										fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=sentRequests`)
//											.then(response => {
//												if (!response.ok) {
//													throw new Error(`HTTP error! Status: ${response.status}`);
//												}
//												return response.text();
//											})
//											.then(usersSent => {
//												sentRequests = usersSent
//												if (sentRequests && sentRequests.includes(val.username) && skipbutton !== true) {
//													addButton = document.createElement("a");
//													addButton.href = "#";
//													addButton.id = val.username;
//													addButton.onclick = function () {
//														shake_me(this.id);
//													};
//													addButton.className = "apple-button-list";
//													addButton.textContent = "Sent";
//													userDetails.appendChild(userName);
//													userDetails.appendChild(userEmail);
//
//													userContainer.appendChild(userCircle);
//													userContainer.appendChild(userDetails);
//													userContainer.appendChild(addButton);
//
//													listContainer.appendChild(userContainer);
//												} else if (skipbutton !== true) {
//													addButton = document.createElement("a");
//													addButton.href = "#";
//													addButton.id = val.username;
//													addButton.onclick = function () {
//														addfriend(this);
//													};
//													addButton.className = "apple-button-list";
//													addButton.textContent = "Add";
//
//													userDetails.appendChild(userName);
//													userDetails.appendChild(userEmail);
//
//													userContainer.appendChild(userCircle);
//													userContainer.appendChild(userDetails);
//													userContainer.appendChild(addButton);
//
//													listContainer.appendChild(userContainer);
//												}
//												loadPFP(val.username, '-pfp')
//												//fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
//												//	.then(response => {
//												//		if (!response.ok) {
//												//			throw new Error(`HTTP error! Status: ${response.status}`);
//												//		}
//												//		return response.text();
//												//	})
//												//	.then(profileimage => {
//												//		if (profileimage.indexOf("base64") === -1) {
//												//			// If it doesn't contain "base64", add the prefix
//												//			profileimage = "data:image/jpeg;base64," + profileimage;
//												//			document.getElementById(`${username}-pfp`).src = profileimage
//												//		} else {
//												//			document.getElementById(`${username}-pfp`).src = profileimage
//												//		}
//												//
//												//
//												//	}).catch(error => {
//												//		console.error("Cannot set src for", username)
//												//		console.error(error)
//												//	})
//											})
//
//
//
//
//
//									}
//								});
//							$("#load-users").fadeOut("fast");
//
//
//
//
//				})
//				
//
//		// Add transparent-placeholder div at the end of the listContainer
//
//	}
//}
function handlesearch(value) {

	console.log("Length", value.length);
	if (value.length === 0) {
		console.log("Declined");
		const usernamesJSON = sessionStorage.getItem("usersInfo");
		let userlist = JSON.parse(usernamesJSON);
		let containerId = "list-container";
		var listContainer = document.getElementById(containerId);
		listContainer.style.textAlign = "";
		listContainer.style.marginTop = "";
		listContainer.innerHTML = "<!--Empty-->";

		// Fetch emails for each user individually
		userlist.forEach(val => {
			if (val.username === localStorage.getItem("t50-username")) {
				return;
			}
			let sentRequests;
			let skipbutton;
			let addButton;
			if (listContainer.querySelector(`#user-${val.username}-email`) === null) {
				var userContainer = document.createElement("div");
				userContainer.className = "list-user-info";

				var userCircle = document.createElement("div");
				userCircle.className = "user-circle";
				userCircle.innerHTML = `<img src="loading-circle.gif" id="${val.username}-pfp" alt="User ${val.username} Image">`;
				var userDetails = document.createElement("div");
				userDetails.className = "user-details";

				var userName = document.createElement("div");
				userName.className = "user-name";
				userName.textContent = val.username;

				var userEmail = document.createElement("div");
				userEmail.className = "user-email";
				userEmail.id = `user-${val.username}-email`;
				userEmail.textContent = val.email;
				if (val.friends === true) {
					skipbutton = true;
					userDetails.appendChild(userName);
					userDetails.appendChild(userEmail);

					userContainer.appendChild(userCircle);
					userContainer.appendChild(userDetails);

					listContainer.appendChild(userContainer);
					let localValue = localStorage.getItem("sent_friend_requests");
					let requests = localValue ? JSON.parse(localValue) : [];
					let indexToRemove = requests.indexOf(val.username);
					if (indexToRemove !== -1) {
						requests.splice(indexToRemove, 1);
						localStorage.setItem("sent_friend_requests", JSON.stringify(requests));
					} else {
						console.log("Username not found in the array");
					}
				}

				//sentRequests = usersSent;
				if (skipbutton !== true && val.requested === true) {
					addButton = document.createElement("a");
					addButton.href = "#";
					addButton.id = val.username;
					addButton.onclick = function () {
						shake_me(this.id);
					};
					addButton.className = "apple-button-list";
					addButton.textContent = "Sent";
					userDetails.appendChild(userName);
					userDetails.appendChild(userEmail);

					userContainer.appendChild(userCircle);
					userContainer.appendChild(userDetails);
					userContainer.appendChild(addButton);

					listContainer.appendChild(userContainer);
				} else if (skipbutton !== true) {
					addButton = document.createElement("a");
					addButton.href = "#";
					addButton.id = val.username;
					addButton.onclick = function () {
						addfriend(this);
					};
					addButton.className = "apple-button-list";
					addButton.textContent = "Add";

					userDetails.appendChild(userName);
					userDetails.appendChild(userEmail);

					userContainer.appendChild(userCircle);
					userContainer.appendChild(userDetails);
					userContainer.appendChild(addButton);

					listContainer.appendChild(userContainer);
				}
				loadPFP(val.username, '-pfp');
			}
		});
		return;
	} else {
		let result;
		const usernamesJSON = sessionStorage.getItem("usersInfo");
		if (usernamesJSON) {
			const usernames = JSON.parse(usernamesJSON);
			console.log(usernames);

			result = usernames.filter(entry =>
				entry.username.toLowerCase().includes(value.toLowerCase()) ||
				entry.email.toLowerCase().includes(value.toLowerCase())
			);
			console.log(result)
		} else {
			console.log("No user information found in sessionStorage.");
		}
		console.log("Accepted");
		//$("#load-users").fadeIn("fast");

		let url = `${srv}/search?search=${value}`;
		const data = result;
		if (JSON.stringify(data) === '[]') {
			$("#load-users").fadeOut("fast", function () {
				let containerId = "list-container";
				var listContainer = document.getElementById(containerId);
				listContainer.style.textAlign = "center";
				listContainer.style.marginTop = "50px";
				listContainer.innerHTML = `No user found named ${value}`;
			});
			return;
		} else {
			console.log(`${JSON.stringify(data)} != "[]"`);
		}
		let userlist = data;
		let containerId = "list-container";
		var listContainer = document.getElementById(containerId);
		listContainer.style.textAlign = "";
		listContainer.style.marginTop = "";
		listContainer.innerHTML = "<!--Empty-->";

		// Fetch emails for each user individually
		userlist.forEach(val => {
			if (val.username === localStorage.getItem("t50-username")) {
				return;
			}
			let sentRequests;
			let skipbutton;
			let addButton;
			if (listContainer.querySelector(`#user-${val.username}-email`) === null) {
				var userContainer = document.createElement("div");
				userContainer.className = "list-user-info";

				var userCircle = document.createElement("div");
				userCircle.className = "user-circle";
				userCircle.innerHTML = `<img src="loading-circle.gif" id="${val.username}-pfp" alt="User ${val.username} Image">`;
				var userDetails = document.createElement("div");
				userDetails.className = "user-details";

				var userName = document.createElement("div");
				userName.className = "user-name";
				userName.textContent = val.username;

				var userEmail = document.createElement("div");
				userEmail.className = "user-email";
				userEmail.id = `user-${val.username}-email`;
				userEmail.textContent = val.email;
				if (val.friends === true) {
					skipbutton = true;
					userDetails.appendChild(userName);
					userDetails.appendChild(userEmail);

					userContainer.appendChild(userCircle);
					userContainer.appendChild(userDetails);

					listContainer.appendChild(userContainer);
					let localValue = localStorage.getItem("sent_friend_requests");
					let requests = localValue ? JSON.parse(localValue) : [];
					let indexToRemove = requests.indexOf(val.username);
					if (indexToRemove !== -1) {
						requests.splice(indexToRemove, 1);
						localStorage.setItem("sent_friend_requests", JSON.stringify(requests));
					} else {
						console.log("Username not found in the array");
					}
				}

				//sentRequests = usersSent;
				console.log(val.username, "-->", val.requested)
				if (skipbutton !== true && val.requested === true) {
					addButton = document.createElement("a");
					addButton.href = "#";
					addButton.id = val.username;
					addButton.onclick = function () {
						shake_me(this.id);
					};
					addButton.className = "apple-button-list";
					addButton.textContent = "Sent";
					userDetails.appendChild(userName);
					userDetails.appendChild(userEmail);

					userContainer.appendChild(userCircle);
					userContainer.appendChild(userDetails);
					userContainer.appendChild(addButton);

					listContainer.appendChild(userContainer);
				} else if (skipbutton !== true) {
					addButton = document.createElement("a");
					addButton.href = "#";
					addButton.id = val.username;
					addButton.onclick = function () {
						addfriend(this);
					};
					addButton.className = "apple-button-list";
					addButton.textContent = "Add";

					userDetails.appendChild(userName);
					userDetails.appendChild(userEmail);

					userContainer.appendChild(userCircle);
					userContainer.appendChild(userDetails);
					userContainer.appendChild(addButton);

					listContainer.appendChild(userContainer);
				}
				loadPFP(val.username, '-pfp');
			}
		});
	}
}




function change_password() {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Cannot change while servers are offline.');
		return;
	}
	navigator("change_password");
	let currentPassword = document.getElementById("current_pswd");
	let newpswd = document.getElementById("new_pswd");
	let confirm = document.getElementById("confirm_pswd");
	currentPassword.value = "";
	newpswd.value = "";
	confirm.value = "";
	$("#same_pswd").fadeOut("fast");
	$("#old_pswd").fadeOut("fast");
	$("#wrong_pswd").fadeOut("fast");
	document.getElementById('gateway').style.filter = 'blur(50px)';
	document.getElementById("usr-img-chpswd").src = document.getElementById("usr-img-opt").src;
	document.getElementById("usr-name-chpswd").innerHTML = document.getElementById("usr-name-opt").innerHTML;
	document.getElementById("usr-email-chpswd").innerHTML = document.getElementById("usr-email-opt").innerHTML;
	$("#pswd_secure").fadeOut("fast", function () {
		$("#password_change").fadeIn("fast");
	});
}

function return_to_options(where) {
	try {
		goback.play()
	} catch (error) {
		console.error("Couldn't play audio")
	}

	if (where) {
		if (where === "security") {
			$("#pswd_secure").fadeOut("fast", function () {
				$("#main_popup_settings").fadeIn("fast")
				//navigator("return_settings")
			})
		} else if (where === "usr-emails") {
			$("#username_email_icon_show").fadeOut("fast", function () {
				$("#main_settings").fadeIn("fast")
				//navigator("return_settings")
			})
		} else if (where === "add_friends") {
			//$("#bottom-logo").fadeIn("fast")
			$("#add_friends").fadeOut("fast", function () {
				$("#evox_social").fadeIn("fast")
			})
		} else if (where === "requests") {
			$("#friend_requests").fadeOut("fast", function () {
				$("#evox_social").fadeIn("fast")
			})
		} else if (where === "friends") {
			$("#friends").fadeOut("fast", function () {
				$("#main_settings").fadeIn("fast")
			})
		} else if (where === "user-friend") {
			document.getElementById("user-video-forDisplay").src = ""
			var element = document.querySelector('[id^="secureline-"]');

			// Check if the element is found
			if (element) {
				// Change the id attribute to "secureline-username"
				element.id = "secureline-username";
			} else {
				//console.error('Element with id starting with "secureline-" not found');
			}
			$("#user-friend").fadeOut("fast", function () {
				$("#friends").fadeIn("fast")
			})
		} else if (where === "gateway_settings") {
			settings()
			vox()
			$("#background_change").fadeOut("fast", function () {
				$("#main_popup_settings").fadeIn("fast")
			})
		} else if (where === "evox_social") {
			$("#evox_social").fadeOut("fast", function () {
				$("#gridSection").fadeIn("fast")
			})
		} else if (where === "password_change") {
			document.getElementById('gateway').style.filter = 'blur(20px)'
			$("#password_change").fadeOut("fast", function () {
				$("#pswd_secure").fadeIn("fast")
			})
		} else if (where === "authip") {
			$("#authips").fadeOut("fast", function () {
				$("#main_popup_settings").fadeIn("fast")
				//navigator("return_settings")
			})
		} else if (where === "bg_settings") {
			$("#background_change_color").fadeOut("fast", function () {
				$("#background_change").fadeIn("fast")
			})
		} else if (where === "birth") {
			$("#date_of_birth_change").fadeOut("fast", function () {
				$("#main_settings").fadeIn("fast")
			})
		} else if (where === "add_email") {
			$("#verify_email").fadeOut("fast", function () {
				$("#add_email").fadeOut("fast", function () {
					$("#pswd_secure").fadeIn("fast")
				})
			})

		} else if (where === "cancel_addemail") {
			$("#verify_email").fadeOut("fast", function () {
				$("#username_email_icon_show").fadeIn("fast")
			})
		} else if (where === "app_use_info") {
			$("#apps_using_evox").fadeOut("fast", function () {
				$("#pswd_secure").fadeIn("fast")
			})
		} else if (where === "evox_store") {
			$("#store").fadeOut("fast", function () {
				$("#main_popup_settings").fadeIn("fast")
			})
		} else if (where === "cryptox") {
			$("#cryptox_info").fadeOut("fast", function () {
				$("#main_popup_settings").fadeIn("fast")
				//navigator("return_settings")
			})
		} else if (where === "coming") {
			//$("#vox").fadeIn("fast")
			$("#coming").fadeOut("fast", function () {
				$("#main_popup_settings").fadeIn("fast")
			})
		} else if (where === "reset") {
			return;
			const elementsToHide = [
				"pswd_secure",
				"main_settings",
				"username_email_icon_show",
				"main_settings",
				"add_friends",
				"evox_social",
				"friend_requests",
				"evox_social",
				"friends",
				"evox_social",
				"user-friend",
				"friends",
				"background_change",
				"evox_social",
				"password_change",
				"pswd_secure",
				"authips",
				"main_settings",
				"background_change_color",
				"background_change",
				"date_of_birth_change",
				"username_email_icon_show",
				"add_email",
				"username_email_icon_show",
				"verify_email",
				"username_email_icon_show",
				"apps_using_evox",
				"pswd_secure",
				"store",
				"cryptox_info",
				"main_settings"
			];

			elementsToHide.forEach(id => {
				const element = document.getElementById(id);
				if (element) {
					element.style.display = "none";
				} else {
					console.error(`Element with id "${id}" not found`);
				}
			});
		}
	}
}

function showUploadBox() {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Servers Are Offline!')
		return;
	}
	document.getElementById('upload-box').click();
}

function handleFileSelect() {
	const input = document.getElementById('upload-box');
	const file = input.files[0];

	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const base64String = e.target.result;
			// Now you have the base64 representation of the selected image
			//console.log(base64String);
			document.getElementById("upload-box").disabled = true
			document.getElementById("usr-img-opt").src = "./reloading.gif"
			cancelPFPOpt()
			fetch(`${srv}/profiles`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: localStorage.getItem("t50-username"),
					pfp: base64String
				})
			})
				.then(response => response.text())
				.then(data => {
					console.log(data);
					if (data === "done") {
						console.log("All ok")
						document.getElementById("upload-box").disabled = false
						pfp("giveback")
							.then(value => {
								// Do something with the value
								document.getElementById("usr-img-opt").src = value
							})
							.catch(error => {
								// Handle errors
								console.error(error);
							});

					}
				})
				.catch(error => {
					console.error(error);
				});
		};
		reader.readAsDataURL(file);
	}

	// Reset the input value to allow selecting the same file again
	input.value = '';
}

function secureline(element) {
	settings()
	$("#user-friend").fadeOut("fast", function () {
		$("#main_popup_settings").fadeIn("fast")
	})
	//return_to_options('user-friend');
	//navigator('show_friends')
	//return_to_options('friends');
	//navigator('evox_social')
	//return_to_options('evox_social');
	navigator('settings_tonexus')
	//close_popup()
	show_sline()

	setTimeout(function () {
		const usernameSl = sessionStorage.getItem("showing_friend")
		var parts = usernameSl.split("-");
		var result = parts[1];
		const theElem = {
			'id': result
		}
		showchat(theElem)
	}, 400)


	//remove "secureline-" from element.id
	//window.location.href = `./secureline/?goto=${element.id}`
}

function bgch() {

	closevox()
	settings()
	try {
		var blurStyle = document.getElementById('bgimaget').style.filter;
		// Extract the blur amount from the filter style
		var blurAmount = parseFloat(blurStyle.match(/\d+/));

		console.log("Blur amount:", blurAmount, "pixels");
		var x = blurAmount; // Assuming x is 10 for example
		document.getElementById("myRange").value = x
	} catch (error) {
		console.error(error)
	}

	$("#loading").fadeIn("fast")
	navigator("bg")
	$("#main_popup_settings").fadeOut("fast", function () {
		$("#popup").addClass("active");
		//$("#popup").fadeIn("fast")
		$("#background_change").fadeIn("fast", function () {
			$("#loading").fadeOut("fast")
		})
		//$("#bottom-logo").fadeOut("slow")
	})
}

function addbg(element, convertMe) {
	let which;
	//must duplicate
	if (convertMe === "true") {

		const groundImgElements = document.querySelectorAll('[id^="groundImg"]');

		// Iterate through each element and remove the "active" class
		groundImgElements.forEach(element => {
			element.classList.remove('active');
		});
		const source = element.src
		element.src = "./internal/groundsLoading.gif"
		urlToBase64(source)
			.then(base64 => {
				which = base64
				if (element.classList.contains("active")) {
					console.log("Activated");
					return;
				}
				let name;
				if (which.includes("localhost")) {
					name = which.replace(/^http:\/\/localhost:8080\/t50-gateway-alpha\/bgs\//, '');
				} else {
					name = which.replace(/^https:\/\/evoxs.xyz\/t50-gateway-alpha\/bgs\//, '');
				}

				if (name === "default_bg.png") {
					document.getElementById("background").innerHTML = `<div id="bgimaget" class="background" style="background: radial-gradient(circle, #400000, #000000)"></div>`
				} else {
					document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('${which}');background-size: cover;background-position: center;filter: blur(10px);"></div>`
				}
				document.getElementById("st1").classList.remove("active")
				document.getElementById("st2").classList.remove("active")
				document.getElementById("st3").classList.remove("active")
				document.getElementById("st4").classList.remove("active")
				try {
					document.getElementById("st5").classList.remove("active")
				} catch (error) {
					console.error("Cannot find st5, normal err")
				}

				element.classList.add("active")
				localStorage.setItem("cbg", name)
				ac_complete.play()
				custombg()
				element.src = source
			})
			.catch(error => {
				console.error('Error converting image to base64:', error);
			});
	} else {
		which = element.src
		if (element.classList.contains("active")) {
			console.log("Activated");
			return;
		}
		let name;
		if (which.includes("localhost")) {
			name = which.replace(/^http:\/\/localhost:8080\/t50-gateway-alpha\/bgs\//, '');
		} else {
			name = which.replace(/^https:\/\/evoxs.xyz\/t50-gateway-alpha\/bgs\//, '');
		}

		if (name === "default_bg.png") {
			document.getElementById("background").innerHTML = `<div id="bgimaget" class="background" style="background: radial-gradient(circle, #400000, #000000)"></div>`
		} else {
			document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="background-image: url('${which}');background-size: cover;background-position: center;filter: blur(10px);"></div>`
		}
		document.getElementById("st1").classList.remove("active")
		document.getElementById("st2").classList.remove("active")
		document.getElementById("st3").classList.remove("active")
		document.getElementById("st4").classList.remove("active")
		try {
			document.getElementById("st5").classList.remove("active")
		} catch (error) {
			console.error("Cannot find st5, normal err")
		}

		element.classList.add("active")
		localStorage.setItem("cbg", name)
		ac_complete.play()
		custombg()
	}

}

function showUploadBox_BG() {
	document.getElementById('upload-box-bg').click();
}

function calculateImageSize(base64String) {
	// Remove the data URL prefix (e.g., 'data:image/jpeg;base64,')
	const base64WithoutPrefix = base64String.replace(/^data:image\/[a-z]+;base64,/, '');

	// Convert the base64 string to binary data
	const binaryData = atob(base64WithoutPrefix);

	// Calculate the size in megabytes
	const fileSizeInMB = binaryData.length / (1024 * 1024);

	return fileSizeInMB;
}

function handleFileSelect_BG() {
	const input = document.getElementById('upload-box-bg');
	const file = input.files[0];

	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const base64String = e.target.result;
			const totalSizeInMB = calculateImageSize(base64String);
			if (totalSizeInMB.toFixed(2) > 6.5) {
				alert(`File Is Too Large! (${totalSizeInMB.toFixed(2)}MB)`);
			} else {
				document.getElementById("background").innerHTML = `<div class="background" id="bgimaget" style="filter: blur(10px);background-image: url('${base64String}');background-size: cover;background-position: center;"></div>`
				document.getElementById("st1").classList.remove("active")
				document.getElementById("st2").classList.remove("active")
				document.getElementById("st3").classList.remove("active")
				document.getElementById("st4").classList.remove("active")
				document.getElementById("current").innerHTML = `<img class="active" id="st5" onclick="addbg(this)" src="${base64String}">`
				document.getElementById("current").style.display = ""
				localStorage.setItem("cbg", base64String)
				custombg()
			}

		};
		reader.readAsDataURL(file);
	}

	// Reset the input value to allow selecting the same file again
	input.value = '';
}

function complete_chpswd() {
	$("#old_pswd").fadeOut("fast")
	$("#wrong_pswd").fadeOut("fast")
	$("#same_pswd").fadeOut("fast")
	let currentPswd = document.getElementById("current_pswd").value
	let newpswd = document.getElementById("new_pswd").value
	let confirm = document.getElementById("confirm_pswd").value
	if (newpswd != confirm) {
		shake_me("confirm_pswd")
		return;
	}
	if (currentPswd === "") {
		shake_me("current_pswd")
		return;
	}
	if (newpswd === "") {
		shake_me("new_pswd")
		return;
	}
	if (currentPswd === newpswd) {
		$("#same_pswd").fadeIn("fast")
		console.log("Same Password!")
		return;
	}
	//info.email && info.password && info.username && info.newpass
	fetch(`${srv}/accounts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: localStorage.getItem("t50-email"),
			username: localStorage.getItem("t50-username"),
			password: currentPswd,
			newpass: newpswd
		})
	})
		.then(response => response.text())
		.then(data => {
			if (data === "Wrong Credentials") {
				shake_me("current_pswd")
				$("#wrong_pswd").fadeIn("fast")
			} else if (data === "Done") {
				localStorage.setItem("t50pswd", btoa(newpswd))
				$("#gateway").fadeOut("slow")
				$("#popup").removeClass("active");
				document.getElementById("current_pswd").value = ""
				document.getElementById("new_pswd").value = ""
				document.getElementById("confirm_pswd").value = ""
				const data = document.getElementById("gateway").innerHTML
				document.getElementById("gateway").innerHTML = `<div class="animation-ctn container">
					<div class="icon icon--order-success svg">
						<svg xmlns="http://www.w3.org/2000/svg" width="154px" height="154px">  
						  <g fill="none" stroke="#22AE73" stroke-width="2"> 
							<circle cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
							<circle id="colored" fill="#22AE73" cx="77" cy="77" r="72" style="stroke-dasharray:480px, 480px; stroke-dashoffset: 960px;"></circle>
							<polyline class="st0" stroke="#fff" stroke-width="10" points="43.5,77.8 63.7,97.9 112.2,49.4 " style="stroke-dasharray:100px, 100px; stroke-dashoffset: 200px;"/>   
						  </g> 
						</svg>
					  </div>
			  </div>`
				$("#gateway").fadeIn("slow", function () {
					setTimeout(function () {
						$("#gateway").fadeOut("slow", function () {
							document.getElementById("gateway").innerHTML = data
							$("#gateway").fadeIn("slow")
							$("#popup").addClass("active");
							ac_complete.play()
						})


					}, 500)
				})
			} else if (data === "Cannot set previous password") {
				$("#old_pswd").fadeIn("fast")
				disabled.play()
				return;
			}
			//console.log(data);

		})
		.catch(error => {
			console.error(error);
		});
}


document.getElementById("current_pswd").addEventListener("keypress", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("new_pswd").focus()
	}
});
document.getElementById("new_pswd").addEventListener("keypress", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("confirm_pswd").focus()
	}
});
document.getElementById("confirm_pswd").addEventListener("keypress", function (event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		complete_chpswd()
	}
});

function moretti() {
	document.getElementById("mt-disabled").src = "ZKZx.gif"
	document.getElementById("mt-disabled").style.width = "45px"
	document.getElementById("mt-disabled").style.height = "45px"
	setTimeout(function () {
		const oldhtml = document.getElementById("notification").innerHTML
		var notification = document.getElementById('notification');
		document.location.href = "UI.html"
		return;
		if (notification.className.includes("show")) {
			console.log("Notification Is Shown")
			notification.classList.remove('show');
			setTimeout(function () {
				document.getElementById("notification").innerHTML = "You are not in a safe environment.<br>Moretti cannot load."
				notification.classList.add('show');
				setTimeout(function () {
					notification.classList.remove('show');
				}, 2500);
			}, 500)
		} else {
			document.getElementById("notification").innerHTML = "You are not in a safe environment.<br>Moretti cannot load."
			notification.classList.add('show');
			setTimeout(function () {
				notification.classList.remove('show');
			}, 2500);
		}
		setTimeout(function () {
			document.getElementById("notification").innerHTML = oldhtml
		}, 3000)




	}, 1500)
	//alert(`This will redirect you to Moretti onion dashboard for ${localStorage.getItem("t50-username")}`)

	setTimeout(function () {
		document.getElementById("mt-disabled").src = "mt.jpg"
		document.getElementById("mt-disabled").style.width = "70px"
		document.getElementById("mt-disabled").style.height = "70px"
		shake_me('mt-disabled')
	}, 1500)

}



function dots() {
	if (sessionStorage.getItem("more_options")) {
		sessionStorage.removeItem("more_options")
		more_opt_c.play()
		//console.log("Hiding more options")
		var animatedButton = document.getElementById("animatedButton_notif");
		animatedButton.style.opacity = "0";
		animatedButton.style.transform = "translateY(20px)";
		setTimeout(function () {
			animatedButton.style.display = "none";
		}, 500); // Adjust the timing as needed

		var animatedButton2 = document.getElementById("animatedButton_chats");
		animatedButton2.style.opacity = "0";
		animatedButton2.style.transform = "translateY(20px)";
		setTimeout(function () {
			animatedButton2.style.display = "none";
		}, 500); // Adjust the timing as needed
	} else {
		more_opt.play()
		//console.log("Showing more options")
		sessionStorage.setItem("more_options", "active")
		var animatedButton = document.getElementById("animatedButton_notif");
		animatedButton.style.display = "block";
		setTimeout(function () {
			animatedButton.style.opacity = "1";
			animatedButton.style.transform = "translateY(0)";
		}, 100);
		//animatedButton_chats
		var animatedButton2 = document.getElementById("animatedButton_chats");
		animatedButton2.style.display = "block";
		setTimeout(function () {
			animatedButton2.style.opacity = "1";
			animatedButton2.style.transform = "translateY(0)";
		}, 100);
	}

}

function profile() {
	if (sessionStorage.getItem("blockBottomLogout") === "true") {
		shake_me("logout_confirm")
		return;
	}
	show_account()
	settings()
	navigator("return_settings")
}

function errors() {
	//id errors
	localStorage.setItem("error_DC", "seen")
	var notification = document.getElementById('notification');
	notification.classList.add('show');
	$("#errors").fadeOut("slow")
	setTimeout(function () {
		notification.classList.remove('show');
	}, 4500);

}

//let currentIndex = 0;
//
//function prevSlide() {
//	if (currentIndex > 0) {
//		currentIndex--;
//		updateCarousel();
//	}
//}
//
//function nextSlide() {
//	if (currentIndex < document.querySelectorAll('.app').length - 1) {
//		currentIndex++;
//		updateCarousel();
//	}
//}
//
//function updateCarousel() {
//	const carousel = document.getElementById('apps');
//	const offset = currentIndex * (carousel.offsetWidth / 2);
//	carousel.style.transform = `translateX(-${offset}px)`;
//}

function apparrow() {
	const div = document.getElementById('apps');
	const numElements = div.children.length;
	if (numElements > 5) {
		console.log("Showing buttons, length", numElements)
		$("#buttons").fadeIn("slow")
	} else {
		console.log("Not showing buttons, length", numElements)
	}
}


function vox() {
	if (sessionStorage.getItem("blockBottomLogout") === "true") {
		shake_me("logout_confirm")
		return;
	}
	navigator("closevox")
	qactions()
	document.getElementById("gateway").style.filter = "blur(25px)"
	document.getElementById("vox_cont").classList.add("active")
	//$("#settings").fadeOut("fast")
	$("#vox").fadeOut("fast")
	qastart.play()
	if (document.getElementById("animatedButton_notif").style.display === "block") {
		var animatedButton = document.getElementById("animatedButton_notif");
		animatedButton.style.opacity = "0";
		animatedButton.style.transform = "translateY(20px)";
		setTimeout(function () {
			animatedButton.style.display = "none";
		}, 500); // Adjust the timing as needed


	}
	if (document.getElementById("animatedButton_chats").style.display === "block") {
		var animatedButton2 = document.getElementById("animatedButton_chats");
		animatedButton2.style.opacity = "0";
		animatedButton2.style.transform = "translateY(20px)";
		setTimeout(function () {
			animatedButton2.style.display = "none";
		}, 500); // Adjust the timing as needed
	}
}
function closevox() {
	document.getElementById("gateway").style.filter = ""
	document.getElementById("vox_cont").classList.remove("active")
	//$("#settings").fadeIn("fast")
	//$("#vox").fadeIn("fast")
	qaexit.play()
	if (sessionStorage.getItem("more_options") === "active") {
		console.log("Showing more options")
		var animatedButton = document.getElementById("animatedButton_notif");
		animatedButton.style.display = "block";
		setTimeout(function () {
			animatedButton.style.opacity = "1";
			animatedButton.style.transform = "translateY(0)";
		}, 100);
		//animatedButton_chats
		var animatedButton2 = document.getElementById("animatedButton_chats");
		animatedButton2.style.display = "block";
		setTimeout(function () {
			animatedButton2.style.opacity = "1";
			animatedButton2.style.transform = "translateY(0)";
		}, 100);
	}
}

function clearNotifications() {
	$("#notif_container").fadeOut("fast")
	fetch(`${srv}/notifications?process=clear&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			show_notif("no", "reload")
			$("#notif_container").fadeIn("fast")
		}).catch(error => {
			console.error(error)
		})
}


function show_notif(nosound, reload) {
	console.log("Getting Account Notifications |FLR")
	//navigator("notifications")
	//document.getElementById('gateway').style.filter = 'blur(25px)'
	$("#miniLoading").fadeIn("slow")
	if (!localStorage.getItem("lastReceivedNotifications")) {
		$("#load-container").fadeIn("fast")
		$("#notif_container").fadeOut("fast")
	}

	fetch(`${srv}/notifications?process=get&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log("Successful Request |FLR")
			//console.log(data);
			var container = document.getElementById("notif_container");

			//if (!reload) {
			//	animatedButton.classList.remove("fadeInOut")
			//	animatedButton.innerHTML = `<svg id="notif" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" width="25px" height="25px" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet">
			//	<path stroke="#fff" stroke-width="1" class="clr-i-outline clr-i-outline-path-1" d="M32.51,27.83A14.4,14.4,0,0,1,30,24.9a12.63,12.63,0,0,1-1.35-4.81V15.15A10.81,10.81,0,0,0,19.21,4.4V3.11a1.33,1.33,0,1,0-2.67,0V4.42A10.81,10.81,0,0,0,7.21,15.15v4.94A12.63,12.63,0,0,1,5.86,24.9a14.4,14.4,0,0,1-2.47,2.93,1,1,0,0,0-.34.75v1.36a1,1,0,0,0,1,1h27.8a1,1,0,0,0,1-1V28.58A1,1,0,0,0,32.51,27.83ZM5.13,28.94a16.17,16.17,0,0,0,2.44-3,14.24,14.24,0,0,0,1.65-5.85V15.15a8.74,8.74,0,1,1,17.47,0v4.94a14.24,14.24,0,0,0,1.65,5.85,16.17,16.17,0,0,0,2.44,3Z"/><path class="clr-i-outline clr-i-outline-path-2" d="M18,34.28A2.67,2.67,0,0,0,20.58,32H15.32A2.67,2.67,0,0,0,18,34.28Z"/>
			//	<rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
			//</svg>`
			//}

			if (data === `{"notifications":[]}` || data === "No notifications!") {
				var a = document.createElement("a");
				a.href = "#";
				a.className = "apple-button";
				localStorage.setItem("notifications_seen", "0")
				a.appendChild(document.createTextNode("There's nothing here, yet." + " "));
				container.appendChild(a);
				return;
			}
			if (localStorage.getItem("lastReceivedNotifications") === data && container.innerHTML.includes("apple-button") === true) {
				console.log("No new notifications |FLR")
				console.log(container.innerHTML.includes("apple-button"), "|FLR")
				$("#load-container").fadeOut("fast", function () {
					$("#notif_container").fadeIn("fast")
				})
				$("#miniLoading").fadeOut("slow")
				return;
			} else {
				if (container.innerHTML.includes("apple-button") === true) {
					$("#notif_container").fadeOut("fast", function () {
						$("#load-container").fadeIn("fast", function () {
							$("#load-container").fadeOut("fast")
						})
					})
				}


				console.log("New Notifications |FLR")
				container.innerHTML = "";
				localStorage.setItem("lastReceivedNotifications", data)

			}

			let jsonData = JSON.parse(data);
			var numNotifications = jsonData.notifications.length;
			console.log(numNotifications)

			localStorage.setItem("notifications_seen", numNotifications)
			var notifications = jsonData.notifications;
			console.log(notifications);
			notifications.reverse(); // Reverse the order of notifications

			notifications.forEach(function (notification) {
				var image;
				const sentimage = notification.image;
				//if (!sentimage) {
				//	createNotificationElement('https://evoxs.xyz/notifications_assets/Gateway.png', notification);
				//	return;
				//}
				if (sentimage && !sentimage.includes("http")) {
					//indexdb
					//const image = loadPFPget()
					// Usage
					createNotificationElement('reloading-pfp.gif', notification);
					try {
						loadPFPflorida(sentimage, `${btoa(notification.timestamp)}`)
						console.log(`Notification image for user ${sentimage} has been set.`)
					} catch (error) {
						console.error("Internal Florida Notification User Image Failed", error)
					}



					//const url = `${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${notification.image}`;
					//fetch(url)
					//	.then(response => response.text())
					//	.then(data => {
					//		if (data.indexOf("base64") === -1) {
					//			// If it doesn't contain "base64", add the prefix
					//			data = "data:image/jpeg;base64," + data;
					//		}
					//		image = data;
					//		
					//	})
					//	.catch(error => {
					//		console.error(error);
					//	});

				} else {
					image = notification.image;
					createNotificationElement(image, notification);
				}
			});
			Promise.resolve().then(() => {
				// Add the transparent placeholder after the loop that adds user information
				var transparentPlaceholder = document.createElement("div");
				transparentPlaceholder.className = "transparent-placeholder";
				container.parentNode.appendChild(transparentPlaceholder);
				$("#miniLoading").fadeOut("slow")
				$("#load-container").fadeOut("fast", function () {
					$("#notif_container").fadeIn("fast")
				})


			}).catch(error => {
				console.error(error);
			});


		})
		.catch(error => {
			console.error('Fetch Error', error);

			if (localStorage.getItem("lastReceivedNotifications")) {
				var container = document.getElementById("notif_container");
				let data = localStorage.getItem("lastReceivedNotifications")
				console.log(data)
				if (data === `{"notifications":[]}` || data === "No notifications!") {
					var a = document.createElement("a");
					a.href = "#";
					a.className = "apple-button";
					localStorage.setItem("notifications_seen", "0")
					a.appendChild(document.createTextNode("There's nothing here, yet." + " "));
					container.appendChild(a);
					return;
				}

				let jsonData = JSON.parse(data);
				var numNotifications = jsonData.notifications.length;
				console.log(numNotifications)

				localStorage.setItem("notifications_seen", numNotifications)
				var notifications = jsonData.notifications;
				console.log(notifications);
				notifications.reverse(); // Reverse the order of notifications

				notifications.forEach(function (notification) {
					var image;
					const sentimage = notification.image;
					//if (!sentimage) {
					//	createNotificationElement('https://evoxs.xyz/notifications_assets/Gateway.png', notification);
					//	return;
					//}
					if (sentimage && !sentimage.includes("http")) {
						//indexdb
						//const image = loadPFPget()
						// Usage
						createNotificationElement('reloading-pfp.gif', notification, "offline");
						try {
							loadPFPflorida(sentimage, `${btoa(notification.timestamp)}`)
							console.log(`Notification image for user ${sentimage} has been set.`)
						} catch (error) {
							console.error("Internal Florida Notification User Image Failed", error)
						}



						//const url = `${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${notification.image}`;
						//fetch(url)
						//	.then(response => response.text())
						//	.then(data => {
						//		if (data.indexOf("base64") === -1) {
						//			// If it doesn't contain "base64", add the prefix
						//			data = "data:image/jpeg;base64," + data;
						//		}
						//		image = data;
						//		
						//	})
						//	.catch(error => {
						//		console.error(error);
						//	});

					} else {
						image = notification.image;
						createNotificationElement(image, notification, "offline");
					}
				});
				Promise.resolve().then(() => {
					// Add the transparent placeholder after the loop that adds user information
					var transparentPlaceholder = document.createElement("div");
					transparentPlaceholder.className = "transparent-placeholder";
					container.parentNode.appendChild(transparentPlaceholder);
					$("#miniLoading").fadeOut("slow")
					$("#load-container").fadeOut("fast", function () {
						$("#notif_container").fadeIn("fast")
					})


				}).catch(error => {
					console.error(error);
				});
			}
		});

	//document.getElementById("notifications").classList.add("active");
	//$("#settings").fadeOut("fast");
	//$("#vox").fadeOut("fast");
	if (!nosound) {
		//notifications.play();
	} else {
		//notice_s.play();
	}

	//if (!reload) {
	//	if (document.getElementById("animatedButton_notif").style.display === "block") {
	//		var animatedButton = document.getElementById("animatedButton_notif");
	//		animatedButton.style.opacity = "0";
	//		animatedButton.style.transform = "translateY(20px)";
	//		setTimeout(function () {
	//			animatedButton.style.display = "none";
	//		}, 500); // Adjust the timing as needed
	//	}
	//	if (document.getElementById("animatedButton_chats").style.display === "block") {
	//		var animatedButton2 = document.getElementById("animatedButton_chats");
	//		animatedButton2.style.opacity = "0";
	//		animatedButton2.style.transform = "translateY(20px)";
	//		setTimeout(function () {
	//			animatedButton2.style.display = "none";
	//		}, 500); // Adjust the timing as needed
	//	}
	//}

}

function createNotificationElement(image, notification, offline) {
	var container = document.getElementById("notif_container");
	var currentDate = null;

	var timestamp = new Date(notification.timestamp);
	var day = timestamp.getDate();
	var month = timestamp.getMonth() + 1; // Months are zero-based
	var formattedDate = (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month;

	// Check if the date separator already exists
	var existingDateSeparator = document.querySelector('.notifdate[data-date="' + formattedDate + '"]');
	if (!existingDateSeparator) {
		var dateSeparator = document.createElement("p");
		dateSeparator.className = "notifdate";
		dateSeparator.textContent = timestamp.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
		dateSeparator.setAttribute('data-date', formattedDate);
		container.appendChild(dateSeparator);
	}

	var parentDiv = document.createElement("div");
	parentDiv.className = "parent-popup-container"
	parentDiv.style.height = "auto"

	var a = document.createElement("a");
	a.href = "#";
	a.className = "apple-button notifOptions truncated-text-notifications";
	a.style.display = "flex";
	a.style.alignItems = "center";
	if (offline) {
		a.onclick = function () {
			//go_to(notification.app, this);
			error.play()
			createLocalNotification("Gateway", "Cannot Open Notification While Servers Are Offline!", 'incorrectacc.png')
		};
	} else {
		a.onclick = function () {
			//go_to(notification.app, this);
			notification_optBox(notification.app, this)
		};
	}


	var div = document.createElement("div");
	div.className = "user-circle";
	div.style.marginRight = "10px";
	div.style.width = "50px";
	div.style.height = "50px";

	var img = document.createElement("img");
	img.src = image;
	img.id = `${btoa(notification.timestamp)}-floridaINIT`
	img.alt = "User Image";
	div.appendChild(img);

	var p = document.createElement("p");
	p.textContent = notification.content;
	p.style.margin = "10px";

	var span = document.createElement("span");
	span.textContent = formattedDate;

	a.appendChild(div);
	a.appendChild(p);

	parentDiv.appendChild(a)
	container.appendChild(parentDiv);
}


function close_notif() {
	document.getElementById('gateway').style.filter = ''
	notif_out.play()
	document.getElementById("notifications").classList.remove("active")
	//$("#settings").fadeIn("fast")
	//$("#vox").fadeIn("fast")
	if (sessionStorage.getItem("more_options") === "active") {
		console.log("Showing more options")
		var animatedButton = document.getElementById("animatedButton_notif");
		animatedButton.style.display = "block";
		setTimeout(function () {
			animatedButton.style.opacity = "1";
			animatedButton.style.transform = "translateY(0)";
		}, 100);
		//animatedButton_chats
		var animatedButton2 = document.getElementById("animatedButton_chats");
		animatedButton2.style.display = "block";
		setTimeout(function () {
			animatedButton2.style.opacity = "1";
			animatedButton2.style.transform = "translateY(0)";
		}, 100);
	}
}

function oneo(element) {
	shake_me(element.id)
	console.log("PlaceHolder")
}

function show_sline() {
	toggleGlowAnimation()

	if (localStorage.getItem("cryptox-accepted") === "true") {
		navigator("show_sline")
		toggleGlowAnimation()
		sline_open.play()
		document.getElementById('gateway').style.filter = 'blur(35px)'
		document.getElementById("secureline").classList.add("active")
		$("#profile").fadeOut("fast")
		$("#vox").fadeOut("fast")
		$("#dots").fadeOut("fast")
		//$("#settings").fadeOut("fast")
		if (document.getElementById("animatedButton_notif").style.display === "block") {
			var animatedButton = document.getElementById("animatedButton_notif");
			animatedButton.style.opacity = "0";
			animatedButton.style.transform = "translateY(20px)";
			setTimeout(function () {
				animatedButton.style.display = "none";
			}, 500); // Adjust the timing as needed
		}
		if (document.getElementById("animatedButton_chats").style.display === "block") {
			var animatedButton2 = document.getElementById("animatedButton_chats");
			animatedButton2.style.opacity = "0";
			animatedButton2.style.transform = "translateY(20px)";
			setTimeout(function () {
				animatedButton2.style.display = "none";
			}, 500); // Adjust the timing as needed
		}
		getFriends()
		//getFriends('disablep')
	} else if (localStorage.getItem("cryptox-accepted") === "false") {
		click.play()
		var disabledDiv = document.body;
		disabledDiv.classList.toggle('disabled');
		document.getElementById("sline_cryptox").classList.add("active")
		document.getElementById("cookie__desc").innerHTML = `You recently disabled Cryptox. Secureline now requires you to enable Cryptox for enhanced security. Cryptox ensures
		your data is
		encrypted using advanced techniques, providing an extra layer of privacy protection.`
		//Prompt to reenable
	} else if (localStorage.getItem("cryptox-accepted") === "empty") {
		click.play()
		var disabledDiv = document.body;
		disabledDiv.classList.toggle('disabled');
		document.getElementById("sline_cryptox").classList.add("active")
	} else {
		notice("Please Wait..")
		const crypInt = setInterval(function () {
			if (localStorage.getItem("cryptox-accepted")) {
				toggleGlowAnimation()
				show_sline()
				clearInterval(crypInt)
			} else {
				return;
			}
		}, 500)
	}

}


function confirmLogout(re) {
	if (!re) {//see Unknown Error IPAUTH messed up local Values
		settings()
	}

	sessionStorage.setItem("blockBottomLogout", "true")
	document.getElementById("gateway").style.filter = "blur(10px)"
	document.getElementById("logout_confirm").classList.add("active")
}

function cancelLogout() {
	sessionStorage.removeItem("blockBottomLogout")
	document.getElementById("gateway").style.filter = ""
	document.getElementById("logout_confirm").classList.remove("active")
	settings()
}
function enableCryptox() {
	login_ok.play()
	fetch(`${srv}/cryptox?method=create&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(cryptoxcheck => {
			if (cryptoxcheck === "Cryptox Already Enabled" || cryptoxcheck === "Cryptox Enabled") {
				console.log("I can proceed!")
				//var disabledDiv = document.body;
				//disabledDiv.classList.toggle('disabled');
				//document.getElementById("sline_cryptox").classList.remove("active")
				//show_sline()
			} else {
				console.error(cryptoxcheck)
			}
		}).catch(error => {
			console.error(error);
		});
}

function cancelCryptox() {
	disabled.play()
	var disabledDiv = document.body;
	disabledDiv.classList.toggle('disabled');
	document.getElementById("sline_cryptox").classList.remove("active")
}

function close_sline() {

	let fixxint;
	try {
		clearInterval(profint)
		try {
			clearInterval(fixxint)
		} catch (error) {
			//
		}
	} catch (error) {
		fixxint = setInterval(function () {
			clearInterval(profint)
		})
	}
	document.getElementById('gateway').style.filter = ''
	sline_close.play()
	document.getElementById("secureline").classList.remove("active")
	//$("#profile").fadeIn("fast")
	//$("#vox").fadeIn("fast")
	//$("#dots").fadeIn("fast")
	//$("#settings").fadeIn("fast")
	if (sessionStorage.getItem("more_options") === "active") {
		console.log("Showing more options")
		var animatedButton = document.getElementById("animatedButton_notif");
		animatedButton.style.display = "block";
		setTimeout(function () {
			animatedButton.style.opacity = "1";
			animatedButton.style.transform = "translateY(0)";
		}, 100);
		//animatedButton_chats
		var animatedButton2 = document.getElementById("animatedButton_chats");
		animatedButton2.style.display = "block";
		setTimeout(function () {
			animatedButton2.style.opacity = "1";
			animatedButton2.style.transform = "translateY(0)";
		}, 100);
	}
}

function addbg_color(element) {
	$("#background_change").fadeOut("fast")
	$("#background_change_color").fadeIn("fast")
	setInterval(function () {
		let hex = document.getElementById("hexInput").value
		const selectedColor = hex;
		if (selectedColor !== "") {
			const gradient = `radial-gradient(circle, ${selectedColor}, #000000)`;
			image.style.background = gradient;
		}

	}, 200)
}

function submitcolorch() {
	let hex = document.getElementById("hexInput").value
	const selectedColor = hex;
	document.getElementById("background").innerHTML = `<div id="bgimaget" class="background" style="background: radial-gradient(circle, ${selectedColor}, #000000)"></div>`
	localStorage.setItem("cbg", selectedColor)
	document.getElementById("st1").classList.add("active")
	document.getElementById("st2").classList.remove("active")
	document.getElementById("st3").classList.remove("active")
	document.getElementById("st4").classList.remove("active")
	document.getElementById("bgname").innerHTML = "Custom Color"
	document.getElementById("bgname").style.color = "#fff"
	notice_s.play()
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
//output.innerHTML = slider.value;



// Get the computed style directly from the element's style object

slider.oninput = function () {

	//output.innerHTML = this.value;
	let inputamount = this.value
	var y = inputamount; // Assuming x is 10 for example

	// Solve for y
	//var y = x / 100;
	//var x = 100*y
	document.getElementById('bgimaget').style.filter = `blur(${y}px)`
	localStorage.setItem("cbg-blur", y)
}

function removeIP(element) {
	$("#authip_back_btn").fadeOut("fast", function () {
		document.getElementById("myAcc").style.filter = "blur(10px)"
		document.getElementById("removeIP_box").classList.add("active")
		const ip = element.innerHTML
		console.log("IP", ip)
		document.getElementById("ip-del-content").innerHTML = ip

	})


}

function cancel_ipremove() {

	document.getElementById("myAcc").style.filter = ""
	document.getElementById("removeIP_box").classList.remove("active")
	setTimeout(function () {
		$("#authip_back_btn").fadeIn("fast", function () {
			document.getElementById("ip-del-content").innerHTML = ""
		})
	}, 500)
}

function confirm_ipremove() {
	const ip = document.getElementById("ip-del-content").innerHTML
	fetch(`${srv}/authip?method=RemoveIP&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&ip=${ip}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log("IP Remove Data", data)
			document.getElementById("authips").style.filter = ""
			document.getElementById("removeIP_box").classList.remove("active")
			setTimeout(function () {
				$("#authip_back_btn").fadeIn("fast", function () {
					document.getElementById("ip-del-content").innerHTML = ""
				})
			}, 500)
			show_authip()
			ac_complete.play()

		}).catch(error => {
			console.error(error)
		})
}

//cancel_ipremove
//confirm_ipremove

function loadflrdinf() {
	$("#flrd_svg").fadeIn("fast")

	setTimeout(function () {
		const oldhtml = document.getElementById("notification").innerHTML
		var notification = document.getElementById('notification');
		if (notification.className.includes("show")) {
			$("#flrd_svg").fadeOut("fast")
			console.log("Notification Is Shown")
			notification.classList.remove('show');
			setTimeout(function () {
				if (sessionStorage.getItem("flrd_info")) {
					document.getElementById("notification").innerHTML = sessionStorage.getItem("flrd_info")
				} else {
					document.getElementById("notification").innerHTML = "Florida not ready!"
				}

				notification.classList.add('show');
				$("#flrd_svg").fadeOut("fast")
				setTimeout(function () {
					notification.classList.remove('show');
				}, 2500);
			}, 500)
		} else {
			$("#flrd_svg").fadeIn("fast")
			if (sessionStorage.getItem("flrd_info")) {
				document.getElementById("notification").innerHTML = sessionStorage.getItem("flrd_info")
			} else {
				document.getElementById("notification").innerHTML = "Florida not ready!"
			}
			notification.classList.add('show');
			$("#flrd_svg").fadeOut("fast")
			setTimeout(function () {
				notification.classList.remove('show');
			}, 2500);
		}
		setTimeout(function () {
			document.getElementById("notification").innerHTML = oldhtml
		}, 3000)




	}, 1500)
}

//date_of_birth_change
function birth_date() {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Cannot change while servers are offline.')
		return;
	}
	document.getElementById("usr-name-chbirth").innerHTML = localStorage.getItem("t50-username")
	document.getElementById("usr-email-chbirth").innerHTML = localStorage.getItem("t50-email")
	document.getElementById("usr-img-chbirth").src = document.getElementById("usr-img").src
	$("#main_settings").fadeOut("fast", function () {
		navigator("birth")
		$("#date_of_birth_change").fadeIn("fast")
	})
}

function isNumber(value) {
	return typeof value === 'number';
}

document.getElementById("day_b").addEventListener("keyup", function () {
	var input = this.value; // 'this' refers to the input field

	// Check if the input length is 2
	if (input.length === 2) {
		// Perform the action, for example, display an alert
		document.getElementById("month_b").focus()

		// You can add more actions here as needed
	}
});
document.getElementById("month_b").addEventListener("keyup", function () {
	var input = this.value; // 'this' refers to the input field

	// Check if the input length is 2
	if (input.length === 2 || input === "2" || input === "3" || input === "4" || input === "5" || input === "6" || input === "7" || input === "8" || input === "9") {
		// Perform the action, for example, display an alert
		document.getElementById("year_b").focus()

		// You can add more actions here as needed
	}
});
document.getElementById("year_b").addEventListener("keypress", function (event) {
	// Check if the Enter key is pressed
	if (event.keyCode === 13) {
		// Do something when Enter is pressed
		complete_birth()
		// You can add your desired action here
	}
});



function complete_birth() {
	let currentDate = new Date();
	let day = Number(document.getElementById("day_b").value)
	let month = Number(document.getElementById("month_b").value)
	let year = Number(document.getElementById("year_b").value)
	if (isNumber(day) && isNumber(month) && isNumber(year) && !isNaN(day) && !isNaN(month) && !isNaN(year)) {
		if (day > 0 && day <= 31 && month > 0 && month < 13 && year > 1899 && year < currentDate.getFullYear()) {
			document.getElementById("error_date").style.display = "none"
			let birthdate = `${day}/${month}/${year}`
			console.log(birthdate)
			fetch(`${srv}/accounts?birth=true&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&what=${birthdate}`)
				.then(response => {
					if (!response.ok) {
						throw new Error(`HTTP error! Status: ${response.status}`);
					}
					return response.text();
				})
				.then(data => {
					if (data === "Done") {
						return_to_options("birth")
						document.getElementById("day_b").value = ""
						document.getElementById("month_b").value = ""
						document.getElementById("year_b").value = ""
						getBirth()
						ac_complete.play()
					}

				}).catch(error => {
					console.error(error)
				})
		} else {
			console.log("Invalid Numbers")
			document.getElementById("error_date").style.display = ""
		}

	} else {
		console.log("Something isnt a number")
		document.getElementById("error_date").style.display = ""
	}



}

function getBirth() {
	fetch(`${srv}/accounts?birth=get&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			if (data === "") {
				document.getElementById("options_section_1_birthdate").innerHTML = "Not set"
			} else {
				document.getElementById("options_section_1_birthdate").innerHTML = data
				let dateParts = data.split('/');

				let day = parseInt(dateParts[0]);
				let month = parseInt(dateParts[1]);
				let year = parseInt(dateParts[2]);

				document.getElementById("day_b").value = day
				document.getElementById("month_b").value = month
				document.getElementById("year_b").value = year
			}


		}).catch(error => {
			console.error(error)
		})
}

function go_to(where, element) {
	// Find the <p> element inside the temporary element
	click.stop()
	notif_out.stop()
	const paragraphElement = element.querySelector('p');
	let paragraphContent;
	// Check if the <p> element exists
	if (paragraphElement) {
		// Get the text content of the <p> element
		paragraphContent = paragraphElement.textContent.trim();
		console.log(paragraphContent); // Output the content of <p>
	} else {
		console.log("No <p> element found in the provided HTML string.");
	}
	//where may be secureline or a url that contains an image for an evox app
	if (where === "Secureline") { //to change, copy change to 'paragraphContent.includes("Secureline") || paragraphContent.includes("IP") || paragraphContent.includes("Password")'
		close_notif()
		show_sline()
	} else if (paragraphContent.includes("IP")) {
		close_notif()
		profile()
		show_authip()
	} else if (paragraphContent.includes("Password")) {
		close_notif()
		profile()
	} else {
		console.log("Could not find what to do for", where)
	}

}

const appleButtons = document.querySelectorAll('.apple-button');

// Add click event listener to each apple button
appleButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Do something when the button is clicked
		console.log("Button clicked!");
		click.play()
	});
});

const appleButtonsWIC = document.querySelectorAll('.apple-button-withicon');

// Add click event listener to each apple button
appleButtonsWIC.forEach(button => {
	button.addEventListener('click', () => {
		// Do something when the button is clicked
		//console.log("Button clicked!");
		click_social.play()
	});
});

function printTimeOrDate(inputTime) {
	const inputDate = new Date(inputTime);
	const currentDate = new Date();

	const isToday = inputDate.getDate() === currentDate.getDate() &&
		inputDate.getMonth() === currentDate.getMonth() &&
		inputDate.getFullYear() === currentDate.getFullYear();

	if (isToday) {
		console.log(padWithZero(inputDate.getHours()) + ":" +
			padWithZero(inputDate.getMinutes()));
		return padWithZero(inputDate.getHours()) + ":" +
			padWithZero(inputDate.getMinutes());
	} else {
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		const day = inputDate.getDate();
		const month = months[inputDate.getMonth()];
		const year = inputDate.getFullYear();
		console.log(month + " " + day + " " + year);
		return month + " " + day + " " + year
	}
}

function padWithZero(number) {
	return number < 10 ? '0' + number : number;
}

function addemail() {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Cannot add emails while servers are offline.')
		return;
	}
	navigator('addemail')
	document.getElementById("usr-img-addemail").src = document.getElementById("usr-img").src
	document.getElementById("usr-name-addemail").innerHTML = document.getElementById("usr-name").innerHTML
	document.getElementById("usr-email-addemail").innerHTML = document.getElementById("usr-email").innerHTML
	$("#pswd_secure").fadeOut("fast", function () {
		$("#add_email").fadeIn("fast")
	})
}

function complete_addemail() {

	let email = document.getElementById("new_email").value
	if (email === "") {
		error.play()
		shake_me("new_email")
		return;
	} else {
		login_ok.play()
	}
	fetch(`${srv}/accounts?method=addemail&newemail=${email}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			document.getElementById("new_email").value = ""
			if (data === "Waiting For Verification") {
				document.getElementById("usr-img-vermail").src = document.getElementById("usr-img").src
				document.getElementById("usr-name-vermail").innerHTML = document.getElementById("usr-name").innerHTML
				document.getElementById("usr-email-vermail").innerHTML = `${document.getElementById("usr-email").innerHTML} && ${email}`
				document.getElementById("textfinalstep").innerHTML = `Final step! Please enter the code that was sent to ${email}.`
				sessionStorage.setItem("ver_code_email", email)
				$("#add_email").fadeOut("fast", function () {
					$("#verify_email").fadeIn("fast")
				})

			} else if (data === "Email in use") {
				shake_me("new_email")
				error.play()
			} else {
				error.play()
			}


		}).catch(error => {
			console.error(error)
		})
}

function verify_addemail() {
	let code = document.getElementById("email_new_ver_code").value
	let email = sessionStorage.getItem("ver_code_email")
	if (code === "") {
		error.play()
		shake_me("email_new_ver_code")
		return;
	}
	fetch(`${srv}/accounts?method=ver_new_email&email=${email}&what=${code}&mainemail=${localStorage.getItem("t50-email")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			document.getElementById("email_new_ver_code").value = ""
			if (data === "Complete") {
				ac_complete.play()
				sessionStorage.removeItem("ver_code_email")
				console.log("Complete!")
				navigator("password_secure")
				$("#verify_email").fadeOut("fast", function () {
					$("#pswd_secure").fadeIn("fast")
				})
				loademails()
			} else if (data === "Incorrect Code") {
				error.play()
				shake_me("email_new_ver_code")
			} else if (data === "Email set already") {
				error.play()
				navigator("password_secure")
				$("#verify_email").fadeOut("fast", function () {
					$("#pswd_secure").fadeIn("fast")
				})
				loademails()
			} else {
				console.error("Unknown response:", data)
				error.play()
			}


		}).catch(error => {
			console.error(error)
		})
}

function loademails() {
	fetch(`${srv}/accounts?method=getemails&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			if (data === "None") {
				return;
			}
			let thisJson = JSON.parse(data)
			const container = document.getElementById("more_emails0");
			container.innerHTML = ""

			thisJson.forEach(email => {
				const link = document.createElement("a");
				link.href = "#";
				link.classList.add("apple-button");
				link.innerHTML = email;
				link.onclick = function () {
					removeEmail(this)
				};
				container.appendChild(link);
			});


		}).catch(error => {
			console.error(error)
		})

}

function sign_in_wevox() {
	navigator("sign_in_wevox")
	let container = document.getElementById("more_apps")
	let appshtml = document.getElementById("apps").innerHTML
	if (appshtml.includes("load('images')")) {
		//console.log("Images Available")
		container.innerHTML = `<a onclick="app_use_info('images')" href="#" class="apple-button-withicon"><img style="width: auto; height: 40px; margin-right: 10px; border-radius: 7px;box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);" src="t50-img.png">
		T50 Images
		<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
		<path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#666"></path>
	</svg></a>`
	} else if (localStorage.getItem("images-owned") === "true") {
		container.innerHTML = `<a onclick="app_use_info('images')" href="#" class="apple-button-withicon"><img style="width: auto; height: 40px; margin-right: 10px; border-radius: 7px;box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);" src="t50-img.png">
		T50 Images
		<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
		<path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#666"></path>
	</svg></a>`
	}

	if (localStorage.getItem("notes-owned") === "true") {
		container.innerHTML = `${container.innerHTML}<a onclick="app_use_info('evox_notes')" href="#" class="apple-button-withicon"><img style="width: auto; height: 40px; margin-right: 10px; border-radius: 7px;box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);" src="EvoxNotes.png">
		Evox Notes
		<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
		<path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#666"></path>
	</svg></a>`
	}
	if (localStorage.getItem("chatvia-owned") === "true") {
		container.innerHTML = `${container.innerHTML}<a onclick="app_use_info('chatvia')" href="#" class="apple-button-withicon"><img style="width: auto; height: 40px; margin-right: 10px; border-radius: 7px;box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);" src="chatvia-img.png">
		Chatvia
		<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
		<path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#666"></path>
	</svg></a>`
	}

	$("#pswd_secure").fadeOut("fast", function () {
		$("#apps_using_evox").fadeIn("fast")
	})
	console.log("Evox Apps Info Show clicked")
}

function removeEmail(element) {
	disabled.play()
	//document.getElementById("hide_for_rememail").style.display = "none"
	$("#navigator").fadeOut("fast")
	document.getElementById("myAcc").style.filter = "blur(10px)"
	document.getElementById("confirm_email_remove").classList.add("active")
	document.getElementById("email-del-content").innerHTML = element.innerHTML
}

function cancelRemoveEmail() {
	document.getElementById("myAcc").style.filter = ""
	document.getElementById("confirm_email_remove").classList.remove("active")
	setTimeout(function () {
		$("#navigator").fadeIn("fast")
	}, 550)

	document.getElementById("email-del-content").innerHTML = ""
}

function confirmRemoveEmail() {
	let emailtorem = document.getElementById("email-del-content").innerHTML
	fetch(`${srv}/accounts?method=removeemail&email=${emailtorem}&password=${atob(localStorage.getItem("t50pswd"))}&mainemail=${localStorage.getItem("t50-email")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			console.log(data)
			document.getElementById("email_new_ver_code").value = ""
			if (data === "Complete") {
				ac_complete.play()
				document.getElementById("myAcc").style.filter = ""
				document.getElementById("confirm_email_remove").classList.remove("active")
				setTimeout(function () {
					$("#navigator").fadeIn("fast")
					navigator("sett_def")
					//document.getElementById("hide_for_rememail").style.display = ""
				}, 550)

				document.getElementById("email-del-content").innerHTML = ""
				loademails()
			} else {
				console.error("Unknown response:", data)
				error.play()
			}


		}).catch(error => {
			console.error(error)
		})
}

function qactions() {
	fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=getRequests`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			if (data === "None") {
				//Noting

			} else {
				let requests = JSON.parse(data)
				const reqcount = requests.length;
				if (reqcount >= 1) {
					//show req
					$("#friend_req_fastacc").fadeIn("fast")
					document.getElementById("friend_req_fastacc").innerHTML = `Accept All Friend Requests <span>(${reqcount})</span>`
				}
			}

		}).catch(error => {
			console.error(error);
		});

	//get weather
	fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Athens,GR?key=QE9ZKFMB84GFA95Z7EJCR5ASG`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(weather => {
			var responseData = JSON.parse(weather)
			var celsiusValue = fahrenheitToCelsius(responseData.currentConditions.temp);
			var temperature = celsiusValue;
			var windSpeed = responseData.currentConditions.visibility;
			if (temperature < 21) {
				document.getElementById("weather-icon").src = "./icons/temperature-low.svg"
			} else {
				document.getElementById("weather-icon").src = "./icons/temperature-sun.svg"
			}
			if (temperature < 14) {
				document.getElementById("weather-icon").src = "./icons/temperature-snow.svg"
			}

			// Creating HTML elements to display weather information
			document.getElementById("weather-c").innerHTML = "Temperature: " + temperature + "°C"
			document.getElementById("weather-vis").innerHTML = "Visibility: " + windSpeed + " km"
		}).catch(error => {
			console.error(error);
		});

}

function fahrenheitToCelsius(fahrenheit) {
	var celsius = (fahrenheit - 32) * (5 / 9);
	return Math.round(celsius);
}


function qa_pfp() {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Servers Are Offline!')
		return;
	}
	showUploadBox()
}

function coming() {
	$("#vox").fadeOut("fast")
	navigator("coming")
	$("#main_popup_settings").fadeOut("fast", function () {
		$("#coming").fadeIn("fast")
	})

	//error.play()
}


function store() {
	navigator("store")
	let appshtml = document.getElementById("apps").innerHTML

	let chatvia = document.getElementById("chatvia-get")
	let tasco = document.getElementById("tasco-get")
	let gateway = document.getElementById("gateway-get")
	let images = document.getElementById("images-get")
	let notes = document.getElementById("notes-get")

	let owned_json = []
	if (appshtml.includes("load('images')")) {
		//console.log("Images Available")
		owned_json.push("images")
	} else if (localStorage.getItem("images-owned") === "true") {
		owned_json.push("images")
	}

	if (localStorage.getItem("notes-owned") === "true") {
		owned_json.push("notes")
	}
	if (localStorage.getItem("chatvia-owned") === "true") {
		owned_json.push("chatvia")
	}

	if (owned_json.includes("images")) {
		images.innerHTML = "OPEN"
	}
	if (owned_json.includes("notes")) {
		notes.innerHTML = "OPEN"
	}
	if (owned_json.includes("chatvia")) {
		chatvia.innerHTML = "OPEN"
	}
	//shake_me("evox_store")
	$("#main_popup_settings").fadeOut("fast", function () {
		$("#store").fadeIn("fast")
	})

	//error.play()
}

function getNOpen(app, view) {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Sorry. Servers Are Offline')
		return;
	}
	var getButton = document.getElementById(`${app}-get`);
	var oldInner = getButton.innerHTML;
	if (oldInner === "CURRENT") {
		getButton.style.backgroundColor = "#cb180074";
		shake_me(`${app}-get`);
		setTimeout(function () {
			getButton.style.backgroundColor = "#007aff";
		}, 1200);
		return;
	}
	//var getButton = element.querySelector('.get-button');

	// Change the inner HTML of the <span> element
	if (view === "2") {
		load(app)
		return;
	} else {
		getButton.style.height = "17px"
		getButton.style.width = "30px"
		//height: 17px; width: 30px


		getButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55%" height="55%">
	<circle cx="50" cy="50" r="45" fill="none" stroke="#fff" stroke-width="10">
		<animate attributeName="stroke-dasharray" values="0, 200;200, 0" dur="2s"
			repeatCount="indefinite" />
		<animate attributeName="stroke-dashoffset" values="0, -200;-200, -900" dur="2s"
			repeatCount="indefinite" />
	</circle>
</svg>`;
	}

	setTimeout(function () {

		if (oldInner === "OPEN") {
			return_to_options('evox_store'); navigator('settings_tonexus')
			close_popup()
			load(app)
			getButton.style.height = "auto"
			getButton.style.width = "auto"
			//height: 17px; width: 30px
			getButton.innerHTML = oldInner;
			return;
		}
		getButton.style.height = "auto"
		getButton.style.width = "auto"
		//height: 17px; width: 30px
		getButton.innerHTML = oldInner;
		shake_me(`${app}-get`)
		notice("Access Denied")
	}, 1500)

}


function getNOpenNX(app, view, version, isNewType, appName) {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Sorry. Servers Are Offline')
		return;
	}
	if (isNewType === 'customApp') {
		const getCC = JSON.parse(localStorage.getItem("customApps"))
		const appVal = getCC[appName]
		console.log(getCC)
		console.log(appVal)
		var oldHTML = document.getElementById("app-cont").innerHTML
		var TriggeredButton = document.getElementById(`${app}-nx`);
		$("#app-cont").fadeOut("slow", function () {
			document.getElementById("app-cont").innerHTML = `<button class="evox-app">` + TriggeredButton.innerHTML + `</div>`
			document.getElementById(`timeUsed-${app}`).innerHTML = `Loading.. <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="16px" height="16px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
            xml:space="preserve">
            <path fill="#fff"
                d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25"
                    to="360 25 25" dur="0.6s" repeatCount="indefinite" />
            </path>
        </svg>`
			document.getElementById(`tag-${app}`).style.display = "none"
			$("#app-cont").fadeIn("slow", function () {
				setTimeout(function () {
					load(appVal.name, 'custom', appVal.dir)
					setTimeout(function () {
						$("#app-cont").fadeOut("slow", function () {
							document.getElementById("app-cont").innerHTML = oldHTML
							$("#app-cont").fadeIn("slow", function () {

							})
						})
					}, 1500)
				}, 500)
			})
		})
	}
	if (version === "epsilon") {
		var oldHTML = document.getElementById("app-cont").innerHTML
		var TriggeredButton = document.getElementById(`${app}-nx`);
		$("#app-cont").fadeOut("slow", function () {
			document.getElementById("app-cont").innerHTML = `<button class="evox-app">` + TriggeredButton.innerHTML + `</div>`
			document.getElementById(`timeUsed-${app}`).innerHTML = `Loading.. <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="16px" height="16px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
            xml:space="preserve">
            <path fill="#fff"
                d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25"
                    to="360 25 25" dur="0.6s" repeatCount="indefinite" />
            </path>
        </svg>`
			document.getElementById(`tag-${app}`).style.display = "none"
			$("#app-cont").fadeIn("slow", function () {
				setTimeout(function () {
					load(app)
					setTimeout(function () {
						$("#app-cont").fadeOut("slow", function () {
							document.getElementById("app-cont").innerHTML = oldHTML
							$("#app-cont").fadeIn("slow", function () {

							})
						})
					}, 1500)
				}, 500)
			})
		})

	} else {
		var getButton = document.getElementById(`${app}-nx`);
		var oldInner = getButton.innerHTML;
		if (oldInner === "CURRENT") {
			getButton.style.backgroundColor = "#cb180074";
			shake_me(`${app}-nx`);
			setTimeout(function () {
				getButton.style.backgroundColor = "#007aff";
			}, 1200);
			return;
		}
		//var getButton = element.querySelector('.get-button');

		// Change the inner HTML of the <span> element
		if (view === "2") {
			load(app)
			return;
		} else {
			getButton.style.height = "17px"
			getButton.style.width = "30px"
			//height: 17px; width: 30px


			getButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55%" height="55%">
	<circle cx="50" cy="50" r="45" fill="none" stroke="#fff" stroke-width="10">
		<animate attributeName="stroke-dasharray" values="0, 200;200, 0" dur="2s"
			repeatCount="indefinite" />
		<animate attributeName="stroke-dashoffset" values="0, -200;-200, -900" dur="2s"
			repeatCount="indefinite" />
	</circle>
</svg>`;
		}

		setTimeout(function () {

			if (oldInner === "OPEN") {
				load(app)
				getButton.style.height = "auto"
				getButton.style.width = "auto"
				//height: 17px; width: 30px
				getButton.innerHTML = oldInner;
				return;
			}
			getButton.style.height = "auto"
			getButton.style.width = "auto"
			//height: 17px; width: 30px
			getButton.innerHTML = oldInner;
			shake_me(`${app}-nx`)
			notice("Access Denied")
		}, 1500)
	}


}

function cryptoxToggleUI() {
	var checkbox = document.getElementById('cryptox-status');
	checkbox.checked = !checkbox.checked;
}


function cryptox(no) {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Cannot view while servers are offline.')
		return;
	}
	$("#stuck").fadeIn("fast")
	fetch(`${srv}/accounts?method=cryptox-status&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(status => {
			$("#stuck").fadeOut("fast")
			if (!no) {
				navigator("cryptox")
			}


			if (status.includes("Enabled")) {
				console.log("Enabling input")
				var parts = status.split(":");
				var iv = parts[1].trim();
				document.getElementById("cryptox_stats").innerHTML = `Operations<label style="position: absolute;top: 50%;right: 20px;" class="toggle">
				<input onclick="changeCryptox()" id="cryptox-status" type="checkbox" checked>
				<span></span>
			</label>`
				//cryptoxToggleUI()//default html is disabled, so enable it
				document.getElementById("cryptox-iv").style.display = "block"
				document.getElementById("cryptox-iv").innerHTML = iv
			} else if (status === "Disabled") {
				document.getElementById("cryptox_stats").innerHTML = `Operations<label style="position: absolute;top: 50%;right: 20px;" class="toggle">
				<input onclick="changeCryptox()" id="cryptox-status" type="checkbox">
				<span></span>
			</label>`
				document.getElementById("cryptox-iv").style.display = "none"
			} else if (status === "Ready To Setup") {
				//hide toggle show button to create
				document.getElementById("cryptox_stats").innerHTML = `Operations<label style="position: absolute;top: 50%;right: 20px;" class="toggle">
				<input onclick="changeCryptox()" id="cryptox-status" type="checkbox">
				<span></span>
			</label>`
				document.getElementById("cryptox-status").checked = false
				document.getElementById("cryptox-iv").style.display = "none"
			}

			$("#main_popup_settings").fadeOut("fast", function () {
				$("#cryptox_info").fadeIn("fast")
			})

		}).catch(error => {
			console.error(error);
		});

}

function notifications_options() {
	navigator("notifications_main")
	console.log("Clicked!")
	$("#main_popup_settings").fadeOut("fast", function () {
		$("#notifications_options").fadeIn("fast")
	})
}

function notif_goback() {
	$("#notifications_options").fadeOut("fast", function () {
		$("#main_popup_settings").fadeIn("fast")
	})
}
function getNShow(element) {
	const app = element.innerHTML
	if (app.includes("Gateway")) {
		console.log("Showing Gateway Florida Notifications")
		$("#notifications_options").fadeOut("fast", function () {
			$("#gateway-florida").fadeIn("fast")
		})
		navigator("notif_gateway")
	}
	if (app.includes("Tasco")) {
		console.log("Showing Tasco Florida Notifications")
		$("#notifications_options").fadeOut("fast", function () {
			$("#tasco-florida").fadeIn("fast")
		})
		navigator("notif_tasco")
	}
	if (app.includes("Secureline")) {
		console.log("Showing Secureline Notifications")
		$("#notifications_options").fadeOut("fast", function () {
			$("#secureline-florida").fadeIn("fast")
		})
		navigator("notif_secureline")
	}
	if (app.includes("Cryptox")) {
		console.log("Showing Cryptox Notifications")
		$("#notifications_options").fadeOut("fast", function () {
			$("#cryptox-florida").fadeIn("fast")
		})
		navigator("notif_cryptox")
	}
}

function getNShowNexus(element) {
	//const app = element.innerHTML
	//if (app.includes("Gateway")) {
	//	console.log("Showing Gateway Florida Notifications")
	//	$("#notifications_options").fadeOut("fast", function () {
	//		$("#gateway-florida").fadeIn("fast")
	//	})
	//}
}

function changeCryptox() {
	let toggle = document.getElementById("cryptox-status").checked
	console.log(toggle)
	if (toggle === true) {
		console.log("Disable")
		createLocalNotification("Gateway", 'You cannot disable cryptox operations at the moment.')
		cryptox("no")
		document.getElementById("warn-cryptox").style.backgroundColor = "#7d121296"
		setTimeout(function () {
			document.getElementById("warn-cryptox").style.backgroundColor = "transparent"
		}, 3500)
		return;
		cryptox()
		fetch(`${srv}/cryptox?method=disable&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(check => {
				if (check === "Done") {
					console.log("Cryptox Disabled")
					cryptox()
				} else {
					console.error(check)
				}
			}).catch(error => {
				console.error(error);
			});
	} else {
		console.log("Enable")
		login_ok.play()
		fetch(`${srv}/cryptox?method=create&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(cryptoxcheck => {
				if (cryptoxcheck === "Cryptox Already Enabled" || cryptoxcheck === "Cryptox Enabled") {
					console.log("I can proceed! Cryptox Enabled")
					cryptox("no")
				} else {
					console.error(cryptoxcheck)
				}
			}).catch(error => {
				console.error(error);
			});
	}
}

function navigator(w, f) {
	console.log("Navigator:", w)

	const sett_def = `
	<div onclick="settings();this.classList.add('rotate')" class="circle">
	<svg id="rotateIcon" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M19.9818 21.6364L21.7093 22.3948C22.0671 22.5518 22.4849 22.4657 22.7517 22.1799C23.9944 20.8492 24.9198 19.2536 25.4586 17.5131C25.5748 17.1376 25.441 16.7296 25.1251 16.4965L23.5988 15.3698C23.1628 15.0489 22.9 14.5403 22.9 13.9994C22.9 13.4586 23.1628 12.95 23.5978 12.6297L25.1228 11.5035C25.4386 11.2703 25.5723 10.8623 25.4561 10.487C24.9172 8.74611 23.9912 7.1504 22.7478 5.81991C22.4807 5.53405 22.0626 5.44818 21.7048 5.60568L19.9843 6.36294C19.769 6.45838 19.5385 6.507 19.3055 6.50663C18.4387 6.50572 17.7116 5.85221 17.617 4.98937L17.4079 3.11017C17.3643 2.71823 17.077 2.39734 16.6928 2.31149C15.8128 2.11485 14.9147 2.01047 14.0131 2.00006C13.0891 2.01071 12.19 2.11504 11.3089 2.31138C10.9245 2.39704 10.637 2.71803 10.5933 3.11017L10.3844 4.98794C10.3244 5.52527 10.0133 6.00264 9.54617 6.27415C9.07696 6.54881 8.50793 6.58168 8.01296 6.36404L6.29276 5.60691C5.93492 5.44941 5.51684 5.53528 5.24971 5.82114C4.00637 7.15163 3.08038 8.74734 2.54142 10.4882C2.42513 10.8638 2.55914 11.272 2.87529 11.5051L4.40162 12.6306C4.83721 12.9512 5.09414 13.4598 5.09414 14.0007C5.09414 14.5415 4.83721 15.0501 4.40219 15.3703L2.8749 16.4977C2.55922 16.7307 2.42533 17.1384 2.54122 17.5137C3.07924 19.2561 4.00474 20.8536 5.24806 22.1859C5.51493 22.4718 5.93281 22.558 6.29071 22.4009L8.01859 21.6424C8.51117 21.4269 9.07783 21.4586 9.54452 21.7281C10.0112 21.9976 10.3225 22.4731 10.3834 23.0093L10.5908 24.8855C10.6336 25.273 10.9148 25.5917 11.2933 25.682C13.0725 26.1061 14.9263 26.1061 16.7055 25.682C17.084 25.5917 17.3651 25.273 17.408 24.8855L17.6157 23.0066C17.675 22.4693 17.9729 21.9924 18.44 21.7219C18.9071 21.4515 19.4876 21.4197 19.9818 21.6364ZM14 18C11.7909 18 10 16.2091 10 14C10 11.7909 11.7909 10 14 10C16.2091 10 18 11.7909 18 14C18 16.2091 16.2091 18 14 18Z"
                            fill="#212121" />
                    </svg>
</div>`, authip = `

<div id="authip_back_btn" onclick="return_to_options('authip');navigator('sett_def')" class="circle">
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px"
version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path xmlns="http://www.w3.org/2000/svg"
			d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
		</path>
	</g>
</g>
</svg>
</div>
`, securelineGrid = `

<div onclick="$('#chats').fadeOut('fast',function() {$('#gridSection').fadeIn('fast');navigator('sett_def')});" class="circle">
<svg xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px"
version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
<g>
	<g>
		<path xmlns="http://www.w3.org/2000/svg"
			d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
		</path>
	</g>
</g>
</svg>
</div>
`, return_settings = `<div onclick="return_settings()" class="circle">
<svg xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px"
	version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
	<g>
		<g>
			<path xmlns="http://www.w3.org/2000/svg"
				d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
			</path>
		</g>
	</g>
</svg>
</div>`, settings_tonexus = ` <div onclick="close_popup()" class="circle">
<svg id="rotateIcon" xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 28 28" fill="none">
                        <path
                            d="M19.9818 21.6364L21.7093 22.3948C22.0671 22.5518 22.4849 22.4657 22.7517 22.1799C23.9944 20.8492 24.9198 19.2536 25.4586 17.5131C25.5748 17.1376 25.441 16.7296 25.1251 16.4965L23.5988 15.3698C23.1628 15.0489 22.9 14.5403 22.9 13.9994C22.9 13.4586 23.1628 12.95 23.5978 12.6297L25.1228 11.5035C25.4386 11.2703 25.5723 10.8623 25.4561 10.487C24.9172 8.74611 23.9912 7.1504 22.7478 5.81991C22.4807 5.53405 22.0626 5.44818 21.7048 5.60568L19.9843 6.36294C19.769 6.45838 19.5385 6.507 19.3055 6.50663C18.4387 6.50572 17.7116 5.85221 17.617 4.98937L17.4079 3.11017C17.3643 2.71823 17.077 2.39734 16.6928 2.31149C15.8128 2.11485 14.9147 2.01047 14.0131 2.00006C13.0891 2.01071 12.19 2.11504 11.3089 2.31138C10.9245 2.39704 10.637 2.71803 10.5933 3.11017L10.3844 4.98794C10.3244 5.52527 10.0133 6.00264 9.54617 6.27415C9.07696 6.54881 8.50793 6.58168 8.01296 6.36404L6.29276 5.60691C5.93492 5.44941 5.51684 5.53528 5.24971 5.82114C4.00637 7.15163 3.08038 8.74734 2.54142 10.4882C2.42513 10.8638 2.55914 11.272 2.87529 11.5051L4.40162 12.6306C4.83721 12.9512 5.09414 13.4598 5.09414 14.0007C5.09414 14.5415 4.83721 15.0501 4.40219 15.3703L2.8749 16.4977C2.55922 16.7307 2.42533 17.1384 2.54122 17.5137C3.07924 19.2561 4.00474 20.8536 5.24806 22.1859C5.51493 22.4718 5.93281 22.558 6.29071 22.4009L8.01859 21.6424C8.51117 21.4269 9.07783 21.4586 9.54452 21.7281C10.0112 21.9976 10.3225 22.4731 10.3834 23.0093L10.5908 24.8855C10.6336 25.273 10.9148 25.5917 11.2933 25.682C13.0725 26.1061 14.9263 26.1061 16.7055 25.682C17.084 25.5917 17.3651 25.273 17.408 24.8855L17.6157 23.0066C17.675 22.4693 17.9729 21.9924 18.44 21.7219C18.9071 21.4515 19.4876 21.4197 19.9818 21.6364ZM14 18C11.7909 18 10 16.2091 10 14C10 11.7909 11.7909 10 14 10C16.2091 10 18 11.7909 18 14C18 16.2091 16.2091 18 14 18Z"
                            fill="#212121" />
                    </svg>
	
</div>`, show_account = `<div onclick="return_settings()" class="circle">
<svg xmlns="http://www.w3.org/2000/svg"
	xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px"
	version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
	<g>
		<g>
			<path xmlns="http://www.w3.org/2000/svg"
				d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
			</path>
		</g>
	</g>
</svg>
</div>`, evox_social = `<div onclick="return_to_options('evox_social');navigator('settings_tonexus')" class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, store = `<div onclick="return_to_options('evox_store');navigator('settings_tonexus')" class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, username_email_icon_show = `<div id="hide_for_rememail" onclick="return_to_options('usr-emails');navigator('sett_def')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px"
		version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, addemail = `<div onclick="return_to_options('add_email');navigator('password_secure')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, birth = `<div onclick="return_to_options('birth');navigator('sett_def')" class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, password_secure = `<div onclick="return_to_options('security');navigator('sett_def')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px"
		version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, change_password = `<div onclick="return_to_options('password_change');navigator('password_secure')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, sign_in_wevox = `<div onclick="return_to_options('app_use_info');navigator('password_secure')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, cryptox = `<div id="authip_back_btn" onclick="return_to_options('cryptox');navigator('sett_def')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px"
		version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, closevox = `<div>
<div onclick="closevox();navigator('sett_def')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z" />
			</g>
		</g>
	</svg>
</div>`, bg = `<div onclick="return_to_options('gateway_settings')" class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, show_search = `<div onclick="return_to_options('add_friends');navigator('evox_social')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, show_requests = `<div onclick="return_to_options('requests');navigator('evox_social')" class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, show_friends = `<div onclick="return_to_options('friends');navigator('sett_def')" class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, showFriend = `<div onclick="return_to_options('user-friend');navigator('show_friends')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`, show_sline = `<div onclick="close_sline();navigator('sett_def')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
	Gateway
</div>
</div>`, coming = `<div onclick="return_to_options('coming');navigator('settings_tonexus')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`;
	const notifications = `<div onclick="close_notif();navigator('sett_def')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const sline_options = `<div onclick="goback_options();navigator('show_sline', 'y')" class="circle" id="settings">
	<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
            <path d="M13.0867 21.3877L13.7321 21.7697L13.0867 21.3877ZM13.6288 20.4718L12.9833 20.0898L13.6288 20.4718ZM10.3712 20.4718L9.72579 20.8539H9.72579L10.3712 20.4718ZM10.9133 21.3877L11.5587 21.0057L10.9133 21.3877ZM2.3806 15.9134L3.07351 15.6264V15.6264L2.3806 15.9134ZM7.78958 18.9915L7.77666 19.7413L7.78958 18.9915ZM5.08658 18.6194L4.79957 19.3123H4.79957L5.08658 18.6194ZM21.6194 15.9134L22.3123 16.2004V16.2004L21.6194 15.9134ZM16.2104 18.9915L16.1975 18.2416L16.2104 18.9915ZM18.9134 18.6194L19.2004 19.3123H19.2004L18.9134 18.6194ZM19.6125 2.7368L19.2206 3.37628L19.6125 2.7368ZM21.2632 4.38751L21.9027 3.99563V3.99563L21.2632 4.38751ZM4.38751 2.7368L3.99563 2.09732V2.09732L4.38751 2.7368ZM2.7368 4.38751L2.09732 3.99563H2.09732L2.7368 4.38751ZM9.40279 19.2098L9.77986 18.5615L9.77986 18.5615L9.40279 19.2098ZM13.7321 21.7697L14.2742 20.8539L12.9833 20.0898L12.4412 21.0057L13.7321 21.7697ZM9.72579 20.8539L10.2679 21.7697L11.5587 21.0057L11.0166 20.0898L9.72579 20.8539ZM12.4412 21.0057C12.2485 21.3313 11.7515 21.3313 11.5587 21.0057L10.2679 21.7697C11.0415 23.0767 12.9585 23.0767 13.7321 21.7697L12.4412 21.0057ZM10.5 2.75H13.5V1.25H10.5V2.75ZM21.25 10.5V11.5H22.75V10.5H21.25ZM2.75 11.5V10.5H1.25V11.5H2.75ZM1.25 11.5C1.25 12.6546 1.24959 13.5581 1.29931 14.2868C1.3495 15.0223 1.45323 15.6344 1.68769 16.2004L3.07351 15.6264C2.92737 15.2736 2.84081 14.8438 2.79584 14.1847C2.75041 13.5189 2.75 12.6751 2.75 11.5H1.25ZM7.8025 18.2416C6.54706 18.2199 5.88923 18.1401 5.37359 17.9265L4.79957 19.3123C5.60454 19.6457 6.52138 19.7197 7.77666 19.7413L7.8025 18.2416ZM1.68769 16.2004C2.27128 17.6093 3.39066 18.7287 4.79957 19.3123L5.3736 17.9265C4.33223 17.4951 3.50486 16.6678 3.07351 15.6264L1.68769 16.2004ZM21.25 11.5C21.25 12.6751 21.2496 13.5189 21.2042 14.1847C21.1592 14.8438 21.0726 15.2736 20.9265 15.6264L22.3123 16.2004C22.5468 15.6344 22.6505 15.0223 22.7007 14.2868C22.7504 13.5581 22.75 12.6546 22.75 11.5H21.25ZM16.2233 19.7413C17.4786 19.7197 18.3955 19.6457 19.2004 19.3123L18.6264 17.9265C18.1108 18.1401 17.4529 18.2199 16.1975 18.2416L16.2233 19.7413ZM20.9265 15.6264C20.4951 16.6678 19.6678 17.4951 18.6264 17.9265L19.2004 19.3123C20.6093 18.7287 21.7287 17.6093 22.3123 16.2004L20.9265 15.6264ZM13.5 2.75C15.1512 2.75 16.337 2.75079 17.2619 2.83873C18.1757 2.92561 18.7571 3.09223 19.2206 3.37628L20.0044 2.09732C19.2655 1.64457 18.4274 1.44279 17.4039 1.34547C16.3915 1.24921 15.1222 1.25 13.5 1.25V2.75ZM22.75 10.5C22.75 8.87781 22.7508 7.6085 22.6545 6.59611C22.5572 5.57256 22.3554 4.73445 21.9027 3.99563L20.6237 4.77938C20.9078 5.24291 21.0744 5.82434 21.1613 6.73809C21.2492 7.663 21.25 8.84876 21.25 10.5H22.75ZM19.2206 3.37628C19.7925 3.72672 20.2733 4.20752 20.6237 4.77938L21.9027 3.99563C21.4286 3.22194 20.7781 2.57144 20.0044 2.09732L19.2206 3.37628ZM10.5 1.25C8.87781 1.25 7.6085 1.24921 6.59611 1.34547C5.57256 1.44279 4.73445 1.64457 3.99563 2.09732L4.77938 3.37628C5.24291 3.09223 5.82434 2.92561 6.73809 2.83873C7.663 2.75079 8.84876 2.75 10.5 2.75V1.25ZM2.75 10.5C2.75 8.84876 2.75079 7.663 2.83873 6.73809C2.92561 5.82434 3.09223 5.24291 3.37628 4.77938L2.09732 3.99563C1.64457 4.73445 1.44279 5.57256 1.34547 6.59611C1.24921 7.6085 1.25 8.87781 1.25 10.5H2.75ZM3.99563 2.09732C3.22194 2.57144 2.57144 3.22194 2.09732 3.99563L3.37628 4.77938C3.72672 4.20752 4.20752 3.72672 4.77938 3.37628L3.99563 2.09732ZM11.0166 20.0898C10.8136 19.7468 10.6354 19.4441 10.4621 19.2063C10.2795 18.9559 10.0702 18.7304 9.77986 18.5615L9.02572 19.8582C9.07313 19.8857 9.13772 19.936 9.24985 20.0898C9.37122 20.2564 9.50835 20.4865 9.72579 20.8539L11.0166 20.0898ZM7.77666 19.7413C8.21575 19.7489 8.49387 19.7545 8.70588 19.7779C8.90399 19.7999 8.98078 19.832 9.02572 19.8582L9.77986 18.5615C9.4871 18.3912 9.18246 18.3215 8.87097 18.287C8.57339 18.2541 8.21375 18.2487 7.8025 18.2416L7.77666 19.7413ZM14.2742 20.8539C14.4916 20.4865 14.6287 20.2564 14.7501 20.0898C14.8622 19.936 14.9268 19.8857 14.9742 19.8582L14.2201 18.5615C13.9298 18.7304 13.7204 18.9559 13.5379 19.2063C13.3646 19.4441 13.1864 19.7468 12.9833 20.0898L14.2742 20.8539ZM16.1975 18.2416C15.7862 18.2487 15.4266 18.2541 15.129 18.287C14.8175 18.3215 14.5129 18.3912 14.2201 18.5615L14.9742 19.8582C15.0192 19.832 15.096 19.7999 15.2941 19.7779C15.5061 19.7545 15.7842 19.7489 16.2233 19.7413L16.1975 18.2416Z" fill="#212121"></path>
            <path d="M8 9H16" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path>
            <path d="M8 12.5H13.5" stroke="#fff" stroke-width="1.5" stroke-linecap="round"></path>
        </svg>
</div>`
	const notifications_main = `<div onclick="notif_goback();navigator('sett_def')" class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`

	const notif_gateway = `<div onclick='$("#gateway-florida").fadeOut("fast", function () {$("#notifications_options").fadeIn("fast")});navigator("notifications_main")' class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const notif_tasco = `<div onclick='$("#tasco-florida").fadeOut("fast", function () {$("#notifications_options").fadeIn("fast")});navigator("notifications_main")' class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const notif_secureline = `<div onclick='$("#secureline-florida").fadeOut("fast", function () {$("#notifications_options").fadeIn("fast")});navigator("notifications_main")' class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const notif_cryptox = `<div onclick='$("#cryptox-florida").fadeOut("fast", function () {$("#notifications_options").fadeIn("fast")});navigator("notifications_main")' class="circle">
	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const sign_in_wevox_e = `<div onclick='$("#evox_gateway_info").fadeOut("fast", function () {$("#apps_using_evox").fadeIn("fast")});navigator("sign_in_wevox")' class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const otp_info = `<div onclick='$("#otp_info").fadeOut("fast", function () {$("#apps_using_evox").fadeIn("fast")});navigator("sign_in_wevox")' class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const sign_in_wevox_t = `<div onclick='$("#tasco_deluxe_info").fadeOut("fast", function () {$("#apps_using_evox").fadeIn("fast")});navigator("sign_in_wevox")' class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`
	const fullimage = `<div onclick="close_fullimage()" class="circle">

	<svg xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink" fill="#212121" height="24px" width="24px" version="1.1"
		id="Layer_1" viewBox="0 0 512 512" xml:space="preserve">
		<g>
			<g>
				<path xmlns="http://www.w3.org/2000/svg"
					d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M384,277.333H179.499    l48.917,48.917c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-85.333-85.333c-1.963-1.963-3.52-4.309-4.608-6.933c-2.155-5.205-2.155-11.093,0-16.299c1.088-2.624,2.645-4.971,4.608-6.933    l85.333-85.333c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165l-48.917,48.917H384c11.776,0,21.333,9.557,21.333,21.333    S395.776,277.333,384,277.333z">
				</path>
			</g>
		</g>
	</svg>
</div>`


	if (w === "sett_def") {
		document.getElementById("navigator").innerHTML = sett_def
	}
	if (w === "authip") {
		document.getElementById("navigator").innerHTML = authip
	}
	if (w === "return_settings") {
		document.getElementById("navigator").innerHTML = return_settings
	}

	if (w === "settings_tonexus") {
		document.getElementById("navigator").innerHTML = settings_tonexus
	}

	if (w === "show_account") {
		document.getElementById("navigator").innerHTML = show_account
	}
	if (w === "evox_social") {
		document.getElementById("navigator").innerHTML = evox_social
	}
	if (w === "store") {
		document.getElementById("navigator").innerHTML = store
	}
	if (w === "username_email_icon_show") {
		document.getElementById("navigator").innerHTML = username_email_icon_show
	}
	if (w === "addemail") {
		document.getElementById("navigator").innerHTML = addemail
	}
	if (w === "birth") {
		document.getElementById("navigator").innerHTML = birth
	}
	if (w === "password_secure") {
		document.getElementById("navigator").innerHTML = password_secure
	}
	if (w === "change_password") {
		document.getElementById("navigator").innerHTML = change_password
	}
	if (w === "sign_in_wevox") {
		document.getElementById("navigator").innerHTML = sign_in_wevox
	}
	if (w === "cryptox") {
		document.getElementById("navigator").innerHTML = cryptox
	}
	if (w === "closevox") {
		document.getElementById("navigator").innerHTML = closevox
	}
	if (w === "bg") {
		document.getElementById("navigator").innerHTML = bg
	}
	if (w === "show_search") {
		document.getElementById("navigator").innerHTML = show_search
	}
	if (w === "show_requests") {
		document.getElementById("navigator").innerHTML = show_requests
	}

	if (w === "show_friends") {
		document.getElementById("navigator").innerHTML = show_friends
	}
	if (w === "showFriend") {
		document.getElementById("navigator").innerHTML = showFriend
	}
	if (w === "show_sline") {
		document.getElementById("navigator").innerHTML = show_sline
		if (f) {
			return;
		}
	}
	if (w === "notifications") {
		document.getElementById("navigator").innerHTML = notifications
	}
	if (w === "sline_options") {
		document.getElementById("navigator").innerHTML = sline_options
		return;
	}

	if (w === "notifications_main") {
		document.getElementById("navigator").innerHTML = notifications_main
	}

	if (w === "notif_gateway") {
		document.getElementById("navigator").innerHTML = notif_gateway
	}

	if (w === "notif_tasco") {
		document.getElementById("navigator").innerHTML = notif_tasco
	}

	if (w === "sign_in_wevox_e") {
		document.getElementById("navigator").innerHTML = sign_in_wevox_e
	}
	if (w === "sign_in_wevox_t") {
		document.getElementById("navigator").innerHTML = sign_in_wevox_t
	}
	if (w === "fullimage") {
		document.getElementById("navigator").innerHTML = fullimage
	}

	if (w === "coming") {
		document.getElementById("navigator").innerHTML = coming
	}
	if (w === "notif_secureline") {
		document.getElementById("navigator").innerHTML = notif_secureline
	}
	if (w === "notif_cryptox") {
		document.getElementById("navigator").innerHTML = notif_cryptox
	}
	if (w === "securelineGrid") {
		document.getElementById("navigator").innerHTML = securelineGrid
	}
	if (w === "otp_info") {
		document.getElementById("navigator").innerHTML = otp_info
	}



	$("#navigator").fadeIn("fast")

	//$("#navigator").fadeOut("fast", function () {})



}

function toggleGlowAnimation() {
	var button = document.getElementById("animatedButton_chats");
	if (button.classList.contains("glow")) {
		button.classList.remove("glow");
	} else {
		button.classList.add("glow");
	}
}

function hide_new() {
	document.getElementById('gateway').style.filter = ''
	document.getElementById("whats_new").classList.remove("active");
	$("#navigator").fadeIn("fast")
	localStorage.setItem("New_ID0.92.1", "SEEN")
	setup()
}
function hide_new_set() {
	document.getElementById('gateway').style.filter = ''
	document.getElementById("whats_new").classList.remove("active");
	$("#navigator").fadeIn("fast")
	vox()
	localStorage.setItem("New_ID0.92.1", "SEEN")
}

function show_news() {

	closevox()
	document.getElementById('gateway').style.filter = 'blur(25px)'
	document.getElementById("whats_new").classList.add("active");
	document.getElementById("navigator").style.display = "none"
	document.getElementById("onclicks_news").innerHTML = `<div style="z-index:1;" id="onclicks_news">
	<div onclick="hide_new_set()">
		<div
			style="left:50%; display: flex; align-items: center; justify-content: center; cursor: pointer; text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;cursor: pointer; text-shadow: rgb(0, 0, 0) -1px -1px 0px, rgb(0, 0, 0) 1px -1px 0px, rgb(0, 0, 0) -1px 1px 0px, rgb(0, 0, 0) 1px 1px 0px;background-color: #33333370; border: none; color: #fff; padding: 15px 30px; font-size: 16px; border-radius: 19px; cursor: pointer; display: flex; align-items: center; text-decoration: none; transition: background-color 0.3s ease;">

			Proceed<svg style="margin-left: 10px" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
				viewBox="0 0 24 24" fill="none">
				<path
					d="M11 21H12C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3H11M11 16L15 12M15 12L11 8M15 12H3"
					stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
		</div>
	</div>
</div>`
	setTimeout(function () {
		scrollToTop("whats_new")
	}, 300)

}


function scrollToTop(divId) {
	var div = document.getElementById(divId);
	if (div) {
		div.scrollTop = 0;
	} else {
		//console.error("Element with ID '" + divId + "' not found.");
	}
}

function optimizeNotifications(id, element) {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Unable to connect to server.')
		return;
	}
	if (id && element) {
		console.log("Optimizing")
	} else {
		return;
	}

	let change;
	if (element.checked) {
		// Checkbox is checked, perform actions for when it's checked
		console.log("Checkbox is checked");
		change = 1
	} else {
		// Checkbox is unchecked, perform actions for when it's unchecked
		console.log("Checkbox is unchecked");
		change = 2
	}
	fetch(`${srv}/florida?username=${localStorage.getItem("t50-username")}&method=prefs_Set&id=${id}&change=${change}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(result => {
			if (result === "Done") {
				console.log("All ok")
			}



		}).catch(error => {
			console.error("Cannot set src for", username)
			console.error(error)
		})
	return;
}

function loadPrefs() {
	fetch(`${srv}/florida?username=${localStorage.getItem("t50-username")}&method=prefs_Get`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(prefs => {
			if (!prefs) {
				console.log("Canceling")
				return;
			}
			const data = JSON.parse(prefs)
			const checkboxes = {
				'p1': 'login_to_acc',
				'p2': 'usr_mod',
				'p3': 'email_mod',
				'p4': '2fa_mod',
				'p5': 'ip_mod',
				'p6': 'pswd_mod',
				'p7': 'new_friend_req',
				'p8': 'new_friend',
				'p9': 'friend_online',
				'p10': 'new_evox_usr',
				'p11': 'new_app_purch',
				'p12': 'weather',
				'p13': 'app_release',
				'p14': 'pfp_change'
			};

			for (const checkboxId in checkboxes) {
				if (data[checkboxes[checkboxId]] === 1) {
					document.getElementById(checkboxId).checked = true;
				} else {
					document.getElementById(checkboxId).checked = false;
				}
			}




		}).catch(error => {
			console.error("Cannot set src for", username)
			console.error(error)
		})
}

function profilesLocal(username, img) {
	let request = window.indexedDB.open('EvoxSocial'); // Change the version number to 2

	request.onerror = function (event) {
		console.log("Database error:", event.target.error);
	};

	request.onsuccess = function (event) {
		// Database has been opened successfully
		let db = event.target.result;

		// Proceed with adding the user
		let transaction = db.transaction(['Profiles'], 'readwrite');
		let objectStore = transaction.objectStore('Profiles');

		let newUser = { data: img, username: username };
		let addRequest = objectStore.add(newUser);

		addRequest.onsuccess = function (event) {
			console.log("User added successfully.");
		};

		addRequest.onerror = function (event) {
			console.log("Error adding user:", event.target.error);
		};
	};

	request.onupgradeneeded = function (event) {
		// If the database does not exist or needs to be updated
		let db = event.target.result;
		let objectStore = db.createObjectStore('Profiles', { keyPath: 'username' });
		objectStore.createIndex('usernameIndex', 'username', { unique: true });
	};
}




//profilesLocal(username, img)


function checkUsernameAndGetData(username, getDataCallback) {
	let request = window.indexedDB.open('EvoxSocial'); // Change version number to 2

	request.onerror = function (event) {
		console.log("Database error:", event.target.error);
	};

	request.onsuccess = function (event) {
		// Database has been opened successfully
		let db = event.target.result;

		if (!db.objectStoreNames.contains('Profiles')) {
			// If the 'Profiles' object store doesn't exist, create it
			let version = db.version + 1;
			db.close(); // Close the database to perform the upgrade

			let upgradeRequest = window.indexedDB.open('EvoxSocial', version);

			upgradeRequest.onerror = function (event) {
				console.log("Database upgrade error:", event.target.error);
			};

			upgradeRequest.onupgradeneeded = function (event) {
				// Create the 'Profiles' object store
				let db = event.target.result;
				db.createObjectStore('Profiles', { keyPath: 'username' });
			};

			upgradeRequest.onsuccess = function (event) {
				console.log("Object store 'Profiles' created.");
				// After creating the object store, retry retrieving data
				checkUsernameAndGetData(username, getDataCallback);
			};
		} else {
			// If the 'Profiles' object store exists, proceed with retrieving data
			let transaction = db.transaction(['Profiles'], 'readonly');
			let objectStore = transaction.objectStore('Profiles');
			let getRequest = objectStore.get(username);

			getRequest.onsuccess = function (event) {
				let result = event.target.result;
				if (result) {
					// Username exists, run the getDataCallback function to retrieve the data
					getDataCallback(null, result);
				} else {
					getDataCallback(null, "None");
					console.log("Username not found: " + username);
				}
			};

			getRequest.onerror = function (event) {
				console.log("Error checking username:", event.target.error);
			};
		}
	};
}



function loadPFP(username, idsuffix) {
	checkUsernameAndGetData(username, function (error, data) {
		if (error) {
			console.error(error);
		} else {
			console.log("Retrieved data:", data);
			const imgElement = document.getElementById(`${username}${idsuffix}`);
			if (!imgElement) {
				//console.error(`Element with id ${username}${idsuffix} not found.`);
				//console.log("Retrying..")
				loadPFP(username, idsuffix)
				return;
			}

			if (data !== "None") {
				console.log("Loading from localDB");
				imgElement.src = data.data;
				//Check if update is needed
				//disabled due to datacenter overload
				return;
				fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						return response.text();
					})
					.then(profileimage => {
						if (profileimage.indexOf("base64") === -1) {
							// If it doesn't contain "base64", add the prefix
							console.log("Fixing Base64");
							profileimage = "data:image/jpeg;base64," + profileimage;
						}
						if (profileimage === data.data) {
							console.log("Profile Picture Appears to be the same as Db");
						} else {
							profilesLocal(username, profileimage);
							imgElement.src = profileimage;
							console.log("Updating!");
						}
					}).catch(error => {
						console.error("Cannot set src for", username);
						console.error(error);
					});
			} else {
				console.log("Loading from server");
				fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						return response.text();
					})
					.then(profileimage => {
						if (profileimage.indexOf("base64") === -1) {
							// If it doesn't contain "base64", add the prefix
							console.log("Fixing Base64");
							profileimage = "data:image/jpeg;base64," + profileimage;
						}
						imgElement.src = profileimage;
						profilesLocal(username, profileimage);
					}).catch(error => {
						console.error("Cannot set src for", username);
						console.error(error);
					});
			}
		}
	});
}


function loadPFPflorida(username, timestamp64) {
	checkUsernameAndGetData(username, function (error, data) {
		if (error) {
			console.error(error);
		} else {
			console.log("Retrieved data:", data);
			if (data !== "None") {
				console.log("Loading from localDB")
				document.getElementById(`${timestamp64}-floridaINIT`).src = data.data
				//Check if update is needed
				//disabled due to datacenter overload
				return;
			} else {
				console.log("Loading from server")
				fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						return response.text();
					})
					.then(profileimage => {
						if (profileimage.indexOf("base64") === -1) {
							// If it doesn't contain "base64", add the prefix
							console.log("Fixing Base64")
							profileimage = "data:image/jpeg;base64," + profileimage;
						}
						document.getElementById(`${timestamp64}-floridaINIT`).src = profileimage
						profilesLocal(username, profileimage)


					}).catch(error => {
						console.error("Cannot set src for", username)
						console.error(error)
					})
			}

		}
	});
}



function loadPFPget(username) {
	return new Promise((resolve, reject) => {
		checkUsernameAndGetData(username, function (error, data) {
			if (error) {
				console.error(error);
				reject(error);
			} else {
				console.log("Retrieved data:", data);
				if (data !== "None") {
					console.log("Loading from localDB");
					// Resolve with data if available
					resolve(data.data);
				} else {
					console.log("Loading from server");
					fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
						.then(response => {
							if (!response.ok) {
								throw new Error(`HTTP error! Status: ${response.status}`);
							}
							return response.text();
						})
						.then(profileimage => {
							if (profileimage.indexOf("base64") === -1) {
								console.log("Fixing Base64");
								profileimage = "data:image/jpeg;base64," + profileimage;
							}
							// Resolve with profile image
							resolve(profileimage);
							profilesLocal(username, profileimage);
						})
						.catch(error => {
							console.error("Cannot set src for", username);
							console.error(error);
							reject(error);
						});
				}
			}
		});
	});
}



function clearflrd() {
	$("#flrdclear_svg").fadeIn("fast")
	localStorage.removeItem("florida_init")
	localStorage.removeItem("florida_init_registered")
	var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

	var request = indexedDB.deleteDatabase("ONE_SIGNAL_SDK_DB");

	request.onsuccess = function () {
		console.log("Database deleted successfully");
		$("#flrdclear_svg").fadeOut("fast")
		notice("Database deleted successfully. Reload to prevent errors.")
		$("#hide_after_clear").fadeOut("fast", function () {
			$("#restart_after_flrdclear").fadeIn("fast")
		})



	};

	request.onerror = function (event) {
		console.error("Error deleting database:", event.target.errorCode);
		$("#flrdclear_svg").fadeOut("fast")
		notice("Error deleting database:", event.target.errorCode)
		$("#hide_after_clear").fadeOut("fast", function () {
			$("#restart_after_flrdclear").fadeIn("fast")
		})
	};
}

function app_use_info(app) {
	document.getElementById('gateway').style.filter = 'blur(50px)'
	if (app === "gateway") {
		document.getElementById("currentServerSpan").innerText = srv
		navigator('sign_in_wevox_e')
		const repoOwner = 'HackerXYT'; // Replace 'owner' with the GitHub username or organization name
		const repoName = 'hackerxyt.github.io'; // Replace 'repository' with the name of the GitHub repository

		fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits`)
			.then(response => response.json())
			.then(data => {
				if (data.length > 0) {
					const latestCommit = data[0];
					const commitTitle = latestCommit.commit.message;
					const commitDescription = latestCommit.commit.description;

					console.log("Latest Commit Title:", commitTitle);
					if (commitTitle.includes("Merge")) {
						document.getElementById("gt-update-title").innerHTML = "Branches Merge"
						document.getElementById("gt-update-desc").style.display = "none"
					} else {
						document.getElementById("gt-update-title").innerHTML = commitTitle

						if (commitDescription == null || typeof account == 'undefined') {
							document.getElementById("gt-update-desc").style.display = "none"
						} else {
							document.getElementById("gt-update-desc").innerHTML = commitDescription
						}
					}


					console.log("Latest Commit Description:", commitDescription);

				} else {
					console.log("No commits found in the repository.");
				}
			})
			.catch(error => {
				console.error("Error fetching commits:", error);
			});
		$("#apps_using_evox").fadeOut("fast", function () {
			$("#evox_gateway_info").fadeIn("fast")
		})
	} else if (app === "tasco") {
		navigator('sign_in_wevox_t')
		fetch(`https://data.evoxs.xyz/tasco?method=getUserNotesInfo&username=${localStorage.getItem("t50-username")}&password=${atob(localStorage.getItem("t50pswd"))}`)
			.then(response => {
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				return response.json(); // Parse JSON data
			})
			.then(data => {
				console.log("the data:", data)
				if (data.message === "userFolder doesn't exist") {
					document.getElementById("isUserFolder").innerHTML = 'false'
				} else {
					$("#tasco_bg").fadeIn("fast")
					document.getElementById("howmanynotes").innerHTML = data.notes
					document.getElementById("howmanyfavs").innerHTML = data.favorites.length
					document.getElementById("isUserFolder").innerHTML = 'true'
					if (data.settings) {
						if (data.settings.background) {
							document.getElementById("settingBg").innerHTML = data.settings.background
						} else {
							document.getElementById("settingBg").innerHTML = 'default'
						}
					}


				}
			})
			.catch(error => {
				console.error('There has been a problem with your fetch operation:', error);
				alert("Oh Snap!\nSomething Failed!", error)
			});
		$("#apps_using_evox").fadeOut("fast", function () {
			$("#tasco_deluxe_info").fadeIn("fast")
		})
	} else if (app === "otp_info") {
		loadOTP()
		navigator('otp_info')
		$("#apps_using_evox").fadeOut("fast", function () {
			$("#otp_info").fadeIn("fast")
		})
	}

}

function changeTascoBg() {
	const currentSetting = document.getElementById("settingBg").innerHTML
	let nextSetting;
	let setItAs;
	if (currentSetting === "default") {
		nextSetting = "low-end"
		setItAs = "evox"
	} else if (currentSetting === "low-end") {
		nextSetting = "false"
		setItAs = "false"
	} else if (currentSetting === "false") {
		nextSetting = "default"
		setItAs = "default"
	}

	fetch(`https://data.evoxs.xyz/tasco?method=settingsNotes&identifier=background&newSet=${setItAs}&username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json(); // Parse JSON data
		})
		.then(data => {
			console.log(data);
			if (data.message === "Complete!") {
				console.log("Success.")
				document.getElementById("settingBg").innerHTML = nextSetting
			} else {
				alert("Something Failed!", data)
			}
		})
		.catch(error => {
			console.error('There has been a problem with your fetch operation:', error);
		});

}

function fullimage(element) {
	return;
	$("#popup").fadeOut("fast")
	$("#gateway").fadeOut("fast")
	$("#vox").fadeOut("fast")
	$("#profile").fadeOut("fast")
	$("#errors").fadeOut("fast")
	$("#dots").fadeOut("fast")
	document.getElementById("fullimage").classList.add("active")
	document.getElementById("fullimage-src").src = element.src
	navigator("fullimage")
}

function close_fullimage() {
	$("#popup").fadeIn("fast")
	$("#gateway").fadeIn("fast")
	//$("#vox").fadeIn("fast")
	document.getElementById("fullimage").classList.remove("active")
	//document.getElementById("fullimage-src").src = "element.src"
	navigator("show_search")
}

document.querySelectorAll('.slide-container').forEach(container => {
	const appleButton = container.querySelector('.apple-button');
	const deleteOption = container.querySelector('.delete-option');

	let startX, startY, isDeleting = false;

	appleButton.addEventListener('touchstart', handleTouchStart, false);
	appleButton.addEventListener('touchmove', handleTouchMove, false);
	appleButton.addEventListener('touchend', handleTouchEnd, false);

	function handleTouchStart(event) {
		if (!isDeleting) {
			container.classList.remove('active');
		}
		startX = event.touches[0].clientX;
		startY = event.touches[0].clientY;
	}

	function handleTouchMove(event) {
		if (!startX || !startY) return;

		let currentX = event.touches[0].clientX;
		let currentY = event.touches[0].clientY;
		let diffX = startX - currentX;
		let diffY = startY - currentY;

		if (Math.abs(diffX) > Math.abs(diffY)) {
			event.preventDefault();
			if (diffX > 0 && !isDeleting) {
				container.classList.add('active');
				isDeleting = true;
			} else if (diffX < 0 && isDeleting) {
				container.classList.remove('active');
				isDeleting = false;
			}
		}
	}

	function handleTouchEnd(event) {
		startX = null;
		startY = null;
	}
});

function attach_file_click() {
	document.getElementById("upload-box-sline").click()
}

function attach_file() {
	shake_me("attFile")
	return;
	if (sessionStorage.getItem("att_active")) {
		document.getElementById("att1").setAttribute("stroke", "#fff");
		document.getElementById("att2").setAttribute("stroke", "#fff");
		sessionStorage.removeItem("att_active")
	} else {
		document.getElementById("att1").setAttribute("stroke", "#04AA6D");
		document.getElementById("att2").setAttribute("stroke", "#04AA6D");
		sessionStorage.setItem("att_active", "true")
		const input = document.getElementById('upload-box-sline');
		const file = input.files[0];
		const recipient = sessionStorage.getItem("current_sline")

		if (file) {
			const reader = new FileReader();
			reader.onload = function (e) {
				const base64String = e.target.result;
				// Now you have the base64 representation of the selected image
				//console.log(base64String);
				//document.getElementById("upload-box-sline").disabled = true
				//document.getElementById("usr-img-opt").src = "./reloading.gif"
				fetch(`${srv}/secureline?method=SendMessage&username=${localStorage.getItem("t50-username")}&recipient_username=${recipient}&message=${base64String}`)
					.then(response => {
						if (!response.ok) {
							throw new Error(`HTTP error! Status: ${response.status}`);
						}
						return response.text();
					})
					.then(data => {
						message.value = ""
						if (data === `Message Sent To ${recipient}`) {
							console.log("Message Sent")


						} else {
							console.error("Error Sending Message -SLINE ERROR")
						}
					})
			};
			reader.readAsDataURL(file);
		}

		// Reset the input value to allow selecting the same file again
		input.value = '';
	}

}

function pc() {
	document.getElementById("pc_cont").classList.add("active")
	$("#navigator").fadeOut("fast")
	document.getElementById('gateway').style.filter = 'blur(20px)'; // Add a blur effect to the mainContent
}

function cancelPC() {
	document.getElementById('gateway').style.filter = ''
	document.getElementById("pc_cont").classList.remove("active")
	$("#navigator").fadeIn("fast")
}

function downloadPC() {
	fetch(`https://evoxs.xyz/version.app`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(info => {
			const data = JSON.parse(info)
			const fileUrl = `https://github.com/HackerXYT/hackerxyt.github.io/releases/download/${data.framework}${data.version}/Evox.Setup.${data.version}.exe`;
			window.location.href = fileUrl
		})
		.catch(error => {
			console.error("Cannot set src for", username);
			console.error(error);
			reject(error);
		});
}

function correctAccount() {
	document.getElementById("complete_merge").classList.remove("active")
	document.getElementById("merge_info").classList.add("active")
	document.getElementById("rev-name").innerHTML = document.getElementById("mrg-name").innerHTML
	document.getElementById("rev-email").innerHTML = document.getElementById("mrg-email").innerHTML
	console.log(document.getElementById("mrg-img").src)
	if (document.getElementById("mrg-img").src.includes("reloading-pfp.gif")) {
		console.log("Waiting for pfp")
		const pfpRev = setInterval(function () {
			if (!document.getElementById("mrg-img").src.includes("reloading-pfp.gif")) {
				document.getElementById("rev-img").src = document.getElementById("mrg-img").src
				clearInterval(pfpRev)
			}
		}, 100)
	} else {
		document.getElementById("rev-img").src = document.getElementById("mrg-img").src
	}

	const mergeInfo = JSON.parse(sessionStorage.getItem("transfer"))
	if (mergeInfo['t50-username']) {
		$("#merge-username").fadeIn("fast")
	}
	if (mergeInfo['t50pswd']) {
		$("#merge-paswd").fadeIn("fast")
	}
	if (mergeInfo['t50-email']) {
		$("#merge-emails").fadeIn("fast")
	}
	if (mergeInfo['schedule-sort'] || mergeInfo['notes-sort']) {
		$("#merge-tasco").fadeIn("fast")
	}
	if (mergeInfo['t50-autologin']) {
		$("#merge-autolg").fadeIn("fast")
	}
	if (mergeInfo['notifications_seen']) {
		document.getElementById("notifCount").innerHTML = mergeInfo['notifications_seen']
		$("#merge-notifs").fadeIn("fast")
	}
	if (mergeInfo['account']) {
		$("#merge-images").fadeIn("fast")
	}
}

function completeAll() {
	update_complete.play()
	const myinfo = JSON.parse(sessionStorage.getItem("transfer"))
	for (const key in myinfo) {
		if (myinfo.hasOwnProperty(key)) {
			localStorage.setItem(key, myinfo[key]);
		}
	}
	docready('merge')
	document.getElementById("merge_info").classList.remove("active")
}

function incorrectAccount() {
	var url = window.location.href;

	// Find the index of "t50-gateway-alpha/"
	var index = url.indexOf("t50-gateway-alpha/");

	// Check if "t50-gateway-alpha/" is found in the URL
	if (index !== -1) {
		// Remove everything after "t50-gateway-alpha/"
		var newUrl = url.substring(0, index + "t50-gateway-alpha/".length);
		window.location.href = newUrl
	} else {
		console.log("t50-gateway-alpha/ not found in the URL");
	}
}

function registerFlorida() {
	try {
		beamsClient.addDeviceInterest(`${localStorage.getItem("t50-username")}`)
		console.log("Florida Configured Successfully!")
	} catch (error) {
		console.error("Florida Error:", error)
	}

}
let unlTime;
function startUnlock() {

	$("#tips").fadeOut("fast")
	if (sessionStorage.getItem("unl") === "1") {
		pressUnl.play()
		clearTimeout(unlTime)
		document.getElementById("unlDots").innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>
					<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
					<path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
				</svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>`
		sessionStorage.setItem("unl", "2")
		var image = document.getElementById("zoomImage");
		var currentWidth = image.width;
		var currentHeight = image.height;
		image.style.width = currentWidth * 1.1 + "px";
		image.style.height = currentHeight * 1.1 + "px";
		unlTime = setTimeout(function () {
			backUnl.play()
			if (!sessionStorage.getItem("lockNotif")) {

				document.getElementById('foryou').classList.remove('hidden')
			} else {
				tips()
			}

			$("#unlDots").fadeOut("fast")
			document.getElementById("unlDots").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>`
			var image = document.getElementById("zoomImage");
			var currentWidth = image.width;
			var currentHeight = image.height;
			image.style.width = currentWidth / 1.21 + "px";
			image.style.height = currentHeight / 1.21 + "px";
			sessionStorage.removeItem("unl")
		}, 2000)
	} else if (sessionStorage.getItem("unl") === "2") {
		clearTimeout(unlTime)
		document.getElementById("unlDots").innerHTML = `
		<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>
					<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
					<path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
				<path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
			</svg>`
		sessionStorage.setItem("unl", "3")
		var image = document.getElementById("zoomImage");
		var currentWidth = image.width;
		var currentHeight = image.height;
		image.style.width = currentWidth / 2 + "px";
		image.style.height = currentHeight / 2 + "px";
		$("#loadNex").fadeIn("fast")
		successUnl.play()

		$("#lockScreen-pfp").fadeOut("slow", function () {
			$("#lockScreen-signal").fadeOut("slow")
		})
		setTimeout(function () {
			$("#lockscreen").fadeOut("fast")
			setup()
			//login_ok.play()
		}, 1500)
	} else if (sessionStorage.getItem("unl") === "3") {
		console.log("Unlock Now!")
	} else {
		focusUnl.play()
		var image = document.getElementById("zoomImage");
		var currentWidth = image.width;
		var currentHeight = image.height;
		image.style.width = currentWidth * 1.1 + "px";
		image.style.height = currentHeight * 1.1 + "px";
		clearTimeout(unlTime)
		document.getElementById('foryou').classList.add('hidden')
		$("#unlDots").fadeIn("fast")
		sessionStorage.setItem("unl", "1")
		unlTime = setTimeout(function () {
			var image = document.getElementById("zoomImage");
			var currentWidth = image.width;
			var currentHeight = image.height;
			image.style.width = currentWidth / 1.1 + "px";
			image.style.height = currentHeight / 1.1 + "px";
			backUnl.play()

			if (!sessionStorage.getItem("lockNotif")) {
				document.getElementById('foryou').classList.remove('hidden')

			} else {
				tips()
			}
			$("#unlDots").fadeOut("fast")
			document.getElementById("unlDots").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20px" height="20px" viewBox="0 0 24 24">
                        <path fill-rule="evenodd"
                            d="M12 16.5a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0 1.5a6 6 0 100-12 6 6 0 000 12z" />
                    </svg>`
			sessionStorage.removeItem("unl")
		}, 2000)
	}

}

function tips() {
	document.getElementById("tips").innerHTML = `Welcome back`
	$("#tips").fadeIn("slow", function () {
		unlTime = setTimeout(function () {
			$("#tips").fadeOut("slow", function () {
				document.getElementById("tips").innerHTML = `Tap the Evox logo three times to unlock.`
				$("#tips").fadeIn("slow")
			})
		}, 900)

	})

}

function pfpOptions() {
	fetch(`${srv}/profiles?authorize=hasOld&name=${localStorage.getItem("t50-username")}`)
		.then(response => response.text())
		.then(data => {
			if (data === "true") {
				console.log("Old pfp Exists")
				$("#revertpfp").fadeIn("fast")
			} else if (data === "false") {
				console.log("Old pfp doesnt exist", data)
			} else {
				console.log("I dont know if oldPFP exists:", data)
			}
		})
		.catch(error => {
			console.error("Error fetching pfps:", error);
		});
	$("#navigator").fadeOut("fast", function () {
		document.getElementById("main_settings").style.filter = "blur(10px)"
		document.getElementById("profileOptions_box").classList.add("active")
	})
}

function cancelPFPOpt() {
	document.getElementById("profileOptions_box").classList.remove("active")
	$("#navigator").fadeIn("fast")
	document.getElementById("main_settings").style.filter = ""

}

function downloadPFP() {
	document.getElementById("profileOptions_box").classList.remove("active")
	$("#navigator").fadeIn("fast")
	document.getElementById("main_settings").style.filter = ""
	// Get the base64 data from the image element
	const base64 = document.getElementById("usr-img-opt").src;

	// Create an anchor element
	const link = document.createElement("a");

	// Set the href attribute to the base64 data
	link.href = base64;
	link.style.display = "none"

	// Set the download attribute to specify the file name
	link.download = `Evox-${localStorage.getItem("t50-username")}-pfp.png`;

	// Append the anchor element to the document body
	document.body.appendChild(link);

	// Simulate a click on the anchor element to trigger the download
	link.click();

	// Remove the anchor element from the document body
	document.body.removeChild(link);

}

function revertPfp() {
	cancelPFPOpt()
	fetch(`${srv}/profiles?authorize=setOld&name=${localStorage.getItem("t50-username")}`)
		.then(response => response.text())
		.then(data => {
			if (data === "Success") {
				try {
					pfp()
				} catch (error) {
					console.log("Error settings pfp", error)
				}



				loadPFPget(localStorage.getItem("t50-username"))
					.then(image => {
						if (document.getElementById("profile-pfp").src != "reloading-pfp.gif" && image != document.getElementById("usr-img").src) {
							// Open a connection to the IndexedDB database
							const request = indexedDB.open('EvoxSocial');

							request.onerror = function (event) {
								console.log("Error opening database");
							};

							request.onsuccess = function (event) {
								const db = event.target.result;

								// Access the "Profiles" object store
								const transaction = db.transaction(['Profiles'], 'readwrite');
								const objectStore = transaction.objectStore('Profiles');

								// Use the delete() method to remove the value with the specified key
								const deleteRequest = objectStore.delete(localStorage.getItem("t50-username"));

								deleteRequest.onsuccess = function (event) {
									console.log("Value selfuser deleted successfully");
									loadPFPget(localStorage.getItem("t50-username"))
										.then(image => {
											document.getElementById("usr-img").src = image
											document.getElementById("profile-pfp").src = image
										}).catch(error => {
											console.error("No local self image found:", error);
										});
								};

								deleteRequest.onerror = function (event) {
									console.log("Error deleting value selfuser");
								};
							};
						} else {
							document.getElementById("usr-img").src = image
							document.getElementById("profile-pfp").src = image
						}

					})
					.catch(error => {
						console.error("No local self image found:", error);
					});
			} else {
				console.log("I dont know what happened:", data)
			}
		})
		.catch(error => {
			console.error("Error fetching pfps:", error);
		});
}

function cancelSteal() {
	//pfpOptions()
	//document.getElementById("main_settings").style.filter = ""
	document.getElementById("steal_pfp").classList.remove("active")
	//$("#navigator").fadeIn("fast")
}
function steal_pfp() {
	cancelPFPOpt()
	document.getElementById("friends-pfps").innerHTML = ""
	document.getElementById("main_settings").style.filter = "blur(10px)"
	document.getElementById("steal_pfp").classList.add("active")
	$("#navigator").fadeOut("fast")
	const users = JSON.parse(sessionStorage.getItem("usersInfo"));

	// Function to create and append user elements
	function spawnUserElement(username, email) {
		const friendsPfps = document.getElementById("friends-pfps");

		// Create elements
		const userInfo = document.createElement("div");
		userInfo.classList.add("list-user-info");

		const userCircle = document.createElement("div");
		userCircle.classList.add("user-circle");

		const userImg = document.createElement("img");
		userImg.src = ""; // Set the image source here
		userImg.id = `${username}-steal-pfp`
		userImg.alt = "User " + username + " Image";
		userImg.onclick = function () {
			fullimage(this);
		};

		const userDetails = document.createElement("div");
		userDetails.classList.add("user-details");

		const userName = document.createElement("div");
		userName.classList.add("user-name");
		userName.textContent = username;

		addButton = document.createElement("a");
		addButton.href = "#";
		addButton.id = `${username}-toSteal`;
		addButton.onclick = function () {
			stealPFP(this);
		};
		addButton.className = "apple-button-list";
		addButton.textContent = "Steal";

		// Append elements
		userCircle.appendChild(userImg);
		userDetails.appendChild(userName);
		userInfo.appendChild(userCircle);
		userInfo.appendChild(userDetails);
		userInfo.appendChild(addButton);
		friendsPfps.appendChild(userInfo);
	}

	// Iterate through users and spawn elements for those with friends:true
	users.forEach(function (user) {
		if (user.friends) {
			spawnUserElement(user.username, user.email);
			loadPFP(user.username, "-steal-pfp")
		}
	});
}

function stealPFP(elem) {
	//cancelSteal()
	var value = elem.id;
	var userToSteal = value.split('-')[0];
	console.log(userToSteal);
	fetch(`${srv}/profiles?authorize=stealFrom&name=${localStorage.getItem("t50-username")}&pfp=${userToSteal}`)
		.then(response => response.text())
		.then(data => {
			if (data === "Done") {
				cancelPFPOpt()
				try {
					pfp()
				} catch (error) {
					console.log("Error settings pfp", error)
				}



				loadPFPget(localStorage.getItem("t50-username"))
					.then(image => {
						if (document.getElementById("profile-pfp").src != "reloading-pfp.gif" && image != document.getElementById("usr-img").src) {
							// Open a connection to the IndexedDB database
							const request = indexedDB.open('EvoxSocial');

							request.onerror = function (event) {
								console.log("Error opening database");
							};

							request.onsuccess = function (event) {
								const db = event.target.result;

								// Access the "Profiles" object store
								const transaction = db.transaction(['Profiles'], 'readwrite');
								const objectStore = transaction.objectStore('Profiles');

								// Use the delete() method to remove the value with the specified key
								const deleteRequest = objectStore.delete(localStorage.getItem("t50-username"));

								deleteRequest.onsuccess = function (event) {
									console.log("Value selfuser deleted successfully");
									loadPFPget(localStorage.getItem("t50-username"))
										.then(image => {
											document.getElementById("usr-img").src = image
											document.getElementById("profile-pfp").src = image
										}).catch(error => {
											console.error("No local self image found:", error);
										});
								};

								deleteRequest.onerror = function (event) {
									console.log("Error deleting value selfuser");
								};
							};
						} else {
							document.getElementById("usr-img").src = image
							document.getElementById("profile-pfp").src = image
						}
					})

			} else {
				console.log("Something went wrong", data)
			}
		})
		.catch(error => {
			console.error("Steal failed.", error);

		});
}

function showGrounds() {
	document.getElementById("EvoxGrounds").classList.add("active")
	$("#navigator").fadeOut("fast")
	//loadGrounds()
}

function previousFromGrounds() {
	document.getElementById("EvoxGrounds").classList.remove("active")
	$("#navigator").fadeIn("fast")
}

function loadGrounds() {
	$("#noneImg").fadeOut("fast")
	document.getElementById("imageContainer").innerHTML = `<div class="loading loading--circle" id="load-notifications" title="Loading">
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
		<path fill="#fff" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
			<animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform>
		</path>
	</svg>
</div>`
	fetch(`${srv}/grounds?method=getIds&username=${localStorage.getItem("t50-username")}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			if (data !== "None" && JSON.parse(data).files.length !== 0) {
				const jsonIds = JSON.parse(data)
				document.getElementById("imageContainer").innerHTML = ""
				jsonIds.files.forEach(number => {

					var container = document.getElementById("imageContainer");


					// Create an img element
					var img = document.createElement("img");

					// Set the src attribute of the img element
					img.src = `${srv}/grounds?method=getById&username=${localStorage.getItem("t50-username")}&id=${number}`;

					// Optionally, you can set other attributes such as alt, width, height, etc.
					img.onclick = function () {
						groundOptions(this)
						//addbg(this, "true") //convertMe
					};
					img.alt = "Server Failure";
					img.id = `groundImg-${number}`


					// Append the img element to the div container
					container.appendChild(img);
				});
			} else {
				document.getElementById("imageContainer").innerHTML = ""
				$("#noneImg").fadeIn("fast")
				console.log("No grounds")
			}

		}).catch(error => {
			console.error(error);
		});
}

function cancel_groundOptions() {
	document.getElementById("groundIMG_options").classList.remove("active")
	document.getElementById("EvoxGrounds").style.filter = ""
}

function groundOptions(element) {
	document.getElementById("groundIMG_options").classList.add("active")
	document.getElementById("EvoxGrounds").style.filter = "blur(10px)"
	//document.getElementById("groundIMG_options").style.backgroundImage = `url('${element.src}')`
	document.getElementById("groundOptions").innerHTML = ""
	var link = document.createElement("a");
	link.className = "apple-button"
	link.textContent = "Set as current background";
	link.onclick = function () {
		addbg(element, "true");
		cancel_groundOptions();
		login_ok.play();
		//addbg(this, "true") //convertMe
	};
	var groundOptions = document.getElementById("groundOptions");
	groundOptions.appendChild(link);

	var link2 = document.createElement("a");
	link2.className = "apple-button"
	link2.textContent = "Remove image from account";
	link2.onclick = function () {
		removeGround(element)
	};
	groundOptions.appendChild(link2);
}

function removeGround(element) {
	var value = element.id;
	var afterDash = value.split("-")[1];
	console.log("Will remove id", afterDash)
	element.src = "internal/groundsLoading.gif"
	cancel_groundOptions();
	login_ok.play();
	fetch(`${srv}/grounds?method=removeImg&username=${localStorage.getItem("t50-username")}&id=${afterDash}`)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}
			return response.text();
		})
		.then(data => {
			ac_complete.play()
			loadGrounds()

		}).catch(error => {
			console.error(error);
		});
}

function urlToBase64(url) {
	return fetch(url)
		.then(response => response.blob())
		.then(blob => {
			return new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.onloadend = () => resolve(reader.result);
				reader.onerror = reject;
				reader.readAsDataURL(blob);
			});
		});
}

function uploadGround() {
	document.getElementById('upload-ground').click();
}

function groundHandle() {
	const input = document.getElementById('upload-ground');
	const file = input.files[0];

	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			const base64String = e.target.result;
			// Now you have the base64 representation of the selected image
			//console.log(base64String);
			fetch(`${srv}/grounds`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					name: localStorage.getItem("t50-username"),
					method: "add",
					image: base64String
				})
			})
				.then(response => response.text())
				.then(data => {
					console.log(data);
					loadGrounds()

				})
				.catch(error => {
					console.error(error);
				});
		};
		reader.readAsDataURL(file);
	}

	// Reset the input value to allow selecting the same file again
	input.value = '';
}

function notification_optBox(app, element) {
	more_opt.play()
	if (document.getElementById("notification_box").classList.contains("active")) {
		cancel_notifOptions()
		setTimeout(function () {
			document.getElementById("notifications").style.filter = "blur(10px)"
			document.getElementById("notification_box").classList.add("active")
			$("#navigator").fadeOut("fast")
		}, 400)
	} else {
		document.getElementById("notifications").style.filter = "blur(10px)"
		document.getElementById("notification_box").classList.add("active")
		$("#navigator").fadeOut("fast")
	}


	const paragraphElement = element.querySelector('p');
	let paragraphContent; //The notification's text
	// Check if the <p> element exists
	if (paragraphElement) {
		// Get the text content of the <p> element
		paragraphContent = paragraphElement.textContent.trim();
		console.log(paragraphContent); // Output the content of <p>
	} else {
		console.log("No <p> element found in the provided HTML string.");
	}

	const imageElement = element.querySelector('img');

	let imageSrc; //The notification's text
	let imageId; //timestamp base64
	// Check if the <p> element exists
	if (imageElement) {
		imageSrc = imageElement.src.trim();
		imageId = imageElement.id.trim();
	} else {
		console.log("No <img> element found in the provided HTML string.");
	}

	document.getElementById("app-name").innerHTML = app
	document.getElementById("notification-image").src = imageSrc
	document.getElementById("notification-text").innerHTML = paragraphContent

	document.getElementById("notification-buttons").innerHTML = ""
	var notifButtons = document.getElementById("notification-buttons");
	if (app.includes("Secureline") || paragraphContent.includes("IP") || paragraphContent.includes("Password")) {

		var link3 = document.createElement("a");
		link3.className = "apple-button"
		link3.textContent = `Open ${app}`;
		link3.onclick = function () {
			go_to(app, element);
			cancel_notifOptions();
		};
		notifButtons.appendChild(link3);
	}




	var link2 = document.createElement("a");
	link2.className = "apple-button"
	link2.textContent = "Delete Notification";
	link2.style.color = "#ff454b"
	link2.onclick = function () {
		deleteNotification(imageId);
		cancel_notifOptions();
	};
	notifButtons.appendChild(link2);

	var link = document.createElement("a");
	link.className = "apple-button"

	link.textContent = "Cancel";
	link.onclick = function () {
		cancel_notifOptions();
	};

	notifButtons.appendChild(link);
}

function cancel_notifOptions() {
	more_opt_c.play()
	document.getElementById("notifications").style.filter = ""
	document.getElementById("notification_box").classList.remove("active")
	$("#navigator").fadeIn("fast")
}

function deleteNotification(id) {
	let str = id;
	let newStr = str.replace("-floridaINIT", "");
	console.log("Will delete id:", id)
	const url = `${srv}/notifications?process=delete&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}&username=${localStorage.getItem("t50-username")}&id=${newStr}`;
	fetch(url)
		.then(response => response.text())
		.then(data => {
			if (data === "Done") {
				show_notif("no", "reload")
			} else {
				console.log("Something failed:", data)
			}

		})
		.catch(error => {
			console.error(error);
		});
}

function get_discord() {
	document.getElementById("discord_pfp").classList.add("active")
	cancelPFPOpt()
	$("#navigator").fadeOut("fast")
}

function step2Dsc() {
	fetch(`${srv}/profiles?authorize=addFromDiscord&name=${localStorage.getItem("t50-username")}&pfp=${document.getElementById("dsc-id").value}`)
		.then(response => response.text())
		.then(data => {
			if (data === "done") {
				setTimeout(function () {
					$("#dsc-img").fadeOut("fast")
					$("#dsc-txt2").fadeOut("fast")
					$("#dsc-confirm").fadeOut("fast")
					$("#dsc-txt").fadeIn("fast")
					$("#dsc-verify").fadeIn("fast")
					$("#dsc-id").fadeIn("fast")
					cancelDSC()
					setTimeout(function () {
						cancelPFPOpt()
					}, 200)

					try {
						pfp()
					} catch (error) {
						console.log("Error settings pfp", error)
					}



					loadPFPget(localStorage.getItem("t50-username"))
						.then(image => {
							if (document.getElementById("profile-pfp").src != "reloading-pfp.gif" && image != document.getElementById("usr-img").src) {
								// Open a connection to the IndexedDB database
								const request = indexedDB.open('EvoxSocial');

								request.onerror = function (event) {
									console.log("Error opening database");
								};

								request.onsuccess = function (event) {
									const db = event.target.result;

									// Access the "Profiles" object store
									const transaction = db.transaction(['Profiles'], 'readwrite');
									const objectStore = transaction.objectStore('Profiles');

									// Use the delete() method to remove the value with the specified key
									const deleteRequest = objectStore.delete(localStorage.getItem("t50-username"));

									deleteRequest.onsuccess = function (event) {
										console.log("Value selfuser deleted successfully");
										loadPFPget(localStorage.getItem("t50-username"))
											.then(image => {
												document.getElementById("usr-img").src = image
												document.getElementById("profile-pfp").src = image
											}).catch(error => {
												console.error("No local self image found:", error);
											});
									};

									deleteRequest.onerror = function (event) {
										console.log("Error deleting value selfuser");
									};
								};
							} else {
								document.getElementById("usr-img").src = image
								document.getElementById("profile-pfp").src = image
							}
						})
				}, 2000)

			}

		})
		.catch(error => {
			console.error(error);
		});
}

function cancelDSC() {
	document.getElementById("discord_pfp").classList.remove("active")
	pfpOptions()
	$("#navigator").fadeOut("fast")
}

function searchPFP() {
	const dscid = document.getElementById("dsc-id").value
	fetch(`https://discordlookup.mesavirep.xyz/v1/user/${dscid}`)
		.then(response => response.json())
		.then(data => {
			const pfp = data.avatar.link
			document.getElementById("dsc-img").src = pfp
			$("#dsc-txt").fadeOut("fast")
			$("#dsc-verify").fadeOut("fast")
			$("#dsc-id").fadeOut("fast", function () {
				$("#dsc-img").fadeIn("fast")
				$("#dsc-txt2").fadeIn("fast")
				$("#dsc-confirm").fadeIn("fast")
			})

		})
		.catch(error => {
			console.error(error);
		});
}

function bypassSetup() {
	if (confirm('Are you sure you want to bypass normal setup?')) {
		// Save it!
		setup()
		//console.log('Thing was saved to the database.');
	} else {
		// Do nothing!
		console.log('Thing was not saved to the client.');
	}

}
let lnele;
let isLNactive = false;
function createLocalNotification(title, description, image, customTime) {
	if (!title || !description) {
		return;
	} else if (!image) {
		image = "evox-logo-apple.png"
	}
	if (!customTime) {
		customTime = 5000
	}
	let titleEle = document.getElementById("lNotif-title")
	let descEle = document.getElementById("lNotif-desc")
	let imgEle = document.getElementById("lNotif-img")
	let ele = document.getElementById("lnotif")

	if (isLNactive === false) {
		isLNactive = true
		try {
			clearTimeout(lnele)
		} catch (error) {
			console.log("No Lnele")
		}
		imgEle.src = image
		titleEle.innerHTML = title
		if (description.length > 150) {
			let truncated = description.substring(0, 150);
			let lastSpace = truncated.lastIndexOf(' ');

			// Ensure we don't cut a word in half
			if (lastSpace > -1) {
				truncated = truncated.substring(0, lastSpace);
			}

			descEle.innerHTML = truncated + "..";
		} else {
			descEle.innerHTML = description
		}
		ele.classList.add("active")
		lnele = setTimeout(function () { //local notification element
			ele.classList.remove("active")
		}, customTime)
	} else if (isLNactive === true) {
		ele.classList.remove("active")
		clearTimeout(lnele)
		isLNactive = false
		setTimeout(function () {
			createLocalNotification(title, description, image)
		}, 600)
	}

}


function showSlineGrid() {
	navigator('securelineGrid')
	$("#deliv-0-svg").fadeOut("fast", function () {
		document.getElementById("deliv-0-svg").innerHTML = `<svg width="25px" height="25px" style="position:absolute;top: 20px;right:20px;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;"
		xml:space="preserve">
		<path fill="#7697f7"
			d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
			<animateTransform attributeType="XML" attributeName="transform" type="rotate"
				from="0 25 25" to="360 25 25" dur="0.3s" repeatCount="indefinite" />
		</path>
	</svg>`
		$("#deliv-0-svg").fadeIn("fast")
		setTimeout(function () {
			$("#gridSection").fadeOut("fast", function () {
				$("#chats").fadeIn("slow")
				document.getElementById("deliv-0-svg").innerHTML = `<svg style="position:absolute;top: 20px;right:20px;" xmlns="http://www.w3.org/2000/svg"
			width="25px" height="25px" viewBox="0 0 24 24" fill="none">
			<path d="M12 16V8" stroke="#7697f7" stroke-width="1.5" stroke-linecap="round" />
			<path d="M8 14V10" stroke="#7697f7" stroke-width="1.5" stroke-linecap="round" />
			<path d="M16 14V10" stroke="#7697f7" stroke-width="1.5" stroke-linecap="round" />
			<path
				d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22C17.5228 22 22 17.5228 22 12C22 10.1786 21.513 8.47087 20.6622 7"
				stroke="#7697f7" stroke-width="1.5" stroke-linecap="round" />
		</svg>`
			})

		}, 200)
	})


}
let canvasVID;

function canvas() {
	if (document.getElementById("canvas-toggle").innerHTML.includes('svg')) {
		//canvasVID = document.getElementById("user-video-self").src
		document.getElementById("user-video-self").style.display = "none"
		document.getElementById("canvas-toggle").innerHTML = `<img src="canvas-off.png">`
	} else {
		document.getElementById("user-video-self").style.display = ""
		//document.getElementById("user-video-self").src = canvasVID
		document.getElementById("canvas-toggle").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 192 192"><path d="M0 0h192v192H0z" style="fill:none"/><path d="M67.63 35.2h56.75v121.6H67.63zM51.41 136.53H39.25V55.47h12.16m88.16 81.06h13.18V55.47h-13.18" style="stroke-width:12px;fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round"/><path d="M26.08 67.63H20v56.74h6.08m139.84-56.74H172v56.74h-6.08" style="fill:none;stroke-width:8px;stroke:#fff;stroke-linecap:round;stroke-linejoin:round"/></svg>`
	}

}

function changeStatus() {
	document.getElementById("status_box").classList.add("active")
}

function cancel_setStatus() {
	document.getElementById("status_box").classList.remove("active")
}

function setStatus(toWhat) {
	if (toWhat === 'online') {
		fetch(`${srv}/setOnline?username=${localStorage.getItem("t50-username")}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(data => {
				if (data === "200") {
					document.getElementById("options_section_0_status").innerHTML = "Online"
					document.getElementById("status-invisible").style.backgroundColor = '#333'
					document.getElementById("status-online").style.backgroundColor = '#0083fe'
				}

			})
			.catch(error => {
				console.error('Fetch error:', error);
			});
	} else {
		fetch(`${srv}/setOffline?username=${localStorage.getItem("t50-username")}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				return response.text();
			})
			.then(data => {
				if (data === "200") {
					document.getElementById("options_section_0_status").innerHTML = "Invisible"
					document.getElementById("status-online").style.backgroundColor = '#333'
					document.getElementById("status-invisible").style.backgroundColor = '#0083fe'
				}

			})
			.catch(error => {
				console.error('Fetch error:', error);
			});
	}
}

function customizeProfile() {
	document.getElementById("previewProfile").src = `./previewProfile.html?bd=${birth_data}&llogin=${document.getElementById("options_section_0_lastseen").innerHTML}`
	const iframe = document.getElementById('previewProfile');
	currentState = "customize"
	// Ensure the iframe has loaded
	iframe.onload = function () {
		// Access the iframe's document
		const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
		console.log("Iframe Loaded!")
		// Find the target element within the iframe
		const targetElement = iframeDocument.getElementById('user-video-forPreview');
		const theELEMPFP = iframeDocument.getElementById('friend-pfp');

		// Check if the target element exists
		if (targetElement) {
			console.log("Element Found!")
			// Change the innerHTML of the target element
			let countIt;
			setInterval(function () {
				if (targetElement.src !== document.getElementById("user-video-self").src) {
					targetElement.src = document.getElementById("user-video-self").src
				}
				if (theELEMPFP.src !== document.getElementById("profile-pfp").src) {
					theELEMPFP.src = document.getElementById("profile-pfp").src
				}
				//src = srcMAin
				;
			}, 500)

		} else {
			console.error('Target element not found in iframe.');
		}
	};
	$("#main_settings").fadeOut("fast", function () {
		$("#profile-preview").fadeIn("fast")

	})
}

function moreOptions() {
	currentState = "more_options"
	$("#profile-preview").fadeOut("fast", function () {
		$("#profile-options").fadeIn("fast")
	})
}

let clickedBar = 0;
function hideME() {
	clickedBar = clickedBar + 1
	if (clickedBar >= 3) {
		createLocalNotification("Top Navigation Bar Disabled", "The top navbar is now globally disabled.")
		localStorage.setItem("topNav", "disabled")
		document.getElementById("apple-style").classList.remove("active")
	}
}

try {
	document.timeline.targetFPS = 90;
} catch (error) {
	console.error(`FPS Setting Failed To Load. Error: ${error}`)
}

function rotateElement() {
	// Get the element by its ID
	const element = document.getElementById('sendSvg');

	// Check if the element exists
	if (element) {
		// Get the current rotation angle
		const currentRotationMatch = element.style.transform.match(/rotate\((\d+)deg\)/);

		// Initialize current rotation to 0 if not set
		let currentRotation = 0;
		if (currentRotationMatch) {
			currentRotation = parseInt(currentRotationMatch[1], 10);
		}

		// Increment the current rotation by 45 degrees
		let newRotation = currentRotation + 410;

		// Apply the new rotation to the element
		element.style.transform = `rotate(${newRotation}deg)`;
	}
	setTimeout(function () {
		if (element) {
			// Get the current rotation angle
			const currentRotationMatch = element.style.transform.match(/rotate\((\d+)deg\)/);

			// Initialize current rotation to 0 if not set
			let currentRotation = 0;
			if (currentRotationMatch) {
				currentRotation = parseInt(currentRotationMatch[1], 10);
			}

			// Increment the current rotation by 45 degrees
			let newRotation = currentRotation - 410;

			// Apply the new rotation to the element
			element.style.transform = `rotate(${newRotation}deg)`;
		}
	}, 900)
}

function loadOTP() {
	document.getElementById("otpCurrent").innerHTML = `
                <svg width="25px" height="25px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <path fill="#fff"
                        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                        <animateTransform attributeType="XML" attributeName="transform" type="rotate" from="0 25 25"
                            to="360 25 25" dur="0.6s" repeatCount="indefinite" />
                    </path>
                </svg>`
	fetch(`${srv}/otp?method=get&username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
		.then(response => response.text())
		.then(data => {
			if (data !== "Denied") {
				document.getElementById("otpCurrent").innerText = data
			}

		})
		.catch(error => {
			console.error(error);
		});
}

function createOTP() {
	if (document.getElementById("otpCurrent").innerText === "None") {
		fetch(`${srv}/otp?username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
			.then(response => response.text())
			.then(data => {
				if (data !== "Denied") {
					document.getElementById("otpCurrent").innerText = data
					setTimeout(function () {
						loadOTP()
					}, 60000)
				}

			})
			.catch(error => {
				console.error(error);
			});
	}

}

function refreshOTP() {
	fetch(`${srv}/otp?username=${localStorage.getItem("t50-username")}&email=${localStorage.getItem("t50-email")}&password=${atob(localStorage.getItem("t50pswd"))}`)
		.then(response => response.text())
		.then(data => {
			if (data !== "Denied") {
				document.getElementById("otpCurrent").innerText = data
			}

		})
		.catch(error => {
			console.error(error);
		});
}

function addApp() {
	document.getElementById("creationCont").classList.add("active")

	document.getElementById("gateway").style.transform = 'scale(0.97)'
	document.getElementById("gateway").style.opacity = '0.3'
	document.body.style.overflow = 'hidden'
	disableScrolling()
}

const popItCreat = document.getElementById('creationCont');
const grab = document.getElementById('grab');

let startY, startTop;
const threshold = 10; // Threshold in pixels from the top where dragging upwards is allowed

grab.addEventListener('touchstart', function (e) {
	const touch = e.touches[0];
	startY = touch.clientY;
	startTop = parseInt(window.getComputedStyle(popItCreat).top, 10);
	document.addEventListener('touchmove', moveDiv);
	document.addEventListener('touchend', stopMoveDiv);
});

let informed;

function moveDiv(e) {
	const touch = e.touches[0];
	const deltaY = touch.clientY - startY;

	// Calculate the new top position
	let newTop = startTop + deltaY;

	// Restrict movement downwards only
	if (informed === "waiting") {
		informed = 'done'
		document.getElementById("grab").style.backgroundColor = "#333"
	}
	if (newTop < 220) {
		console.warn(newTop)
		return;
	}
	if (newTop > 390) {
		console.warn("will quit", newTop)
		closeCreate()
		setTimeout(function () {
			popItCreat.style.top = '';
		}, 500)
	} else {
		console.warn("relocation", newTop)
	}
	if (newTop > startTop) {
		popItCreat.style.top = newTop + 'px';
	} else if (newTop < startTop && startTop >= threshold) {
		// Allow movement upwards only if above threshold
		popItCreat.style.top = newTop + 'px';
	}
}

function stopMoveDiv() {

	document.removeEventListener('touchmove', moveDiv);
	document.removeEventListener('touchend', stopMoveDiv);

	const elementId = "creationCont";
	const isOutsideViewport = isElementOutsideViewport(elementId);

	if (isOutsideViewport) {
		console.log("Element with ID '" + elementId + "' is outside the viewport.");

		console.warn("will quit")
		closeCreate()
		setTimeout(function () {
			popItCreat.style.top = '';
		}, 500)

	} else {
		console.log("Element with ID '" + elementId + "' is inside the viewport.");
	}
}

function isElementOutsideViewport(elementId) {
	const element = document.getElementById(elementId);

	if (!element) {
		console.warn("Element with ID '" + elementId + "' not found.");
		return false;
	}

	const rect = element.getBoundingClientRect();
	const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

	// Check if the element is outside the viewport
	return rect.bottom < 0 || rect.top > viewportHeight || rect.right < 0 || rect.left > viewportWidth;
}

function closeCreate() {
	enableScrolling()

	document.getElementById("gateway").style.transform = 'scale(1)'
	document.getElementById("gateway").style.opacity = '1'
	document.body.style.overflow = ''

	document.getElementById("creationCont").classList.remove("active")
}

function changePriority() {
	const imgElem = document.getElementById("priorityImg")
	const priorityElem = document.getElementById("priority")
	const priorityJson = ['low', 'med', 'high'] //sorted
	if (imgElem.src.includes("low")) {
		imgElem.src = 'med.svg'
		priorityElem.innerText = 'Medium'
	} else if (imgElem.src.includes("med")) {
		imgElem.src = 'high.svg'
		priorityElem.innerText = 'High'
	} else if (imgElem.src.includes("high")) {
		imgElem.src = 'low.svg'
		priorityElem.innerText = 'Low'
	}
}

async function getFaviconUrl(pageUrl) {
	try {
		// Fetch the HTML content of the page
		const response = await fetch(pageUrl);
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		// Get the text content of the page
		const html = await response.text();

		// Create a new DOMParser to parse the HTML
		const parser = new DOMParser();
		const doc = parser.parseFromString(html, 'text/html');

		// Find the favicon link
		const faviconLink = doc.querySelector('link[rel="icon"], link[rel="shortcut icon"]');

		if (faviconLink) {
			// Return the href attribute of the favicon link
			return faviconLink.href;
		} else {
			return 'Not found';
			//throw new Error('Favicon not found');
		}
	} catch (error) {
		console.error('Error fetching favicon:', error);
		return null;
	}
}

function addAppCustom() {
	console.log("Running")
	const appName = document.getElementById("appNameAdd").value
	const dir = document.getElementById("appURLAdd").value
	let cleanedLoc = window.location.href.replace(/#/g, '');

	const url = `${cleanedLoc}${dir}`;

	// Perform the fetch request
	fetch(url)
		.then(response => {
			// Check if the response status is 404
			if (response.status === 404) {
				document.getElementById('appURLAdd').value = ''
				document.getElementById('appURLAdd').placeholder = 'Directory Not Found'
				setTimeout(function () {
					document.getElementById('appURLAdd').placeholder = 'App directory'
				}, 8000)
				console.log(`Resource not found [${url}] (404)`);
			} else {
				//window.location.href = `${cleanedLoc}${document.getElementById('appURLAdd').value}`
				if (appName !== "") {
					const pageUrl = url; // Replace with the URL of the page you want to fetch
					getFaviconUrl(pageUrl).then(faviconUrl => {
						// Define the substring to remove
						let substringToRemove = 'evox-epsilon/';

						// Find the index of the substring
						let index = faviconUrl.indexOf(substringToRemove);
						let result;
						// Extract everything after the substring
						if (index !== -1) {
							// Add the length of the substring to the index to remove it as well
							result = faviconUrl.slice(index + substringToRemove.length);
							console.log(result); // Output: 'sline.png'
						} else {
							console.log('Substring not found in the URL.');
						}
						let favURL;
						if (faviconUrl === 'Not found') {
							favURL = `${cleanedLoc}evox-logo-apple.png`
						} else {
							favURL = `${url}/${result}`
						}

						console.log('Favicon URL:', favURL);
						if (localStorage.getItem("customApps")) {
							let prevJson = JSON.parse(localStorage.getItem("customApps")) || {};
							const customAppJson = {
								[appName]: {
									'name': appName,
									'dir': dir,
									'verified': true,
									'icon': favURL,
									'type': 'Epsilon'
								}
							};
							prevJson = { ...prevJson, ...customAppJson };
							localStorage.setItem("customApps", JSON.stringify(prevJson));
							addElemApp(customAppJson[appName], 'true')
						} else {
							const customAppJson = {
								[appName]: {
									'name': appName,
									'dir': dir,
									'verified': true,
									'icon': favURL,
									'type': 'Epsilon'
								}
							}
							localStorage.setItem("customApps", JSON.stringify(customAppJson))
							addElemApp(customAppJson[appName], 'true')
						}
						closeCreate()

					});


				}
				document.getElementById('appURLAdd').value = ''
				console.log('Response status:', response.status);
			}

			// You can also handle other status codes or the response body here if needed
			return response.text(); // Assuming the response is in JSON format
		})
		.then(data => {
			// Handle the data from the response if needed
			console.log('Response data:', data);
		})
		.catch(error => {
			// Handle any errors that occurred during the fetch
			console.error('Fetch error:', error);
		});

}

function disableScrolling() {
	window.addEventListener('scroll', preventDefaultScroll, { passive: false });
	window.addEventListener('wheel', preventDefaultScroll, { passive: false });
	window.addEventListener('touchmove', preventDefaultScroll, { passive: false });
	window.addEventListener('keydown', preventDefaultForScrollKeys, { passive: false });
}

function preventDefaultScroll(event) {
	event.preventDefault();
}

function preventDefaultForScrollKeys(event) {
	// Add keycodes for keys you want to disable
	switch (event.keyCode) {
		case 37: // left arrow
		case 38: // up arrow
		case 39: // right arrow
		case 40: // down arrow
		case 32: // spacebar
		case 33: // page up
		case 34: // page down
		case 35: // end
		case 36: // home
			event.preventDefault();
			break;
		default:
			break;
	}
}

function enableScrolling() {
	window.removeEventListener('scroll', preventDefaultScroll);
	window.removeEventListener('wheel', preventDefaultScroll);
	window.removeEventListener('touchmove', preventDefaultScroll);
	window.removeEventListener('keydown', preventDefaultForScrollKeys);
}

function optimize(appName, elem) {
	if (sessionStorage.getItem("block_interactions") === "true") {
		createLocalNotification("Gateway", 'Sorry. Servers Are Offline')
		return;
	}
	var getButton = elem;
	var oldInner = getButton.innerHTML;

	getButton.style.height = "17px"
	getButton.style.width = "30px"
	//height: 17px; width: 30px


	getButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55%" height="55%">
	<circle cx="50" cy="50" r="45" fill="none" stroke="#fff" stroke-width="10">
		<animate attributeName="stroke-dasharray" values="0, 200;200, 0" dur="2s"
			repeatCount="indefinite" />
		<animate attributeName="stroke-dashoffset" values="0, -200;-200, -900" dur="2s"
			repeatCount="indefinite" />
	</circle>
</svg>`;
	const localVal = JSON.parse(localStorage.getItem("customApps"))
	const appValue = localVal[appName]
	setTimeout(function () {

		if (oldInner === "OPTIMIZE") {
			//return_to_options('evox_store'); navigator('settings_tonexus')
			//close_popup()
			//load(app)
			document.getElementById("customizeApp").classList.add('active')
			document.getElementById("customizeApp").innerHTML = `<div style="
    text-align: center; 
    margin-top: 20px; 
    padding: 20px; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    background-color: #fff; 
    max-width: 600px; 
    margin-left: auto; 
    margin-right: auto; 
    font-family: Arial, sans-serif;
    color: #666;
">
    <h3 style="
        color: #333; 
        margin-bottom: 15px; 
        font-size: 24px;
        font-weight: normal;
    ">App Name: ${appName}</h3>
    <p style="
        line-height: 1.6; 
        font-size: 16px; 
        margin: 0;
    ">
        Directory: ${appValue.dir}<br>
        Icon: <img src="${appValue.icon}" width="25px" height="25px" style="
            vertical-align: middle; 
            border-radius: 50%; 
            margin: 0 5px;
        " alt="App Icon"><br>
        [${appValue.icon}]<br>
        App Type: ${appValue.type}<br>
        Endpoints Verified: ${appValue.verified}
    </p>
</div><button onclick='deleteCustomApp("${appName}")' style="margin-top: 15px;
        background-color: #ff0000; /* Bootstrap primary color */
        color: white; 
        border: none; 
        border-radius: 5px; 
        padding: 10px 20px; 
        font-size: 16px; 
        cursor: pointer; 
        transition: background-color 0.3s, transform 0.2s;
        font-family: Arial, sans-serif;
        outline: none;
    " 
    onmouseover="this.style.backgroundColor='#9b3030';" 
    onmouseout="this.style.backgroundColor='#ff0000';"
    onmousedown="this.style.transform='scale(0.98)';"
    onmouseup="this.style.transform='scale(1)';"
	ontouchstart="this.style.transform='scale(0.98)';"
    ontouchend="this.style.transform='scale(1)';">
        Delete
    </button>
	 <button onclick="document.getElementById('customizeApp').classList.remove('active')" style="margin-top: 15px;
        background-color: #007BFF; /* Modern blue color */
        color: white; 
        border: none; 
        border-radius: 5px; 
        padding: 10px 20px; 
        font-size: 16px; 
        cursor: pointer; 
        transition: background-color 0.3s, transform 0.2s;
        font-family: Arial, sans-serif;
        outline: none;
    " 
    onmouseover="this.style.backgroundColor='#0056b3';" 
    onmouseout="this.style.backgroundColor='#007BFF';"
    onmousedown="this.style.transform='scale(0.98)';"
    onmouseup="this.style.transform='scale(1)';"
    ontouchstart="this.style.transform='scale(0.98)';"
    ontouchend="this.style.transform='scale(1)';">
        Go Back
    </button>`
			getButton.style.height = "auto"
			getButton.style.width = "auto"
			//height: 17px; width: 30px
			getButton.innerHTML = oldInner;
			return;
		}
		getButton.style.height = "auto"
		getButton.style.width = "auto"
		//height: 17px; width: 30px
		getButton.innerHTML = oldInner;
		shake_me(`${appName}-get`)
		notice("Access Denied")
	}, 1500)
}

function deleteCustomApp(appN) {
	const localVal = JSON.parse(localStorage.getItem("customApps"))
	const appValue = localVal[appN]
	console.log("Deleting", appValue)
	if(localVal) {
		delete localVal[appN];
		localStorage.setItem("customApps", JSON.stringify(localVal))
		document.getElementById("customizeApp").classList.remove('active')
		setTimeout(function() {
			window.location.reload()
		}, 1000)
	}
	
}
