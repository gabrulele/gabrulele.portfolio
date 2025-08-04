const svg = d3.select("svg");
const width = +svg.attr("width");
const height = +svg.attr("height");
const faceY = height / 2 + 50;
const faceSpacing = 115;

d3.json("data.json").then(data => {
  // SCALE
  const roundnessScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.roundness))
    .range([0.5, 1.2]);

  const eyeScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.eyeSize))
    .range([0.2, 0.6]);

  const noseScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.noseSize))
    .range([0.15, 0.45]);

  const mouthScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.mouthWidth))
    .range([0.3, 0.7]);

  // GROUPS
  const faces = svg.selectAll("g.face")
    .data(data, d => d.id)
    .enter()
    .append("g")
    .attr("class", "face")
    .attr("transform", (d, i) => `translate(${i * faceSpacing + 50}, ${faceY})`);

  // BASE FACE
  faces.append("image")
    .attr("href", "images/empty-face.png")
    .attr("x", -50)
    .attr("y", -60)
    .attr("width", 100)
    .attr("height", 100)
    .attr("transform", d => `scale(${roundnessScale(d.roundness)})`)
    .on("click", () => sortFaces("roundness"));

  // EYES
  faces.append("image")
    .attr("href", "images/eyes.png")
    .attr("x", -30)
    .attr("y", -20) // più in basso
    .attr("width", 60)
    .attr("height", 25)
    .attr("transform", d => `scale(${eyeScale(d.eyeSize)})`)
    .on("click", () => sortFaces("eyeSize"));

  // NOSE
  faces.append("image")
    .attr("href", "images/nose.png")
    .attr("x", -15)
    .attr("y", -5) // più in alto
    .attr("width", 30)
    .attr("height", 40)
    .attr("transform", d => `scale(${noseScale(d.noseSize)})`)
    .on("click", () => sortFaces("noseSize"));

  // MOUTH
  faces.append("image")
    .attr("href", "images/mouth.png")
    .attr("x", -25)
    .attr("y", 20) // più in basso
    .attr("width", 50)
    .attr("height", 20)
    .attr("transform", d => `scale(${mouthScale(d.mouthWidth)})`)
    .on("click", () => sortFaces("mouthWidth"));

  // ID Label sotto ogni volto
  faces.append("text")
    .attr("class", "face-id")
    .attr("y", 110) // posizione sotto il volto, regola se serve
    .attr("text-anchor", "middle")
    .attr("font-family", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif")
    .attr("font-size", "14px")
    .attr("fill", "#333")
    .text(d => `ID: ${d.id}`);

});

function sortFaces(variable) {
  d3.json("data.json").then(data => {
    data.sort((a, b) => a[variable] - b[variable]);

    svg.selectAll("g.face")
      .data(data, d => d.id)
      .transition()
      .duration(1000)
      .attr("transform", (d, i) => `translate(${i * faceSpacing + 50}, ${faceY})`);
  });
}
