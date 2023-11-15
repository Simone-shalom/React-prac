//implicit explicit binding
//this context 

var obj = {
    name: 'Simone',
    display: function(){
      console.log(`${this.name}`)
    }
  }
  
  
  var obj2= {
    name: "Szymon"
  }
  
  obj.display.call(obj2)