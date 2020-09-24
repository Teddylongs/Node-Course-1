console.log('Clinet side javascrip file is loaded!')

fetch('http://localhost:8000/weatheraddress=Barcelona').then((res) => {
    
        res.json().then((data) => {
            if (data.error){
                console.log(data.error)
            }
        })
    
})