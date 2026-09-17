// ============================================================
// APL Pages Development — app.js
// Языки: RU / SR / EN / IT / DE / FR / PL / SK
// Валюты: EUR / USD
// Автоопределение языка + анимации
// ИСПРАВЛЕНА ПРОБЛЕМА С ПЕРЕКЛЮЧАТЕЛЕМ ЯЗЫКА
// ============================================================

console.log('APL APP.JS — BUILD v12 (mobile menu position fixed)');

const translations = {
  ru: {
    navHome: '🏠 Главная',
    navServices: '⚙️ Услуги',
    navContacts: '📧 Контакты',
    heroTitle: 'Цифровые решения для малого бизнеса',
    heroTypedPrefix: 'Создаём: ',
    heroTyped: ['Сайты под ключ', 'Telegram-боты', 'Автоматизацию', 'Интеграции с CRM'],
    heroSubtitle: '🚀 Сайты, Telegram-боты и автоматизация, созданные под задачи вашего бизнеса.',
    heroCTA: '💬 Обсудить проект',
    heroMeta: '💰 от €199 · ⏱️ запуск от 72 часов',
    whatCanCreate: '🎯 Что можно создать',
    digitalSolutions: '🛠️ Цифровые решения',
    supportTitle: '🔧 Поддержка',
    supportDesc: '✅ Техническое обслуживание, исправление ошибок, небольшие изменения, обновления и помощь в поддержании проекта в рабочем состоянии.',
    pricing: '📊 Финальная стоимость зависит от задачи и объёма работ.',
    currencyLabel: '💱 Валюта:',
    currencyNote: '💵 EUR — базовая валюта. Суммы в USD — справочные, по актуальному курсу.',
    perMonth: '/мес',
    ctaTitle: '❓ Есть задача, но не знаете, какое решение нужно?',
    ctaDesc: '💡 Расскажите о задаче — мы предложим подходящий вариант.',
    formTitle: '📝 Обсудить проект',
    formNameLabel: '👤 Имя',
    formContactLabel: '📱 Telegram / Email / другой контакт',
    formContactPlaceholder: '@telegram или email@example.com',
    formPhoneLabel: '☎️ Телефон',
    formBudgetLabel: '💰 Примерный бюджет',
    formBudgetPlaceholder: 'например, €500–1000',
    formTaskLabel: '🛠️ Что нужно создать?',
    formInfoLabel: '📝 Дополнительная информация',
    formSubmit: '✉️ Отправить заявку',
    formSuccess: '✅ Заявка отправлена. Мы свяжемся с вами в ближайшее время.',
    formError: '❌ Ошибка при отправке. Попробуйте ещё раз.',
    contactTitle: '📞 Контакты',
    footerDesc: '🌐 Цифровые решения для малого бизнеса.',
    privacyPolicy: '🔒 Политика конфиденциальности',
    terms: '📋 Условия',
    legalInfo: '⚖️ Правовая информация',
    legalHeading: '⚖️ Правовое',
    solutions: [
      { title: '🌐 Сайт для малого бизнеса', desc: 'Современный адаптивный сайт, оптимизированный под поиск.' },
      { title: '🎯 Лендинг', desc: 'Высококонверсионная страница для привлечения клиентов.' },
      { title: '🤖 Telegram-бот', desc: 'Автоматизация коммуникации и сбора заявок.' },
      { title: '🔗 Telegram → CRM', desc: 'Интеграция бота с вашей системой управления.' },
      { title: '📨 Форма → Telegram', desc: 'Мгновенные уведомления при новых заявках.' },
      { title: '⚡ Автоматизация процессов', desc: 'Рутинные задачи выполняются без участия человека.' },
      { title: '📊 Клиентская база', desc: 'Простая и удобная система управления лидами.' },
      { title: '🔌 Интеграции API', desc: 'Связь вашего проекта с внешними сервисами.' }
    ]
  },

  sr: {
    navHome: '🏠 Početna',
    navServices: '⚙️ Usluge',
    navContacts: '📧 Kontakti',
    heroTitle: 'Digitalna rešenja za mali biznis',
    heroTypedPrefix: 'Kreiramo: ',
    heroTyped: ['Sajtove po meri', 'Telegram botove', 'Automatizaciju', 'CRM integracije'],
    heroSubtitle: '🚀 Vebsajtovi, Telegram botovi i automatizacija, kreirani za potrebe vašeg poslovanja.',
    heroCTA: '💬 Razgovarajmo o projektu',
    heroMeta: '💰 od €199 · ⏱️ pokretanje od 72 sata',
    whatCanCreate: '🎯 Šta se može kreirati',
    digitalSolutions: '🛠️ Digitalna Rešenja',
    supportTitle: '🔧 Podrška',
    supportDesc: '✅ Tehnička podrška, ispravka grešaka, manje izmene, ažuriranja i pomoć u održavanju projekta u dobrom stanju.',
    pricing: '📊 Finalna cena zavisi od zadatka i obima rada.',
    currencyLabel: '💱 Valuta:',
    currencyNote: '💵 EUR je osnovna valuta. Iznosi u USD su informativni, prema trenutnom kursu.',
    perMonth: '/mes',
    ctaTitle: '❓ Imate zadatak, ali ne znate koje rešenje vam je potrebno?',
    ctaDesc: '💡 Ispričajte nam o zadatku — predložićemo odgovarajuću opciju.',
    formTitle: '📝 Razgovarajmo o projektu',
    formNameLabel: '👤 Ime',
    formContactLabel: '📱 Telegram / Email / drugi kontakt',
    formContactPlaceholder: '@telegram ili email@example.com',
    formPhoneLabel: '☎️ Telefon',
    formBudgetLabel: '💰 Okvirni budžet',
    formBudgetPlaceholder: 'na primer, €500–1000',
    formTaskLabel: '🛠️ Šta treba kreirati?',
    formInfoLabel: '📝 Dodatne informacije',
    formSubmit: '✉️ Pošalji zahtev',
    formSuccess: '✅ Zahtev je poslat. Kontaktiraćemo vas uskoro.',
    formError: '❌ Greška pri slanju. Pokušajte ponovo.',
    contactTitle: '📞 Kontakti',
    footerDesc: '🌐 Digitalna rešenja za mali biznis.',
    privacyPolicy: '🔒 Politika privatnosti',
    terms: '📋 Uslovi',
    legalInfo: '⚖️ Pravne informacije',
    legalHeading: '⚖️ Pravno',
    solutions: [
      { title: '🌐 Vebsajt za mali biznis', desc: 'Moderan i responzivan vebsajt, optimizovan za pretragu.' },
      { title: '🎯 Landing stranica', desc: 'Visokokonverzna stranica za privlačenje klijenata.' },
      { title: '🤖 Telegram bot', desc: 'Automatizacija komunikacije i prikupljanja zahteva.' },
      { title: '🔗 Telegram → CRM', desc: 'Integracija bota sa vašim sistemom upravljanja.' },
      { title: '📨 Forma → Telegram', desc: 'Trenutne notifikacije na nove zahteve.' },
      { title: '⚡ Automatizacija procesa', desc: 'Rutinski poslovi se izvršavaju bez ljudske intervencije.' },
      { title: '📊 Baza klijenata', desc: 'Jednostavan i praktičan sistem za upravljanje klijentima.' },
      { title: '🔌 API integracije', desc: 'Povezivanje vašeg projekta sa spoljnim servisima.' }
    ]
  },

  en: {
    navHome: '🏠 Home',
    navServices: '⚙️ Services',
    navContacts: '📧 Contacts',
    heroTitle: 'Digital Solutions for Small Business',
    heroTypedPrefix: 'We build: ',
    heroTyped: ['Websites', 'Telegram bots', 'Automation', 'CRM integrations'],
    heroSubtitle: '🚀 Websites, Telegram bots and automation, built for your business needs.',
    heroCTA: '💬 Discuss the project',
    heroMeta: '💰 from €199 · ⏱️ launch from 72 hours',
    whatCanCreate: '🎯 What Can Be Created',
    digitalSolutions: '🛠️ Digital Solutions',
    supportTitle: '🔧 Support',
    supportDesc: '✅ Technical support, bug fixes, minor changes, updates and help keeping your project in good working order.',
    pricing: '📊 Final price depends on the task and scope of work.',
    currencyLabel: '💱 Currency:',
    currencyNote: '💵 EUR is the base currency. USD amounts are indicative, based on the current exchange rate.',
    perMonth: '/mo',
    ctaTitle: '❓ Have a task but not sure which solution you need?',
    ctaDesc: '💡 Tell us about it — we will suggest the right option.',
    formTitle: '📝 Discuss the project',
    formNameLabel: '👤 Name',
    formContactLabel: '📱 Telegram / Email / other contact',
    formContactPlaceholder: '@telegram or email@example.com',
    formPhoneLabel: '☎️ Phone',
    formBudgetLabel: '💰 Approximate budget',
    formBudgetPlaceholder: 'e.g. €500–1000',
    formTaskLabel: '🛠️ What needs to be built?',
    formInfoLabel: '📝 Additional information',
    formSubmit: '✉️ Send request',
    formSuccess: '✅ Request sent. We will contact you shortly.',
    formError: '❌ Sending failed. Please try again.',
    contactTitle: '📞 Contacts',
    footerDesc: '🌐 Digital solutions for small business.',
    privacyPolicy: '🔒 Privacy Policy',
    terms: '📋 Terms',
    legalInfo: '⚖️ Legal Information',
    legalHeading: '⚖️ Legal',
    solutions: [
      { title: '🌐 Small business website', desc: 'A modern responsive website, optimised for search.' },
      { title: '🎯 Landing page', desc: 'A high-conversion page built to attract customers.' },
      { title: '🤖 Telegram bot', desc: 'Automates communication and lead collection.' },
      { title: '🔗 Telegram → CRM', desc: 'Connects the bot to your management system.' },
      { title: '📨 Form → Telegram', desc: 'Instant notifications for every new request.' },
      { title: '⚡ Process automation', desc: 'Routine tasks handled without human involvement.' },
      { title: '📊 Client database', desc: 'A simple and convenient lead management system.' },
      { title: '🔌 API integrations', desc: 'Connects your project to external services.' }
    ]
  },

  it: {
    navHome: '🏠 Home',
    navServices: '⚙️ Servizi',
    navContacts: '📧 Contatti',
    heroTitle: 'Soluzioni digitali per piccole imprese',
    heroTypedPrefix: 'Creiamo: ',
    heroTyped: ['Siti web', 'Bot Telegram', 'Automazione', 'Integrazioni CRM'],
    heroSubtitle: '🚀 Siti web, bot Telegram e automazione, creati per le esigenze della tua attività.',
    heroCTA: '💬 Parliamo del progetto',
    heroMeta: '💰 da €199 · ⏱️ avvio da 72 ore',
    whatCanCreate: '🎯 Cosa si può creare',
    digitalSolutions: '🛠️ Soluzioni Digitali',
    supportTitle: '🔧 Supporto',
    supportDesc: '✅ Assistenza tecnica, correzione di errori, piccole modifiche, aggiornamenti e aiuto a mantenere il progetto in buone condizioni.',
    pricing: '📊 Il prezzo finale dipende dal compito e dal volume di lavoro.',
    currencyLabel: '💱 Valuta:',
    currencyNote: '💵 EUR è la valuta di base. Gli importi in USD sono indicativi, al tasso di cambio attuale.',
    perMonth: '/mese',
    ctaTitle: '❓ Hai un compito ma non sai quale soluzione ti serve?',
    ctaDesc: '💡 Raccontaci il tuo compito — ti proporremo l\'opzione più adatta.',
    formTitle: '📝 Parliamo del progetto',
    formNameLabel: '👤 Nome',
    formContactLabel: '📱 Telegram / Email / altro contatto',
    formContactPlaceholder: '@telegram o email@example.com',
    formPhoneLabel: '☎️ Telefono',
    formBudgetLabel: '💰 Budget approssimativo',
    formBudgetPlaceholder: 'ad esempio, €500–1000',
    formTaskLabel: '🛠️ Cosa bisogna creare?',
    formInfoLabel: '📝 Informazioni aggiuntive',
    formSubmit: '✉️ Invia richiesta',
    formSuccess: '✅ Richiesta inviata. Ti contatteremo a breve.',
    formError: '❌ Errore durante l\'invio. Riprova.',
    contactTitle: '📞 Contatti',
    footerDesc: '🌐 Soluzioni digitali per piccole imprese.',
    privacyPolicy: '🔒 Privacy',
    terms: '📋 Termini',
    legalInfo: '⚖️ Informazioni legali',
    legalHeading: '⚖️ Legale',
    solutions: [
      { title: '🌐 Sito web per piccole imprese', desc: 'Un sito moderno e responsive, ottimizzato per la ricerca.' },
      { title: '🎯 Landing page', desc: 'Una pagina ad alta conversione per attirare clienti.' },
      { title: '🤖 Bot Telegram', desc: 'Automatizza la comunicazione e la raccolta di richieste.' },
      { title: '🔗 Telegram → CRM', desc: 'Collega il bot al tuo sistema di gestione.' },
      { title: '📨 Modulo → Telegram', desc: 'Notifiche immediate per ogni nuova richiesta.' },
      { title: '⚡ Automazione dei processi', desc: 'Le attività di routine si svolgono senza intervento umano.' },
      { title: '📊 Database clienti', desc: 'Un sistema semplice e pratico per gestire i contatti.' },
      { title: '🔌 Integrazioni API', desc: 'Collega il tuo progetto a servizi esterni.' }
    ]
  },

  de: {
    navHome: '🏠 Startseite',
    navServices: '⚙️ Leistungen',
    navContacts: '📧 Kontakt',
    heroTitle: 'Digitale Lösungen für kleine Unternehmen',
    heroTypedPrefix: 'Wir erstellen: ',
    heroTyped: ['Websites', 'Telegram-Bots', 'Automatisierung', 'CRM-Integrationen'],
    heroSubtitle: '🚀 Websites, Telegram-Bots und Automatisierung — zugeschnitten auf Ihr Unternehmen.',
    heroCTA: '💬 Projekt besprechen',
    heroMeta: '💰 ab €199 · ⏱️ Start ab 72 Stunden',
    whatCanCreate: '🎯 Was man erstellen kann',
    digitalSolutions: '🛠️ Digitale Lösungen',
    supportTitle: '🔧 Support',
    supportDesc: '✅ Technischer Support, Fehlerbehebung, kleine Änderungen, Updates und Hilfe, um das Projekt in gutem Zustand zu halten.',
    pricing: '📊 Der Endpreis hängt von der Aufgabe und vom Umfang der Arbeit ab.',
    currencyLabel: '💱 Währung:',
    currencyNote: '💵 EUR ist die Basiswährung. USD-Beträge sind Richtwerte zum aktuellen Wechselkurs.',
    perMonth: '/Monat',
    ctaTitle: '❓ Sie haben eine Aufgabe, wissen aber nicht, welche Lösung Sie brauchen?',
    ctaDesc: '💡 Erzählen Sie uns von der Aufgabe — wir schlagen die passende Lösung vor.',
    formTitle: '📝 Projekt besprechen',
    formNameLabel: '👤 Name',
    formContactLabel: '📱 Telegram / E-Mail / anderer Kontakt',
    formContactPlaceholder: '@telegram oder email@example.com',
    formPhoneLabel: '☎️ Telefon',
    formBudgetLabel: '💰 Ungefähres Budget',
    formBudgetPlaceholder: 'z. B. €500–1000',
    formTaskLabel: '🛠️ Was soll erstellt werden?',
    formInfoLabel: '📝 Zusätzliche Informationen',
    formSubmit: '✉️ Anfrage senden',
    formSuccess: '✅ Anfrage gesendet. Wir melden uns in Kürze.',
    formError: '❌ Fehler beim Senden. Bitte versuchen Sie es erneut.',
    contactTitle: '📞 Kontakt',
    footerDesc: '🌐 Digitale Lösungen für kleine Unternehmen.',
    privacyPolicy: '🔒 Datenschutzerklärung',
    terms: '📋 AGB',
    legalInfo: '⚖️ Rechtliche Informationen',
    legalHeading: '⚖️ Rechtliches',
    solutions: [
      { title: '🌐 Website für kleine Unternehmen', desc: 'Eine moderne, responsive Website, optimiert für die Suche.' },
      { title: '🎯 Landingpage', desc: 'Eine Seite mit hoher Konversionsrate, um Kunden zu gewinnen.' },
      { title: '🤖 Telegram-Bot', desc: 'Automatisiert Kommunikation und die Erfassung von Anfragen.' },
      { title: '🔗 Telegram → CRM', desc: 'Verbindet den Bot mit Ihrem Verwaltungssystem.' },
      { title: '📨 Formular → Telegram', desc: 'Sofortige Benachrichtigungen bei jeder neuen Anfrage.' },
      { title: '⚡ Prozessautomatisierung', desc: 'Routineaufgaben laufen ohne menschliches Eingreifen.' },
      { title: '📊 Kundendatenbank', desc: 'Ein einfaches und praktisches System zur Kundenverwaltung.' },
      { title: '🔌 API-Integrationen', desc: 'Verbindet Ihr Projekt mit externen Diensten.' }
    ]
  },

  fr: {
    navHome: '🏠 Accueil',
    navServices: '⚙️ Services',
    navContacts: '📧 Contacts',
    heroTitle: 'Solutions numériques pour petites entreprises',
    heroTypedPrefix: 'Nous créons : ',
    heroTyped: ['Sites web', 'Bots Telegram', 'Automatisation', 'Intégrations CRM'],
    heroSubtitle: '🚀 Sites web, bots Telegram et automatisation, conçus pour votre activité.',
    heroCTA: '💬 Discuter du projet',
    heroMeta: '💰 à partir de 199 € · ⏱️ lancement à partir de 72 heures',
    whatCanCreate: '🎯 Ce qu\'on peut créer',
    digitalSolutions: '🛠️ Solutions Numériques',
    supportTitle: '🔧 Support',
    supportDesc: '✅ Maintenance technique, correction de bugs, petites modifications, mises à jour et aide au maintien du projet en bon état de fonctionnement.',
    pricing: '📊 Le prix final dépend de la tâche et du volume de travail.',
    currencyLabel: '💱 Devise :',
    currencyNote: '💵 L\'EUR est la devise de base. Les montants en USD sont indicatifs, au taux de change actuel.',
    perMonth: '/mois',
    ctaTitle: '❓ Vous avez un projet, mais ne savez pas quelle solution vous faut ?',
    ctaDesc: '💡 Parlez-nous de votre projet — nous proposerons l\'option adaptée.',
    formTitle: '📝 Discuter du projet',
    formNameLabel: '👤 Nom',
    formContactLabel: '📱 Telegram / Email / autre contact',
    formContactPlaceholder: '@telegram ou email@example.com',
    formPhoneLabel: '☎️ Téléphone',
    formBudgetLabel: '💰 Budget approximatif',
    formBudgetPlaceholder: 'par exemple, 500–1000 €',
    formTaskLabel: '🛠️ Que faut-il créer ?',
    formInfoLabel: '📝 Informations complémentaires',
    formSubmit: '✉️ Envoyer la demande',
    formSuccess: '✅ Demande envoyée. Nous vous contacterons bientôt.',
    formError: '❌ Erreur lors de l\'envoi. Veuillez réessayer.',
    contactTitle: '📞 Contacts',
    footerDesc: '🌐 Solutions numériques pour petites entreprises.',
    privacyPolicy: '🔒 Confidentialité',
    terms: '📋 Conditions',
    legalInfo: '⚖️ Mentions légales',
    legalHeading: '⚖️ Légal',
    solutions: [
      { title: '🌐 Site web pour petites entreprises', desc: 'Un site moderne et responsive, optimisé pour la recherche.' },
      { title: '🎯 Landing page', desc: 'Une page à forte conversion pour attirer des clients.' },
      { title: '🤖 Bot Telegram', desc: 'Automatise la communication et la collecte de demandes.' },
      { title: '🔗 Telegram → CRM', desc: 'Relie le bot à votre système de gestion.' },
      { title: '📨 Formulaire → Telegram', desc: 'Notifications instantanées pour chaque nouvelle demande.' },
      { title: '⚡ Automatisation des processus', desc: 'Les tâches routinières se font sans intervention humaine.' },
      { title: '📊 Base de clients', desc: 'Un système simple et pratique pour gérer les contacts.' },
      { title: '🔌 Intégrations API', desc: 'Relie votre projet à des services externes.' }
    ]
  },

  pl: {
    navHome: '🏠 Strona główna',
    navServices: '⚙️ Usługi',
    navContacts: '📧 Kontakt',
    heroTitle: 'Cyfrowe rozwiązania dla małych firm',
    heroTypedPrefix: 'Tworzymy: ',
    heroTyped: ['Strony internetowe', 'Boty Telegram', 'Automatyzację', 'Integracje CRM'],
    heroSubtitle: '🚀 Strony internetowe, boty Telegram i automatyzacja — dopasowane do Twojej firmy.',
    heroCTA: '💬 Porozmawiajmy o projekcie',
    heroMeta: '💰 od €199 · ⏱️ start od 72 godzin',
    whatCanCreate: '🎯 Co można stworzyć',
    digitalSolutions: '🛠️ Cyfrowe Rozwiązania',
    supportTitle: '🔧 Wsparcie',
    supportDesc: '✅ Wsparcie techniczne, poprawianie błędów, drobne zmiany, aktualizacje i pomoc w utrzymaniu projektu w dobrym stanie.',
    pricing: '📊 Ostateczna cena zależy od zadania i zakresu pracy.',
    currencyLabel: '💱 Waluta:',
    currencyNote: '💵 EUR to waluta bazowa. Kwoty w USD są orientacyjne, według aktualnego kursu.',
    perMonth: '/mies.',
    ctaTitle: '❓ Masz zadanie, ale nie wiesz, jakie rozwiązanie jest potrzebne?',
    ctaDesc: '💡 Opowiedz nam o zadaniu — zaproponujemy odpowiednie rozwiązanie.',
    formTitle: '📝 Porozmawiajmy o projekcie',
    formNameLabel: '👤 Imię',
    formContactLabel: '📱 Telegram / E-mail / inny kontakt',
    formContactPlaceholder: '@telegram lub email@example.com',
    formPhoneLabel: '☎️ Telefon',
    formBudgetLabel: '💰 Orientacyjny budżet',
    formBudgetPlaceholder: 'np. €500–1000',
    formTaskLabel: '🛠️ Co trzeba stworzyć?',
    formInfoLabel: '📝 Dodatkowe informacje',
    formSubmit: '✉️ Wyślij zapytanie',
    formSuccess: '✅ Zapytanie wysłane. Wkrótce się z Tobą skontaktujemy.',
    formError: '❌ Błąd podczas wysyłania. Spróbuj ponownie.',
    contactTitle: '📞 Kontakt',
    footerDesc: '🌐 Cyfrowe rozwiązania dla małych firm.',
    privacyPolicy: '🔒 Polityka prywatności',
    terms: '📋 Warunki',
    legalInfo: '⚖️ Informacje prawne',
    legalHeading: '⚖️ Prawo',
    solutions: [
      { title: '🌐 Strona dla małej firmy', desc: 'Nowoczesna, responsywna strona zoptymalizowana pod wyszukiwarki.' },
      { title: '🎯 Landing page', desc: 'Strona o wysokiej konwersji, która przyciąga klientów.' },
      { title: '🤖 Bot Telegram', desc: 'Automatyzuje komunikację i zbieranie zapytań.' },
      { title: '🔗 Telegram → CRM', desc: 'Łączy bota z Twoim systemem zarządzania.' },
      { title: '📨 Formularz → Telegram', desc: 'Natychmiastowe powiadomienia o każdym nowym zapytaniu.' },
      { title: '⚡ Automatyzacja procesów', desc: 'Rutynowe zadania wykonują się bez udziału człowieka.' },
      { title: '📊 Baza klientów', desc: 'Prosty i wygodny system zarządzania kontaktami.' },
      { title: '🔌 Integracje API', desc: 'Łączy Twój projekt z zewnętrznymi usługami.' }
    ]
  },

  sk: {
    navHome: '🏠 Domov',
    navServices: '⚙️ Služby',
    navContacts: '📧 Kontakt',
    heroTitle: 'Digitálne riešenia pre malé firmy',
    heroTypedPrefix: 'Tvoríme: ',
    heroTyped: ['Webové stránky', 'Telegram boti', 'Automatizáciu', 'CRM integrácie'],
    heroSubtitle: '🚀 Webové stránky, Telegram boti a automatizácia — na mieru vášmu podnikaniu.',
    heroCTA: '💬 Porozprávajme sa o projekte',
    heroMeta: '💰 od €199 · ⏱️ spustenie od 72 hodín',
    whatCanCreate: '🎯 Čo sa dá vytvoriť',
    digitalSolutions: '🛠️ Digitálne Riešenia',
    supportTitle: '🔧 Podpora',
    supportDesc: '✅ Technická podpora, oprava chýb, menšie zmeny, aktualizácie a pomoc s udržaním projektu v dobrom stave.',
    pricing: '📊 Konečná cena závisí od zadania a rozsahu práce.',
    currencyLabel: '💱 Valuta:',
    currencyNote: '💵 EUR je základná valuta. Sumy v USD sú informatívne, podľa aktuálneho kurzu.',
    perMonth: '/mes.',
    ctaTitle: '❓ Máte zadanie, ale neviete, ktoré riešenie potrebujete?',
    ctaDesc: '💡 Povedzte nám o zadaní — navrhneme vhodnú možnosť.',
    formTitle: '📝 Porozprávajme sa o projekte',
    formNameLabel: '👤 Meno',
    formContactLabel: '📱 Telegram / E-mail / iný kontakt',
    formContactPlaceholder: '@telegram alebo email@example.com',
    formPhoneLabel: '☎️ Telefón',
    formBudgetLabel: '💰 Približný rozpočet',
    formBudgetPlaceholder: 'napríklad €500–1000',
    formTaskLabel: '🛠️ Čo treba vytvoriť?',
    formInfoLabel: '📝 Dodatočné informácie',
    formSubmit: '✉️ Odoslať žiadosť',
    formSuccess: '✅ Žiadosť odoslaná. Čoskoro sa vám ozveme.',
    formError: '❌ Chyba pri odosielaní. Skúste to znova.',
    contactTitle: '📞 Kontakt',
    footerDesc: '🌐 Digitálne riešenia pre malé firmy.',
    privacyPolicy: '🔒 Ochrana súkromia',
    terms: '📋 Podmienky',
    legalInfo: '⚖️ Právne informácie',
    legalHeading: '⚖️ Právne',
    solutions: [
      { title: '🌐 Webová stránka pre malú firmu', desc: 'Moderná responzívna stránka optimalizovaná pre vyhľadávače.' },
      { title: '🎯 Landing page', desc: 'Stránka s vysokou konverziou na prilákanie zákazníkov.' },
      { title: '🤖 Telegram bot', desc: 'Automatizuje komunikáciu a zber žiadostí.' },
      { title: '🔗 Telegram → CRM', desc: 'Prepojí bota s vaším systémom správy.' },
      { title: '📨 Formulár → Telegram', desc: 'Okamžité upozornenia na každú novú žiadosť.' },
      { title: '⚡ Automatizácia procesov', desc: 'Rutinné úlohy prebiehajú bez ľudského zásahu.' },
      { title: '📊 Databáza klientov', desc: 'Jednoduchý a praktický systém na správu kontaktov.' },
      { title: '🔌 API integrácie', desc: 'Prepojí váš projekt s externými službami.' }
    ]
  }
};

