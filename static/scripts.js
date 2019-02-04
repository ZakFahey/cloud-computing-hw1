var examples = [
    'google.com', 'amazon.com',
    'facebook.com', 'youtube.com',
    'cnn.com', 'reddit.com',
    'uc.edu', 'twitter.com',
    'nytimes.com', 'mozilla.org'
];
var placeholderPos = 0;

function rotatePlaceholder() {
    placeholderPos = (placeholderPos + 1) % examples.length;
    document.getElementById("sitename").placeholder = examples[placeholderPos];
}

setInterval(rotatePlaceholder, 2000);

function checkWebsite() {
    var url = document.getElementById("sitename").value;

    document.getElementById('no').style.display = 'none';
    document.getElementById('yes').style.display = 'none';

    var request = new XMLHttpRequest();
    request.open('GET', '/api/status?url=' + encodeURI(url), true);

    request.onload = function () {
        var success = JSON.parse(this.response).success;
        if (success) {
            // Website is not down
            document.getElementById('no').style.display = 'block';
            document.getElementById('yes').style.display = 'none';
            document.getElementById('name-no').innerText = document.getElementById("sitename").value;
        } else {
            // Website is down
            document.getElementById('yes').style.display = 'block';
            document.getElementById('no').style.display = 'none';
            document.getElementById('name-yes').innerText = document.getElementById("sitename").value;
        }
    };

    request.onerror = function () {
        alert('Request failed to send.');
    };

    request.send();
}

function disableButton(textbox) {
    document.getElementById('submitButton').disabled = (textbox.value.length === 0);
}