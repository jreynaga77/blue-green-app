const express = require('express');
const app = express();
const port = 80;

// Version de la aplicación (cambiaremos esto para ver el blue-green deployment)
const APP_VERSION = process.env.APP_VERSION || 'v1';

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Blue-Green Demo</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: ${APP_VERSION === 'v1' ? '#e3f2fd' : '#f1f8e9'};
          }
          .container {
            text-align: center;
            padding: 20px;
            border-radius: 8px;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          h1 {
            color: ${APP_VERSION === 'v1' ? '#1976d2' : '#388e3c'};
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Blue-Green Deployment Demo</h1>
          <p>Estás viendo la versión: ${APP_VERSION}</p>
          <p>Timestamp: ${new Date().toISOString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en puerto ${port}`);
}); 