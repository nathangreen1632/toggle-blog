const formElement = document.getElementById('blogForm');
const errorElement = document.getElementById('error');

function handleFormSubmission(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const content = document.getElementById('content').value.trim();

  if (!username || !title || !content) {
    errorElement.textContent = 'Please complete the form.';
    return;
  }

  const currentDateTime = new Date().toLocaleString();

  const newPost = {
    username: username,
    title: title,
    content: content,
  };

  storeLocalStorage(newPost);

  redirectPage('blog.html');
}

formElement.addEventListener('submit', handleFormSubmission);