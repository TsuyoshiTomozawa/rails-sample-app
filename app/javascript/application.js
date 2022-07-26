// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import jquery from "jquery"
window.$ = window.jQuery = jquery
window.bootstrap = require("bootstrap")

// サイト全体で無効にする
// Turbo.session.drive = false;

$(function() {
    console.log("Hello Rails7!");
})