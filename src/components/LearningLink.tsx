import { FaLinkedin, FaGlobe, FaFileAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

interface LearningLinkProps {
    text: string;
    url: string;
    type: string;
}

export const LearningLink = ({ text, url, type }: LearningLinkProps) => {
    const getIcon = () => {
        switch (type) {
            case 'leetcode':
                return <SiLeetcode className="w-3 h-3" />;
            case 'linkedin':
                return <FaLinkedin className="w-3 h-3" />;
            case 'website':
                return <FaGlobe className="w-3 h-3" />;
            case 'document':
                return <FaFileAlt className="w-3 h-3" />;
            default:
                return <FaGlobe className="w-3 h-3" />;
        }
    };

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 
                bg-gray-800/80 hover:bg-gray-700/80
                text-xs text-gray-300 hover:text-white
                rounded-full ring-1 ring-gray-700/50 backdrop-blur-sm
                transition-all duration-300"
        >
            {getIcon()}
            <span>{text}</span>
        </a>
    );
}; 