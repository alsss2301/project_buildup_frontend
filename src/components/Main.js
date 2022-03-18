import React, { useState } from "react";

function Main() {
    const {myquest, SetMyquest} = useState("");

    return (
        <div>
            <h2>나의 퀘스트</h2>   
            <h2>챌린지 리스트</h2>
            <h2>나의 챌린지 리스트</h2>
        </div>
    );
}

export default Main;
