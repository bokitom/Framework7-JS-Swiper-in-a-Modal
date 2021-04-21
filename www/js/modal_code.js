    
//full - top to bottom modal
function modal_detail() {

    myApp.params = {
        modalActionsCloseByOutside: true,
        closeByBackdropClick: true,
        closeByOutsideClick: true,
        closeOnEscape: true
    }
    var detail_title = [
        {
            text:
            '<div class="modal_title_q center_outer">Sample Modal/with embedded Swiper</div>'+
            '<div onclick="close_modal()" class="modal_title_watermark">X</div>',
            label: true,
        },
    ];
    var detail_screen = [
        //TITLE
        {
            text:
            '<div class="game_detail_title_results_left">Answers</div>'+

            '<div class="game_detail_title_results_right">'+
                '<div id="detail_results_tab_title" class="detail_results_tab_title">Participants</div>'+

                '<div class="text-container game_detail_location_banner">'+
                    '<span onclick="detail_switch_yourcity()" id="game_detail_yourcity_span_id" class="game_detail_location_span">Your city</span>'+
                    '<span onclick="detail_switch_worldwide()" id="game_detail_worldwide_span_id" class="game_detail_location_span">Worldwide</span>'+
                '</div>'+

            '</div>',
            label: true,
        },
        //SCREEN
        {
            text:
            '<div id="detail_swiper_id" class="swiper-container">'+

                '<div class="swiper-wrapper list_cont_game_detail">'+

                    //slide1
                    '<div class="swiper-slide detail_slide1">'+

                        '<div class="list_cont_likes">'+

                            '<div class="list-block media-list modal_listblock page-content upage-content">'+

                                '<div style="display: block;" id="game_detail_list_id" class="virtual-list f7_height_overide">'+
                                    '<ul>'+
                                        '<li class="accordion-item widget registered" data-uib="framework7/checkbox" data-ver="0" style="top: 0px;">'+
                                            '<label onclick="alertme(0);" class="label-checkbox item-content modal_label_adjust no-fastclick">'+
                                            '<input id="detail_answer_id0" type="checkbox">'+
                                                '<div class="item-media"><i class="icon icon-form-checkbox modal_checkbox"></i>'+
                                                    '<div class="game_detail_hexagon_answer_left"></div>'+
                                                '</div>'+
                                                '<div class="item-inner">'+
                                                    '<div class="text-container">'+
                                                        '<p id="detail_answer_span_id0" class="modal_checkbox_p">"He/she is always there for me"</p>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</label>'+
                                        '</li>'+
                                        '<li class="accordion-item widget registered" data-uib="framework7/checkbox" data-ver="0" style="top: 0px;">'+
                                            '<label onclick="alertme(1);" class="label-checkbox item-content modal_label_adjust no-fastclick">'+
                                            '<input id="detail_answer_id1" type="checkbox">'+
                                                '<div class="item-media"><i class="icon icon-form-checkbox modal_checkbox"></i>'+
                                                    '<div class="game_detail_hexagon_answer_left"></div>'+
                                                '</div>'+
                                                '<div class="item-inner">'+
                                                    '<div class="text-container">'+
                                                        '<p id="detail_answer_span_id1" class="modal_checkbox_p">"He/she is very ambitious and is a good motivator"</p>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</label>'+
                                        '</li>'+
                                        '<li class="accordion-item widget registered" data-uib="framework7/checkbox" data-ver="0" style="top: 0px;">'+
                                            '<label onclick="alertme(2);" class="label-checkbox item-content modal_label_adjust no-fastclick">'+
                                            '<input id="detail_answer_id2" type="checkbox">'+
                                                '<div class="item-media"><i class="icon icon-form-checkbox modal_checkbox"></i>'+
                                                    '<div class="game_detail_hexagon_answer_left"></div>'+
                                                '</div>'+
                                                '<div class="item-inner">'+
                                                    '<div class="text-container">'+
                                                        '<p id="detail_answer_span_id2" class="modal_checkbox_p">"He/she is very interesting and has a lot of positive energy"</p>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</label>'+
                                        '</li>'+
                                        '<li class="accordion-item widget registered" data-uib="framework7/checkbox" data-ver="0" style="top: 0px;">'+
                                            '<label onclick="alertme(3);" class="label-checkbox item-content modal_label_adjust no-fastclick">'+
                                            '<input id="detail_answer_id3" type="checkbox">'+
                                                '<div class="item-media"><i class="icon icon-form-checkbox modal_checkbox"></i>'+
                                                    '<div class="game_detail_hexagon_answer_left"></div>'+
                                                '</div>'+
                                                '<div class="item-inner">'+
                                                    '<div class="text-container">'+
                                                        '<p id="detail_answer_span_id3" class="modal_checkbox_p">"He/she is loyal"</p>'+
                                                    '</div>'+
                                                '</div>'+
                                            '</label>'+
                                        '</li>'+
                                    '</ul>'+
                                '</div>'+

                            '</div>'+

                        '</div>'+


                    '</div>'+ // end slide 1

                    //slide2
                    '<div class="swiper-slide detail_slide2">'+

                        '<div class="list-block media-list modal_listblock page-content upage-content no_scroll">'+
                            '<div class="list_cont_likes">'+

                                //'<div class="game_detail_results_slide_header">matching answers (live)</div>'+
            
                                //'<div id="game_participants_list_id"  class="virtual-list f7_height_overide"> </div>'+

                                '<div class="game_detail_results_slide_header">matching answers</div>'+

                                '<div id="game_liked_list_id"  class="virtual-list f7_height_overide"> </div>'+

                            '</div>'+  // llist_cont_likes
                        '</div>'+  // list block page

                    '</div>'+ 


                //slides end
                '</div>'+
            '</div>',
            label: true
        },
    ];

    var detail_buttons = [
        {
            close: false,
            text:
            //"<div id='detail_close_and_back_id'><img class='modal_icon7' src='images/key_centered_green.png'>Close</div>",
            '<div id="detail_close_and_back_id" class="modal_title_next center_outer">Close</div>',
            onClick: function() {                    
                if (swiper_detail.activeIndex == 0) {
                    myApp.closeModal('.actions-modal.modal-in');
                }else{
                    swiper_detail.slideTo(0);
                }
            }
        },
        {
            close: false,
            text:
            '<div id="detail_next_id" class="modal_title_next center_outer">Next</div>',
            onClick: function() {                
                if (swiper_detail.activeIndex == 1) {
                    myApp.closeModal('.actions-modal.modal-in');
                }else{
                    swiper_detail.slideTo(1);
                }                
            }

        }
    ];
    var groups = [detail_title, detail_screen, detail_buttons];

    myApp.actions(groups);

    //important
    $("#detail_swiper_id").css({ 'z-index': '16', 'width': '100%', 'overflow': 'visible', });

    //buttons and content
    $(".item-title").css("font-weight","100");
    $(".actions-modal-group").css("font-family","Avenir-Light");
    $(".actions-modal-group").css("transition","all 0.3s ease-out");
    //$(".actions-modal-group").eq(1).css("height","548px");

    $(".actions-modal-label").css("transition","all 0.3s ease-out");
    $(".actions-modal-label").css("overflow","visible");
    $(".actions-modal-label").css("min-height","45px");
    $(".actions-modal-label").css("padding","0px");

    //left right button edits
    $(".actions-modal-button").css({ 'height': '57px', 'color': '#5a4ec7' });
    $(".actions-modal-button").eq(0).css("width","50%");
    $(".actions-modal-button").eq(0).css("position","absolute");
    $(".actions-modal-button").eq(0).css("border-top-right-radius","0px");
    $(".actions-modal-button").eq(0).css("border-right","1px solid lightgray");
    $(".actions-modal-button").eq(0).css("color","#a20000");

    $(".actions-modal-button").eq(1).css("width","50%");
    $(".actions-modal-button").eq(1).css("left","50%");
    $(".actions-modal-button").eq(1).css("border-bottom-left-radius","0px");

    setTimeout(function(){

        window.swiper_detail = myApp.swiper('#detail_swiper_id', {
            slidesPerView: 'auto',
            spaceBetween: 0,
            initialSlide: 0,
            pagination:'.swiper-pagination-detail',
            onSlideChangeStart: function(swiper){
                $$('.swiper-slide').scrollTop(0);
                if (swiper_detail.activeIndex == 0) {
                    $("#detail_close_and_back_id").text( "Close");
                    $("#detail_next_id").text( "Next");
                    $(".actions-modal-button").eq(0).css("color","#a20000");
                    $(".actions-modal-button").eq(1).css("color","#5a4ec7");
                    //check
                    $(".swiper-pagination-detail span").eq(0).css({ 'border-color': 'rgba(90, 78, 199, 0.61)' });
                    detail_group1_height();
                    
                    
                }
                if (swiper_detail.activeIndex == 1) {
                    $("#detail_close_and_back_id").text( "Back");
                    $("#detail_next_id").text( "Close");
                    $(".actions-modal-button").eq(0).css("color","#5a4ec7");
                    $(".actions-modal-button").eq(1).css("color","#a20000");
                    //check location
                    $(".swiper-pagination-detail span").eq(1).css({ 'border-color': 'rgba(90, 78, 199, 0.61)' });


                    detail_group1_height();
                    

                }
            },

            onSlideChangeEnd: function (swiper) {
                if (swiper_detail.activeIndex == 0) {
                    $(".swiper-pagination-detail span").css({ 'border-color': 'transparent' });
                    $(".swiper-pagination-detail span").eq(0).css({ 'border-color': '#5a4ec7' });
                
                    setTimeout(function(){
                        $(".game_detail_title_results_left").css({ 'width': '76.6%', 'border-right': '1px solid lightgray', 'opacity': '1' });
                        $(".game_detail_title_results_right").css({ 'width': 'calc(23.4% - 1px)','height': '60px', 'display': 'flex', '-webkit-flex-direction': 'column', 'flex-direction': 'column', 'align-items': 'center', '-webkit-justify-content': 'center', 'justify-content': 'center', '-webkit-align-content': 'center', 'align-content': 'center','-moz-transition': 'all 0.3s ease-out','-o-transition': 'all 0.3s ease-out','transition': 'all 0.3s ease-out' });
                        $(".game_detail_location_banner").css({ 'height':'0px','line-height':'0px','opacity':'0' });
                        //labels on right slide
                        $(".game_detail_results_slide_header").css({ 'height':'0px','line-height':'0px','border-bottom':'0px solid lightgray' });                
                    },50);
                }
                if (swiper_detail.activeIndex == 1) {
                    $(".swiper-pagination-detail span").css({ 'border-color': 'transparent' });
                    $(".swiper-pagination-detail span").eq(1).css({ 'border-color': '#5a4ec7' });
                    
                    setTimeout(function(){
                        $(".game_detail_title_results_left").css({ 'width': '0%', 'border-right': '0px solid lightgray', 'opacity': '0' });
                        $(".game_detail_title_results_right").css({ 'width': '100%','height': '60px' });
                        $(".game_detail_location_banner").css({ 'height':'45px','line-height':'45px','opacity':'1' });
                        //labels on right slide
                        $(".game_detail_results_slide_header").css({ 'height':'45px','line-height':'45px','opacity':'1','border-bottom':'1px solid lightgray' });
                    
                    },50);
                }
            }
        });
        
    },300);

    $(".detail_slide1").css("width","76.6%");
    $(".detail_slide2").css("width","100%");
    $(".detail_slide2").css("border-left","1px solid lightgray");

    $(".game_detail_matches_inner").css({ 'text-align': 'left', 'padding-top': 'calc(( calc(1.8vw - 1.5px) *0.618) + 9px )', 'padding-bottom': 'calc(( calc(1.8vw - 1.5px) *0.618) + 9px )' });
    $(".game_detail_matches_text,.game_detail_matches_text_sub").css({ 'color': 'black','text-align': 'left' });
    $(".game_detail_title_results_left").css({ 'width': '76.6%','border-right': '1px solid lightgray','line-height': '3','-webkit-transition': 'all 0.3s ease-out','-moz-transition': 'all 0.3s ease-out','-o-transition': 'all 0.3s ease-out','transition': 'all 0.3s ease-out' });
    //edit to %
    $(".game_detail_title_results_right").css({ 'width': 'calc(23.4% - 1px)', 'display': 'flex', '-webkit-flex-direction': 'column', 'flex-direction': 'column', 'align-items': 'center', '-webkit-justify-content': 'center', 'justify-content': 'center', '-webkit-align-content': 'center', 'align-content': 'center','-moz-transition': 'all 0.3s ease-out','-o-transition': 'all 0.3s ease-out','transition': 'all 0.3s ease-out' });

    $(".detail_item_media").css({ 'width': 'calc(23.4% - 3%)', 'margin-left': 'calc(1.5% + 0.5px)', 'margin-right': 'calc(1.5% + 0.5px)' });
    $(".detail_hexagonal_pic").css({ 'width': '100%', 'height': '100%', 'clip-path': 'polygon(22% 14%, 24% 11%, 27% 9%, 32% 8%, 68% 8%, 73% 9%, 76% 11%, 78% 14%, 96% 45%, 97% 50%, 96% 55%, 78% 86%, 76% 89%, 73% 91%, 68% 92%, 32% 92%, 27% 91%, 24% 89%, 23% 86%, 4% 54%, 3% 50%, 4% 45%)' });

    //your city/worldwide span
    $("#game_detail_worldwide_span_id").css({ 'color':'white','text-shadow':'none','background':'#2e7348','border':'1px solid #2e7348','line-height':'30px' });

    //set all transisitions
    $(".modal_title_next").css({ 'height':'57px','flex-direction':'row', 'font-size':'20px', 'padding':'0px', 'opacity':'1', 'line-height':'52px;' });
    $(".modal_title_q, .actions-modal-group, .actions-modal-label").css({ 'transition':'all 0.3s ease-out' });
    $(".modal_title_q").css({ 'padding':'1px 60px' });
    $(".actions-modal-group, .list_cont_likes").css("transition","all 0.3s ease-out");

    //set boxes
    $('.actions-modal-group').eq(0).css("height","93px");
    $('.actions-modal-group').eq(1).css("height","calc(100vh - 184px)");
    $('.actions-modal-group').eq(1).css("background","white");

    setTimeout(function(){
        detail_group1_height();                
        check_and_load_list();
    },500);
    

    return false;
}


