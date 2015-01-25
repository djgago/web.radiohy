<?php 

    $repo = "https://raw.githubusercontent.com/djgago/xbmc.plugin.audio.radiohy/master/resources/lib/backup.json";

    $stations = file_get_contents($repo);
    file_put_contents("backup.json", $stations);

    $repo = "https://raw.githubusercontent.com/djgago/web.radiohy/master/";
    $css_file_name  = "stations.css";
    $html_file_name = "stations.html";

    $url = $repo . $css_file_name;
    $css = file_get_contents($url);
    file_put_contents($css_file_name, $css);

    $url = $repo . $html_file_name;
    $html = file_get_contents($url);

    echo $html
?>
