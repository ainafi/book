import logo1 from '../images/Logo-1.png'
import logo2 from '../images/Logo-2.png'
import logo3 from '../images/Logo-3.png'
import logo from '../images/Logo.png'
import photo6 from '../images/Photo-6.png'
import photo7 from '../images/Photo-7.png'
import photo8 from '../images/Photo-8.png'

const spons=[
    {
        id:1,
        image:logo1,
        title:'Amazen Corp',
        description:'A long established fact that a who looking at its layout.'
    },
    {
        id:1,
        image:logo2,
        title:'Megan Books',
        description:'A long established fact that a who looking at its layout.'
    },
    {
        id:1,
        image:logo3,
        title:'Los Books',
        description:'A long established fact that a who looking at its layout.'
    },
    {
        id:1,
        image:logo,
        title:'Urban Lib',
        description:'A long established fact that a who looking at its layout.'
    },
]
const avantages=[
    {
        id:1,
        num:'01',
        description:'Use HDFS & Map Reduce for storing & analyzing data at scale.'
    },
    {
        id:2,
        num:'02',
        description:'Consume streaming data using Spark Streaming, Flink, and Storm.'
    },
    {
        id:3,
        num:'03',
        description:'Choose an appropriate data storage technology for your application.'
    },
    {
        id:4,
        num:'04',
        description:'Analyze non-relational data using HBase, Cassandra, and MongoDB.'
    },
]
const article=[
    {
        id:1,
        image:photo6,
        title:"The energy efficiency offers hydrotherapy or swim",
        description:'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.'
    },
    {
        id:2,
        image:photo7,
        title:"Release of Letraset sheets tools containing  passages",
        description:'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.'
    },
    {
        id:1,
        image:photo8,
        title:"The energy efficiency offers hydrotherapy or swim",
        description:'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.'
    },
]
const sponsor=document.querySelector('.sponsor__cont')
const avantage=document.querySelector('.avantage__card')
const articles=document.querySelector('.article-card')

function createCardSponsor(){
    for (let i = 0; i < spons.length; i++) {
        const card=document.createElement('div')
        card.innerHTML=`
        <div class="cont">
            <img src=${spons[i].image} alt="">
            <div class="cont__desc">
            <h6>${spons[i].title}</h6>
            <p>${spons[i].description}</p>
            </div>
        </div>
        `;
        sponsor.appendChild(card)
        
    }
}
createCardSponsor()

function createCardAvantage(){
    for (let i = 0; i < avantages.length; i++) {
        const cardAvantage=document.createElement('div')
        cardAvantage.innerHTML=`
        <div class="card">
            <div class="card__content">
                <h5>${avantages[i].num}</h5>
                <p>${avantages[i].description}.</p>
            </div>
        </div>
        `;
        avantage.appendChild(cardAvantage)
        
    }

}
createCardAvantage()

function createCardArticle(){
    for (let i = 0; i < article.length; i++) {
        const cardArticle=document.createElement('div')
        cardArticle.innerHTML=`
        <div class="article__card">
            <img src='${article[i].image}' alt="${article[i].image}">
            <div class="art-desc">
                <h4>${article[i].title}</h4>
                <p>${article[i].description}</p>
                <div>
                    <a href="#">read more</a>
                    <p>Author - 23.05.2022</p>
                </div>
            </div>
        </div>
        `
        articles.appendChild(cardArticle)
        
    }
}
createCardArticle()


// navbar responsive

const hamburger=document.querySelector('.hamburger')
const nav=document.querySelector('.nav')
hamburger.addEventListener('click',()=>{
    nav.classList.toggle('active')
    console.log('hh');
})

// animation gsap
TweenMax.from(".logo",{
    opacity:0,
    delay:.5,
    x:-50,
    
})
TweenMax.staggerFrom(".nav li a",1,{
    opacity:0,
    x:-50,
    ease:Expo.easeInOut  
},.66)
TweenMax.from(".welcome",1,{
    opacity:0,
    y:20,
    delay:.5,
    ease:Expo.easeInOut  
})
TweenMax.from(".banner__title",1,{
    opacity:0,
    y:20,
    delay:.9,
    ease:Expo.easeInOut  
})
TweenMax.from(".banner__paragraph",1,{
    opacity:0,
    y:20,
    delay:1,
    ease:Expo.easeInOut  
})
TweenMax.from(".banner__btn",1,{
    opacity:0,
    y:20,
    delay:1,
    ease:Expo.easeInOut  
})
TweenMax.staggerFrom(".banner__rating h5",1,{
    opacity:0,
    y:20,
    delay:1.2,
    ease:Expo.easeInOut  
},0.55)
TweenMax.staggerFrom(".banner__rating .circle",1,{
    opacity:0,
    y:20,
    delay:1.3,
    ease:Expo.easeInOut  
},0.55)
TweenMax.staggerFrom(".banner__rating p",1,{
    opacity:0,
    y:20,
    delay:1.3,
    ease:Expo.easeInOut  
},0.66)
TweenMax.staggerFrom(".banner-right img",1,{
    opacity:0,
    x:-20,
    delay:1.4,
    ease:Power3.Out  
},.99)




