fetch("https://6450dbfba32219691153974a.mockapi.io/api/v1/signature")
  .then((Response) => Response.json())
  .then((Response) => {
    const images = document.getElementById("card-signature");
    Response.forEach((signature) => {
      images.innerHTML += `<div class="col-3">
        <div class="card">
          <img src="${signature.gambar}" class="card-img-top" alt=".....">
            <div class="card-body">
            <h5 class="card-title">${signature.judul}</h5>
            <p class="card-text">${signature.deskripsi}</p>
            </div>
        </div>
      </div>`;
    });
  });

fetch("https://6450dbfba32219691153974a.mockapi.io/api/v1/program")
  .then((Response) => Response.json())
  .then((Response) => {
    const images = document.getElementById("card-porgram");
    Response.forEach((program) => {
      images.innerHTML += `<div class="swiper-slide">
        <div class="card">
          <img src="${program.image}" class="card-img-top" alt=".....">
            <div class="card-body">
            <h5 class="card-title">${program.judul}</h5>
            <p class="card-text">${program.deskripsi}</p>
            <button><a href="../detail_program/detail_program.html" class="btn-detail-program">Look's Program</a></button>
            </div>
        </div>
      </div>`;
    });
  });
