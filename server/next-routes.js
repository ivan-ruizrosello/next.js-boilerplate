

const UrlPrettifier = require('next-url-prettifier').default;

const routes = [
  {
    page: 'index',
    prettyUrl: ({})=>{
      switch(lang){
        case 'en': return '/home';
        case 'es': return '/inicio/'
        default: return '/';
      }
    },
    prettyUrlPatterns: [
      {
        pattern: ['/home/'], 
        defaultParams: {lang: 'en'}
      },
      {
        pattern: ['/inicio/', '/'], 
        defaultParams: {lang: 'es'}
      }
    ]
  }
]

const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;