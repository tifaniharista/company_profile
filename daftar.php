<?php
require 'koneksi.php';

$nama = $_POST["nama"];
$alamat = $_POST["alamat"];
$email = $_POST["email"];
$telepon = $_POST["telepon"];
$posisi = $_POST["posisi"];

// Memastikan file CV diupload
if (isset($_FILES['cv']) && $_FILES['cv']['error'] == UPLOAD_ERR_OK) {
    $cv = file_get_contents($_FILES['cv']['tmp_name']);
} else {
    die("Gagal mengupload CV.");
}

$query_sql = "INSERT INTO tb_data (nama, alamat, email, telepon, posisi, cv)
              VALUES ('$nama', '$alamat', '$email', '$telepon', '$posisi', ?)";
$stmt = mysqli_prepare($conn, $query_sql);
mysqli_stmt_bind_param($stmt, 'b', $cv); // 'b' untuk blob
mysqli_stmt_execute($stmt);

if (mysqli_stmt_affected_rows($stmt) > 0) {
    // Menampilkan notifikasi setelah pendaftaran berhasil
    echo "<script>alert('Terima kasih... Data anda sudah diterima, tunggu konfirmasi melalui email yang kami kirimkan (maksimal 7 hari kerja)'); window.location.href='index.html';</script>";
} else {
    echo "Pendaftaran Gagal : " . mysqli_error($conn);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
