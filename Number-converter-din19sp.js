function DecConvert()
{
var x = document.getElementById('decimal').value;
x = parseInt(x);
var bin = (x>>>0).toString(2);
var hex = x.toString(16).toUpperCase();
var oct = x.toString(8);
document.getElementById('dectobin').innerHTML = bin; 
document.getElementById('dectohex').innerHTML = hex;
document.getElementById('dectooct').innerHTML = oct;
} 

function BinConvert()
{
    var y = document.getElementById('binary').value;
    y = y.toString();
   
    if( y.indexOf(2) != -1 || y.indexOf(3) != -1 || y.indexOf(4) != -1 || 
    y.indexOf(5) != -1 || y.indexOf(6) != -1 || y.indexOf(7) != -1 ||
    y.indexOf(8) != -1 || y.indexOf(9) != -1 )
    // Need to be improved
    {
        document.getElementById('binwarning').innerHTML = "Binary contains only 1 and 0";    
        document.getElementById('bintodec').innerHTML = ""; 
        document.getElementById('bintohex').innerHTML = "";
        document.getElementById('bintooct').innerHTML = "";
    }
    else
    {
    y = parseInt(y, 2);
    var dec = y.toString(10);
    var hex = y.toString(16).toUpperCase();
    var oct = y.toString(8);
    document.getElementById('bintodec').innerHTML = dec; 
    document.getElementById('bintohex').innerHTML = hex;
    document.getElementById('bintooct').innerHTML = oct;
    document.getElementById('binwarning').innerHTML = "";
    }
}

function HexConvert()
{
    var z = document.getElementById('hexadecimal').value;
    // need a check
    z = parseInt(z, 16);
    var dec = z.toString(10);
    var bin = z.toString(2);
    var oct = z.toString(8);
    if (isNaN(z))
    // should be changed
    {
    document.getElementById('hextodec').innerHTML = ""; 
    document.getElementById('hextobin').innerHTML = "";
    document.getElementById('hextooct').innerHTML = "";
    document.getElementById('hexwarning').innerHTML = "Hexadecimal number only contains numbers from 1 -9 and A - F"
    }
    else
    {
    document.getElementById('hextodec').innerHTML = dec; 
    document.getElementById('hextobin').innerHTML = bin;
    document.getElementById('hextooct').innerHTML = oct;
    document.getElementById('hexwarning').innerHTML = ""; 
    }
}

function OctConvert()
{
    var a = document.getElementById('octal').value;
    a = a.toString();
    if( a.indexOf(8) != -1 || a.indexOf(9) != -1)
    {
        document.getElementById('octtodec').innerHTML = ""; 
        document.getElementById('octtobin').innerHTML = "";
        document.getElementById('octtohex').innerHTML = "";
        document.getElementById('octwarning').innerHTML = "Octaldecimal numbers only contain 0 to 7";
    }
    else
    {
    a = parseInt(a, 8);
    var dec = a.toString(10);
    var bin = a.toString(2);
    var hex = a.toString(16).toUpperCase();
    document.getElementById('octtodec').innerHTML = dec; 
    document.getElementById('octtobin').innerHTML = bin;
    document.getElementById('octtohex').innerHTML = hex;
    document.getElementById('octwarning').innerHTML = "";
    }
}
// Display Decimal convert
function Showbox1()
{
    document.getElementById("box1").style.display = "block";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
    document.getElementById("box4").style.display = "none";
}
//Display binary convert
function Showbox2()
{
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "block";
    document.getElementById("box3").style.display = "none";
    document.getElementById("box4").style.display = "none";
}
//Display hexadecimal convert
function Showbox3()
{
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "block";
    document.getElementById("box4").style.display = "none";
}
//Displat octaldecimal convert
function Showbox4()
{
    document.getElementById("box1").style.display = "none";
    document.getElementById("box2").style.display = "none";
    document.getElementById("box3").style.display = "none";
    document.getElementById("box4").style.display = "block";
}