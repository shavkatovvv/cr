import React, { useState, useEffect } from "react";
import { Card } from "./components/card";

function App() {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch("http://localhost:3600/todos")
            .then((res) => res.json(""))
            .then((data) => {
                setData(data);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <div className="container">
                {data.map((item) => (
                    <Card
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                        refetch={getData}
                    />
                ))}
            </div>
        </>
    );
}

export default App;
