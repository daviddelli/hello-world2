<?php
        header('Content-type: text/xml');
        sleep(2);
        echo trim('<?xml version="1.0" encoding="UTF-8"?><root><timenow>'.date('H:i:s').'</timenow></root>');
        exit(0);

    ?>