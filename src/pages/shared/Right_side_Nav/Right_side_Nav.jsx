import React from "react";
import {
    BiLogoGoogle,
    BiLogoGithub,
    BiLogoFacebookCircle,
    BiLogoTwitter,
    BiLogoInstagram,
} from "react-icons/bi";
import img1 from "../../../assets/qZone1.png";
import img2 from "../../../assets/qZone2.png";
import img3 from "../../../assets/qZone3.png";
import bg from "../../../assets/bg.png";

const Right_side_Nav = () => {
    return (
        <div className="">
            <h2 className="">Login With</h2>
            <div className="mx-auto">
                <button className="btn btn-outline flex items-center mx-auto mt-3">
                    <BiLogoGoogle className="text-xl"></BiLogoGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline flex items-center mx-auto mt-3">
                    <BiLogoGithub className="text-xl"></BiLogoGithub>
                    Login with GitHub
                </button>
            </div>
            <div className="mt-5 ">
                <h2 className="mb-5">Find Us on</h2>
                <div className="border p-2">
                    <a className="flex gap-3 items-center mt-3">
                        <BiLogoFacebookCircle className="text-xl"></BiLogoFacebookCircle>
                        facebook
                    </a>
                </div>
                <div className="border p-2">
                    <a className="flex gap-3 items-center mt-3">
                        <BiLogoTwitter className="text-xl"></BiLogoTwitter>
                        Twitter
                    </a>
                </div>
                <div className="border p-2">
                    <a className="flex gap-3 items-center mt-3">
                        <BiLogoInstagram className="text-xl"></BiLogoInstagram>
                        Instagram
                    </a>
                </div>
            </div>
            <div className="mt-8">
                <h1 className="mb-6">Q-Zone</h1>
                <img className="mb-4" src={img1} alt="" />
                <img className="mb-4" src={img2} alt="" />
                <img className="mb-4" src={img3} alt="" />
            </div>
            <div className="mt-10">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            "https://i.ibb.co/qdnmD76/bg.png",
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                            Create an Amazing Newspaper
                            </h1>
                            <p className="mb-5">
                            Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                            </p>
                            <button className="btn btn-primary">
                            Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right_side_Nav;
