const buyBtns = document.querySelectorAll('.js-buy-btn')
    const modal = document.querySelector('.js-modal')
    const modalContainer = document.querySelector('.js-modal-container')
    const modalClose = document.querySelector('.js-modal-close')
    // ham hien modal-container
    function Showmodalctn(){
        modal.classList.add('open')
    }
    //vong lap for cho list buyBtns, lang nghe nut click de bat modal-container
    for (const buyBtn of buyBtns ){
        buyBtn.addEventListener('click',Showmodalctn)
    }
    //ham an modal-container 
    function Hidemodalctn(){
        modal.classList.remove('open')
    }
    // lang nghe nut click de tat modal-container 
    modalClose.addEventListener('click',Hidemodalctn)
    modal.addEventListener('click',Hidemodalctn)
    // hanh vi noi bot 
    modalContainer.addEventListener('click', function(event){
        event.stopPropagation()
    })

    var header = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile');
    var headertHeight = header.clientHeight;
    mobileMenu.onclick = function(){
        var isClosed = header.clientHeight === headertHeight;
        if (isClosed){
            header.style.height = 'auto';
        }
        else{
            header.style.height = null;
        }
    }

    // auto dong menu khi bam //
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
    
    for ( var i = 0 ; i < menuItems.length; i++ ){
        var menuItem = menuItems [i];

        

        menuItem.onclick = function(event){
            var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(isParent){
                event.preventDefault();
            } else{
                header.style.height = null;
            }
        }
    }

    
    var rdimage = document.querySelector('.radio-image')
    var firstImage = rdimage.firstElementChild
    function radio(index){
        switch (index) {
                case 1:
                rdimage.innerHTML = 
                `<img src="/assets/img/liverpool/liverpool squad.jpeg" alt class="img-items first radio1">`
                break;
                case 2:
                rdimage.innerHTML = 
                `<img src="/assets/img/liverpool/liverpool2019.jpeg" alt="" class="img-items second radio2">` 
                break;
                case 3:
                rdimage.innerHTML = 
                `<img src="/assets/img/liverpool/premierleague.jpeg" alt="" class="img-items thir radio3">`
                break;
                case 4:
                rdimage.innerHTML = 
                `<img src="/assets/img/liverpool/FifaWC.jpeg" alt="" class="img-items four radio4">`
                break;

            default:
                break;
        }
    }

    firstImage.onclick = function(e){
        e.stopPropagation();
    }



