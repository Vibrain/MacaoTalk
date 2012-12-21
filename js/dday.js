function dDayController($scope){
    var today = new Date();   
    
    $scope.days = [{
                 /*   player1 : 640; */
                   }];
    $scope.addPlayer1 = function(){
        $scope.days.push({player1 : 640});        
    };
    $scope.addPlayer2 = function(){
        $scope.days.push({player2 : 640});        
    };    
    $scope.addPlayer3 = function(){
        $scope.days.push({player3 : 640});        
    };    
    $scope.addPlayer4 = function(){
        $scope.days.push({player4 : 640});        
    };
    $scope.addPlayer5 = function(){
        $scope.days.push({player5 : 640});        
    };
    
    $scope.totalleft = function(){
        var rst;
        angular.forEach($scope.days, function(day){
           rst = (day.theDay.getTime() - day.startDay.getTime())/24/60/60/1000;   
        });
        return rst;   
    };
    
    $scope.leftover = function(){
        var rst;
        angular.forEach($scope.days, function(day){
           rst = (day.theDay.getTime() - today.getTime())/24/60/60/1000;   
        });
        return rst;          
    };
    
    $scope.dayleftover = function(){
        return Math.floor($scope.leftover());
    };
    
    $scope.hourunit = function(){
        return Math.floor(($scope.leftover() - Math.floor($scope.leftover()))*24);        
    };
    
    $scope.d_day_text = function(){
        return "복무일이 " + $scope.dayleftover() + "일 남으셨습니다.";
    };
    
    $scope.d_day_perc = function(){
        return Math.floor((1-$scope.leftover()/$scope.totalleft())*100)+"%";
    };
    
    $scope.vacations = [
      {reason:'3차 정기', period:'9', ktx:'ktx-not'}        
    ];
    
    $scope.cnt = function(){
        return $scope.vacations.length;
    };
    
    $scope.addToDo = function(){   
        var isKTX = "ktx-not",
            ktx_identity = ["포상", "휴가", "표창"],
            ktx_dis = ["정기", "외박"],
            buffer = $scope.addReason;
        for(var i = 0; i < ktx_identity.length; i++){
            if(buffer.indexOf(ktx_identity[i])!=-1) isKTX = "ktx-avail";
        }
        for(var j = 0; j < ktx_dis.length; j++){
            if(buffer.indexOf(ktx_dis[i])!=-1) isKTX = "ktx-not";
        }        
        $scope.vacations.push({reason:$scope.addReason, period:$scope.addPeriod, ktx:isKTX });
        $scope.addReason= '';
        $scope.addPeriod= '';
    };   
    
    $scope.in_army_day = function(){
        var army_day = $scope.dayleftover();
        angular.forEach($scope.vacations, function(vac){
            army_day -= parseInt(vac.period);
        });
        return army_day; 
    };
    
    $scope.in_army_day_perc = function(){
        return Math.floor((1-$scope.in_army_day()/$scope.totalleft())*100)+"%";
    }
    $scope.delete_data = function(){
           
    }
}