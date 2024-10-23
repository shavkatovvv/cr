import React from "react";

export const Card = ({ id, title, description, refetch }) => {
    const deleteItem = () => {
        fetch(`http://localhost:3600/todos/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                refetch();
            });
    };

    return (
        <div className="rounded-[20px] bg-slate-600 p-[20px] mb-[20px] text-[20px] font-medium text-white">
            <p>{title}</p>
            <p>{description}</p>
            <button
                onClick={deleteItem}
                className="text-[20px] font-medium text-white bg-red-500 p-[8px] rounded-[10px] mt-[5px] "
            >
                DELETE
            </button>
        </div>
    );
};
