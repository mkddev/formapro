/*jslint plusplus : true ,evil : true*/
/*global console,angular*/

var app = angular.module("app", ["ngRoute","chart.js"]);

app.config(function ($routeProvider) {
    
    "use strict";
    
    $routeProvider.when("/", { templateUrl : "file/aceuil.html",
                               controller : "liste"
                             })
                  .when("/contact", { templateUrl : "file/contact.html"})
                  .when("/help", { templateUrl : "file/help.html"})
                  .otherwise({ redirectTo: "/" });
    
});

app.factory("factoryListes" , function () {
    
    var factory = {
        
        listes : [
  {
    "id": "58960bc21b2868e62ee532f0",
    "age": 36,
    "nom": "Viola",
    "prenom": "Christian",
    "email": "viola.christian@undefined.co.uk",
    "phone": "+216 (829) 567-3642"
  },
  {
    "id": "58960bc27e7d1b3e4c60be04",
    "age": 27,
    "nom": "Karina",
    "prenom": "Franklin",
    "email": "karina.franklin@undefined.biz",
    "phone": "+216 (907) 530-2520"
  },
  {
    "id": "58960bc21782cf606ff85907",
    "age": 29,
    "nom": "Byrd",
    "prenom": "Ferrell",
    "email": "byrd.ferrell@undefined.info",
    "phone": "+216 (922) 402-3357"
  },
  {
    "id": "58960bc20e016d552df110a6",
    "age": 35,
    "nom": "Tammi",
    "prenom": "Jacobson",
    "email": "tammi.jacobson@undefined.io",
    "phone": "+216 (903) 469-2247"
  },
  {
    "id": "58960bc2073e5ed688063453",
    "age": 25,
    "nom": "Leola",
    "prenom": "Curry",
    "email": "leola.curry@undefined.com",
    "phone": "+216 (998) 532-2909"
  },
  {
    "id": "58960bc2bf6d6785838909d3",
    "age": 31,
    "nom": "Nixon",
    "prenom": "Romero",
    "email": "nixon.romero@undefined.us",
    "phone": "+216 (849) 555-2131"
  },
  {
    "id": "58960bc2bfbf24e45c4e7c34",
    "age": 25,
    "nom": "Brigitte",
    "prenom": "Poole",
    "email": "brigitte.poole@undefined.net",
    "phone": "+216 (978) 542-3920"
  },
  {
    "id": "58960bc279f130996871243a",
    "age": 29,
    "nom": "Delaney",
    "prenom": "Lindsay",
    "email": "delaney.lindsay@undefined.tv",
    "phone": "+216 (883) 400-3338"
  },
  {
    "id": "58960bc2f44d794a275b7f0c",
    "age": 21,
    "nom": "Sutton",
    "prenom": "Chambers",
    "email": "sutton.chambers@undefined.biz",
    "phone": "+216 (808) 475-2065"
  },
  {
    "id": "58960bc213d7d2de9e761564",
    "age": 27,
    "nom": "Patty",
    "prenom": "Padilla",
    "email": "patty.padilla@undefined.me",
    "phone": "+216 (939) 542-3549"
  },
  {
    "id": "58960bc2c5997e7f4bf3bcae",
    "age": 27,
    "nom": "Lorrie",
    "prenom": "Horn",
    "email": "lorrie.horn@undefined.org",
    "phone": "+216 (954) 560-3046"
  },
  {
    "id": "58960bc218321fbed2dd8b4a",
    "age": 38,
    "nom": "Lyons",
    "prenom": "Oconnor",
    "email": "lyons.oconnor@undefined.name",
    "phone": "+216 (879) 436-3060"
  },
  {
    "id": "58960bc286e0fa3856da98a7",
    "age": 20,
    "nom": "Jackie",
    "prenom": "Dixon",
    "email": "jackie.dixon@undefined.co.uk",
    "phone": "+216 (891) 447-2803"
  },
  {
    "id": "58960bc2bf287e41416c9f20",
    "age": 29,
    "nom": "Juanita",
    "prenom": "Sargent",
    "email": "juanita.sargent@undefined.biz",
    "phone": "+216 (828) 514-3777"
  },
  {
    "id": "58960bc2ffc3cd3e0451785d",
    "age": 25,
    "nom": "Sallie",
    "prenom": "Combs",
    "email": "sallie.combs@undefined.info",
    "phone": "+216 (833) 436-2289"
  },
  {
    "id": "58960bc2b5c68e55ee1da8fc",
    "age": 31,
    "nom": "Annette",
    "prenom": "Avery",
    "email": "annette.avery@undefined.io",
    "phone": "+216 (818) 443-3996"
  },
  {
    "id": "58960bc244b8637957f5e505",
    "age": 35,
    "nom": "Maxwell",
    "prenom": "Wise",
    "email": "maxwell.wise@undefined.com",
    "phone": "+216 (900) 529-3895"
  },
  {
    "id": "58960bc2f3bd8324eb1acd7a",
    "age": 28,
    "nom": "Acevedo",
    "prenom": "Haney",
    "email": "acevedo.haney@undefined.us",
    "phone": "+216 (805) 422-2377"
  },
  {
    "id": "58960bc25886af5133bb747a",
    "age": 23,
    "nom": "Rivas",
    "prenom": "Mckee",
    "email": "rivas.mckee@undefined.net",
    "phone": "+216 (962) 573-2338"
  },
  {
    "id": "58960bc2af4441de7a691206",
    "age": 36,
    "nom": "Koch",
    "prenom": "Gates",
    "email": "koch.gates@undefined.tv",
    "phone": "+216 (909) 521-3964"
  }
],
        getListes : function() {
            return factory.listes;
        },
        getItemListes : function(id) {
            return (id <= factory.listes.length) ? factory.listes[id-1] : null;
        }
        
    }
    
    return factory;
    
});

app.controller("liste",function ($scope,factoryListes,$timeout) {
    
    $scope.listes = factoryListes.getListes();
    
    $scope.chercher = function() {
       
       if(($scope.query >= 1) && ($scope.query <= $scope.listes.length))  {
            $scope.loding = true;
           
            $timeout(function () {
                $scope.itemListes = factoryListes.getItemListes($scope.query);
                $scope.loding = false;
                $scope.showArticle = true;
                $scope.showArticleErreur = false;
            },500);
            
            /*$scope.errorArticle = "tapez un nombre dans le zonede formulaire pour lancer l'operation de recherche";*/
            
           
       }else {
           $scope.showArticle = false;
           $scope.errorArticle = "ce nombre  supérieurs ou inférieurs à le nombre d'article choisir un nombre entre 1 et "+$scope.listes.length;
           $scope.showArticleErreur = true;
       }
    };
    
    console.log($scope.listes);
    
});


// Optional configuration 
/*app.config(['ChartJsProvider', function (ChartJsProvider) {
    // Configure all charts 
    ChartJsProvider.setOptions({
      chartColors: ['#FF5252', '#FF8A80'],
      responsive: false
    });
    // Configure all line charts 
    ChartJsProvider.setOptions('line', {
      showLines: false
    });
  }]);*/
app.controller("statistique", ['$scope', '$timeout', function ($scope, $timeout) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  
  // Simulate async data update 
  $timeout(function () {
    $scope.data = [
      [28, 48, 40, 19, 86, 27, 90],
      [65, 59, 80, 81, 56, 55, 40]
    ];
  }, 3000);
    
}]);