const output = document.getElementById("output");

const enqueue = document.getElementById("enqueue");
const dequeue = document.getElementById("dequeue");
const front = document.getElementById("front");
const checkEmpty = document.getElementById("checkEmpty");
const showQueue = document.getElementById("showQueue");

let queue = []; 

enqueue.addEventListener("click", () => {
  const input = document.getElementById("num").value;
  if (input.trim() === "") {
    output.innerText = "Please enter a value.";
    return;
  }

  const num = Number(input);
  queue.unshift(num); 
  output.innerText = `Enqueued: ${num}`;
  document.getElementById("num").value = "";
});

dequeue.addEventListener("click", () => {
  if (queue.length === 0) {
    output.innerText = "Queue is empty!";
    return;
  }

  queue.reverse();                     
  const removed = queue.shift();       
  queue.reverse();                     

  output.innerText = `Dequeued: ${removed}`;
});


front.addEventListener("click", () => {
  if (queue.length === 0) {
    output.innerText = "Queue is empty!";
    return;
  }
  const next = queue[queue.length - 1]; 
  output.innerText = `Next Element: ${next}`;
});

checkEmpty.addEventListener("click", () => {
  const isEmpty = queue.length === 0;
  output.innerText = `Is queue empty? ${isEmpty}`;
});

showQueue.addEventListener("click", () => {
  output.innerText = queue.length ? `Queue: ${queue}` : "Queue is empty.";
});
