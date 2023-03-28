//Last Login Start

document.getElementById("message1img").style.display = "none";
document.getElementById("updatelastmsg2").innerHTML = "<i>Κανενα Μηνυμα</i>"

sessionStorage.removeItem("chat");
included_text = '<div style="display: none">Γρηγορης</div>'
// PROSTHESE ACHIEVEMENTS!!
document.getElementById('lastlogin').innerHTML = `${localStorage.getItem('lastlogin')}`
const lastlogin = new Date();
const year = lastlogin.getFullYear();
const month = lastlogin.getMonth();
const day = lastlogin.getDate();
const hour = lastlogin.getHours();
const minute = lastlogin.getMinutes();
const second = lastlogin.getSeconds();

function readTextFile(file, callback) {
	var rawFile = new XMLHttpRequest();
	rawFile.overrideMimeType('application/json');
	rawFile.open('GET', file, true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4 && rawFile.status == '200') {
			callback(rawFile.responseText);
		}
	};
	rawFile.send(null);
}

document.getElementById("self_user_name").innerHTML = localStorage.getItem("user");
document.getElementById("self_user_image").src = `https://03.memeguy21.repl.co/user-profiles/${localStorage.getItem("user") || 'Ανωνυμος'}.png`
//console.log(`${day}-${month + 1}-${year} ${hour}:${minute}:${second}`);
//Last Login End
function sendimages() {
	socket.emit('message', {
		user: localStorage.getItem("user") || "Ανωνυμος",
		message: `!image`
	});
	//console.log("Images Received")
}

function startTime() {
  let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes()// + ":" + currentDate.getSeconds();
	var elms = document.querySelectorAll("[id='liveclock']");
	for (var i = 0; i < elms.length; i++)
		elms[i].innerHTML = time
}
setInterval(startTime, 1000);

function smileySelect() {
  var emoji = localStorage.getItem("emoji")
	document.getElementById('emoji').value += emoji;
  $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Πληκτρολογηθηκε Φατσουλα</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
};

const emoji_button = document.querySelector("#emoji_button");

emoji_button.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  console.log("Right Click");
  document.getElementById("pills-user-tab").click()
    document.getElementById("emoji_select_dropdown").click()
});

if (localStorage.getItem("banned") === "true") {
	document.getElementsByTagName("body")[0].style.display = "none";
	document.getElementById("error").style.display = "block"
	alert("Ο Διακομιστης δεν ειναι σε λειτουργια αυτη τη στιγμη. Παρακαλω Προσπαθηστε Αργοτερα")
}
if (localStorage.getItem("user") === "Villy") {
	document.getElementsByTagName("body")[0].style.display = "none";
	alert("Ο Διακομιστης δεν ειναι σε λειτουργια αυτη τη στιγμη. Παρακαλω Προσπαθηστε Αργοτερα")
}

//CHECK IF DEVICE INFO ARE GIVEN
if (!localStorage.getItem("device_info")) {

}


var sound = new Howl({
	src: ['https://03.memeguy21.repl.co/Google_Event.mp3'],
	volume: 0.9
});

var connection_closed = new Howl({
	src: ['./internal/connection_closed.mp3'],
	volume: 1.5
});

var not_ready = new Howl({
	src: ['./internal/not_ready.mp3'],
	volume: 0.9
});

var ringtone = new Howl({
	src: ['./internal/ringtone.mp3'],
	volume: 1.5
});

var message = new Howl({
	src: ['https://03.memeguy21.repl.co/notification.mp3'],
	volume: 1
	//Google_Event.mp3
});
var welcome = new Howl({
	src: ['https://03.memeguy21.repl.co/starting.mp3'],
	volume: 2
	//Google_Event.mp3
});

var new_message_sound = new Howl({
	src: ['./internal/new_message.mp3'],
	volume: 0.1
});

var log_out = new Howl({
	src: ['./internal/log_out.mp3'],
	volume: 1
});

var message_sent = new Howl({
	src: ['./internal/message_sent.mp3'],
	volume: 0.5
});

var join = new Howl({
	src: ['./internal/join.mp3'],
	volume: 0.4
});

var update_found = new Howl({
	src: ['./internal/update_found.mp3'],
	volume: 1
});

