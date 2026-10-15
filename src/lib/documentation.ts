export type DocumentationPhoto = { src: string; alt: string; caption?: string };
export const documentationAlbums: { id: string; title: string; label: string; photos: DocumentationPhoto[] }[] = [
  { id: 'web', title: 'Sistem Inventaris & Pengajuan Barang', label: 'Laravel · Sistem Informasi', photos: [] },
  { id: 'social', title: 'Social Media & Content Planning', label: 'Social Media · Kinarya Project', photos: [] },
  { id: 'media', title: 'Video & Dokumentasi Kegiatan', label: 'Content Creation · Freelance', photos: [] },
];