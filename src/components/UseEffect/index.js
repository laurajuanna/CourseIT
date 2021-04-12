import React, {useEffect, useState} from 'react'

function UseEffect() {

    const [user, setUser] = useState({});

    useEffect(() => {
        fetchData();
    }, []);
    
    async function fetchData(){
        const getData = await fetch("https://api.github.com/users/laurajuanna");
        const dataToJson = await getData.json();
        setUser(dataToJson);
        //console.log(dataToJson)
    }
      
    return (
        <div>
            <h5 className="mt-2">Haciendo fetch de la API de Github con UseEffect</h5>
            {user && 
            <div className="card bg-light mb-3 w-75">
                <div className="card-body d-flex justify-content-cente align-items-center">
                    <div>
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.bio}</p>
                        <a href={user.html_url} rel="noopener noreferrer" target="_blank">Ir a Github</a>
                    </div>
                    <div style={{marginLeft: "1.5rem"}}>
                        <img className="avatar" src={user.avatar_url} alt='avatar' />
                    </div>                    
                </div>
            </div>}                      
        </div>
    )
}

export default UseEffect;
