export interface Artist {
    external_urls: ExternalUrls;
    followers: Followers;
    genres?: (string)[] | null;
    href: string;
    id: string;
    images?: (ImagesEntity)[] | null;
    name: string;
    popularity: number;
    type: string;
    uri: string;
}
export interface ExternalUrls {
    spotify: string;
}
export interface Followers {
    href?: string;
    total: number;
}
export interface ImagesEntity {
    height: number;
    url: string;
    width: number;
}
  