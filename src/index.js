import Gallery from './Gallery';

const gallery = new Gallery({
    limit:      30,
    page:       1,
    gallery_id: '#gallery',
    nav_id:     '#navigation'
});

gallery.renderList();