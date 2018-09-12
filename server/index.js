const   express             = require('express'),
        app                 = express(),
        bodyParser          = require('body-parser'), 
        port                = 3000,
        messages_controller = require( __dirname + '/controllers/messages_controller');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/../public/build'))

app.post('/api/messages', messages_controller.create);
app.get('/api/messages', messages_controller.get);
app.put('/api/messages/:id', messages_controller.update);
app.delete('/api/messages/:id', messages_controller.delete);

app.listen(port, () => (console.log(`Server is running on port ${port}`)));