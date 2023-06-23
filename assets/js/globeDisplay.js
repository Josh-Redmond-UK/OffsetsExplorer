
const reader = new FileReader()
reader.onload = function (event) {
    console.log(event.target.result); // the CSV content as string
  };
var names = ['Guatemala', 'Tanzania', 'Hunan', 'Darkwoods']





fetch('../PointsLatLon.csv').then(response => response.text())

  .then((data) => {
     var projectCSV = Papa.parse(data, {header:true});
     console.log(projectCSV.data);
     var numProj = projectCSV.data.length;
     var names = []
     var lats = []
     var lons = [] 

     for (i=0; i<numProj; i++){
        var _p = projectCSV.data[i]
        names.push(_p['Project Title'])
        lats.push(_p['Latitude'])
        lons.push(_p['Longitude'])



     }
     var labelData = {}
     lats = lats.slice(0,-3)
     lons = lons.slice(0,-3)
     names = names.slice(0,-3)
     labelData['lat'] = lats
     labelData['lng'] = lons
     labelData['text'] = names
    const N = 300;
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180,
      lng: (Math.random() - 0.5) * 360,
      size: Math.random() / 3,
      color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
    }));
     const myGlobe = Globe();
    myGlobe(document.getElementById('globeViz'))
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .backgroundColor('rgba(0,0,0,0.1)')
    .width(screen.width/2)
    .labelsData(projectCSV.data)

     



     console.log(lats)
     console.log(labelData)
     myGlobe.pointsData([])
     myGlobe.pointLat(0)
     myGlobe.pointLng(1)


    myGlobe.controls().autoRotate = true;
    myGlobe.controls().autoRotateSpeed = -0.45;


     
  });

//reader.readAsText()



