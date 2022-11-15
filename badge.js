/**
 * This script adds a "Made with Replit" badge to your repl when seen in full-browser view
 */

function main() {
	// Suppress in ReplView
	if (window.location.hostname.split('.')[1] === 'id') return;

	// Theme is passed from the script tag, default blue
	const themes = {
		dark: { fg: '#F5F9FC', bg: '#130F26' },
		light: { fg: '#130F26', bg: '#F5F9FC' },
		red: { fg: '#F5F9FC', bg: '#FA4B4B' },
		orange: { fg: '#F5F9FC', bg: '#D96D00' },
		yellow: { fg: '#F5F9FC', bg: '#A68A00' },
		lime: { fg: '#F5F9FC', bg: '#639400' },
		green: { fg: '#F5F9FC', bg: '#00A11B' },
		teal: { fg: '#F5F9FC', bg: '#0093B0' },
		blue: { fg: '#F5F9FC', bg: '#0F87FF' },
		blurple: { fg: '#F5F9FC', bg: '#8E78FF' },
		purple: { fg: '#F5F9FC', bg: '#B266FF' },
		magenta: { fg: '#F5F9FC', bg: '#EB3BEB' },
		pink: { fg: '#F5F9FC', bg: '#F545BA' },
	};
	const color = themes[document.currentScript.getAttribute('theme') || 'blue'];

	const badge = `
  <style>
  #replit-badge {
    position: absolute;
    cursor: pointer;
    bottom: 16px;
    right: 16px;
    z-index: 1000;
		overflow-x: hidden; 
    overflow-y: auto;
  }

  #replit-badge svg {
    opacity: 0.5;
    transition-property: opacity, transform;
    transition: opacity 120ms, transform 120ms;
    transition-timing-function: ease-out;
		overflow-x: hidden; 
    overflow-y: auto;
  }

  #replit-badge:hover svg {
    transform: scale(1.05);
    opacity: 1;
  }
  </style>
  
  <a id="replit-badge" onclick="badge()">

 <svg 
 xmlns="http://www.w3.org/2000/svg"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 width="150px" height="150px">
<image  x="40px" y="40px" width="80px" height="80px"  xlink:href="data:img/png;base64,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" />
</svg>

  </a>
  `;

	document.body.insertAdjacentHTML('beforeend', badge);
}
//17300

document.addEventListener('touchstart', this.touchstart);
document.addEventListener('touchmove', this.touchmove);

function touchstart(e) {
    e.preventDefault()
}

function touchmove(e) {
    e.preventDefault()
}
setTimeout(function() {
	$("#replit-badge").fadeOut();
}, 10300);
setTimeout(function() {
	$("#replit-badge").fadeIn();
}, 11300);
setTimeout(function() {
	$("#replit-badge").fadeOut();
}, 12300);
setTimeout(function() {
	$("#replit-badge").fadeIn();
}, 13300);
setTimeout(function() {
	$("#replit-badge").fadeOut();
}, 14300);
setTimeout(function() {
	$("#replit-badge").fadeIn();
}, 15300);
setTimeout(function() {
	$("#replit-badge").fadeOut();
}, 16300);

main();
