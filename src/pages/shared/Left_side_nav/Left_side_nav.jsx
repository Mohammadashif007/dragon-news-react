import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import { AiOutlineCalendar } from "react-icons/ai";

const Left_side_nav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const url = "categories.json";
        const loadCategoryData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setCategories(data);
        };

        loadCategoryData();
    }, []);
    return (
        <div>
            <h1>All Category</h1>
            <div className="my-8">
                {categories.map((category) => (
                    <Link className="block py-3" key={category.id}>
                        {category.name}
                    </Link>
                ))}
            </div>
            <div>
                <div>
                    <img src={img1} alt="" />
                    <p className="mt-5">
                        Bayern Slams Authorities Over Flight Delay to Club World
                        Cup
                    </p>
                    <div className="flex justify-between my-8">
                        <span>Sports</span>
                        <div className="flex items-center gap-3">
                            <AiOutlineCalendar></AiOutlineCalendar>
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img2} alt="" />
                    <p className="mt-5">
                        Bayern Slams Authorities Over Flight Delay to Club World
                        Cup
                    </p>
                    <div className="flex justify-between my-8">
                        <span>Sports</span>
                        <div className="flex items-center gap-3">
                            <AiOutlineCalendar></AiOutlineCalendar>
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img3} alt="" />
                    <p className="mt-5">
                        Bayern Slams Authorities Over Flight Delay to Club World
                        Cup
                    </p>
                    <div className="flex justify-between my-8">
                        <span>Sports</span>
                        <div className="flex items-center gap-3">
                            <AiOutlineCalendar></AiOutlineCalendar>
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left_side_nav;
