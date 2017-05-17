
ymaps.ready(init);
   var myMap;

   function init(){     
       myMap = new ymaps.Map("map", {
           center: [48.46389827, 35.04218265],
           zoom: 13,
           conyrols: ["zoomControl"]
       });
       myMap.behaviors.disable(['scrollZoom']);
  
       var coords = [
     [48.46666465, 35.05081228],
     [48.45230140, 35.06322427],
     [48.46794350, 35.03747566],
     [48.48864644, 35.06343237]
   ];

   var myCollection = new 
   ymaps.GeoObjectCollection({}, {        
       iconLayout: 'default#image',
       iconImageHref:'./img/icons/map-marker.svg',
       iconImageSize: [42,59]        
   });
   
   coords.forEach(function (item) {
       myCollection.add(new
       ymaps.Placemark(item));    
   });

   myMap.geoObjects.add(myCollection);
                  
}