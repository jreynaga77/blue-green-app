const express = require('express');
const app = express();
const port = 80;

// Version de la aplicación (cambiaremos esto para ver el blue-green deployment)
const APP_VERSION = 'v2';

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Blue-Green Demo - ${APP_VERSION}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #f1f8e9 0%, #c5e1a5 100%);
          }
          .container {
            text-align: center;
            padding: 40px;
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            max-width: 600px;
            width: 90%;
          }
          h1 {
            color: #2e7d32;
            margin-bottom: 20px;
          }
          .version-badge {
            background-color: #2e7d32;
            color: white;
            padding: 8px 16px;
            border-radius: 20px;
            display: inline-block;
            margin: 10px 0;
            font-weight: bold;
          }
          .info {
            color: #555;
            margin: 15px 0;
          }
          .timestamp {
            font-size: 0.9em;
            color: #777;
            margin-top: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>¡Nueva Versión Desplegada!</h1>
          <div class="version-badge">${APP_VERSION}</div>
          <p class="info">Esta es la nueva versión de la aplicación desplegada usando Blue-Green Deployment</p>
          <p class="info">El despliegue se realizó de manera segura y sin downtime</p>
          <p class="timestamp">Desplegado en: ${new Date().toISOString()}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Aplicación v2 corriendo en puerto ${port}`);
}); 