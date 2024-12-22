<?php
require 'koneksi.php';
$nama = $_POST["nama"];
$alamat = $_POST["alamat"];
$email = $_POST["email"];
$telepon = $_POST["telepon"];
$posisi = $_POST["posisi"];
$cv = $_POST["cv"];

$query_sql = "INSERT INTO tb_data (nama, alamat, email, telepon, posisi, cv)
            VALUES ('$nama', '$alamat', '$email', '$telepon', '$posisi', '$cv')";

if (mysqli_query($conn, $query_sql)) {
    header("Location: index.html");
} else {
    echo "Pendaftaran Gagal : " . mysqli_error($conn);
}
