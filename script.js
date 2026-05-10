const gallery = document.getElementById("gallery");

const extensions = ["jpg", "jpeg", "png", "webp"];

// 掃描 1 ~ 500 張圖
for (let i = 1; i <= 500; i++) {

  extensions.forEach(ext => {

    const path = `images/${i}.${ext}`;

    const img = new Image();
    img.src = path;

    img.onload = () => {

      const div = document.createElement("div");
      div.className = "item";

      div.innerHTML = `<img src="${path}" loading="lazy">`;

      div.addEventListener("click", () => {
        openLightbox(path);
      });

      gallery.appendChild(div);
    };
  });
}

/* lightbox */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function openLightbox(src){
  lightbox.classList.remove("hidden");
  lightboxImg.src = src;
}

document.getElementById("closeBtn").onclick = () => {
  lightbox.classList.add("hidden");
};

lightbox.onclick = (e) => {
  if(e.target === lightbox){
    lightbox.classList.add("hidden");
  }
};