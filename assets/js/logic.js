function toggleLightDarkMode() {

  const currentMode = localStorage.getItem('mode') || 'light';

const isLightMode = currentMode === 'light'
  const newMode = isLightMode ? 'dark' : 'light';
  const emoji = newMode === 'light' ? '🌙' : '🌞';

  document.body.className = newMode;
  document.documentElement.setAttribute("style", "--circle-color: #93301b");

  if (newMode === 'dark') {
    document.documentElement.setAttribute("style", "--circle-color: #93301b");
  } else {
    document.documentElement.setAttribute("style", "--circle-color: #ffb100");
  }

  localStorage.setItem('mode', newMode);
}

document.getElementById('toggle').addEventListener('click', toggleLightDarkMode);

function readLocalStorage() {

  const blogData = JSON.parse(localStorage.getItem('blogPosts')) || [];
  return blogData;
}

function storeLocalStorage(newPost) {
  const existingPosts = readLocalStorage('blogPosts');

  existingPosts.push(newPost);

  localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
}

let redirectURL = '';
const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

(function setInitialMode() {
  const savedMode = localStorage.getItem('mode') || 'light';
  document.body.className = savedMode;
})();
