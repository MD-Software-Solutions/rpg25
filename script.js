function switchPage(page) {
    window.location.href = page;
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
}


function showPopup() {
    document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

function downloadCredits(path) {
    window.location.href = path;
    closePopup();
}

function openLinkInNewTab(url) {
    const fullUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
    window.open(fullUrl, '_blank');
}