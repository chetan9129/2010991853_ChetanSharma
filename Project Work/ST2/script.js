function myFunction() {
  var rem,
    borderRadius,
    sum = 0;
  let i1 = document.getElementById("i1").value;
  let i1Count = i1.toString().length;
  if (i1Count == 5) {
    while (i1) {
      rem = i1 % 10;
      sum += rem ;
      i1 = Math.floor(i1 / 10);
    }
    borderRadius = Math.floor(sum / 5);
    document.getElementById("create").style.width = sum + "px";
    document.getElementById("create").style.height = sum + "px";
    document.getElementById("create").style.borderRadius = borderRadius + "px";
  } else {
    alert("Please enter a 5-digit number");
  }
}
