document.addEventListener("contextmenu", function (event) {
  if (event.target.textContent === "Explore from here") {
    console.log("Explore from here detected");

    const url = event.target.offsetParent.href;
    const match = url.match(/qid=([^&]+)/);
    if (match) {
      navigator.clipboard.writeText(match[1]);
      console.log("Copied to clipboard: " + match[1]);
      return;
    } else {
      console.log("try again");
      return null;
    }
  }
});
