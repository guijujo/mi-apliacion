const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;
const allUsers = 'user.json';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  fs.readFile(allUsers, 'utf8', (err, data) => {
    if (err) {
      console.error('erorr al leer:', err);
      return;
    }
    try {
      const objJSON = JSON.parse(data);
      res.json({ objJSON });
    } catch (parseError) {
      console.error('error al leer el json: ', parseError);
    }
  });
});

app.post('/login', (req, res) => {
  fs.readFile(allUsers, 'utf8', (err, data) => {
    if (err) {
      console.error('erorr al leer:', err);
      return;
    }

    try {
      const objJSON = JSON.parse(data);
      const { user, password } = req.body;

      console.log('recibi este usuario', user);

      const usuarioEncontrado = objJSON.usuarios.find(
        (usuario) => usuario.user === user && usuario.password === password
      );

      if (usuarioEncontrado !== undefined) {
        res.json('bienvendo');
      } else {
        res.json('usuario no encontrado');
      }
    } catch (parseError) {
      console.error('error al leer el json: ', parseError);
    }
  });
});

// app.post("/register", (req, res) => {
//     const { user, password, name, email } = req.body
//     if (user && password && name && email) {
//         res.send('entre')
//     }

//     else {
//         res.send('no entre')

//     }

// })

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});