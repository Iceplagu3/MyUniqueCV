
<?php
// Datos de conexión a la base de datos
$servidor = "sql203.byetcluster.com";
$usuario = "if0_34827297";
$contrasena = "UiGHEnuUqqIRXF";
$base_de_datos = "if0_34827297_Forms";

// Conexión a la base de datos
$conexion = mysqli_connect($servidor, $usuario, $contrasena, $base_de_datos);

if (!$conexion) {
    die("La conexión a la base de datos falló: " . mysqli_connect_error());
}

// Procesar formulario si se envió
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = mysqli_real_escape_string($conexion, $_POST["nombre"]);
    $email = mysqli_real_escape_string($conexion, $_POST["email"]);
    $mensaje = mysqli_real_escape_string($conexion, $_POST["mensaje"]);
    $pais = mysqli_real_escape_string($conexion, $_POST["pais"]);

    // Consulta SQL para insertar datos
    $sql = "INSERT INTO Form (nombre, email, mensaje, pais) VALUES ('$nombre', '$email', '$mensaje', '$pais')";

    if (mysqli_query($conexion, $sql)) {
        echo "Datos guardados exitosamente.";
    } else {
        echo "Error al guardar los datos: " . mysqli_error($conexion);
    }
}

// Cerrar la conexión a la base de datos
mysqli_close($conexion);
?>
