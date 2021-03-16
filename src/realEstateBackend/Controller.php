<?php 

class Controller {
	function __construct() {
		$this->view = new View();
		$this->databaseService = new DatabaseService("realestate");

	}

	function route() {
		$sqlQuery = "Select * from estates"; 

		$estatesArray = $this->databaseService->queryDatabase($sqlQuery);
	
		$this->view->buildView($estatesArray);
	}

}