document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("rosterGrid");
  
    const render = (list) => {
      grid.innerHTML = "";
  
      list.forEach((p) => {
        const col = document.createElement("div");
  
        col.className = "col-6 col-lg-2";
  
        let bgColor = "#ffffff";
  
        if (p.position.includes("Fish")) {
          bgColor = "#f60404";
        } else if (p.position.includes("Freeloader")) {
          bgColor = "#4cb89d";
        } else if (p.position.includes("Host")) {
          bgColor = "#f0cc64";
        } else if (p.position.includes("Producer")) {
          bgColor = "#201c24";
        }
  
        col.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${p.photo}" class="card-img-top" alt="${p.firstName} ${p.lastName}">
            <div class="card-body text-center">
              <h5 class="card-title mb-1">${p.firstName} ${p.lastName}</h5>
              <div class='badge badge-position' style="background-color: ${bgColor};">${p.position}</div>
              <p class="small text-muted mb-0">placement ${p.placement}</p>
            </div>
          </div>
        `;
  
        grid.appendChild(col);
      });
    };
  
    render(players);
  });
  
