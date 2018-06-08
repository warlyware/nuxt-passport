const express = require('express');
const router = express.Router();
const passport = require('passport');

const app = express();
app.use(passport.initialize());
app.use(passport.session());

router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request);
  Object.setPrototypeOf(res, app.response);
  req.res = res;
  res.req = req;
  next();
});

module.exports = router;