const LEGAL_PAGES = {
  ru: {
    privacy: {
      title: '\u{1F512} \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
      effective: '\u0414\u0430\u0442\u0430 \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0432 \u0441\u0438\u043b\u0443: 1 \u044f\u043d\u0432\u0430\u0440\u044f 2026',
      sections: [
        { h: '1. \u041e\u0431\u0449\u0438\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f', p: ['\u041d\u0430\u0441\u0442\u043e\u044f\u0449\u0430\u044f \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442, \u043a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u043d\u0430 \u0441\u0430\u0439\u0442\u0435, \u0434\u043b\u044f \u0447\u0435\u0433\u043e \u0438\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0438 \u043a\u0430\u043a \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u043c.'] },
        { h: '2. \u041a\u0430\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043c\u044b \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c', p: ['\u041c\u044b \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u044b \u0441\u043e\u043e\u0431\u0449\u0430\u0435\u0442\u0435 \u0441\u0430\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 \u0444\u043e\u0440\u043c\u0443 \u0437\u0430\u044f\u0432\u043a\u0438: \u0438\u043c\u044f, \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438, \u0442\u0435\u043b\u0435\u0444\u043e\u043d, \u0431\u044e\u0434\u0436\u0435\u0442 \u0438 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438.'] },
        { h: '3. \u041a\u0430\u043a \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0435', p: ['\u0414\u0430\u043d\u043d\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0438\u0441\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0441\u0432\u044f\u0437\u0438 \u0441 \u0432\u0430\u043c\u0438 \u0438 \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u041c\u044b \u043d\u0435 \u043f\u0440\u043e\u0434\u0430\u0451\u043c \u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0451\u043c \u0438\u0445 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u043c \u0441\u0435\u0442\u044f\u043c.'] },
        { h: '4. \u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0442\u0440\u0435\u0442\u044c\u0438\u043c \u043b\u0438\u0446\u0430\u043c', p: ['\u0417\u0430\u044f\u0432\u043a\u0430 \u043f\u0435\u0440\u0435\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0438\u0441 Telegram \u0434\u043b\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u0430. \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432 \u044d\u0442\u043e\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0435 \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0435\u0433\u043e \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438.'] },
        { h: '5. \u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445', p: ['\u041c\u044b \u0445\u0440\u0430\u043d\u0438\u043c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u043e\u043b\u044c\u043a\u043e, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u044d\u0442\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c, \u0438 \u0443\u0434\u0430\u043b\u044f\u0435\u043c \u043f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443.'] },
        { h: '6. \u0412\u0430\u0448\u0438 \u043f\u0440\u0430\u0432\u0430', p: ['\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f, \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0441\u0432\u043e\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u043d\u0430\u043f\u0438\u0441\u0430\u0432 \u043d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b.'] }
      ]
    },
    terms: {
      title: '\u{1F4CB} \u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f',
      effective: '\u0414\u0430\u0442\u0430 \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0432 \u0441\u0438\u043b\u0443: 1 \u044f\u043d\u0432\u0430\u0440\u044f 2026',
      sections: [
        { h: '1. \u041f\u0440\u0438\u043d\u044f\u0442\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0439', p: ['\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0430\u0439\u0442 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044f \u0437\u0430\u044f\u0432\u043a\u0443, \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u043c\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438.'] },
        { h: '2. \u041f\u0440\u0435\u0434\u043c\u0435\u0442', p: ['\u041c\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0441\u0430\u0439\u0442\u043e\u0432, Telegram-\u0431\u043e\u0442\u043e\u0432, \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0437\u0430\u0434\u0430\u043d\u0438\u044e.'] },
        { h: '3. \u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u043e\u043f\u043b\u0430\u0442\u0430', p: ['\u0426\u0435\u043d\u044b \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u043e\u0442 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0439 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438. \u0424\u0438\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0443\u043c\u043c\u0430 \u0441\u043e\u0433\u043b\u0430\u0441\u0443\u0435\u0442\u0441\u044f \u0434\u043e \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442.'] },
        { h: '4. \u041f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442', p: ['\u041f\u043e\u0441\u043b\u0435 \u043f\u043e\u043b\u043d\u043e\u0439 \u043e\u043f\u043b\u0430\u0442\u044b \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0433\u043e\u0442\u043e\u0432\u044b\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0442 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u044f\u0442 \u043a \u0437\u0430\u043a\u0430\u0437\u0447\u0438\u043a\u0443.'] },
        { h: '5. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c', p: ['\u041c\u044b \u043d\u0435 \u043d\u0435\u0441\u0451\u043c \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0437\u0430 \u043f\u0435\u0440\u0435\u0431\u043e\u0438 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u043d\u0435 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c.'] },
        { h: '6. \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0439', p: ['\u041c\u044b \u043c\u043e\u0436\u0435\u043c \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u044d\u0442\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. \u0410\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f \u0432\u0441\u0435\u0433\u0434\u0430 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 \u044d\u0442\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435.'] }
      ]
    },
    legal: {
      title: '\u2696\uFE0F \u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
      effective: '\u0414\u0430\u0442\u0430 \u0432\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0432 \u0441\u0438\u043b\u0443: 1 \u044f\u043d\u0432\u0430\u0440\u044f 2026',
      sections: [
        { h: '1. \u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446 \u0441\u0430\u0439\u0442\u0430', p: ['\u0421\u0430\u0439\u0442 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 APL Pages Development.'] },
        { h: '2. \u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435', p: ['\u041f\u043e \u0432\u0441\u0435\u043c \u043f\u0440\u0430\u0432\u043e\u0432\u044b\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u0441\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b, \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u00ab\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b\u00bb.'] },
        { h: '3. \u041e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435', p: ['\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435 \u043d\u043e\u0441\u0438\u0442 \u043e\u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0438 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0439 \u043e\u0444\u0435\u0440\u0442\u043e\u0439.'] },
        { h: '4. \u041f\u0440\u0438\u043c\u0435\u043d\u0438\u043c\u043e\u0435 \u043f\u0440\u0430\u0432\u043e', p: ['\u041a \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f\u043c \u043c\u0435\u0436\u0434\u0443 \u0441\u0442\u043e\u0440\u043e\u043d\u0430\u043c\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0430\u0432\u043e \u0441\u0442\u0440\u0430\u043d\u044b \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044f.'] }
      ]
    }
  },
  sr: {
    privacy: {
      title: '\u{1F512} \u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0438',
      effective: '\u0414\u0430\u0442\u0443\u043c \u0441\u0442\u0443\u043f\u0430\u045a\u0430 \u043d\u0430 \u0441\u043d\u0430\u0433\u0443: 1. \u0458\u0430\u043d\u0443\u0430\u0440 2026.',
      sections: [
        { h: '1. \u041e\u043f\u0448\u0442\u0435 \u043e\u0434\u0440\u0435\u0434\u0431\u0435', p: ['\u041e\u0432\u0430 \u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u043f\u0438\u0441\u0443\u0458\u0435 \u043a\u043e\u0458\u0435 \u043f\u043e\u0434\u0430\u0442\u043a\u0435 \u043f\u0440\u0438\u043a\u0443\u043f\u0459\u0430\u043c\u043e, \u0437\u0430\u0448\u0442\u043e \u0438\u0445 \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u043c\u043e \u0438 \u043a\u0430\u043a\u043e \u0438\u0445 \u0448\u0442\u0438\u0442\u0438\u043c\u043e.'] },
        { h: '2. \u041a\u043e\u0458\u0435 \u043f\u043e\u0434\u0430\u0442\u043a\u0435 \u043f\u0440\u0438\u043a\u0443\u043f\u0459\u0430\u043c\u043e', p: ['\u041e\u0431\u0440\u0430\u0452\u0443\u0458\u0435\u043c\u043e \u0441\u0430\u043c\u043e \u043f\u043e\u0434\u0430\u0442\u043a\u0435 \u043a\u043e\u0458\u0435 \u0441\u0430\u043c\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u0442\u0435: \u0438\u043c\u0435, \u043a\u043e\u043d\u0442\u0430\u043a\u0442, \u0442\u0435\u043b\u0435\u0444\u043e\u043d, \u0431\u0443\u045f\u0435\u0442 \u0438 \u043e\u043f\u0438\u0441 \u0437\u0430\u0434\u0430\u0442\u043a\u0430.'] },
        { h: '3. \u041a\u0430\u043a\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u043c\u043e \u043f\u043e\u0434\u0430\u0442\u043a\u0435', p: ['\u041f\u043e\u0434\u0430\u0446\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u043c\u043e \u0438\u0441\u043a\u0459\u0443\u0447\u0438\u0432\u043e \u0437\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0438 \u0434\u043e\u0433\u043e\u0432\u043e\u0440 \u043e \u043f\u0440\u043e\u0458\u0435\u043a\u0442\u0443.'] },
        { h: '4. \u0414\u0435\u0459\u0435\u045a\u0435 \u0442\u0440\u0435\u045b\u0438\u043c \u043b\u0438\u0446\u0438\u043c\u0430', p: ['\u0417\u0430\u0445\u0442\u0435\u0432 \u0441\u0435 \u043f\u0440\u043e\u0441\u043b\u0435\u0452\u0443\u0458\u0435 \u043f\u0443\u0442\u0435\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0430 Telegram. \u041e\u0431\u0440\u0430\u0434\u0430 \u0443 \u0442\u043e\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0443 \u0443\u0440\u0435\u0452\u0435\u043d\u0430 \u045a\u0435\u0433\u043e\u0432\u0438\u043c \u0443\u0441\u043b\u043e\u0432\u0438\u043c\u0430.'] },
        { h: '5. \u0427\u0443\u0432\u0430\u045a\u0435 \u043f\u043e\u0434\u0430\u0442\u0430\u043a\u0430', p: ['\u041f\u043e\u0434\u0430\u0442\u043a\u0435 \u0447\u0443\u0432\u0430\u043c\u043e \u043e\u043d\u043e\u043b\u0438\u043a\u043e \u043a\u043e\u043b\u0438\u043a\u043e \u0458\u0435 \u043f\u043e\u0442\u0440\u0435\u0431\u043d\u043e \u0438 \u0431\u0440\u0438\u0448\u0435\u043c\u043e \u0438\u0445 \u043d\u0430 \u0432\u0430\u0448 \u0437\u0430\u0445\u0442\u0435\u0432.'] },
        { h: '6. \u0412\u0430\u0448\u0430 \u043f\u0440\u0430\u0432\u0430', p: ['\u041c\u043e\u0436\u0435\u0442\u0435 \u0434\u0430 \u0437\u0430\u0442\u0440\u0430\u0436\u0438\u0442\u0435 \u043f\u0440\u0438\u0441\u0442\u0443\u043f, \u0438\u0441\u043f\u0440\u0430\u0432\u043a\u0443 \u0438\u043b\u0438 \u0431\u0440\u0438\u0441\u0430\u045a\u0435 \u0441\u0432\u043e\u0458\u0438\u0445 \u043f\u043e\u0434\u0430\u0442\u0430\u043a\u0430.'] }
      ]
    },
    terms: {
      title: '\u{1F4CB} \u0423\u0441\u043b\u043e\u0432\u0438 \u043a\u043e\u0440\u0438\u0448\u045b\u0435\u045a\u0430',
      effective: '\u0414\u0430\u0442\u0443\u043c \u0441\u0442\u0443\u043f\u0430\u045a\u0430 \u043d\u0430 \u0441\u043d\u0430\u0433\u0443: 1. \u0458\u0430\u043d\u0443\u0430\u0440 2026.',
      sections: [
        { h: '1. \u041f\u0440\u0438\u0445\u0432\u0430\u0442\u0430\u045a\u0435 \u0443\u0441\u043b\u043e\u0432\u0430', p: ['\u041a\u043e\u0440\u0438\u0448\u045b\u0435\u045a\u0435\u043c \u0441\u0430\u0458\u0442\u0430 \u043f\u0440\u0438\u0445\u0432\u0430\u0442\u0430\u0442\u0435 \u043e\u0432\u0435 \u0443\u0441\u043b\u043e\u0432\u0435.'] },
        { h: '2. \u041f\u0440\u0435\u0434\u043c\u0435\u0442', p: ['\u0420\u0430\u0434\u0438\u043c\u043e \u043d\u0430 \u0438\u0437\u0440\u0430\u0434\u0438 \u0441\u0430\u0458\u0442\u043e\u0432\u0430, Telegram \u0431\u043e\u0442\u043e\u0432\u0430, \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0458\u0430 \u0438 \u0430\u0443\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0458\u0435.'] },
        { h: '3. \u0426\u0435\u043d\u0430 \u0438 \u043f\u043b\u0430\u045b\u0430\u045a\u0435', p: ['\u0426\u0435\u043d\u0435 \u043d\u0430 \u0441\u0430\u0458\u0442\u0443 \u0441\u0443 \u043f\u043e\u0447\u0435\u0442\u043d\u0435. \u041a\u043e\u043d\u0430\u0447\u043d\u0430 \u0446\u0435\u043d\u0430 \u0441\u0435 \u0434\u043e\u0433\u043e\u0432\u0430\u0440\u0430 \u043f\u0440\u0435 \u043f\u043e\u0447\u0435\u0442\u043a\u0430 \u0440\u0430\u0434\u0430.'] },
        { h: '4. \u041f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0440\u0435\u0437\u0443\u043b\u0442\u0430\u0442', p: ['\u041d\u0430\u043a\u043e\u043d \u043f\u043b\u0430\u045b\u0430\u045a\u0430 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0433\u043e\u0442\u043e\u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434 \u043f\u0440\u0435\u043b\u0430\u0437\u0435 \u043d\u0430 \u043a\u043b\u0438\u0458\u0435\u043d\u0442\u0430.'] },
        { h: '5. \u041e\u0434\u0433\u043e\u0432\u043e\u0440\u043d\u043e\u0441\u0442', p: ['\u041d\u0435 \u043e\u0434\u0433\u043e\u0432\u0430\u0440\u0430\u043c\u043e \u0437\u0430 \u043f\u0440\u0435\u043a\u0438\u0434\u0435 \u0443 \u0441\u043f\u043e\u0459\u043d\u0438\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u0438\u043c\u0430.'] },
        { h: '6. \u0418\u0437\u043c\u0435\u043d\u0435 \u0443\u0441\u043b\u043e\u0432\u0430', p: ['\u0423\u0441\u043b\u043e\u0432\u0435 \u043c\u043e\u0436\u0435\u043c\u043e \u0430\u0436\u0443\u0440\u0438\u0440\u0430\u0442\u0438. \u0412\u0430\u0436\u0435\u045b\u0430 \u0458\u0435 \u0432\u0435\u0440\u0437\u0438\u0458\u0430 \u043d\u0430 \u043e\u0432\u043e\u0458 \u0441\u0442\u0440\u0430\u043d\u0438.'] }
      ]
    },
    legal: {
      title: '\u2696\uFE0F \u041f\u0440\u0430\u0432\u043d\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0458\u0435',
      effective: '\u0414\u0430\u0442\u0443\u043c \u0441\u0442\u0443\u043f\u0430\u045a\u0430 \u043d\u0430 \u0441\u043d\u0430\u0433\u0443: 1. \u0458\u0430\u043d\u0443\u0430\u0440 2026.',
      sections: [
        { h: '1. \u0412\u043b\u0430\u0441\u043d\u0438\u043a \u0441\u0430\u0458\u0442\u0430', p: ['\u0421\u0430\u0458\u0442 \u043e\u0434\u0440\u0436\u0430\u0432\u0430 \u0442\u0438\u043c APL Pages Development.'] },
        { h: '2. \u041a\u043e\u043d\u0442\u0430\u043a\u0442', p: ['\u0417\u0430 \u043f\u0440\u0430\u0432\u043d\u0430 \u043f\u0438\u0442\u0430\u045a\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u0438\u0437 \u043e\u0434\u0435\u0459\u043a\u0430 \u00ab\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438\u00bb.'] },
        { h: '3. \u041e\u0434\u0433\u043e\u0432\u043e\u0440\u043d\u043e\u0441\u0442 \u0437\u0430 \u0441\u0430\u0434\u0440\u0436\u0430\u0458', p: ['\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0458\u0435 \u043d\u0430 \u0441\u0430\u0458\u0442\u0443 \u0441\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u043e\u0433 \u043a\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430.'] },
        { h: '4. \u041c\u0435\u0440\u043e\u0434\u0430\u0432\u043d\u043e \u043f\u0440\u0430\u0432\u043e', p: ['\u041f\u0440\u0438\u043c\u0435\u045a\u0443\u0458\u0435 \\u0441\u0435 \u043f\u0440\u0430\u0432\u043e \u0437\u0435\u043c\u0459\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0458\u0435 \u0438\u0437\u0432\u0440\u0448\u0438\u043e\u0446\u0430.'] }
      ]
    }
  },
  en: {
    privacy: {
      title: '\u{1F512} Privacy Policy',
      effective: 'Effective Date: January 1, 2026',
      sections: [
        { h: '1. Overview', p: ['This policy explains what data we collect on this website, why we use it, and how we protect it.'] },
        { h: '2. Information We Collect', p: ['We process only the data you provide yourself through the request form: your name, contact details, phone number, budget and project description.'] },
        { h: '3. How We Use Information', p: ['Your data is used solely to contact you and discuss the project. We do not sell it or share it with advertising networks.'] },
        { h: '4. Third Parties', p: ['Requests are delivered through the Telegram service for a faster response. Processing there is governed by its own terms.'] },
        { h: '5. Data Retention', p: ['We keep your data only as long as needed to work on the project, and delete it on request.'] },
        { h: '6. Your Rights', p: ['You may request access to, correction of, or deletion of your data using the contacts listed on this site.'] }
      ]
    },
    terms: {
      title: '\u{1F4CB} Terms of Service',
      effective: 'Effective Date: January 1, 2026',
      sections: [
        { h: '1. Acceptance of Terms', p: ['By using this website and submitting a request, you accept these terms.'] },
        { h: '2. Scope of Work', p: ['We build websites, Telegram bots, integrations and automation on a per-project basis.'] },
        { h: '3. Pricing and Payment', p: ['Prices shown on this site are starting prices. The final amount is agreed before work begins.'] },
        { h: '4. Ownership', p: ['Upon full payment, rights to the delivered product transfer to the client.'] },
        { h: '5. Limitation of Liability', p: ['We are not liable for outages of third-party services we do not control.'] },
        { h: '6. Changes to Terms', p: ['We may update these terms. The current version is always published on this page.'] }
      ]
    },
    legal: {
      title: '\u2696\uFE0F Legal Information',
      effective: 'Effective Date: January 1, 2026',
      sections: [
        { h: '1. Site Owner', p: ['This website is maintained by the APL Pages Development team.'] },
        { h: '2. Contact', p: ['For legal enquiries, please use the contacts listed in the Contacts section.'] },
        { h: '3. Content Disclaimer', p: ['Information on this site is provided for general information purposes and is not a public offer.'] },
        { h: '4. Governing Law', p: ['The law of the service provider\u2019s country of registration applies.'] }
      ]
    }
  }
};

