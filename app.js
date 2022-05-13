

async function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    try {
      await navigator.serviceWorker.register("sw.js");
    } catch (error) {
      console.log("Failed: ", error);
    }
  }
}

window.addEventListener("load", async (e) => {
  await registerServiceWorker();

  await fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
});
