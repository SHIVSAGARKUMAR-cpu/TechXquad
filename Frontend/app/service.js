app.service("AppService", function($http){

    this.saveEnquiry = function(obj){
        console.log("Function Called")
        return $http.post("http://192.168.0.57:9090/api/saveenquiry", JSON.stringify(obj));
    }


});