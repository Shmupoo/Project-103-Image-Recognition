function capture() {
    Webcam.snap(function(data_uri) {
        document.getElementById("output").innerHTML = '<img id="selfie_image" src"'+data_uri+'"/>';

    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mKXB7fW0G/model.json', modelLoaded);


