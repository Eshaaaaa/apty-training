function mostFrequent() {
    const inputArray = document
        .getElementById("arrayInput")
        .value.split(",")
        .map(s => s.trim())
        .filter(s => s !== "")
        .map(Number);
    let frequencyMap = {};
    let maxCount = 0;
    let mostFrequentElement = null;

    for (let i = 0; i < inputArray.length; i++) {
        let num = inputArray[i];
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;

        if (frequencyMap[num] > maxCount) {
            maxCount = frequencyMap[num];
            mostFrequentElement = num;
        }
    }

    document.getElementById("mostFrequentElement").innerText = mostFrequentElement;
}