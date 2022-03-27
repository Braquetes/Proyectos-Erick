<?php
    include "conexion.php";
    $username = $_POST['username'];
    $password = sha1($_POST['password']);

    $res = $conexion -> query("select * from usuarios
    where username ='$username' and password='$password' and active = 1") 
    or die ($conexion->error);

    if(mysqli_num_rows($res) > 0) {
        //echo "Usuario logeado";
        header("Location: ../sesioniniciada.php");
    }else {
        echo "usuario o contrasena incorrectos";
    }

?>