function load_list() {
    //THIS IS A SIMULATION OF PHP CALLBACK  
    game_liked_items    = JSON.parse('[{"friend_id":"1","friend_alias":"Sarah","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"},{"friend_id":"4","friend_alias":"Ariana","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"},{"friend_id":"23","friend_alias":"Ivan","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"},{"friend_id":"26","friend_alias":"Chuck","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"}]');
    game_users_template = create_game_users_items_template();

    game_liked_list = myApp.virtualList("#game_liked_list_id", {
        items: game_liked_items,
        template: game_users_template
    });
}
function check_and_load_list() {

    setTimeout(function(){
        if ( $(".actions-modal.modal-in").css("transform") == "matrix(1, 0, 0, 1, 0, 0)" ){
            //try 1
            load_list();
        }else{
            setTimeout(function(){
                 if ( $(".actions-modal.modal-in").css("transform") == "matrix(1, 0, 0, 1, 0, 0)" ){        
                    //try 2 fail safe
                    load_list();  
                 }else{
                    setTimeout(function(){
                         if ( $(".actions-modal.modal-in").css("transform") == "matrix(1, 0, 0, 1, 0, 0)" ){        
                            //try 3 double fail safe
                            load_list();  
                         }
                    },1500);
                }
            },1500);
        }
    },500);

}


