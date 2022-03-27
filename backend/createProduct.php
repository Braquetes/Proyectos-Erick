<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: text/html');

$jsonParams = json_decode(file_get_contents("php://input"));

if(!$jsonParams){
    exit("No existen datos");
}

$bd = include_once "conexion.php";

$insertProducts = $bd->prepare("INSERT INTO `productos` (`idProducto`, `nombre`, `descripcion`, `precio`, `imagen`, `stock`, `idMarca`, `idCategoria`) VALUES
(NULL,?,?,?,?,?,?,?)");

$res = $insertProducts->execute([
    $jsonParams->nombre,
    $jsonParams->descripcion,
    $jsonParams->precio,
    $jsonParams->imagen,
    $jsonParams->stock,
    $jsonParams->idMarca,
    $jsonParams->idCategoria
]);

echo json_encode(["Producto nuevo" => $res]);

?>