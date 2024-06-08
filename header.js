function loadHeader(headerTitle) {
    console.log("Loading header...");
    fetch('../../header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;
            document.getElementById('header-title').textContent = headerTitle;
        })
        .catch(error => console.error('Error loading header:', error));
}