//FUNCTIONS INSIDE MODAL

function alertme(temp) {
    var localtext = $("#detail_answer_span_id" + temp).text();
    alert("Option pressed has the following text: " + localtext);
}

function more_options_friends_list() {
    alert("Hire me. I am available to start immedatiately.");
}
function display_public_photos_page() {
    alert("Hire me. I am available to start immedatiately.");
}

function create_game_users_items_template(){

    var game_users_items_template = '';
    game_users_items_template +=    '<li class="media-item widget" data-uib="framework7/media_item" data-ver="0">';
    game_users_items_template +=        '<div style="padding-left: 0px;" class="item-content">';
    game_users_items_template +=            '<div class="member_alerts_list_cont">';
    game_users_items_template +=                '<div onclick="more_options_friends_list()"  class="member_list_options" data-uib="media/img" data-ver="0"></div>';
    game_users_items_template +=                '<div class="member_list_options_img"></div>';
    game_users_items_template +=            '</div>';
    game_users_items_template +=            '<div id="gamer_status_line_icon_id" class="widget gamer_detail_status_line_icon status_online"></div>';
    game_users_items_template +=            '<div class="item-media delete detail_item_media">';
    game_users_items_template +=                '<img onclick="display_public_photos_page()" class="detail_hexagonal_pic" src="images/' + '{{friend_id}}' + '.jpg' + '">';
    game_users_items_template +=                '<div class="widget {{icon}}"></div>';
    game_users_items_template +=            '</div>';
    game_users_items_template +=            '<div class="item-inner game_detail_matches_inner">';
    game_users_items_template +=                '<div class="item-title-row">';
    game_users_items_template +=                    '<!-- MEMBER NAME -->';
    game_users_items_template +=                    '<div onclick="display_public_profile_page({{friend_id}})" class="item-title game_detail_matches_text">{{friend_alias}}</div>';
    game_users_items_template +=                    '<div id="gamer_detail_city" class="item-after gamer_item_after_adjust"><div id="gamer_detail_country_icon" class="gamer_item_after_img"></div>Toronto</div>';
    game_users_items_template +=                '</div>';
    game_users_items_template +=                '<div class="item-subtitle game_detail_matches_text_sub">{{text}}</div>';
    game_users_items_template +=                '<div style="text-align: left; color: #8e8e93;" class="item-subtitle game_detail_matches_text_sub">{{saved_date}}</div>';
    game_users_items_template +=            '</div>';
    game_users_items_template +=        '</div>';
    game_users_items_template +=    '</li>';

    return game_users_items_template;

}

