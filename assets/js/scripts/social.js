// Handle social media button displays
function formSocialUrl(platform, username) {
  switch (platform) {
    case 'Twitter':
      return 'https://twitter.com/' + username;
    case 'Github':
      return 'https://github.com/' + username;
    case 'Facebook':
      return 'https://facebook.com/' + username;
    case 'Instagram':
      return 'https://www.instagram.com/' + username;
    case 'LinkedIn':
      return 'https://linkedin.com/in/' + username;
  }
}

function revealPlatform(platform) {
  var reference = platform.toLowerCase() + 'Username';

  if (window.__themeCfg[reference]) {
    var button = document.querySelector(
      '.social__button.' + platform.toLowerCase()
    );
    button.classList.remove('hidden');

    button.setAttribute(
      'href',
      formSocialUrl(platform, window.__themeCfg[reference])
    );
  }
}

function revealSocialLinks() {
  revealPlatform('Facebook');
  revealPlatform('Twitter');
  revealPlatform('Instagram');
  revealPlatform('LinkedIn');
  revealPlatform('Github');
}

revealSocialLinks();

// Option to remove social display altogether
function hideSocialButtons() {
  if (window.__vCfg.socialButtonsEnabled == false) {
    var socialDisplay = document.querySelector('.social');
    socialDisplay.classList.add('hidden');
  }
}

hideSocialButtons();

var social = {
  revealSocialLinks: revealSocialLinks,
  hideSocialButtons: hideSocialButtons
};

module.exports = social;
