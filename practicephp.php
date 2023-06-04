
                
<!DOCTYPE html>
<html>
    <body style="background-color: #a2b8ae; color:white", "color:white">
        
<h1> List of School Projects</h1>
</body>
    <?php
                
            
                // connect to the database
        $mysqlit = new mysqli('localhost', 'id18557140_resumecontact','Horanmcallen1!', 'id18557140_contactpage');
            
                // check connection
        if(!$mysqlit){
            echo 'Connection error: '. mysqli_connect_error();
        }
                
        $query  = "SELECT * FROM `School Projects`";
        $result = mysqli_query($mysqlit, $query);
        while($record = mysqli_fetch_assoc($result)){
            echo '<pre>';
            print_r($record);
            echo '</pre>';
        }
     ?>
                
</html>