function fn()
{
    var cont = document.getElementById("div1");
  
            if(cont.classList.contains("div1")) {
                cont.classList.remove("div1");
            }
            else {
                cont.classList.add("div1");
            }
}