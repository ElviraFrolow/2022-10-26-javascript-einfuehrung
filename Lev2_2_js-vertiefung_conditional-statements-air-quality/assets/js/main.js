// function checkAirQuality(event) {
//   event.preventDefault();

//   const air = document.getElementById("checkAirQuality");

//   if (air <= 50) {
//     document.write(
//       "<h2>Level of Health concern: Good</h2><p>Level of health effect: Little or no risk</p>"
//     );
//   } else if (air >= 50) {
//     document.write(
//       "<h2>Level of Health concern: Moderate</h2><p>Level of health effect: Acceptable Quality</p>"
//     );
//   } else if (air >= 100) {
//     document.write(
//       "<h2>Level of Health concern: Unhealthy for sensitive groups</h2><p>Level of health effect: Generable publics not likely affected</p>"
//     );
//   }
// }

let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
output.innerHTML = slider.ariaValueMax;

slider.oninput = function () {
  output.innerHTML = this.value;
};
