import React from 'react';
//helmet 根据路由，展示对应的标题
import { Helmet } from 'react-helmet';
import { renderToString } from 'react-dom/server';
import App from '../containers/App';

const helmet = Helmet.renderStatic();

export default function (req, res) {
    const html = renderToString(<App />);
    res.send(`
    <html>
    <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
    <div id="root">
 ${html}
    </div>
    <script src="/client.js"></script>
    </body>
    </html>
    `)
}