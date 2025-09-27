import Search from '@/assets/svgs/chatlist/search.svg';

const Searchbar = () => {
    return (
        <div className="w-full h-[53px] px-5 py-1">
            <div className="flex items-start w-full h-[45px] px-4 py-3 bg-gray-2 rounded-[10px]">
                <img src={Search} alt="검색" className="mr-2"/>
                <input 
                    type="text" 
                    placeholder="검색" 
                    className="w-full h-full bg-gray-2 text-body2-m placeholder:text-gray-5 focus:outline-none"
                />
            </div>
        </div>
    )
}

export default Searchbar;