async function loadComponent(id, file) {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const text = await response.text();
            document.getElementById(id).innerHTML = text;
        }
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadComponent('global-header', 'components/layout/header/header.html');
    loadComponent('global-footer', 'components/layout/footer/footer.html');
});