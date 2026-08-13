/**
 * ARUNIKA INDUSTRIAL SOLUTIONS - NAVIGATION.JS
 * Desktop Navbar scroll state, Mobile Overlay Menu, Body Scroll Lock, Keyboard & Focus Management
 */

(function () {
  'use strict';

  // DOM Elements
  const header = document.querySelector('.site-header');
  const mobileToggles = document.querySelectorAll('.mobile-toggle');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  let isMenuOpen = false;
  let previousFocusedElement = null;

  // Focusable elements inside overlay for focus trap
  const getFocusableElements = (container) => {
    if (!container) return [];
    return Array.from(
      container.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      )
    );
  };

  /**
   * Initialize Navigation
   */
  function initNavigation() {
    handleScrollState();
    window.addEventListener('scroll', handleScrollState, { passive: true });

    // Toggle menu handlers
    mobileToggles.forEach((toggle) => {
      toggle.addEventListener('click', toggleMenu);
    });

    // Close menu when clicking nav links
    mobileNavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (isMenuOpen) {
          closeMenu();
        }
      });
    });

    // Keyboard handlers (Escape key & Focus trap)
    document.addEventListener('keydown', handleKeyDown);

    // Window resize handler (Close menu if resized to desktop)
    window.addEventListener('resize', handleResize);
  }

  /**
   * Navbar Scroll State Toggle
   */
  function handleScrollState() {
    if (!header) return;
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  /**
   * Toggle Mobile Menu Open/Close
   */
  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  /**
   * Open Mobile Fullscreen Overlay
   */
  function openMenu() {
    if (!mobileOverlay) return;
    isMenuOpen = true;
    previousFocusedElement = document.activeElement;

    mobileOverlay.classList.add('is-active');
    document.body.classList.add('menu-open');

    mobileToggles.forEach((toggle) => {
      toggle.setAttribute('aria-expanded', 'true');
    });

    // Set focus to close button or first interactive element inside menu
    const focusable = getFocusableElements(mobileOverlay);
    if (focusable.length > 0) {
      // Small timeout to allow DOM transition to complete before focusing
      setTimeout(() => {
        focusable[0].focus();
      }, 50);
    }
  }

  /**
   * Close Mobile Overlay Menu
   */
  function closeMenu() {
    if (!mobileOverlay) return;
    isMenuOpen = false;

    mobileOverlay.classList.remove('is-active');
    document.body.classList.remove('menu-open');

    mobileToggles.forEach((toggle) => {
      toggle.setAttribute('aria-expanded', 'false');
    });

    // Restore focus to previously focused element (e.g., hamburger button)
    if (previousFocusedElement && typeof previousFocusedElement.focus === 'function') {
      previousFocusedElement.focus();
    }
  }

  /**
   * Handle Keydown (Escape key & Focus Trapping)
   */
  function handleKeyDown(event) {
    if (!isMenuOpen) return;

    if (event.key === 'Escape' || event.keyCode === 27) {
      event.preventDefault();
      closeMenu();
      return;
    }

    if (event.key === 'Tab' || event.keyCode === 9) {
      const focusable = getFocusableElements(mobileOverlay);
      if (focusable.length === 0) return;

      const firstElement = focusable[0];
      const lastElement = focusable[focusable.length - 1];

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }
  }

  /**
   * Handle Window Resize
   */
  function handleResize() {
    if (window.innerWidth > 768 && isMenuOpen) {
      closeMenu();
    }
  }

  // Export module function
  window.ArunikaNav = {
    init: initNavigation,
    closeMenu: closeMenu,
    openMenu: openMenu,
  };
})();
