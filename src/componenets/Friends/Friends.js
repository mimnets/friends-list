import React from 'react';


const Friends = (props) => {
    const {name, gender, picture} = props.friend;
    console.log(props.friend);
    return (
        <div>
            <h1>My Friend Name : {name.first}</h1>
            <h1>My Friend Gender : {gender}</h1>
            <h1>My Friend Photo : {<img src={picture.medium} alt=""/>}</h1>
        </div>
    );
};

export default Friends;