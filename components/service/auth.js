const baseUrl = 'https://celularkit.mx/api/clients/'


export const Signup = (user)=>{
    return fetch(baseUrl + 'register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res=>{
        console.log(res)
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    
};