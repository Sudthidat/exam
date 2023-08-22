let users =[]

    let userA =
    {
        "Pet":"Cat",
        "Name":"Kong",
        "color":"Tabby cat"
        
    }
    let userB =
    {
        "Pet":"Dog",
        "Name":"Koon",
        "color":"Black"
        
        
    }
    let userC =
    {
        "Pet":"Cat",
        "Name":"Kang",
        "color":"Black"
        
    }

    users.push(userA)
    users.push(userB)
    users.push(userC)


    console.log('\n** Before Delete **\n')

    for(let i=0 ; i<users.length ; i++){
        console.log('Pet :' +users[i].Pet + ' , ' + 'Name :' +users[i].Name + ' , ' + 'color :' +users[i].color)
    }

  

    delete users.splice(1,1)
    console.log('\n** After Delete **\n')

    for(let i=0 ; i<users.length ; i++){
        console.log('Pet :' +users[i].Pet + ' , ' + 'Name :' +users[i].Name + ' , ' + 'color :' +users[i].color)
    }
