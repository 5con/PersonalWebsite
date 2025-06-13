import PaperSheet from '@/componenets/papersheet';

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-x-hidden bg-white font-sans">
            <PaperSheet/>

            <div className="relative z-10 p-8 max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">My Notebook</h1>
                <p className="mb-6">
                    Welcome to my personal site. It’s styled like a piece of notebook paper with lines, a red margin, and even hole punches!
                </p>
                <img
                    src="/images/avatar.png"
                    alt="Sketch"
                    className="w-40 h-auto rounded-lg border border-black"
                />
            </div>
        </div>
    );
}
