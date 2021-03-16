<?php

require './config/allowAccessFromServerPorts.php';


function autoLoad($classname) {

  if($classname =='Controller') {
    require './View.php';
    require './Model.php';
    require './DatabaseService.php';
    require './controller.php';
  }

  else {
    return false;
  }

}

spl_autoload_register("autoLoad");

$controller = new Controller();

$controller->route();