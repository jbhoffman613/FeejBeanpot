var google = require('googleapis');
var authentication = require('./authentication');

var columnMap = new Map();
// columnMap.set('Category','A');
columnMap.set('collegeChapter','B');
// columnMap.set('School Name','C');
columnMap.set('classroomCode','D');
// columnMap.set('Teacher','E');
columnMap.set('dc1','F');
columnMap.set('dc2','G');
columnMap.set('dc3','H');
columnMap.set('focusIssue','I');
columnMap.set('rootCause','J');
columnMap.set('guestSpeakerName','K');
columnMap.set('Model Goal Alignment','L');
columnMap.set('goal','M');
columnMap.set('lesson10Date','N');
columnMap.set('decisionMaker','O');
columnMap.set('decisionMakerTactics','P');
columnMap.set('Did class receive response from DM?','Q');
columnMap.set('influencers','R');
columnMap.set('influencerTactics','S');
columnMap.set('Attended Civics Day','T');
columnMap.set('Award Winner?','U');
columnMap.set('Sponsor','V');

// Lesson4
//     lesson4Date
//
// GuestSpeaker
//     guestSpeakerDate

exports.pushData =  function(auth, entry) {
    var sheets = google.sheets('v4');
    sheets.spreadsheets.values.get({
      auth: auth,
      spreadsheetId: '1sfG80hruVDcz6i0qyau3fpn3DrabZj0iWzWz8dZ-1Xs',
      range: 'Sheet1!A2:W',
  }, (err, response) => {
    if (err) {
      console.log('The API returned an error: ' + err);
      return;
    }
    var rows = response.values;
    if (rows.length === 0) {
      console.log('No data found.');
    }
    else {
      var classes = [];
      var foundRow = -1;
      for (var i = 0; i < rows.length; i++) {
        classes.push(rows[i]);
        if(rows[i][3] == entry['classroomCode']){
          foundRow = i + 1;
        }
        console.log('Pushed %s', rows[i][0]);
      }
      if(foundRow == -1){
        foundRow = rows.length + 1;
      }

      var value;
      var columnLetter;
      Object.keys(entry).forEach(function(key) {
          columnLetter = columnMap.get(key);
          value = entry[key];
          sheets.spreadsheets.values.update(
          {
            auth: auth,
            spreadsheetId: '1sfG80hruVDcz6i0qyau3fpn3DrabZj0iWzWz8dZ-1Xs',
            range: 'Sheet1!' + columnLetter + (foundRow + 1),
            valueInputOption: 'USER_ENTERED',
            resource: {
              values: [
                [value]
            ]},
          },
          function (err, response) {
            if (err) {
              console.log(err);
              return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
              });
            }
          });
      });
      }
  });
}
