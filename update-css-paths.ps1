$files = @("about.html", "blog.html", "contact.html", "services.html", "store.html", "iso.html")
foreach ($file in $files) {
    $path = "dist/$file"
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        $content = $content -replace 'href="style.css"', 'href="/style.css"'
        $content = $content -replace 'href="GlassIcons.css"', 'href="/GlassIcons.css"'
        $content = $content -replace "href='style.css'", "href='/style.css'"
        $content = $content -replace "href='GlassIcons.css'", "href='/GlassIcons.css'"
        $content | Set-Content $path
        Write-Host "Updated $path"
    }
}