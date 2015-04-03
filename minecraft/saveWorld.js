// SAVE GAME EXPORTER

// Saves it via hex:

// Format:
 /*
"(your world name here)"
World data here...
*/
// We encode it in hex: (0 1 2 3 4 5 6 7 8 9 A B C D E F) \x<hex digit><hex digit>
// There can be up to 256 blocks in the current format.

// Utility function to create a "\x<hex><hex>" string:
function createHex(a,b){
	return "\\x"+ a + b;
}

