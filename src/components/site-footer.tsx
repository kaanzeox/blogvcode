/**
 * Site footer with:
 *  1. Spotify embed (configurable track/playlist/episode URL)
 *  2. Attribution line
 *
 * To change the Spotify embed, update the SPOTIFY_EMBED_URL below.
 * Go to Spotify → Share → "Copy Embed Link" and paste the `src` URL here.
 * Supported types: track, playlist, album, episode, show.
 *
 * Set to `null` to hide the Spotify player entirely.
 */

const SPOTIFY_EMBED_URL: string | null =
  "https://open.spotify.com/embed/track/2VJOdE5DLUAEQ8FH4qQcLs?utm_source=generator";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-neutral-950">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 py-8 flex flex-col gap-8">
        {/* Spotify player */}
        {SPOTIFY_EMBED_URL && (
          <div className="w-full max-w-md">
            <p className="text-[11px] uppercase tracking-widest text-white/30 mb-3 font-medium">
              THIS WEEKS SONG
            </p>
            <iframe
              title="Spotify"
              src={SPOTIFY_EMBED_URL}
              width="100%"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl border-0"
              style={{ colorScheme: "normal" }}
            />
          </div>
        )}

        {/* Attribution */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/25">
          <span>
            yasatir 
          </span>
        </div>
      </div>
    </footer>
  );
}

