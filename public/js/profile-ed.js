const editFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name").value.trim();

  const content = document.querySelector("#project-desc").value.trim();

  if (title && content) {
    const response = await fetch(`/api/projects`, {
      method: "UPDATE",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to create project");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};
//*--editt-Button-Handler-function 
const edtButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "PUT",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to update project");
    }
  }
};
//-----**---

document
  .querySelector(".new-project-form")
  .addEventListener("submit", editFormHandler);

document.querySelector(".delete").addEventListener("click", delButtonHandler);

// document.querySelector(".edit").addEventListener("click", edtButtonHandler);
