import Header from "@/components/header/Header";
import { useNavigate } from "react-router-dom";

const ChatRoom = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header 
                type="chatroom" 
                title="이름" 
                onBack={() => navigate(-1)}
            />
        </div>
    );
}

export default ChatRoom;