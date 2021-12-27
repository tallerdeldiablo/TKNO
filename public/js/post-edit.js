const newFormHandler = async (event) => {};

const editButtonHandler = async (event) => {
  const title = document.querySelector("#title").value.trim();
  const id = document.querySelector("#postid").value.trim();

  const content = document.querySelector("#post-desc").value.trim();
  console.log(title);
  console.log(id);
  console.log(content);
  alert("Edited");
  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to update project");
    }
  }
};
const delFormHandler = async (event) => {};

const delButtonHandler = async (event) => {
  const title = document.querySelector("#title").value.trim();
  const id = document.querySelector("#postid").value.trim();

  const content = document.querySelector("#post-desc").value.trim();
  console.log(title);
  console.log(id);
  console.log(content);
  alert("Post Deleted");
  if (title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to delete project");
    }
  }
};

document
  .querySelector(".project-list")
  .addEventListener("click", editButtonHandler);
document
  .querySelector(".delete-post")
  .addEventListener("click", delButtonHandler);
