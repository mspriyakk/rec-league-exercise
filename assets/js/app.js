// ../assets/js/app.js

(function(){
  console.log('HELLO REC LEAGUE!')
  var turbo = Turbo({ site_id: '5b19fa1289bd3600145bcf0b' })  

  turbo.fetch('user', null, function(err, data){
    if(err){
      return;
    }
    
    console.log('CURRENT USERS: ' + JSON.stringify(data))

    var users = data.results
    var list = ''
    users.forEach(function(user, i){
      list += '<li>' + user.name + '</li>'
    })
    
    $('#current-users-list').html(list)
  }



  $('#btn-add-user').click(function(event){
    event.preventDefault()
    console.log('ADD USER:')
    var user = {
      name: $('#user-name').val(),
      email: $('#user-email').val()
    }
    
    console.log('ADD USER: ' + JSON.stringify(user))


    turbo.createUser(user, function(err, data){
      if(err){
        alert('Error: ' + err.message)
        return
      }
      
      console.log('USER CREATED: ' + JSON.stringify(data))
    })
    
  })  
  
})()