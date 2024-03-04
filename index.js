const switcher = document.querySelector("#switcher");
const root = document.documentElement;

switcher.addEventListener("change", (e) => {
    root.style.setProperty("--var-flex-dir", e.target.value);
   
});
