var socket = io.connect(window.location.hostname);

socket.on('connect',function(){
	alert("connection detected");
});


