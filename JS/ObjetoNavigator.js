let options= {
    enableHighAccuracy:true,
    timeout:5000,
    maxImunage:0
}

function success(){
    let crd=pos.coord;
    console.log(`Your current position is:`);
    console.log(`Latitude:` + crd.latitude);
    console.log(`Longitude: `+ crd.longitude);

};

function error(err) {
    console.warn(`ERROR(`+err.code`+):`+err.message);
};

console.log(navigator.userAgent);
navigator.geolocation.getCurrentPosition(success,error,options);