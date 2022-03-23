<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: text/html');

$jsonParams = json_decode(file_get_contents("php://input"));

if(!$jsonParams) {
    exit("No hay datos");
}
$bd = include_once "conexion.php";

$insertProducts = $bd->prepare("UPDATE `productos` SET `nombre` = ?, `descripcion` = ?, `precio` = ?, `imagen` = ?, `stock` = ?, `idMarca` = ?, `idCategoria` = ? WHERE idProducto = ?");
$res = $insertProducts->execute([
    $jsonParams->nombre,
    $jsonParams->descripcion,
    $jsonParams->precio,
    $jsonParams->imagen,
    $jsonParams->stock,
    $jsonParams->idMarca,
    $jsonParams->idCategoria,
    $jsonParams->idProducto
]);
echo json_encode($res);
