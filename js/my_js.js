function init() {
    show_java_web_note();
}
function show_java_web_note() {
    hide_all();
    var home_sections = document.getElementsByName("home_section");
    for (var i = 0; i < home_sections.length; i++) {
        home_sections[i].style.display = "block";
    }
    var home_titles = document.getElementsByName("home_title");
    for (var i = 0; i < home_titles.length; i++) {
        home_titles[i].style.display = "flex";
    }
}
function show_html() {
    hide_all();
    var html = document.getElementById("html");
    var s2 = document.getElementById("s2");
    html.style.display = "flex";
    s2.style.display = "block";
}
function show_javascript() {
    hide_all();
    var javascript = document.getElementById("javascript");
    var s3 = document.getElementById("s3");
    javascript.style.display = "flex";
    s3.style.display = "block";
}
function show_vue() {
    hide_all();
    var vue = document.getElementById("vue");
    var s4 = document.getElementById("s4");
    vue.style.display = "flex";
    s4.style.display = "block";
}
function show_axios2() {
    hide_all();
    var Axios2 = document.getElementById("Axios2");
    var s5 = document.getElementById("s5");
    Axios2.style.display = "flex";
    s5.style.display = "block";
}
function hide_all() {
    var titles = document.getElementsByClassName("title");
    for (var i=0; i<titles.length; i++) {
        titles[i].style.display = "none";
    }
    var sections = document.getElementsByClassName("section");
    for (var i=0; i<sections.length; i++) {
        sections[i].style.display = "none";
    }
}
function say_hello() {
    console.log("Hello, world!");
}