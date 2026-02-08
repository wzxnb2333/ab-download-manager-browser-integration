const YOUTUBE_MEDIA_BLACKLIST_URLS = [
    "youtu.be",
    "*.youtube.com",
    "youtube.com",
]

export const MEDIA_BLACKLIST_URLS: string[] = [
    ...YOUTUBE_MEDIA_BLACKLIST_URLS,
]

export function getMediaBlacklistUrls(allowYoutubeCapture: boolean) {
    if (allowYoutubeCapture) {
        return MEDIA_BLACKLIST_URLS.filter((url) => !YOUTUBE_MEDIA_BLACKLIST_URLS.includes(url))
    }
    return MEDIA_BLACKLIST_URLS
}
