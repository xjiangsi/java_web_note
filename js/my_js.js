function init() {
    show_java_web_note();
}
function show_java_web_note() {
    hide_all();
    var java_web_note = document.getElementById("java_web_note");
    var s1 = document.getElementById("s1");
    java_web_note.style.display = "block";
    s1.style.display = "block";
}
function show_html() {
    hide_all();
    var html = document.getElementById("html");
    var s2 = document.getElementById("s2");
    html.style.display = "block";
    s2.style.display = "block";
}
function show_javascript() {
    hide_all();
    var javascript = document.getElementById("javascript");
    var s3 = document.getElementById("s3");
    javascript.style.display = "block";
    s3.style.display = "block";
}
function show_vue() {
    hide_all();
    var vue = document.getElementById("vue");
    var s4 = document.getElementById("s4");
    vue.style.display = "block";
    s4.style.display = "block";
}
function show_axios2() {
    hide_all();
    var Axios2 = document.getElementById("Axios2");
    var s5 = document.getElementById("s5");
    Axios2.style.display = "block";
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