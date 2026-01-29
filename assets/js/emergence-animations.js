/**
 * EMERGENCE AND MEANING
 * Cosmic/Particle Scroll Animations
 */

gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO SECTION - Cosmic Entrance
// ============================================

function initHeroAnimation() {
    const heroContent = document.querySelector(".hero-content");
    const titleLines = document.querySelectorAll(".hero-title-emergence .title-line");
    const particles = document.querySelectorAll(".em-particle");
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
    
    // Title lines - staggered cosmic reveal
    if (titleLines.length) {
        heroTl.from(titleLines, {
            opacity: 0,
            y: 80,
            scale: 0.9,
            duration: 1.2,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.6");
    }
    
    // Scroll indicator
    if (scrollIndicator) {
        heroTl.from(scrollIndicator, {
            opacity: 0,
            y: 20,
            duration: 0.8
        }, "-=0.3");
    }
    
    // Particles entrance
    particles.forEach((particle, i) => {
        gsap.from(particle, {
            opacity: 0,
            scale: 0,
            duration: 1,
            delay: 0.5 + i * 0.1,
            ease: "back.out(1.7)"
        });
    });
    
    // Cosmic background parallax
    gsap.to(".cosmic-bg", {
        scrollTrigger: {
            trigger: ".hero-emergence",
            start: "top top",
            end: "bottom top",
            scrub: 1
        },
        scale: 1.2,
        opacity: 0.3
    });
    
    // Hero parallax fade
    if (heroContent) {
        gsap.to(heroContent, {
            scrollTrigger: {
                trigger: ".hero-emergence",
                start: "top top",
                end: "80% top",
                scrub: 1.5
            },
            y: -120,
            opacity: 0,
            scale: 0.95
        });
    }
    
    // Particles scatter on scroll
    particles.forEach((particle, i) => {
        gsap.to(particle, {
            scrollTrigger: {
                trigger: ".hero-emergence",
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            y: (i % 2 === 0) ? -200 : 200,
            x: (i % 3 === 0) ? -100 : 100,
            scale: 0.5,
            opacity: 0
        });
    });
}

// ============================================
// SECTION 1: What is Emergence
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
    
    // Image container
    gsap.from(".emergence-image-container", {
        scrollTrigger: {
            trigger: ".emergence-image-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });
    
    // Emergence definition
    gsap.from(".emergence-definition", {
        scrollTrigger: {
            trigger: ".emergence-definition",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out"
    });
    
    // Aristotle quote - dramatic reveal
    gsap.from(".aristotle-quote", {
        scrollTrigger: {
            trigger: ".aristotle-quote",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // Quote text glow effect
    ScrollTrigger.create({
        trigger: ".aristotle-quote",
        start: "top 70%",
        onEnter: () => {
            gsap.to(".aristotle-quote p", {
                textShadow: "0 0 30px rgba(155, 89, 182, 0.3)",
                duration: 0.8
            });
        },
        once: true
    });
    
    // Cells example
    gsap.from(".cells-example", {
        scrollTrigger: {
            trigger: ".cells-example",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out"
    });
    
    // Cells icon pop
    gsap.from(".cells-icon", {
        scrollTrigger: {
            trigger: ".cells-example",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        scale: 0,
        rotation: -30,
        duration: 0.8,
        delay: 0.3,
        ease: "back.out(1.7)"
    });
    
    // Cell cluster animation (background visual)
    gsap.to(".emergence-visual", {
        scrollTrigger: {
            trigger: "#section-1",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: -100,
        opacity: 0.05
    });
}

// ============================================
// SECTION 2: Rise of Meaning
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
        y: 30,
        duration: 1,
        ease: "power3.out"
    });
    
    // Complexity ladder - staggered climb
    const ladderSteps = gsap.utils.toArray(".ladder-step");
    ladderSteps.forEach((step, i) => {
        // Card slide in
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -80,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out"
        });
        
        // Icon pop
        const icon = step.querySelector(".step-icon");
        if (icon) {
            gsap.from(icon, {
                scrollTrigger: {
                    trigger: step,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                scale: 0,
                rotation: -20,
                duration: 0.6,
                delay: 0.3 + i * 0.2,
                ease: "back.out(1.7)"
            });
        }
        
        // Progress bar grow
        const bar = step.querySelector(".step-bar");
        if (bar) {
            gsap.from(bar, {
                scrollTrigger: {
                    trigger: step,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                scaleX: 0,
                transformOrigin: "left center",
                duration: 0.8,
                delay: 0.5 + i * 0.2,
                ease: "power3.out"
            });
        }
    });
    
    // Rise insight
    gsap.from(".rise-insight", {
        scrollTrigger: {
            trigger: ".rise-insight",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 1,
        ease: "power3.out"
    });
    
    // Rise question - dramatic
    gsap.from(".rise-question", {
        scrollTrigger: {
            trigger: ".rise-question",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // Gradient rise parallax
    gsap.to(".gradient-rise", {
        scrollTrigger: {
            trigger: "#section-2",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        backgroundPosition: "50% 100%"
    });
}

// ============================================
// SECTION 3: Fall of Meaning
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
        y: 30,
        duration: 1,
        ease: "power3.out"
    });
    
    // AI context
    gsap.from(".ai-context", {
        scrollTrigger: {
            trigger: ".ai-context",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -60,
        duration: 1,
        ease: "power3.out"
    });
    
    // Scenario intro
    gsap.from(".scenario-intro", {
        scrollTrigger: {
            trigger: ".meaning-scenarios",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out"
    });
    
    // Scenarios - staggered reveal with different directions
    const scenarios = gsap.utils.toArray(".scenario");
    scenarios.forEach((scenario, i) => {
        const direction = i % 2 === 0 ? -1 : 1;
        
        gsap.from(scenario, {
            scrollTrigger: {
                trigger: scenario,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: 60 * direction,
            rotateY: 5 * direction,
            duration: 1,
            ease: "power3.out"
        });
        
        // Icon animation
        const icon = scenario.querySelector(".scenario-icon");
        if (icon) {
            gsap.from(icon, {
                scrollTrigger: {
                    trigger: scenario,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                scale: 0,
                rotation: -30,
                duration: 0.6,
                delay: 0.3,
                ease: "back.out(1.7)"
            });
        }
    });
    
    // Void background pulse
    gsap.to(".void-bg", {
        scrollTrigger: {
            trigger: "#section-3",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        scale: 1.3,
        opacity: 0.1
    });
}

// ============================================
// SECTION 4: The Question
// ============================================

function initSection4() {
    const section = document.querySelector("#section-4");
    if (!section) return;
    
    // Final question - fade in with scale
    gsap.from(".final-question", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top 65%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out"
    });
    
    // Closing questions - staggered reveal
    gsap.from(".closing-q.q1", {
        scrollTrigger: {
            trigger: ".closing-questions",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from(".closing-divider", {
        scrollTrigger: {
            trigger: ".closing-questions",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        scale: 0.5,
        duration: 0.6,
        delay: 0.6,
        ease: "back.out(1.7)"
    });
    
    gsap.from(".closing-q.q2", {
        scrollTrigger: {
            trigger: ".closing-questions",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.9,
        ease: "power3.out"
    });
    
    // Text glow effects on reveal
    ScrollTrigger.create({
        trigger: ".closing-questions",
        start: "top 70%",
        onEnter: () => {
            gsap.to(".q1", {
                textShadow: "0 0 30px rgba(231, 76, 60, 0.4)",
                duration: 1,
                delay: 0.5
            });
            gsap.to(".q2", {
                textShadow: "0 0 30px rgba(46, 204, 113, 0.4)",
                duration: 1,
                delay: 1.2
            });
        },
        once: true
    });
    
    // Aurora parallax
    gsap.to(".question-aurora", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        scale: 1.2,
        rotation: 5
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
