<?

$connection = mysqli_connect('127.0.0.1', 'host2128', 'O4hq/tYw', 'itelit_host2128');
    mysqli_set_charset($connection,'utf8');
    if($connection == false){
      echo "eror<br>";
      echo mysqli_connect_eror();
      exit();
    }
?>