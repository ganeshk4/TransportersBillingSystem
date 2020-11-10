let express = require('express');
let bodyParser = require('body-parser');
let apiRouter = require('./routes/api');
let db = require('./models');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', apiRouter);

// db.sequelize.sync({force: true})
// .catch((err) => {
//     console.error(err);
// });

app.listen(5000, () => {
    console.log('server started on port 5000')
})