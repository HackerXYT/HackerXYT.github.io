//IP Auth
let ip = "error";
document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonip.com/')
        .then(response => response.json())
        .then(geo => {
            console.log("IP Modifications:", localStorage.getItem("IPV4") !== geo.ip)
            if (localStorage.getItem("IPV4") !== geo.ip) {
                localStorage.setItem("IPV4", geo.ip);
                console.log("New IP")
            }

            ip = geo.ip;
            clientVerified()
        })
        .catch(error => {
            ip = "offline"
            console.error("YOU ARE OFFLINE")
            console.log('Error:', error);
        });
});
//IndexedDB
function loadPFPget(username) {
    return new Promise((resolve, reject) => {
        checkUsernameAndGetData(username, function (error, data) {
            if (error) {
                console.error(error);
                reject(error);
            } else {

                if (data !== "None") {
                    // Resolve with data if available
                    console.log(`Retrieved profile picture for user [${username}]`);
                    resolve(data.data);
                } else {
                    console.log(`Loaded profile picture for user [${username}]`);
                    fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                            }
                            return response.text();
                        })
                        .then(profileimage => {
                            if (profileimage.indexOf("base64") === -1) {
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

function checkUsernameAndGetData(username, getDataCallback) {
    let request = window.indexedDB.open('EvoxSocial');

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
                    //console.log("Username not found: " + username);
                }
            };

            getRequest.onerror = function (event) {
                console.log("Error checking username:", event.target.error);
            };
        }
    };
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
            console.log(`Operation [${username}] Profile Picture Succeeded.`);
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

//Time Management
function formatTimeDifference(timestamp) {
    // Parse the provided timestamp into a Date object
    const givenDate = new Date(timestamp);
    const now = new Date();

    // Calculate the difference in milliseconds
    const diffMs = now - givenDate;

    // Convert milliseconds into various units
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffWeeks = Math.floor(diffDays / 7);

    // Determine the appropriate format
    if (diffHours < 24) {
        if (diffMinutes < 60) {
            return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`;
        } else {
            return `${diffHours} hour${diffHours !== 1 ? 's' : ''}`;
        }
    } else if (diffDays < 6) {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
    } else if (diffDays >= 7) {
        return `${diffWeeks} week${diffWeeks !== 1 ? 's' : ''}`;
    } else {
        return 'Time difference is too large';
    }
}

//Secureline
// Helper function to format date and time
let lastScrollTop = 0; // Variable to keep track of the last scroll position
let isListening = false;

function handleScroll(event) {
    const securelinePopup = document.querySelector('#secureline');
    const elem = event.target;
    const currentScrollTop = elem.scrollTop;

    if (currentScrollTop > 100) {
        //console.log('Scrolled down by more than', 100, 'pixels');

    } else if (currentScrollTop <= 0) {
        //console.log('Back at the top');
        //securelinePopup.style.height = "60%"
    }

    if (currentScrollTop > lastScrollTop) {
        //console.log('Scrolling down');
        securelinePopup.style.height = "80%"
        const viewportHeight = window.innerHeight;

        // Set the height to be at most 80% of the viewport height
        const maxHeight = viewportHeight * 0.8;

        // Calculate the content height
        const contentHeight = securelinePopup.scrollHeight;

        // Adjust the height
        securelinePopup.style.height = Math.min(maxHeight, contentHeight) + 'px';
    } else if (currentScrollTop < lastScrollTop) {
        //console.log('Scrolling up');
    }

    lastScrollTop = currentScrollTop; // Update the last scroll position
}

function addScrollListener(div) {
    div.addEventListener('scroll', handleScroll);
    isListening = true;
}

function removeScrollListener(div) {
    div.removeEventListener('scroll', handleScroll);
    isListening = false;
}

function loadSecurelineHome() {
    fetch(`${srv}/social?username=${localStorage.getItem("t50-username")}&todo=friends`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("friends", JSON.stringify(data)); // Ensure data is stored as a JSON string
            if (data.length === 0) {
                console.log("No Friends");
                return;
            }

            const container = document.getElementById('secureline-users');
            container.innerHTML = '';
            const targetDiv = document.getElementById('favorites-recommended');
            targetDiv.innerHTML = ''
            const friendPromises = data.map(friend => {
                return new Promise((resolve, reject) => {
                    const userDiv = document.createElement('div');
                    userDiv.className = 'user';
                    userDiv.onclick = function () {
                        const json = {
                            username: friend
                        }
                        openChat(json)
                    };

                    const iconDiv = document.createElement('div');
                    iconDiv.className = 'icon';
                    const img = document.createElement('img');
                    img.className = 'slUserPFP social';
                    img.src = "searching_users.gif";
                    loadPFPget(friend)
                        .then(profileImage => {
                            img.src = profileImage;
                            resolve(); // Resolve the promise when the image is loaded
                        }).catch(error => {
                            console.error(error);
                            resolve(); // Resolve the promise even if there is an error
                        });
                    iconDiv.appendChild(img);

                    const columnDiv = document.createElement('div');
                    columnDiv.className = 'column';
                    const usernameP = document.createElement('p');
                    usernameP.textContent = friend;
                    const messageSpan = document.createElement('span');
                    messageSpan.textContent = 'Loading Messages..';
                    const favorites = localStorage.getItem("favorites")
                    fetch(`${srv}/secureline?method=lastMSG&username=${localStorage.getItem("t50-username")}&recipient_username=${friend}&password=${atob(localStorage.getItem("t50pswd"))}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! Status: ${response.status}`);
                            }
                            return response.text();
                        })
                        .then(lastMsg => {
                            messageSpan.textContent = lastMsg;
                            if (favorites) {
                                const previous = JSON.parse(favorites)
                                if (previous.includes(friend)) {
                                    const blockDiv = document.createElement('div');
                                    blockDiv.className = 'block';
                                    blockDiv.onclick = function () {
                                        const json = {
                                            username: friend,
                                            favorite: true
                                        }
                                        openChat(json)
                                    };

                                    // Create the row div
                                    const rowDiv = document.createElement('div');
                                    rowDiv.className = 'row';

                                    // Create the icon div
                                    const iconDiv = document.createElement('div');
                                    iconDiv.className = 'icon';
                                    iconDiv.innerHTML = `<img class="slUserPFP fav-rec" src="searching_users.gif">`;
                                    loadPFPget(friend)
                                        .then(profileImage => {
                                            iconDiv.innerHTML = `<img class="slUserPFP fav-rec" src="${profileImage}">`;
                                        }).catch(error => {
                                            console.error(error);
                                        });


                                    // Create the column div
                                    const columnDiv = document.createElement('div');
                                    columnDiv.className = 'column';

                                    // Create the paragraph and span elements
                                    const paragraph = document.createElement('p');
                                    paragraph.textContent = friend;

                                    const span = document.createElement('span');

                                    if (lastMsg.length > 15) {
                                        span.textContent = lastMsg.substring(0, 15) + '..'
                                    } else {
                                        span.textContent = lastMsg
                                    }

                                    // Append paragraph and span to the column div
                                    columnDiv.appendChild(paragraph);
                                    columnDiv.appendChild(span);

                                    // Append icon and column to the row div
                                    rowDiv.appendChild(iconDiv);
                                    rowDiv.appendChild(columnDiv);

                                    // Append row to the block div
                                    blockDiv.appendChild(rowDiv);

                                    // Append block to the target div
                                    targetDiv.appendChild(blockDiv);
                                } else {
                                    return;
                                }
                            } else {
                                return;
                            }
                            resolve(); // Resolve the promise when the message is loaded
                        }).catch(error => {
                            console.error(error);
                            resolve(); // Resolve the promise even if there is an error
                        });

                    columnDiv.appendChild(usernameP);
                    columnDiv.appendChild(messageSpan);

                    const favoriteDiv = document.createElement('div');
                    favoriteDiv.className = 'add-favorite';

                    if (favorites) {
                        const previous = JSON.parse(favorites)
                        if (previous.includes(friend)) {
                            return;
                            favoriteDiv.setAttribute('data-status', 'fav');
                            favoriteDiv.setAttribute('data-name', friend);
                            favoriteDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                            <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#7d7e87"/>
                            </svg>`
                        } else {
                            favoriteDiv.setAttribute('data-status', 'default');
                            favoriteDiv.setAttribute('data-name', friend);
                            favoriteDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                        <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#7d7e87" stroke-width="1.5"/>
                        </svg>`
                        }
                    } else {
                        favoriteDiv.setAttribute('data-status', 'default');
                        favoriteDiv.setAttribute('data-name', friend);
                        favoriteDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24" fill="none">
                        <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" stroke="#7d7e87" stroke-width="1.5"/>
                        </svg>`
                    }

                    favoriteDiv.onclick = function (event) {
                        add_favorite(event, this);
                    };

                    userDiv.appendChild(iconDiv);
                    userDiv.appendChild(columnDiv);
                    userDiv.appendChild(favoriteDiv);
                    container.appendChild(userDiv);
                });
            });

            Promise.all(friendPromises)
                .then(() => {
                    // Code to run after all friends are fully processed
                    //const container = document.getElementById('favorites-recommended');
                    //const blocks = Array.from(container.getElementsByClassName('block'));
                    // Reverse the order of these elements
                    //const reversedBlocks = blocks.reverse();
                    //container.innerHTML = '';
                    //reversedBlocks.forEach(block => container.appendChild(block));
                    console.log("All friends have been loaded and displayed.");
                    const securelinePopup = document.querySelector('#secureline');

                    // Get the viewport height
                    const viewportHeight = window.innerHeight;

                    // Get any offsets or margins from the viewport height if applicable
                    // Adjust these values as needed for your specific layout
                    const topOffset = 20; // example value, adjust based on actual layout
                    const bottomOffset = 20; // example value, adjust based on actual layout

                    // Calculate the available height for the #secureline element
                    const availableHeight = viewportHeight - topOffset - bottomOffset;

                    // Calculate the maximum height for the element (80% of the viewport height)
                    const maxHeight = viewportHeight * 0.8;

                    // Calculate the content height
                    const contentHeight = securelinePopup.scrollHeight;

                    // Determine the new height to set
                    const newHeight = Math.min(availableHeight, maxHeight, contentHeight);

                    // Set the height if the new height is different from the current height
                    const currentHeight = parseFloat(window.getComputedStyle(securelinePopup).height);

                    if (newHeight !== currentHeight) {
                        securelinePopup.style.height = newHeight + 'px';
                    }
                    $("#secureline-users").fadeIn("fast")
                    $("#favorites-recommended").fadeIn("fast")

                })
                .catch(error => {
                    console.error(error);
                });
        })
        .catch(error => {
            console.error(error);
        });
}

