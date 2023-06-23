
const reader = new FileReader()
reader.onload = function (event) {
    console.log(event.target.result); // the CSV content as string
  };
var names = ['Guatemala', 'Tanzania', 'Hunan', 'Darkwoods']



var map = L.map('map').setView([0, 0], 1);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


fetch('https://raw.githubusercontent.com/Josh-Redmond-UK/OffsetsExplorer/main/assets/PointsLatLon.csv').then(response => response.text())

  .then((data) => {
     var projectCSV = Papa.parse(data, {header:true});
     console.log(projectCSV.data);
     var numProj = projectCSV.data.length;
     var dataArray = new Array();
     var names = []
     var lats = []
     var lons = [] 

     for (i=0; i<numProj; i++){
        var _p = projectCSV.data[i]
        var marker = L.marker([_p['Latitude'], _p['Longitude']]).addTo(map);
        console.log(_p['Project Title'])
        marker.bindPopup(`${_p['Project Title']}<br><br>Total Credits Retired: ${_p['Credits Retired Total']}<br><br>Credits Retired by Shell: ${_p['Credits Retired Company']}`)
        dataArray.push({
            title:_p['Project Title'],
            lat:_p['Latitude'],
            lng:_p['Longitude']
           


        })
        names.push(_p['Project Title'])
        lats.push(_p['Latitude'])
        lons.push(_p['Longitude'])



     }
  
     
  });

//reader.readAsText()



