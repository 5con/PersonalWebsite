import React from 'react';

interface PaperSheetProps {
    lineCount?: number;
    lineSpacing?: number; // px between lines
}

const PaperSheet: React.FC<PaperSheetProps> = ({
                                                   lineCount = 40,
                                                   lineSpacing = 28,
                                               }) => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none bg-white">
            {/* Horizontal blue lines */}
            {Array.from({ length: lineCount }).map((_, index) => (
                <div
                    key={`line-${index}`}
                    className="w-full border-t border-blue-200"
                    style={{
                        position: 'absolute',
                        top: `${index * lineSpacing}px`,
                    }}
                />
            ))}

            {/* Red left margin line */}
            <div className="fixed top-0 bottom-0 left-16 w-[2px] bg-red-400" />

            {/* Hole punches */}
            {Array.from({ length: 7 }).map((_, index) => (
                <div
                    key={`hole-${index}`}
                    className="absolute left-4 w-4 h-4 rounded-full bg-neutral-300 shadow-inner"
                    style={{
                        top: `${8 + index * 160}px`, // spacing between holes
                    }}
                />
            ))}
        </div>
    );
};

export default PaperSheet;
