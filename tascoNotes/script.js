const containerEl = document.querySelector(".container");
const canvasEl = document.querySelector("canvas#neuro");
const devicePixelRatio = Math.min(window.devicePixelRatio, 2);


const pointer = {
    x: 0,
    y: 0,
    tX: 0,
    tY: 0,
};


let uniforms;
const gl = initShader();

setupEvents();

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

render();

function initShader() {
    const vsSource = document.getElementById("vertShader").innerHTML;
    const fsSource = document.getElementById("fragShader").innerHTML;

    const gl = canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");

    if (!gl) {
        alert("WebGL is not supported by your browser.");
    }

    function createShader(gl, sourceCode, type) {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);

        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

    function createShaderProgram(gl, vertexShader, fragmentShader) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Unable to initialize the shader program: " + gl.getProgramInfoLog(program));
            return null;
        }

        return program;
    }

    const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
    uniforms = getUniforms(shaderProgram);

    function getUniforms(program) {
        let uniforms = [];

        function preventDefault(e) {
            e.preventDefault();
        }

        // Add event listeners to prevent scroll
        //window.addEventListener('scroll', preventDefault, { passive: false });
        //window.addEventListener('wheel', preventDefault, { passive: false });
        //window.addEventListener('touchmove', preventDefault, { passive: false });
        let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
            let uniformName = gl.getActiveUniform(program, i).name;
            uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
        }
        return uniforms;
    }

    const vertices = new Float32Array([-1., -1., 1., -1., -1., 1., 1., 1.]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    gl.useProgram(shaderProgram);

    const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
    gl.enableVertexAttribArray(positionLocation);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    return gl;
}

function render() {
    const currentTime = performance.now();

    pointer.x += (pointer.tX - pointer.x) * .5;
    pointer.y += (pointer.tY - pointer.y) * .5;

    gl.uniform1f(uniforms.u_time, currentTime);
    gl.uniform2f(uniforms.u_pointer_position, pointer.x / window.innerWidth, 1 - pointer.y / window.innerHeight);
    gl.uniform1f(uniforms.u_scroll_progress, window["pageYOffset"] / (2 * window.innerHeight));

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
}

function resizeCanvas() {
    canvasEl.width = window.innerWidth * devicePixelRatio;
    canvasEl.height = window.innerHeight * devicePixelRatio;
    gl.uniform1f(uniforms.u_ratio, canvasEl.width / canvasEl.height);
    gl.viewport(0, 0, canvasEl.width, canvasEl.height);
}

function setupEvents() {
    window.addEventListener("pointermove", e => {
        updateMousePosition(e.clientX, e.clientY);
    });
    window.addEventListener("touchmove", e => {
        updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    });
    window.addEventListener("click", e => {
        updateMousePosition(e.clientX, e.clientY);
    });

    function updateMousePosition(eX, eY) {
        pointer.tX = eX;
        pointer.tY = eY;
    }
}

function addPreventDefaultListeners() {
    window.addEventListener('scroll', preventDefault, { passive: false });
    window.addEventListener('wheel', preventDefault, { passive: false });
    window.addEventListener('touchmove', preventDefault, { passive: false });
}

// Function to remove event listeners
function removePreventDefaultListeners() {
    window.removeEventListener('scroll', preventDefault, { passive: false });
    window.removeEventListener('wheel', preventDefault, { passive: false });
    window.removeEventListener('touchmove', preventDefault, { passive: false });
}

// Example preventDefault function to be used with event listeners
function preventDefault(event) {
    event.preventDefault();
}

addPreventDefaultListeners()

// Add event listeners to prevent scroll
//window.addEventListener('scroll', preventDefault, { passive: false });
//window.addEventListener('wheel', preventDefault, { passive: false });
//window.addEventListener('touchmove', preventDefault, { passive: false });

document.body.addEventListener('touchstart', handleTouchStart, false);
document.body.addEventListener('touchend', handleTouchEnd, false);

let xDown = null;

function handleTouchStart(evt) {
    const firstTouch = evt.touches[0];
    xDown = firstTouch.clientX;
}

