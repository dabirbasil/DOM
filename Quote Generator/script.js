var qBtn = document.querySelector(".qoute-btn");

var Aqoute = document.querySelector(".qoute-content")

var auth = document.querySelector(".qoute-Author")



var quotes =[
{
quote: '"I do the very best I know how - the very bestI can: and I mean to keep on doing so until the end"',
author: "Abraham Lincon"
}

,

{
    quote: '"Spread love everywhere you go. Let no one ever come to you without leaving happier"',
    author: "Mother Teresa"    
}

,

{
    quote: '"When you reach the end of your rope, tie a knot in it and hang on."',
    author: "Franklin D. Roosevelt"    
}

,

{
    quote: '"Always remember that you are absolutely unique. Just like everyone else."',
    author: "Margaret Mead"    
}

,

{
    quote: '"Don\'t judge each day by the harvest you reap but by the seeds that you plant.',
    author: "Robert Louis Stevenson"    
}

,

{
    quote: '"The future belongs to those who believe in the beauty of their dreams." ',
    author: "Eleanor Roosevelt"    
}

,

{
    quote: '"Tell me and I forget. Teach me and I remember. Involve me and I learn."',
    author: "Benjamin Franklin"    
}

,

{
    quote: '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."',
    author: "Helen Keller"    
}

,

{
    quote: '"It is during our darkest moments that we must focus to see the light."',
    author: "Aristotle"    
}

,

{
    quote: '"Whoever is happy will make others happy too."',
    author: "Anne Frank"    
}

,

{
    quote: '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
    author: "Ralph Waldo Emerson"    
}

,

{
    quote: '"If life were predictable it would cease to be life and be without flavor."',
    author: "Eleanor Roosevelt"    
}
,

{
    quote: '"In the end, it\'s not the years in your life that count. It\'s the life in your years."',
    author: "Abraham Lincoln"    
}
,

{
    quote: ' "Life is a succession of lessons which must be lived to be understood."',
    author: "Ralph Waldo Emerson"    
}
,

{
    quote: '"You will face many defeats in life, but never let yourself be defeated."',
    author: "Maya Angelou"    
}
,

{
    quote: '"Never let the fear of striking out keep you from playing the game."',
    author: "Babe Ruth"    
}
,

{
    quote: '"Life is never fair, and perhaps it is a good thing for most of us that it is not."',
    author: "Oscar Wilde"    
}


,

{
    quote: ' "The only impossible journey is the one you never begin."',
    author: "Tony Robbins"    
}

,

{
    quote: '"In this life we cannot do great things. We can only do small things with great love."',
    author: "Mother Teresa"    
}

,

{
    quote: '"Only a life lived for others is a life worthwhile."',
    author: "Albert Einstein"    
}

,

{
    quote: ' "The purpose of our lives is to be happy."',
    author: "Dalai Lama"    
}
]

var random = (Math.floor(Math.random() * quotes.length));


Aqoute.innerHTML = quotes[random].quote
auth.innerHTML = quotes[random].author

qBtn.addEventListener("click" ,()=>{

    var random = (Math.floor(Math.random() * quotes.length));

console.log(random);

Aqoute.innerHTML = quotes[random].quote
auth.innerHTML = quotes[random].author


console.log("hello");

})