document.addEventListener("DOMContentLoaded", function () {

    var main = document.querySelector("main:first-of-type"),
        l, s,
        stylez = [];

    // do we have alternate stylesheets?
    [].slice.call(
        document.querySelectorAll('link[rel]:not([href*="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"])')
    ).forEach(function (el) {

        stylez.push(el); // save node

        if (el.rel.match(/^stylesheet$/i)) {

            // keep standard stylesheet
            l = el;

        } else {

            // remove any alternative stylesheets
            el.parentNode.removeChild(el);
        }
    });

    if (stylez.length > 0) {

        // create style switcher
        s = document.createElement("aside");
        s.innerHTML = "<h2>Style ändern</h2>";

        main.insertBefore(s, main.firstChild);

        // create buttons
        stylez.forEach(function (el) {
            var b = document.createElement("button");

            b.setAttribute("data-stylesheet", el.href);
            b.setAttribute("class", "btn btn-outline-primary")

            if (el.title) {
                b.textContent = el.title;
            }

            if (el === l) {
                b.textContent = "dunkel";
            }

            s.appendChild(b);
        });
    }

    function loadStyle() {
        if (localStorage.getItem("stylez")) {
            l.href = localStorage.getItem("stylez");
        }
    }

    // only continue if required elements are present
    if (l && s) {

        // set previously stored stylesheet?
        loadStyle();

        // listen for clicks on buttons
        s.addEventListener("click", function (ev) {
            var b = ev.target; // button

            if (b && b.hasAttribute("data-stylesheet")) {

                // save value
                localStorage.setItem(
                    "stylez",
                    b.getAttribute("data-stylesheet")
                );

                loadStyle();
            }
        });
    }
});
