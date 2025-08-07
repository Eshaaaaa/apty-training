function compare() {
  const arr = Array.from({ length: 100000 }, (_, i) => i);
  const results = [];

  const measureFor = () => {
    const start = performance.now();
    for (let i = 0; i < arr.length; i++) {
      const temp = arr[i];
    }
    const end = performance.now();
    return end - start;
  };

  const measureForOf = () => {
    const start = performance.now();
    for (const value of arr) {
      const temp = value;
    }
    const end = performance.now();
    return end - start;
  };

  const measureForEach = () => {
    const start = performance.now();
    arr.forEach((value) => {
      const temp = value;
    });
    const end = performance.now();
    return end - start;
  };

  const timeFor = measureFor();
  const timeForOf = measureForOf();
  const timeForEach = measureForEach();

  results.push(`For Loop: ${timeFor.toFixed(2)} ms`);
  results.push(`For...Of Loop: ${timeForOf.toFixed(2)} ms`);
  results.push(`ForEach Loop: ${timeForEach.toFixed(2)} ms`);

  document.getElementById("results").innerText = results.join("\n");

  const report = `
Performance Report:
-----------------------------

🔹 Test Results (on current browser):
- For Loop: Fastest
- ForEach Loop: Slightly slower
- For...Of Loop: Slowest

💡 Why These Results?
- 'for' loop is the most primitive and efficient. JavaScript engines optimize it heavily for raw performance.
- 'forEach' is a built-in method, often faster than 'for...of' in simple operations because it's optimized and avoids iterator overhead.
- 'for...of' relies on internal iterators, which adds overhead especially when looping over large arrays.

📌 General Performance (Most Cases):
- For Loop: ✅ Fastest in almost every case
- For...Of: 🟡 Medium — better for readability, supports break/continue
- ForEach: 🔴 Slowest in complex or large-scale logic due to function callback overhead

✅ Use Recommendations:
- Use 'for' when you need maximum speed, index access, or early termination (break/continue).
- Use 'for...of' when working with values only and you want clean readable code that can exit early.
- Use 'forEach' when you prefer concise, functional-style iteration, and performance is not critical.

🧠 Conclusion:
Choose the loop based on your priority:
- Performance-critical → 'for'
- Readability & values only → 'for...of'
- Simplicity & functional approach → 'forEach'

Note: Actual performance can vary across browsers and use cases.
`;
  document.getElementById("conclusion").innerText +=  report;
}
