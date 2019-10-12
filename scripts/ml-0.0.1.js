function ready(f){/in/.test(document.readyState)?setTimeout('ready('+f+')',9):f()}
// use like
ready(function() {
    /* 
    |----------------|
    |    LITE CARD   |
    |----------------|
    */
   var lite_card_tags = document.getElementsByTagName('ml-card');

   var LiteCardClasses = [
       'ml-card'
   ];

   var LiteCardImageClasses = [
       'ml-card-img'
   ];

   var LiteCardTitleClasses = [
       'ml-card-title'
   ];

   var LiteCard = function LiteCard(e) {
       var title = e.getAttribute('title')|| e.innerHTML;
       var image = e.getAttribute('img');
       var btn = e.getElementsByTagName('ml-button')[0];
       console.log(e.getElementsByTagName('ml-button'));

       var lite_card = document.createElement('div');
       lite_card.className += LiteCardClasses.join(' ');
       lite_card.className += ' ' + e.className;

       var card_image = document.createElement('img');
       card_image.className += LiteCardImageClasses.join(' ');
       card_image.src = image;

       var card_title = document.createElement('h2');
       card_title.className += LiteCardTitleClasses.join(' ');
       card_title.innerHTML = title;

       if (title) card_title.innerHTML = title;

       lite_card.appendChild(card_image);
       lite_card.appendChild(card_title);
       if (btn) {
           console.log('btn exists');
           lite_card.appendChild(document.createElement('hr'));
           lite_card.appendChild(btn);
       }

       e.parentElement.insertBefore(lite_card, e);
       e.remove();
   }

   while (lite_card_tags.length) {
       LiteCard(lite_card_tags[0]);
   }

    /* 
    |------------------|
    |    LITE BUTTON   |
    |------------------|
    */
    var lite_btn_tags = document.getElementsByTagName('ml-button');

    var LiteButtonClasses = [
        'ml-btn-dft'
    ];

    var LiteButton = function LiteButton(e) {
        var text = e.innerHTML;
        var src = e.getAttribute('src');
        var click_callback = new Function('return ' + e.getAttribute('onclick'));
        var target = e.getAttribute('target');

        var lite_btn = document.createElement('a');
        lite_btn.setAttribute('role', 'button');
        if (text) lite_btn.innerHTML = text;
        src ? lite_btn.href = src : lite_btn.setAttribute('tabindex', '0');
        if (click_callback) lite_btn.addEventListener('click', function() {
             click_callback() 
        });
        if (target) lite_btn.target = target;
        lite_btn.className += LiteButtonClasses.join(' ');
        if (e.classList.length) lite_btn.className += ' ' + e.classList.toString();
        
        e.parentElement.insertBefore(lite_btn, e);
        e.remove();
    }

    while (lite_btn_tags.length) {
        LiteButton(lite_btn_tags[0]);
    }

}); 