app.controller("AppController", ['$scope', function ($scope, AppService) {


    // Tyeped JS start
        var options = {
        strings: ["Web Development", "App Development", "Digital Marketing", "Graphics Designing"],
        typeSpeed: 150,
        loop: true
    };

    var typed = new Typed('.typing-element', options);
    // Typed JS end



    

    // Service Enquiry form controller start
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


     // Service Enquiry form controller end


     // Testimonial carousel start
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Testimonial carousel end




}]);
