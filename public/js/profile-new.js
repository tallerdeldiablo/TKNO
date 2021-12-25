const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#project-name");
  const post_id = title.getAttribute("data-id");
  console.log(post_id);
  // const needed_funding = document
  //   .querySelector("#project-funding")
  //   .value.trim();
  const content = document.querySelector("#comment-desc").value.trim();

  if (content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ post_id, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert("Failed to create comment");
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

    const response = await fetch(`/api/posts/${id}`, {
      method: "POST",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to update comment");
    }
  }
};
//-----**---

document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);

// document.querySelector(".delete").addEventListener("click", delButtonHandler);

// document.querySelector(".edit").addEventListener("click", edtButtonHandler);