//Evox Default

function formatDate(date) {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const pad = (num) => num.toString().padStart(2, "0");
    const day = pad(date.getDate());
    const month = months[date.getMonth()];
    const hours = pad(date.getHours() % 12 || 12);
    const minutes = pad(date.getMinutes());
    const ampm = date.getHours() < 12 ? "AM" : "PM";
    return `${day} ${month} &#x2022; ${hours}:${minutes} ${ampm}`;
}

function processMessage(data, element) {
    const creationDate = new Date(data);
    const todayMonth = new Date().getMonth();
    const creationMonth = creationDate.getMonth();
    const creationDay = creationDate.getDate();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (data === "Chat Doesn't Exist") {
        document.getElementById("messages-container").innerHTML = `
        <p class='centered-text'>Chat Hasn't Been Created.
        <button style="margin-top: 20px" id="submit" onclick="create_chat()" class="transparent-button">Create Chat</button></p>`;
        return;
    }

    console.log("Creation:", data);
    const creationText = `${months[creationMonth]} ${creationDay} - ${months[todayMonth]}`;

    console.log("Getting Existing Chat");
    fetch(`https://data.evoxs.xyz/secureline?method=MyChats&username=${localStorage.getItem("t50-username")}&recipient_username=${element.id}&password=${atob(localStorage.getItem("t50pswd"))}`)
        .then(response => response.ok ? response.text() : Promise.reject(`HTTP error! Status: ${response.status}`))
        .then(text => {
            try {
                const data = JSON.parse(text);
                if (!data || !data.messages) throw new Error("Invalid data format");

                const container = document.getElementById("messages-container");
                container.innerHTML = "";

                data.messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp)).forEach(message => {
                    const messageContainer = document.createElement("div");
                    messageContainer.className = "chat-message";

                    const messagePack = document.createElement("div");
                    messagePack.className = message.sender === localStorage.getItem("t50-username") ? "messagePackMe" : "messagePack";

                    const avatar = document.createElement("img");
                    avatar.className = "chat-avatar";
                    //avatar.style.display = 'none'
                    avatar.src = message.sender === localStorage.getItem("t50-username") ? "evox-logo-apple.png" : pfp.src;
                    avatar.alt = message.sender;

                    const content = document.createElement("div");
                    content.className = "message-content";

                    const timestamp = document.createElement("div");
                    timestamp.className = message.sender === localStorage.getItem("t50-username") ? "message-time-me" : "message-time";
                    timestamp.innerHTML = formatDate(new Date(message.timestamp));

                    if (message.content.includes("http") || message.content.includes("https")) {
                        const attachment = document.createElement("div");
                        attachment.className = "attachment";

                        const attachRow = document.createElement("div");
                        attachRow.className = "theRow";

                        const attachIcon = document.createElement("img");
                        attachIcon.src = "./novus/attach.svg";

                        const url = new URL(message.content);
                        const logoUrl = `https://logo.clearbit.com/${url.hostname}`;
                        attachIcon.src = logoUrl;

                        const infoWrap = document.createElement("div");
                        infoWrap.className = "infoWrap";

                        const fileName = message.content.split("/").pop().replace(/\.[^.]+$/, "");
                        const fileType = /\.(pdf|png|jpg|webp|gif|mp4)$/i.exec(message.content)?.[1] || "URL";
                        const fileIcon = fileType === "URL" ? "./novus/attach.svg" : `./novus/${fileType}.svg`;
                        if (fileType === "png" || fileType === "jpg") {
                            attachIcon.src = message.content;
                        } else {
                            attachIcon.src = fileIcon;
                        }


                        const fileTypeInfo = document.createElement("span");
                        fileTypeInfo.innerHTML = `${fileType.toUpperCase()} &#x2022; unkMB`;

                        infoWrap.innerHTML = `<p>${url.hostname}</p>`;
                        infoWrap.appendChild(fileTypeInfo);

                        attachRow.appendChild(attachIcon);
                        attachRow.appendChild(infoWrap);

                        const openButton = document.createElement("img");
                        openButton.src = "./novus/open.svg";
                        openButton.className = "imgBox";
                        openButton.onclick = () => createAndClickHiddenLink(message.content);

                        const downloadButton = document.createElement("img");
                        downloadButton.src = "./novus/download.svg";
                        downloadButton.className = "imgBoxLast";
                        downloadButton.onclick = () => downloadFileDirectly(message.content, fileName);

                        attachRow.appendChild(openButton);
                        attachRow.appendChild(downloadButton);

                        attachment.appendChild(attachRow);
                        content.appendChild(attachment);
                    } else {
                        const name = document.createElement("p");
                        name.className = "nameTopMsg";
                        name.style.display = 'none'
                        name.textContent = message.sender;

                        const msgContent = document.createElement("p");
                        msgContent.className = "msgCont";
                        msgContent.textContent = message.content;

                        content.appendChild(name);
                        content.appendChild(msgContent);
                    }

                    messagePack.appendChild(avatar);
                    messagePack.appendChild(content);
                    messageContainer.appendChild(messagePack);
                    messageContainer.appendChild(timestamp);

                    container.appendChild(messageContainer);
                    const chatdiv = document.getElementById("messages-container");
                    chatdiv.scrollTop = chatdiv.scrollHeight;
                });
            } catch (error) {
                console.error("Error parsing messages:", error);
            }
        })
        .catch(error => console.error("Fetch error:", error));
}

