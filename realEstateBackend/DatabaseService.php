<?php 

class DatabaseService {

	public function __construct(string $name) {

		$this->pdoObject = new PDO("mysql:host=localhost;dbname=$name;charset=utf8", "root", "");
	}

	public function queryDatabase(string $sql) {

		$resultTable = array(); 

		try {

			foreach ($this->pdoObject->query($sql) as $row) 

			{
			 $resultTable[] = $row; 
			}

			return $resultTable;
		} 

		catch (PDOException $ex){
		 	error_log("PDO ERROR: querying database: " . $ex->getMessage()."\n".$sql);
		}
	
	}

	public function __get($prop) {
		echo "The property " +$prop +" doesn`t exist";
	}

}