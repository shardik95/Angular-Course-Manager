//Install express server
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/angular-course-manager'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/angular-course-manager/index.html'));
});

app.listen(process.env.PORT || 4200);
