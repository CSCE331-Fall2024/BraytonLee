document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("currentStylesheet") === null) {
        document.getElementById("stylesheet_id").href = "styles/proStyle.css"
        localStorage.setItem("currentStylesheet", "proStyle")
    } else {
        document.getElementById("stylesheet_id").href = localStorage.getItem("currentStylesheet")
    }
})

// if (localStorage.getItem("currentStylesheet") === null) {
//     document.getElementById("stylesheet_id").href = "styles/spaceStyle.css"
//     localStorage.setItem("currentStylesheet", "proStyle")
// }


function theme1Link() {
    document.getElementById("stylesheet_id").href = "styles/proStyle.css"
    localStorage.setItem("currentStylesheet", "styles/proStyle.css")
}

function theme2Link() {
    document.getElementById("stylesheet_id").href = "styles/spaceStyle.css"
    localStorage.setItem("currentStylesheet", "styles/spaceStyle.css")
}
