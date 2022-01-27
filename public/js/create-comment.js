const newFormHandler = async (event) => {
  event.preventDefault();
// Collect values from the  form
  const title = document.querySelector("#project-name").value.trim();

// Collect values from the  form
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

//delete-comments-function
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
//event-->create-new
document
  .querySelector(".new-project-form")
  .addEventListener("submit", newFormHandler);
//event-->create-delete
document
  .querySelector(".project-list")
  .addEventListener("click", delButtonHandler);