const BRAND = {
  name: 'APL Pages Development',
  short: 'APL',
  tagline: 'Development'
};

const CONTACTS = {
  telegram: { handle: '@APLpagesdev', url: 'https://t.me/APLpagesdev' },
  whatsapp: { display: '+381 63 7124 794', url: 'https://wa.me/381637124794' },
  viber:    { display: '+381 63 7124 794', url: 'viber://contact?number=381637124794' },
  email:    { display: 'APLpagesdev@gmail.com', url: 'mailto:APLpagesdev@gmail.com' }
};

// ----- Иконки сервисов связи (настоящие лого, не эмодзи) -----

const CONTACT_ICONS = {
  telegram:
    '<svg viewBox="0 0 240 240" width="26" height="26" aria-hidden="true">' +
      '<circle cx="120" cy="120" r="120" fill="url(#icoGrad)"/>' +
      '<path d="M54 122.5 L177 75c5.6-2.1 10.5 1.3 8.7 9.6l-19.8 93.3c-1.4 6.5-5.3 8.1-10.7 5.1l-29.6-21.8-14.3 13.8c-1.6 1.6-2.9 2.9-6 2.9l2.1-30.3 55.2-49.9c2.4-2.1-.5-3.3-3.7-1.2l-68.2 43-29.4-9.2c-6.4-2-6.5-6.4 1.3-9.5z" fill="#ffffff"/>' +
    '</svg>',

  whatsapp:
    '<svg viewBox="0 0 240 240" width="26" height="26" aria-hidden="true">' +
      '<circle cx="120" cy="120" r="120" fill="url(#icoGrad)"/>' +
      '<path d="M120 58c-34.2 0-62 27.8-62 62 0 12.1 3.4 23.4 9.4 33L58 182l29.8-9.2c9.2 5.5 20 8.7 31.5 8.7h.1c34.2 0 62-27.8 62-62s-27.8-62-61.4-61.5zM120 170.6h-.1c-10 0-19.9-2.7-28.4-7.8l-2-1.2-21.1 6.5 6.6-20.6-1.3-2.1c-5.6-9-8.6-19.3-8.6-29.9 0-30.2 24.6-54.8 55-54.8 14.7 0 28.5 5.7 38.9 16.1s16.1 24.3 16.1 39c-.1 30.2-24.7 54.8-55.1 54.8zm30.1-41c-1.6-.8-9.8-4.9-11.3-5.4-1.5-.6-2.6-.8-3.7.8-1.1 1.6-4.3 5.4-5.2 6.5-1 1.1-1.9 1.2-3.6.4-1.6-.8-6.9-2.6-13.2-8.2-4.9-4.4-8.2-9.7-9.1-11.4-1-1.6-.1-2.5.7-3.3.7-.7 1.6-1.9 2.4-2.8.8-1 1.1-1.6 1.6-2.7.5-1.1.3-2.1-.1-2.9-.4-.8-3.7-9-5.1-12.3-1.3-3.2-2.7-2.8-3.7-2.8-.9-.1-2-.1-3.1-.1s-2.9.4-4.4 2.1c-1.5 1.6-5.8 5.7-5.8 13.9s5.9 16.2 6.8 17.3c.8 1.1 11.6 17.8 28.2 24.9 3.9 1.7 7 2.7 9.4 3.5 4 1.3 7.6 1.1 10.4.6 3.2-.5 9.8-4 11.2-7.8 1.4-3.8 1.4-7.1 1-7.8-.4-.7-1.5-1.1-3.1-1.9z" fill="#ffffff"/>' +
    '</svg>',

  viber:
    '<svg viewBox="0 0 240 240" width="26" height="26" aria-hidden="true">' +
      '<circle cx="120" cy="120" r="120" fill="url(#icoGrad)"/>' +
      '<path d="M144.7 128.6c-2.1-1-4.3-1.8-6.4-2.7-3-1.3-5.3-.3-7.1 2.1-1.5 2-3 4-4.7 5.8-1 1-2.2 1.3-3.5.7-8.8-3.6-16.4-8.9-22.6-16.2-3.1-3.6-5.8-7.6-7.7-12-1-2.3-.6-3.7 1.1-5.4 1.7-1.6 3.6-3 5.2-4.7 2.6-2.7 3.1-5.4 1.4-8.8-3-6-6.9-11.4-11.7-16.2-2.5-2.5-5.5-2.7-8.2-.4-4.1 3.5-7.4 7.8-8.6 13.1-1.4 6.4-.1 12.6 2.4 18.6 5.7 13.6 14.1 25.2 25 34.8 10.1 8.9 21.3 15.8 34.4 19.4 4.8 1.3 9.6 2.3 14.7 1.6 6.4-.9 11.2-4.2 14.5-9.7 1.1-1.9 1.5-3.9.9-6-.5-1.6-1.6-2.7-3.2-3.4-1.9-.8-3.9-1.5-5.9-2.6zm-24.6-79.6c-1.2 0-2.4.1-3.6.2-2.5.2-4.2 1.8-4.2 4.1 0 2.4 1.8 3.9 4.4 4 21.3 1.4 37.9 18 39.3 39.3.2 2.7 1.8 4.5 4.1 4.4 2.4 0 4-1.8 3.9-4.4-.9-25.4-21.6-46.2-43.9-47.6zm.3 12.3c-2.5-.1-4.3 1.5-4.4 3.9-.1 2.3 1.6 4.1 4 4.3 12.2.9 21.8 10.5 22.7 22.7.2 2.4 2 4.1 4.3 4 2.4-.1 4-2 3.9-4.5-1.1-16.2-13.4-28.5-30.5-30.4z" fill="#ffffff"/>' +
    '</svg>',

  email:
    '<svg viewBox="0 0 240 240" width="26" height="26" aria-hidden="true">' +
      '<circle cx="120" cy="120" r="120" fill="url(#icoGrad)"/>' +
      '<path d="M62 78h116c4.4 0 8 3.6 8 8v68c0 4.4-3.6 8-8 8H62c-4.4 0-8-3.6-8-8V86c0-4.4 3.6-8 8-8z" fill="none" stroke="#ffffff" stroke-width="8" stroke-linejoin="round"/>' +
      '<path d="M58 84 L120 128 L182 84" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>'
};

