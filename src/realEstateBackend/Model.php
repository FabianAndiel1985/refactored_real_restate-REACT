<?php

include './buildEstatesArray.php';

class DataModel {

	function __construct() {
		$this->products = buildEstateArray();
	}

	function getProducts() {
		return $this->products;
	}

}