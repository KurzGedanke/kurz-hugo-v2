$.noConflict();

function setStorage() {
    console.log('Setting Locale Storage')
    localStorage.setItem('theme', 'Light');
    jQuery('#theme').attr('href', '/css/Light.css')
}

function switchTheme() {
    var theme = localStorage.getItem('theme')
    var themeSelected = jQuery("#theme-selected").val()
    localStorage.removeItem('theme')
    localStorage.setItem('theme', themeSelected)
    jQuery('#theme').attr('href', '/css/' + themeSelected + '.css')
    console.log(themeSelected)
        // if (theme == 'themeSelected') {
        //     jQuery('#theme').attr('href', '{{ .Site.BaseURL }}css/light.css')
        //     localStorage.removeItem('theme')
        //     localStorage.setItem('theme', 'light')
        // } else if (theme == 'light') {
        //     jQuery('#theme').attr('href', '{{ .Site.BaseURL }}css/dark.css')
        //     localStorage.removeItem('theme')
        //     localStorage.setItem('theme', 'dark')
        // }
}

function testStorage() {
    var theme = localStorage.getItem('theme')
}

function checkTheme() {
    var theme = localStorage.getItem('theme')
    if (theme == null) {
        setStorage()
    } else {
        var themeSelector = document.getElementById('theme-selected');
        themeSelector.value = theme
        jQuery('#theme').attr('href', '/css/' + theme + '.css')
    }
}