const ICO_GRAD_DEF =
  '<svg width="0" height="0" style="position:absolute;">' +
    '<defs><linearGradient id="icoGrad" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0%" stop-color="#34d399"/>' +
      '<stop offset="100%" stop-color="#3b82f6"/>' +
    '</linearGradient></defs>' +
  '</svg>';

const FLAG_STYLE = 'vertical-align:-2px;margin-right:8px;border-radius:2px;display:inline-block;flex:0 0 auto;';

const FLAGS = {
  ru: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="60" height="10" fill="#ffffff"/><rect y="10" width="60" height="10" fill="#0039A6"/><rect y="20" width="60" height="10" fill="#D52B1E"/></svg>',
  sr: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="60" height="10" fill="#C6363C"/><rect y="10" width="60" height="10" fill="#0C4076"/><rect y="20" width="60" height="10" fill="#EDEDED"/></svg>',
  en: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0 0 L60 30 M60 0 L0 30" stroke="#ffffff" stroke-width="6"/><path d="M0 0 L60 30 M60 0 L0 30" stroke="#C8102E" stroke-width="3"/><path d="M30 0 V30 M0 15 H60" stroke="#ffffff" stroke-width="10"/><path d="M30 0 V30 M0 15 H60" stroke="#C8102E" stroke-width="6"/></svg>',
  it: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="20" height="30" fill="#008C45"/><rect x="20" width="20" height="30" fill="#F4F5F0"/><rect x="40" width="20" height="30" fill="#CD212A"/></svg>',
  de: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="60" height="10" fill="#000000"/><rect y="10" width="60" height="10" fill="#DD0000"/><rect y="20" width="60" height="10" fill="#FFCE00"/></svg>',
  fr: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="20" height="30" fill="#002395"/><rect x="20" width="20" height="30" fill="#ffffff"/><rect x="40" width="20" height="30" fill="#ED2939"/></svg>',
  pl: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="60" height="15" fill="#ffffff"/><rect y="15" width="60" height="15" fill="#DC143C"/></svg>',
  sk: '<svg width="20" height="14" viewBox="0 0 60 30" style="' + FLAG_STYLE + '" aria-hidden="true"><rect width="60" height="10" fill="#ffffff"/><rect y="10" width="60" height="10" fill="#0B4EA2"/><rect y="20" width="60" height="10" fill="#EE1C25"/><path d="M12 5 H27 V17 C27 23 19.5 27 19.5 27 C19.5 27 12 23 12 17 Z" fill="#EE1C25" stroke="#ffffff" stroke-width="1.2"/><path d="M18 8 V23 M14 12 H22 M14.5 16 H21.5" stroke="#ffffff" stroke-width="2.2"/></svg>'
};

