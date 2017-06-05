# nemb
Node + Express + Mongoose boilerplate

This projects contains everything you need to jump start your backend.

## Usage:
To run **nemb**, just clone or download this repository, `cd` into it, execute `npm install` or `yarn install` and run project with `npm start`/`yarn start` or `npm run start-nomongo`/`yarn run start-nomongo` if you have MongoDB already running on default port.

**nemb** comes with a couple of ready scripts to make your workflow easier:
- `start`: Restarts or runs MongoDB in background with database path set to `db` folder in this project, then runs `server.js` and reloads on change.
- `start-nomongo`: Only runs `server.js` and reloads on change in source. Useful if you already have MongoDB running.
- `start-nowatch`: Restarts or runs MongoDB and runs `server.js`, but doesn't watch for changes.

## Libraries:
- `body-parser`: Used to parse www-urlencoded format (data from html forms for example) and JSON.
- `cors`: Self-explanatory.
- `express`: Web framework.
- `mongoose`: MongoDB object modeling. Makes using MongoDB much easier.
- `winston`: Used for logging things.
- `nodemon`: Runs project and restarts when changes are made.

## Project structure
```
|____.gitignore
|____build
|____db
|____logs
|____src
| |____components
| | |____example
| | | |____example.js
| | | |____example.routes.js
| |____models
| | |____example.js
| |____modules
| | |____db.js
| | |____logger.js
| |____server.js
|____package.json
|____README.md

```

### Project structure is meant to be scalable. Here are the rules you should obey while using this structure:
- **component** has it's routes and revolves around one thing. If you realise at some point that your **component** doesn't need any exclusive routes, then convert it to a **module**.
- **module** (as the name suggests) should be designed as reusable. It does not interact with anything outside directly and must not depend on a **component**.
- If there's an operation directly bound to a **model**, put it in the same file and bind it to that **model**. You can read how in [Mongoose docs about Schema methods and statics](http://mongoosejs.com/docs/2.7.x/docs/methods-statics.html).
- Make use of [Mongoose middleware](http://mongoosejs.com/docs/middleware.html). An example could be [writing a `Schema.pre('save', function (next) { ... });` and hashing user's password directly before saving](https://github.com/krszwsk/exp-node-angular-jwt/blob/master/api/models/user.js#L14).

## To do:
- [ ] document boilerplate thoroughly
- [x] create a start command which starts everything
- [x] optional command to run without mongo (in case someone has it running already)
