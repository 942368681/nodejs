const express = require('express');

const app = express();

// routes
app.get('/', (req: any, res: any, next: any) => {
    res.send('node typescript api is working...');
});

app.listen(process.env.PORT || 3007, () => {
    console.log('server started...');
});