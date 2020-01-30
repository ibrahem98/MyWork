var news;
var link = document.getElementsByClassName("nav-link");
var drop = document.getElementsByClassName("dropdown-item");
var temp;
var srrr = document.getElementById("alooo");
var category = "general";
var country = "";
grtnews(category,country);


srrr.addEventListener("blur", function()
{
    temp = srrr.value;
    ser();
})
for(var i = 0 ; i<link.length;i++)
{
    link[i].addEventListener("click",function(e)
    {
        category=e.target.innerHTML;
        grtnews(category,country);
    })
}

for(var i = 0 ; i<drop.length;i++)
{
    drop[i].addEventListener("click",function(e)
    {
        country=e.target.innerHTML;
        grtnews(category,country);
    })
}

function grtnews(cat,con)
{
var req = new XMLHttpRequest(); 
var url = "https://newsapi.org/v2/top-headlines?country="+con+"&category="+cat+"&apiKey=8a9b5dd8f1a2450887bd10dfc35579e5"
req.open("GET",url);
req.onreadystatechange = function()
{
    if(req.readyState == 4 && req.status == 200)
        {
            news = JSON.parse(req.response);
            news = news.articles;
            display();
        }
}
req.send();
}
function display()
{ 
var temp ="";
for(var i = 0 ; i < news.length ; i++)
   {
       if(news[i].urlToImage == null)
       {
        news[i].urlToImage = "https://media.cargocollective.com/1/16/532970/headerimg/logo-null-final.png";
       }

        temp = temp + `<div class="card  m-3">
        <img src="`+news[i].urlToImage+`" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">`+news[i].title+`</h5>
          <p class="card-text">`+news[i].description+`</p>
          <p class="card-text"><small class="text-muted">`+news[i].publishedAt+`</small></p>
        </div>
      </div>`
   }

document.getElementById("newsRow").innerHTML = temp;
}
function ser()
{
    var req = new XMLHttpRequest(); 
    var url = "https://newsapi.org/v2/everything?q="+temp+"&from=2019-07-26&sortBy=publishedAt&apiKey=8a9b5dd8f1a2450887bd10dfc35579e5"
    req.open("GET",url);
    req.onreadystatechange = function()
    {
        if(req.readyState == 4 && req.status == 200)
            {
                news = JSON.parse(req.response);
                news = news.articles;
                display();
            }
    }
    req.send();
}