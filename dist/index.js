import express from 'express';
require('dotenv').config();
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.post('/login');
app.listen(5000, () => {
    console.log('🚀 Server running at port 5000');
});
//# sourceMappingURL=index.js.map