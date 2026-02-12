// ============================================================
// app.js — State machine / flow controller
// ============================================================

const TOTAL_STEPS = 5;
const STORAGE_KEY = 'art-buyer-guide-state';

const app = {
  step: 0,       // 0=welcome, 1=statements, 2=ab, 3=bridges, 4=filters, 5=results
  state: {
    statementAnswers: new Array(16).fill(null),
    abAnswers: new Array(10).fill(null),
    bridgeSelections: {},  // { domainId: [kwKey, ...] }
    filters: {
      budget: 'any',
      format: 'any',
      medium: ['any'],
      edition: 'any'
    }
  },

  init() {
    this.loadState();
    this.bindGlobal();
    this.render();
  },

  bindGlobal() {
    // Theme toggle
    const themeBtn = $('.theme-toggle');
    if (themeBtn) {
      themeBtn.onclick = () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('abg-theme', next);
      };
    }

    // Language toggle
    const langBtn = $('.lang-toggle');
    if (langBtn) {
      langBtn.onclick = () => {
        toggleLang();
        langBtn.textContent = t('langToggle');
        $('.header-title').textContent = t('appTitle');
        this.render();
      };
    }

    // Restore theme
    const savedTheme = localStorage.getItem('abg-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  },

  nextStep() {
    if (this.step < TOTAL_STEPS) {
      this.step++;
      this.saveState();
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  prevStep() {
    if (this.step > 0) {
      this.step--;
      this.saveState();
      this.render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  restart() {
    this.step = 0;
    this.state = {
      statementAnswers: new Array(16).fill(null),
      abAnswers: new Array(10).fill(null),
      bridgeSelections: {},
      filters: { budget: 'any', format: 'any', medium: ['any'], edition: 'any' }
    };
    localStorage.removeItem(STORAGE_KEY);
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  render() {
    // Update header
    const langBtn = $('.lang-toggle');
    if (langBtn) langBtn.textContent = t('langToggle');
    const titleEl = $('.header-title');
    if (titleEl) titleEl.textContent = t('appTitle');

    // Hide all screens
    $$('.screen').forEach(s => {
      s.classList.remove('active');
      s.style.display = 'none';
    });

    // Show progress
    const progressContainer = $('.progress-container');
    if (progressContainer) {
      progressContainer.style.display = this.step === 0 ? 'none' : 'block';
    }
    const progressText = $('.progress-text');
    if (progressText) {
      progressText.style.display = this.step === 0 || this.step > TOTAL_STEPS ? 'none' : 'block';
    }

    if (this.step >= 1 && this.step <= TOTAL_STEPS) {
      updateProgress(this.step, TOTAL_STEPS);
    }

    // Render current screen
    const screenMap = {
      0: 'screen-welcome',
      1: 'screen-statements',
      2: 'screen-ab',
      3: 'screen-bridges',
      4: 'screen-filters',
      5: 'screen-results'
    };

    const screenId = screenMap[this.step];
    const screenEl = $('#' + screenId);
    if (!screenEl) return;

    switch (this.step) {
      case 0:
        renderWelcome(screenEl);
        break;
      case 1:
        renderStatements(screenEl, this.state.statementAnswers);
        break;
      case 2:
        renderABChoices(screenEl, this.state.abAnswers);
        break;
      case 3:
        renderBridges(screenEl, this.state.bridgeSelections);
        break;
      case 4:
        renderFilters(screenEl, this.state.filters);
        break;
      case 5:
        this.renderResults(screenEl);
        break;
    }

    // Animate in
    screenEl.style.display = 'block';
    requestAnimationFrame(() => {
      screenEl.classList.add('active');
    });
  },

  renderResults(screenEl) {
    const profile = buildProfile(
      this.state.statementAnswers,
      this.state.abAnswers,
      this.state.bridgeSelections,
      this.state.filters
    );
    const shortlists = generateShortlists(profile);
    renderResults(screenEl, profile, shortlists);
  },

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        step: this.step,
        state: this.state
      }));
    } catch (e) { /* quota exceeded, ignore */ }
  },

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.step = parsed.step || 0;
        this.state = { ...this.state, ...parsed.state };
      }
    } catch (e) { /* corrupted, start fresh */ }
  }
};

// Boot
document.addEventListener('DOMContentLoaded', () => app.init());
