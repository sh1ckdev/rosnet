  function togglePopup(popupId) {
    const popup = document.getElementById(popupId);
    const overlay = document.getElementById('overlay');
    const body = document.body;

    const loginPopup = document.getElementById('loginPopup');
    const registerPopup = document.getElementById('registerPopup');

    if (popup && overlay) {
      const isPopupVisible = popup.classList.contains('visible');

      if (isPopupVisible) {
        popup.classList.remove('visible');
        overlay.style.display = 'none';
        body.style.overflowX = 'hidden';
        body.style.overflowY = 'scroll';
      } else {
        popup.classList.add('visible');
        overlay.style.display = 'block';
        body.style.overflowX = 'hidden';
        body.style.overflowY = 'hidden';

        if (popupId === 'registerPopup') {
          loginPopup.classList.remove('visible');
        } else if (popupId === 'loginPopup') {
          registerPopup.classList.remove('visible');
        }
      }
    }
  }

  document.addEventListener('click', function (event) {
    const accountLink = document.querySelector('.account');
    const loginPopup = document.getElementById('loginPopup');
    const registerPopup = document.getElementById('registerPopup');
    const overlay = document.getElementById('overlay');

    const isAccountLinkClicked = event.target === accountLink;
    const isClickedInsidePopup = event.target.closest('.popup');
    const isClickedOnOverlay = event.target.classList.contains('overlay');

    if (!isAccountLinkClicked && !isClickedInsidePopup && !isClickedOnOverlay) {
      loginPopup.classList.remove('visible');
      registerPopup.classList.remove('visible');
      overlay.style.display = 'none';
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = 'scroll';
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    function togglePop(popupId) {
      const popup = document.getElementById(popupId);
      const overlay = document.getElementById("overlayPayment");
      const body = document.body;

      if (popup.classList.contains("visible")) {
        popup.classList.remove("visible");
        overlay.style.display = "none";
        body.style.overflow = "auto";
      } else {
        popup.classList.add("visible");
        overlay.style.display = "block";
        body.style.overflow = "hidden";
      }
    }

    const payLink = document.querySelector(".pay");
    payLink.addEventListener("click", function (event) {
      event.preventDefault();
      togglePop("paymentPopup");
    });

    const overlay = document.getElementById("overlayPayment");
    overlay.addEventListener("click", function () {
      togglePop("paymentPopup");
    });

    const closeButton = document.querySelector("#paymentPopup .close");
    closeButton.addEventListener("click", function () {
      togglePop("paymentPopup");
    });
  });