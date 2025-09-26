// src/app/BottomIndicator.tsx
import { Icon } from '@/components/Icon';

export default function BottomIndicator() {
  return (
    <div className="grid h-[32px] w-full place-items-center">
      <Icon name="iphone-status-bar-lower" className="h-[5px] w-[134px]" alt="home handle" />
    </div>
  );
}
