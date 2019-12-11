function generate_table()
{
  var i =0;   
  var j =0;
  var table_elements = document.getElementById('truth_table');
  var table_content = "<tr><td>p</td><td>q</td><td>p&#8744q</td><td>p&#8743q</td><td>p&#8660q</td><td>&#172p</td><td>p&#8853q</td></tr>"
     
  for ( i=0; i<2; i++)
  {
    for (j=0 ; j<2 ; j++)
    {
      var a = i || j; // or
      var b = i && j; // and
      var c = i === j; //xnor
      var d = !i; // opposite
      var e = (i||j)&&!(i&&j); 
      // return boolean expression to 1 and 0
      if (d==true)
      {
        d=1;
      }
      else
      {
        d=0;
      }
      if (c==true)
      {
        c=1;
      }
      else
      {
        c=0;
      }
      if (e==true)
      {
        e=1;
      }
      else
      {
        e=0;
      }
       table_content += "<tr><td>"+i+"</td><td>"+j+"</td><td>"+a+"</td><td>"+b+"</td><td>"+c+"</td><td>"+d+"</td><td>"+e+"</td></tr>";
      table_elements.innerHTML= table_content;
    }
    
  }
}