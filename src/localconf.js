const dev = (process.env.NODE_ENV && process.env.NODE_ENV == 'dev');
const mock_store = (process.env.MOCK_STORE && process.env.MOCK_STORE == 'true');

const app = (process.env.APP === undefined) ? 'bpa' : process.env.APP;
const basename = (process.env.BASENAME === undefined) ? '/' : process.env.BASENAME;
let hostname, userapi_path, submissionapi_path, submissionapi_oauth_path, credential_path, credential_oauth_path, credential_cdis_path, graphql_path, appname, nav_items, login, graphql_schema_url;
let required_certs = [];

hostname = `${window.location.protocol}//${window.location.hostname}/`;

if (app === 'bpa') {
  required_certs = dev === true ? [] : [];
  userapi_path = hostname + 'user/';
  submissionapi_path = hostname + 'api/v0/submission/';
  submissionapi_oauth_path = hostname + 'api/v0/oauth2/';
  credential_path = hostname + 'middleware/aws/v0/access_key/';
  credential_oauth_path = hostname + 'middleware/oauth2/v0/';
  credential_cdis_path = userapi_path + 'credentials/cdis/';
  graphql_path = hostname + 'api/v0/submission/graphql/';
  graphql_schema_url = hostname + '/data/schema.json';
  appname = 'BPA Metadata Submission Portal';
  nav_items = [
    {'icon': 'fui-home', 'link': '/', 'color': '#a2a2a2'},
    {'icon': 'fui-search', 'link': '/query', 'color': '#daa520'},
    {'icon': 'fui-bookmark', 'link': '/DD', 'color': '#a2a2a2'},
    {'icon': 'fui-user', 'link': '/identity', 'color': '#daa520'}
  ];
  login = {
    url: userapi_path + 'login/google' + '?redirect=',
    title: 'Login from Google'
  };
} else if (app === 'edc') {
  required_certs = [];
  userapi_path = hostname + 'user/';
  submissionapi_path = hostname + 'api/v0/submission/';
  submissionapi_oauth_path = hostname + 'api/v0/oauth2/';
  credential_path = hostname + 'middleware/aws/v0/access_key/';
  credential_oauth_path = hostname + 'middleware/oauth2/v0/';
  credential_cdis_path = userapi_path + 'credentials/cdis/';
  graphql_path = hostname + 'api/v0/submission/graphql/';
  graphql_schema_url = hostname + '/data/schema.json';
  appname = 'Environmental Data Commons Portal';
  nav_items = [
    {'icon': 'fui-home', 'link': '/', 'color': '#a2a2a2'},
    {'icon': 'fui-search', 'link': '/query', 'color': '#daa520'},
    {'icon': 'fui-bookmark', 'link': '/DD', 'color': '#a2a2a2'},
    {'icon': 'fui-user', 'link': '/identity', 'color': '#daa520'}
  ];
  login = {
    url: userapi_path + 'login/google' + '?redirect=',
    title: 'Login from Google'
  };
} else if (app === 'bhc') {
  required_certs = [];
  userapi_path = hostname + 'user/';
  submissionapi_path = hostname + 'api/v0/submission/';
  submissionapi_oauth_path = hostname + 'api/v0/oauth2/';
  credential_path = hostname + 'middleware/aws/v0/access_key/';
  credential_oauth_path = hostname + 'middleware/oauth2/v0/';
  credential_cdis_path = userapi_path + 'credentials/cdis/';
  graphql_path = hostname + 'api/v0/submission/graphql/';
  graphql_schema_url = hostname + '/data/schema.json';
  appname = 'The Brain Commons Portal';
  nav_items = [
    {'icon': 'fui-home', 'link': '/', 'color': '#A51C30'},
    {'icon': 'fui-search', 'link': '/query', 'color': '#2D728F'},
    {'icon': 'fui-bookmark', 'link': '/DD', 'color': '#A51C30'},
    {'icon': 'fui-user', 'link': '/identity', 'color': '#2D728F'}
  ];
  login = {
    url: userapi_path + 'login/google' + '?redirect=',
    title: 'Login from Google'
  };
} else if (app === 'acct'){
  required_certs = [];
  userapi_path = hostname + 'user/';
  submissionapi_path = hostname + 'api/v0/submission/';
  submissionapi_oauth_path = hostname + 'api/v0/oauth2/';
  credential_path = hostname + 'middleware/aws/v0/';
  credential_oauth_path = hostname + 'middleware/oauth2/v0/';
  credential_cdis_path = userapi_path + 'credentials/cdis/';
  graphql_path = hostname + 'api/v0/submission/graphql/';
  graphql_schema_url = hostname + '/data/schema.json';
  appname = 'ACCOuNT Data Commons Portal';
  nav_items = [
    {'icon': 'fui-home', 'link': '/', 'color': '#a2a2a2'},
    {'icon': 'fui-search', 'link': '/query', 'color': '#daa520'},
    {'icon': 'fui-bookmark', 'link': '/DD', 'color': '#a2a2a2'},
    {'icon': 'fui-user', 'link': '/identity', 'color': '#daa520'}
  ];
  login = {
    url: userapi_path + 'login/google' + '?redirect=',
    title: 'Login from Google'
  };
} else if (app ==='gdc') {
  userapi_path = dev === true ? hostname + 'user/' : hostname + 'api/';
  credential_path = userapi_path + 'credentials/cleversafe/';
  credential_oauth_path = userapi_path + 'oauth2/';
  credential_cdis_path = userapi_path + 'credentials/cdis/';
  graphql_schema_url = hostname + 'data/schema.json';
  appname = 'GDC Jamboree Portal';
  nav_items = [
    {'icon': 'fui-home', 'link': '/', 'color': '#a2a2a2'}
  ];
  login = {
    url: 'https://itrusteauth.nih.gov/affwebservices/public/saml2sso?SPID=https://bionimbus-pdc.opensciencedatacloud.org/shibboleth&RelayState=',
    title: 'Login from NIH'
  };
} else {
  required_certs = [];
  userapi_path = hostname + 'user/';
  submissionapi_path = hostname + 'api/v0/submission/';
  submissionapi_oauth_path = hostname + 'api/v0/oauth2/';
  credential_path = hostname + 'middleware/aws/v0/';
  credential_oauth_path = hostname + 'middleware/oauth2/v0/';
  credential_cdis_path = userapi_path + 'credentials/cdis/';
  graphql_path = hostname + 'api/v0/submission/graphql/';
  graphql_schema_url = hostname + '/data/schema.json';
  appname = 'Generic Data Commons Portal';
  nav_items = [
    {'icon': 'fui-home', 'link': '/', 'color': '#1d3674'},
    {'icon': 'fui-search', 'link': '/query', 'color': '#ad7e1c'},
    {'icon': 'fui-bookmark', 'link': '/DD', 'color': '#1d3674'},
    {'icon': 'fui-user', 'link': '/identity', 'color': '#ad7e1c'}
  ];
  login = {
    url: userapi_path + 'login/google' + '?redirect=',
    title: 'Login from Google'
  };
}

export {
  dev,
  mock_store,
  app,
  basename,
  hostname,
  userapi_path,
  submissionapi_path,
  submissionapi_oauth_path,
  credential_path,
  credential_oauth_path,
  credential_cdis_path,
  graphql_path,
  graphql_schema_url,
  appname,
  nav_items,
  login,
  required_certs,
};
