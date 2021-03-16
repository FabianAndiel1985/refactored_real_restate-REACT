<?php

class View {
	 function __construct() {
        header('Content-Type: application/json');
    }

    function buildView($array) {
    	echo json_encode($array);
    }
}