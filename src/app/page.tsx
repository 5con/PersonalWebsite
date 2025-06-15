import PaperSheet from '@/componenets/papersheet';
import Header from "@/componenets/header";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-sans">
            {/* Background component */}
            <div className="absolute inset-0 z-0">
                <PaperSheet />
            </div>

            {/* Foreground content */}
            <div className="relative z-10">
                <Header title="My Site Title" avatarUrl="/images/avatar.png" />
            </div>
        </div>
    );
}

