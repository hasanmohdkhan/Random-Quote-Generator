/**
 * Created by hasanZian on 11-03-2017.
 */
var quotes=["I love you the more in that I believe you had liked me for my own sake and for nothing else. - John Keats",
             "But man is not made for defeat. A man can be destroyed but not defeated. - Ernest Hemingway",
             "When you reach the end of your rope, tie a knot in it and hang on.  -  Franklin D. Roosevelt",
             "There is nothing permanent except change. - Heraclitus",
             "You cannot shake hands with a clenched fist. - Indira Gandhi",
             "Let us sacrifice our today so that our children can have a better tomorrow. - A. P. J. Abdul Kalam",
             "It is better to be feared than loved, if you cannot be both. - Niccolo Machiavelli",
             "The most difficult thing is the decision to act, the rest is merely tenacity. The fears are paper tigers. You can do anything you decide to do. You can act to change and control your life; and the procedure, the process is its own reward.- Amelia Earhart",
             "Do not mind anything that anyone tells you about anyone else. Judge everyone and everything for yourself. - Henry James"
             ];



function newQuote()
{
    var randomNumber=Math.floor(Math.random()*(quotes.length));
    document.getElementById('quoteDisplay').innerHTML= quotes[randomNumber];


}