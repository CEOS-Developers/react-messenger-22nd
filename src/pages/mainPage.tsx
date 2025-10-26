import HomeHeader from "@/components/home/HomeHeader";
import HomeBody from "@/components/home/HomeBody";
import NavBar from "@/components/NavBar";
import React from "react";


export default function HomePage() {

    return (
        <div className="min-h-screen bg-slate-200 flex items-start justify-center p-6">
            <div className="w-[375px] h-[812px] bg-white flex-col">
                <HomeHeader />
                <HomeBody />

            </div>
        </div>
    );
}