function handleTouchEnd(evt) {
    if (!xDown) {
        return;
    }

    const xUp = evt.changedTouches[0].clientX;
    const xDiff = xDown - xUp;

    if (xDiff > 50) {
        /* Swipe right to left detected */
        console.log('Swiped right to left');
        //alert('Swiped right to left');
        let step = parseInt(document.getElementById("infoButton").getAttribute('p-info'))
        if (step === 1) {

            document.getElementById("content-page1").classList.remove("active")
            setTimeout(function () {
                document.getElementById("content-page2").style.display = "block"
                document.getElementById("content-page1").style.display = "none"
                document.getElementById("iconTop").src = "shieldUp.svg"
                setTimeout(function () {
                    document.getElementById("content-page2").classList.add("active")
                    document.documentElement.style.setProperty('--page2-pos', '-100%');
                }, 200)

            }, 200)
            document.getElementById("page1").classList.remove("active")
            document.getElementById("page2").classList.add("active")
            document.getElementById("infoButton").setAttribute('p-info', '2');
        } else if (step === 2) {
            document.getElementById("content-page2").classList.remove("active")
            setTimeout(function () {
                document.getElementById("content-page3").style.display = "block"
                document.getElementById("content-page2").style.display = "none"
                document.getElementById("iconTop").src = "simple-handshake.svg"
                setTimeout(function () {
                    document.getElementById("content-page3").classList.add("active")
                }, 200)

            }, 200)
            document.getElementById("page2").classList.remove("active")
            document.getElementById("page3").classList.add("active")
            document.getElementById("infoButton").setAttribute('p-info', '3');
            document.getElementById("infoButton").style.opacity = "1"

        }
    } else if (xDiff < 50) {
        console.log('Swiped left to right');
        //alert('Swiped left to right');
    }

    /* Reset values */
    xDown = null;
}

//console.log("DEV MODE")
//setTimeout(function() {
//    loadNotes()
//}, 800)
function loadNotes() {
    removePreventDefaultListeners()
    document.documentElement.style.setProperty('--def-flow', 'auto');
    document.getElementById("welcome").style.display = "none"
    document.getElementById("mainContainer").style.display = ""
    setTimeout(function () {
        document.getElementById("simple-loading").style.display = "none"
        document.getElementById("notes1cont").style.display = ""
    }, 500)

}

if (localStorage.getItem("tascoNotesPrefs")) {
    if (localStorage.getItem("tascoNotesPrefs") === "skipWelcome: true") {
        loadNotes()
    }
}

function goNext(button) {
    let currentPInfo = button.getAttribute('p-info');
    console.log('Current p-info:', currentPInfo);
    // Calculate the new p-info value (for example, incrementing by 1)
    let newPInfo = parseInt(currentPInfo) + 1;
    // Set the new p-info value
    //button.setAttribute('p-info', newPInfo);
    // Log the new p-info value
    console.log('New p-info:', newPInfo);
    if (newPInfo === 2 || newPInfo === 3) {
        return;
    } else if (newPInfo === 4) {
        console.log("Triggering because previous was", currentPInfo)
        loadNotes()


    }
}

document.addEventListener("DOMContentLoaded", () => {
    const interBubble = document.querySelector(".interactive");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
        curX += (tgX - curX) / 20;
        curY += (tgY - curY) / 20;
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(
            curY
        )}px)`;
        requestAnimationFrame(() => {
            move();
        });
    }

    window.addEventListener("mousemove", (event) => {
        tgX = event.clientX;
        tgY = event.clientY;
    });

    move();
});

function saveProgress() {
    let currentProgress = localStorage.getItem("tascoNotesPrefs") //skipWelcome: true
    if (currentProgress) {
        if (currentProgress === "skipWelcome: true") {
            localStorage.removeItem("tascoNotesPrefs")
            alert("Automatic Welcome Screen Skip Disabled.")
        }
    } else {
        localStorage.setItem("tascoNotesPrefs", "skipWelcome: true")
        alert("Automatic Welcome Screen Skip Enabled.")
    }
}

function loadBg() {
    let currentProgress = localStorage.getItem("tascoNotesBg") //green: true
    if (currentProgress) {
        if (currentProgress === "green: true") {
            document.getElementById("bggradient").style.display = "none"
            document.getElementById("neuro").style.display = "block"
        }
    } else {
        document.getElementById("bggradient").style.display = "block"
        document.getElementById("neuro").style.display = "none"

    }
}
loadBg()

function changeBg() {
    let currentProgress = localStorage.getItem("tascoNotesBg") //green: true
    if (currentProgress) {
        if (currentProgress === "green: true") {
            document.getElementById("bggradient").style.display = "block"
            document.getElementById("neuro").style.display = "none"
            localStorage.removeItem("tascoNotesBg")
        }
    } else {
        document.getElementById("bggradient").style.display = "none"
        document.getElementById("neuro").style.display = "block"
        localStorage.setItem("tascoNotesBg", "green: true")
    }
}