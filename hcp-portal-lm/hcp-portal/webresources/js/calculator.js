function calculator (multiplier) { 
  let button = $(".cmp-calculator").find("button"),
      span = $(".cmp-calculator").find(".result");

  button.on("click", function() {
    let input = $(this).siblings("input").val();
    span.html(parseInt(input) * multiplier);
  });
}