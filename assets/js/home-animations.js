/**
 * MAGAZINE HOME PAGE
 * Subtle Entrance Animations
 */

gsap.registerPlugin(ScrollTrigger);

// ============================================
// MASTHEAD ANIMATIONS
// ============================================

function initMastheadAnimation() {
    const masthead = document.querySelector('.magazine-masthead');
    if (!masthead) return;
    
    const tl = gsap.timeline({
        defaults: { ease: "power3.out" }
    });
    
    // Issue number
    tl.from('.masthead-issue', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.2
    });
    
    // Title - elegant fade
    tl.from('.masthead-title', {
        opacity: 0,
        y: 30,
        duration: 1.2
    }, "-=0.4");
    
    // Tagline
    tl.from('.masthead-tagline', {
        opacity: 0,
        y: 15,
        duration: 0.8
    }, "-=0.6");
    
    // Scroll hint
    tl.from('.masthead-scroll-hint', {
        opacity: 0,
        duration: 0.6
    }, "-=0.3");
    
    // Parallax fade on scroll
    gsap.to('.masthead-content', {
        scrollTrigger: {
            trigger: '.magazine-masthead',
            start: "top top",
            end: "bottom top",
            scrub: 1.5
        },
        y: -80,
        opacity: 0
    });
}

// ============================================
// COVER STORY ANIMATIONS
// ============================================

function initCoverAnimation() {
    const cover = document.querySelector('.cover-story');
    if (!cover) return;
    
    // Cover label lines
    gsap.from('.cover-label-line', {
        scrollTrigger: {
            trigger: '.cover-story',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        scaleX: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
    });
    
    // Cover label text
    gsap.from('.cover-label-text', {
        scrollTrigger: {
            trigger: '.cover-story',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        duration: 0.6,
        delay: 0.3
    });
    
    // Cover article card
    gsap.from('.cover-article', {
        scrollTrigger: {
            trigger: '.cover-article',
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });
    
    // Cover content stagger
    gsap.from('.cover-content > *', {
        scrollTrigger: {
            trigger: '.cover-article',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out"
    });
}

// ============================================
// TABLE OF CONTENTS ANIMATIONS
// ============================================

function initTocAnimation() {
    const toc = document.querySelector('.toc-section');
    if (!toc) return;
    
    // Header
    gsap.from('.toc-title', {
        scrollTrigger: {
            trigger: '.toc-section',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -20,
        duration: 0.8,
        ease: "power3.out"
    });
    
    // Header line
    gsap.from('.toc-line', {
        scrollTrigger: {
            trigger: '.toc-section',
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
    });
    
    // TOC items - staggered reveal
    const tocItems = gsap.utils.toArray('.toc-item');
    tocItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 90%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -30,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });
}

// ============================================
// FOOTER ANIMATION
// ============================================

function initFooterAnimation() {
    const footer = document.querySelector('.magazine-footer');
    if (!footer) return;
    
    gsap.from('.footer-accent', {
        scrollTrigger: {
            trigger: '.magazine-footer',
            start: "top 95%",
            toggleActions: "play none none reverse"
        },
        scaleX: 0,
        duration: 0.8,
        ease: "power3.out"
    });
    
    gsap.from('.footer-inner > *', {
        scrollTrigger: {
            trigger: '.magazine-footer',
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 15,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
    });
}

// ============================================
// NAV SCROLL BEHAVIOR
// ============================================

function initNavScroll() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;
    
    ScrollTrigger.create({
        start: 100,
        onUpdate: (self) => {
            if (self.scroll() > 100) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================

function initHomeAnimations() {
    document.fonts.ready.then(() => {
        initMastheadAnimation();
        initCoverAnimation();
        initTocAnimation();
        initFooterAnimation();
        initNavScroll();
        
        ScrollTrigger.refresh();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomeAnimations);
} else {
    initHomeAnimations();
}

// Resize handler
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
