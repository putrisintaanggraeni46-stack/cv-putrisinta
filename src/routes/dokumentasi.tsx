import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeft, Images } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { documentationAlbums } from '@/lib/documentation';

export const Route = createFileRoute('/dokumentasi')({
  head: () => ({ meta: [
    { title: 'Dokumentasi — Putri Sinta Anggraeni' },
    { name: 'description', content: 'Dokumentasi karya dan kegiatan Putri Sinta Anggraeni dalam pengembangan web, media sosial, dan produksi konten.' },
    { property: 'og:title', content: 'Dokumentasi — Putri Sinta Anggraeni' },
    { property: 'og:description', content: 'Galeri dokumentasi portofolio Putri Sinta Anggraeni.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Documentation,
});

function Documentation() {
  return <>
    <header className="site-header"><div className="wrap nav-inner">
      <Link to="/" className="wordmark">PUTRI SINTA ANGGRAENI</Link>
      <Button variant="outline" asChild><Link to="/" hash="portofolio"><ArrowLeft /> Portofolio</Link></Button>
    </div></header>
    <main className="wrap documentation-page">
      <h1>DOKUMENTASI</h1>
      <nav className="album-nav" aria-label="Album dokumentasi">{documentationAlbums.map(album => <a href={`#${album.id}`} key={album.id}>{album.title}</a>)}</nav>
      {documentationAlbums.map(album => <section className="documentation-album" id={album.id} key={album.id}>
        <p className="project-category">{album.label}</p><h2>{album.title}</h2>
        {album.photos.length ? <div className="documentation-grid">{album.photos.map(photo => <figure key={photo.src}><a href={photo.src} target="_blank" rel="noreferrer"><img src={photo.src} alt={photo.alt} loading="lazy" /></a>{photo.caption && <figcaption>{photo.caption}</figcaption>}</figure>)}</div> : <div className="documentation-empty"><Images aria-hidden="true" /><p>Belum ada foto dokumentasi.</p></div>}
      </section>)}
    </main>
  </>;
}