var webhook = "https://discord.com/api/webhooks/1043238999537483877/MxrPRhDtbBA7ET_dhgccuIuJYRgJD3q_BuSaE0hUDjPUq2FIISDFkvuYsLhiozSLefo8"
var socket = io('https://04.memeguy21.repl.co');
function changeuser() {
	newuser = prompt('Επιλεξτε ενα όνομα χρήστη:');
	if (!newuser) {
		alert('Δεν λειτουργει ετσι! Τωρα θα φαινεστε ως ανωνυμος');
		localStorage.removeItem("user");
	} else {
		localStorage.setItem("user", newuser);
		location.reload()
	}
}
// Get the current username from the cookies
//password = prompt('Εισαγετε τον κωδικο προσβασης:');
//if(password === "1234") {
//	console.log("Authorized!")
//} else {
//	alert("Ο Κωδικος Που Πληκτρολογησατε Ειναι Λαθος!")
//	document.getElementsByTagName("body")[0].style.display = "none";
//	document.getElementById("error").style.display = "block"
//}
  $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Η εφαρμογη ξεκινησε</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	//document.getElementById("profileemail").innerHTML = ``
	let apiKey = 'bdc_1c1de60e20e64208b35420e170705c84';
	$.getJSON('https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey, function(data) {
		var info = JSON.stringify(data, null, 2);
		var datac = JSON.parse(info)
		document.getElementById("profilelocation").innerHTML = datac.country.isoAlpha2
		document.getElementById("profilelocation2").innerHTML = datac.country.isoAlpha2
	});
	var elms = document.querySelectorAll("[id='pfpprofile']");
	for (var i = 0; i < elms.length; i++)
		elms[i].src = `https://03.memeguy21.repl.co/user-profiles/${localStorage.getItem("user") || 'Ανωνυμος'}.png`
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Η εικονα προφιλ εφαρμοστηκε με επιτυχια</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)

	var elm = document.querySelectorAll("[id='profilename']");
	for (var i = 0; i < elms.length; i++)
		elm[i].innerHTML = `${localStorage.getItem("user") || 'Ανωνυμος'}`
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Η εικονα προφιλ εφαρμοστηκε με επιτυχια</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)


	//νεα συνδεση συνδεδεμενου χρηστη
	if (sessionStorage.getItem("skip") === "true") {
		socket.emit('message', {
			user: "<span style='color: blue'>Αυτοματο Μηνυμα</span>",
			message: `Ο Χρηστης <b style="color:#00a12b">${user}</b> επανασυνδεθηκε με επιτυχια!`
		});
		const request = new XMLHttpRequest();
		request.open("POST", webhook);
		request.setRequestHeader('Content-type', 'application/json');
		const params = {
			username: "Συνδεση!",
			avatar_url: "",
			content: `Ο Χρηστης ${user} Επανασυνδεθηκε Με Επιτυχια!`
		}
		request.send(JSON.stringify(params));
	} else {
		socket.emit('message', {
			user: `Διακομιστης`,
			message: `Καλωσορισατε, <b>${localStorage.getItem("user") || 'Ανωνυμος'}</b>!`
		});
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ο Χρηστης ${localStorage.getItem("user")} συνδεθηκε με επιτυχια στον διακομιστη</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
		const request = new XMLHttpRequest();
		request.open("POST", webhook);
		request.setRequestHeader('Content-type', 'application/json');
		const params = {
			username: "Συνδεση!",
			avatar_url: "",
			content: `Ο Χρηστης ${user} Συνδεθηκε Με Επιτυχια!`
		}
		request.send(JSON.stringify(params));
	}


// The user count. Can change when someone joins/leaves
socket.on('count', function(data) {
	$('.user-count').html(data);
});

msgtime1 = "";
msgtime2 = "";

function msgtimeup() {
  if(msgtime1 != null) {
    clearInterval(msgtime1)
  }  
  //Running For Main Channel
  let num = 0;
  // Define a function to increase the number by 1 every minute
  function increaseNum() {
    num += 1;
    if (num > 1) {
      document.getElementById("lastmsgtime").innerHTML = `${num} λεπτα πριν`
    } else {
      document.getElementById("lastmsgtime").innerHTML = `${num} λεπτο πριν`
    }
    //console.log(num);
  }
  msgtime1 = setInterval(increaseNum, 60000);
	//function update() {
	//	document.getElementById("lastmsgtime").innerHTML = "1 λεπτο πριν"
  //  $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Χρονος που σταλθηκε το τελευταιο μηνυμα ανανεωθηκε με επιτυχια</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	//}
	//setTimeout(update, 60000)
}

