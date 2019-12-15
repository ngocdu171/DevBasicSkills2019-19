function factorial(a)
{
    var a;
    for(let i = a-1 ; i>1; i--)
    {
        a=a*i
    }
    return a;
}
function Combination()
{
    var n = Number(document.getElementById('nC').value);
    var k = Number(document.getElementById('kC').value);
    
    if (n > k)
    {
    var x = n - k ;

    x = factorial(x);
    for(let i=n-1; i>=k+1; i--)
    {
        n=n*i;
    }
        
        var Res = n/x;
    
    document.getElementById('Res1').innerHTML=Res;
}
if (n == k)
{
    for(let i = n-1; i >0; i--)
    {
      n = n * i ;   
    }  
    for(let i = k-1; i >0; i--)
    {
        k = k * i ;   
    } 
    var Res1 = n / k;
    document.getElementById('Res1').innerHTML= Res1;
}

}

function Permutation1(n,k)
{
    var n = Number(document.getElementById('nP').value);
    var k = Number(document.getElementById('kP').value);
    if (n > k) 
    {
        Res2 = factorial(n)/factorial(n-k);
    document.getElementById('Res2').innerHTML= Res2;
}
    if (n == k)
    {
        for(let i = n-1; i >0; i--)
    {
      n = n * i ;   
    }  
    var Res2 = n ;
    document.getElementById('Res2').innerHTML= Res2;
    }
}

function Permutation2()
{
    var n = Number(document.getElementById('nA').value);
    var k = Number(document.getElementById('kA').value);
    var a = n;
    if (n >= k)
    {
    for (i=1 ; i<k; i++)
        {
            n=n*a;
        }
    var Res3 = n ;
    document.getElementById('Res3').innerHTML= Res3;
    }
}
function DisplayA()
{
    document.getElementById("DisplayA").style.display = "block";
    document.getElementById("DisplayB").style.display = "none";
    document.getElementById("DisplayC").style.display = "none";
}
function DisplayB()
{
    document.getElementById("DisplayB").style.display = "block";
    document.getElementById("DisplayA").style.display = "none";
    document.getElementById("DisplayC").style.display = "none";
}
function DisplayC()
{
    document.getElementById("DisplayC").style.display = "block";
    document.getElementById("DisplayA").style.display = "none";
    document.getElementById("DisplayB").style.display = "none";
}
