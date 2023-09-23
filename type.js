document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".text-three", {
      strings: [""],
      loop: true,
      delay: 2000,
    })
    .pause(3000)
    .delete()
    .type('College Student')
    .pause(3000)
    .delete()
    .go();
  });

 