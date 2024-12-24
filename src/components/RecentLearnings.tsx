import { useState } from 'react';
import { useLearnings } from '../hooks/useLearnings';
import { SiLeetcode } from 'react-icons/si';
import { FaLinkedin, FaGlobe } from 'react-icons/fa';

export function RecentLearnings() {
    const [expandedLearnings, setExpandedLearnings] = useState<number[]>([]);
    const {
        data,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage
    } = useLearnings();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-20">
                <p className="text-red-400">Error loading learnings</p>
            </div>
        );
    }

    const allLearnings = data?.pages.flatMap(page => page.learnings) ?? [];
    const totalLearnings = data?.pages[0]?.total ?? 0;
    const remainingCount = totalLearnings - allLearnings.length;

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allLearnings.map((learning, index) => (
                    <div
                        key={learning.id}
                        className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 
                        hover:bg-gray-700/50 transition-all duration-300
                        motion-safe:animate-fadeInUp"
                        style={{ animationDelay: `${150 * index}ms` }}
                    >
                        <div className="relative space-y-4">
                            <p className={`text-sm text-gray-300 leading-relaxed
                              ${expandedLearnings.includes(learning.id) ? '' : 'line-clamp-2'}`}>
                                {learning.content}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className="text-xs text-gray-500">
                                    {new Date(learning.date).toLocaleDateString('en-US', {
                                        weekday: 'short',
                                        month: 'short',
                                        day: 'numeric',
                                        timeZone: 'UTC'
                                    })}
                                </span>
                                {learning.content.length > 100 && (
                                    <button
                                        onClick={() => setExpandedLearnings(prev =>
                                            prev.includes(learning.id)
                                                ? prev.filter(id => id !== learning.id)
                                                : [...prev, learning.id]
                                        )}
                                        className="text-xs text-blue-400/90 hover:text-blue-300
                                transition-colors duration-300"
                                    >
                                        {expandedLearnings.includes(learning.id) ? 'See less' : 'See more'}
                                    </button>
                                )}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                {learning.tags?.length && (
                                    <div className="flex flex-wrap gap-2">
                                        {learning.tags.map(tag => (
                                            <span
                                                key={tag}
                                                className="text-xs px-2 py-0.5 bg-gray-900/50 text-gray-400 
                                rounded-full ring-1 ring-gray-800 backdrop-blur-sm"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {learning.links?.map(link => (
                                    <a
                                        key={link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 
                            bg-gray-800/80 hover:bg-gray-700/80
                            text-xs text-gray-300 hover:text-white
                            rounded-full ring-1 ring-gray-700/50 backdrop-blur-sm
                            transition-all duration-300"
                                    >
                                        {link.type === 'leetcode' && <SiLeetcode className="w-3 h-3" />}
                                        {link.type === 'linkedin' && <FaLinkedin className="w-3 h-3" />}
                                        {link.type === 'website' && <FaGlobe className="w-3 h-3" />}
                                        <span>{link.text}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Load More Button */}
            {hasNextPage && (
                <div className="flex flex-col items-center py-8 space-y-4">
                    {isFetchingNextPage ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500" />
                    ) : (
                        <>
                            <p className="text-sm text-gray-400">
                                {remainingCount} more entries available
                            </p>
                            <button
                                onClick={() => fetchNextPage()}
                                className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 
                                text-gray-300 rounded-full text-sm transition-colors"
                            >
                                Load More
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}