const BASE_PRICE = 199;
const SUPPORT_PRICE = 29;

const LANGS = [
  { code: 'ru', native: 'Русский'    },
  { code: 'sr', native: 'Srpski'     },
  { code: 'en', native: 'English'    },
  { code: 'it', native: 'Italiano'   },
  { code: 'de', native: 'Deutsch'    },
  { code: 'fr', native: 'Français'   },
  { code: 'pl', native: 'Polski'     },
  { code: 'sk', native: 'Slovenčina' }
];

const CURRENCIES = [
  { code: 'EUR', title: 'Euro' },
  { code: 'USD', title: 'US dollar' }
];

const exchangeRates = { EUR: 1, USD: 1.08 };

let currentLang = 'ru';
let currentCurrency = 'EUR';
let langMenuOpen = false;
let mobileMenuOpen = false;
let userPickedLang = false;

function t(key) {
  const pack = translations[currentLang] || translations.ru;
  return pack[key] !== undefined ? pack[key] : key;
}

function formatPrice(eurAmount) {
  const rate = exchangeRates[currentCurrency] || 1;
  const value = Math.round(eurAmount * rate);
  const locale = currentLang === 'ru' ? 'ru-RU' : 'en-US';
  const num = value.toLocaleString(locale);
  if (currentCurrency === 'EUR') return '€' + num;
  return '$' + num;
}

