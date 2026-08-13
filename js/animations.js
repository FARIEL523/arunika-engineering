/**
 * ARUNIKA INDUSTRIAL SOLUTIONS - ANIMATIONS.JS
 * GSAP Timeline for Hero entrance & Reduced Motion Check
 */

(function () {
  'use strict';

  function initAnimations() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check if GSAP is available
    if (typeof gsap === 'undefined') {
      console.warn('GSAP library not loaded. Falling back to default CSS states.');
      return;
    }

    if (prefersReducedMotion) {
      // Reduced motion: Ensure all elements are immediately visible without animation
      gsap.set(['.site-header', '.hero-eyebrow', '.hero-headline', '.hero-description', '.hero-ctas', '.hero-meta', '.hero-img', '.about-eyebrow', '.about-headline', '.about-body', '.about-cta', '.about-image-wrapper', '.metric-card', '.services-eyebrow', '.services-headline', '.services-description', '.service-item', '.services-preview-panel', '.industries-eyebrow', '.industries-headline', '.industries-description', '.industries-image-wrapper', '.industry-item', '.projects-eyebrow', '.projects-headline', '.projects-description', '.featured-project', '.supporting-project-item', '.why-eyebrow', '.why-headline', '.why-description', '.pillar-item', '.cta-eyebrow', '.cta-headline', '.cta-description', '.cta-btn', '.contact-eyebrow', '.contact-headline', '.contact-description', '.contact-details-block', '.inquiry-form'], {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        clearProps: 'all'
      });
      initServicesInteraction();
      return;
    }

    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // Set initial Hero GSAP states
    gsap.set('.site-header', { opacity: 0, y: -20 });
    gsap.set('.hero-eyebrow', { opacity: 0, y: 20 });
    gsap.set('.hero-headline', { opacity: 0, y: 30 });
    gsap.set('.hero-description', { opacity: 0, y: 25 });
    gsap.set('.hero-ctas', { opacity: 0, y: 20 });
    gsap.set('.hero-meta', { opacity: 0, y: 20 });
    gsap.set('.hero-img', { scale: 1.08 });

    // Build Hero Restrained Timeline
    const tl = gsap.timeline({
      defaults: {
        ease: 'power3.out',
        duration: 0.8,
      },
    });

    tl.to('.site-header', {
      opacity: 1,
      y: 0,
      duration: 0.6,
    })
      .to(
        '.hero-eyebrow',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        '-=0.3'
      )
      .to(
        '.hero-headline',
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        '-=0.4'
      )
      .to(
        '.hero-description',
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        '-=0.5'
      )
      .to(
        '.hero-ctas',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        '-=0.4'
      )
      .to(
        '.hero-meta',
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        '-=0.4'
      )
      .to(
        '.hero-img',
        {
          scale: 1,
          duration: 1.2,
          ease: 'power2.out',
        },
        '-=0.8'
      );

    // Phase 2A About Section ScrollTrigger Animations
    if (document.querySelector('.about-section') && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.about-eyebrow', { opacity: 0, x: -20 });
      gsap.set('.about-headline', { opacity: 0, y: 30 });
      gsap.set('.about-body', { opacity: 0, y: 20 });
      gsap.set('.about-cta', { opacity: 0, y: 15 });
      gsap.set('.about-image-wrapper', { opacity: 0, y: 30, scale: 0.97 });
      gsap.set('.metric-card', { opacity: 0, y: 25 });

      const aboutTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.about-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        defaults: {
          ease: 'power3.out',
          duration: 0.7
        }
      });

      aboutTl
        .to('.about-eyebrow', { opacity: 1, x: 0 })
        .to('.about-headline', { opacity: 1, y: 0 }, '-=0.4')
        .to('.about-body', { opacity: 1, y: 0 }, '-=0.4')
        .to('.about-cta', { opacity: 1, y: 0 }, '-=0.4')
        .to('.about-image-wrapper', { opacity: 1, y: 0, scale: 1, duration: 0.9 }, '-=0.6')
        .to('.metric-card', { opacity: 1, y: 0, stagger: 0.12, duration: 0.6 }, '-=0.5');
    }

    // Phase 2B Services Section ScrollTrigger Animations
    if (document.querySelector('.services-section') && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.services-eyebrow', { opacity: 0, x: -20 });
      gsap.set('.services-headline', { opacity: 0, y: 40 });
      gsap.set('.services-description', { opacity: 0, y: 25 });
      gsap.set('.service-item', { opacity: 0, y: 30 });
      gsap.set('.services-preview-panel', { opacity: 0, y: 30, scale: 0.98 });

      const servicesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        defaults: {
          ease: 'power3.out',
          duration: 0.7
        }
      });

      servicesTl
        .to('.services-eyebrow', { opacity: 1, x: 0 })
        .to('.services-headline', { opacity: 1, y: 0 }, '-=0.4')
        .to('.services-description', { opacity: 1, y: 0 }, '-=0.4')
        .to('.service-item', { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, '-=0.3')
        .to('.services-preview-panel', { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.6');
    }

    // Phase 3 Industries Section ScrollTrigger Animations
    if (document.querySelector('.industries-section') && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.industries-eyebrow', { opacity: 0, x: -20 });
      gsap.set('.industries-headline', { opacity: 0, y: 40 });
      gsap.set('.industries-description', { opacity: 0, y: 25 });
      gsap.set('.industries-image-wrapper', { opacity: 0, y: 30, scale: 0.97 });
      gsap.set('.industry-item', { opacity: 0, y: 30 });

      const industriesTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.industries-section',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        defaults: {
          ease: 'power3.out',
          duration: 0.7
        }
      });

      industriesTl
        .to('.industries-eyebrow', { opacity: 1, x: 0 })
        .to('.industries-headline', { opacity: 1, y: 0 }, '-=0.4')
        .to('.industries-description', { opacity: 1, y: 0 }, '-=0.4')
        .to('.industries-image-wrapper', { opacity: 1, y: 0, scale: 1, duration: 0.8 }, '-=0.5')
        .to('.industry-item', { opacity: 1, y: 0, stagger: 0.08, duration: 0.6 }, '-=0.5');
    }

    // Phase 4 Projects Section ScrollTrigger Animations
    if (document.querySelector('.projects-section') && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.projects-eyebrow', { opacity: 0, x: -20 });
      gsap.set('.projects-headline', { opacity: 0, y: 40 });
      gsap.set('.projects-description', { opacity: 0, y: 25 });
      gsap.set('.featured-project', { opacity: 0, y: 35 });
      gsap.set('.supporting-project-item', { opacity: 0, y: 30 });

      const projectsTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        defaults: {
          ease: 'power3.out',
          duration: 0.7
        }
      });

      projectsTl
        .to('.projects-eyebrow', { opacity: 1, x: 0 })
        .to('.projects-headline', { opacity: 1, y: 0 }, '-=0.4')
        .to('.projects-description', { opacity: 1, y: 0 }, '-=0.4')
        .to('.featured-project', { opacity: 1, y: 0, duration: 0.8 }, '-=0.5')
        .to('.supporting-project-item', { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, '-=0.5');
    }

    // Phase 5A Why Arunika Section ScrollTrigger Animations
    if (document.querySelector('.why-section') && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.why-eyebrow', { opacity: 0, x: -20 });
      gsap.set('.why-headline', { opacity: 0, y: 40 });
      gsap.set('.why-description', { opacity: 0, y: 25 });
      gsap.set('.pillar-item', { opacity: 0, y: 30 });

      const whyTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.why-section',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        defaults: {
          ease: 'power3.out',
          duration: 0.7
        }
      });

      whyTl
        .to('.why-eyebrow', { opacity: 1, x: 0 })
        .to('.why-headline', { opacity: 1, y: 0 }, '-=0.4')
        .to('.why-description', { opacity: 1, y: 0 }, '-=0.4')
        .to('.pillar-item', { opacity: 1, y: 0, stagger: 0.1, duration: 0.6 }, '-=0.4');
    }

    // Phase 5B Primary Conversion CTA Section ScrollTrigger Animations
    if (document.querySelector('.conversion-cta-section') && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.cta-eyebrow', { opacity: 0, x: -20 });
      gsap.set('.cta-headline', { opacity: 0, y: 30 });
      gsap.set('.cta-description', { opacity: 0, y: 20 });
      gsap.set('.cta-btn', { opacity: 0, y: 20, scale: 0.96 });

      const ctaTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.conversion-cta-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        defaults: {
          ease: 'power3.out',
          duration: 0.7
        }
      });

      ctaTl
        .to('.cta-eyebrow', { opacity: 1, x: 0 })
        .to('.cta-headline', { opacity: 1, y: 0 }, '-=0.4')
        .to('.cta-description', { opacity: 1, y: 0 }, '-=0.4')
        .to('.cta-btn', { opacity: 1, y: 0, scale: 1, duration: 0.6 }, '-=0.4');
    }

    // Phase 6A Contact Section ScrollTrigger Animations
    if (document.querySelector('.contact-section') && typeof ScrollTrigger !== 'undefined') {
      gsap.set('.contact-eyebrow', { opacity: 0, x: -20 });
      gsap.set('.contact-headline', { opacity: 0, y: 40 });
      gsap.set('.contact-description', { opacity: 0, y: 25 });
      gsap.set('.contact-details-block', { opacity: 0, y: 25 });
      gsap.set('.inquiry-form', { opacity: 0, y: 35 });

      const contactTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.contact-section',
          start: 'top 75%',
          toggleActions: 'play none none none'
        },
        defaults: {
          ease: 'power3.out',
          duration: 0.7
        }
      });

      contactTl
        .to('.contact-eyebrow', { opacity: 1, x: 0 })
        .to('.contact-headline', { opacity: 1, y: 0 }, '-=0.4')
        .to('.contact-description', { opacity: 1, y: 0 }, '-=0.4')
        .to('.contact-details-block', { opacity: 1, y: 0 }, '-=0.4')
        .to('.inquiry-form', { opacity: 1, y: 0, duration: 0.8 }, '-=0.6');
    }

    // Initialize Services Interactive Preview Switcher
    initServicesInteraction();
  }

  /**
   * Interactive Service Preview Switcher (Desktop hover/focus handler)
   */
  function initServicesInteraction() {
    const serviceItems = document.querySelectorAll('.service-item');
    const previewImgs = document.querySelectorAll('.service-preview-img');
    const captionTitle = document.getElementById('preview-caption-title');

    if (!serviceItems.length) return;

    const serviceTitles = {
      '1': '01 / Engineering & Design',
      '2': '02 / Construction & EPC',
      '3': '03 / Industrial Maintenance',
      '4': '04 / Commissioning & Support'
    };

    serviceItems.forEach((item) => {
      const activateItem = () => {
        const serviceId = item.getAttribute('data-service');

        // Set active row
        serviceItems.forEach((s) => s.classList.remove('is-active'));
        item.classList.add('is-active');

        // Set active preview image
        previewImgs.forEach((img) => {
          if (img.getAttribute('data-preview') === serviceId) {
            img.classList.add('is-active');
          } else {
            img.classList.remove('is-active');
          }
        });

        // Update caption text
        if (captionTitle && serviceTitles[serviceId]) {
          captionTitle.textContent = serviceTitles[serviceId];
        }
      };

      item.addEventListener('mouseenter', activateItem);
      item.addEventListener('focus', activateItem);
    });
  }

  // Export module function
  window.ArunikaAnimations = {
    init: initAnimations,
  };
})();
