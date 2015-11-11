<?php
  session_start();
  $host = "localhost";
  $user = "brunoc_gotmusic";
  $pass = "agenciamilk";
  $banco = "brunoc_gotmusic";
  
  $conexao = mysqli_connect($host, $user, $pass) or die(mysqli_error());

  mysqli_select_db($conexao, $banco) or die(mysqli_error());
?>


<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>AUTH</title>
    
    <script type="text/javascript">
      function loginsuccessfully(){
        setTimeout("window.location='form.php'", 000);
      }
      function loginfailed(){
        setTimeout("window.location='index.php'", 000);
      }
    </script>
  </head>

  <body>

    <?php
      $name = "Abraham Mateo";
      $login = $_POST["login"];
      $password = $_POST["password"];
      

      $sql = mysqli_query($conexao, "SELECT * FROM artists WHERE
      name = '$name' and login = '$login' and pass = '$password'") or die (mysqli_error());

      $row = mysqli_num_rows($sql);

      if($row > 0){
        
        $_SESSION["login"] = $_POST["login"];
        $_SESSION["password"] = $_POST["password"];
        
        echo "
          <script>
            loginsuccessfully();
          </script>";
      }else{
        echo "
          <script>
            alert('Usuário ou senha incorreto');
          </script>";
        echo "
          <script>
            loginfailed();
          </script>";
      }
    ?>
    
  </body>
</html>