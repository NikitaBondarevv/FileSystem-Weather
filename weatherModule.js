const https = require('https');
const fs = require('fs');

https.get('https://wttr.in/~kharkov', (res) => {
  if (res.statusCode !== 200) throw new Error(res.statusCode);

  let html = '';

  res.on('data', data => html += data);
  res.on('end', () => {
    fs.writeFile('weather.html', html, (error) => {
      if (error) throw error;
    });
  });
});
