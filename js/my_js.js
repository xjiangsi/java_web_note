function init() {
    show_java_web_note();
}
function show_java_web_note() {
    hide_all();
    var sections = document.getElementsByName("home_section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "block";
    }
    var titles = document.getElementsByName("home_title");
    for (var i = 0; i < titles.length; i++) {
        titles[i].style.display = "flex";
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
    var sections = document.getElementsByName("vue_section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "block";
    }
    var titles = document.getElementsByName("vue_title");
    for (var i = 0; i < titles.length; i++) {
        titles[i].style.display = "flex";
    }
}
function show_maven() {
    hide_all();
    var sections = document.getElementsByName("maven_section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "block";
    }
    var titles = document.getElementsByName("maven_title");
    for (var i = 0; i < titles.length; i++) {
        titles[i].style.display = "flex";
    }
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