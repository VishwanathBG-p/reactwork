var notes=[]
var redrawNotes=function(){
    var ul=document.createElement('ul')
    ul.setAttribute('class','notes')

    notes.forEach(function(note){
        var li=document.createElement('li')
        ul.appendChild(li)
        li.appendChild(document.createTextNode(note.content))
    })

    var notesElement=document.getElementById("notes")
    if(notesElement.hasChildNodes()){
        notesElement.removeChild(notesElement.childNodes[0]);
    }
    notesElement.appendChild(ul)
}

var xhttp = new XMLHttpRequest()

xhttp.onreadystatechange=function(){
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            notes = JSON.parse(this.responseText)
            redrawNotes()
        }
    }
}

xhttp.open("GET",'/data.json',true)
xhttp.send()

var sendToServer = function(note){
    var xhttpForPost = new XMLHttpRequest()
    xhttpForPost.onreadystatechange=function(){
        if(this.readyState==4&&this.status==201){
            console.log(this.responseText)
        }
    }
    xhttpForPost.open("POST",'/new_note_spa',true)
    xhttpForPost.setRequestHeader("Content-type","application/json") 
    xhttpForPost.send(JSON.stringify(note));
}

window.onload = function(e){
    var form=document.getElementById("notes_form")
    console.log(form);
    form.onsubmit=function(e){
        e.preventDefault()

        var note={
            content:e.target.elements[0].value,
            date:new Date()
        }
        console.log(note);
        notes.push(note);
        console.log(notes);
        e.target.elements[0].value="";
        redrawNotes()
        sendToServer(note)
    }
}
/*var xhttp = new XMLHttpRequest()
  
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const data = JSON.parse(this.responseText)
    console.log(data)

    var ul = document.createElement('ul')
    ul.setAttribute('class', 'notes')

    data.forEach(function(note){
      var li = document.createElement('li')
      
      ul.appendChild(li);
      li.appendChild(document.createTextNode(note.content))
    })

    document.getElementById("notes").appendChild(ul)
  }
}

xhttp.open("GET", "/data.json", true)
xhttp.send()*/