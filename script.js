document.addEventListener('DOMContentLoaded', function() {
    console.log("Website portofolio berhasil dimuat!");

    document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
        anchor.addEventListener('click', function (e) {
            e.preventDeafult();

            document.querySelector(this.getAttribute('href')).scrollintoView({
                behavior: 'smooth'
            });
        });
    });
});