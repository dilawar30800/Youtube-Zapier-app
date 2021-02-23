const perform = (z, bundle) => {
  const options = {
    url: 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
    body: {
      snippet: {
        playlistId: bundle.inputData.playlist_id,
        resourceId: {
          playlistId: bundle.inputData.playlist_id,
          videoId: bundle.inputData.video_id,
          channelId: bundle.inputData.channel_id,
          kind: 'youtube#video',
        },
      },
    },
    // {
    //   "snippet": {
    //     "playlistId": "PL-ldrvueIBI2UHnYzvhzGQkE7DDzoftNT",
    //     "resourceId": {
    //       "videoId": "hNw0Ix6vC0w",
    //       "playlistId": "PL-ldrvueIBI2UHnYzvhzGQkE7DDzoftNT",
    //       "channelId": "UCWY_vPZr4aMEdg04PHHMrDQ",
    //       "kind": "youtube#video"
    //     }
    //   }
    // }
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'channel_id',
        label: 'Channel Id',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'playlist_id',
        label: 'Playlist',
        type: 'string',
        dynamic: 'playlists.id.snippet__title',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'video_id',
        label: 'Video ID',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      kind: 'youtube#playlistItem',
      etag: 'ea76JhZsmOokze5bdL5yXDqTJeY',
      id:
        'UEwtbGRydnVlSUJJMlVIbll6dmh6R1FrRTdERHpvZnROVC41NkI0NEY2RDEwNTU3Q0M2',
      snippet: {
        publishedAt: '2021-01-25T11:46:30Z',
        channelId: 'UCWY_vPZr4aMEdg04PHHMrDQ',
        title: 'Reverse ASIN Lookup & Scribbles Listing Builder',
        description: '',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/hNw0Ix6vC0w/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/hNw0Ix6vC0w/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/hNw0Ix6vC0w/hqdefault.jpg',
            width: 480,
            height: 360,
          },
          standard: {
            url: 'https://i.ytimg.com/vi/hNw0Ix6vC0w/sddefault.jpg',
            width: 640,
            height: 480,
          },
          maxres: {
            url: 'https://i.ytimg.com/vi/hNw0Ix6vC0w/maxresdefault.jpg',
            width: 1280,
            height: 720,
          },
        },
        channelTitle: 'LOWTOUP',
        playlistId: 'PL-ldrvueIBI2UHnYzvhzGQkE7DDzoftNT',
        position: 0,
        resourceId: { kind: 'youtube#video', videoId: 'hNw0Ix6vC0w' },
      },
    },
    outputFields: [
      { key: 'kind' },
      { key: 'etag' },
      { key: 'id' },
      { key: 'snippet__publishedAt' },
      { key: 'snippet__channelId' },
      { key: 'snippet__title' },
      { key: 'snippet__description' },
      { key: 'snippet__thumbnails__default__url' },
      { key: 'snippet__thumbnails__default__width' },
      { key: 'snippet__thumbnails__default__height' },
      { key: 'snippet__thumbnails__medium__url' },
      { key: 'snippet__thumbnails__medium__width' },
      { key: 'snippet__thumbnails__medium__height' },
      { key: 'snippet__thumbnails__high__url' },
      { key: 'snippet__thumbnails__high__width' },
      { key: 'snippet__thumbnails__high__height' },
      { key: 'snippet__thumbnails__standard__url' },
      { key: 'snippet__thumbnails__standard__width' },
      { key: 'snippet__thumbnails__standard__height' },
      { key: 'snippet__thumbnails__maxres__url' },
      { key: 'snippet__thumbnails__maxres__width' },
      { key: 'snippet__thumbnails__maxres__height' },
      { key: 'snippet__channelTitle' },
      { key: 'snippet__playlistId' },
      { key: 'snippet__position' },
      { key: 'snippet__resourceId__kind' },
      { key: 'snippet__resourceId__videoId' },
    ],
  },
  key: 'video_playlist',
  noun: 'Video to Playlist',
  display: {
    label: 'Add video to Playlist',
    description: 'To add a video to a playlist',
    hidden: false,
    important: true,
  },
};