function msgtimeup_for2() {
  if(msgtime2 != null) {
    clearInterval(msgtime2)
  }
  //Running For Main Channel
  let num = 0;
  // Define a function to increase the number by 1 every minute
  function increaseNum() {
    num += 1;
    if (num > 1) {
      document.getElementById("updatelastmsg_2ndchat").innerHTML = `${num} λεπτα πριν`
    } else {
      document.getElementById("updatelastmsg_2ndchat").innerHTML = `${num} λεπτο πριν`
    }
    //console.log(num);
  }
  msgtime2 = setInterval(increaseNum, 60000);
	//function update() {
	//	document.getElementById("lastmsgtime").innerHTML = "1 λεπτο πριν"
  //  $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Χρονος που σταλθηκε το τελευταιο μηνυμα ανανεωθηκε με επιτυχια</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	//}
	//setTimeout(update, 60000)
}
// When we receive a message
// it will be like { user: 'username', message: 'text' }
socket.on('message', function(data) {
  var text = data.message
  if (text.startsWith("!add") === true) {
    var input = text
    let command = input.split(" ")[0]; // Extract the command (i.e., "!add")
    let value = input.substring(command.length + 1); // Extract the value (i.e., "hello")

    if (command === "!add") {
      let x = value;
      if(x === user) {
        console.log("Cannot Do That! (Add Contact Failure)")
        return;
      }

      //console.log("The value of x is now:", x);

      let url = `https://03.memeguy21.repl.co/user-profiles/${x}.png`
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            localStorage.setItem("contact_favorite_url", url)
            localStorage.setItem("contact_favorite_name", x)
            document.getElementById("chat_2_user_pfp").src = localStorage.getItem("contact_favorite_url")
            document.getElementById("change_chatting_user_username").innerHTML = localStorage.getItem("contact_favorite_name")
            let firstLetter = localStorage.getItem("contact_favorite_name").charAt(0);
            document.getElementById("first_letter_contacts").innerHTML = firstLetter
            document.getElementById("contact_name_change").innerHTML = localStorage.getItem("contact_favorite_name")
            $('#mainchat').append(`<li class="left">
          <div class="conversation-list">
            <div class="chat-avatar">
            <img src="./images/system.png" alt="">
            </div>

            <div class="user-chat-content">
              <div class="ctext-wrap">
                <div class="ctext-wrap-content">
                  <p class="mb-0">
                    Η Αγαπημενη Επαφη Αλλαξε Με Επιτυχια Στον Χρηστη ${x}!
                  </p>
                  <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
                    <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
                  </p>
                </div>
                <div class="dropdown align-self-start">
                  <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i class="ri-more-2-fill"></i>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
                    <a class="dropdown-item" onclick="saveinchat(e)" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
                    <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
                    <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
                  </div>
                </div>
              </div>
              <div class="conversation-name">Συστημα</div>
            </div>
          </div>
        </li>`)
        		document.getElementById("updatelastmsg").innerHTML = `Συστημα: Η Αγαπημενη Επαφη Αλλαξε Με Επιτυχια Στον Χρηστη ${x}!`
          } else if (xhr.status === 404) {
            $('#mainchat').append(`<li class="left">
          <div class="conversation-list">
            <div class="chat-avatar">
            <img src="./images/system.png" alt="">
            </div>

            <div class="user-chat-content">
              <div class="ctext-wrap">
                <div class="ctext-wrap-content">
                  <p class="mb-0">
                    Ο Χρηστης ${x} Δεν Υπαρχει!
                  </p>
                  <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
                    <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
                  </p>
                </div>
                <div class="dropdown align-self-start">
                  <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <i class="ri-more-2-fill"></i>
                  </a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
                    <a class="dropdown-item" onclick="saveinchat(e)" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
                    <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
                    <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
                  </div>
                </div>
              </div>
              <div class="conversation-name">Συστημα</div>
            </div>
          </div>
        </li>`)
        		document.getElementById("updatelastmsg").innerHTML = `Συστημα: Δεν μπορειτε να κανετε αγαπημενη επαφη τον λογαριασμο σας!`
          }
        }
      };

xhr.open("GET", url, true);
xhr.send();
    } else {
      console.log("Invalid command");
    }
  } else if (text.includes(`data:image/png;base64`)) {
    if(data.user != user) {
      $('#mainchat').append(`<li class="left">
      <div class="conversation-list">
          <div class="chat-avatar">
              <img src="https://03.memeguy21.repl.co/user-profiles/${data.user}.png" alt="">
          </div>

          <div class="user-chat-content">
              <div class="ctext-wrap">

                  <div class="ctext-wrap-content">
                      <ul class="list-inline message-img  mb-0">
                          <li class="list-inline-item message-img-list me-2 ms-0">
                              <div>
                                  <a class="popup-img d-inline-block m-1"
                                      href="${text}" title="Project 1">
                                      <img src="${text}" alt=""
                                          class="rounded border">
                                  </a>
                              </div>
                              <div class="message-img-link">
                                  <ul class="list-inline mb-0">
                                      <li class="list-inline-item">
                                          <a download="img-1.jpg"
                                              href="${text}"
                                              class="fw-medium">
                                              <i class="ri-download-2-line"></i>
                                          </a>
                                      </li>
                                      <li class="list-inline-item dropdown">
                                          <a class="dropdown-toggle" href="#" role="button"
                                              data-bs-toggle="dropdown" aria-haspopup="true"
                                              aria-expanded="false">
                                              <i class="ri-more-fill"></i>
                                          </a>
                                          <div class="dropdown-menu">
                                              <a class="dropdown-item" href="#">Αντιγραφη <i
                                                      class="ri-file-copy-line float-end text-muted"></i></a>
                                              <a class="dropdown-item" href="#">Αποθηκευση <i
                                                      class="ri-save-line float-end text-muted"></i></a>
                                              <a class="dropdown-item" href="#">Προωθηση <i
                                                      class="ri-chat-forward-line float-end text-muted"></i></a>
                                              <a class="dropdown-item" href="#">Διαγραφη <i
                                                      class="ri-delete-bin-line float-end text-muted"></i></a>
                                          </div>
                                      </li>
                                  </ul>
                              </div>
                          </li>
                      </ul>
                      <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
                          <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p>
                  </div>

                  <div class="dropdown align-self-start">
                      <a class="dropdown-toggle" href="#" role="button"
                          data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <i class="ri-more-2-fill"></i>
                      </a>
                      <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">Αντιγραφη <i
                                  class="ri-file-copy-line float-end text-muted"></i></a>
                          <a class="dropdown-item" href="#">Αποθηκευση <i
                                  class="ri-save-line float-end text-muted"></i></a>
                          <a class="dropdown-item" href="#">Προωθηση <i
                                  class="ri-chat-forward-line float-end text-muted"></i></a>
                          <a class="dropdown-item" href="#">Διαγραφη <i
                                  class="ri-delete-bin-line float-end text-muted"></i></a>
                      </div>
                  </div>

              </div>

              <div class="conversation-name">${data.user}</div>
          </div>

      </div>
  </li>`)
document.getElementById("updatelastmsg").innerHTML = `${data.user}: Εικονα`
return;
} else {
  $('#mainchat').append(`<li class="right">
                                <div class="conversation-list">
                                    <div class="chat-avatar">
                                        <img src="https://03.memeguy21.repl.co/user-profiles/${data.user}.png" alt="">
                                    </div>

                                    <div class="user-chat-content">
                                        <div class="ctext-wrap">

                                            <div class="ctext-wrap-content">
                                                <ul class="list-inline message-img  mb-0">
                                                    <li class="list-inline-item message-img-list me-2 ms-0">
                                                        <div>
                                                            <a class="popup-img d-inline-block m-1"
                                                                href="${text}" title="Project 1">
                                                                <img src="${text}" alt=""
                                                                    class="rounded border">
                                                            </a>
                                                        </div>
                                                        <div class="message-img-link">
                                                            <ul class="list-inline mb-0">
                                                                <li class="list-inline-item">
                                                                    <a download="img-1.jpg"
                                                                        href="${text}"
                                                                        class="fw-medium">
                                                                        <i class="ri-download-2-line"></i>
                                                                    </a>
                                                                </li>
                                                                <li class="list-inline-item dropdown">
                                                                    <a class="dropdown-toggle" href="#" role="button"
                                                                        data-bs-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                        <i class="ri-more-fill"></i>
                                                                    </a>
                                                                    <div class="dropdown-menu">
                                                                        <a class="dropdown-item" href="#">Αντιγραφη <i
                                                                                class="ri-file-copy-line float-end text-muted"></i></a>
                                                                        <a class="dropdown-item" href="#">Αποθηκευση <i
                                                                                class="ri-save-line float-end text-muted"></i></a>
                                                                        <a class="dropdown-item" href="#">Προωθηση <i
                                                                                class="ri-chat-forward-line float-end text-muted"></i></a>
                                                                        <a class="dropdown-item" href="#">Διαγραφη <i
                                                                                class="ri-delete-bin-line float-end text-muted"></i></a>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
                                                    <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p>
                                            </div>

                                            <div class="dropdown align-self-start">
                                                <a class="dropdown-toggle" href="#" role="button"
                                                    data-bs-toggle="dropdown" aria-haspopup="true"
                                                    aria-expanded="false">
                                                    <i class="ri-more-2-fill"></i>
                                                </a>
                                                <div class="dropdown-menu">
                                                    <a class="dropdown-item" href="#">Αντιγραφη <i
                                                            class="ri-file-copy-line float-end text-muted"></i></a>
                                                    <a class="dropdown-item" href="#">Αποθηκευση <i
                                                            class="ri-save-line float-end text-muted"></i></a>
                                                    <a class="dropdown-item" href="#">Προωθηση <i
                                                            class="ri-chat-forward-line float-end text-muted"></i></a>
                                                    <a class="dropdown-item" href="#">Διαγραφη <i
                                                            class="ri-delete-bin-line float-end text-muted"></i></a>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="conversation-name">${data.user}</div>
                                    </div>

                                </div>
                            </li>`)
        		document.getElementById("updatelastmsg").innerHTML = `${data.user}: Εικονα`
            return;
  }
}
    
    
  //Scroll to the bottom of div
  //var elem = document.getElementById('mainchat');
  //elem.scrollTop = elem.scrollHeight;
  if(document.getElementById("changechat2").classList.contains("active") === true) {
   if(text.includes('<div style="display: none">Γρηγορης</div>')) {
      document.getElementById("new_message_badge_2").style.display = "block"
      document.getElementById("new_message_count_2").innerHTML = "ΝΕΟ"
      console.log("User not in second chat, sending badge")
   }
  } else {
    if(text.includes('<div style="display: none">Γρηγορης</div>')) {
      console.log("User in second chat, not sending badge")
   } else
      document.getElementById("new_message_badge").style.display = "block"
   } 
   //KENTRIKO
	if(data.message === "Start_Call_General") {
    //Call Starting
    document.getElementById("audiocallModal").innerHTML = `
    <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-body">
              <div class="text-center p-4">
                <div class="avatar-lg mx-auto mb-4">
                  <img src="images/socket-io.png" alt="" class="img-thumbnail rounded-circle">
                </div>

                <h5 class="text-truncate">Διακομιστης</h5>
                <p id="updatetext" class="text-muted">Ο χρηστης <b>${data.user}</b> σας καλει!</p>

                <div class="mt-5">
                  <ul class="list-inline mb-1">
                    <li class="list-inline-item px-2 me-2 ms-0">
                      <button onclick="stopcall()" id="auto_close" type="button" class="btn btn-danger avatar-sm rounded-circle"
                        data-bs-dismiss="modal">
                        <span onclick="stopcall()" class="avatar-title bg-transparent font-size-20">
                          <i class="ri-close-fill"></i>
                        </span>
                      </button>
                    </li>
                    <li class="list-inline-item px-2">
                      <a onclick="answercall()"><button type="button" class="btn btn-success avatar-sm rounded-circle">
                        <span onclick="answercall()" class="avatar-title bg-transparent font-size-20">
                          <i class="ri-phone-fill"></i>
                        </span>
                      </button></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>`
        document.getElementById("updaterequired").click()
        ringtone.play()
        if(data.user === "Αλεξια") {
          sessionStorage.setItem("connect_with", "ALEXIA")
        } else if(data.user === "Γρηγορης") {
          sessionStorage.setItem("connect_with", "GREGORY")
        }
        
        setTimeout(function() {
          ringtone.stop()
          connection_closed.play()
          sessionStorage.removeItem("connect_with")
          document.getElementById("auto_close").click()
        }, 28000)
    //Diko soy gia na kanei ringtone ston allon
  } else if(sessionStorage.getItem("chat") === "Γρηγορης" && data.user === `${localStorage.getItem("user") || 'Ανωνυμος'}`) {
    //SECOND CHAT BY CLIENT
    document.getElementById("updatelastmsg_2ndchat").innerHTML = "τωρα"
	  msgtimeup_for2()
    console.log("message sent in second chat by me" )
    message_sent.play()
		//console.log("The message is sent by me")
		$('#secondchat').append(`<li class="right">
  <div class="conversation-list">
    <div class="chat-avatar">
      <img src="https://03.memeguy21.repl.co/user-profiles/${user}.png" alt="">
    </div>

    <div class="user-chat-content">
      <div class="ctext-wrap">
        <div class="ctext-wrap-content">
          <p class="mb-0">
            ${data.message}
          </p>
          <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
            <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
          </p>
        </div>
        <div class="dropdown align-self-start">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
            <a class="dropdown-item" onclick="saveinchat(e)" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
          </div>
        </div>
      </div>
      <div class="conversation-name">${data.user}</div>
    </div>
  </div>
</li>`)
		document.getElementById("updatelastmsg2").innerHTML = `Εσεις: ${data.message}`
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ενα μηνυμα σταλθηκε απο τον χρηστη ${localStorage.getItem("user")}</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
  } else if(data.message.includes(included_text) === true && data.user != `${localStorage.getItem("user") || 'Ανωνυμος'}` === true) {
    //SECOND CHAT OTHER MEMBER
    document.getElementById("updatelastmsg_2ndchat").innerHTML = "τωρα"
	  msgtimeup_for2()
      console.log("message sent in second chat by another person" )
      new_message_sound.play()
      $('#secondchat').append(`<li class="left">
  <div class="conversation-list">
    <div class="chat-avatar">
      <img src="https://03.memeguy21.repl.co/user-profiles/${data.user}.png" alt="">
    </div>

    <div class="user-chat-content">
      <div class="ctext-wrap">
        <div class="ctext-wrap-content">
          <p class="mb-0">
            ${data.message}
          </p>
          <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
            <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
          </p>
        </div>
        <div class="dropdown align-self-start">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
            <a class="dropdown-item" onclick="saveinchat(e)" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
          </div>
        </div>
      </div>
      <div class="conversation-name">${data.user}</div>
    </div>
  </div>
</li>`)
		document.getElementById("updatelastmsg2").innerHTML = `${data.user}: ${data.message}`
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ενα μηνυμα σταλθηκε απο τον χρηστη ${localStorage.getItem("user")}</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
    } else if(data.message.includes(included_text) === false && data.user === `${localStorage.getItem("user") || 'Ανωνυμος'}`) {
      //MAIN CHAT, BY CLIENT
    console.log("message sent in main chat by me" )
    document.getElementById("lastmsgtime").innerHTML = "τωρα"
	  msgtimeup()
    message_sent.play()
		//console.log("The message is sent by me")
		$('#mainchat').append(`<li class="right">
  <div class="conversation-list">
    <div class="chat-avatar">
      <img src="https://03.memeguy21.repl.co/user-profiles/${user}.png" alt="">
    </div>

    <div class="user-chat-content">
      <div class="ctext-wrap">
        <div class="ctext-wrap-content">
          <p class="mb-0">
            ${data.message}
          </p>
          <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
            <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
          </p>
        </div>
        <div class="dropdown align-self-start">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
            <a class="dropdown-item" onclick="saveinchat(e)" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
          </div>
        </div>
      </div>
      <div class="conversation-name">${data.user}</div>
    </div>
  </div>
</li>`)
		document.getElementById("updatelastmsg").innerHTML = `Εσεις: ${data.message}`
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ενα μηνυμα σταλθηκε απο τον χρηστη ${localStorage.getItem("user")}</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	} else if(data.user != `${localStorage.getItem("user") || 'Ανωνυμος'}`) {
    //MAIN CHAT BY MEMBER
		console.log("message sent in main chat by another person" )
    document.getElementById("lastmsgtime").innerHTML = "τωρα"
	  msgtimeup()
		if (data.user === "Διακομιστης") {
      if(localStorage.getItem("update_status") === "true") {
        join.play()
      }
			//console.log(true)
			$('#mainchat').append(`<li class="left">
  <div class="conversation-list">
    <div class="chat-avatar">
      <img src="images/socket-io.png" alt="">
    </div>

    <div class="user-chat-content">
      <div class="ctext-wrap">
        <div class="ctext-wrap-content">
          <p class="mb-0">
            ${data.message}
          </p>
          <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
            <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
          </p>
        </div>
        <div class="dropdown align-self-start">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
            <a class="dropdown-item" onclick="saveinchat()" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
          </div>
        </div>
      </div>
      <div class="conversation-name">${data.user}</div>
    </div>
  </div>
</li>`)
			document.getElementById("updatelastmsg").innerHTML = `${data.message}`
			//play
      $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ο διακομιστης εστειλε ενα μηνυμα</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
		} else {
      $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ο Χρηστης ${data.user} εστειλε ενα μηνυμα</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
			new_message_sound.play()
			//$('#mainchat').append('<p><strong>' + data.user + '</strong>: ' + data.message + '</p>');
			$('#mainchat').append(`<li class="left">
  <div class="conversation-list">
    <div class="chat-avatar">
      <img src="https://03.memeguy21.repl.co/user-profiles/${data.user}.png" alt="">
    </div>

    <div class="user-chat-content">
      <div class="ctext-wrap">
        <div class="ctext-wrap-content">
          <p class="mb-0">
            ${data.message}
          </p>
          <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
            <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
          </p>
        </div>
        <div class="dropdown align-self-start">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
            <a class="dropdown-item" onclick="saveinchat(e)" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
          </div>
        </div>
      </div>
      <div class="conversation-name">${data.user}</div>
    </div>
  </div>
</li>`)
			document.getElementById("updatelastmsg").innerHTML = `${data.user}: ${data.message}`
		}
	}

});

