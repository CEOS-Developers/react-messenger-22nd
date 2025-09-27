import Home from '@/assets/svgs/navbar/home.svg';
// import HomeFill from '@/assets/svgs/navbar/home-fill.svg';
// import Chat from '@/assets/svgs/navbar/chat.svg';
import ChatFill from '@/assets/svgs/navbar/chat-fill.svg';
import Call from '@/assets/svgs/navbar/call.svg';

const Navbar = () => {
    return (
        <div className="w-full h-[73px] px-[25px] py-4 bg-gray-0 flex justify-center items-center border-t border-gray-3">
            <div className='flex flex-col flex-1 justify-center items-center gap-1 align-stretch'>
                <img src={Home} alt='home' className='cursor-pointer'/>
                <div className='text-body3-m1 text-gray-7'>홈</div>
            </div>
            <div className='flex flex-col flex-1 justify-center items-center gap-1 align-stretch'>
                <img src={ChatFill} alt='chat'className='cursor-pointer'/>
                <div className='text-body3-m1 text-gray-7'>채팅</div>
            </div>
            <div className='flex flex-col flex-1 justify-center items-center gap-1 align-stretch'>
                <img src={Call} alt='call'className='cursor-pointer'/>
                <div className='text-body3-m1 text-gray-7'>통화</div>
            </div>
        </div>
    );
}

export default Navbar;