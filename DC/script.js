console.log("Script Loaded")
function login() {
    
    var userInput = prompt("Please enter Evox's Datacenter password:");

    // Check if the user entered something
    if (userInput !== null) {
        // Show an alert with the user input
        localStorage.setItem("dcauth", userInput)
        var usernameInput = prompt("Please enter Evox's Datacenter accepted username:");
        if (usernameInput !== null) {
            localStorage.setItem("dcusr", usernameInput)
        } else {
            // Handle the case where the user clicked cancel
            //window.location.reload()
        }
        //window.location.reload()
    } else {
        // Handle the case where the user clicked cancel
        //window.location.reload()
    }
}

if (!localStorage.getItem("dcauth") || !localStorage.getItem("dcusr")) {
   login()
} else {
    console.log("Credentials Are Saved")
    showAccounts()
}



function showAccounts() {
    hideAll()
    document.getElementById("accounts-content").style.display = ""
    document.getElementById("accounts_tab").classList.add("active")
    document.getElementById("tab-title").innerHTML = "Evox Accounts"
    document.getElementById("tab-desc").innerHTML = "Optimize your productivity with all registered Evox accounts."
    document.getElementById("tab-opt").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=accounts&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(data => {
            // Data received from the API
            const cardGrid = document.getElementById('card-grid');

            data.forEach(value => {
                document.getElementById("card-grid").innerHTML = ""
                if (value.startsWith("Account_")) {
                    const email = value.split("_")[1];
                    fetch(`https://evox-datacenter.onrender.com/accounts?method=getUserbyEmail&email=${email}`)
                        .then(response => {
                            // Check if response status is OK (200)
                            if (!response.ok) {
                                throw new Error('Network response was not ok');
                            }
                            // Parse the JSON from the response
                            return response.text();
                        }).then(username => {
                            fetch(`https://evox-datacenter.onrender.com/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
                                .then(response => {
                                    // Check if response status is OK (200)
                                    if (!response.ok) {
                                        throw new Error('Network response was not ok');
                                    }
                                    // Parse the JSON from the response
                                    return response.text();
                                }).then(pfp => {
                                    if (pfp.indexOf("base64") === -1) {
                                        // If it doesn't contain "base64", add the prefix
                                        pfp = "data:image/jpeg;base64," + pfp;
                                    }
                                    const article = document.createElement('article');
                                    article.className = 'card';

                                    const cardHeader = document.createElement('div');
                                    cardHeader.className = 'card-header';
                                    const userDiv = document.createElement('div');
                                    const userCircle = document.createElement('div');
                                    userCircle.className = 'user-circle';
                                    const userImg = document.createElement('img');
                                    userImg.src = pfp;
                                    userCircle.appendChild(userImg);
                                    userDiv.appendChild(userCircle);
                                    const userNameHeading = document.createElement('h3');
                                    userNameHeading.textContent = username;
                                    userDiv.appendChild(userNameHeading);
                                    cardHeader.appendChild(userDiv);

                                    const toggleLabel = document.createElement('label');
                                    toggleLabel.className = 'toggle';
                                    const toggleInput = document.createElement('input');
                                    toggleInput.type = 'checkbox';
                                    toggleInput.checked = true;
                                    toggleLabel.appendChild(toggleInput);
                                    const toggleSpan = document.createElement('span');
                                    toggleLabel.appendChild(toggleSpan);
                                    cardHeader.appendChild(toggleLabel);

                                    article.appendChild(cardHeader);

                                    const cardBody = document.createElement('div');
                                    cardBody.className = 'card-body';
                                    const collaborationParagraph = document.createElement('p');
                                    collaborationParagraph.textContent = email;
                                    cardBody.appendChild(collaborationParagraph);
                                    article.appendChild(cardBody);

                                    const cardFooter = document.createElement('div');
                                    cardFooter.className = 'card-footer';
                                    const moreInfoLink = document.createElement('a');
                                    moreInfoLink.href = '#';
                                    moreInfoLink.textContent = 'More info';
                                    cardFooter.appendChild(moreInfoLink);
                                    article.appendChild(cardFooter);

                                    cardGrid.appendChild(article);

                                }).catch(error => {
                                    // Handle any errors that occurred during the fetch
                                    console.error('There was a problem with the fetch operation:', error);
                                });


                        }).catch(error => {
                            // Handle any errors that occurred during the fetch
                            console.error('There was a problem with the fetch operation:', error);
                        });

                }
            });
        })
        .catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
}


function showProfiles() {
    document.getElementById("tab-title").innerHTML = "Evox Profile Pictures"
    document.getElementById("tab-desc").innerHTML = "Access the complete database of profile pictures for all Evox accounts."
    hideAll()
    document.getElementById("profile_tab").classList.add("active")
    document.getElementById("profile-content").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=profiles&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(values => {
            const cardGridProfiles = document.getElementById("card-grid-profiles");
            cardGridProfiles.innerHTML = ""

            values.forEach(value => {
                const div = document.createElement("div");
                div.classList.add("search");
                div.style.width = "100%";

                const input = document.createElement("input");
                input.value = value;
                input.disabled = true

                div.appendChild(input);
                cardGridProfiles.appendChild(div);
            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });

}
function showIPV4() {
    document.getElementById("tab-title").innerHTML = "Evox Saved IP Adresses"
    document.getElementById("tab-desc").innerHTML = "Retrieve stored IP addresses for all Evox accounts."
    hideAll()
    document.getElementById("ipv4_tab").classList.add("active")
    document.getElementById("ipv4-content").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=authips&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        }).then(data => {
            const cardGrid = document.getElementById('card-grid-ipv4');
            cardGrid.innerHTML = ""
            data.forEach(obj => {
                // Extracting username and IP addresses
                const preuser = Object.keys(obj)[0];
                var username = preuser.split('_')[0];
                const ips = obj[preuser];
                fetch(`https://evox-datacenter.onrender.com/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
                    .then(response => {
                        // Check if response status is OK (200)
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        // Parse the JSON from the response
                        return response.text();
                    }).then(pfp => {
                        if (pfp.indexOf("base64") === -1) {
                            // If it doesn't contain "base64", add the prefix
                            pfp = "data:image/jpeg;base64," + pfp;
                        }
                        // Creating card elements
                        const article = document.createElement('article');
                        article.className = 'card';

                        const cardHeader = document.createElement('div');
                        cardHeader.className = 'card-header';

                        const userDiv = document.createElement('div');
                        const userCircle = document.createElement('div');
                        userCircle.className = 'user-circle';
                        const userImg = document.createElement('img');
                        userImg.src = pfp;
                        userCircle.appendChild(userImg);
                        userDiv.appendChild(userCircle);
                        const userNameHeading = document.createElement('h3');
                        userNameHeading.textContent = username;
                        userDiv.appendChild(userNameHeading);
                        cardHeader.appendChild(userDiv);

                        article.appendChild(cardHeader);

                        const cardBody = document.createElement('div');
                        cardBody.className = 'card-body';

                        // Creating paragraph elements for each IP address
                        ips.forEach(ip => {
                            const ipParagraph = document.createElement('p');
                            ipParagraph.textContent = ip;
                            cardBody.appendChild(ipParagraph);
                        });

                        article.appendChild(cardBody);

                        const cardFooter = document.createElement('div');
                        cardFooter.className = 'card-footer';
                        const moreInfoLink = document.createElement('a');
                        moreInfoLink.href = '#';
                        moreInfoLink.textContent = 'More info';
                        cardFooter.appendChild(moreInfoLink);
                        article.appendChild(cardFooter);

                        cardGrid.appendChild(article);
                    }).catch(error => {
                        // Handle any errors that occurred during the fetch
                        console.error('There was a problem with the fetch operation:', error);
                    });

            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });


}

function showSline() {
    hideAll()
    document.getElementById("sline-content").style.display = ""
    document.getElementById("sline_tab").classList.add("active")
    document.getElementById("tab-title").innerHTML = "Evox Secureline Chats"
    document.getElementById("tab-desc").innerHTML = "Access all securely encrypted conversations within Evox's Secureline."
    fetch(`https://evox-datacenter.onrender.com/?process=secureline&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        }).then(jsonData => {
            const container = document.getElementById("card-grid-sline");
            container.innerHTML = ""

            jsonData.forEach(data => {
                fetch(`https://evox-datacenter.onrender.com/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${data.participants[0].start}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    }).then(pfp => {
                        if (pfp.indexOf("base64") === -1) {
                            pfp = "data:image/jpeg;base64," + pfp;
                        }
                        const article = document.createElement("article");
                        article.classList.add("card");

                        const cardHeader = document.createElement("div");
                        cardHeader.classList.add("card-header");

                        const headerContent = document.createElement("div");
                        const headerImageContainer = document.createElement("div"); // New container for the image
                        headerImageContainer.classList.add("sl-circle"); // Add user-circle class
                        const headerImage = document.createElement("img"); // Image element


                        headerImage.src = pfp; // Set src directly to the image element
                        headerImage.alt = `${data.participants[0].start} profile picture`; // Add alt attribute for accessibility
                        headerImageContainer.appendChild(headerImage); // Append image to its container

                        const headerTitle = document.createElement("h3");
                        headerTitle.textContent = `${data.participants[0].start} to ${data.participants[0].recipient}`;

                        headerContent.appendChild(headerImageContainer); // Append container instead of the image directly
                        headerContent.appendChild(headerTitle);
                        const toggleLabel = document.createElement("label");
                        toggleLabel.classList.add("toggle");

                        const toggleInput = document.createElement("input");
                        toggleInput.checked = true;
                        toggleInput.setAttribute("type", "checkbox");

                        const toggleSpan = document.createElement("span");

                        toggleLabel.appendChild(toggleInput);
                        toggleLabel.appendChild(toggleSpan);

                        cardHeader.appendChild(headerContent);
                        cardHeader.appendChild(toggleLabel);

                        const cardBody = document.createElement("div");
                        cardBody.classList.add("card-body");
                        cardBody.innerHTML = `
            <p>Chat Id: ${data.chatid}</p>
            <p>Creation Date: ${data.created}</p>
        `;

                        const cardFooter = document.createElement("div");
                        cardFooter.classList.add("card-footer");
                        cardFooter.innerHTML = `<a href="#" style="color:red">Delete</a>`;

                        article.appendChild(cardHeader);
                        article.appendChild(cardBody);
                        article.appendChild(cardFooter);

                        container.appendChild(article);
                    }).catch(error => {
                        console.error('There was a problem with the fetch operation:', error);
                    });
            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
}
function showSocial() {
    fetch(`https://evox-datacenter.onrender.com/?process=social&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        }).then(jsonData => {
            document.getElementById("tab-title").innerHTML = "Evox Social Info"
            document.getElementById("tab-desc").innerHTML = "Access social information for all Evox users."
            hideAll()
            document.getElementById("social-content").style.display = ""
            document.getElementById("social_tab").classList.add("active")

            const cardGrid = document.getElementById('card-grid-social');
            cardGrid.innerHTML = ""
            jsonData.forEach(item => {
                const pathParts = item.path.split('\\');
                const username = pathParts[1];
                const content = item.content;
                fetch(`https://evox-datacenter.onrender.com/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    }).then(pfp => {
                        if (pfp.indexOf("base64") === -1) {
                            pfp = "data:image/jpeg;base64," + pfp;
                        }
                        const article = document.createElement('article');
                        article.classList.add('card');

                        const cardHeader = document.createElement('div');
                        cardHeader.classList.add('card-header');

                        const headerContent = `
                            <div>
                                <div class="user-circle"><img src="${pfp}" alt="${username}"></div>
                                <h3>${username}</h3>
                            </div>
                            <label class="toggle">
                                <input type="checkbox" checked>
                                <span></span>
                            </label>
                        `;
                        cardHeader.innerHTML = headerContent;

                        const cardBody = document.createElement('div');
                        cardBody.classList.add('card-body');
                        let valueToEdit = item.path;
                        let pattern = /social\\[^\\]+\\/;
                        // Use the replace function with the pattern to remove the matched substring
                        let newValue = valueToEdit.replace(pattern, "");
                        cardBody.innerHTML = `
                            <p>Path: ${newValue}</p>
                            <p>Content: ${content}</p>
                        `;

                        const cardFooter = document.createElement('div');
                        cardFooter.classList.add('card-footer');
                        cardFooter.innerHTML = `<a href="#" style="color:red">Delete</a>`;

                        article.appendChild(cardHeader);
                        article.appendChild(cardBody);
                        article.appendChild(cardFooter);

                        cardGrid.appendChild(article);
                    }).catch(error => {
                        // Handle any errors that occurred during the fetch
                        console.error('There was a problem with the fetch operation:', error);
                    });


            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });


}

function showFlorida() {
    hideAll()
    document.getElementById("florida-content").style.display = ""
    document.getElementById("florida_tab").classList.add("active")
    document.getElementById("tab-title").innerHTML = "Evox Florida Database"
    document.getElementById("tab-desc").innerHTML = "Access the Florida IDs database for all Evox accounts."
    fetch(`https://evox-datacenter.onrender.com/?process=florida&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        }).then(jsonData => {
            const container = document.getElementById('card-grid-florida');
            container.innerHTML = ""
            jsonData.forEach(item => {
                const key = Object.keys(item)[0];
                const ids = JSON.parse(item[key]);
                const article = document.createElement('article');
                article.classList.add('card');
                var username = key.split(".")[0];
                fetch(`https://evox-datacenter.onrender.com/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    }).then(pfp => {
                        if (pfp.indexOf("base64") === -1) {
                            pfp = "data:image/jpeg;base64," + pfp;
                        }
                        const header = document.createElement('div');
                        header.classList.add('card-header');
                        const headerContent = `
                    <div>
                        <div class="user-circle"><img src="${pfp}" alt="${username}"></div>
                        <h3>${username}</h3>
                    </div>
                    <label class="toggle">
                        <input type="checkbox" checked="">
                        <span></span>
                    </label>
                `;
                        header.innerHTML = headerContent;
                        article.appendChild(header);

                        const body = document.createElement('div');
                        body.classList.add('card-body');
                        let bodyContent = '';
                        for (const id in ids) {
                            bodyContent += `<p>${id}: ${ids[id]}</p>`;
                        }
                        body.innerHTML = bodyContent;
                        article.appendChild(body);

                        const footer = document.createElement('div');
                        footer.classList.add('card-footer');
                        const footerContent = `<a href="#" style="color:red">Delete</a>`;
                        footer.innerHTML = footerContent;
                        article.appendChild(footer);

                        container.appendChild(article);
                    }).catch(error => {
                        // Handle any errors that occurred during the fetch
                        console.error('There was a problem with the fetch operation:', error);
                    });


            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });


}
function showTasco() {
    document.getElementById("tab-title").innerHTML = "Evox Tasco Database"
    document.getElementById("tab-desc").innerHTML = "Access comprehensive databases containing Tasco schedule files, Tasco notes, and Tasco debts for all Evox accounts."
    hideAll()
    document.getElementById("tasco_tab").classList.add("active")
    document.getElementById("tasco-content").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=tasco&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(values => {
            const cardGridProfiles = document.getElementById("card-grid-tasco");
            cardGridProfiles.innerHTML = ""

            values.forEach(value => {
                const div = document.createElement("div");
                div.classList.add("search");
                div.style.width = "100%";

                const input = document.createElement("input");
                input.value = value;
                input.disabled = true

                div.appendChild(input);
                cardGridProfiles.appendChild(div);
            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
}
function showCryptox() {
    document.getElementById("tab-title").innerHTML = "Evox Cryptox Database";
    document.getElementById("tab-desc").innerHTML = "Manage all Evox crypto operations through the Cryptox database.";
    hideAll();
    document.getElementById("cryptox_tab").classList.add("active");
    document.getElementById("cryptox-content").style.display = "block"; // Assuming cryptox-content is the container for card-grid-cryptox

    fetch(`https://evox-datacenter.onrender.com/?process=cryptox&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(data => {
            // Function to create card elements
            function createCard(username, key, iv) {
                fetch(`https://evox-datacenter.onrender.com/profiles?authorize=351c3669b3760b20615808bdee568f33&pfp=${username}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.text();
                    }).then(pfp => {
                        if (pfp.indexOf("base64") === -1) {
                            pfp = "data:image/jpeg;base64," + pfp;
                        }
                        var cardGrid = document.getElementById('card-grid-cryptox');
                        var article = document.createElement('article');
                        article.className = 'card';

                        var divHeader = document.createElement('div');
                        divHeader.className = 'card-header';

                        var divWrapper = document.createElement('div');

                        var divUserCircle = document.createElement('div');
                        divUserCircle.className = 'user-circle';

                        var img = document.createElement('img');
                        img.src = pfp;
                        img.alt = username;

                        divUserCircle.appendChild(img);
                        divWrapper.appendChild(divUserCircle);

                        var h3 = document.createElement('h3');
                        h3.textContent = username;
                        divWrapper.appendChild(h3);

                        divHeader.appendChild(divWrapper);

                        article.appendChild(divHeader);

                        var divBody = document.createElement('div');
                        divBody.className = 'card-body';
                        divBody.innerHTML = '<p>key: ' + key + '</p><p>iv: ' + iv + '</p>';

                        article.appendChild(divBody);

                        cardGrid.appendChild(article);
                    }).catch(error => {
                        // Handle any errors that occurred during the fetch
                        console.error('There was a problem with the fetch operation:', error);
                    });
            }
            document.getElementById('card-grid-cryptox').innerHTML = "";

            // Loop through data and create cards
            data.forEach(function (obj) {
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        var username = key.split('-')[1].split('.')[0];
                        var value = JSON.parse(obj[key]);
                        createCard(username, value.key, value.iv);
                    }
                }
            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });





    // Clear the container before adding new cards

}

