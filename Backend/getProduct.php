<?php

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: GET");

if(empty($_GET['id'])){
    exit('No hay ID de producto');
}

$idProducto = $_GET['id'];

$bd = include_once "conexion.php";

$getProducts = $bd->prepare("SELECT * FROM  `productos` WHERE idProducto = ?");
$getProducts->execute([$idProducto]);
$producto = $getProducts->fetchObject();

echo json_encode($producto);
?>