function loadExchangeRatesInBackground() {
  fetch('https://api.exchangerate-api.com/v4/latest/EUR')
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (!data || !data.rates) return;
      if (data.rates.USD) {
        exchangeRates.USD = data.rates.USD;
        renderApp();
      }
    })
    .catch(function () { });
}

const LANG_BY_COUNTRY = {
  RU: 'ru', BY: 'ru', KZ: 'ru', UA: 'ru',
  RS: 'sr', BA: 'sr', ME: 'sr', MK: 'sr', HR: 'sr',
  US: 'en', GB: 'en', CA: 'en', AU: 'en', IE: 'en', NZ: 'en',
  IT: 'it', DE: 'de', AT: 'de', CH: 'de',
  FR: 'fr', BE: 'fr', LU: 'fr', MC: 'fr',
  PL: 'pl', SK: 'sk', CZ: 'sk'
};

function pickLangFromBrowser() {
  const list = navigator.languages || [navigator.language || 'en'];
  for (let i = 0; i < list.length; i++) {
    const base = String(list[i]).toLowerCase().split('-')[0];
    const found = LANGS.filter(function (l) { return l.code === base; })[0];
    if (found) return found.code;
  }
  return null;
}

function detectLanguage() {
  try {
    const saved = localStorage.getItem('apl_lang');
    if (saved && LANGS.filter(function (l) { return l.code === saved; }).length) {
      currentLang = saved;
      userPickedLang = true;
      return;
    }
  } catch (e) { }

  const byBrowser = pickLangFromBrowser();
  if (byBrowser) {
    currentLang = byBrowser;
    return;
  }

  fetch('https://ipapi.co/json/')
    .then(function (res) { return res.ok ? res.json() : null; })
    .then(function (data) {
      if (!data || !data.country_code) return;
      if (userPickedLang) return;
      const byCountry = LANG_BY_COUNTRY[data.country_code];
      if (byCountry && byCountry !== currentLang) {
        currentLang = byCountry;
        renderApp();
      }
    })
    .catch(function () { });
}

// ============================================================
// ПОДВАЛ: контакты — вертикальный список с иконками 18px
// ============================================================

function footerContactsHTML() {
  const rows = [
    { icon: CONTACT_ICONS.telegram, label: 'Telegram', url: CONTACTS.telegram.url, ext: true },
    { icon: CONTACT_ICONS.whatsapp, label: 'WhatsApp', url: CONTACTS.whatsapp.url, ext: true },
    { icon: CONTACT_ICONS.viber,    label: 'Viber',    url: CONTACTS.viber.url,    ext: false },
    { icon: CONTACT_ICONS.email,    label: 'Email',    url: CONTACTS.email.url,    ext: false }
  ];

  return '<div class="footer-contacts">' + rows.map(function (r) {
    return '<a class="footer-contact-row" href="' + r.url + '"' +
      (r.ext ? ' target="_blank" rel="noopener"' : '') + '>' +
      '<span class="footer-contact-icon">' + r.icon + '</span>' +
      '<span class="footer-contact-label">' + r.label + '</span>' +
    '</a>';
  }).join('') + '</div>';
}

function langDropdownHTML() {
  const items = LANGS.map(function (l) {
    const active = l.code === currentLang;
    return '<button type="button" class="lang-option' + (active ? ' active' : '') +
      '" data-lang="' + l.code + '" style="display:flex;align-items:center;width:100%;' +
      'padding:10px 14px;background:' + (active ? 'rgba(120,140,255,.16)' : 'transparent') + ';' +
      'border:0;cursor:pointer;color:inherit;font:inherit;text-align:left;' +
      'white-space:nowrap;' + (active ? 'font-weight:600;' : '') + '">' +
      FLAGS[l.code] + '<span>' + l.native + '</span>' +
      (active ? '<span style="margin-left:auto;opacity:.7;">✓</span>' : '') +
      '</button>';
  }).join('');

  const current = LANGS.filter(function (l) { return l.code === currentLang; })[0] || LANGS[0];

  return '<div class="lang-dropdown" style="position:relative;">' +
    '<button type="button" data-lang-toggle aria-haspopup="listbox" ' +
      'aria-expanded="' + (langMenuOpen ? 'true' : 'false') + '" ' +
      'style="display:flex;align-items:center;gap:2px;padding:8px 12px;cursor:pointer;' +
      'background:transparent;border:1px solid rgba(255,255,255,.18);border-radius:8px;' +
      'color:inherit;font:inherit;">' +
      FLAGS[current.code] +
      '<span>' + current.native + '</span>' +
      '<span style="margin-left:6px;opacity:.6;font-size:.8em;">▾</span>' +
    '</button>' +
    '<div role="listbox" class="lang-menu" style="display:' +
      (langMenuOpen ? 'block' : 'none') + ';position:absolute;top:calc(100% + 8px);' +
      'right:0;z-index:50;min-width:200px;max-height:min(70vh,420px);overflow-y:auto;' +
      'padding:6px 0;border-radius:10px;background:#1a1a2e;' +
      'border:1px solid rgba(255,255,255,.14);box-shadow:0 12px 32px rgba(0,0,0,.45);">' +
      items + '</div>' +
  '</div>';
}

function logoHTML() {
  return '<a href="#" class="logo" style="display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit;">' +
    '<svg width="44" height="44" viewBox="0 0 48 48" aria-hidden="true" style="flex:0 0 auto;">' +
      '<defs>' +
        '<linearGradient id="aplGrad" x1="0" y1="0" x2="1" y2="1">' +
          '<stop offset="0%" stop-color="#6C7CFF"/>' +
          '<stop offset="50%" stop-color="#9B5BFF"/>' +
          '<stop offset="100%" stop-color="#FF5BA8"/>' +
        '</linearGradient>' +
        '<linearGradient id="aplGradSoft" x1="0" y1="0" x2="0" y2="1">' +
          '<stop offset="0%" stop-color="#ffffff" stop-opacity="0.35"/>' +
          '<stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>' +
        '</linearGradient>' +
        '<filter id="aplGlow" x="-50%" y="-50%" width="200%" height="200%">' +
          '<feGaussianBlur stdDeviation="2.2" result="blur"/>' +
          '<feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>' +
        '</filter>' +
      '</defs>' +
      '<rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="url(#aplGrad)"/>' +
      '<rect x="1.5" y="1.5" width="45" height="22" rx="13" fill="url(#aplGradSoft)"/>' +
      '<rect x="1.5" y="1.5" width="45" height="45" rx="13" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="1"/>' +
      '<g filter="url(#aplGlow)">' +
        '<path d="M24 10 L34.5 30 H29.6 L27.6 26 H20.4 L18.4 30 H13.5 Z M24 16.6 L21.2 22.1 H26.8 Z" fill="#ffffff" fill-rule="evenodd"/>' +
      '</g>' +
    '</svg>' +
    '<span style="display:flex;flex-direction:column;line-height:1.15;">' +
      '<span style="font-weight:800;font-size:1.12rem;letter-spacing:.2px;' +
        'background:linear-gradient(120deg,#8B9CFF,#C79BFF 55%,#FF9BC9);' +
        '-webkit-background-clip:text;background-clip:text;color:transparent;">APL Pages</span>' +
      '<span style="font-size:.66rem;letter-spacing:3px;opacity:.55;text-transform:uppercase;">Development</span>' +
    '</span></a>';
}

// ============================================================
// ПРАВОВЫЕ СТРАНИЦЫ (hash-роутинг внутри SPA)
// ============================================================

