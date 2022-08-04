function fn()
{
    var i1=document.getElementById("i1").value;
    var i2=document.getElementById("i2").value;
    var i3=document.getElementById("i3").value;
    var count=0;

    for(var i=i1;i<=i2;i++)
    {
        if(i%i3==0)
        {
            count++;
        }
    }
    document.getElementById("p1").innerHTML="Count of number divisible by k are: "+count; 


    
}