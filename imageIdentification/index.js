// Initialize Image Classifier with MobileNet.
const classifier =  ml5.imageClassifier('MobileNet');
const imageInput = document.getElementById("imageInput");
const image = document.getElementById("image")
const results = document.getElementById("result");

imageInput.onchange = async (event)=> {
const imageUrl = window.URL.createObjectURL(event.target.files[0]);
 image.src = imageUrl;
 image.style.display="block"
 results.innerText = "Scanning ...";
 await classifier.classify(image, gotResult);
}


// Function to run when results arrive
function gotResult(error, results) {
    const results1 = document.getElementById("result");
    console.log("-----",results)
  if (error) {
    results1.innerHTML = error;
  } else {
    let num = results[0].confidence * 100;
    results1.innerHTML = results[0].label + "<br>Confidence: " + num.toFixed(2) + "%";
  }
}