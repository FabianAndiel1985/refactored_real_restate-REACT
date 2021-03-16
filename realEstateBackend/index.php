<?php


require './config/allowAccessFromServerPorts.php';

function autoLoad($classname) {

  if($classname =='Controller') {
    require './View.php';
    require './DatabaseService.php';
    require './Controller.php';
    }

  else {
    return false;
  }

}

spl_autoload_register("autoLoad");

$controller = new Controller();


$controller->route();