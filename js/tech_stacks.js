function clearTechStackContainer() {
  document.getElementById("tech_stack_container").replaceChildren();
}

function appendTechStacksToContainer(colDiv) {
  document.getElementById("tech_stack_container").appendChild(colDiv);
}

function createTechStackHtmlElement(techStack) {
  let colDiv = document.createElement("div");
  colDiv.className = "col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2";
  let circleDiv = document.createElement("div");
  circleDiv.className = "circle bounce";
  circleDiv.style.backgroundImage = `url(${techStack.imagePath})`;
  circleDiv.style.animationDelay = `${techStack.animationDelay}s`;
  circleDiv.title = techStack.name;
  colDiv.appendChild(circleDiv);
  appendTechStacksToContainer(colDiv);
}

function loadTechStacks(techStacks) {
  clearTechStackContainer();
  applyTechStackAnimationDelay(techStacks);
}

function applyTechStackAnimationDelay(techStacks) {
  for (techStack of techStacks) {
    techStack.animationDelay = Math.random().toFixed(2);
    createTechStackHtmlElement(techStack);
  }
}

function readTechStacksJson(callback) {
  fetch("data/techStacks.json")
    .then((response) => response.json())
    .then((json) => {
      techStacksList = json;
      loadTechStacks(techStacksList);

      if (callback) {
        callback();
      }
    });
}
