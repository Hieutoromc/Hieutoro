const iframe = document.getElementById('myIframe');
const images = ['https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/462302775_122119302932476364_7398824880416996842_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_ohc=nyb19QvmFIAQ7kNvgGmUsv0&_nc_ht=scontent.fsgn2-10.fna&_nc_gid=AmpvkUE1cGKvbGiCzoTQM8Q&oh=00_AYANyHFREnZR3BExEt67gOndgOqnq-q2PKgReWKeYoy82A&oe=670A6E5C', 'image2.jpg', 'image3.jpg', 'image4.jpg', 'image5.jpg']; // Thay thế bằng đường dẫn đến ảnh của bạn

function getRandomImages() {
    const randomImages = [];
    while (randomImages.length < 5) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!randomImages.includes(images[randomIndex])) {
            randomImages.push(images[randomIndex]);   

        }
    }

    let html = '';
    randomImages.forEach(image => {
        html += `<img src="${image}" class="img-fluid" alt="Ảnh ngẫu nhiên">`;
    });

    iframe.contentDocument.body.innerHTML = html;
}

getRandomImages();

