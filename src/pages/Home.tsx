import Header from "@/components/header/Header";

const Home = () => {
    return (
        <div>
            <Header 
            type="home"
             />
             <button className="mt-10 ml-10 px-4 py-2 bg-green-3 text-white rounded">
              <a href="https://react-messenger-22nd-five.vercel.app/chatroom/1" target="_blank" rel="noopener noreferrer">채팅방 이동</a>
             </button>
        </div>
    );
}

export default Home;