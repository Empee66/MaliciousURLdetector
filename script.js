document.getElementById('check-btn').addEventListener('click', function () {
    const url = document.getElementById('url-input').value;
    const resultContainer = document.getElementById('result-container');
    const resultText = document.getElementById('result');
    const visitBtn = document.getElementById('visit-btn');

    if (!url) {
        alert("Please enter a URL.");
        return;
    }

    // Simple regular expressions for checking safe, suspicious, and dangerous URLs
    const safePattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+)\.([a-zA-Z]{2,6})(\/[a-zA-Z0-9\-\/]*)?$/;
    const mediumPattern = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+)\.([a-zA-Z]{2,6})(\/[a-zA-Z0-9\-\/]*)?$/;
    const dangerousPattern = /^(http:\/\/|https:\/\/)?(www\.)?([a-zA-Z0-9\-]+)\.(com|xyz|top|club)$/;

    // Reset visibility
    visitBtn.style.display = 'none';
    resultContainer.className = '';

    if (safePattern.test(url)) {
        // Safe URL
        resultText.textContent = "URL is OK to use.";
        resultContainer.className = 'ok';
        visitBtn.style.display = 'inline-block';
    } else if (mediumPattern.test(url)) {
        // Medium threat URL
        resultText.textContent = "This URL is of medium threat level.";
        resultContainer.className = 'medium';
        visitBtn.style.display = 'inline-block';
    } else if (dangerousPattern.test(url)) {
        // Dangerous URL
        resultText.textContent = "This URL is considered dangerous!";
        resultContainer.className = 'danger';
    } else {
        resultText.textContent = "Unable to determine the URL's safety.";
        resultContainer.className = 'danger';
    }
});
