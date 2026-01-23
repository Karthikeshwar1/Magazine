/**
 * Magazine Blog - DRAMATIC STORYTELLING ANIMATIONS
 * Cinematic scroll-driven experience with GSAP
 */

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// ============================================
// HERO SECTION - CINEMATIC ENTRANCE
// ============================================

function initHeroAnimation() {
    const heroEyebrow = document.querySelector(".hero-eyebrow");
    const titleWords = document.querySelectorAll(".title-word");
    const scrollIndicator = document.querySelector(".hero-scroll-indicator");
    
    // Master timeline for hero
    const heroTl = gsap.timeline({
        defaults: { ease: "power4.out" }
    });

    // Dramatic entrance sequence
    if (heroEyebrow) {
        heroTl.from(heroEyebrow, {
            opacity: 0,
            y: 30,
            duration: 1.2,
            delay: 0.5
        });
    }
    
    if (titleWords.length) {
        heroTl.from(titleWords, {
            opacity: 0,
            y: 80,
            rotateX: 20,
            duration: 1.5,
            stagger: 0.2,
            ease: "power4.out"
        }, "-=0.8");
    }
    
    if (scrollIndicator) {
        heroTl.from(scrollIndicator, {
            opacity: 0,
            duration: 1,
            ease: "power2.inOut"
        }, "-=0.5");
    }

    // Cinematic parallax fade on scroll
    const heroContent = document.querySelector(".hero-content");
    const heroSection = document.querySelector(".hero-section");
    
    if (heroContent && heroSection) {
        // Content fades and moves up
        gsap.to(heroContent, {
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "80% top",
                scrub: 1.5
            },
            y: -150,
            opacity: 0,
            scale: 0.95,
            filter: "blur(10px)"
        });
        
        // Background parallax
        gsap.to(heroSection, {
            scrollTrigger: {
                trigger: heroSection,
                start: "top top",
                end: "bottom top",
                scrub: 1
            },
            backgroundPosition: "50% 30%"
        });
    }
}

// ============================================
// SECTION 1: Human Communication - REVEAL
// ============================================

function initSection1() {
    const section = document.querySelector("#section-1");
    if (!section) return;
    
    // Section header - dramatic slide in
    gsap.from("#section-1 .section-header", {
        scrollTrigger: {
            trigger: "#section-1",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power3.out"
    });

    // Intro text - staggered reveal effect
    const introTexts = document.querySelectorAll("#section-1 .intro-text");
    introTexts.forEach((text, i) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 40,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out"
        });
    });

    // Insight cards - cinematic 3D entrance
    const cards = gsap.utils.toArray("#section-1 .insight-card");
    
    cards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            x: -80,
            rotateY: 10,
            duration: 1,
            delay: i * 0.15,
            ease: "power3.out"
        });
    });
}

