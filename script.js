(function () {
  'use strict';

  // Current year in footer
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile menu toggle
  var menuToggle = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', nav.classList.contains('is-open'));
    });
  }

  // Optional: close menu when a nav link is clicked (for anchor links)
  var navLinks = document.querySelectorAll('.nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && window.matchMedia('(max-width: 768px)').matches) {
        nav.classList.remove('is-open');
      }
    });
  });

  // Systems modal (Learn more popup)
  var modal = document.getElementById('systems-modal');
  var modalTitle = document.getElementById('modal-title');
  var modalContentCommercial = document.getElementById('modal-content-commercial');
  var modalContentPersonal = document.getElementById('modal-content-personal');
  var learnMoreBtns = document.querySelectorAll('.learn-more-btn[data-modal]');
  var closeModalTriggers = document.querySelectorAll('[data-close-modal]');
  var lastFocusedBeforeModal = null;

  function openModal(type) {
    if (!modal || !modalTitle) return;
    lastFocusedBeforeModal = document.activeElement;
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('is-open');
    if (modalContentCommercial) modalContentCommercial.hidden = type !== 'commercial';
    if (modalContentPersonal) modalContentPersonal.hidden = type !== 'personal';
    modalTitle.textContent = type === 'commercial' ? 'Commercial hydroponic systems' : 'Personal hydroponic systems';
    document.body.style.overflow = 'hidden';
    var closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) closeBtn.focus();
    document.addEventListener('keydown', handleModalEscape);
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.removeEventListener('keydown', handleModalEscape);
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
      lastFocusedBeforeModal.focus();
    }
  }

  function handleModalEscape(e) {
    if (e.key === 'Escape') closeModal();
  }

  learnMoreBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var type = btn.getAttribute('data-modal');
      if (type) openModal(type);
    });
  });

  closeModalTriggers.forEach(function (el) {
    el.addEventListener('click', closeModal);
  });
})();
