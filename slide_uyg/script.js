var models = [
    {
        name : 'Audi A4',
        image : 'img/audia4.jpg',
        link : 'https://www.arabalar.com.tr/audi/a4'
    },
    {
        name : 'BMW I5',
        image : 'img/bmwi5.jpg',
        link : 'https://www.arabalar.com.tr/bmw/5-serisi/2024/i5-m-sport'
    },
    {
        name : 'Fiat 500L',
        image : 'img/fiat500l.jpg',
        link : 'https://www.arabalar.com.tr/fiat/500l'
    },
    {
        name : 'Honda Civic',
        image : 'img/hondacivic.jpg',
        link : 'https://www.arabalar.com.tr/honda/civic'
    },
    {
        name : 'Mercedes G63',
        image : 'img/mercedesg63.jpg',
        link : 'https://www.arabalar.com.tr/mercedes'
    }
];

var index = 0;
var slaytCount = models.length;
var interval;
var settings = {
    duration : '2000',
    random : false
};

init(settings);

document.querySelector('.fa-circle-arrow-left').addEventListener('click', function() {
    index--;
    showSlide(index);
    console.log(index);
});


document.querySelector('.fa-circle-arrow-right').addEventListener('click', function() {
    index++;
    showSlide(index);
    console.log(index);
});


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){

    var prev;
    interval = setInterval(function(){
        if(settings.random){
            //random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;      
            
        }else{
            //artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;   
        }
        
        showSlide(index);

    },settings.duration)
}



function showSlide(i){

    index = i;

    if (i < 0){
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index = 0;
    }


    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);

    document.querySelector('.card-link').setAttribute('href',models[index].link);
}