socket.on('disconnect', () => {
  $('#general_logs').append(`<li id="reconnectdiv" class="left"><div id="reconnect" class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Εγινε Αποσυνδεση Απο Τον Διακομιστη</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	socket.emit('message', {
		user: "Διακομιστης",
		message: `Ο Χρηστης ${user} επανασυνδεθηκε`
	});
  //setTimeout(function() {
	//	var elms = document.querySelectorAll("[id='reconnectdiv']");
  //  var child = document.getElementById("reconnect")
	//for (var i = 0; i < elms.length; i++)
	//	elms[i].removeChild(child);
  //  console.log("done")
	//}, 2500);
})

// When the form is submitted
$('form').submit(function(e) {
	//FIX MSGS POSITION
	// Avoid submitting it through HTTP
	e.preventDefault();

	// Retrieve the message from the user
	var message = $(e.target).find('input').val();

	// Send the message to the server
	if (message === "") {
    //++ NA SBHNETAI TO MHNYMA META APO LIGH WRA
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ενα μηνυμα χωρις περιεχομενο πληκτρολογηθηκε </p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
		//console.log("false info given")
    //error_sound.play()
    return;
	}else if(sessionStorage.getItem("chat") === "Γρηγορης") {
    //add logs
    socket.emit('message', {
			user: `${localStorage.getItem("user") || 'Ανωνυμος'}`,
			message: `<div style="display: none">Γρηγορης</div>${message}`
		});
  }else {
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ενα μηνυμα σταλθηκε</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
		socket.emit('message', {
			user: `${localStorage.getItem("user") || 'Ανωνυμος'}`,
			message: `${message}`
		});
	}

	// Clear the input and focus it for a new message
	e.target.reset();
	const request = new XMLHttpRequest();
	request.open("POST", webhook);
	request.setRequestHeader('Content-type', 'application/json');
	const params = {
		username: "Message",
		avatar_url: "",
		content: `${user}: ${message}`
	}
	request.send(JSON.stringify(params));
	$(e.target).find('input').focus();

});

function reload() {
	sessionStorage.setItem("skip", true)
	location.reload()
}

var calling = new Howl({
	src: ['./internal/applied.mp3'],
	volume: 1
});

var applied_off = new Howl({
	src: ['./internal/applied_off.mp3'],
	volume: 1
});

var failed = new Howl({
	src: ['./internal/understood.mp3'],
	volume: 1
});

function startcall() {
  $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Η Ηχητικη Κληση Ξεκινησε</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	calling.play()
	document.getElementById("callstatus").innerHTML = "Συνδεση.."
	setTimeout(function() {
		window.location.href = "index.ejs"
	}, 400);

}

function stopcall() {
  $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Η Ηχητικη Κληση Ακυρωθηκε</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
  $('#error_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p style="color:#FFCCCB" class="mb-0">Η Ηχητικη Κληση δεν μπορεσε να ακυρωθει</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	calling.stop()
  clearTimeout(redirect)
	document.getElementById("callstatus").innerHTML = "Ακυρωση.."
	setTimeout(function() {
		document.getElementById("callstatus").innerHTML = "Ξεκινηστε Βιντεο Κληση"
	}, 1500);
}

$('#songrequest').bind('keyup', function(e) {
	var element = document.getElementById("songrequest")
	if (e.keyCode === 13) { // 13 is the enter key


		//console.log("Sending Songs")


		/*$('#mainchat').append(`<li class="left">
  <div class="conversation-list">
    <div class="chat-avatar">
      <img src="images/socket-io.png" alt="">
    </div>

    <div class="user-chat-content">
      <div class="ctext-wrap">
        <div class="ctext-wrap-content">
          <p class="mb-0">
            <strong>Τελεια!</strong> Τo Τραγουδι <span style="color: lime">${element.value}</span> σταλθηκε στον διακομιστη και θα ειναι ετοιμο για ληψη σε 6-24ωρες!
          </p>
          <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
            <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
          </p>
        </div>
        <div class="dropdown align-self-start">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
          </div>
        </div>
      </div>
      <div class="conversation-name">Διακομιστης</div>
    </div>
  </div>
</li>`) */
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Ενα τραγουδι ζητηθηκε και σταλθηκε στον διακομιστη</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
		//document.getElementById("updatelastmsg").innerHTML = `<strong>Τελεια!</strong> Τo Τραγουδι <span style="color: lime">${element.value}</span> σταλθηκε στον διακομιστη και θα ειναι ετοιμο για ληψη σε 6-24ωρες!`
		const request = new XMLHttpRequest();
		request.open("POST", webhook);
		request.setRequestHeader('Content-type', 'application/json');
		const params = {
			username: "Song Request",
			avatar_url: "",
			content: `**${localStorage.getItem("user")}** Requested A Song With The Name: *${element.value}*`
		}
		request.send(JSON.stringify(params));
		localStorage.setItem(element.value, "Song")

		//console.log(element.value)
    notyf.success('Τo τραγουδι σταλθηκε στον διακομιστη και θα ειναι ετοιμο για ληψη σε 6-24ωρες!');

	}

});

function getsongs() {
	//Download Songs That Are Ready

	readTextFile("https://03.memeguy21.repl.co/ready.json", function(text) {
		var ready = JSON.parse(text)
		//console.log(ready)
		$('#mainchat').append(`<li class="left">
  <div class="conversation-list">
    <div class="chat-avatar">
      <img src="images/socket-io.png" alt="">
    </div>

    <div class="user-chat-content">
      <div class="ctext-wrap">
        <div class="ctext-wrap-content">
          <p class="mb-0">
            <strong>Εδω ειναι ολα τα ετοιμα τραγουδια για ληψη:</strong><br>
						&nbsp;&nbsp;${ready.s1.name}, <a style="color: cyan" href="${ready.s1.url}" download>Ληψη</a><br>
						&nbsp;&nbsp;${ready.s2.name}, <a style="color: cyan" href="${ready.s2.url}" download>Ληψη</a><br>
						&nbsp;&nbsp;${ready.s3.name}, <a style="color: cyan" href="${ready.s3.url}" download>Ληψη</a><br>
						&nbsp;&nbsp;${ready.s4.name}, <a style="color: cyan" href="${ready.s4.url}" download>Ληψη</a>
          </p> 
          <p class="chat-time mb-0"><i class="ri-time-line align-middle"></i>
            <span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span>
          </p>
        </div>
        <div class="dropdown align-self-start">
          <a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true"
            aria-expanded="false">
            <i class="ri-more-2-fill"></i>
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">Αντιγραφη <i class="ri-file-copy-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Αποθηκευση <i class="ri-save-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Προωθηση <i class="ri-chat-forward-line float-end text-muted"></i></a>
            <a class="dropdown-item" href="#">Διαγραφη <i class="ri-delete-bin-line float-end text-muted"></i></a>
          </div>
        </div>
      </div>
      <div class="conversation-name">Διακομιστης</div>
    </div>
  </div>
</li>`)
		document.getElementById("updatelastmsg").innerHTML = `<strong>Εδω ειναι ολα τα ετοιμα τραγουδια για ληψη:</strong>`
    $('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Τα διαθεσιμα για ληψη τραγουδια εμφανιστηκαν</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
	})
}

$('#general_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">Εγινε ενημερωση τελευταιας συνδεσης</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)

window.onerror = function(msg) {
    console.error("Error Logged To Html Console")
    console.error(msg)
    $('#error_logs').append(`<li class="left"><div class="conversation-list"><div class="chat-avatar"><img src="images/socket-io.png" alt=""></div><div class="user-chat-content"><div class="ctext-wrap"><div class="ctext-wrap-content"><p class="mb-0">${msg}</p><p class="chat-time mb-0"><i class="ri-time-line align-middle"></i><span class="align-middle">${new Date().getHours() + ":" + new Date().getMinutes()}</span></p></div><div class="dropdown align-self-start"><a class="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="ri-more-2-fill"></i></a><div class="dropdown-menu"><a class="dropdown-item" href="#">Copy <i class="ri-file-copy-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Save <i class="ri-save-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Forward <i class="ri-chat-forward-line float-end text-muted"></i></a><a class="dropdown-item" href="#">Delete <i class="ri-delete-bin-line float-end text-muted"></i></a></div></div></div><div class="conversation-name">Διακομιστης</div></div></div></li>`)
    return true;
}

function clear_chat() {
  const myNode = document.getElementById("mainchat");
  myNode.innerHTML = '';
}

function delete_msg(e) {
  //????
  alert(e.srcElement); // the DOMElement object
    alert(e.srcElement.id); // the object's id
    console.log("e")
    console.log(e.target)
}

function saveinchat(e) {
  alert(e.target); // the DOMElement object
  alert(e.target.id); // the object's id
  console.log("saveinchat")
}

localStorage.setItem("lastlogin", `${day}/${month + 1}/${year} ${hour}:${minute}`)

function logout() {
  log_out.play()
  setTimeout(function() {
    window.location.href='./Login-Files/login.html'
    localStorage.clear()
  }, 550)
}

function answercall() {
  ringtone.stop()
  calling.play()
  setTimeout(function() {
  	window.location.href = "index.ejs"
  }, 400);
}

function stopcall() {
  ringtone.stop()
  connection_closed.play()
  sessionStorage.removeItem("connect_with")
}

function save_song() {
  var song = document.getElementById("song_to_save").value
  localStorage.setItem(`saved_song_${Math.floor(Math.random() * 100000)}`, song)
  calling.play()
}