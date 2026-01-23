// ============================================
// TRUTH IN MATHS AND MYTHS - ANIMATIONS
// A Philosophical Visual Journey
// ============================================

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimation();
    initDialogueAnimation();
    initArchetypesAnimation();
    initMetaWorldAnimation();
    initMeaningAnimation();
    initDivideAnimation();
    initScrollProgress();
});

// ============================================
// HERO ANIMATION
// ============================================

function initHeroAnimation() {
    const heroTl = gsap.timeline();
    
    // Geometric pattern rotation enhancement
    gsap.to('.geo-circle', {
        rotation: 360,
        duration: 60,
        repeat: -1,
        ease: 'none',
        stagger: {
            each: 10,
            from: 'end'
        }
    });
    
    // Title entrance - staggered reveal
    heroTl.from('.hero-eyebrow', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3
    })
    .from('.title-line-1 .title-word', {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power4.out'
    }, '-=0.5')
    .from('.title-word-small', {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: 'back.out(1.7)'
    }, '-=0.6')
    .from('.title-math', {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.4')
    .from('.title-ampersand', {
        opacity: 0,
        scale: 0,
        rotation: 180,
        duration: 0.6,
        ease: 'back.out(2)'
    }, '-=0.7')
    .from('.title-myths', {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.7')
    .from('.hero-subtitle', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-scroll-indicator', {
        opacity: 0,
        duration: 1
    }, '-=0.3');
    
    // Parallax fade on scroll
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero-myths',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 100,
        opacity: 0
    });
    
    // Geometric pattern parallax
    gsap.to('.geo-pattern', {
        scrollTrigger: {
            trigger: '.hero-myths',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        scale: 1.3,
        opacity: 0.3
    });
}

// ============================================
// DIALOGUE ANIMATION
// ============================================

function initDialogueAnimation() {
    // Section header
    gsap.from('#section-1 .section-header', {
        scrollTrigger: {
            trigger: '#section-1',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Chalkboard fade in
    gsap.from('.dialogue-backdrop', {
        scrollTrigger: {
            trigger: '.dialogue-stage',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 50,
        duration: 1.5,
        ease: 'power3.out'
    });
    
    // Dialogue lines - typewriter-like stagger
    const dialogueLines = gsap.utils.toArray('.dialogue-line');
    
    dialogueLines.forEach((line, i) => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: '.dialogue-exchange',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 30,
            x: line.classList.contains('teacher') ? 50 : -50,
            duration: 0.8,
            delay: i * 0.4,
            ease: 'power3.out'
        });
    });
    
    // Revelation quote - dramatic entrance
    gsap.from('.revelation-quote', {
        scrollTrigger: {
            trigger: '.revelation-quote',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        ease: 'power4.out'
    });
    
    // Quote glow pulse
    gsap.to('.revelation-quote blockquote', {
        scrollTrigger: {
            trigger: '.revelation-quote',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1
        },
        textShadow: '0 0 60px rgba(252, 211, 77, 0.6)'
    });
}

// ============================================
// ARCHETYPES ANIMATION
// ============================================

function initArchetypesAnimation() {
    // Section header
    gsap.from('#section-2 .section-header', {
        scrollTrigger: {
            trigger: '#section-2',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Archetype cards - rise from below with stagger
    const archetypeCards = gsap.utils.toArray('.archetype-card');
    
    archetypeCards.forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: '.archetype-visuals',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 80,
            rotationY: 30,
            duration: 1,
            delay: i * 0.2,
            ease: 'power3.out'
        });
        
        // Symbol pulse animation
        const symbol = card.querySelector('.archetype-symbol');
        if (symbol) {
            gsap.from(symbol, {
                scrollTrigger: {
                    trigger: '.archetype-visuals',
                    start: 'top 70%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0,
                duration: 0.8,
                delay: i * 0.2 + 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        }
    });
    
    // Archetype text
    gsap.from('.archetype-text .body-text', {
        scrollTrigger: {
            trigger: '.archetype-text',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
    });
}

// ============================================
// META WORLD ANIMATION
// ============================================

function initMetaWorldAnimation() {
    // Section header
    gsap.from('#section-3 .section-header', {
        scrollTrigger: {
            trigger: '#section-3',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Meta void background pulse intensifies on scroll
    gsap.to('.meta-void', {
        scrollTrigger: {
            trigger: '#section-3',
            start: 'top center',
            end: 'bottom center',
            scrub: 1
        },
        opacity: 0.6,
        scale: 1.2
    });
    
    // Meta intro
    gsap.from('.meta-intro', {
        scrollTrigger: {
            trigger: '.meta-intro',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Term highlight glow
    gsap.from('.term-highlight', {
        scrollTrigger: {
            trigger: '.meta-intro',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        textShadow: 'none',
        color: 'var(--color-text)',
        duration: 1,
        delay: 0.5,
        ease: 'power2.out'
    });
    
    // Question orbs - float in from different directions
    const questionOrbs = gsap.utils.toArray('.question-orb');
    const directions = [-100, 100, -100]; // x offsets
    
    questionOrbs.forEach((orb, i) => {
        gsap.from(orb, {
            scrollTrigger: {
                trigger: '.floating-questions',
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: directions[i],
            y: 50,
            scale: 0.8,
            duration: 1.2,
            delay: i * 0.3,
            ease: 'power3.out'
        });
    });
    
    // Continuous floating animation for question orbs
    questionOrbs.forEach((orb, i) => {
        gsap.to(orb, {
            y: '+=15',
            duration: 2 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.3
        });
    });
}

// ============================================
// MEANING ANIMATION
// ============================================

function initMeaningAnimation() {
    // Section header
    gsap.from('#section-4 .section-header', {
        scrollTrigger: {
            trigger: '#section-4',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Insight items - slide in from left
    const insightItems = gsap.utils.toArray('.insight-item');
    
    insightItems.forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            x: -80,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out'
        });
        
        // Marker pulse
        const marker = item.querySelector('.insight-marker');
        if (marker) {
            gsap.from(marker, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0,
                duration: 0.5,
                delay: i * 0.15 + 0.3,
                ease: 'back.out(2)'
            });
        }
    });
}

// ============================================
// DIVIDE ANIMATION
// ============================================

function initDivideAnimation() {
    // Section header
    gsap.from('#section-5 .section-header', {
        scrollTrigger: {
            trigger: '#section-5',
            start: 'top 75%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Divide intro
    gsap.from('.divide-intro', {
        scrollTrigger: {
            trigger: '.divide-intro',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });
    
    // Physical panel - slide from left
    gsap.from('.panel-physical', {
        scrollTrigger: {
            trigger: '.comparison-panels',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -100,
        rotationY: 15,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Meta panel - slide from right
    gsap.from('.panel-meta', {
        scrollTrigger: {
            trigger: '.comparison-panels',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: 100,
        rotationY: -15,
        duration: 1.2,
        ease: 'power3.out'
    });
    
    // Divider symbol - pop in
    gsap.from('.panel-divider', {
        scrollTrigger: {
            trigger: '.comparison-panels',
            start: 'top 65%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'elastic.out(1, 0.5)'
    });
}

// ============================================
// SCROLL PROGRESS
// ============================================

function initScrollProgress() {
    gsap.to('#progressBar', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3
        },
        scaleX: 1,
        transformOrigin: 'left center',
        ease: 'none'
    });
    
    // Set initial state
    gsap.set('#progressBar', { scaleX: 0 });
}


