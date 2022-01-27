const newFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#post-name").value.trim();

  const content = document.querySelector("#post-desc").value.trim();
  alert("titlw" + title + content);
  if (title && content) {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({ title, content }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to create post");
    }
  }
};



document
  .querySelector(".btn-primary")
  .addEventListener("click", newFormHandler);

// document
//   .querySelector(".project-list")
//   .addEventListener("click", delButtonHandler);

// document
//   .querySelector(".project-list")
//   .addEventListener("click", newFormHandler);
