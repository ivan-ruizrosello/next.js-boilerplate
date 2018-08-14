# NextJs Config 

config set by Ivan Ruiz.

- NextJs 
- Express
- Url prettifier
- SASS
- Page specific CSS Styling
- Prop-Types
- Normalize.css

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


## TODO

- [x] Express
- [x] Url prettifier
- [x] SASS
- [x] Page specific CSS Styling
- [x] Prop-Types
- [x] Normalize.css
- [ ] Jest Testing
- [ ] Traductions
- [ ] Next/Link active routes
