$(".accordion").on("hide.collapse shown.collapse", e => {
    $(e.target)
    .prev()
    .find(".accordion-panel")
    .toggleClass ("show collapse")
});
    $("html, body").animate(
      {
        scrollTop: $(e.target)
          .prev()
          .offset().top
      },
      400
    );
 ;