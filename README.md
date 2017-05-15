# nemb
Node + Express + Mongoose boilerplate

This projects contains everything you need to jump start your backend.

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
|____components
| |____example
| | |____example.js
| | |____example.routes.js
|____models
| |____example.js
|____modules
| |____db.js
| |____logger.js
|____package.json
|____README.md
|____server.js

```

To do:
- [ ] document boilerplate thoroughly
- [x] create a start command which starts everything
- [x] optional command to run without mongo (in case someone has it running already)
