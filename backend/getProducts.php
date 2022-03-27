<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$bd = include_once "conexion.php";

$getProducts = $bd->query("SELECT * FROM  `productos`");

$productos = $getProducts->fetchAll(PDO::FETCH_OBJ);

echo json_encode($productos);

?>