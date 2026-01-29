/**
 * HOW WE THE HUMANS BUILD
 * Industrial/Blueprint Scroll Animations
 */

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO SECTION - Blueprint Reveal
// ============================================

function initHeroAnimation() {
    const heroContent = document.querySelector(".hero-content");
    const titleLines = document.querySelectorAll(".title-line");
    const heroIcons = document.querySelectorAll(".hero-icon");
    const gears = document.querySelectorAll(".gear");
    const scrollIndicator = document.querySelector(".hero-scroll-indicator");
    
    // Master timeline
    const heroTl = gsap.timeline({
        defaults: { ease: "power4.out" }
    });
    
    // Eyebrow
    heroTl.from(".hero-eyebrow", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3
    });
    
    // Title lines - staggered mechanical reveal
    if (titleLines.length) {
        heroTl.from(titleLines, {
            opacity: 0,
            y: 60,
            rotateX: 15,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out"
        }, "-=0.6");
    }
    
    // Hero icons
    if (heroIcons.length) {
        heroTl.from(heroIcons, {
            opacity: 0,
            scale: 0,
            rotation: -180,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)"
        }, "-=0.5");
    }
    
    // Scroll indicator
    if (scrollIndicator) {
        heroTl.from(scrollIndicator, {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.3");
    }
    
    // Gear parallax on scroll
    gears.forEach((gear, i) => {
        gsap.to(gear, {
            scrollTrigger: {
                trigger: ".hero-build",
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            y: (i + 1) * -80,
            rotation: (i % 2 === 0) ? 180 : -180
        });
    });
    
    // Hero parallax fade
    if (heroContent) {
        gsap.to(heroContent, {
            scrollTrigger: {
                trigger: ".hero-build",
                start: "top top",
                end: "80% top",
                scrub: 1.5
            },
            y: -120,
            opacity: 0,
            scale: 0.95
        });
    }
    
    // Blueprint grid parallax
    gsap.to(".blueprint-grid", {
        scrollTrigger: {
            trigger: ".hero-build",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        backgroundPosition: "50px 100px"
    });
}

// ============================================
// SECTION 1: Paradox Cards
// ============================================

function initSection1() {
    const section = document.querySelector("#section-1");
    if (!section) return;
    
    // Section header
    gsap.from("#section-1 .section-header", {
        scrollTrigger: {
            trigger: "#section-1",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });
    
    // Paradox cards - staggered slide in
    const paradoxCards = gsap.utils.toArray(".paradox-card");
    paradoxCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -80,
            rotateY: 5,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out"
        });
        
        // Emoji pop
        const emoji = card.querySelector(".paradox-emoji");
        if (emoji) {
            gsap.from(emoji, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                scale: 0,
                rotation: -30,
                duration: 0.6,
                delay: 0.3 + i * 0.15,
                ease: "back.out(1.7)"
            });
        }
    });
    
    // Paradox insight
    gsap.from(".paradox-insight", {
        scrollTrigger: {
            trigger: ".paradox-insight",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
    });
}

// ============================================
// SECTION 2: Evolution Comparison
// ============================================

