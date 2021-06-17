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
    if(isNaN(name)== false){
      if(name != undefined || name != null )
      {
      this.name = name;
      }
    }
    else{
      alert("Имя не может быть числом");
    }
  }
}