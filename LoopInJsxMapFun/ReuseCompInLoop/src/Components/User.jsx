
function User({user}){
    return(
        <div style={{
            border:"4px solid green",
            borderRadius:"20px",
            width:"180px", 
            height:"100px",
            paddingLeft:"90px",
            margin:"5px", 
            lineHeight:"8px"
        }}>
            <h3>Id:<span style={{color:"green"}}>{user.id}</span></h3>
            <h3>Name:<span style={{color:"green"}}>{user.name}</span></h3>
            <h3>Age:<span style={{color:"green"}}>{user.age}</span></h3>
        </div> 
    )
}

export default User