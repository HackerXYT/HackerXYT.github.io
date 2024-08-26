let selected = null;
let info = null;
let mode = "b"
function retryLogin() {
    document.getElementById("mhUsername").value = ''
    document.getElementById("mhCode").value = ''
    document.getElementById("loginDiv").classList.remove("active")
    document.getElementById("mainContainer").style.transform = "scale(1)"
    setTimeout(function () {
        document.getElementById("main").style.display = ""
        document.getElementById("notiText").style.display = "none"
        document.getElementById("error").style.display = "none"
        document.getElementById("loginDiv").classList.add("active")
        document.getElementById("mainContainer").style.transform = "scale(0.98)"
    }, 500)
}

let types = [];

const inputElement = document.getElementById('mhCode');

// Check if the input element exists
if (inputElement) {
    // Add event listener for the keydown event
    inputElement.addEventListener('keydown', function (event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            // Prevent the default action (e.g., form submission)
            event.preventDefault();
            // Call the function
            loginNow()
        }
    });
}
const inputElement2 = document.getElementById('mhUsername');

// Check if the input element exists
if (inputElement2) {
    // Add event listener for the keydown event
    inputElement2.addEventListener('keydown', function (event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.key === 'Enter') {
            // Prevent the default action (e.g., form submission)
            event.preventDefault();
            // Call the function
            reqOtp()
        }
    });
}
function reqOtp() {
    if (document.getElementById("mhUsername").value === '') {
        alert("Username is empty!")
        return;
    }
    fetch(`${srv}/otp?username=${document.getElementById("mhUsername").value}&method=request`)
        .then(response => response.text())
        .then(data => {
            if (data === 'Done') {
                document.getElementById("otpReq").style.display = 'none'
                setTimeout(function () {
                    document.getElementById("otpReq").style.display = ''
                }, 10000)
            } else {
                alert(`OTP Error ${data}`)
            }
        })
        .catch(error => {
            alert("An otp error occured!", error)
            console.error(error);
        });
}
function loginNow() {
    if (document.getElementById("mhUsername").value === '') {
        alert("Username is empty!")
        return;
    }
    if (document.getElementById("mhCode").value === '') {
        alert("Code is empty!")
        return;
    }
    fetch(`${srv}/otp?method=hologram&username=${document.getElementById("mhUsername").value}&code=${document.getElementById("mhCode").value}`)
        .then(response => response.text())
        .then(data => {
            console.log(data)
            if (data === "Limited") {
                document.getElementById("loginDiv").classList.remove("active")
                document.getElementById("mainContainer").style.transform = "scale(1)"
                setTimeout(function () {
                    document.getElementById("main").style.display = "none"
                    document.getElementById("notiText").style.display = ""
                    document.getElementById("error").style.display = ""
                    document.getElementById("notiText").innerText = "Your account is not compatible with Hologram"
                    document.getElementById("loginDiv").classList.add("active")
                    document.getElementById("mainContainer").style.transform = "scale(0.98)"
                }, 500)
            } else if (data === "No") {
                document.getElementById("loginDiv").classList.remove("active")
                document.getElementById("mainContainer").style.transform = "scale(1)"
                setTimeout(function () {
                    document.getElementById("main").style.display = "none"
                    document.getElementById("notiText").style.display = ""
                    document.getElementById("error").style.display = ""
                    document.getElementById("notiText").innerText = "The code you provided is incorrect or expired."
                    document.getElementById("loginDiv").classList.add("active")
                    document.getElementById("mainContainer").style.transform = "scale(0.98)"
                }, 500)
            } else {
                document.getElementById("loginDiv").classList.remove("active")
                document.getElementById("mainContainer").style.transform = "scale(1)"
                const accJson = JSON.parse(data)
                localStorage.setItem("t50-email", accJson.email)
                localStorage.setItem("t50-username", accJson.username)
                localStorage.setItem("t50pswd", btoa(accJson.password))
                setTimeout(function () {
                    window.location.reload()
                }, 800)

            }

        })
        .catch(error => {
            alert(`An otp verification error occured! ${error}`)
            console.error(error);
        });
}
function onlineMode() {
    if (localStorage.getItem("online-mode") === "true") {
        const root = document.documentElement;
        root.style.setProperty('--con-type', 'var(--con-type-offline)');
        localStorage.removeItem("online-mode")
        localStorage.setItem("srv", "http://192.168.1.126:4000")
        setTimeout(function () {
            window.location.reload()
        }, 800)

    } else {
        const root = document.documentElement;
        root.style.setProperty('--con-type', 'var(--con-type-online)');
        localStorage.setItem("online-mode", "true")
        localStorage.setItem("srv", "https://data.evoxs.xyz")
        setTimeout(function () {
            window.location.reload()
        }, 800)
    }
}
if (!localStorage.getItem("t50-username") || !localStorage.getItem("t50pswd")) {
    function getep() {
        // Prompt for email
        const username = prompt("Please enter your username:");

        // Check if email is provided
        if (!username) {
            alert("Username is required!");
            return;
        }

        const email = prompt("Please enter your email:");

        // Check if email is provided
        if (!email) {
            alert("Email is required!");
            return;
        }

        // Prompt for password
        const password = prompt("Please enter your password:");

        // Check if password is provided
        if (!password) {
            alert("Password is required!");
            return;
        }

        // Display entered email and password
        alert(`Connecting to Vox..`);
        localStorage.setItem("t50-email", email)
        localStorage.setItem("t50pswd", `${btoa(password)}`)
        localStorage.setItem("t50-username", username)
        window.location.reload()
    }

    document.getElementById("mainContainer").style.transform = "scale(0.98)"
    document.getElementById("loginDiv").classList.add("active")
    //getep()

} else {
    if (localStorage.getItem("online-mode") === "true") {
        const root = document.documentElement;
        root.style.setProperty('--con-type', 'var(--con-type-online)');
    }
    begin()
    if (navigator.onLine) {
        console.log("The user is online.");
        fetch(`${srv}/images/checkOwnerShip?username=${localStorage.getItem("t50-username")}&password=${atob(localStorage.getItem("t50pswd"))}&email=${localStorage.getItem("t50-email")}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Modify this based on your API's requirements
            }
        })
            .then(response => response.text())
            .then(data => {
                //console.log(data)
                if (data === "Accepted") {
                    console.log("All ok")
                } else {
                    alert("far you go..")
                    alert(`fatal reject triggered by checkOwnership function.\nConnection with server succeeded but response was: ${data}.\n\nHologram will now reload.`)
                    //localStorage.clear()
                    window.location.reload()

                }
                document.getElementById("me").src = "notyetloaded.gif";
                fetch(`${srv}/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${localStorage.getItem("t50-username")}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.text();
                    })
                    .then(profileimage => {
                        if (profileimage.indexOf("base64") === -1) {
                            ////console.log("Fixing Base64");
                            profileimage = "data:image/jpeg;base64," + profileimage;
                        }
                        // Resolve with profile image
                        document.getElementById("me").src = profileimage
                    })
                    .catch(error => {
                        console.error("Cannot set src for", username);
                        console.error(error);
                        reject(error);
                    });

            }).catch(error => {
                // Handle errors
                alert(`Debug.\nClient responded as ${navigator.onLine} on request for navigator.onLine,\nbut authorization request failed with error:\n${error}\n\nClient will continue with function 'loadStories()'.`)
                loadStories()
                console.warn('Profile Picture Failed To Load:', error)
                console.error('Error:', error);
            });
        fetch(`${srv}/images-database?method=getTypes&password=${atob(localStorage.getItem("t50pswd"))}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Modify this based on your API's requirements
            }
        })
            .then(response => response.json())
            .then(data => {
                types = data
                localStorage.setItem("types", JSON.stringify(data))
                loadStories()
            }).catch(error => {
                // Handle errors
                if(localStorage.getItem("types")) {
                    const data = JSON.parse(localStorage.getItem("types"))
                    types = data
                    loadStories()
                }
                
                
                
                //alert('getTypes rejected', error);
                console.error('Error:', error);
            });
    } else {
        loadStories()
        console.log("The user is offline.");
    }


}

function openDatabase() {
    return new Promise((resolve, reject) => {
        const dbRequest = indexedDB.open('imagesDB', 1); // Ensure the version is correct (1 in this case)

        dbRequest.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('images')) {
                db.createObjectStore('images', { keyPath: 'name' });
            }
        };

        dbRequest.onsuccess = function (event) {
            resolve(event.target.result);
        };

        dbRequest.onerror = function (event) {
            reject('Failed to open IndexedDB:', event.target.errorCode);
        };
    });
}

async function fetchImageAndSaveToIndexedDB(imageUrl) {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    return blob;
}
async function saveImageToIndexedDB(imageBlob, imageName) {
    const dbRequest = indexedDB.open('imagesDB', 1);

    dbRequest.onupgradeneeded = function (event) {
        const db = event.target.result;
        db.createObjectStore('images', { keyPath: 'name' });
    };

    dbRequest.onsuccess = function (event) {
        const db = event.target.result;
        const transaction = db.transaction(['images'], 'readwrite');
        const store = transaction.objectStore('images');
        store.put({ name: imageName, blob: imageBlob });
    };

    dbRequest.onerror = function (event) {
        console.error('Error opening IndexedDB:', event.target.errorCode);
    };
}

async function cacheImage(imageUrl, imageName) {
    const imageBlob = await fetchImageAndSaveToIndexedDB(imageUrl);
    await saveImageToIndexedDB(imageBlob, imageName);
}

function loadImageFromIndexedDB(imageName) {
    return new Promise((resolve, reject) => {
        openDatabase().then(db => {
            const transaction = db.transaction(['images'], 'readonly');
            const store = transaction.objectStore('images');
            const getRequest = store.get(imageName);

            getRequest.onsuccess = function (event) {
                const record = event.target.result;
                if (record) {
                    const url = URL.createObjectURL(record.blob);
                    resolve(url); // Return the Blob URL
                } else {
                    reject('Image not found in IndexedDB');
                }
            };

            getRequest.onerror = function () {
                reject('Failed to retrieve the image from IndexedDB');
            };
        }).catch(error => {
            reject(error);
        });
    });
}


let postCount = 0
let loaded = []
function dbload() {
    fetch(`${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&method=getIDs`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Modify this based on your API's requirements
        }
    })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("getIds", JSON.stringify(data))
            const numberOfValues = data.length;
            //const numberOfValues = 50
            postCount = numberOfValues
            data.sort((a, b) => {
                // Extract the numeric part of the filenames
                let numA = parseInt(a.match(/\d+/)[0]);
                let numB = parseInt(b.match(/\d+/)[0]);

                // Compare the numeric parts
                return numA - numB;
            });

            const container = document.getElementById("images-container");
            container.innerHTML = ""; // Clear the container once before the loop

            //setTimeout(function () {
            //    const transparent = document.createElement("div");
            //    transparent.className = "transparent-placeholder";
            //    container.appendChild(transparent);
            //}, 800);
            data.forEach(value => {
                let number = value.match(/\d+/)[0];
                ////console.log("num:", number);

                // Create and append the transparent placeholder


                // Create and append the image element
                const div = document.createElement("div");
                div.className = `image`;
                div.id = `item${number}`;

                // Create an img element
                const img = document.createElement("img");
                img.alt = `Image ${number}`;
                img.id = `img${number}`;

                // Set initial placeholder src
                img.src = "searching_users.gif";
                const imageName = `image${number}.png`;
                // Attempt to load the image from IndexedDB
                loadImageFromIndexedDB(`image${number}.png`).then(imageSrc => {
                    console.log("Image Found! Loading From IndexedDB");
                    img.src = imageSrc; // Set image source to Blob URL from IndexedDB
                    loaded.push(`image${number}.png`)
                    refreshPercent()
                }).catch(error => {
                    console.log("Image not found in IndexedDB, loading from network", error);

                    // Fallback to network URL
                    img.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                    // Fetch and cache the image
                    fetch(img.src).then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.blob(); // Get the image as a Blob
                    }).then(blob => {
                        // Cache the image in IndexedDB
                        cacheImage(URL.createObjectURL(blob), `image${number}.png`);
                        const blobUrl = URL.createObjectURL(blob); // Create a Blob URL
                        img.src = blobUrl
                        loaded.push(`image${number}.png`)
                        refreshPercent()
                    }).catch(fetchError => {
                        console.error('Error fetching or caching image:', fetchError);
                    });
                })
                //img.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                img.onclick = function () {
                    selected = number
                }

                const vo = document.createElement("vo");
                vo.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                            fill="#fff" />
                    </svg>`
                vo.onclick = function () {
                    alert("Clicked!")
                }

                if (info) {
                    const imageKey = `image${number}.png`;
                    const imageInfo = info[imageKey];

                    if (imageInfo && imageInfo.favorite === true) {
                        vo.style.display = 'block'; // Adjust the display style as needed
                    } else {
                        console.log(`image${number}.png -> ${imageInfo ? imageInfo.favorite : 'undefined'}`);
                    }
                } else {
                    console.error("info is undefined or null", info);
                }


                div.appendChild(img);
                div.appendChild(vo)
                container.appendChild(div);

                function setItemHeight(imgId, itemId) {
                    const img = document.getElementById(imgId);
                    if (img) { // Check if the image element exists
                        img.onload = function () {
                            const height = img.offsetHeight;
                            document.getElementById(itemId).style.height = `${height}px`;
                        };
                    } else {
                        console.error(`Image with id ${imgId} not found.`);
                    }
                }

            });


            if (numberOfValues === 0) {
                console.log("No images loaded", `${srv}/images-database?password=[atob]&method=getIDs`);
            } else {
                fullSc()
            }
            document.getElementById("footer").style.display = ""

            ////console.log("Ready");
        })
        .catch(error => {
            // Handle errors
            //alert('getIds Failed:', error);
            const data_b = localStorage.getItem("getIds")
            if (data_b) {
                const data = JSON.parse(data_b)
                const numberOfValues = data.length;
                //const numberOfValues = 50
                postCount = numberOfValues
                data.sort((a, b) => {
                    // Extract the numeric part of the filenames
                    let numA = parseInt(a.match(/\d+/)[0]);
                    let numB = parseInt(b.match(/\d+/)[0]);

                    // Compare the numeric parts
                    return numA - numB;
                });

                const container = document.getElementById("images-container");
                container.innerHTML = ""; // Clear the container once before the loop

                //setTimeout(function () {
                //    const transparent = document.createElement("div");
                //    transparent.className = "transparent-placeholder";
                //    container.appendChild(transparent);
                //}, 800);
                data.forEach(value => {
                    let number = value.match(/\d+/)[0];
                    ////console.log("num:", number);

                    // Create and append the transparent placeholder


                    // Create and append the image element
                    const div = document.createElement("div");
                    div.className = `image`;
                    div.id = `item${number}`;

                    // Create an img element
                    const img = document.createElement("img");
                    img.alt = `Image ${number}`;
                    img.id = `img${number}`;

                    // Set initial placeholder src
                    img.src = "searching_users.gif";
                    const imageName = `image${number}.png`;
                    // Attempt to load the image from IndexedDB
                    loadImageFromIndexedDB(`image${number}.png`).then(imageSrc => {
                        console.log("Image Found! Loading From IndexedDB");
                        img.src = imageSrc; // Set image source to Blob URL from IndexedDB
                        loaded.push(`image${number}.png`)
                        refreshPercent()
                    }).catch(error => {
                        console.log("Image not found in IndexedDB, loading from network", error);

                        // Fallback to network URL
                        img.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                        // Fetch and cache the image
                        fetch(img.src).then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.blob(); // Get the image as a Blob
                        }).then(blob => {
                            // Cache the image in IndexedDB
                            cacheImage(URL.createObjectURL(blob), `image${number}.png`);
                            const blobUrl = URL.createObjectURL(blob); // Create a Blob URL
                            img.src = blobUrl
                            loaded.push(`image${number}.png`)
                            refreshPercent()
                        }).catch(fetchError => {
                            console.error('Error fetching or caching image:', fetchError);
                        });
                    })
                    //img.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                    img.onclick = function () {
                        selected = number
                    }

                    const vo = document.createElement("vo");
                    vo.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                            fill="#fff" />
                    </svg>`
                    vo.onclick = function () {
                        alert("Clicked!")
                    }

                    if (info) {
                        const imageKey = `image${number}.png`;
                        const imageInfo = info[imageKey];

                        if (imageInfo && imageInfo.favorite === true) {
                            vo.style.display = 'block'; // Adjust the display style as needed
                        } else {
                            console.log(`image${number}.png -> ${imageInfo ? imageInfo.favorite : 'undefined'}`);
                        }
                    } else {
                        console.error("info is undefined or null", info);
                    }


                    div.appendChild(img);
                    div.appendChild(vo)
                    container.appendChild(div);

                    function setItemHeight(imgId, itemId) {
                        const img = document.getElementById(imgId);
                        if (img) { // Check if the image element exists
                            img.onload = function () {
                                const height = img.offsetHeight;
                                document.getElementById(itemId).style.height = `${height}px`;
                            };
                        } else {
                            console.error(`Image with id ${imgId} not found.`);
                        }
                    }

                });


                if (numberOfValues === 0) {
                    console.log("No images loaded", `${srv}/images-database?password=[atob]&method=getIDs`);
                } else {
                    fullSc()
                }
                document.getElementById("footer").style.display = ""
            }
            console.error('Error:', error);
        });



}

function refreshPercent() {
    document.getElementById("loadPercent").style.opacity = '1'
    // Check if postCount and loaded are defined and valid
    if (typeof postCount !== 'number' || postCount <= 0) {
        console.error("Invalid postCount value");
        return;
    }

    if (!Array.isArray(loaded)) {
        console.error("Invalid loaded value");
        return;
    }

    const currentLoad = loaded.length;
    console.log(`currentLoad: ${currentLoad}, postCount: ${postCount}`);

    // Calculate the percentage
    const loadedPercent = (100 * currentLoad) / postCount;

    // Cap the percentage at 100%
    const cappedPercent = Math.min(loadedPercent, 100);

    // Round the percentage to the nearest whole number
    const roundedPercent = Math.round(cappedPercent);

    // Display the percentage in the element with id "loadPercent"
    document.getElementById("loadPercent").innerHTML = `${roundedPercent}%`;
    if (roundedPercent === 100) {
        setTimeout(function () {
            document.getElementById("loadPercent").style.opacity = '0'
            loaded = []
        }, 900)
    }
}

function begin() {
    fetch(`${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&method=getInfo`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Modify this based on your API's requirements
        }
    })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("imgDbInfo", JSON.stringify(data))
            info = data
            dbload()
        }).catch(error => {
            // Handle errors
            //alert(error);
            if (localStorage.getItem("imgDbInfo")) {
                const data = JSON.parse(localStorage.getItem("imgDbInfo"))
                info = data
                dbload()
            } else {
                alert("Could not get database info. No local values are saved!")
            }
            console.error('Error:', error);
        });
    const aloco = ['0', '1', '2', '3', '4', '5']
    aloco.forEach((op) => {
        document.getElementById(`op${op}`).classList.remove("active")
    });
    document.getElementById(`op0`).classList.add("active")
}


function filter(vv, element) {
    document.getElementById("footer").style.display = "none"
    document.getElementById("images-container").innerHTML = `Loading.. <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
               width="15px" height="15px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
              <path opacity="0.2" fill="#fff" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
              <path fill="#fff" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="0.3s"
                  repeatCount="indefinite"/>
                </path>
              </svg>`
    let what;
    //if (vv) {
    //    what = types[vv]
    //} else {
    //    return;
    //}
    what = element.innerText.toLowerCase()
    fetch(`${srv}/images-database?method=getByType&password=${atob(localStorage.getItem("t50pswd"))}&format=${what}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', // Modify this based on your API's requirements
        }
    })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem(`getByType${what}`, JSON.stringify(data))
            const aloco = ['0', '1', '2', '3', '4', '5']
            aloco.forEach((op) => {
                document.getElementById(`op${op}`).classList.remove("active")
            });
            element.classList.add("active")
            const numberOfValues = data.length;
            //const numberOfValues = 50

            data.sort((a, b) => {
                // Extract the numeric part of the filenames
                let numA = parseInt(a.match(/\d+/)[0]);
                let numB = parseInt(b.match(/\d+/)[0]);

                // Compare the numeric parts
                return numA - numB;
            });

            const container = document.getElementById("images-container");
            container.innerHTML = ""; // Clear the container once before the loop

            //setTimeout(function () {
            //    const transparent = document.createElement("div");
            //    transparent.className = "transparent-placeholder";
            //    container.appendChild(transparent);
            //}, 800);
            data.forEach(value => {
                let number = value.match(/\d+/)[0];
                ////console.log("num:", number);

                // Create and append the transparent placeholder


                // Create and append the image element
                const div = document.createElement("div");
                div.className = `image`;
                div.id = `item${number}`;

                const img = document.createElement("img");
                img.alt = `Image ${number}`;
                img.id = `img${number}`;
                img.src = "searching_users.gif";
                const imageName = `image${number}.png`;
                // Attempt to load the image from IndexedDB
                loadImageFromIndexedDB(`image${number}.png`).then(imageSrc => {
                    console.log("Image Found! Loading From IndexedDB");
                    img.src = imageSrc; // Set image source to Blob URL from IndexedDB
                }).catch(error => {
                    console.log("Image not found in IndexedDB, loading from network", error);

                    // Fallback to network URL
                    img.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                    // Fetch and cache the image
                    fetch(img.src).then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.blob(); // Get the image as a Blob
                    }).then(blob => {
                        // Cache the image in IndexedDB
                        cacheImage(URL.createObjectURL(blob), `image${number}.png`);
                    }).catch(fetchError => {
                        console.error('Error fetching or caching image:', fetchError);
                    });
                })
                img.onclick = function () {
                    selected = number
                }

                const vo = document.createElement("vo");
                vo.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                            fill="#fff" />
                    </svg>`
                vo.onclick = function () {
                    alert("Clicked!")
                }

                if (info) {
                    const imageKey = `image${number}.png`;
                    const imageInfo = info[imageKey];

                    if (imageInfo && imageInfo.favorite === true) {
                        vo.style.display = 'block'; // Adjust the display style as needed
                    } else {
                        console.log(`image${number}.png -> ${imageInfo ? imageInfo.favorite : 'undefined'}`);
                    }
                } else {
                    console.error("info is undefined or null", info);
                }


                div.appendChild(img);
                div.appendChild(vo)
                container.appendChild(div);

                function setItemHeight(imgId, itemId) {
                    const img = document.getElementById(imgId);
                    if (img) { // Check if the image element exists
                        img.onload = function () {
                            const height = img.offsetHeight;
                            document.getElementById(itemId).style.height = `${height}px`;
                        };
                    } else {
                        console.error(`Image with id ${imgId} not found.`);
                    }
                }

            });


            if (numberOfValues === 0) {
                console.log("No images loaded", `${srv}/images-database?method=getByType&password=[atob]&format=${what}`);
            } else {
                fullSc()
            }
        }).catch(error => {
            // Handle errors
            //alert(error);
            if (localStorage.getItem(`getByType${what}`)) {
                const data = JSON.parse(localStorage.getItem(`getByType${what}`))
                const aloco = ['0', '1', '2', '3', '4', '5']
                aloco.forEach((op) => {
                    document.getElementById(`op${op}`).classList.remove("active")
                });
                element.classList.add("active")
                const numberOfValues = data.length;
                //const numberOfValues = 50

                data.sort((a, b) => {
                    // Extract the numeric part of the filenames
                    let numA = parseInt(a.match(/\d+/)[0]);
                    let numB = parseInt(b.match(/\d+/)[0]);

                    // Compare the numeric parts
                    return numA - numB;
                });

                const container = document.getElementById("images-container");
                container.innerHTML = ""; // Clear the container once before the loop

                //setTimeout(function () {
                //    const transparent = document.createElement("div");
                //    transparent.className = "transparent-placeholder";
                //    container.appendChild(transparent);
                //}, 800);
                data.forEach(value => {
                    let number = value.match(/\d+/)[0];
                    ////console.log("num:", number);

                    // Create and append the transparent placeholder


                    // Create and append the image element
                    const div = document.createElement("div");
                    div.className = `image`;
                    div.id = `item${number}`;

                    const img = document.createElement("img");
                    img.alt = `Image ${number}`;
                    img.id = `img${number}`;
                    img.src = "searching_users.gif";
                    const imageName = `image${number}.png`;
                    // Attempt to load the image from IndexedDB
                    loadImageFromIndexedDB(`image${number}.png`).then(imageSrc => {
                        console.log("Image Found! Loading From IndexedDB");
                        img.src = imageSrc; // Set image source to Blob URL from IndexedDB
                    }).catch(error => {
                        console.log("Image not found in IndexedDB, loading from network", error);

                        // Fallback to network URL
                        img.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                        // Fetch and cache the image
                        fetch(img.src).then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.blob(); // Get the image as a Blob
                        }).then(blob => {
                            // Cache the image in IndexedDB
                            cacheImage(URL.createObjectURL(blob), `image${number}.png`);
                        }).catch(fetchError => {
                            console.error('Error fetching or caching image:', fetchError);
                        });
                    })
                    img.onclick = function () {
                        selected = number
                    }

                    const vo = document.createElement("vo");
                    vo.innerHTML = `<svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.993 5.09691C11.0387 4.25883 9.78328 3.75 8.40796 3.75C5.42122 3.75 3 6.1497 3 9.10988C3 10.473 3.50639 11.7242 4.35199 12.67L12 20.25L19.4216 12.8944L19.641 12.6631C20.4866 11.7172 21 10.473 21 9.10988C21 6.1497 18.5788 3.75 15.592 3.75C14.2167 3.75 12.9613 4.25883 12.007 5.09692L12 5.08998L11.993 5.09691ZM12 7.09938L12.0549 7.14755L12.9079 6.30208L12.9968 6.22399C13.6868 5.61806 14.5932 5.25 15.592 5.25C17.763 5.25 19.5 6.99073 19.5 9.10988C19.5 10.0813 19.1385 10.9674 18.5363 11.6481L18.3492 11.8453L12 18.1381L5.44274 11.6391C4.85393 10.9658 4.5 10.0809 4.5 9.10988C4.5 6.99073 6.23699 5.25 8.40796 5.25C9.40675 5.25 10.3132 5.61806 11.0032 6.22398L11.0921 6.30203L11.9452 7.14752L12 7.09938Z"
                            fill="#fff" />
                    </svg>`
                    vo.onclick = function () {
                        alert("Clicked!")
                    }

                    if (info) {
                        const imageKey = `image${number}.png`;
                        const imageInfo = info[imageKey];

                        if (imageInfo && imageInfo.favorite === true) {
                            vo.style.display = 'block'; // Adjust the display style as needed
                        } else {
                            console.log(`image${number}.png -> ${imageInfo ? imageInfo.favorite : 'undefined'}`);
                        }
                    } else {
                        console.error("info is undefined or null", info);
                    }


                    div.appendChild(img);
                    div.appendChild(vo)
                    container.appendChild(div);

                    function setItemHeight(imgId, itemId) {
                        const img = document.getElementById(imgId);
                        if (img) { // Check if the image element exists
                            img.onload = function () {
                                const height = img.offsetHeight;
                                document.getElementById(itemId).style.height = `${height}px`;
                            };
                        } else {
                            console.error(`Image with id ${imgId} not found.`);
                        }
                    }

                });


                if (numberOfValues === 0) {
                    console.log("No images loaded", `${srv}/images-database?method=getByType&password=[atob]&format=${what}`);
                } else {
                    fullSc()
                }
            } else {
                alert("Unable to getByType, you are offline!\nNext time let files be downloaded first.")
            }
            console.error('Error:', error);
        });
}
function getRandomValue(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}


let start = 0
function loadStories() {
    console.log(types)
    types.forEach((type) => {
        fetch(`${srv}/images-database?method=getByType&password=${atob(localStorage.getItem("t50pswd"))}&format=${type}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Modify this based on your API's requirements
            }
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem(`type${type}`, JSON.stringify(data))
                const iconPfp = getRandomValue(data);
                let number = iconPfp.match(/\d+/)[0];
                start = start + 1;
                document.getElementById(`op${start}`).innerText = `${type}`

                const imageElement = document.getElementById(`u${start}`);
                imageElement.onclick = function () {
                    showStory(type)
                }
                //imageElement.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;
                imageElement.src = "searching_users.gif";
                const imageName = `image${number}.png`;
                // Attempt to load the image from IndexedDB
                loadImageFromIndexedDB(`image${number}.png`).then(imageSrc => {
                    console.log("Image Found! Loading From IndexedDB");
                    imageElement.src = imageSrc; // Set image source to Blob URL from IndexedDB
                    imageElement.alt = type
                }).catch(error => {
                    console.log("Image not found in IndexedDB, loading from network", error);

                    // Fallback to network URL
                    imageElement.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                    // Fetch and cache the image
                    fetch(imageElement.src).then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.blob(); // Get the image as a Blob
                    }).then(blob => {
                        // Cache the image in IndexedDB
                        cacheImage(URL.createObjectURL(blob), `image${number}.png`);
                    }).catch(fetchError => {
                        console.error('Error fetching or caching image:', fetchError);
                    });
                })
                imageElement.style.display = 'flex'
                imageElement.style.opacity = '1'

                imageElement.onload = function () {
                    console.log('Image has fully loaded');
                    // Set the styles to display and make the image fully opaque
                    imageElement.style.display = 'flex';
                    imageElement.style.opacity = '1';
                };

                // In case the image is already cached and `onload` doesn’t fire,
                // you might want to trigger it manually
                if (imageElement.complete) {
                    imageElement.onload();
                }
            }).catch(error => {
                // Handle errors
                //alert(error);
                if (localStorage.getItem(`type${type}`)) {
                    const data = JSON.parse(localStorage.getItem(`type${type}`))
                    const iconPfp = getRandomValue(data);
                    let number = iconPfp.match(/\d+/)[0];
                    start = start + 1;
                    document.getElementById(`op${start}`).innerText = `${type}`

                    const imageElement = document.getElementById(`u${start}`);
                    imageElement.onclick = function () {
                        showStory(type)
                    }
                    //imageElement.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;
                    imageElement.src = "searching_users.gif";
                    const imageName = `image${number}.png`;
                    // Attempt to load the image from IndexedDB
                    loadImageFromIndexedDB(`image${number}.png`).then(imageSrc => {
                        console.log("Image Found! Loading From IndexedDB");
                        imageElement.src = imageSrc; // Set image source to Blob URL from IndexedDB
                        imageElement.alt = type
                    }).catch(error => {
                        console.log("Image not found in IndexedDB, loading from network", error);

                        // Fallback to network URL
                        imageElement.src = `${srv}/images-database?password=${atob(localStorage.getItem("t50pswd"))}&image=${number}&method=access`;

                        // Fetch and cache the image
                        fetch(imageElement.src).then(response => {
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            return response.blob(); // Get the image as a Blob
                        }).then(blob => {
                            // Cache the image in IndexedDB
                            cacheImage(URL.createObjectURL(blob), `image${number}.png`);
                        }).catch(fetchError => {
                            console.error('Error fetching or caching image:', fetchError);
                        });
                    })
                    imageElement.style.display = 'flex'
                    imageElement.style.opacity = '1'

                    imageElement.onload = function () {
                        console.log('Image has fully loaded');
                        // Set the styles to display and make the image fully opaque
                        imageElement.style.display = 'flex';
                        imageElement.style.opacity = '1';
                    };

                    // In case the image is already cached and `onload` doesn’t fire,
                    // you might want to trigger it manually
                    if (imageElement.complete) {
                        imageElement.onload();
                    }
                } else {
                    alert("Tried to handle error but localStorage didn't cooperate.\nTry connecting to the internet first.\n", error)
                }
                console.error('Handling Error:', error);
            });
    });

}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('hologram.js').then(function (registration) {
        console.log('Service Worker registered with scope:', registration.scope);
    }).catch(function (error) {
        console.log('Service Worker registration failed:', error);
    });
}

