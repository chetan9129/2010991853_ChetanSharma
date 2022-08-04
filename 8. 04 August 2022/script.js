function fn()
{
    var i1=document.getElementById("i1").value;
    var sum=0;
    for(var i=0;i<=i1;i++)
    {
        if(i%2==0)
        {
            sum=sum+i;
        }
    }
    document.getElementById("p1").innerHTML="Sum of Even number upto n is: "+sum;
}
