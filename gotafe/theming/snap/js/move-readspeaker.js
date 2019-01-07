/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2019-01-07 13:52:10
* @Last Modified by:   Greg Bird
* @Last Modified time: 2019-01-07 14:37:39
*/

var oHead = document.getElementsByTagName('HEAD').item(0);
var link  = document.createElement('link');
link.rel  = 'stylesheet';
link.type = 'text/css';
link.href = "//birdyoz.github.io/gotafe/theming/snap/css/move-readspeaker.css";
oHead.appendChild(link);

window.addEventListener("load", function() {

    function closePlayer(){
        var player = rspkr.ui.getActivePlayer();

        if (player) {
            player.close();
        }
    }

    ReadSpeaker.q(function() {

        rspkr.cfg.item('general.preserveElements', '.rs_preserve, .chapter-title, .previous_section, .next_section');

        var links = document.querySelectorAll('.previous_section, .next_section, .chapter-title');

        for (var i=0; i < links.length; i++){
            if (!links[i].href.includes('readspeaker.com')) {
                links[i].onclick = function () {
                    closePlayer();
                }
            }
        }

        var RS_player = $('.block_readspeaker_embhl').detach();
        $('#region-main').prepend(RS_player);
    });

});