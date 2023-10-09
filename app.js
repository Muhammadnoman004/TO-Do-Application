var getul = document.getElementById('ul')

function push(){
    var a = document.getElementById("inp")
    var li = document.createElement('li')
    var litext = document.createTextNode(a.value)
    li.appendChild(litext)
    getul.appendChild(li)
    a.value = ''
    var deletebtn = document.createElement('button')
    var deletebtnTeaxt = document.createTextNode('Delete')
    deletebtn.appendChild(deletebtnTeaxt)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick','delet(this)')
    var eidtbtn = document.createElement('button')
    var eidtbtnText = document.createTextNode('Eidt')
    eidtbtn.appendChild(eidtbtnText)
    li.appendChild(eidtbtn)
    eidtbtn.setAttribute('onclick','edit(this)')

    deletebtn.setAttribute('class','btn btn-danger db')
    eidtbtn.setAttribute('class','btn btn-warning db')

    li.setAttribute('class','lii')
    

}

function delet(e){
    
    e.parentNode.remove()
}

function edit(e){

    var userEdit = prompt('Enter Edit Value',e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = userEdit


}




function del(){
    getul.innerHTML = ''
}





function signup(){
   var sinemail = document.getElementById('upemail').value
   var sinpass = document.getElementById('uppass').value
   localStorage.setItem('Email',sinemail)
   localStorage.setItem('Password',sinpass)
    if(sinemail == '' && sinpass == ''){

    document.getElementById('para').innerHTML = 'Please Fill The Form ' 

   }
   else if(sinemail == ''){
       document.getElementById('para').innerHTML = 'Please Enter The Email' 
   }
   else if(sinpass == ''){

    document.getElementById('para').innerHTML = 'Please Enter The Password'   

   }
   else{
       
       location.href = './sign In.html'
   }
   


}


function login(){
    var logemail = document.getElementById('inemail').value
    var logpass = document.getElementById('inpass').value

    if(logemail == '' || logpass == ''){
        document.getElementById('para').innerHTML = 'Please fill out all fields' 
    }
  

    else if(localStorage.getItem('Email') == logemail && localStorage.getItem('Password') == logpass){
        alert('Welcome')
        location.href = './To-Do.html'
    }
    else{
        alert('Your Email / Password Is Wrong So Please Sign Up Again')
        location.href = './sign Up.html'
    }
 
 
 }





























