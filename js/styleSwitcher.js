/*
Setting cookie and adding style switcher to index.html
*/
document.addEventListener("DOMContentLoaded", function () {

    var main = document.querySelector("main:first-of-type"),
        l, s,
        stylez = [];

    // remove unwanted stylesheet
    [].slice.call(
        document.querySelectorAll('link[rel]:not([href*="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"])')
    ).forEach(function (el) {

        stylez.push(el); // save

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
        if (getCookie("stylesheet")) {
            l.href = getCookie("stylesheet")
        }
       /* if (localStorage.getItem("stylez")) {
            l.href = localStorage.getItem("stylez");
        }*/
    }

    /*
    Wrapper which filters value of the cookie

    */
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1);
            if (c.indexOf(name) == 0)
                return c.substring(name.length, c.length);
        }
        return "";
    }

    // only continue if required elements are present
    if (l && s) {

        // set previously stored stylesheet?
        loadStyle();

        // listen for clicks on buttons
        s.addEventListener("click", function (ev) {
            var b = ev.target; // button

            if (b && b.hasAttribute("data-stylesheet")) {

                /*
                Setting cokie which is valid for 5 days
                */
                var d = new Date();
                d.setTime(d.getTime() + (5*24*60*60*1000));
                var expires = "expires="+ d.toUTCString();
                document.cookie = "stylesheet" + "=" + b.getAttribute("data-stylesheet") + ";" + expires + ";path=/";

                loadStyle();
            }
        });
    }
});
