$.ajax({
  url: "https://www.themealdb.com/api/json/v1/1/categories.php",
  type: "get",
  dataType: "json",
  data: {
    apikey: "1",
    s: "categories",
  },
  success: function (data) {
    let categories = data.categories;
    $.each(categories, function (i, data) {
      $("#categories-list").append(
        '<div class="col-md-4"><div class="card mt-5 category-card" data-category="' +
          data.strCategory +
          '"><img src=' +
          data.strCategoryThumb +
          ' class="card-img " alt="..."><div class="card-img-overlay"><h3 class="card-title text-center mt-5 text-light">' +
          data.strCategory +
          '</h3><p class="card-text"></p><p class="card-text"><small></small></p></div></div></div>'
      );
    });

    $("#categories-list").on(
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

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Beef"]',
      function () {
        window.location.href = "Beef/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Chicken"]',
      function () {
        window.location.href = "Chicken/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Dessert"]',
      function () {
        window.location.href = "Dessert/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Lamb"]',
      function () {
        window.location.href = "Lamb/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Miscellaneous"]',
      function () {
        window.location.href = "Miscellaneous/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Pasta"]',
      function () {
        window.location.href = "Pasta/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Pork"]',
      function () {
        window.location.href = "Pork/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Seafood"]',
      function () {
        window.location.href = "Seafood/category-detail.html";
      }
    );

    $("#categories-list").on(
      "click",
      '.category-card[data-category="Side"]',
      function () {
        window.location.href = "Side/category-detail.html";
      }
    );
    $("#categories-list").on(
      "click",
      '.category-card[data-category="Starter"]',
      function () {
        window.location.href = "Starter/category-detail.html";
      }
    );
    $("#categories-list").on(
      "click",
      '.category-card[data-category="Vegan"]',
      function () {
        window.location.href = "Vegan/category-detail.html";
      }
    );
    $("#categories-list").on(
      "click",
      '.category-card[data-category="Vegetarian"]',
      function () {
        window.location.href = "Vegetarian/category-detail.html";
      }
    );
    $("#categories-list").on(
      "click",
      '.category-card[data-category="Breakfast"]',
      function () {
        window.location.href = "Breakfast/category-detail.html";
      }
    );
    $("#categories-list").on(
      "click",
      '.category-card[data-category="Goat"]',
      function () {
        window.location.href = "Goat/category-detail.html";
      }
    );
  },
});
