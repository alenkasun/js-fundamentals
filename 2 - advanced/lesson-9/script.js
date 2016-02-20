var xhr = new XMLHttpRequest();

xhr.open("GET", "textfile.txt", false);  // sync

xhr.send(null);

alert(xhr.responseText);