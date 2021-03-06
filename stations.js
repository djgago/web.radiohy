$(document).ready(function() {

    var uri = stations.backup;
    var lst = uri.uri;
    var n = lst.length;
    var dvx = document.getElementById('source_div');
    var rds = document.getElementById('stations_list');

    var div = dvx.cloneNode(true);
    rds.removeChild(dvx);

    String.prototype.endsWith = function (s) {
          return this.length >= s.length && this.substr(this.length - s.length) == s;
    }

    for (var i = 0; i < n; i++) {
        var e = lst[i];
        var clone = div.cloneNode(true);
        var mpl = clone.getElementsByTagName("embed")[0];

        var url;
        if (e.port) {
            var url = e.protocol + '://' + e.hostname + ':' + e.port + '/' + e.path;
        } else {
            var url = e.protocol + '://' + e.hostname + '/' + e.path;
        }
        if (url.endsWith('.swf')) {
            mpl.setAttribute('src', url);
        } else {
            var str = "&autostart=1&duration=-1&viral.onpause=false&" +
                "viral.oncomplete=false&viral.allowmenu=false&" +
                "skin=http://streammonster.com/sm/pl5/stormtrooper.zip&file=" +
                url + ";stream.mp3&type=sound&buffer='Buffering:%10%'";

            mpl.setAttribute('flashvars', str);
        }
            
        var logo = clone.getElementsByClassName("radio_logo")[0];
        var logo_url = e.icon;

        logo.style.cssText = 'background: url("' + logo_url + '")' +
            " no-repeat center;" +
            " background-size:contain;float:left;height:100%;width:100%;";
        
        var txt = clone.getElementsByClassName("station_text")[0];
        txt.innerHTML = '<a href="' + e.webpage + '">' + e.nickname + '</a>'

        clone.style.cssText = '';
        rds.appendChild(clone);
    }
});

$(window).load( function() {
    var all_players_block = $('.radio_button .player').hide();
    var all_players_button = $('.radio_button');
    $('.radio_button').click(function(e){
        var cur_radio = $(this).parent().find('.player'),
        isShowing = cur_radio.is(":visible");
        all_players_block.hide();
        all_players_button.removeClass('playing');
        if (!isShowing) {
            cur_radio.show();
            cur_radio.parent().addClass('playing');
        }
        e.preventDefault();
    });
});
