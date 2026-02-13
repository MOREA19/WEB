const translations = {
    id: {
        navAbout: "Tentang",
        navProjects: "Projek",
        navSkills: "Keahlian",
        navContact: "Hubungi",
        langText: "Bahasa",

        aboutTitle: "Tentang",
        aboutIntro: "Halo! Saya adalah mahasiswa semester 4 yang memiliki ketertarikan mendalam pada teknologi web dan kecerdasan buatan.",
        aboutBio1: "Saat ini saya sedang aktif menempuh studi di Universitas Siliwangi dan mengeksplorasi dunia pengembangan perangkat lunak. Fokus utama saya adalah membangun antarmuka web yang bersih, responsif, dan mudah digunakan.",
        aboutBio2: "Saya percaya bahwa teknologi harus memudahkan kehidupan sehari-hari. Di waktu luang, hobi saya adalah mempelajari hal-hal baru seputar AI, bereksperimen dengan kode, dan terus mencari cara kreatif untuk memecahkan masalah.",

        projectsTitle: "Projek",
        project1Name: "Warung Digital Kelontong Arkan",
        project1Desc: "Warung Digital Kelontong Arkan adalah aplikasi web untuk digitalisasi warung/UMKM yang menampilkan produk dan informasi usaha secara online dengan antarmuka yang responsif dan mudah digunakan. Saya berperan sebagai Frontend & Backend Developer dalam pengembangan aplikasi ini menggunakan React dan TypeScript, dengan fokus pada performa, kemudahan penggunaan (user experience), serta struktur kode yang terorganisir.",
        project2Name: "Payung Geulis Tasikmalaya",
        project2Desc: "Payung Geulis Tasikmalaya adalah website yang bertujuan untuk mempromosikan dan memperkenalkan produk budaya lokal Payung Geulis Tasikmalaya secara digital. Saya berperan sebagai Frontend Developer dalam proyek ini yang masih dalam tahap pengembangan (ongoing development), menggunakan teknologi React dan TypeScript untuk membangun antarmuka yang responsif, modern, dan mudah digunakan.",
        project3Name: "Portofolio Website",
        project3Desc: "Saya membuat portofolio website dengan smooth scrolling, subtle animations, dan optimal performance. Didesain dengan prinsip aksesibilitas terbaik.",
        viewProject: "Lihat Projek",

        skillsTitle: "Keahlian",
        skillCategory1: "Languages",
        skillCategory2: "Frameworks & Libs",
        skillCategory3: "Tools & Design",

        contactTitle: "Hubungi",
        contactIntro: "Jika Anda memiliki proyek yang menarik atau hanya ingin berbicara tentang pengembangan web, jangan ragu untuk menghubungi saya.",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactLocation: "Lokasi",
        contactSocial: "Media Sosial",
        namePlaceholder: "Nama",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Subjek",
        messagePlaceholder: "Pesan",
        sendBtn: "Kirim Pesan",

        footerText: "&copy; 2026 Adithya Nurrahman. All rights reserved."
    },
    en: {
        navAbout: "About",
        navProjects: "Projects",
        navSkills: "Skills",
        navContact: "Contact",
        langText: "Language",

        aboutTitle: "About",
        aboutIntro: "Hello! I am a 4th semester student with a deep interest in web technology and artificial intelligence.",
        aboutBio1: "I am currently studying at Siliwangi University and exploring the world of software development. My main focus is building clean, responsive, and user-friendly web interfaces.",
        aboutBio2: "I believe that technology should make everyday life easier. In my free time, my hobbies include learning new things about AI, experimenting with code, and constantly looking for creative ways to solve problems.",

        projectsTitle: "Projects",
        project1Name: "Warung Digital Kelontong Arkan",
        project1Desc: "Warung Digital Kelontong Arkan is a web application for digitizing small shops/SMEs that displays products and business information online with a responsive and user-friendly interface. I served as Frontend & Backend Developer in the development of this application using React and TypeScript, with a focus on performance, user experience, and well-organized code structure.",
        project2Name: "Payung Geulis Tasikmalaya",
        project2Desc: "Payung Geulis Tasikmalaya is a website aimed at promoting and introducing local cultural products of Payung Geulis Tasikmalaya digitally. I served as a Frontend Developer in this project which is still in development stages, using React and TypeScript technology to build responsive, modern, and user-friendly interfaces.",
        project3Name: "Portfolio Website",
        project3Desc: "I created a portfolio website with smooth scrolling, subtle animations, and optimal performance. Designed with best accessibility principles.",
        viewProject: "View Project",

        skillsTitle: "Skills",
        skillCategory1: "Languages",
        skillCategory2: "Frameworks & Libs",
        skillCategory3: "Tools & Design",

        contactTitle: "Contact",
        contactIntro: "If you have an interesting project or just want to talk about web development, feel free to contact me.",
        contactEmail: "Email",
        contactPhone: "Phone",
        contactLocation: "Location",
        contactSocial: "Social Media",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Message",
        sendBtn: "Send Message",

        footerText: "&copy; 2026 Adithya Nurrahman. All rights reserved."
    }
};

let currentLanguage = localStorage.getItem('selectedLanguage') || 'id';

function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    document.querySelectorAll('[data-i18n-key]').forEach(element => {
        const key = element.getAttribute('data-i18n-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {

    updateLanguage(currentLanguage);

    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.getElementById('langDropdown');
    const langOptions = document.querySelectorAll('.lang-option');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', () => {
            langDropdown.classList.toggle('active');
            langToggle.setAttribute('aria-expanded', langDropdown.classList.contains('active'));
        });

        langOptions.forEach(option => {
            option.addEventListener('click', () => {
                const selectedLang = option.getAttribute('data-lang');
                currentLanguage = selectedLang;
                updateLanguage(selectedLang);

                langDropdown.classList.remove('active');
                langToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('click', (e) => {
            const langSelector = document.querySelector('.lang-selector');
            if (langSelector && !langSelector.contains(e.target)) {
                langDropdown.classList.remove('active');
                langToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                history.pushState(null, null, targetId);
            }
        });
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = currentLanguage === 'id' ? 'Mengirim...' : 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert(currentLanguage === 'id' ? 'Terima kasih! Pesan Anda telah dikirim.' : 'Thank you! Your message has been sent.');
                contactForm.reset();
                submitBtn.innerText = currentLanguage === 'id' ? 'Pesan Terkirim' : 'Message Sent';

                setTimeout(() => {
                    submitBtn.innerText = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            }, 1000);
        });
    }

    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-item, .skill-category, .intro-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
        .fade-in-up {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(styleSheet);
});