function actionReload(whoto) {
    console.log("Reloading");
    sessionStorage.setItem("current_sline", whoto);
    const element = {
        "id": whoto
    };
    pfp = document.getElementById(`${whoto}-pfp-secureline`);

    fetch(`https://data.evoxs.xyz/secureline?method=MyChats&username=${localStorage.getItem("t50-username")}&recipient_username=${whoto}&password=${atob(localStorage.getItem("t50pswd"))}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(messages => {
            try {
                const integrityCheck = JSON.parse(messages);
            } catch (error) {
                console.error("Possible Account Verification Error:", messages);
                return;
            }
            if (sessionStorage.getItem("lastChatInter") === messages) {
                console.log("No new messages");
                //return;
            }
            sessionStorage.setItem("lastChatInter", messages);
            if (messages === "Chat not created") {
                document.getElementById("messages-container").innerHTML = `<p class='centered-text'>Chat Hasn't Been Created.<button style="margin-top: 20px" id="submit" onclick="create_chat()" class="transparent-button">Create Chat</button></p>`;
                console.log("Chat Doesn't Exist");
                return;
            }
            const jsonData = JSON.parse(messages);

            // Check if jsonData and jsonData.messages are defined before sorting
            if (jsonData && jsonData.messages) {
                const messagesContainer = document.getElementById('messages-container');
                messagesContainer.innerHTML = "";

                // Sort messages by timestamp
                const sortedMessages = jsonData.messages.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

                // Create an array of promises to handle URL accessibility checks
                const messagePromises = sortedMessages.map(message => {
                    return new Promise((resolve, reject) => {
                        const messageElement = document.createElement('div');
                        if (message.content.includes("http") || message.content.includes("https")) {
                            const url = new URL(message.content);
                            const logoUrl = `https://logo.clearbit.com/${url.hostname}`;

                            let infoFile;
                            let fileSrc = false;
                            const filenameWithoutExtension = message.content.split('/').pop().replace(/\.[^.]+$/, '');
                            if (message.content.includes('.pdf')) {
                                fileSrc = './novus/pdf.svg';
                                infoFile = `PDF &#x2022; unknMB`; //${getFileSize(url)}
                            } else if (message.content.includes('.png')) {
                                fileSrc = message.content;
                                infoFile = `PNG &#x2022; unknMB`;
                            } else if (message.content.includes('.jpg')) {
                                fileSrc = message.content;
                                infoFile = `JPG &#x2022; unknMB`;
                            } else if (message.content.includes('.webp')) {
                                fileSrc = message.content;
                                infoFile = `WEBP &#x2022; unknMB`;
                            } else if (message.content.includes('.gif')) {
                                fileSrc = message.content;
                                infoFile = `GIF &#x2022; unknMB`;
                            } else if (message.content.includes('.mp4')) {
                                fileSrc = './novus/video.svg';
                                infoFile = `MP4 &#x2022; unknMB`;
                            } else if (message.content.includes('chatgpt')) {
                                fileSrc = `https://logo.clearbit.com/openai.com`;
                            } else {
                                infoFile = 'URL';
                            }

                            checkUrlAccessibility(logoUrl)
                                .then(not404 => {
                                    if (not404 === true) {
                                        messageElement.innerHTML = `<img class="urlImg" src="${logoUrl}">
                                        <div class="embedCol">
                                            <span>${url.hostname.match(/(?:www\.)?([a-zA-Z0-9-]+)\./)[1]}</span>
                                            <vo>${infoFile}</vo>
                                        </div>
                                        <img class="imgBox" src="./novus/open.svg" style="margin-right: 0px;">`;
                                    } else {
                                        if (fileSrc !== false) {
                                            messageElement.innerHTML = `<img class="urlImg" src="${fileSrc}">
                                            <div class="embedCol">
                                                <span>${url.hostname.match(/(?:www\.)?([a-zA-Z0-9-]+)\./)[1]}</span>
                                                <vo>${infoFile}</vo>
                                            </div>
                                            <img class="imgBox" src="./novus/open.svg" style="margin-right: 0px;">`;
                                        } else {
                                            messageElement.innerHTML = `<img class="urlImg" style="width: 25px;height:25px" src="./novus/attach.svg">
                        <div class="embedCol">
                            <span>${url.hostname.match(/(?:www\.)?([a-zA-Z0-9-]+)\./)[1]}</span>
                            <vo>${infoFile}</vo>
                        </div>
                        <img class="imgBox" src="./novus/open.svg" style="margin-right: 0px;">`;
                                        }
                                    }
                                    // Apply appropriate class based on the sender
                                    if (message.sender === localStorage.getItem("t50-username")) {
                                        messageElement.classList.add('message-me');
                                    } else {
                                        messageElement.classList.add('message');
                                    }
                                    messagesContainer.appendChild(messageElement);
                                    resolve();
                                }).catch(error => {
                                    console.error(error);
                                    resolve(); // Resolve even if there's an error to ensure all messages are processed
                                });
                        } else {
                            // Create a new message element
                            messageElement.textContent = message.content;

                            // Apply appropriate class based on the sender
                            if (message.sender === localStorage.getItem("t50-username")) {
                                messageElement.classList.add('message-me');
                            } else {
                                messageElement.classList.add('message');
                            }

                            // Append the message element to the messages container
                            messagesContainer.appendChild(messageElement);
                            resolve();
                        }
                    });
                });

                // Wait for all promises to complete
                Promise.all(messagePromises)
                    .then(() => {
                        // Scroll to the bottom of the messages container
                        var contentDiv = document.getElementById('messages-container');
                        contentDiv.scrollTop = contentDiv.scrollHeight;
                        console.log("All messages have been processed and displayed.");
                    })
                    .catch(error => {
                        console.error("Error processing messages:", error);
                    });
            } else {
                console.error("JSON data or messages array is undefined.");
            }
        })
        .catch(error => {
            console.error("Error fetching chat messages:", error);
        });
}


