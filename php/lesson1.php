<?php
$i = 0;
while ( $i < 25 ) :
    echo $i . ' - ';

        $extraClass = ( ( $i%5 == 1 && $i % 2 == 1 ) || ( $i%5 == 0 && $i % 2 == 1 ) )? 'col-md-8' : 'col-md-4';

        echo $extraClass . '<br/>';
    $i++;
endwhile;  ?>
