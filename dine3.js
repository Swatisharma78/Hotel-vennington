$(".testi_person_img_icon3 ul li img").bind('click', function(){

    let i = $(".testi_person_img_icon3 ul li img").index(this)+1
    $('.left_text_testi_contetn3 div').css("display","none")
    $(`.left_text_testi_contetn3 div:nth-child(${i})`).css("display","block")
   
    $('.testi_person_img_icon3 ul li').removeClass('active_user3')
    $(this).parent().addClass('active_user3')

    $(".img_peroson_fullsize3 img").attr("src",$(this).attr('src'))

  });