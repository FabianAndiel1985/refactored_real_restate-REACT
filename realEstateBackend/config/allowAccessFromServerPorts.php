<?php 

if(isset($_SERVER['HTTP_ORIGIN'])){
        $allowed = ['http://localhost:8080','http://localhost:3000',
        'http://localhost:4200'];
        $port = $_SERVER['HTTP_ORIGIN'];
        if(in_array($port, $allowed)){
            header("Access-Control-Allow-Origin:".$port);
        }
    }

  if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        header("Content-Type: application/json");
  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
    header("Access-Control-Allow-Methods: GET, POST, PUSH, PUT, PATCH, DELETE, OPTIONS");
  }

  if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
    header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
  }
  
  exit(0);
}
