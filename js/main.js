
(function(){
    var headerTmpl = _.template(get('./template/header'))();
    var footerTmpl = _.template(get('./template/footer-contact'))();
    $('#header').html(headerTmpl);
    $('#footer').html(footerTmpl);

    ActiveHeader();
})();


 function get(url) {
    var data = "<h1> failed to load url : " + url + "</h1>";
    $.ajax({
        async: false,
        dataType: "text",
        url: url,
        success: function(response) {
            data = response;
        }
    });
    return data;
}

function ActiveHeader(){
          var currentUrl = window.location.href.toString();
    $('#header').find('.active').removeClass('active');

    if(currentUrl.indexOf('about')!== -1){
         $('#aboutUsMenu').addClass('active');
    }else if (currentUrl.indexOf('portfolio-item')!== -1 ) {
        $('#productsMenu').addClass('active');

    } else if (currentUrl.indexOf('features')!== -1 || currentUrl.indexOf('factory')!== -1 || currentUrl.indexOf('portfolio')!== -1|| currentUrl.indexOf('coming-soon')!== -1|| currentUrl.indexOf('health')!== -1) {
        $('#picMenu').addClass('active');

    }else if (currentUrl.indexOf('contact')!== -1) {
        $('#contactUsMenu').addClass('active');

    } else{
        $('#homeMenu').addClass('active');
    }


}