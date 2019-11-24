function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };

  if(h==0) {
    h=12;
  }

    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 23) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);
}

//quote array
var quotes = ["Blank", "\"If I wake up and I want <b>pancakes</b>, I'm gonna eat pancakes.\"<br>-  Hailey Biber", "\"I always get so excited cooking <b>chicken wings</b>.\"<br>-  Jourdan Dunn", "\"My favorite dish is <b>tandoori chicken</b>.\"<br>-  Shah Rukh Khan", "\"I usually eat four or five raw <b>carrots</b> with my meat, and that is all. I must be part rabbit; I never get bored with raw carrots.\"<br>-  Marilyn Monroe", "\"In summer, I prefer a <b>Caprese salad, Parmigiano cheese flakes</b>, or some truly fresh <b>ricotta cheese</b>.\"<br>-  Giorgio Armani", "\"I am not a fine chef, but I can certainly get dinner on the table for 14 people. With that many, I try to keep it simple: <b>salmon, mashed potatoes, sauteed spinach, and salad</b>.\"<br>-  Cindy Crawford", "\"I find it almost comforting to count calories, because it makes me conscious of what I'm eating. But on Super Bowl Sunday, I thought, 'Surrender to it. <b>It's nacho time</b>.' Then I ate nothing but Doritos all day.\"<br>- Kristen Bell", "\"There's no doubt a bit of <b>chicken in a creamy mushroom sauce with a side order of garlic mash</b> will put a smile on your face.\"<br>-  Claudia Winkleman", "\"A <b>cheese dip</b> is good - it's for when you're like, 'You know what, I've had a long day. I'm just gonna eat a big bowl of cheese, and I'm not gonna care about it.'\"<br>-  Antoni Porowski", "\"My daily breakfast is two <b>poached eggs</b> in the morning with half an <b>avocado</b>, and I get to have half <b>a piece of toast</b>.\"<br>-  Lewis Hamilton", "\"My mom would always make <b>quinoa with squash and kale</b>, hippie stuff like that.\"<br>-  Zoe Kravitz", "\"When you're eating a bowl of <b>pho</b>, you're eating everything you need.\"<br>-  Michelle Phan", "\"I'll have a <b>Chinese takeaway</b> now and again.\"<br>-  Caroline Flack", "\"Life is too short to miss out on the beautiful things like a <b>double cheeseburger</b>.\"<br>-  Channing Tatum", "\"I've got to get into shape. I've been eating nothing but <b>fish and chips</b>.\"<br>-  Emily Blunt", "\"The Tom Brady <b>sandwich</b> would be a prosciutto with a nice Buffalo mozzarella, on a crispy baguette with a little fresh basil.\"<br>-  Guy Fieri", "\"Let me be the first to tell you, drinking alcohol is the worst thing to do in cold weather. <b>Hot soup</b> is the best because the process of digesting food helps to warm you up.\"<br>-  Morgan Freeman", "\"My favorite food is <b>Ramen</b>.\"<br>-  Steve Aoki", "\"I love pizza; you can't really go wrong with <b>pizza</b>.\"<br> - Nick Jonas", "\"I love eating <b>sushi</b> and eating raw and clean - no pasta and bread. Low carbs is what works for me.\"<br> - Chrissy Teigen", "\"I grew up eating street <b>tacos and burritos</b> on the beach, so I like people who can eat and aren't afraid to show it.\"<br>- Emily Ratajkowski", "\"Everything you see I owe to <b>spaghetti</b>.\"<br>- Sophia Loren", "\"Cooking certain dishes, like <b>roast pork</b>, reminds me of my mother.\"<br>- Maya Angelou", "\"When I was 11, I made truffle <b>risotto</b> for my family for Christmas dinner.\"<br>- Gigi Hadid", "\"Doing the weekly shopping, I stock up on <b>stir-fry</b> kits.\"<br>- Carrie Underwood", "\"Don't just eat McDonald's, get something a bit better. Eat a <b>salad</b>. That's what fashion is. It's something that is a bit better.\"<br>- Vivienne Westwood",];

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}
