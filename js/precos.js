const modal = document.querySelector('#modal_precos');
const divImage = document.querySelector('#modal_precos_image')

const openImage = (imageId) => {
    const image = `../img/precos/pr0${imageId}.png`;
    modal.style.backgroundImage = `url('${image}')`;
    modal.style.display = 'block';
};

const closeImage = () => {
    modal.style.display = 'none';
}