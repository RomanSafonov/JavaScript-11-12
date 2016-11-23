$(function (){
    $('carousel').carousel({
        sizeImg: 420 //420 one image, 840 - two image, 1260 three
    });

    var temp = $(template).html();

    var data = {
        topic: 'The Georgia Aquarium',
        linkImg: 'src="img/aqua.jpg"',
        textImg: 'alt="aquarium"',
        textP: 'Самый большой океанариум в мире The Georgia Aquarium находится в Атланте, США',
        textP1: 'Объем воды этого удивительного аквариума составляет около 31 тысячи кубических метров,          а обитает в нем более 120 тысяч живых экспонатов, принадлежащих к пятистам видам. Самыми крупными животными океанариума является кит белуха, а также несколько видов дельфинов, китовые акулы, скаты.',
        textP_: '_________________________________________________________________________',
        linkSourse: 'href="http://www.georgiaaquarium.org/"',
        linkSell: 'href="http://www.georgiaaquarium.org/experience/visit"',
        textSell: 'Save 30%'
    }

    var content = tmpl(temp, data);

    $('footer').append(content);
});
