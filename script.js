window.addEventListener("load", function() {
  const track = document.querySelector(".scroll-track");

  if (track) {
    let speed = 3;       // auto-scroll speed
    let isDragging = false;
    let startX;
    let scrollLeft;

    // Auto-scroll function
    function autoScroll() {
      if (!isDragging) { // only auto-scroll when not dragging
        track.scrollLeft += speed;

        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0; // seamless loop
        }
      }
      requestAnimationFrame(autoScroll);
    }

    requestAnimationFrame(autoScroll);

    // ----- Manual Dragging -----
    track.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
      track.style.cursor = "grabbing";
    });

    track.addEventListener("mouseleave", () => {
      isDragging = false;
      track.style.cursor = "grab";
    });

    track.addEventListener("mouseup", () => {
      isDragging = false;
      track.style.cursor = "grab";
    });

    track.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2; // multiply to increase drag speed
      track.scrollLeft = scrollLeft - walk;
    });

    // ----- Optional: Touch Support for Mobile -----
    track.addEventListener("touchstart", (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener("touchend", () => isDragging = false);
    track.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      track.scrollLeft = scrollLeft - walk;
    });
  }
});
