function Coder(nombre, url){
    this.nombre = nombre;
    this.url = url;
}


window.addEventListener("load", function(){
    var coderBox = document.createElement("section");
    coderBox.classList.add("coder-box");
    var mainContainer = document.createElement("section");
    mainContainer.classList.add("main-container");
    var h1 = document.createElement("h1");
    h1.append("Nuestras coders");
    var span = document.createElement("span");
    mainContainer.append(h1);
    mainContainer.append(span);
    
    var coderList = [new Coder("Arantza Burga", "coder1.jpg"), new Coder("Daguiana Revoredo", "coder2.jpg"), new Coder("Elizabeth Condori", "coder3.jpg"), new Coder("Grecia Rayme", "coder4.jpg"), new Coder("Janine Vega", "coder5.jpg"), new Coder("Michelle More", "coder6.jpg")];

    coderList.forEach(function(e){
      var docFragment = document.createDocumentFragment();
      var figure = document.createElement("figure");
      var img = new Image(300, 300);
      var figCaption = document.createElement("figcaption");
      figure.classList.add("coder");
      img.src = "assets/images/" + e.url;
      figCaption.append(e.nombre);
      figure.append(img);
      figure.append(figCaption);
      docFragment.append(figure);
      coderBox.append(docFragment);
    });
    
    document.body.append(mainContainer);
    document.body.append(coderBox);
    

});