// ============================================
// SECTION 2: Language - QUOTE SPOTLIGHT
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
        duration: 1.2,
        ease: "power3.out"
    });

    // Pull quote - dramatic spotlight effect
    const pullQuote = document.querySelector("#section-2 .pull-quote-container");
    if (pullQuote) {
        gsap.from(pullQuote, {
            scrollTrigger: {
                trigger: pullQuote,
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            scale: 0.85,
            duration: 1.5,
            ease: "power4.out"
        });
    }

    // Body text - flowing reveal
    const bodyTexts = document.querySelectorAll("#section-2 .body-text");
    bodyTexts.forEach((text, i) => {
        gsap.from(text, {
            scrollTrigger: {
                trigger: text,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 30,
            duration: 1,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });

    // Key insight
    const keyInsight = document.querySelector("#section-2 .key-insight");
    if (keyInsight) {
        gsap.from(keyInsight, {
            scrollTrigger: {
                trigger: keyInsight,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 30,
            duration: 1,
            ease: "power3.out"
        });
    }
}

// ============================================
// SECTION 3: AI - DIGITAL AESTHETIC
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
        duration: 1.2,
        ease: "power3.out"
    });

    // Terminal block - futuristic entrance
    const terminal = document.querySelector("#section-3 .terminal-block");
    if (terminal) {
        gsap.from(terminal, {
            scrollTrigger: {
                trigger: terminal,
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 40,
            duration: 1.2,
            ease: "power3.out"
        });
        
        // Terminal text typewriter-ish effect
        const terminalTexts = terminal.querySelectorAll(".terminal-text");
        terminalTexts.forEach((text, i) => {
            gsap.from(text, {
                scrollTrigger: {
                    trigger: terminal,
                    start: "top 70%",
                    toggleActions: "play none none reverse"
                },
                opacity: 0,
                x: -20,
                duration: 0.6,
                delay: 0.3 + (i * 0.2),
                ease: "power2.out"
            });
        });
    }

    // LLM highlight - glitch effect
    const llmHighlight = document.querySelector(".llm-highlight");
    if (llmHighlight) {
        ScrollTrigger.create({
            trigger: ".llm-highlight",
            start: "top 80%",
            onEnter: () => {
                const glitchTl = gsap.timeline();
                glitchTl
                    .to(llmHighlight, { skewX: 10, x: 5, duration: 0.05 })
                    .to(llmHighlight, { skewX: -8, x: -3, duration: 0.05 })
                    .to(llmHighlight, { skewX: 5, x: 2, duration: 0.05 })
                    .to(llmHighlight, { skewX: -3, x: -1, duration: 0.05 })
                    .to(llmHighlight, { skewX: 0, x: 0, duration: 0.1 })
                    .to(llmHighlight, { 
                        textShadow: "0 0 40px rgba(0, 229, 255, 0.8)",
                        duration: 0.3 
                    });
            },
            once: true
        });
    }

    // Body text
    gsap.from("#section-3 .ai-body .body-text", {
        scrollTrigger: {
            trigger: "#section-3 .ai-body",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    });

    // Sacred note
    gsap.from("#section-3 .sacred-note", {
        scrollTrigger: {
            trigger: "#section-3 .sacred-note",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    });
}

// ============================================
// SECTION 4: Ocean - IMMERSIVE METAPHOR
// ============================================

function initSection4() {
    const section = document.querySelector("#section-4");
    if (!section) return;
    
    // Section header
    gsap.from("#section-4 .section-header", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power3.out"
    });

    // Metaphor lines - dramatic sequential reveal
    const metaphorLines = gsap.utils.toArray("#section-4 .metaphor-line");
    
    metaphorLines.forEach((line, i) => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: "#section-4 .metaphor-display",
                start: "top 65%",
                toggleActions: "play none none reverse"
            },
            opacity: 0,
            y: 50,
            duration: 1.2,
            delay: i * 0.3,
            ease: "power4.out"
        });
    });

    // Voyage insight
    gsap.from("#section-4 .voyage-insight", {
        scrollTrigger: {
            trigger: "#section-4 .voyage-insight",
            start: "top 75%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 1.2,
        ease: "power3.out"
    });

    // Closing thought
    gsap.from("#section-4 .closing-thought", {
        scrollTrigger: {
            trigger: "#section-4 .closing-thought",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out"
    });

    // Wave parallax - depth effect
    gsap.to("#section-4 .wave-1", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: -50,
        scale: 1.05
    });

    gsap.to("#section-4 .wave-2", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: -80
    });
    
    gsap.to("#section-4 .wave-3", {
        scrollTrigger: {
            trigger: "#section-4",
            start: "top bottom",
            end: "bottom top",
            scrub: 1
        },
        y: -120
    });
}

// ============================================
// SCROLL PROGRESS INDICATOR
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
// NAVIGATION SCROLL BEHAVIOR
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
// SECTION TRANSITIONS
// ============================================

function initSectionTransitions() {
    // Sections are now visible by default, no fade needed
}

// ============================================
// INITIALIZATION
// ============================================

function initBlogAnimations() {
    // Wait for fonts to be ready
    document.fonts.ready.then(() => {
        initHeroAnimation();
        initSection1();
        initSection2();
        initSection3();
        initSection4();
        initScrollProgress();
        initNavScroll();
        initSectionTransitions();
        
        // Refresh ScrollTrigger after everything is set up
        ScrollTrigger.refresh();
    });
}

// Run on DOM ready
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initBlogAnimations);
} else {
    initBlogAnimations();
}

// Refresh on window resize (with debounce)
let resizeTimeout;
window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 250);
});
