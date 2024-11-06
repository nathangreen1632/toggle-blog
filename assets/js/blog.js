const mainElement = document.getElementById('blogPosts');
const noPostsMessage = document.getElementById('noPostsMessage');

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

function renderBlogList() {
  const blogPosts = readLocalStorage();

  if (blogPosts.length === 0) {
    noPostsMessage.style.display = 'block';
  } else {
    noPostsMessage.style.display = 'none';
    blogPosts.forEach(createBlogPostElement);
  }
}

document.getElementById('back').addEventListener('click', () => {
  redirectPage('index.html');
});

renderBlogList();