function showDatacenter() {
    document.getElementById("tab-title").innerHTML = "Evox Datacenter Login Files"
    document.getElementById("tab-desc").innerHTML = "Access all Evox Datacenter login files."
    hideAll()
    document.getElementById("datacenter_tab").classList.add("active")
    document.getElementById("datacenter-content").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=datacenter&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(values => {
            const cardGridProfiles = document.getElementById("card-grid-datacenter");
            cardGridProfiles.innerHTML = ""

            values.forEach(value => {
                const div = document.createElement("div");
                div.classList.add("search");
                div.style.width = "100%";

                const input = document.createElement("input");
                input.value = value;
                input.disabled = true

                div.appendChild(input);
                cardGridProfiles.appendChild(div);
            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
}

function showVerification() {
    document.getElementById("tab-title").innerHTML = "Evox 2FA Verification Database"
    document.getElementById("tab-desc").innerHTML = "Access all Evox Datacenter login files."
    hideAll()
    document.getElementById("verfication_tab").classList.add("active")
    document.getElementById("verfication-content").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=verification&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(values => {
            const cardGridProfiles = document.getElementById("card-grid-verfication");
            cardGridProfiles.innerHTML = ""

            values.forEach(value => {
                const div = document.createElement("div");
                div.classList.add("search");
                div.style.width = "100%";

                const input = document.createElement("input");
                input.value = value;
                input.disabled = true

                div.appendChild(input);
                cardGridProfiles.appendChild(div);
            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
}

function showImgGal() {
    document.getElementById("tab-title").innerHTML = "T50 Images Gallery"
    document.getElementById("tab-desc").innerHTML = "Access the number of images in the T50 Images Gallery."
    hideAll()
    document.getElementById("imggl_tab").classList.add("active")
    document.getElementById("imggl-content").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=imagesGallery&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(value => {
            const cardGridProfiles = document.getElementById("card-grid-imggl");
            cardGridProfiles.innerHTML = ""
            const div = document.createElement("div");
            div.classList.add("search");
            div.style.width = "100%";

            const input = document.createElement("input");
            input.value = `${value} images uploaded`;
            input.disabled = true

            div.appendChild(input);
            cardGridProfiles.appendChild(div);
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
}

function showImgDb() {
    document.getElementById("tab-title").innerHTML = "T50 Images Database"
    document.getElementById("tab-desc").innerHTML = "Access all filenames in the T50 Images Database."
    hideAll()
    document.getElementById("imgdb_tab").classList.add("active")
    document.getElementById("imgdb-content").style.display = ""
    fetch(`https://evox-datacenter.onrender.com/?process=imagesDB&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`)
        .then(response => {
            // Check if response status is OK (200)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON from the response
            return response.json();
        })
        .then(values => {
            const cardGridProfiles = document.getElementById("card-grid-imgdb");
            cardGridProfiles.innerHTML = ""

            values.forEach(value => {
                const div = document.createElement("div");
                div.classList.add("search");
                div.style.width = "100%";

                const input = document.createElement("input");
                input.value = value;
                input.disabled = true

                div.appendChild(input);
                cardGridProfiles.appendChild(div);
            });
        }).catch(error => {
            // Handle any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
}

function hideAll() {
    document.getElementById("accounts-content").style.display = "none"
    document.getElementById("profile-content").style.display = "none"
    document.getElementById("ipv4-content").style.display = "none"
    document.getElementById("sline-content").style.display = "none"
    document.getElementById("social-content").style.display = "none"
    document.getElementById("florida-content").style.display = "none"
    document.getElementById("tasco-content").style.display = "none"
    document.getElementById("cryptox-content").style.display = "none"
    document.getElementById("datacenter-content").style.display = "none"
    document.getElementById("verfication-content").style.display = "none"
    document.getElementById("imggl-content").style.display = "none"
    document.getElementById("imgdb-content").style.display = "none"


    document.getElementById("imgdb_tab").classList.remove("active")
    document.getElementById("imggl_tab").classList.remove("active")
    document.getElementById("verfication_tab").classList.remove("active")
    document.getElementById("datacenter_tab").classList.remove("active")
    document.getElementById("cryptox_tab").classList.remove("active")
    document.getElementById("tasco_tab").classList.remove("active")
    document.getElementById("florida_tab").classList.remove("active")
    document.getElementById("accounts_tab").classList.remove("active")
    document.getElementById("profile_tab").classList.remove("active")
    document.getElementById("ipv4_tab").classList.remove("active")
    document.getElementById("sline_tab").classList.remove("active")
    document.getElementById("social_tab").classList.remove("active")

    document.getElementById("tab-opt").style.display = "none"
}

function downloadfiles() {
    window.location.href = `https://evox-datacenter.onrender.com/?process=download&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}`
}
//&username=${localStorage.getItem("dcusr")}&password=${localStorage.getItem("dcauth")}
let count = 0;
document.getElementById("loginfast").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      // Prevent default behavior, as pressing Enter in an input field might submit a form
      event.preventDefault();
      // Call your function or do something else
      if(document.getElementById("loginfast").value === "reload") {
        window.location.reload()
        return;
      }
      count = count + 1
      if(count === 1) {
        localStorage.setItem("dcauth", document.getElementById("loginfast").value)
        alert("Set DC Auth pswd. go for username")
        document.getElementById("loginfast").value = ""
      } else if(count === 2) {
        localStorage.setItem("dcusr", document.getElementById("loginfast").value)
        alert("Set DC username!")
        document.getElementById("loginfast").value = ""
      } else {
        count = 0
      }
    }
  });