function close_modal() {
    myApp.closeModal('.actions-modal.modal-in');
}

function detail_switch_worldwide() {
    
    //THIS IS A SIMULATION OF PHP CALLBACK  
    game_liked_items    = JSON.parse('[{"friend_id":"1","friend_alias":"Sarah","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"},{"friend_id":"4","friend_alias":"Ariana","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"},{"friend_id":"23","friend_alias":"Ivan","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"},{"friend_id":"26","friend_alias":"Chuck","friend_status":"X","icon":"empty_list_icon","text":"TEXT","saved_date":"DATE"}]');
    game_users_template = create_game_users_items_template();

    game_liked_list = myApp.virtualList("#game_liked_list_id", {
        items: game_liked_items,
        template: game_users_template
    });
    
    
    $("#game_detail_worldwide_span_id").css({ 'color':'white','text-shadow':'none','background':'#2e7348','border':'1px solid #2e7348','line-height':'30px' });
    $("#game_detail_yourcity_span_id").css({ 'color':'#2e7348','text-shadow':'0 0 1px #fbfbfd','background':'transparent','border':'1px solid #2e73483b','line-height':'30px' });
    
}

function detail_switch_yourcity() {
    $("#game_detail_yourcity_span_id").css({ 'color':'white','text-shadow':'none','background':'#2e7348','border':'1px solid #2e7348','line-height':'30px' });
    $("#game_detail_worldwide_span_id").css({ 'color':'#2e7348','text-shadow':'0 0 1px #fbfbfd','background':'transparent','border':'1px solid #2e73483b','line-height':'30px' });
}

