<?php
include "conexion.php";
if(isset($_POST['nombre'])
 && isset($_POST['email'])
 && isset($_POST['username'])
 && isset($_POST['password'])){

    if($_POST['confirmpassword'] == $_POST['password']){


    $name = $_POST['nombre'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = sha1($_POST['password']);

    $conexion->query("insert into usuarios (nombre,tipo, username, email, password, active)
    values ('$name',1, '$username', '$email', '$password', 1)") or die($conexion->error);
    header("Location: ../login.php");
}else{
 
    echo "La contrasenas no coiciden";
}

 }else {
     echo "No se puede realizar el registro";
 }

?>