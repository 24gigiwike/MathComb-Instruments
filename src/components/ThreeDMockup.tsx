import React from 'react';

export interface VideoItem {
  session_number: number | string;
  total_sessions: number | string;
  date: string;
  video_url: string;
  title?: string;
  venue?: string;
  description?: string;
}

// Automatically import all individual JSON session files from the root `_videos/` directory
const videoModules = import.meta.glob<VideoItem | { default: VideoItem }>(
  ['/_videos/*.json', '../../_videos/*.json'],
  { eager: true }
);

// Map the imported JSON file modules into an array of VideoItem objects
const videoCollection: VideoItem[] = Object.values(videoModules).map((mod: any) => {
  return mod.default || mod;
});

/**
 * Utility function to extract YouTube Video ID
 * Handles both regular '://youtube.com' (watch?v=) links and short 'youtu.be/' links
 */
export function getYouTubeId(url: string): string | null {
  if (!url) return null;
  if (url.includes('youtu.be/')) {
    const after = url.split('youtu.be/')[1];
    return after ? after.split('?')[0] : null;
  }
  if (url.includes('v=')) {
    const after = url.split('v=')[1];
    return after ? after.split('&')[0] : null;
  }
  if (url.includes('embed/')) {
    const after = url.split('embed/')[1];
    return after ? after.split('?')[0] : null;
  }
  if (url.includes('shorts/')) {
    const after = url.split('shorts/')[1];
    return after ? after.split('?')[0] : null;
  }
  return null;
}

/**
 * Helper to format date string to '%b %Y' (e.g. "Oct 2019")
 */
export function formatPerformanceDate(dateString: string): string {
  if (!dateString) return '';
  const parsed = new Date(dateString);
  if (!isNaN(parsed.getTime())) {
    return parsed.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  return dateString;
}

export default function ThreeDMockup() {
  // Sort videos dynamically by session_number from the loaded _videos collection
  const sorted_videos = [...videoCollection].sort(
    (a, b) => Number(a.session_number) - Number(b.session_number)
  );

  return (
    <section 
      id="performance-archive" 
      className="py-24 sm:py-32 bg-[#FAFAFA] border-t border-b border-border-custom overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        {/* Header Block */}
        <div className="space-y-4 max-w-2xl">
          <div className="flex items-center space-x-3">
            <span className="w-6 h-[1px] bg-brand-green" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-text-black font-mono">
              Performance Archive
            </span>
          </div>
          <h2 className="font-display font-light text-3xl sm:text-4xl text-text-black tracking-tight leading-tight">
            Mathias Performing with{' '}
            <span className="font-semibold text-text-black">Mathcomb™ Musical Instruments</span>
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-sans">
            A side-by-side showcase of authentic live performances, studio sessions, and workshop experiments led by inventor Mathias Edema Eyeturami.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* >>> DYNAMIC PERFORMANCE ARCHIVE SECTION START (_videos folder loop) <<<  */}
        {/* ========================================================================= */}
        <div className="performance-archive-grid">
          {sorted_videos.length > 0 ? (
            sorted_videos.map((item, index) => {
              const video_id = getYouTubeId(item.video_url);
              const isValidYouTube = item.video_url && (item.video_url.includes('youtube.com') || item.video_url.includes('youtu.be'));

              return (
                <div key={index} className="performance-card">
                  <div className="video-container">
                    {isValidYouTube && video_id ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${video_id}`}
                        title={`Session ${item.session_number} of ${item.total_sessions}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    ) : (
                      <p className="flex items-center justify-center h-full text-xs text-neutral-400 font-mono">
                        Invalid Video URL
                      </p>
                    )}
                  </div>
                  <div className="performance-meta">
                    <p>Session {item.session_number} of {item.total_sessions} • {formatPerformanceDate(item.date)}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="no-videos">No archive sessions available yet.</p>
          )}
        </div>
        {/* ========================================================================= */}
        {/* >>> DYNAMIC PERFORMANCE ARCHIVE SECTION END <<<                          */}
        {/* ========================================================================= */}
        
        {/* Footnote */}
        <div className="flex items-center justify-center border-t border-border-custom pt-6 font-mono text-[9px] text-neutral-400 tracking-wider uppercase">
          <span>© {new Date().getFullYear()} MATHCOMB™ MUSICAL INSTRUMENTS</span>
        </div>

      </div>
    </section>
  );
}