function detail_group1_height() {

    setTimeout(function() {
        $('.actions-modal-group, .actions-modal-label').css("transition","all 0.3s ease-out");

        var bodyh = parseInt($("body").css("height"));
        var detail_group0 = parseInt($('.actions-modal-group').eq(0).css('height'));
        var detail_group1 = parseInt($('.actions-modal-group').eq(1).css('height'));
        var detail_group2 = parseInt($('.actions-modal-group').eq(2).css('height'));
        //swiper height
        var detail_label2 = parseInt($('.actions-modal-label').eq(2).css('height'));
        var detail_title_height = parseInt($('.modal_title_q').css('height'));

        $(".actions-modal-label").eq(1).css("height","45px" );
        $(".actions-modal-label").eq(2).css("height", "calc(100% - 45px)" );

        $('#detail_swiper_id, .list_cont_likes').css("transition","all 0.3s ease-out");

            if (swiper_detail.activeIndex == 0) {

                $(".actions-modal-label").eq(1).css("height","45px" );
                $(".actions-modal-label").eq(2).css("height", "calc(100% - 45px)" );
                $('.actions-modal-group').eq(1).css("height", bodyh - detail_group0 - detail_group2 - 34);
                $("#detail_swiper_id").css("height", detail_label2 + 45 );

            }
            if (swiper_detail.activeIndex == 1) {

                $(".actions-modal-label").eq(1).css("height","90px" );
                $(".actions-modal-label").eq(2).css("height", "calc(100% - 90px)" );
                $('.actions-modal-group').eq(1).css("height", bodyh - detail_group0 - detail_group2 - 34);
                $("#detail_swiper_id").css("height", detail_label2 - 45 );
            }

            $("#detail_swiper_id").css("height","100%" );
            $('.actions-modal-group').eq(0).css("height", detail_title_height );
            $('.actions-modal-group').eq(1).css("height", bodyh - detail_title_height - detail_group2 - 34);
            $("#detail_swiper_id .list_cont_likes").animate({ scrollTop: 0 }, "fast");

        },50);

}


//end of modal_code js