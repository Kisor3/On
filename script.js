let noClickCount = 0;

function showPage(pageId) {
    document.querySelectorAll('div').forEach(div => div.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function handleResponse(response) {
    if (response === 'yes') {
        showPage('page4');
    } else {
        noClickCount++;
        if (noClickCount >= 2) {
            showPage('retry');
        } else {
            // Randomize the position of the retry button
            document.getElementById('retry').style.position = 'absolute';
            document.getElementById('retry').style.top = Math.random() * 80 + 'vh';
            document.getElementById('retry').style.left = Math.random() * 80 + 'vw';
        }
    }
}