//if ('serviceWorker' in navigator) {
//    // First, get all service worker registrations
//    navigator.serviceWorker.getRegistrations().then(function (registrations) {
//        // Loop through each registration and unregister it
//        registrations.forEach(function (registration) {
//            registration.unregister().then(function (success) {
//                if (success) {
//                    console.log('Service Worker unregistered successfully.');
//                } else {
//                    console.log('Service Worker failed to unregister.');
//                }
//            }).catch(function (error) {
//                console.log('Service Worker unregistration failed:', error);
//            });
//        });
//    }).catch(function (error) {
//        console.log('Error getting service worker registrations:', error);
//    });
//}

function fullSc() {
    const galleryImages = document.querySelectorAll('.image img');
    const fullscreenZoom = document.getElementById('fullscreen-zoom');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const zoomedImage = document.getElementById('zoomed-image');

    function openFullscreenZoom(img, clickX, clickY) {
        // Create a clone of the clicked image
        const clonedImage = img.cloneNode();
        clonedImage.classList.add('zooming');
        document.body.appendChild(clonedImage);

        // Get bounding rectangle of the image
        const rect = img.getBoundingClientRect();
        const imgX = rect.left;
        const imgY = rect.top;
        const imgWidth = rect.width;
        const imgHeight = rect.height;

        // Calculate click position relative to the image
        const clickXRelative = clickX - imgX;
        const clickYRelative = clickY - imgY;

        // Set the initial position and size of the cloned image
        clonedImage.style.top = `${imgY}px`;
        clonedImage.style.left = `${imgX}px`;
        clonedImage.style.width = `${imgWidth}px`;
        clonedImage.style.height = `${imgHeight}px`;

        // Trigger reflow to apply the initial styles
        requestAnimationFrame(() => {
            clonedImage.style.transform = `translate(${clickXRelative}px, ${clickYRelative}px) scale(2)`;
            clonedImage.style.top = '50%'; // Move to center
            clonedImage.style.left = '50%'; // Move to center
            clonedImage.style.transform = `translate(-50%, -50%) scale(2)`; // Center and scale
        });

        // Show fullscreen container after animation
        setTimeout(() => {
            fullscreenZoom.classList.add('active');
            zoomedImage.src = img.src;
            document.body.removeChild(clonedImage); // Remove cloned image
        }, 400); // Match with animation duration
    }

    function closeFullscreenZoom() {
        fullscreenZoom.classList.add('fade-out');
        setTimeout(() => {
            fullscreenZoom.classList.remove('active', 'fade-out');
            zoomedImage.src = ''; // Clear the image source
        }, 300); // Match with transition duration
    }

    galleryImages.forEach(img => {
        img.addEventListener('click', (event) => {
            const clickX = event.clientX;
            const clickY = event.clientY;
            openFullscreenZoom(img, clickX, clickY);
        });
    });

    zoomedImage.addEventListener('click', closeFullscreenZoom);

    // Optional: Close fullscreen zoom when pressing 'Escape' key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeFullscreenZoom();
        }
    });
}