function initSection2() {
    const section = document.querySelector("#section-2");
    if (!section) return;
    
    // Section header
    gsap.from("#section-2 .section-header", {
        scrollTrigger: {
            trigger: "#section-2",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });
    
    // Nature side - slide from left
    gsap.from(".nature-side", {
        scrollTrigger: {
            trigger: ".evolution-compare",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // Human side - slide from right
    gsap.from(".human-side", {
        scrollTrigger: {
            trigger: ".evolution-compare",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // VS badge - pop in
    gsap.from(".vs-badge", {
        scrollTrigger: {
            trigger: ".evolution-compare",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0,
        rotation: 360,
        duration: 0.8,
        delay: 0.5,
        ease: "back.out(1.7)"
    });
    
    // Side icons
    gsap.from(".side-icon", {
        scrollTrigger: {
            trigger: ".evolution-compare",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: -30,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.3,
        ease: "power3.out"
    });
    
    // Timeline bars
    gsap.from(".timeline-bar", {
        scrollTrigger: {
            trigger: ".evolution-compare",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        stagger: 0.2,
        delay: 0.6,
        ease: "power3.out"
    });
    
    // Speed insight
    gsap.from(".speed-insight", {
        scrollTrigger: {
            trigger: ".speed-insight",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    });
    
    // DNA strand parallax
    gsap.to(".dna-strand", {
        scrollTrigger: {
            trigger: "#section-2",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: -100,
        rotation: 15
    });
}

// ============================================
// SECTION 3: Engineering Showcase
// ============================================

function initSection3() {
    const section = document.querySelector("#section-3");
    if (!section) return;
    
    // Section header
    gsap.from("#section-3 .section-header", {
        scrollTrigger: {
            trigger: "#section-3",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });
    
    // Showcase items
    const showcaseItems = gsap.utils.toArray(".showcase-item");
    showcaseItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out"
        });
        
        // Icons animation
        const natureIcon = item.querySelector(".nature-icon");
        const buildIcon = item.querySelector(".build-icon");
        const arrow = item.querySelector(".arrow-icon");
        
        if (natureIcon) {
            gsap.from(natureIcon, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: -30,
                duration: 0.8,
                delay: 0.3 + i * 0.2,
                ease: "power3.out"
            });
        }
        
        if (arrow) {
            gsap.from(arrow, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                scale: 0,
                duration: 0.5,
                delay: 0.5 + i * 0.2,
                ease: "back.out(1.7)"
            });
        }
        
        if (buildIcon) {
            gsap.from(buildIcon, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: 30,
                duration: 0.8,
                delay: 0.6 + i * 0.2,
                ease: "power3.out"
            });
        }
    });
    
    // Engineering cards
    const engCards = gsap.utils.toArray(".eng-card");
    engCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -60,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });
}

// ============================================
// SECTION 4: The Wheel
// ============================================

function initSection4() {
    const section = document.querySelector("#section-4");
    if (!section) return;
    
    // Wheel statement
    gsap.from(".wheel-statement", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top 60%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // Wheel highlight special effect
    const wheelHighlight = document.querySelector(".wheel-highlight");
    if (wheelHighlight) {
        ScrollTrigger.create({
            trigger: "#section-4",
            start: "top 60%",
            onEnter: () => {
                gsap.fromTo(wheelHighlight, 
                    { scale: 1 },
                    { 
                        scale: 1.1, 
                        duration: 0.3, 
                        yoyo: true, 
                        repeat: 1,
                        ease: "power2.inOut"
                    }
                );
            },
            once: true
        });
    }
    
    // Wheel subtext
    gsap.from(".wheel-subtext", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top 50%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
    });
    
    // Spinning wheel parallax
    gsap.to(".spinning-wheel", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        rotation: "+=180",
        scale: 1.2
    });
}

// ============================================
// SECTION 5: AI Future
// ============================================

function initSection5() {
    const section = document.querySelector("#section-5");
    if (!section) return;
    
    // Section header
    gsap.from("#section-5 .section-header", {
        scrollTrigger: {
            trigger: "#section-5",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out"
    });
    
    // AI statement
    gsap.from(".ai-statement", {
        scrollTrigger: {
            trigger: ".ai-statement",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // AI icon
    gsap.from(".ai-icon", {
        scrollTrigger: {
            trigger: ".ai-statement",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        scale: 0,
        rotation: -30,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)"
    });
    
    // Moravec block
    gsap.from(".moravec-block", {
        scrollTrigger: {
            trigger: ".moravec-block",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // Moravec header
    gsap.from(".moravec-header", {
        scrollTrigger: {
            trigger: ".moravec-block",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out"
    });
    
    // Moravec text
    gsap.from(".moravec-text", {
        scrollTrigger: {
            trigger: ".moravec-content",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out"
    });
    
    // Moravec quote
    gsap.from(".moravec-quote", {
        scrollTrigger: {
            trigger: ".moravec-quote",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -30,
        duration: 1,
        ease: "power3.out"
    });
    
    // Neural net background pulse
    gsap.to(".neural-net-bg", {
        scrollTrigger: {
            trigger: "#section-5",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        scale: 1.1
    });
}

// ============================================
// SCROLL PROGRESS
// ============================================

function initScrollProgress() {
    const progressBar = document.querySelector("#progressBar") || document.querySelector(".progress-bar");
    if (!progressBar) return;

    gsap.to(progressBar, {
        scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5
        },
        scaleX: 1,
        ease: "none"
    });
}

// ============================================
// NAV SCROLL
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

function initBlogAnimations() {
    document.fonts.ready.then(() => {
        initHeroAnimation();
        initSection1();
        initSection2();
        initSection3();
        initSection4();
        initSection5();
        initScrollProgress();
        initNavScroll();
        
        ScrollTrigger.refresh();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBlogAnimations);
} else {
    initBlogAnimations();
}

// Resize handler
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
