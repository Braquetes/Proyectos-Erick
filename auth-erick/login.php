<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Login</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div clas="row justify-contend-md-center" style="margin-top:14%">
        <form class="col-3" method="POST" action="./php/login.php">
        <h2>Iniciar Sesion</h2>
        <div class="mb-3">
            <label  class="form-label">Usuario</label>
            <input type="text" class="form-control" aria-describedby="emailHelp" name="username">
        </div>

        <div class="mb-3">
              <label  class="form-label">Password</label>
              <input type="password" class="form-control" aria-describedby="emailHelp" name="password">
        </div>
        <!-- <a href="./restablecerPassword.php"> Olvide mi contrasena </a>
        <br><br> -->
        <button type="submit" class="btn btn-success">Ingresar</button>
    </form>
    <div class="mt-2">
      <a href="register.php" class="btn btn-primary">Registrate</a>
    </div>
</div>
</div>
</body>
</html>