function getRoute() {
  const h = (location.hash || '').replace(/^#\/?/, '').replace(/\/$/, '').toLowerCase();
  if (h === 'privacy' || h === 'terms' || h === 'legal') return h;
  return null;
}

function legalPageHTML(route) {
  const pack = LEGAL_PAGES[currentLang] || LEGAL_PAGES.en;
  const page = pack[route] || LEGAL_PAGES.en[route];

  const body = page.sections.map(function (s) {
    return '<h2>' + s.h + '</h2>' + (s.p || ['']).map(function (par) {
      return '<p>' + par + '</p>';
    }).join('');
  }).join('');

  return '<article class="legal-page">' +
      '<a class="legal-back" href="#/">\u2190 ' + t('navHome').replace(/^[^\w\u0400-\u04FF]+\s*/, '') + '</a>' +
      '<h1>' + page.title + '</h1>' +
      '<p class="legal-effective">' + page.effective + '</p>' +
      body +
      '<div class="legal-footer-links">' +
        '<a href="#/privacy">' + t('privacyPolicy') + '</a>' +
        '<a href="#/terms">' + t('terms') + '</a>' +
        '<a href="#/legal">' + t('legalInfo') + '</a>' +
      '</div>' +
    '</article>';
}

function renderLegalApp(root, route) {
  const pack = LEGAL_PAGES[currentLang] || LEGAL_PAGES.en;
  const page = pack[route] || LEGAL_PAGES.en[route];
  document.title = page.title.replace(/^[^\w\u0400-\u04FF]+\s*/, '') + ' \u2014 ' + BRAND.name;

  const footerContacts = footerContactsHTML();

  root.innerHTML =
    ICO_GRAD_DEF +
    '<div class="bg-orbs" aria-hidden="true"><span class="orb orb-1"></span><span class="orb orb-2"></span><span class="orb orb-3"></span></div>' +
    '<header><div class="header-container">' + logoHTML() +
      '<nav class="nav-desktop' + (mobileMenuOpen ? ' nav-open' : '') + '"><li><a href="#/" class="nav-link">' + t('navHome') + '</a></li>' +
      '<li><a href="#services" class="nav-link">' + t('navServices') + '</a></li>' +
      '<li><a href="#contacts" class="nav-link">' + t('navContacts') + '</a></li></nav>' +
      '<div class="header-controls">' + langDropdownHTML() + '</div>' +
      '<button type="button" class="mobile-menu-btn">\u2630</button></div></header>' +
    '<main>' + legalPageHTML(route) + '</main>' +
    '<footer><div class="footer-content">' +
      '<div class="footer-section"><h4>' + BRAND.name + '</h4><p>' + t('footerDesc') + '</p></div>' +
      '<div class="footer-section"><h4>' + t('contactTitle') + '</h4>' + footerContacts + '</div>' +
      '<div class="footer-section"><h4>' + t('legalHeading') + '</h4>' +
        '<a href="#/privacy">' + t('privacyPolicy') + '</a>' +
        '<a href="#/terms">' + t('terms') + '</a>' +
        '<a href="#/legal">' + t('legalInfo') + '</a></div>' +
    '</div><div class="footer-bottom"><span>\u00a9 2026 ' + BRAND.name + ' \u{1F680}</span></div></footer>';

  injectStyles();
  attachEvents();
  window.scrollTo(0, 0);
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const route = getRoute();
  if (route) { renderLegalApp(app, route); return; }

  document.title = BRAND.name;

  const solutionsHTML = t('solutions').map(function (sol, i) {
    return '<div class="card reveal" data-delay="' + (i * 90) + '"><h3>' + sol.title + '</h3><p>' + sol.desc + '</p></div>';
  }).join('');

  const currencyButtons = CURRENCIES.map(function (c) {
    return '<button type="button" class="switcher-btn' + (c.code === currentCurrency ? ' active' : '') +
      '" data-currency="' + c.code + '" title="' + c.title + '">' + c.code + '</button>';
  }).join('');

  const currencySwitcher =
    '<div class="reveal" style="display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;margin:0 0 2.5rem;">' +
      '<span style="opacity:.65;font-size:.95rem;white-space:nowrap;">' + t('currencyLabel') + '</span>' +
      '<div class="currency-switcher" style="display:flex;gap:8px;flex-wrap:wrap;">' + currencyButtons + '</div>' +
    '</div>';

  const contactRows = [
    { icon: CONTACT_ICONS.telegram, label: 'Telegram', value: CONTACTS.telegram.handle, url: CONTACTS.telegram.url, ext: true },
    { icon: CONTACT_ICONS.whatsapp, label: 'WhatsApp', value: CONTACTS.whatsapp.display, url: CONTACTS.whatsapp.url, ext: true },
    { icon: CONTACT_ICONS.viber,    label: 'Viber',    value: CONTACTS.viber.display,    url: CONTACTS.viber.url,    ext: false },
    { icon: CONTACT_ICONS.email,    label: 'Email',    value: CONTACTS.email.display,    url: CONTACTS.email.url,    ext: false }
  ];

  const contactCards =
    ICO_GRAD_DEF +
    '<div class="contacts-list">' +
    contactRows.map(function (row, idx) {
      return '<a class="contact-row reveal" data-delay="' + (idx * 80) + '" href="' + row.url + '"' +
        (row.ext ? ' target="_blank" rel="noopener"' : '') + '>' +
        '<span class="contact-icon-wrap">' + row.icon + '</span>' +
        '<span class="contact-text">' +
          '<span class="contact-label">' + row.label + '</span>' +
          '<span class="contact-value">' + row.value + '</span>' +
        '</span>' +
        '<span class="contact-arrow">→</span>' +
      '</a>';
    }).join('') +
    '</div>';

  const footerContacts = footerContactsHTML();

  app.innerHTML =
    '<div class="bg-orbs" aria-hidden="true"><span class="orb orb-1"></span><span class="orb orb-2"></span><span class="orb orb-3"></span></div>' +
    '<header><div class="header-container">' + logoHTML() +
      '<nav class="nav-desktop' + (mobileMenuOpen ? ' nav-open' : '') + '"><li><a href="#" class="nav-link active">' + t('navHome') + '</a></li>' +
      '<li><a href="#services" class="nav-link">' + t('navServices') + '</a></li>' +
      '<li><a href="#contacts" class="nav-link">' + t('navContacts') + '</a></li></nav>' +
      '<div class="header-controls">' + langDropdownHTML() + '</div>' +
      '<button type="button" class="mobile-menu-btn">☰</button></div></header>' +
    '<main>' +
      '<section class="hero"><h1 class="hero-title">' + t('heroTitle') + '</h1>' +
        '<p class="hero-typed" aria-live="polite"><span class="typed-prefix">' + t('heroTypedPrefix') + '</span>' +
          '<span class="typed-text"></span><span class="typed-cursor">|</span></p>' +
        '<p class="hero-sub">' + t('heroSubtitle') + '</p>' +
        '<div class="hero-meta"><span class="meta-item">' + t('heroMeta') + '</span></div>' +
        '<button type="button" class="cta-btn pulse" data-scroll="form">' + t('heroCTA') + '</button></section>' +
      '<section id="solutions"><h2 class="reveal">' + t('whatCanCreate') + '</h2><div class="grid">' + solutionsHTML + '</div></section>' +
      '<section id="services"><h2 class="reveal">' + t('digitalSolutions') + '</h2>' + currencySwitcher +
        '<div class="pricing-block reveal"><h3>' + t('digitalSolutions') + '</h3>' +
          '<div class="pricing-amount" data-count-to="' + BASE_PRICE + '">' + formatPrice(BASE_PRICE) + '</div>' +
          '<p class="pricing-subtitle">' + t('pricing') + '</p>' +
          '<button type="button" class="cta-btn" data-scroll="form">' + t('heroCTA') + '</button></div>' +
        '<h2 class="reveal" style="margin-top: 4rem;">' + t('supportTitle') + '</h2>' +
        '<div class="pricing-block reveal"><h3>' + t('supportTitle') + '</h3>' +
          '<div class="pricing-amount" data-count-to="' + SUPPORT_PRICE + '">' + formatPrice(SUPPORT_PRICE) +
            '<span style="font-size: 0.6em;">' + t('perMonth') + '</span></div>' +
          '<p class="pricing-subtitle">' + t('supportDesc') + '</p></div>' +
        '<p class="currency-note reveal">' + t('currencyNote') + '</p></section>' +
      '<section class="cta-section reveal"><h3>' + t('ctaTitle') + '</h3><p>' + t('ctaDesc') + '</p>' +
        '<button type="button" class="cta-btn pulse" data-scroll="form">' + t('heroCTA') + '</button></section>' +
      '<section id="contacts"><h2 class="reveal">' + t('contactTitle') + '</h2>' + contactCards + '</section>' +
      '<section id="form"><h2 class="reveal">' + t('formTitle') + '</h2><div class="form-container reveal">' +
        '<form id="contactForm">' +
          '<div class="form-group"><label class="required">' + t('formNameLabel') + '</label><input type="text" name="name" required></div>' +
          '<div class="form-group"><label class="required">' + t('formContactLabel') + '</label><input type="text" name="contact" placeholder="' + t('formContactPlaceholder') + '" required></div>' +
          '<div class="form-group"><label>' + t('formPhoneLabel') + '</label><input type="tel" name="phone"></div>' +
          '<div class="form-group"><label class="required">' + t('formTaskLabel') + '</label><textarea name="task" required></textarea></div>' +
          '<div class="form-group"><label>' + t('formBudgetLabel') + '</label><input type="text" name="budget" placeholder="' + t('formBudgetPlaceholder') + '"></div>' +
          '<div class="form-group"><label>' + t('formInfoLabel') + '</label><textarea name="info"></textarea></div>' +
          '<button type="submit" class="form-submit pulse">' + t('formSubmit') + '</button><div class="form-message"></div>' +
        '</form></div></section>' +
    '</main>' +
    '<footer><div class="footer-content">' +
      '<div class="footer-section"><h4>' + BRAND.name + '</h4><p>' + t('footerDesc') + '</p></div>' +
      '<div class="footer-section"><h4>' + t('contactTitle') + '</h4>' + footerContacts + '</div>' +
      '<div class="footer-section"><h4>' + t('legalHeading') + '</h4>' +
        '<a href="#/privacy">' + t('privacyPolicy') + '</a><a href="#/terms">' + t('terms') + '</a><a href="#/legal">' + t('legalInfo') + '</a></div>' +
    '</div><div class="footer-bottom"><span>© 2026 ' + BRAND.name + ' 🚀</span></div></footer>';

  injectStyles();
  attachEvents();
  startAnimations();
}

function injectStyles() {
  if (document.getElementById('apl-anim')) return;

  const css =
    '#app{animation:aplFade .45s ease;}@keyframes aplFade{from{opacity:0;transform:translateY(10px);}to{opacity:1;transform:none;}}' +
    '.reveal{opacity:0;transform:translateY(38px);transition:opacity .8s cubic-bezier(.22,.61,.36,1),transform .8s cubic-bezier(.22,.61,.36,1);}.reveal.is-visible{opacity:1;transform:none;}' +
    '.bg-orbs{position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden;}.orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:.32;}' +
    '.orb-1{width:520px;height:520px;top:-160px;left:-120px;background:radial-gradient(circle,#5B7CFF,transparent 70%);animation:orbFloat1 22s ease-in-out infinite;}' +
    '.orb-2{width:440px;height:440px;top:35%;right:-140px;background:radial-gradient(circle,#FF5BA8,transparent 70%);animation:orbFloat2 26s ease-in-out infinite;}' +
    '.orb-3{width:480px;height:480px;bottom:-160px;left:35%;background:radial-gradient(circle,#8B5BFF,transparent 70%);animation:orbFloat3 30s ease-in-out infinite;}' +
    '.contacts-list{max-width:620px;margin:3rem auto 0;display:flex;flex-direction:column;gap:12px;}' +
    '.contact-row{display:flex;align-items:center;gap:16px;padding:16px 20px;background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:12px;text-decoration:none;color:inherit;transition:border-color .3s ease,transform .3s ease,box-shadow .3s ease;}' +
    '.contact-row:hover{border-color:var(--accent-green);transform:translateX(6px);box-shadow:0 8px 24px rgba(52,211,153,.12);}' +
    '.contact-icon-wrap{width:44px;height:44px;flex:0 0 auto;display:flex;align-items:center;justify-content:center;transition:transform .3s ease;}' +
    '.contact-row:hover .contact-icon-wrap{transform:scale(1.08);}' +
    '.contact-text{display:flex;flex-direction:column;line-height:1.35;min-width:0;}' +
    '.contact-label{font-size:.74rem;text-transform:uppercase;letter-spacing:1.4px;color:var(--text-secondary);font-weight:600;}' +
    '.contact-value{font-size:1rem;color:var(--text-primary);word-break:break-word;}' +
    '.contact-arrow{margin-left:auto;opacity:.3;font-size:1.1rem;transition:opacity .3s ease,transform .3s ease;}' +
    '.contact-row:hover .contact-arrow{opacity:.9;transform:translateX(4px);}' +
    '@keyframes orbFloat1{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(90px,70px) scale(1.15);}}' +
    '@keyframes orbFloat2{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(-80px,90px) scale(1.1);}}' +
    '@keyframes orbFloat3{0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(70px,-90px) scale(1.2);}}' +
    'main,footer{position:relative;z-index:1;}' +'.lang-dropdown{z-index:9999 !important;}' +'.lang-menu{position:absolute !important;z-index:10000 !important;}' +
    '.card{transition:transform .35s cubic-bezier(.22,.61,.36,1),box-shadow .35s ease,border-color .35s ease;}' +
    '.card:hover{transform:translateY(-8px) scale(1.02);box-shadow:0 18px 40px rgba(91,124,255,.28),0 0 0 1px rgba(139,91,255,.35);}' +
    '.pulse{position:relative;}.pulse::after{content:"";position:absolute;inset:-2px;border-radius:inherit;background:linear-gradient(120deg,#5B7CFF,#8B5BFF,#FF5BA8);opacity:0;z-index:-1;filter:blur(12px);transition:opacity .4s ease;}' +
    '.pulse:hover::after{opacity:.75;animation:pulseGlow 2s ease-in-out infinite;}@keyframes pulseGlow{0%,100%{filter:blur(12px);}50%{filter:blur(20px);}}' +
    '.typed-cursor{display:inline-block;margin-left:2px;animation:blink 1s step-end infinite;}@keyframes blink{0%,100%{opacity:1;}50%{opacity:0;}}' +
    '.footer-content{max-width:1200px;margin:0 auto 3rem;padding:0 1.5rem;display:grid;grid-template-columns:1.1fr 1fr 1fr;gap:2.5rem 3rem;align-items:start;}' +
    'footer{padding:4rem 0 2rem;}' +
    '.footer-bottom{max-width:1200px;margin:0 auto;padding:2rem 1.5rem 0;}' +
    '.footer-section{padding:0;}' +
    '.footer-section h4{margin-top:0;}' +
    '.footer-contacts{display:flex;flex-direction:column;gap:10px;margin-top:4px;}' +
    '.footer-contact-row{display:flex !important;align-items:center;gap:10px;text-decoration:none;color:var(--text-secondary);font-size:.92rem;transition:color .25s ease,gap .25s ease;}' +
    '.footer-contact-row:hover{color:var(--accent-green);gap:13px;}' +
    '.footer-contact-icon{width:18px;height:18px;flex:0 0 18px;display:flex;align-items:center;justify-content:center;line-height:0;}' +
    '.footer-contact-icon svg{width:18px !important;height:18px !important;display:block;}' +
    '.footer-contact-label{white-space:nowrap;}' +
    '.legal-page{max-width:820px;margin:0 auto;padding:3.5rem 0 4rem;}' +
    '.legal-back{display:inline-block;margin-bottom:1.75rem;font-size:.9rem;color:var(--text-secondary);text-decoration:none;transition:color .3s ease;}' +
    '.legal-back:hover{color:var(--accent-green);}' +
    '.legal-page h1{font-size:clamp(1.6rem,4vw,2.4rem);line-height:1.25;margin-bottom:.6rem;}' +
    '.legal-effective{font-size:.88rem;color:var(--text-secondary);margin-bottom:2.75rem;padding-bottom:1.5rem;border-bottom:1px solid var(--border-color);}' +
    '.legal-page h2{font-size:clamp(1.15rem,2.6vw,1.5rem);margin:2.5rem 0 .9rem;text-align:left;}' +
    '.legal-page p{color:var(--text-secondary);line-height:1.75;margin-bottom:.9rem;font-size:.98rem;}' +
    '.legal-footer-links{display:flex;gap:1.5rem;flex-wrap:wrap;margin-top:3.5rem;padding-top:2rem;border-top:1px solid var(--border-color);}' +
    '.legal-footer-links a{color:var(--accent-green);text-decoration:none;font-size:.9rem;}' +
    '.legal-footer-links a:hover{text-decoration:underline;}' +
    '.lang-menu{pointer-events:auto !important;}.lang-menu button{pointer-events:auto !important;}' +
    '.hero-meta{display:flex !important;justify-content:center !important;text-align:center !important;width:100%;}' +
    '.meta-item{margin:0 auto;text-align:center;justify-content:center;}' +
    '.lang-dropdown [data-lang-toggle]{min-width:118px;justify-content:space-between;}' +
    '.nav-desktop{display:flex !important;position:static;flex-direction:row;gap:1rem;background:none;border:none;max-height:none;padding:0;overflow:visible;z-index:auto;}' +
    '.nav-desktop.nav-open{max-height:none;padding:0;}' +
    '.nav-desktop li{list-style:none;}' +
    '.nav-desktop .nav-link{display:inline;padding:0;border:none;text-decoration:none;color:#fff;}' +
    '@media (max-width:768px){' +
      '.mobile-menu-btn{display:flex !important;align-items:center;justify-content:center;width:40px;height:40px;}' +
      '.header-container{position:relative;flex-wrap:wrap;height:auto;min-height:60px;padding:.6rem 0;}' +
      '.nav-desktop{display:flex !important;position:absolute;top:calc(100% + 0px);left:0;right:0;width:100%;flex-direction:column;gap:0;' +
        'background:#1a1a2e;border:1px solid rgba(255,255,255,.1);border-top:1px solid rgba(255,255,255,.1);' +
        'max-height:0;overflow:hidden;transition:max-height 0.3s ease;padding:0 1.5rem;z-index:9999;' +
        'box-shadow:0 12px 24px rgba(0,0,0,.35);border-radius:0 0 10px 10px;}' +
      '.nav-desktop.nav-open{max-height:260px;padding:1rem 1.5rem;overflow:visible;}' +
      '.nav-desktop li{width:100%;list-style:none;}' +
      '.nav-desktop .nav-link{display:block;padding:.85rem 0;border-bottom:1px solid rgba(255,255,255,.06);text-decoration:none;color:#fff;}' +
      '.header-controls{margin-left:auto;margin-right:.5rem;}' +
    '}' +
    '@media (max-width:900px){.footer-content{grid-template-columns:1fr 1fr;gap:2.5rem 2rem;}}' +
    '@media (max-width:600px){.footer-content{grid-template-columns:1fr;gap:2.2rem;}}' +
    '@media (prefers-reduced-motion: reduce){.reveal{opacity:1;transform:none;transition:none;}.orb{animation:none;}.pulse::after{display:none;}.typed-cursor{animation:none;}#app{animation:none;}}';

  const style = document.createElement('style');
  style.id = 'apl-anim';
  style.textContent = css;
  document.head.appendChild(style);
}

let typedTimer = null;
let revealObserver = null;

function startAnimations() {
  if (revealObserver) revealObserver.disconnect();

  const items = document.querySelectorAll('.reveal');
  items.forEach(function (el) {
    const d = el.getAttribute('data-delay');
    if (d) el.style.transitionDelay = d + 'ms';
  });

  if ('IntersectionObserver' in window) {
    revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    items.forEach(function (el) { revealObserver.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-visible'); });
  }

  startTypedText();
  startPriceCounters();
}

function startTypedText() {
  const el = document.querySelector('.typed-text');
  if (!el) return;

  const words = t('heroTyped');
  if (!words || !words.length) return;

  if (typedTimer) { clearTimeout(typedTimer); typedTimer = null; }

  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function step() {
    const word = words[wordIndex % words.length];

    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex >= word.length) {
        deleting = true;
        typedTimer = setTimeout(step, 1600);
        return;
      }
      typedTimer = setTimeout(step, 65);
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex <= 0) {
        deleting = false;
        wordIndex++;
        typedTimer = setTimeout(step, 260);
        return;
      }
      typedTimer = setTimeout(step, 32);
    }
  }

  step();
}

