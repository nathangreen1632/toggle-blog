function toggleLightDarkMode() {
  const currentMode = localStorage.getItem('mode') || 'light';
  const newMode = currentMode === 'light' ? 'dark' : 'light';
  document.body.className = newMode;
  localStorage.setItem('mode', newMode);
}

document.getElementById('toggle').addEventListener('click', toggleLightDarkMode);

function storeLocalStorage(newPost) {
  const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  existingPosts.push(newPost);
  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
}

function readLocalStorage() {
  return JSON.parse(localStorage.getItem('blogPosts')) || [];
}

const redirectPage = function (url) {
  location.assign(url);
};

(function setInitialMode() {
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.className = savedMode;
})();
