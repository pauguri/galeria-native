
type GiphyImageData = {
    type: string;
    id: string;
    url: string;
    slug: string;
    bitly_gif_url: string;
    bitly_url: string;
    embed_url: string;
    username: string;
    source: string;
    title: string;
    rating: string;
    content_url: string;
    source_tld: string;
    source_post_url: string;
    is_sticker: number;
    import_datetime: string;
    trending_datetime: string;
    images: {
        original: {
            height: string;
            width: string;
            size: string;
            url: string;
            mp4_size: string;
            mp4: string;
            webp_size: string;
            webp: string;
            frames: string;
            hash: string;
        };
        downsized: {
            height: string;
            width: string;
            size: string;
            url: string;
        };
        downsized_large: {
            height: string;
            width: string;
            size: string;
            url: string;
        };
        downsized_medium: {
            height: string;
            width: string;
            size: string;
            url: string;
        };
        downsized_small: {
            height: string;
            width: string;
            mp4_size: string;
            mp4: string;
        };
        downsized_still: {
            height: string;
            width: string;
            size: string;
            url: string;
        };
        fixed_height: {
            height: string;
            width: string;
            size: string;
            url: string;
            mp4_size: string;
            mp4: string;
            webp_size: string;
            webp: string;
        };
        // Include other image sizes here...
    };
    user: {
        avatar_url: string;
        banner_image: string;
        banner_url: string;
        profile_url: string;
        username: string;
        display_name: string;
        description: string;
        instagram_url: string;
        website_url: string;
        is_verified: boolean;
    };
    analytics_response_payload: string;
    analytics: {
        onload: {
            url: string;
        };
        onclick: {
            url: string;
        };
        onsent: {
            url: string;
        };
    };
};

type GiphyAPIResponse = {
    data: GiphyImageData[];
    meta: {
        status: number;
        msg: string;
        response_id: string;
    };
    pagination: {
        total_count: number;
        count: number;
        offset: number;
    };
};
