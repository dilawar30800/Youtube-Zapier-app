module.exports = {
  type: 'oauth2',
  test: {
    url:
      'https://youtube.googleapis.com/youtube/v3/channels?mySubscribers=true',
    method: 'GET',
    params: {},
    headers: { Authorization: 'Bearer {{bundle.authData.access_token}}' },
    body: {},
    removeMissingValuesFrom: {},
  },
  oauth2Config: {
    authorizeUrl: {
      method: 'GET',
      url: 'https://accounts.google.com/o/oauth2/v2/auth',
      params: {
        client_id: '{{process.env.CLIENT_ID}}',
        state: '{{bundle.inputData.state}}',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent',
      },
    },
    getAccessToken: {
      url: 'https://oauth2.googleapis.com/token',
      method: 'POST',
      params: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: {
        code: '{{bundle.inputData.code}}',
        client_id: '{{process.env.CLIENT_ID}}',
        client_secret: '{{process.env.CLIENT_SECRET}}',
        grant_type: 'authorization_code',
        redirect_uri: '{{bundle.inputData.redirect_uri}}',
      },
      removeMissingValuesFrom: {},
    },
    refreshAccessToken: {
      url: 'https://oauth2.googleapis.com/token',
      method: 'POST',
      params: {},
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        accept: 'application/json',
      },
      body: {
        refresh_token: '{{bundle.authData.refresh_token}}',
        grant_type: 'refresh_token',
        client_id: '{{process.env.CLIENT_ID}}',
        client_secret: '{{process.env.CLIENT_SECRET}}',
      },
      removeMissingValuesFrom: {},
    },
    scope:
      'https://www.googleapis.com/auth/youtube https://www.googleapis.com/auth/youtube.channel-memberships.creator https://www.googleapis.com/auth/youtube.force-ssl  https://www.googleapis.com/auth/youtube.readonly  https://www.googleapis.com/auth/youtube.upload  https://www.googleapis.com/auth/youtubepartner  https://www.googleapis.com/auth/youtubepartner-channel-audit',
    autoRefresh: true,
  },
};
