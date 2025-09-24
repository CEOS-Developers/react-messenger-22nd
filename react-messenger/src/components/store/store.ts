import {create} from "zustand";

//상태(store) 정의
const useStore = create((set) => ({
	count: 0,
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
}));

export default useStore;
출처: https://ldd6cr-adness.tistory.com/297 [🥔감자의 오묘한 개발🥔:티스토리]