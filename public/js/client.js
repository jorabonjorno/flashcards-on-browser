// const resalt = await fetch('/register',{
//     method: 'GET',
// })

document.querySelector('.regForm').addEventListener('submit', async (event) =>{
    event.preventDefault();
    const login = event.target.exampleInputLogin1.value
    // console.log(login)
    const password = event.target.exampleInputPassword1.value
    // console.log(password)
    const email = event.target.exampleInputEmail1.value
    // console.log(email)
    let obj = {login, password, email}
    const result = await fetch(`/user`,{
        method:'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    })
    endRes = await result
    console.log(endRes)
    if(endRes.statusText === 'OK'){
        window.location.href = '/themes'
    }
})

document.querySelector('.idform').addEventListener('submit', async (event) =>{
    event.preventDefault();
    const answer = event.target.exampleInputLogin1.value
    const result = await fetch(`/themes/${id}`,{
        method:'POST',
        body: JSON.stringify(answer),
        headers: { 'Content-Type': 'application/json' },
    })
    // endRes = await result
    // console.log(endRes)
    // if(endRes.statusText === 'OK'){
    //     window.location.href = '/themes'
    // }
})
