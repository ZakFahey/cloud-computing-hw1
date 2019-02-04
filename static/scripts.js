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
    alert();
}