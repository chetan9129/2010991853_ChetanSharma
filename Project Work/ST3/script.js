function func1() {
  var weightInput = document.getElementById("inputWeight").value;
  var earthWeight = 1;
  var jupitorWeight = 2.364;
  var marsWeight = 0.377;
  var mercuryWeight = 0.378;
  var moonWeight = 0.166;
  var neptuneWeight = 1.125;
  var plutoWeight = 0.067;
  var saturnWeight = 0.916;
  var uranusWeight = 0.889;
  var venusWeight = 0.907;

  var totalWeightOnEarth = Math.floor(earthWeight * weightInput);
  var totalWeightOnjupitor = Math.floor(jupitorWeight * weightInput);
  var totalWeightOnmars = Math.floor(marsWeight * weightInput);
  var totalWeightOnmercury = Math.floor(mercuryWeight * weightInput);
  var totalWeightOnmoon = Math.floor(moonWeight * weightInput);
  var totalWeightOnneptune = Math.floor(neptuneWeight * weightInput);
  var totalWeightOnpluto = Math.floor(plutoWeight * weightInput);
  var totalWeightOnsaturn = Math.floor(saturnWeight * weightInput);
  var totalWeightOnuranus = Math.floor(uranusWeight * weightInput);
  var totalWeightOnvenus = Math.floor(venusWeight * weightInput);
  //   var totalWeightOnuranus = earthWeight * weightInput;
  // console.log(weightInput);

  document.getElementById("earth-weight").innerHTML = totalWeightOnEarth;
  document.getElementById("jupitor-weight").innerHTML = totalWeightOnjupitor;
  document.getElementById("mars-weight").innerHTML = totalWeightOnmars;
  document.getElementById("mercury-weight").innerHTML = totalWeightOnmercury;
  document.getElementById("moon-weight").innerHTML = totalWeightOnmoon;
  document.getElementById("neptune-weight").innerHTML = totalWeightOnneptune;
  document.getElementById("pluto-weight").innerHTML = totalWeightOnpluto;
  document.getElementById("saturn-weight").innerHTML = totalWeightOnsaturn;
  document.getElementById("uranus-weight").innerHTML = totalWeightOnuranus;
  document.getElementById("venus-weight").innerHTML = totalWeightOnvenus;
}
