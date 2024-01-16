$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta",
  type: "get",
  dataType: "json",
  data: {
    apikey: "1",
    s: "meals",
  },
  success: function (data) {
    let meals = data.meals;
    $.each(meals, function (i, data) {
      $("#categories-detail").append(
        '<div class="col-md-4"><div class="card mt-5"><img src=' +
          data.strMealThumb +
          ' class="card-img" alt="..."><div class="card-img-overlay"><h3 class="card-title text-center mt-5 text-light">' +
          data.strMeal +
          '</h3><p class="card-text"></p><p class="card-text"><small></small></p></div></div></div>'
      );
    });
  },
});

$("#categories-detail").on(
  {
    mouseenter: function () {
      // Fungsi untuk saat mouse masuk (hover)
      $(this).find(".card-img").stop().animate({ opacity: 0.8 }, 200);
      // Atau tambahkan efek animasi lain sesuai keinginan Anda
    },
    mouseleave: function () {
      // Fungsi untuk saat mouse keluar
      $(this).find(".card-img").stop().animate({ opacity: 1 }, 200);
      // Atau reset efek animasi lain yang telah ditambahkan
    },
  },
  ".card"
);
