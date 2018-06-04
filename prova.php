<?php
class A
{

    public static function b(){
        global $argv;
        var_dump($argv);

    }
}

A::b();
?>