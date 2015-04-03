// COMMANDS.js: Commands for the server.

// I need string.trim for this:

function TrimStr (string) {
	return (string.toString()).trim();
}

// Find out if command is a real command (begins with a "/")

function isRealCommand(cmd){
	cmd = TrimStr(cmd);
	if(cmd[0] == "/")
		return true;
	else
		return false;
}

// Find out if command is a shell command (begins with a "$")
function isShellCommand(cmd){
	cmd = TrimStr(cmd);
	if(cmd[0] == "$")
		return true;
	else
		return false;
}

// Is the command a NODE.JS command?
function isNodeCommand(cmd){
	cmd = TrimStr(cmd);
	if(cmd[0] == ">")
		return true;
	else
		return false;
}

// Release Mouse pointer:

function releaseMousePointer(callback){
	document.exitPointerLock = document.exitPointerLock ||
			   document.mozExitPointerLock ||
			   document.webkitExitPointerLock;
	document.exitPointerLock();
	if(typeof callback === "function") callback({finished:true});
}

// Command list

var commandList = {
};

// Console.

function log(msg){
	var logger = document.getElementById("log");
	var container = document.getElementById("containerDiv");
	var input = document.getElementById("input");
	// if(!logger.id) logger.id = "console";
	var x = document.getElementsByTagName("canvas")[0];
	var h = x.height;
	// var offsetX = findPos(x)[0];
	var offsetY = findPos(x)[1] - input.offsetHeight; // calcs the offset of the height of the input.
	var realY = h + offsetY;
	// Now realY is the real position.
	// Now we must calculate the offset of the height of the div.
	// logger.style.top = 445 + "px" // realY2 + "px";
	logger.innerHTML += msg + "<br />";
	realY2 = realY - (logger.offsetHeight);
	container.style.top = realY2 + "px";
	//document.body.appendChild(logger);
	console.log(h,offsetY,realY,logger.offsetHeight,(realY+logger.offsetHeight), logger.style.top, logger.offsetHeight * 2, realY - 36);
}

// Update logs.
var logs = "";
function updateLog(){
	logs += document.getElementById("log").innerHTML.replace("<br />", "\n").replace("<br>","\n");
}
// Process command

function processCommand(cmd){
	if(!cmd) return;
	var shell = !!(isShellCommand(cmd))
	var real = !!(isRealCommand(cmd))
	var node = !!(isNodeCommand(cmd))
	// Recall that one "!" inverts the boolean value and 
	// two "!"s inverts the inverted bool value.
	
	// Get command arguments

	var args = cmd.split(" ");
	args.shift();
	var cmd = cmd.split(" ")[0];
	console.log(cmd,args);
	
	// If it isn't a real, shell, or node command, print it out and exit.
	if(!shell && !real &&!node){
		log(cmd + args.join(" "));
		return;
	}
	// Real commands have more importance than shell commands.
	// Shell commands have more importance than Node commands.
	if(real){
		switch(cmd.toLowerCase()){
			case "/say": 
				if(args)
					log(args.join(" "));
				else
					log("Usage: /say [msg]");
				break;
			case "/clearconsole":
				updateLog();
				document.getElementById("log").innerHTML = "";
				break;
			case "/help":
				log(" &nbsp;&nbsp;HELP");
				log("/say [msg] &nbsp; Says [msg]");
				log("/clearconsole Clears Console.");
				break;
			default:
				log("Unknown command: " + cmd);
		}
	}
	if(shell){
	}
}