function startPriceCounters() {
  const counters = document.querySelectorAll('[data-count-to]');
  counters.forEach(function (el) {
    const target = parseInt(el.getAttribute('data-count-to'), 10);
    if (!target) return;

    const rate = exchangeRates[currentCurrency] || 1;
    const finalValue = Math.round(target * rate);
    const symbol = currentCurrency === 'EUR' ? '€' : '$';
    const locale = currentLang === 'ru' ? 'ru-RU' : 'en-US';
    const suffix = el.querySelector('span');

    let current = 0;
    const steps = 28;
    const inc = finalValue / steps;
    let i = 0;

    const timer = setInterval(function () {
      i++;
      current = Math.round(inc * i);
      if (i >= steps) { current = finalValue; clearInterval(timer); }

      el.textContent = symbol + current.toLocaleString(locale);
      if (suffix) el.appendChild(suffix);
    }, 28);
  });
}

function attachEvents() {
  const burger = document.querySelector('.mobile-menu-btn');
  if (burger) {
    burger.onclick = function (ev) {
      ev.stopPropagation();
      mobileMenuOpen = !mobileMenuOpen;
      renderApp();
    };
  }

  document.querySelectorAll('.nav-desktop .nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileMenuOpen = false;
      const nav = document.querySelector('.nav-desktop');
      if (nav) nav.classList.remove('nav-open');
    });
  });

  const logoEl = document.querySelector('.logo');
  if (logoEl) {
    logoEl.onclick = function (ev) {
      ev.preventDefault();
      if (location.hash && location.hash !== '#/') { location.hash = '#/'; }
    };
  }

  document.querySelectorAll('.nav-link').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    if (href === '#/' || href === '#') {
      link.onclick = function (ev) {
        ev.preventDefault();
        if (location.hash && location.hash !== '#/') { location.hash = '#/'; }
      };
    } else if (getRoute()) {
      link.onclick = function (ev) {
        ev.preventDefault();
        location.hash = '#/';
        setTimeout(function () {
          const target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }, 120);
      };
    }
  });

  const toggle = document.querySelector('[data-lang-toggle]');
  if (toggle) {
    toggle.onclick = function (ev) {
      ev.stopPropagation();
      ev.preventDefault();
      const menu = document.querySelector('.lang-menu');
      if (!menu) return;
      langMenuOpen = !langMenuOpen;
      menu.style.display = langMenuOpen ? 'block' : 'none';
      toggle.setAttribute('aria-expanded', langMenuOpen ? 'true' : 'false');
    };
  }

  document.querySelectorAll('.lang-option').forEach(function (btn) {
    btn.onclick = function (ev) {
      ev.stopPropagation();
      ev.preventDefault();
      currentLang = btn.getAttribute('data-lang');
      userPickedLang = true;
      try { localStorage.setItem('apl_lang', currentLang); } catch (e) {}
      langMenuOpen = false;
      renderApp();
    };
  });

  document.querySelectorAll('[data-currency]').forEach(function (btn) {
    btn.onclick = function (ev) {
      ev.stopPropagation();
      currentCurrency = btn.getAttribute('data-currency');
      renderApp();
    };
  });

  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.onclick = function () {
      const target = document.getElementById(btn.getAttribute('data-scroll'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    };
  });

  const form = document.getElementById('contactForm');
  if (form) form.onsubmit = handleFormSubmit;

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.onclick = function () {
      document.querySelectorAll('.nav-link').forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');
    };
  });
}

document.addEventListener('click', function (ev) {
  if (mobileMenuOpen && !ev.target.closest('.nav-desktop') && !ev.target.closest('.mobile-menu-btn')) {
    mobileMenuOpen = false;
    const nav = document.querySelector('.nav-desktop');
    if (nav) nav.classList.remove('nav-open');
  }

  const menu = document.querySelector('.lang-menu');
  if (menu && langMenuOpen) {
    langMenuOpen = false;
    menu.style.display = 'none';
    const toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
  }
});

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const msg = form.querySelector('.form-message');
  const data = new FormData(form);

  const payload = {
    name: data.get('name'),
    contact: data.get('contact'),
    phone: data.get('phone'),
    task: data.get('task'),
    budget: data.get('budget'),
    info: data.get('info'),
    lang: currentLang,
    currency: currentCurrency
  };

  fetch('/api/submit-form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function (res) { return res.json(); })
    .then(function (res) {
      if (res && res.success) {
        msg.textContent = t('formSuccess');
        msg.className = 'form-message success show';
        form.reset();
        setTimeout(function () { msg.className = 'form-message'; }, 6000);
      } else {
        msg.textContent = t('formError');
        msg.className = 'form-message error show';
      }
    })
    .catch(function () {
      msg.textContent = t('formError');
      msg.className = 'form-message error show';
    });
}

window.addEventListener('hashchange', function () {
  renderApp();
});

function init() {
  detectLanguage();
  renderApp();
  loadExchangeRatesInBackground();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
