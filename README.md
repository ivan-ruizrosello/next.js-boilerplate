# NextJs Config 

config set by Ivan Ruiz.

## TODO

- [x] Express
- [x] Url prettifier
- [x] SASS
- [x] Page specific CSS Styling
- [x] Prop-Types
- [x] Normalize.css
- [x] Next/Link active routes
- [x] Translations (i18n)
- [x] Sitemap.xml
- [x] Robots.txt
- [x] Jest Testing : [ 
    [x] ES6 
    [x] Supertest
    [x] React Enzyme 
    [x] Enzyme to Json
    [x] Allow css, sass and scss imports
    [x] Transform file imports
  ]

## Dependencies

To install dependencies run the following command: 

Yarn:
```
yarn install
```

npm: 
```
npm i // npm install
```

## Starting server

### Production

To start the production server: 

Yarn: 
```
yarn next:build
yarn start
```

```
npm run next:build
npm start
```

### Development

There's a bug with nodemon + next, so we cant watch filest at "pages" directory, but its still better then nothing: 

Yarn: 
```
yarn dev
```

npm: 
```
npm run dev
```


### Testing 

To start testing with Jest: 

Yarn: 
```
yarn test
```

npm:
```
npm run test
```