const resalt = await fetch('/register',{
    method: 'GET',
})



document.querySelector('.userReg').addEventListener('click', async (event) =>{
    event.preventDefault();
    const res = event.target.className
    const result = await fetch(`/user/${res.id}`,{
        method:'POST',
        body: JSON.stringify(res),
        headers: { 'Content-Type': 'application/json' },
    })
    endRes = await result.json()
})
