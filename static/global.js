// ----- TEST -----
console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// ----- ADD NAV -----
let pages = [
    { url: ".", title: "Home" },
    { url: "./projects", title: "Projects" },
    { url: "./resume", title: "Resume" },
    { url: "./contact", title: "Contact" },
];

let nav = document.createElement("nav");
document.body.append(nav);

const ARE_WE_HOME = document.documentElement.classList.contains("home");

for (let p of pages) {
    let url = p.url;
    let title = p.title;

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;

    console.log(location.host);

    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host !== location.host) {
        a.target = "_blank";
    }

    nav.append(a);
}

// ----- LIGHT MODE DARK MODE -----
document.body.insertAdjacentHTML("afterbegin", `
    <label class="color-scheme">
        Theme:
        <select>
            <option value="light dark">Automatic</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
        </select>
    </label>`
);

// step 4.4
let select = document.querySelector("select");

select.addEventListener("input", function (event) {
    console.log("color scheme changed to", event.target.value);

    document.documentElement.style.setProperty("color-scheme", event.target.value);

    // TODO: (step 4.5.1) uncomment the line below!
    // localStorage.colorScheme = event.target.value;
});


// step 4.5 (continued)
// Reminder: uncomment line inside the event listener for 4.5.1
if ("colorScheme" in localStorage) {
    // TODO: set color scheme to the stored local value (hint: look at handout)
}