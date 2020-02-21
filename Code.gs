// fetchSchedule is imported from fetch.gs
// in GAS, no need to import
// fill ACCESSTOKEN with your one

function request(){
  // scraping
  const date = fetchSchedule();
  
  // line api
  const accessToken = ACCESSTOKEN;  
  const url = 'https://api.line.me/v2/bot/message/broadcast';
  UrlFetchApp.fetch(url, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + accessToken,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'messages': [{
        'type': 'text',
        'text': date,
      }],
    }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}  