function fullScs() {
    const galleryImages = document.querySelectorAll('.image img');
    const fullscreenZoom = document.getElementById('fullscreen-zoom');
    const fullscreenOverlay = document.getElementById('fullscreen-overlay');
    const zoomedImage = document.getElementById('zoomed-image');


    galleryImages.forEach(img => {
        img.addEventListener('click', (event) => {
            // Get the image element that was clicked
            const clickedImg = event.target;

            // Obtain the source of the image
            const imgSrc = clickedImg.src;

            // Log the image source to the console
            console.log('Image source:', imgSrc);

            // Update the src of the imgFS element with the clicked image's src
            document.getElementById("imgFS").src = imgSrc;

            // Add the 'active' class to the imgF element
            document.getElementById("imgf").classList.add("active");

            // Optionally open a fullscreen zoom (assuming openFullscreenZoom function exists)
            // openFullscreenZoom(clickedImg);
        });
    });

}

let stInt;
function init(data) {
    document.getElementById("imgf").classList.add('active');

    const numberOfValues = data.length;
    data.sort((a, b) => {
        let numA = parseInt(a.match(/\d+/)[0]);
        let numB = parseInt(b.match(/\d+/)[0]);
        return numA - numB;
    });

    const storyJson = {
        "image": {}
    };

    let count = 0;
    let promises = data.map(value => {
        console.log(`Working on ${value}`);
        let number = value.match(/\d+/)[0];

        return loadImageFromIndexedDB(`image${number}.png`).then(imageSrc => {
            console.log("Image Found! Loading From IndexedDB");
            count++;
            const nameJ = `img${count}`;
            storyJson.image[nameJ] = imageSrc; // Add property to 'image' object

        }).catch(error => {
            console.log("Image not found in IndexedDB, will not load from network", error);
        });
    });

    // Wait for all images to be processed
    return Promise.all(promises).then(() => {
        console.log(storyJson);
        console.log(`Vox has: ${numberOfValues} images to show\nVox has worked on ${count} images and placed them in a json format.\nNow vox will create the elements needed.`)
        const container = document.getElementById('topIndicators');
        container.innerHTML = ''
        // Loop to create and append elements
        let externalCount = 0
        for (let i = 0; i < numberOfValues; i++) {
            externalCount = externalCount + 1
            // Create a new progress container
            const progressContainer = document.createElement('div');
            progressContainer.className = 'progress-container';
            progressContainer.setAttribute("data-c", externalCount)
            progressContainer.id = `cont${externalCount}`
            // Create a new progress bar
            const progressBar = document.createElement('div');
            progressBar.className = 'progress-bar'; // or remove 'active' class as needed
            if (externalCount === 1) {
                console.log(`${externalCount} is 1`)
                progressBar.classList.add("active")
            }
            progressBar.id = `bar${externalCount}`

            // Append progress bar to progress container
            progressContainer.appendChild(progressBar);

            // Append progress container to wrapper
            container.appendChild(progressContainer);
        }
        let currentStory = 1
        let stopNow = false
        document.getElementById("imgFS").src = storyJson.image[`img${currentStory}`]
        if (numberOfValues === 1) {
            stopNow = true
        }

        stInt = setInterval(function () {

            if (stopNow === true) {
                document.getElementById("imgf").classList.remove('active');
                currentStory = 0
                clearInterval(stInt)
                stopNow = false
                return;
            }
            currentStory++
            if (currentStory !== 1) {
                document.getElementById(`cont${currentStory - 1}`).style.backgroundColor = '#ffffff'
            }
            document.getElementById("imgFS").src = storyJson.image[`img${currentStory}`]
            document.getElementById(`bar${currentStory}`).classList.add("active")
            if (currentStory + 1 > numberOfValues) {
                console.log("Next story will be empty, preparing cancel")
                stopNow = true
            }
            if (numberOfValues === 1) {
                stopNow = true
            }
        }, 5000)
        document.getElementById("favorite").addEventListener('click', (event) => {
            document.getElementById("imgf").classList.remove('active');
            currentStory = 0
            clearInterval(stInt)
            stopNow = false
            return;
        })
        document.getElementById("imgf").addEventListener('click', (event) => {
            clearInterval(stInt)
            document.getElementById(`cont${currentStory}`).style.backgroundColor = '#ffffff'
            if (stopNow === true) {
                document.getElementById("imgf").classList.remove('active');
                currentStory = 0
                clearInterval(stInt)
                stopNow = false
                return;
            }
            currentStory++
            if (currentStory !== 1) {
                document.getElementById(`cont${currentStory - 1}`).style.backgroundColor = '#ffffff'
            }
            document.getElementById("imgFS").src = storyJson.image[`img${currentStory}`]
            document.getElementById(`bar${currentStory}`).classList.add("active")
            if (currentStory + 1 > numberOfValues) {
                console.log("Next story will be empty, preparing cancel")
                stopNow = true
            }
            if (numberOfValues === 1) {
                stopNow = true
            }

            stInt = setInterval(function () {
                if (stopNow === true) {
                    document.getElementById("imgf").classList.remove('active');
                    currentStory = 0
                    clearInterval(stInt)
                    stopNow = false
                    return;
                }
                currentStory++
                if (currentStory !== 1) {
                    document.getElementById(`cont${currentStory - 1}`).style.backgroundColor = '#ffffff'
                }
                document.getElementById("imgFS").src = storyJson.image[`img${currentStory}`]
                document.getElementById(`bar${currentStory}`).classList.add("active")
                if (currentStory + 1 > numberOfValues) {
                    console.log("Next story will be empty, preparing cancel")
                    stopNow = true
                }
                if (numberOfValues === 1) {
                    stopNow = true
                }
            }, 5000)
        });
        // Perform additional actions here
        console.log("All images have been processed");
        // Example: Call another function or perform another action
        performAdditionalActions(storyJson);
    });
}
function showStory(what) {

    fetch(`${srv}/images-database?method=getByType&password=${atob(localStorage.getItem("t50pswd"))}&format=${what}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            console.log("Received data");
            localStorage.setItem(`getByType${what}`, JSON.stringify(data));
            init(data)

        }).catch(error => {
            alert("Debug showStory failed. Loading from storage")
            init(JSON.parse(localStorage.getItem(`getByType${what}`)))
            console.error("Error fetching data for showStory:", error);
        });
}

function performAdditionalActions(storyJson) {
    console.log("Additional actions with storyJson:", storyJson);
    //external actions
}