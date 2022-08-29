var plusBtns = document.querySelectorAll(".plus");
var minusBtns = document.querySelectorAll(".minus");
var delBtns = document.querySelectorAll(".del");
var likeBtns = document.querySelectorAll(".like");
var isLiked = false;
var price = document.querySelector(".totalPrice");
var unitePrice = document.querySelectorAll(".unitPrice");

// plus
plusBtns.forEach(function (plus) {
  plus.addEventListener("click", function (ev) {
    plus.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
      Number(
        plus.previousElementSibling.previousElementSibling
          .previousElementSibling.textContent
      ) + 1;
      var unitPriceValue = Number(unitePrice.textContent)
    price.textContent = Number(price.textContent) + unitPriceValue;
  });
});


// minus
minusBtns.forEach(function (minus) {
  minus.addEventListener("click", function (ev) {
    if (
      Number(
        minus.previousElementSibling.previousElementSibling
          .previousElementSibling.previousElementSibling.textContent
      ) > 0
    ) {
      minus.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent =
        Number(
          minus.previousElementSibling.previousElementSibling
            .previousElementSibling.previousElementSibling.textContent
        ) - 1;
      price.textContent =
        Number(price.textContent) - Number(unitePrice.textContent);
    } else {
      minus.parentElement.remove();
    }
  });
});


// deletion
delBtns.forEach(function (del) {
  del.addEventListener("click", function (ev) {
    del.parentElement.remove();
  });
});


// liking
likeBtns.forEach(function (like) {
  like.addEventListener("click", function (ev) {
    if (isLiked == false) {
      isLiked = true;
      like.style.color = "red";
    } else if (isLiked == true) {
      isLiked = false;
      like.style.color = "black";
    }
  });
});
