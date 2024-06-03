function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var buttons = document.getElementsByClassName("tab-button");

    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    setTimeout(function() {
        document.getElementById(tabName).classList.add("active");
    }, 200);

    // Añadir la clase activa al botón correspondiente
    for (i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute("onclick") === "openTab('" + tabName + "')") {
            buttons[i].classList.add("active");
        }
    }
}

// Mostrar la primera pestaña por defecto
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-button")[0].click();
});
