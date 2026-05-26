/* --- LOGIKA STRONY (script.js) - WERSJA PREMIUM --- */

'use strict';

if (!window.magiaWspomnienInitialized) {
    window.magiaWspomnienInitialized = true;

    document.addEventListener('DOMContentLoaded', () => {
        
        /* --- 0. INICJALIZACJA LENIS (SMOOTH SCROLL) & GSAP --- */
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let lenis;

        if (typeof Lenis !== 'undefined' && !prefersReducedMotion) {
            lenis = new Lenis({
                duration: 1.2,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
                direction: 'vertical',
                gestureDirection: 'vertical',
                smooth: true,
                smoothTouch: false, 
                touchMultiplier: 2,
            });

            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }

        if (typeof gsap !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            if (!prefersReducedMotion) {
                // Animacja wejściowa sekcji Hero
                gsap.fromTo(".gs-reveal", 
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.1 }
                );

                // --- Animacje ScrollTrigger (Pojedyncze Elementy) ---
                const revealElements = document.querySelectorAll('.step-card, .testimonial-card, .gs-reveal:not(.hero-text-wrapper):not(.hero-subtitle):not(.hero-cta):not(.trust-badges)');
                revealElements.forEach((el) => {
                    gsap.fromTo(el, 
                        { y: 30, opacity: 0 },
                        {
                            scrollTrigger: {
                                trigger: el,
                                start: "top 85%", 
                                toggleActions: "play none none reverse"
                            },
                            y: 0, opacity: 1, duration: 0.8, ease: "power2.out"
                        }
                    );
                });

                // --- Kaskadowe pojawianie się Galerii / Cennika / FAQ (Stagger) ---
                const staggers = [
                    { trigger: '.gs-gallery-trigger', items: '.gs-stagger-gallery' },
                    { trigger: '.gs-pricing-trigger', items: '.gs-stagger-pricing' },
                    { trigger: '.gs-faq-trigger', items: '.gs-stagger-faq' }
                ];

                staggers.forEach(({trigger, items}) => {
                    if (document.querySelector(trigger)) {
                        gsap.fromTo(items, 
                            { y: 40, opacity: 0 },
                            {
                                scrollTrigger: { trigger: trigger, start: "top 75%", toggleActions: "play none none reverse" },
                                y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out"
                            }
                        );
                    }
                });
            } else {
                if (typeof gsap !== 'undefined') {
                    gsap.set(".gs-reveal, .step-card, .testimonial-card, .gs-stagger-gallery, .gs-stagger-pricing, .gs-stagger-faq", { opacity: 1, y: 0 });
                }
            }
        }

        /* --- STICKY NAV EFFECT --- */
        const nav = document.querySelector('.main-nav');
        if (nav) {
            const toggleNavState = () => {
                if (window.scrollY > 50) nav.classList.add('scrolled');
                else nav.classList.remove('scrolled');
            };
            window.addEventListener('scroll', toggleNavState, { passive: true });
            toggleNavState();
        }

        /* --- 1. WYDAJNY SLIDER Z CLIP-PATH (CSS Variables) --- */
        const sliders = document.querySelectorAll('.comparison-slider');

        sliders.forEach(slider => {
            let isMoving = false;

            const updateSliderPosition = (clientX) => {
                const rect = slider.getBoundingClientRect();
                // Ograniczenie wartości między 0 a szerokością elementu
                const positionX = Math.max(0, Math.min(clientX - rect.left, rect.width));
                const percentage = (positionX / rect.width) * 100;
                
                // Modyfikacja zmiennej CSS wprost na elemencie
                slider.style.setProperty('--position', `${percentage}%`);
            };

            slider.addEventListener('mousedown', (e) => {
                isMoving = true;
                updateSliderPosition(e.clientX);
            });

            document.addEventListener('mouseup', () => isMoving = false);

            slider.addEventListener('mousemove', (e) => {
                if (!isMoving) return;
                e.preventDefault(); 
                updateSliderPosition(e.clientX);
            });

            // Obsługa dotyku
            slider.addEventListener('touchstart', (e) => {
                isMoving = true;
                updateSliderPosition(e.touches[0].clientX);
            }, { passive: true });

            document.addEventListener('touchend', () => isMoving = false);

            slider.addEventListener('touchmove', (e) => {
                if (!isMoving) return;
                // Pozwalamy na natywny scroll (touch-action: pan-y w CSS zabezpiecza resztę)
                updateSliderPosition(e.touches[0].clientX);
            }, { passive: true });

            // A11y & Klawiatura
            slider.setAttribute('tabindex', '0');
            slider.setAttribute('role', 'slider');
            slider.setAttribute('aria-label', 'Porównanie zdjęcia przed i po renowacji');
            slider.setAttribute('aria-valuenow', '50');
            slider.setAttribute('aria-valuemin', '0');
            slider.setAttribute('aria-valuemax', '100');
            
            slider.addEventListener('keydown', (e) => {
                let currentPosStr = slider.style.getPropertyValue('--position') || '50%';
                let currentPos = parseFloat(currentPosStr);
                
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    currentPos -= 5;
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    currentPos += 5;
                }

                currentPos = Math.max(0, Math.min(currentPos, 100));
                slider.style.setProperty('--position', `${currentPos}%`);
                slider.setAttribute('aria-valuenow', currentPos);
            });
        });

        /* --- 2. BACK TO TOP BUTTON --- */
        const backToTop = document.getElementById('backToTop');
        
        if (backToTop) {
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (scrollTimeout) window.cancelAnimationFrame(scrollTimeout);
                scrollTimeout = window.requestAnimationFrame(() => {
                    if (window.scrollY > 500) backToTop.classList.add('show');
                    else backToTop.classList.remove('show');
                });
            }, { passive: true });

            backToTop.addEventListener('click', () => {
                if (lenis && !prefersReducedMotion) lenis.scrollTo(0, { duration: 1.2 });
                else window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        /* --- 3. KOPIOWANIE ADRESU E-MAIL --- */
        const copyBtn = document.getElementById('copyBtn');
        const emailText = document.getElementById('emailText');
        const copySuccess = document.getElementById('copySuccess');

        if (copyBtn && emailText) {
            copyBtn.addEventListener('click', async (e) => {
                e.preventDefault(); 
                const textToCopy = emailText.innerText;
                
                try {
                    await navigator.clipboard.writeText(textToCopy);
                    copySuccess.style.opacity = '1';
                    copyBtn.textContent = '✓ Skopiowano';
                    
                    setTimeout(() => {
                        copySuccess.style.opacity = '0';
                        copyBtn.textContent = 'Kopiuj';
                    }, 2500);
                } catch (err) {
                    console.error('Błąd kopiowania:', err);
                    prompt('Skopiuj adres e-mail:', textToCopy);
                }
            });
        }

        /* --- 4. OBSŁUGA PLIKÓW COOKIES --- */
        const cookieBanner = document.getElementById('cookie-banner');
        const acceptCookiesBtn = document.getElementById('acceptCookies');

        const checkCookieConsent = () => {
            try { return localStorage.getItem('cookiesAccepted') === 'true'; } 
            catch (e) { return document.cookie.includes('cookiesAccepted=true'); }
        };

        const setCookieConsent = () => {
            try { localStorage.setItem('cookiesAccepted', 'true'); } 
            catch (e) {
                const date = new Date();
                date.setFullYear(date.getFullYear() + 1);
                document.cookie = `cookiesAccepted=true; expires=${date.toUTCString()}; path=/; SameSite=Strict`;
            }
        };

        if (cookieBanner && !checkCookieConsent()) {
            setTimeout(() => cookieBanner.classList.add('active'), 1500); 
        }

        if (acceptCookiesBtn) {
            acceptCookiesBtn.addEventListener('click', () => {
                setCookieConsent();
                cookieBanner.classList.remove('active');
            });
        }

        /* --- 5. OBSŁUGA ZGÓD W CENNIKU (CHECKBOX) --- */
        const pricingPairs = [
            { checkboxId: 'consent-1', btnId: 'btn-1' },
            { checkboxId: 'consent-2', btnId: 'btn-2' }, 
            { checkboxId: 'consent-3', btnId: 'btn-3' }
        ];

        const refreshSingleButton = (cb, btn) => {
            if (!cb || !btn) return;
            if (cb.checked) {
                btn.classList.remove('disabled');
                btn.setAttribute('aria-disabled', 'false');
                btn.removeAttribute('tabindex');
            } else {
                btn.classList.add('disabled');
                btn.setAttribute('aria-disabled', 'true');
                btn.setAttribute('tabindex', '-1');
            }
        };

        pricingPairs.forEach(pair => {
            const checkbox = document.getElementById(pair.checkboxId);
            if (checkbox) {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        pricingPairs.forEach(otherPair => {
                            if (otherPair.checkboxId !== pair.checkboxId) {
                                const otherCb = document.getElementById(otherPair.checkboxId);
                                if (otherCb) {
                                    otherCb.checked = false;
                                    refreshSingleButton(otherCb, document.getElementById(otherPair.btnId));
                                }
                            }
                        });
                    }
                    refreshSingleButton(this, document.getElementById(pair.btnId));
                });
                refreshSingleButton(checkbox, document.getElementById(pair.btnId));
            }
        });

        /* --- 6. LAZY LOADING VIDEO --- */
        const videos = document.querySelectorAll('video');
        if ('IntersectionObserver' in window) {
            const videoObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const video = entry.target;
                        if (video.paused) video.play().catch(e => console.log('Autoplay info:', e));
                    } else {
                        const video = entry.target;
                        if (!video.paused) video.pause();
                    }
                });
            }, { threshold: 0.3 });
            videos.forEach(video => videoObserver.observe(video));
        }

        /* --- 7. SMOOTH SCROLL DLA KOTWIC --- */
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                const target = document.querySelector(href);
                
                if (target) {
                    e.preventDefault();
                    // Zmniejszono offset dla uwzględnienia ulepszonego stylizowania nagłówka
                    if (lenis && !prefersReducedMotion) {
                        lenis.scrollTo(target, { offset: -60, duration: 1.2 });
                    } else {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }
            });
        });

        /* --- 8. LOGIKA Q&A (AKORDEON A11Y) --- */
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                const isActive = item.classList.contains('active');
                
                // Zamknij wszystkie
                document.querySelectorAll('.faq-item').forEach(otherItem => {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                });
                
                // Otwórz kliknięty
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                    
                    if (lenis && !prefersReducedMotion && typeof ScrollTrigger !== 'undefined') {
                        setTimeout(() => ScrollTrigger.refresh(), 400); 
                    }
                }
            });
        });

        /* --- 9. WALIDACJA FORMULARZA --- */
        const contactForm = document.querySelector('form[action*="formsubmit"]');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                const name = this.querySelector('#name');
                const email = this.querySelector('#email');
                const message = this.querySelector('#message');

                if (name && name.value.trim().length < 2) {
                    e.preventDefault();
                    alert('Proszę podać poprawne imię (min. 2 znaki)');
                    return false;
                }
                if (email && !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    e.preventDefault();
                    alert('Proszę podać poprawny adres email');
                    return false;
                }
                if (message && message.value.trim().length < 10) {
                    e.preventDefault();
                    alert('Wiadomość jest zbyt krótka (min. 10 znaków)');
                    return false;
                }
            });
        }
        
        /* --- 10. MOBILE STICKY CTA --- */
        const mobileCta = document.getElementById('mobileStickyCta');
        if (mobileCta) {
            let ctaScrollTimeout;
            window.addEventListener('scroll', () => {
                if (ctaScrollTimeout) window.cancelAnimationFrame(ctaScrollTimeout);
                ctaScrollTimeout = window.requestAnimationFrame(() => {
                    if (window.scrollY > 600) mobileCta.classList.add('show');
                    else mobileCta.classList.remove('show');
                });
            }, { passive: true });
        }
    });
}