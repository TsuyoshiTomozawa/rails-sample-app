// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

// サイト全体で無効にする
Turbo.session.drive = false;]
