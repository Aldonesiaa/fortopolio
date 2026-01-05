/**
 * =====================================
 * script.js
 * =====================================
 * Auto-generate Website & Experience
 * DINONAKTIFKAN.
 *
 * Saat ini konten (Certificate, dll)
 * diatur MANUAL melalui HTML.
 * =====================================
 */

/*
document.addEventListener("DOMContentLoaded", () => {
  fetch("/json/dataweb.json")
    .then((response) => response.json())
    .then((data) => {
      // =========================
      // AUTO GENERATE WEBSITE
      // =========================
      function addWebsiteCard(container, website) {
        const card = document.createElement("div");
        card.className = "col-lg-3 cardlist d-flex align-items-end";
        card.setAttribute("data-aos", "fade-up");
        card.setAttribute("data-aos-duration", "500");
        card.style.backgroundImage = `url('${website.main_image}')`;

        const content = document.createElement("div");
        content.className = "haha";
        content.style.width = "100%";
        content.style.backgroundImage =
          "linear-gradient(to bottom, rgba(68, 40, 91, 0.08), rgba(68, 40, 91, 0.493))";

        const title = document.createElement("h3");
        title.style.color = "white";
        title.style.padding = "5px";
        title.style.marginBottom = "0px";

        const link = document.createElement("a");
        link.href = `detail.html?id=${website.id}`;
        link.style.textDecoration = "none";
        link.style.color = "white";
        link.innerText = website.nama;

        title.appendChild(link);

        const detailLink = document.createElement("p");
        const detailAnchor = document.createElement("a");
        detailAnchor.href = `detail.html?id=${website.id}`;
        detailAnchor.style.textDecoration = "none";
        detailAnchor.style.color = "white";
        detailAnchor.innerText = "View detail";

        detailLink.appendChild(detailAnchor);
        content.appendChild(title);
        content.appendChild(detailLink);
        card.appendChild(content);

        container.appendChild(card);
      }

      // WEBSITE
      const websiteContainer =
        document.getElementById("website-container");

      data
        .filter((item) => item.kategori === "Website")
        .forEach((item) => addWebsiteCard(websiteContainer, item));

      // =========================
      // AUTO GENERATE EXPERIENCE
      // =========================
      const experienceContainer =
        document.getElementById("website-container-2");

      data
        .filter((item) => item.kategori === "Pengalaman")
        .forEach((item) => addWebsiteCard(experienceContainer, item));
    })
    .catch((error) => console.error(error));
});
*/
