document.addEventListener("DOMContentLoaded", function () {
    new TypeIt(".text-three", {
      strings: [""],
      loop: true,
      delay: 2000,
    })
    .pause(3000)
    .delete()
    .type('Website Developer')
    .pause(3000)
    .delete()
    .go();
  });

 