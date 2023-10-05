import React from "react";
import Marquee from "react-fast-marquee";

const Breaking_News = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary">Latest</button>
            <Marquee>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default Breaking_News;
