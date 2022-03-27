<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: text/html');

if(empty($_GET['id'])){
    exit('No hay ID de producto');
}

$id = $_GET['id'];

$bd = include_once "conexion.php";

$delete = $bd->prepare("DELETE FROM `productos` WHERE `idProducto` = ?");

$res = $delete->execute([$id]);

echo json_encode($res);

?>