function createAndClickHiddenLink(url) {
    // Create a new <a> element
    var link = document.createElement('a');

    // Set the href attribute to the provided URL
    link.href = url;

    // Set target attribute to '_blank' to open in a new tab
    link.target = '_blank';

    // Hide the link using CSS (optional)
    link.style.display = 'none';

    // Append the link to the document body
    document.body.appendChild(link);

    // Simulate a click on the link
    link.click();

    // Remove the link from the DOM (optional)
    document.body.removeChild(link);
}

async function downloadFileDirectly(url, filename) {
    try {
        // Fetch the file data
        const response = await fetch(url);
        const blob = await response.blob();

        // Create a URL for the file blob
        const blobUrl = URL.createObjectURL(blob);

        // Create a link element
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;

        // Append the link to the body
        document.body.appendChild(link);

        // Programmatically click the link to trigger the download
        link.click();

        // Clean up: remove the link and revoke the URL object
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);

    } catch (error) {
        console.error('Error downloading file:', error);
        // Handle error as needed
    }
}

async function checkUrlAccessibility(url) {
    try {
        // Make a request to the URL
        const response = await fetch(url, { method: 'HEAD' });

        // Check if the response status is in the range of successful responses
        if (response.ok) {
            console.log('URL is accessible.');
            return true;
        } else {
            console.log('URL is not accessible. Status:', response.status);
            return false;
        }
    } catch (error) {
        // Handle any errors that occurred during the fetch
        console.error('Error checking URL:', error);
        return false;
    }
}

async function getFileSize(url) {
    try {
      const response = await fetch(url);
  
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Get the Content-Length header which provides the file size in bytes
      const contentLength = response.headers.get('Content-Length');
  
      if (!contentLength) {
        throw new Error('Content-Length header is missing');
      }
  
      // Convert contentLength to a number
      const fileSizeInBytes = parseInt(contentLength, 10);
  
      // Convert bytes to megabytes and gigabytes
      const fileSizeInMB = fileSizeInBytes / (1024 * 1024);
      const fileSizeInGB = fileSizeInBytes / (1024 * 1024 * 1024);
  
      console.log(`File Size: ${fileSizeInBytes} bytes`);
      console.log(`File Size: ${fileSizeInMB.toFixed(2)} MB`);
      console.log(`File Size: ${fileSizeInGB.toFixed(6)} GB`);
  
      return fileSizeInMB.toFixed(2);
    } catch (error) {
      console.error('Error:', error);
    }
  }