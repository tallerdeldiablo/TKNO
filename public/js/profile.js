const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name").value.trim();
  // const needed_funding = document
  //   .querySelector("#project-funding")
  //   .value.trim();
  const content = document.querySelector("#project-desc").value.trim();

  if (title && content) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
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
//*--edtButtonHandler
const edtButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/projects/${id}`, {
      method: "UPDATE",
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
  .addEventListener("submit", newFormHandler);

document.querySelector(".delete").addEventListener("click", delButtonHandler);

// document.querySelector(".edit").addEventListener("click", edtButtonHandler);
