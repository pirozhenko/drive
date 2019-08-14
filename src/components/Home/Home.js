import React from 'react';

const Home = (props) => {
    console.log(props);
    return (
        <>
        <h1>Home</h1>
        {props.books.map((item,idx) => {
            return <div key={idx}>{item.fileName}</div>
        })}
        </>
    );
}

export default Home;