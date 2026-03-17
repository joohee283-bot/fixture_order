const app = {
    currentTab: 'vmd',
    currentStore: null,
    currentInstalledFixture: null,
    currentFixture: null,
    currentView: 'home',

    async init() {
        try {
            await this.loadTemplates();
            this.navigateTo('home');
        } catch (error) {
            console.error('Failed to load templates:', error);
            // Fallback: still try to navigate to home if it exists in index.html
            this.navigateTo('home');
        }
    },

    async loadTemplates() {
        const templates = [
            '매장 정보/store_info_tpl.html',
            '집기 요청/fixture_request_tpl.html',
            '철제스탠드/guide_tpl.html'
        ];

        for (const url of templates) {
            const response = await fetch(url);
            if (response.ok) {
                const html = await response.text();
                const container = document.createElement('div');
                container.innerHTML = html;
                // Move all templates to the body
                const tpls = container.querySelectorAll('template');
                tpls.forEach(t => document.body.appendChild(t));
            }
        }
    },

    navigateTo(viewId, initialData = null) {
        this.currentView = viewId;
        const main = document.getElementById('app-main');
        const fab = document.getElementById('fab-container');

        if (viewId === 'home') {
            if (fab) fab.style.display = 'flex';
            this.resetFab();
        } else {
            if (fab) fab.style.display = 'none';
        }

        switch (viewId) {
            case 'home':
                main.innerHTML = document.getElementById('tpl-home').innerHTML;
                break;
            case 'fixtureList':
                main.innerHTML = document.getElementById('tpl-fixture-list').innerHTML;
                this.switchFixtureTab(initialData || 'marketing');
                break;
            case 'subItemList':
                main.innerHTML = document.getElementById('tpl-subitem-list').innerHTML;
                this.renderSubItemList(initialData);
                break;
            case 'fixtureDetail':
                main.innerHTML = document.getElementById('tpl-fixture-detail').innerHTML;
                this.renderFixtureDetail();
                break;
            case 'guideList':
                main.innerHTML = document.getElementById('tpl-guide-list').innerHTML;
                // Render the default latest guide tab cards
                if (typeof app.renderGuideGrid === 'function') {
                    app.renderGuideGrid('latest');
                }
                break;
            case 'guideDetail':
                main.innerHTML = document.getElementById('tpl-guide-detail').innerHTML;
                break;
            case 'storeList':
                main.innerHTML = document.getElementById('tpl-store-list').innerHTML;
                this.renderStoreList();
                break;
            case 'storeDetail':
                main.innerHTML = document.getElementById('tpl-store-detail').innerHTML;
                this.renderStoreDetail(initialData);
                break;
            case 'fixtureStatusDetail':
                main.innerHTML = document.getElementById('tpl-fixture-status-detail').innerHTML;
                this.renderFixtureStatusDetail(initialData);
                break;
        }
        window.scrollTo(0, 0);
    },

    openModal(id) {
        document.getElementById(id).style.display = 'flex';
    },

    closeModal(id) {
        document.getElementById(id).style.display = 'none';
    },

    searchStore() {
        const input = document.getElementById('storeSearchInput').value;
        const resBox = document.getElementById('storeSearchResult');
        if (input.trim() === '') {
            alert('검색어를 입력하세요.');
            return;
        }

        // Mock result
        resBox.style.display = 'block';
        resBox.innerHTML = `
            <div style="background:var(--primary-color); color:white; padding:4px 8px; display:inline-block; border-radius:12px; font-size:0.8rem; margin-bottom:8px;">홈플러스 영통점 <i class='bx bx-x' style="cursor:pointer; vertical-align:middle;"></i></div>
            <input type="text" class="form-input" disabled value="LG전자 베스트샵홈플러스 영통점" style="margin-bottom:12px;">
        `;
    },

    confirmStore() {
        const storeBox = document.getElementById('selectedStoreInfo');
        if (storeBox) storeBox.style.display = 'block';
        const nameEl = document.getElementById('selectedStoreName');
        if (nameEl) nameEl.innerText = '홈플러스 영통점';
        this.closeModal('storeSearchModal');
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
