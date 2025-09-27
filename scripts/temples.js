document.querySelector("#currentyear").textContent = new Date().getFullYear();

const lastModifiedDate = document.lastModified;

document.querySelector("#lastmodified").textContent = `Last modified: ${lastModifiedDate}`;