function helloGit(){
  alert("Hello GitHub");
}

let user = {
  age : 45,
  name : "Оля",
  ["Место работы"] : "Нита фарм",
  getName : function(){
    return this.name;
  },
  setName : function(name){
    if(isNaN(name)== true){
      if(name != undefined || name != null )
      {
      this.name = name;
      }
    }
    else{
      alert("Имя не может быть числом");
    }
  },
  getAge : function(){
    return this.age;
  },
  setAge : function(age){
    if(isNaN(age)==false){
      this.age = age;
    }
  }
}

alert("Установим возраст и имя");
alert("Имя и возраст по умолчанию - " + user.name + " " + user.age);

user.setName("Моя Оля");
user.setAge(45);
alert("Имя - " + user.getName() + " " + " возраст " + user.getAge());