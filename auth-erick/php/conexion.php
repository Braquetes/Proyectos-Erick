<?php
    $conexion = new mysqli("localhost","root","","auth");
    if($conexion -> connect_error){
        die('No se pudo conectar a la base de datos Login');
    }
?>