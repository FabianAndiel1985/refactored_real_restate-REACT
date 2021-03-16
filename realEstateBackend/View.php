<?php

class View {
	 function __construct() {
        header('Content-Type: application/json');
    }

    function buildView(array $array) {
    	echo json_encode($array);
    }

    public function __set($name,$value) {
		echo "Don`t change the class";
	}

    public function __get($prop) {
		echo "The property " +$prop +" doesn`t exist";
	}
}