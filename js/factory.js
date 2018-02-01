app.factory("fakedataFactory",function(){

  obj={};

  obj.getFakeData = function(){

    let fakeData = [
  	{
      "id": 1,
  		"firstname": "Talon",
  		"lastname": "Cain"
  	},
  	{
  		"id": 41,
  		"firstname": "Wallace",
  		"lastname": "Vaughn"
  	},
  	{
  		"id": 30,
  		"firstname": "Austin",
  		"lastname": "Wilkins"
  	},
  	{
  		"id": 91,
  		"firstname": "Omar",
  		"lastname": "Mcleod"
  	},
  	{
  		"id": 72,
  		"firstname": "Colby",
  		"lastname": "Kirk"
  	},
  	{
  		"id": 8,
  		"firstname": "Gareth",
  		"lastname": "Miranda"
  	},
  	{
  		"id": 19,
  		"firstname": "Richard",
  		"lastname": "Booker"
  	},
  	{
  		"id": 65,
  		"firstname": "Ferris",
  		"lastname": "Wyatt"
  	},
  	{
  		"id": 26,
  		"firstname": "Austin",
  		"lastname": "Roth"
  	},
  ];

  return fakeData;

  };
  return obj;

});
