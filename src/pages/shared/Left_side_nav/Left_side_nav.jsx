import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
            <div className="mt-8">
                {categories.map((category) => (
                    <Link className="block py-3" key={category.id}>
                        {category.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Left_side_nav;
