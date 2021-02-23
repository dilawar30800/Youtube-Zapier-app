const perform = (z, bundle) => {
  const options = {
    url: `https://youtube.googleapis.com/youtube/v3/thumbnails/set?videoId=${bundle.inputData.video_id}`,
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',

      Authorization: `Bearer ${bundle.authData.access_token}`,
    },
    params: {},
    body:
      // {

      //   'url': bundle.inputData.url,
      //   'width': bundle.inputData.width,
      //   'height': bundle.inputData.height
      // }

      {
        default: {
          url: bundle.inputData.url,
          width: bundle.inputData.width,
          height: bundle.inputData.height,
        },
      },
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
        key: 'video_id',
        label: 'Video id',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'url',
        label: 'Thumbnail Url',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'width',
        label: 'Width',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
      {
        key: 'height',
        label: 'Height',
        type: 'string',
        required: true,
        list: false,
        altersDynamicFields: false,
      },
    ],
  },
  key: 'set_thumbnail',
  noun: 'Thumbnail',
  display: {
    label: 'Set Thumbnail',
    description: 'To set thumbnail of a video',
    hidden: false,
    important: true,
  },
};
