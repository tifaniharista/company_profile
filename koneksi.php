<?php
$servername = "localhost";
$database = "dbpekerja";
$username = "root";
$password = "8agustus1985";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die('Koneksi gagal : ' . mysqli_connect_error());
} else {
    echo "koneksi berhasil";
}
