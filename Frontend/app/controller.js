app.controller("AppController", function ($scope, AppService) {


    $scope.Service = "Select A Service";

    $scope.showModal = false;

    $scope.SaveEnquiry = function () {
        const obj = {
            UserName: $scope.Name,
            UserEmail: $scope.UserEmail,
            ServiceName: $scope.Service,
            Message: $scope.Message
        }

        if (obj.UserEmail == undefined || obj.UserEmail == "") {
            alert("Please Enter Correct Email");

        }
        else {
            AppService.saveEnquiry(obj).then(function (response) {
                if (response.data.Message == "Success") {
                    alert("Enquiry Submited Successfully");
                    $scope.Name = "";
                    $scope.UserEmail = "";
                    $scope.Service = "Select A Service";
                    $scope.Message = "";
                }
                else {
                    alert("Enquiry Submission Failed");
                }
            }).catch(function (err) {
                if (err)
                    console.log(err)
            })
        }

        console.log(obj);
    }

//    let typed =  new Typed('.typed', {
//         strings: ['First Sentence', 'Second Sentence'],
//         loop: true,
//         typeSpeed: 100,
//         backSpeed: 50,
//         backDelay: 2000
//     });
    
  
});