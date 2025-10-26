import { useEffect, useState } from "react";

const bus = new EventTarget();
const mEVT = "MediaFriends:toggle";
const sEVT = "SalesFriends:toggle";
const pEVT = "MyProfile:toggle";

export function toggleMediaFriends() {
    bus.dispatchEvent(new Event(mEVT));
}

// Hook each consumer can use to react to toggles
export function useMediaFriendsOpen(defaultOpen = true) {
    const [open, setOpen] = useState(defaultOpen);
    useEffect(() => {
        const onToggle = () => setOpen((o) => !o);
        bus.addEventListener(mEVT, onToggle);
        return () => bus.removeEventListener(mEVT, onToggle);
    }, []);
    return open;
}
export function toggleSalesFriends() {
    bus.dispatchEvent(new Event(sEVT));
}

export function useSalesFriendsOpen(defaultOpen = true) {
    const [open, setOpen] = useState(defaultOpen);
    useEffect(() => {
        const onToggle = () => setOpen((o) => !o);
        bus.addEventListener(sEVT, onToggle);
        return () => bus.removeEventListener(sEVT, onToggle);
    }, []);
    return open;
}
export function toggleMyProfile() {
    bus.dispatchEvent(new Event(pEVT));
}
export function useMyProfileOpen(defaultOpen = true) {
    const [open, setOpen] = useState(defaultOpen);
    useEffect(() => {
        const onToggle = () => setOpen((o) => !o);
        bus.addEventListener(pEVT, onToggle);
        return () => bus.removeEventListener(pEVT, onToggle);
    }, [])
    return open;
}
