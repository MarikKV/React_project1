<?php
	// добавляємо базу данних
	include 'connection_db.php';
	//

	//виводим данні з бд
	$result = mysqli_query($connection, "SELECT * FROM pages");



	$data_back = new ArrayObject();
		while ($des = mysqli_fetch_assoc($result)) {
			$vars = new ArrayObject();
			$vars->offsetSet('id',$des['id']);
			$vars->offsetSet('text',$des['text']);
			$vars->offsetSet('name',$des['name']);
	    	$data_back->append($vars);

	}

	echo json_encode($data_back);
?>