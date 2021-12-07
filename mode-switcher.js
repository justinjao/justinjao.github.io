// this checks to see if prefers dark theme is on (i.e. if it is nighttime)
// and it also checks to see whether there is a session storage of 'theme'
// (i.e. if you're visiting another page in the same session)
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)"); 
let theme = sessionStorage.getItem('theme');

// if (systemInitiatedDark.matches) {
// 	document.getElementById("theme-toggle").innerHTML = "Light Mode";
// } else {
// 	document.getElementById("theme-toggle").innerHTML = "Dark Mode";
// }

// this section runs if there is already a session storage set, and is necessary
// to ensure that if a user toggles the theme to manually override the system preferences
// that it will carry over as they visit other pages. Tbh, not sure why this is necessary
// to be inserted here, as I thought that this same block of code (at the end) performs this check
// but for some reason, if I remove this section here, it stops carrying over. So yeah, it needs it.
if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	// document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}

// this section is used to declare a function that checks whether system preferences
// change (e.g. if you're looking during the day and are still on the site as it turns to night)
// if so, it sete the attribute to dark, and clears the current session storage
function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
  	document.documentElement.setAttribute('data-theme', 'dark');		
   	// document.getElementById("theme-toggle").innerHTML = "Light Mode";
   	sessionStorage.setItem('theme', '');
  } else {
  	document.documentElement.setAttribute('data-theme', 'light');
    // document.getElementById("theme-toggle").innerHTML = "Dark Mode";
    sessionStorage.setItem('theme', '');
  }
}

// this is the event listener that checks if the previous function value changes
systemInitiatedDark.addEventListener(prefersColorTest);


// this next function controls what happens when the toggle button is clicked
// when thinking through this, remember that whatever the theme is currently set to,
// we want the OPPOSITE to happen when we toggle the switch
function modeSwitcher() {
	let theme = sessionStorage.getItem('theme');
	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	}	else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = "Light Mode";
	} else if (systemInitiatedDark.matches) {	
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
	} else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		// document.getElementById("theme-toggle").innerHTML = "Light Mode";
	}
}

if (theme === "dark") {
	document.documentElement.setAttribute('data-theme', 'dark');
	sessionStorage.setItem('theme', 'dark');
	// document.getElementById("theme-toggle").innerHTML = "Light Mode";
} else if (theme === "light") {
	document.documentElement.setAttribute('data-theme', 'light');
	sessionStorage.setItem('theme', 'light');
	// document.getElementById("theme-toggle").innerHTML = "Dark Mode";
}