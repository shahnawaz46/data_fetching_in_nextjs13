export interface UnplashImage {
  user: {
    name: string;
    location: string;
  };
  description: string;
  urls: {
    raw: string;
  };
  downloads: number;
  created_at: string;
  width: number;
  height: number;
}
