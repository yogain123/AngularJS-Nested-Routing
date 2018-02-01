app.factory("fakedataFactory",function(){

  obj={};

  obj.getFakeData = function(){

    let fakeData = [
  	{
      "id": 1,
  		"name": "Big Basket",
  		"location": "Delhi"
  	},
  	{
  		"id": 2,
  		"name": "PayTm",
  		"location": "Bangalore"
  	},
  	{
  		"id": 3,
  		"name": "Jabong",
  		"location": "Mumbai"
  	},
  	{
  		"id": 4,
  		"name": "Fortis",
  		"location": "Bangalore"
  	},
  ];

  return fakeData;

  };
  return obj;

});
