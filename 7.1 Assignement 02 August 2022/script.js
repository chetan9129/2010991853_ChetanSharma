function fn() {
    var i1=document.getElementById("i1").value;
    if(i1==1)
    {
        return false;   
    }
    else if(i1==2)
    {
        return true;
    }
    else
    {
        for(var i=2;i<i1;i++)
        {
            if(i1%i==0)
            {
                return false;
            }
        }
        return true;
    }
  }
  console.log(fn());
