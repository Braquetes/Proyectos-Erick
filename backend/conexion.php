<?php

$pass = "";
$user = "root";
$bd = "productos";
try {
    //todo bien, todo correcto
    return new PDO('mysql:host=localhost;dbname='. $bd, $user, $pass);
}
catch (Exception $e) {
    // Errores
    echo "Ocurrio algun error en la base de datos". $e->getMessage();
}

?>