document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("rosterGrid");

  const render = (list) => {
    grid.innerHTML = "";

    list.forEach((p) => {
      const col = document.createElement("div");
      col.className = "col-6 col-lg-2";

      let bgColor = "#ffffff";
      let positionTextStyle = "bold"; 
      let positionTextColor = "white"; 

      if (p.position.includes("Fish")) {
        bgColor = "#f60404";
      } else if (p.position.includes("Freeloader")) {
        bgColor = "#4138e8";
      } else if (p.position.includes("Host")) {
        bgColor = "#fc9404";
      } else if (p.position.includes("Producer")) {
        bgColor = "#FFFFFF";
        positionTextColor = "black"; 
      } else if (p.position.includes("Contestant/Loader")) {
        bgColor = "#7632c9";
      }

      let placementHTML = "";

      if (p.placement !== "none") {
        if (p.placement === "1st") {
          placementHTML = `<p class="small mb-0" style="color: gold; text-shadow: 0 0 5px gold, 0 0 10px goldenrod;">placement ${p.placement}</p>`;
        } else {
          placementHTML = `<p class="small mb-0" style="color: white;">placement ${p.placement}</p>`;
        }
      }

      col.innerHTML = `
        <div class="card h-100 shadow-sm card-custom-bg" style="margin-top: 20px;">
          <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
          <div class="card-body text-center">
            <h5 class="card-title mb-1" style="color: white;">${p.firstName} ${p.lastName}</h5>
            <div class='badge badge-position' style="background-color: ${bgColor}; color: ${positionTextColor}; font-weight: ${positionTextStyle};">
              ${p.position}
            </div>
            ${placementHTML}
            <button class="btn btn-info mt-2 more-info-btn" data-bs-toggle="modal" data-bs-target="#playerModal" data-player-id="${p.id}">More Info</button>
          </div>
        </div>
      `;

      let card = col.querySelector(".card");

      card.style.border = "2px solid white"; 

      card.addEventListener("mouseenter", function () {
        card.style.transform = "scale(1.05) rotateY(20deg)";
        card.style.transition = "transform 0.3s ease-in-out";
      });

      card.addEventListener("mouseleave", function () {
        card.style.transform = "scale(1) rotateY(0deg)";
      });

      grid.appendChild(col);
    });

    addModalListener(); // Add the listener after rendering the cards
  };

  // Add event listener for the "More Info" button
  function addModalListener() {
    const moreInfoButtons = document.querySelectorAll(".more-info-btn");

    moreInfoButtons.forEach(button => {
      button.addEventListener("click", function () {
        // Use 'this' to access the clicked button
        const playerId = this.getAttribute("data-player-id");
        const player = players.find(p => p.id == playerId); // Find the player using the ID

        const modalBody = document.querySelector("#playerModal .modal-body");
        modalBody.textContent = player.hiddenDetail; // Display the hidden detail in the modal
      });
    });
  }

  render(players); // Assuming 'players' is an array of player objects
});


