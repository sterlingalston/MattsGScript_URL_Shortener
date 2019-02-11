function URLShortner(url2shorten) {
  
  var strpt1 = "https://tinyurl.com/create.php?source=indexpage&url=";
  var strpt2 = "&submit=Make+TinyURL%21&alias=";
  
  
  url2shorten = encodeURIComponent(url2shorten);
  url2shorten = strpt1 + url2shorten + strpt2;
  
  var response = UrlFetchApp.fetch(url2shorten);
  var document =  response.getContentText();
  
  document = HtmlService.createTemplate(document).evaluate();
  //<div id="copyinfo" data-clipboard-text="https://tinyurl.com/awo7q"></div>
  //Logger.log(document.getContent().search("id=\"copyinfo\""));
  var starter = document.getContent().search("id=\"copyinfo\"");
  //Logger.log(document.getContent().indexOf("<\/div>",starter));
  var ender = document.getContent().indexOf("<\/div>",starter);
  var strsubstr = document.getContent().substr(starter, ender - starter);
  //data-clipboard-text
  
  var starter = strsubstr.search("data-clipboard-text") + "data-clipboard-text=".length + 1;
  var ender = strsubstr.indexOf(">",starter);
  
  
  return strsubstr.substr(starter, ender - (starter + 1)).trim();
}


function tester(){

Logger.log(URLShortner("facebook.com"));
  Logger.log(URLShortner("wapo.com"));

}