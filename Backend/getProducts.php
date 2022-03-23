<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: GET");

$bd = include_once "conexion.php";

$getProducts = $bd->query("SELECT * FROM  `productos`");

$productos = $getProducts->fetchAll(PDO::FETCH_OBJ);

echo json_encode($productos);

?>