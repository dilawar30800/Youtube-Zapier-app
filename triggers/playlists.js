const perform = (z, bundle) => {
  const options = {
    url:
      'https://youtube.googleapis.com/youtube/v3/playlists?part=id&part=snippet&channelId=' +
      bundle.inputData.channel_id +
      '&maxResults=1000',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
  };

  return z.request(options).then((response) => {
    response.throwForStatus();
    const results = response.json;

    // You can do any parsing you need for results here before returning them

    return results.items;
  });
};

module.exports = {
  operation: {
    perform: perform,
    inputFields: [
      {
        key: 'channel_id',
        type: 'string',
        label: 'Channel ID',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
    sample: {
      kind: 'youtube#playlist',
      etag: 'WnCCHJ8lz6eGEk4sOtIa72_hsnw',
      id: 'PL-ldrvueIBI2UHnYzvhzGQkE7DDzoftNT',
      snippet: {
        publishedAt: '2020-02-11T17:21:35Z',
        channelId: 'UCWY_vPZr4aMEdg04PHHMrDQ',
        title: 'Tableau Certification Training and the Road to Data Science',
        description: '',
        thumbnails: {
          default: {
            url: 'http://s.ytimg.com/yts/img/no_thumbnail-vfl4t3-4R.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'http://s.ytimg.com/yts/img/no_thumbnail-vfl4t3-4R.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'http://s.ytimg.com/yts/img/no_thumbnail-vfl4t3-4R.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'LOWTOUP',
        localized: {
          title: 'Tableau Certification Training and the Road to Data Science',
          description: '',
        },
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
      { key: 'snippet__channelTitle' },
      { key: 'snippet__localized__title' },
      { key: 'snippet__localized__description' },
    ],
  },
  key: 'playlists',
  noun: 'playlist',
  display: {
    label: 'Playlists',
    description: 'to get all playlist of the channel',
    hidden: false,
    important: true,
  },
};
