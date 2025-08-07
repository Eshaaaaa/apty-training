function combineArrays() {
      try {
        const array1 = JSON.parse(document.getElementById("array1").value);
        const array2 = JSON.parse(document.getElementById("array2").value);

        if (!Array.isArray(array1) || !Array.isArray(array2)) {
          throw new Error("Both inputs must be valid arrays.");
        }

        const combined = [...new Set([...array1, ...array2])];

        document.getElementById("result").innerText = JSON.stringify(combined);
      } catch (error) {
        document.getElementById("result").innerText = "❌ Error: " + error.message;
      }
    }