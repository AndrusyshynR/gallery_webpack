class Img {

    constructor({ photo, onLikeHandler }) {

        this.photo          = photo;
        this.onLikeHandler  = onLikeHandler;
        this.wrap           = document.createElement('div');
        this.img            = document.createElement('img');
        this.like           = document.createElement('span');
        this.date_at        = document.createElement('i');
        
    }

    getFormatDate() {

        const { updated_at } = this.photo;
        const date = new Date(updated_at);
        return date.toLocaleDateString();

    }

    build() {

        const { likes, urls:{thumb} } = this.photo;
        this.wrap.className     = 'photo';
        this.img.src            = thumb;
        this.like.innerHTML     = likes;

        this.like.onclick = () => {
            this.onLikeHandler(this.photo, this.like);
        };

        this.date_at.innerHTML = this.getFormatDate();
        this.wrap.append(this.like);
        this.wrap.append(this.date_at);
        this.wrap.append(this.img);
    
        return this.wrap;
    }

}

export default Img;