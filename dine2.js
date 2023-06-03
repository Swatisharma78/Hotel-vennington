$(".testi_person_img_icon2 ul li img").bind('click', function(){

    let i = $(".testi_person_img_icon2 ul li img").index(this)+1
    $('.left_text_testi_contetn2 div').css("display","none")
    $(`.left_text_testi_contetn2 div:nth-child(${i})`).css("display","block")
   
    $('.testi_person_img_icon2 ul li').removeClass('active_user2')
    $(this).parent().addClass('active_user2')

    $(".img_peroson_fullsize2 img").attr("src",$(this).attr('src'))

  });