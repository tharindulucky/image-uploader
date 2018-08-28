<?php

$ds = DIRECTORY_SEPARATOR;  //1
$storeFolder = 'uploads';   //2
if (!empty($_FILES)) {
    $tempFile = $_FILES['files']['tmp_name'];
    $file_name = $_FILES['files']['name'];
    $ext = pathinfo($file_name, PATHINFO_EXTENSION);

    if($ext == 'jpg' || $ext == 'png'){
        $new_file_name = time().'.'.$ext;
        $targetPath = 'uploads/';  //4
        $targetFile =  $targetPath. $new_file_name;  //5
        $upload_result = move_uploaded_file($tempFile,$targetFile); //6

        //$upload_result = $file_name = Input::file('files')->storeAs('/pdf/', $new_file_name,'public');

        echo $new_file_name;
    }else{
        echo 'FAILED';
    }



}