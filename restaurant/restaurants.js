fetch("restaurants.json")
  .then(res => res.json())
  .then(data => {

      const grid = document.getElementById("restaurant-grid");

      data.forEach(res => {
          const card = document.createElement("div");
          card.classList.add("restaurant-card");

          card.innerHTML = `
            <img src="${res.image}" alt="${res.name}">

            <div class="card-content">
              <h3>${res.name}</h3>

              <p class="rating">Rating: ${res.rating} ★ (${res.reviews} reviews)</p>

              <p class="description">${res.description}</p>

              <p class="delivery">
                Delivery Fee: ₱${res.delivery_fee} | Min Order: ₱${res.min_order}
              </p>

              <!-- BUTTONS -->
              <div class="card-buttons">
                <a class="buy-btn" href="${res.buy_link}" target="_blank">Buy</a>
                <a class="review-btn" href="${res.review_link}" target="_blank">Reviews</a>
              </div>
            </div>
          `;

          grid.appendChild(card);
      });
  })
  .catch(err => {
      console.error("Error loading JSON:", err);
      alert("Unable to load restaurants. Check console for details.");
  });
