export interface Video {
    id: string;
    title: string;
    description: string;
    publicId: string;
    originalSize: string;
    compressedSize: string;
    duration: number;
    createdAt: Date
    updateAt: Date
}