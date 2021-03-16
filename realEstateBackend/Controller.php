<?php 

class Controller {
	
		private $view;
		private $databaseService;

	public function __construct() {

		$this->view = new View();
		$this->databaseService = new DatabaseService("realestate");

	}

	public function route() {
		$sqlQuery = "Select * from estates"; 

		$estatesArray = $this->databaseService->queryDatabase($sqlQuery);
	
		$this->view->buildView($estatesArray);
	}

	public function __set($name,$value) {
		echo "Don`t change the class";
	}

	public function __get($prop) {
		echo "The property " +$prop +" doesn`t exist";
	}

}