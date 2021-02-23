const authentication = require('./authentication');
const playlistsTrigger = require('./triggers/playlists.js');
const videoPlaylistCreate = require('./creates/video_playlist.js');
const setThumbnailCreate = require('./creates/set_thumbnail.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  creates: {
    [videoPlaylistCreate.key]: videoPlaylistCreate,
    [setThumbnailCreate.key]: setThumbnailCreate,
  },
  triggers: { [playlistsTrigger.key]: playlistsTrigger },
};
