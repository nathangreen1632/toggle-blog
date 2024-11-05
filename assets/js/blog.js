const mainElement = document.getElementById('blogPosts');
const backButton = document.getElementById('back');

function createBlogPostElement(post) {

  const postContainer = document.createElement('div');
  const titleElement = document.createElement('h3');
  const contentElement = document.createElement('p');
  const authorElement = document.createElement('small');

  titleElement.textContent = post.title;
  contentElement.textContent = post.content;
  authorElement.textContent = `By: ${post.username}`;

  postContainer.appendChild(titleElement);
  postContainer.appendChild(contentElement);
  postContainer.appendChild(authorElement);

  mainElement.appendChild(postContainer);
}

function displayNoPostsMessage() {
  document.getElementById('noPostsMessage').style.display = 'block';
}

function renderBlogList() {

  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

  if (blogPosts.length === 0) {
    displayNoPostsMessage();
  } else {
    document.getElementById('noPostsMessage').style.display = 'none';
    blogPosts.forEach(createBlogPostElement);
  }
}

backButton.addEventListener('click', () => {
  redirectPage('index.html');
});

renderBlogList();
