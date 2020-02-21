// fill URL with your one which you want to scrape

function fetchSchedule() {
  const url = URL;
  const response = UrlFetchApp.fetch(url);
  const html = response.getContentText('UTF-8');

  /* Example
<table class="profileSchedule dispSP">
    <tbody>
        <tr>
            <th class="week5">2/21<span>(金)</span></th>
            <td class="week5">&nbsp;</td>
        </tr>
        <tr>
            <th class="week6">2/22<span>(土)</span></th>
            <td class="week6">20:00～<span class="time2">LAST</span></td>
        </tr>
        <tr>
            <th class="week0">2/23<span>(日)</span></th>
            <td class="week0">&nbsp;</td>
        </tr>
        <tr>
            <th class="week1">2/24<span>(月)</span></th>
            <td class="week1">17:00～<span class="time2">LAST</span></td>
        </tr>
        <tr>
            <th class="week2">2/25<span>(火)</span></th>
            <td class="week2">19:00～<span class="time2">LAST</span></td>
        </tr>
        <tr>
            <th class="week3">2/26<span>(水)</span></th>
            <td class="week3">&nbsp;</td>
        </tr>
        <tr>
            <th class="week4">2/27<span>(木)</span></th>
            <td class="week4">&nbsp;</td>
        </tr>
    </tbody>
</table>
    */

  // Example, fill with your one
  // const schedule = Parser.data(html).from('<table class="profileSchedule dispSP">').to('</table>').build();

  dateList = ['○○ちゃんの出勤予定表'];
  for (var i=0; i<7; i++){
    // Scraping Example, fill with your one
    /* 
       var date = Parser.data(schedule).from('<th class="week' + i + '">').to('</span>').build();
       date = date.replace('<span>', '');
       var time = Parser.data(schedule).from('<td class="week' + i + '">').to('</td>').build();
       time = time.replace('<span class="time2">', '').replace('</span>', '').replace('&nbsp;', '休み');
       dateList.push(date + ' => ' + time);
    */
  };
  return dateList.join('\n');
}