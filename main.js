function taleAppear(x) {
    for (i in x.text) {
        let y = x.text[i].replace(/{var1}/g, '<span class="word var1">{var1}</span>');
        y = y.replace(/{var2}/g, '<span class="word var2">{var2}</span>');
        y = y.replace(/{var3}/g, '<span class="word var3">{var3}</span>');
        y = y.replace(/{var4}/g, '<span class="word var4">{var4}</span>');
        y = y.replace(/{var5}/g, '<span class="word var5">{var5}</span>');
        y = y.replace(/{var6}/g, '<span class="word var6">{var6}</span>');
        y = y.replace(/{speach}/g, '<span class="word speach">{speach}</span>');
        const tale = `<p>${y}</p>`;
        const $tale = $(tale);
        $tale.appendTo($('.result'));
    }
}

$.getJSON (
    'https://api.myjson.com/bins/jcmhn',
    function(data) {    
        taleAppear(data); 
    })

$('#create').click(function() {
    for (i in $('.var1')) {
        $('.var1')[i].innerHTML = $('.inputvar1').val();
    }
    for (i in $('.var2')) {
        $('.var2')[i].innerHTML = $('.inputvar2').val();
    }
    for (i in $('.var3')) {
        $('.var3')[i].innerHTML = $('.inputvar3').val();
    }
    for (i in $('.var4')) {
        $('.var4')[i].innerHTML = $('.inputvar4').val();
    }
    for (i in $('.var5')) {
        $('.var5')[i].innerHTML = $('.inputvar5').val();
    }
    for (i in $('.var6')) {
        $('.var6')[i].innerHTML = $('.inputvar6').val();
    }
    for (i in $('.speach')) {
        $('.speach')[i].innerHTML = $('.inputspeach').val();
    }
})