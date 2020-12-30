export interface Album {
    album_group: string;
    album_type: string;
    artist_id: string;
    artists?: (ArtistsEntity)[] | null;
    id: string;
    images?: (ImagesEntity)[] | null;
    name: string;
    release_date: string;
    release_date_ms: string;
    url: string;
}
export interface ArtistsEntity {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}
export interface ExternalUrls {
    spotify: string;
}
export interface ImagesEntity {
    height: number;
    url: string;
    width: number;
}