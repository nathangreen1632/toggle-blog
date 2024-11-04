function toggleLightDarkMode() {
  const currentMode = localStorage.getItem('mode') || 'light';

  const newMode = currentMode === 'light' ? 'dark' : 'light';
  const emoji = newMode === 'light' ? '🌙' : '🌞';

  document.body.className = newMode;

  localStorage.setItem('mode', newMode);
}

(function setInitialMode() {
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.className = savedMode;
})();

document.getElementById('toggle').addEventListener('click', toggleLightDarkMode);

function readLocalStorage() {
  const blogData = JSON.parse(localStorage.getItem('blogPosts')) || [];
  return blogData;
}

function storeLocalStorage(newPost) {
  const existingPosts = readLocalStorage();

  existingPosts.push(newPost);

  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
}

let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
