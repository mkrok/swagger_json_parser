import * as express from 'express';
import renderHTML from '~/server/renderHtml';

const app = express();
const staticPath = __dirname + '/';

app.use(express.static(staticPath));

app.get('/*', (req, res) => {
  res.status(200).send(renderHTML());
});

app.listen(9591, () => {
  console.log('Server running on :9591');
});
