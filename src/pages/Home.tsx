import Header from "@/components/header/Header";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <Header 
            type="home"
             />
             <Link to="/chatroom/1">
                <button className="mt-8 ml-27 px-6 py-3 bg-green-3 text-white rounded-lg shadow-md hover:bg-green-4 transition-colors cursor-pointer">
                    1:1 채팅창 입장 버튼
                </button>
            </Link>
            <Link to="/chatroom/2">
                <button className="mt-8 ml-26 px-6 py-3 bg-green-3 text-white rounded-lg shadow-md hover:bg-green-4 transition-colors cursor-pointer">
                    단체 채팅방 입장 버튼
                </button>
            </Link>
        </div>
    );  
}

export default Home;