const storeData = [
    {
        id: 's1',
        name: '신 홈플러스 전주완산점',
        address: '전라북도 전주시 기린대로 170 LG베스트샵 전주완산점',
        phone: '063-263-2080',
        img: 'images_store/신 홈플러스 전주완산점.jpg',
        size: '34PY',
        type: '전체',
        status: '점검완료',
        grade: '성수기',
        managers: {
            hsad: { name: '서지현', email: 'jseo12@hsad.co.kr', phone: '010-2036-7605' },
            marketer: { name: '이마케', email: 'marketer@lge.com', phone: '010-1234-5678' },
            contractor: { name: '박도급', email: 'contract@company.com', phone: '010-9876-5432' }
        },
        images: [
            'images_store/신 홈플러스 전주완산점.jpg',
            'images_store/77634904-c1a9-418f-8898-58c5de2aa19f.jpg',
            'images_store/878b85d9-e6ac-4a68-a516-2cb24b47bc80.jpg'
        ],
        installedFixtures: [
            { id: 'if1', name: '듀얼 정수기 집기 (혼매)', type: 'marketing', category: '주방가전', size: '750 x 900 x 1000', stock: 13, status: 'Normal', requestId: null, img: 'images_filter/정수기.png' },
            { id: 'if2', name: '듀얼 정수기 집기 (혼매)', type: 'marketing', category: '주방가전', size: '1000 x 900 x 1000', stock: 5, status: 'Reviewing', requestId: 'req123', img: 'images_filter/정수기.png' },
            { id: 'if3', name: '키즈존', type: 'vmd', category: '키즈존', size: '1200 x 600 x 1400', stock: 1, status: 'Normal', requestId: null, img: 'images/키즈존.png' }
        ],
        requestHistory: [
            { id: 'req123', fixtureId: 'if2', type: '추가제작', date: '2026/01/20', installDate: '2026/01/29', status: '검토중' }
        ]
    },
    {
        id: 's2',
        name: '신 홈플러스 전북전주점',
        address: '전라북도 전주시 백제대로 771 LG전자',
        phone: '063-234-5678',
        img: 'images_store/신 홈플러스 전북전주점.jpg',
        size: '30PY',
        type: '전체',
        status: '점검완료',
        grade: '성수기'
    },
    {
        id: 's3',
        name: '신 홈플러스 순천풍덕점',
        address: '전남 순천시 팔마로 222 3층 LG전자',
        phone: '061-123-4567',
        img: 'images_store/신 홈플러스 순천풍덕점.jpg',
        size: '50PY',
        type: '전체',
        status: '점검완료',
        grade: '성수기'
    },
    {
        id: 's4',
        name: '신 홈플러스 순천점',
        address: '전남 순천시 신원큰길 10 1층 LG전자',
        phone: '061-987-6543',
        img: 'images_store/신 홈플러스 순천점.jpg',
        size: '60PY',
        type: '전체',
        status: '점검완료',
        grade: '성수기'
    }
];

const modelData = {
    vmd: [
        { id: 'v1', name: '키즈존', type: 'vmd', size: '1200 x 600 x 1400', stock: 5, img: 'images/키즈존.png', category: '키즈존' },
        { id: 'v2', name: '미니 키즈존', type: 'vmd', size: '800 x 400 x 1200', stock: 12, img: 'https://images.unsplash.com/photo-1566833324151-6ca2376e191a?auto=format&fit=crop&w=300&q=80', category: '미니 키즈존' },
        {
            id: 'v3', name: '연출 집기_피크닉', type: 'vmd', size: '1500 x 800 x 800', stock: 0, img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=300&q=80', category: '연출 집기', subItems: [
                { id: 'v3_1', name: '피크닉 테이블', type: 'vmd', size: '800 x 600', stock: 5, img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80' },
                { id: 'v3_2', name: '피크닉 매트', type: 'vmd', size: '1200 x 1200', stock: 10, img: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=300&q=80' }
            ]
        },
        {
            id: 'v4', name: '연출 집기_캠핑', type: 'vmd', size: '2000 x 1000', stock: 5, img: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=300&q=80', category: '연출 집기', subItems: [
                { id: 'v4_1', name: '캠핑 텐트', type: 'vmd', size: '2000 x 1500', stock: 3, img: 'https://images.unsplash.com/photo-1533042456076-0683a307399a?auto=format&fit=crop&w=300&q=80' },
                { id: 'v4_2', name: '캠핑 체어', type: 'vmd', size: '500 x 500', stock: 8, img: 'https://images.unsplash.com/photo-1506501139174-099022df5260?auto=format&fit=crop&w=300&q=80' },
                { id: 'v4_3', name: '캠핑 렌턴', type: 'vmd', size: '200 x 300', stock: 12, img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=300&q=80' }
            ]
        },
        {
            id: 'v5', name: '연출 집기_할로윈', type: 'vmd', size: '1500 x 1500', stock: 15, img: 'https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=300&q=80', category: '연출 집기', subItems: [
                { id: 'v5_1', name: '호박 모형', type: 'vmd', size: '300 x 300', stock: 2, img: 'https://images.unsplash.com/photo-1508363778367-af993f3f3f50?auto=format&fit=crop&w=300&q=80' }
            ]
        },
        { id: 'v6', name: '연출 집기_시즌', type: 'vmd', size: '1000 x 1000', stock: 10, img: 'https://images.unsplash.com/photo-1512338135235-8027607730e7?auto=format&fit=crop&w=300&q=80', category: '연출 집기' }
    ],
    marketing: [
        {
            id: 'm1', name: '상업용 디스플레이', type: 'marketing', size: '1000 x 500', stock: 20, img: 'images_filter/상업용 디스플레이.png', category: 'TV/오디오', subItems: [
                { id: 'm1_1', name: '상업용 디스플레이 1', type: 'marketing', size: '1000 x 500', stock: 10, img: 'https://images.unsplash.com/photo-1593305841991-05c2a0a35653?auto=format&fit=crop&w=300&q=80' },
                { id: 'm1_2', name: '상업용 디스플레이 2', type: 'marketing', size: '800 x 400', stock: 5, img: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=300&q=80' },
                { id: 'm1_3', name: '상업용 디스플레이 3', type: 'marketing', size: '1200 x 600', stock: 0, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80' }
            ]
        },
        { id: 'm2', name: '오디오/비디오', type: 'marketing', size: '300 x 300', stock: 12, img: 'images_filter/오디오.png', category: 'TV/오디오' },
        { id: 'm3', name: '프로젝터', type: 'marketing', size: '400 x 400', stock: 5, img: 'images_filter/프로젝터.png', category: 'TV/오디오' },
        { id: 'm4', name: '스탠바이미', type: 'marketing', size: '600 x 600', stock: 2, img: 'images_filter/스탠바이미.png', category: 'TV/오디오' },
        {
            id: 'm5', name: 'TV', type: 'marketing', size: '1200 x 800', stock: 8, img: 'images_filter/tv.png', category: 'TV/오디오', subItems: [
                { id: 'm5_1', name: 'OLED TV', type: 'marketing', size: '1500 x 900', stock: 3, img: 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?auto=format&fit=crop&w=300&q=80' },
                { id: 'm5_2', name: 'QNED TV', type: 'marketing', size: '1500 x 900', stock: 0, img: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=300&q=80' }
            ]
        },

        { id: 'm6', name: '모니터', type: 'marketing', size: '800 x 400', stock: 0, img: 'images_filter/모니터.png', category: 'PC/모니터' },
        { id: 'm7', name: '일체형/데스크톱', type: 'marketing', size: '400 x 600', stock: 15, img: 'images_filter/일체형데스크톱.png', category: 'PC/모니터' },
        { id: 'm8', name: '노트북/태블릿', type: 'marketing', size: '300 x 200', stock: 30, img: 'images_filter/노트북태블릿.png', category: 'PC/모니터' },

        { id: 'm9', name: '빌트인가전', type: 'marketing', size: '900 x 2000', stock: 3, img: 'images_filter/빌트인가전.png', category: '주방가전' },
        { id: 'm10', name: '맥주제조기', type: 'marketing', size: '400 x 500', stock: 0, img: 'images_filter/맥주제조기.png', category: '주방가전' },
        { id: 'm11', name: '정수기', type: 'marketing', size: '300 x 1000', stock: 25, img: 'images_filter/정수기.png', category: '주방가전' },
        { id: 'm12', name: '식기세척기', type: 'marketing', size: '600 x 850', stock: 10, img: 'images_filter/식기세척기.png', category: '주방가전' },
        {
            id: 'm13', name: '와인셀러', type: 'marketing', size: '600 x 850', stock: 10, img: 'images_filter/와인셀러.png', category: '주방가전', subItems: [
                { id: 'm13_1', name: '와인셀러 미니', type: 'marketing', size: '400 x 600', stock: 5, img: 'https://images.unsplash.com/photo-1520114878144-6123749968dd?auto=format&fit=crop&w=300&q=80' }
            ]
        }
    ]
};

const app = {
    currentTab: 'vmd',
    currentStore: null,
    currentInstalledFixture: null,

    init() {
        this.navigateTo('home');
    },

    toggleFabMenu() {
        const fabBtn = document.getElementById('fabMainBtn');
        const fabIcon = fabBtn.querySelector('.fab-icon');
        const fabText = fabBtn.querySelector('.fab-text');

        if (fabText.style.display === 'none') {
            // First click: Expand FAB
            fabText.style.display = 'inline-block';
            fabIcon.style.transform = 'rotate(45deg)';
            fabIcon.style.color = 'var(--text-main)';
            fabBtn.style.backgroundColor = 'white';
            fabBtn.style.color = 'var(--text-main)';
            fabBtn.style.border = '1px solid var(--border-color)';
            fabBtn.style.borderRadius = '30px';
            fabBtn.style.padding = '12px 24px';
            fabBtn.style.width = 'auto'; // ensure width adjusts for text
        } else {
            // Second click: Navigate to request screen
            this.navigateTo('fixtureList', 'marketing'); // default to marketing
            // reset FAB state for next entry
            this.resetFab();
        }
    },

    resetFab() {
        const fabBtn = document.getElementById('fabMainBtn');
        if (!fabBtn) return;
        const fabIcon = fabBtn.querySelector('.fab-icon');
        const fabText = fabBtn.querySelector('.fab-text');

        fabText.style.display = 'none';
        fabIcon.style.transform = 'rotate(0deg)';
        fabIcon.style.color = 'white';
        fabBtn.style.backgroundColor = 'var(--primary-color)';
        fabBtn.style.border = 'none';
        fabBtn.style.borderRadius = '50%';
        fabBtn.style.padding = '0';
        fabBtn.style.width = '60px'; // default size
        fabBtn.style.height = '60px';
    },

    navigateTo(viewId, initialData = null) {
        this.currentView = viewId;
        const main = document.getElementById('app-main');
        const fab = document.getElementById('fab-container');

        if (viewId === 'home') {
            fab.style.display = 'flex';
            this.resetFab();
        } else {
            fab.style.display = 'none';
        }

        switch (viewId) {
            case 'home':
                main.innerHTML = document.getElementById('tpl-home').innerHTML;
                break;
            case 'fixtureList':
                main.innerHTML = document.getElementById('tpl-fixture-list').innerHTML;
                this.switchFixtureTab(initialData || 'marketing'); // changed default to marketing
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

    switchFixtureTab(type) {
        this.currentTab = type;

        // Update tab UI
        document.querySelectorAll('.app-tab-btn').forEach(btn => {
            if (btn.dataset.type === type) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        this.renderCategorySlider(type);
        const allChip = document.querySelector('#categorySlider .chip');
        if (allChip) {
            this.filterCategory(type, '전체', allChip);
        } else {
            this.renderFixtureList(type, '전체');
        }
    },

    renderCategorySlider(type) {
        const slider = document.getElementById('categorySlider');
        let categories = ['전체'];

        if (type === 'vmd') {
            categories.push('키즈존', '미니 키즈존', '연출 집기');
        } else {
            categories.push('TV/오디오', 'PC/모니터', '주방가전', '생활가전', '에어컨/에어케어');
        }

        // Generate category tabs
        slider.innerHTML = categories.map((cat, idx) => `
            <button class="chip ${idx === 0 ? 'active' : ''}" onclick="app.filterCategory('${type}', '${cat}', this)">${cat}</button>
        `).join('');
    },

    filterCategory(type, category, btnElement) {
        // Update active tab style
        document.querySelectorAll('#categorySlider .chip').forEach(c => {
            c.classList.remove('active');
        });
        btnElement.classList.add('active');

        this.renderFixtureList(type, category);
    },

    renderFixtureList(type, categoryFilter) {
        const grid = document.getElementById('fixtureGrid');

        if (type === 'marketing') {
            grid.classList.add('marketing-grid');
        } else {
            grid.classList.remove('marketing-grid');
        }

        grid.innerHTML = '';
        let data = modelData[type] || [];



        if (categoryFilter !== '전체') {
            data = data.filter(item => item.category === categoryFilter);
        }

        data.forEach(item => {
            const card = document.createElement('div');

            const clickHandler = () => {
                if (item.subItems && item.subItems.length > 0) {
                    this.navigateTo('subItemList', item);
                } else {
                    this.currentFixture = item;
                    this.navigateTo('fixtureDetail');
                }
            };

            if (type === 'marketing') {
                card.className = 'fixture-card-wide';
                card.onclick = clickHandler;
                card.innerHTML = `
                    <div style="flex: 0 0 60px; height: 100%; display:flex; align-items:center; justify-content:center;">
                        <img src="${item.img}" alt="${item.name}" style="max-width:50px; max-height:50px; object-fit:contain;">
                    </div>
                    <div style="flex:1; padding-left:12px; font-size:0.9rem; font-weight:bold; display:flex; align-items:center;">
                        ${item.name}
                    </div>
                `;
            } else {
                card.className = 'fixture-card';
                card.onclick = clickHandler;

                const stockOut = item.stock === 0 ? `<div class="stock-out-badge">재고 없음</div>` : '';
                card.innerHTML = `
                    <div class="card-img-wrap">
                        <img src="${item.img}" alt="${item.name}">
                        ${stockOut}
                    </div>
                    <div class="fixture-card-title">${item.name}</div>
                `;
            }

            grid.appendChild(card);
        });
    },

    renderSubItemList(categoryItem) {
        if (!categoryItem) return;

        document.getElementById('subItemListCategoryTitle').innerText = categoryItem.name;
        document.getElementById('subItemBackButton').onclick = () => this.navigateTo('fixtureList', categoryItem.type);

        const listContainer = document.getElementById('subItemVerticalList');
        listContainer.innerHTML = '';

        const items = categoryItem.subItems || [];

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'vertical-list-item';
            card.onclick = () => {
                this.currentFixture = item;
                this.navigateTo('fixtureDetail');
            };

            const stockText = item.stock > 0 ? `재고: ${item.stock} 개` : '<span style="color:var(--primary-color);">재고 없음</span>';

            card.innerHTML = `
                <div class="vertical-list-img">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="vertical-list-content">
                    <div class="vertical-list-title">${item.name}</div>
                    <div class="vertical-list-stock">${stockText}</div>
                </div>
            `;
            listContainer.appendChild(card);
        });
    },

    renderFixtureDetail() {
        if (!this.currentFixture) return;
        const item = this.currentFixture;

        document.getElementById('detailImg').src = item.img;
        document.getElementById('detailName').innerText = item.name;
        document.getElementById('detailSize').innerText = item.size;
        document.getElementById('detailStock').value = item.stock;
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
        storeBox.style.display = 'block';
        document.getElementById('selectedStoreName').innerText = '홈플러스 영통점';
        this.closeModal('storeSearchModal');
    },

    submitRequest() {
        const requestType = document.querySelector('input[name="requestType"]:checked');
        if (!requestType) {
            alert('요청 내용을 선택해주세요.');
            return;
        }

        if (document.getElementById('selectedStoreInfo').style.display === 'none') {
            alert('요청 매장을 입력해주세요.');
            return;
        }
        alert('요청이 완료되었습니다.');
        this.navigateTo('home');
    },

    /* --- Store Information Feature --- */
    renderStoreList() {
        const grid = document.getElementById('storeGrid');
        const countSpan = document.getElementById('storeCount');
        if (!grid) return;

        grid.innerHTML = '';
        countSpan.innerText = storeData.length;

        storeData.forEach(store => {
            const card = document.createElement('div');
            card.className = 'store-card';
            card.onclick = () => this.navigateTo('storeDetail', store);
            card.innerHTML = `
                <div class="store-card-img-wrap">
                    <img src="${store.img}" alt="${store.name}">
                    <div class="store-grade-badge">${store.grade}</div>
                </div>
                <div class="store-card-info">
                    <div class="store-card-name">${store.name}</div>
                    <div class="store-card-tags">
                        <span class="store-card-tag">${store.size}</span>
                        <span class="store-card-tag">${store.type}</span>
                    </div>
                    <div class="store-card-addr">${store.address}</div>
                    <div class="store-card-status">점검상태 : <span style="color:var(--text-main)">${store.status}</span></div>
                </div>
            `;
            grid.appendChild(card);
        });
    },

    renderStoreDetail(store) {
        const infoContent = document.getElementById('storeInfoContent');
        const mainImg = document.getElementById('storeMainImg');
        const thumbList = document.getElementById('storeThumbnails');

        if (!infoContent || !store) return;

        mainImg.src = store.img;

        // Thumbnails
        const images = store.images || [store.img, store.img, store.img];
        thumbList.innerHTML = images.map((img, idx) => `
            <div class="store-thumb ${idx === 0 ? 'active' : ''}" onclick="document.getElementById('storeMainImg').src='${img}'; document.querySelectorAll('.store-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
                <img src="${img}" alt="Thumb ${idx}">
            </div>
        `).join('');

        // Information Column
        infoContent.innerHTML = `
            <div class="store-title-row">
                <p class="text-muted" style="font-size:0.9rem; margin-bottom:5px;">홈플러스 | <span style="color:var(--text-main); font-weight:bold;">${store.name}</span></p>
                <div style="font-size:0.85rem; color:#666; margin-bottom:10px;">${store.address}</div>
                <div style="font-size:0.9rem; font-weight:bold;">${store.size} | ${store.type} |</div>
                <div style="font-size:0.9rem; margin-top:5px;">${store.phone}</div>
            </div>

            <div style="height:1px; background:#eee; margin:20px 0;"></div>

            <h4>매장 담당자 정보</h4>
            <div class="manager-tabs">
                <button class="manager-tab active" onclick="app.switchManagerTab('hsad', this, '${store.id}')">HSAD</button>
                <button class="manager-tab" onclick="app.switchManagerTab('marketer', this, '${store.id}')">마케터/지점장</button>
                <button class="manager-tab" onclick="app.switchManagerTab('contractor', this, '${store.id}')">도급사</button>
            </div>
            
            <div id="managerInfoBox">
                ${this.getManagerHtml(store.managers?.hsad, 'HSAD 현장대리인')}
            </div>

            <div class="inspection-summary">
                <h4 style="font-weight:bold; font-size:1.1rem;">2025-08-04 주요매장 월점검</h4>
                <div class="inspection-stats">
                    <div class="stat-item">
                        <label>점검 상태</label>
                        <div class="val" style="color: var(--primary-color);">점검완료</div>
                    </div>
                    <div class="stat-divider"></div>
                    <div class="stat-item">
                        <label>점검 등급</label>
                        <div class="val" style="color: var(--primary-color);">성수기</div>
                    </div>
                </div>
                <button class="btn-outline" style="width:100%; padding:10px;">점검 내역 더 보기</button>
            </div>
        `;
    },

    getManagerHtml(manager, role) {
        if (!manager) return '<div class="text-muted" style="padding:20px 0;">정보가 없습니다.</div>';
        return `
            <div style="margin-top:15px; display:flex; flex-direction:column; gap:8px;">
                <div style="background:#f1f1f1; padding:10px 15px; border-radius:6px; font-size:0.9rem; color:#666;">${manager.name}</div>
                <div style="background:#f1f1f1; padding:10px 15px; border-radius:6px; font-size:0.9rem; color:#666;">${manager.email}</div>
                <div style="background:#f1f1f1; padding:10px 15px; border-radius:6px; font-size:0.9rem; color:#666;">${manager.phone}</div>
            </div>
        `;
    },

    switchManagerTab(role, btn, storeId) {
        const store = storeData.find(s => s.id === storeId);
        document.querySelectorAll('.manager-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const manager = store.managers ? store.managers[role] : null;
        document.getElementById('managerInfoBox').innerHTML = this.getManagerHtml(manager, roleName);
    },

    /* --- Fixture Status Implementation --- */
    renderStoreDetail(store) {
        this.currentStore = store;
        const infoContent = document.getElementById('storeInfoContent');
        const mainImg = document.getElementById('storeMainImg');
        const thumbList = document.getElementById('storeThumbnails');

        if (!infoContent || !store) return;

        mainImg.src = store.img;

        // Thumbnails
        const images = store.images || [store.img, store.img, store.img];
        thumbList.innerHTML = images.map((img, idx) => `
            <div class="store-thumb ${idx === 0 ? 'active' : ''}" onclick="document.getElementById('storeMainImg').src='${img}'; document.querySelectorAll('.store-thumb').forEach(t=>t.classList.remove('active')); this.classList.add('active');">
                <img src="${img}" alt="Thumb ${idx}">
            </div>
        `).join('');

        // Information Column (Simplified for brevity but maintaining structure)
        infoContent.innerHTML = `
            <div class="store-title-row">
                <p class="text-muted" style="font-size:0.9rem; margin-bottom:5px;">홈플러스 | <span style="color:var(--text-main); font-weight:bold;">${store.name}</span></p>
                <div style="font-size:0.85rem; color:#666; margin-bottom:10px;">${store.address}</div>
                <div style="font-size:0.9rem; font-weight:bold;">${store.size} | ${store.type} |</div>
                <div style="font-size:0.9rem; margin-top:5px;">${store.phone}</div>
            </div>

            <div style="height:1px; background:#eee; margin:20px 0;"></div>

            <h4>매장 담당자 정보</h4>
            <div class="manager-tabs">
                <button class="manager-tab active" onclick="app.switchManagerTab('hsad', this, '${store.id}')">HSAD</button>
                <button class="manager-tab" onclick="app.switchManagerTab('marketer', this, '${store.id}')">마케터/지점장</button>
                <button class="manager-tab" onclick="app.switchManagerTab('contractor', this, '${store.id}')">도급사</button>
            </div>
            
            <div id="managerInfoBox">
                ${this.getManagerHtml(store.managers?.hsad, 'HSAD 현장대리인')}
            </div>

            <div class="inspection-summary">
                <h4 style="font-weight:bold; font-size:1.1rem;">2025-08-04 주요매장 월점검</h4>
                <div class="inspection-stats">
                    <div class="stat-item"><label>점검 상태</label><div class="val" style="color: var(--primary-color);">점검완료</div></div>
                    <div class="stat-divider"></div>
                    <div class="stat-item"><label>점검 등급</label><div class="val" style="color: var(--primary-color);">성수기</div></div>
                </div>
                <button class="btn-outline" style="width:100%; padding:10px;">점검 내역 더 보기</button>
            </div>
        `;

        // Render Initial Fixture Status (Marketing)
        this.switchStoreFixtureTab('marketing');
    },

    switchStoreFixtureTab(type) {
        // Toggle chips
        const mkChip = document.getElementById('storeFixtureTabMarketing');
        const vmdChip = document.getElementById('storeFixtureTabVmd');

        if (type === 'marketing') {
            mkChip.classList.add('active');
            vmdChip.classList.remove('active');
        } else {
            mkChip.classList.remove('active');
            vmdChip.classList.add('active');
        }

        this.renderStoreFixtureStatusList(type);
    },

    renderStoreFixtureStatusList(type) {
        const container = document.getElementById('storeFixtureStatusList');
        if (!container || !this.currentStore) return;

        const fixtures = (this.currentStore.installedFixtures || []).filter(f => f.type === type);

        if (fixtures.length === 0) {
            container.innerHTML = '<div class="text-center py-4 text-muted">설치된 집기가 없습니다.</div>';
            return;
        }

        container.innerHTML = fixtures.map(f => {
            let statusBadge = '<span style="color:#999; font-size:0.85rem;">정상</span>';
            const history = (this.currentStore.requestHistory || []).find(h => h.fixtureId === f.id);
            if (history) {
                statusBadge = `<span style="background:var(--primary-color); color:white; padding:2px 8px; border-radius:10px; font-size:0.75rem;">${history.status}</span>`;
            }

            return `
                <div class="flex-row-between py-4" style="border-bottom: 1px solid #eee; cursor:pointer;" onclick="app.navigateTo('fixtureStatusDetail', '${f.id}')">
                    <div style="display:flex; align-items:center; gap:15px;">
                        <img src="${f.img}" style="width:50px; height:50px; border-radius:4px; object-fit:contain; background:#f9f9f9;">
                        <div>
                            <div style="font-weight:bold; font-size:0.95rem;">${f.name}</div>
                            <div class="text-muted" style="font-size:0.8rem;">${f.size}</div>
                        </div>
                    </div>
                    <div style="text-align:right;">
                        ${statusBadge}
                        <i class='bx bx-chevron-right' style="color:#ccc; font-size:1.5rem; vertical-align:middle; margin-left:5px;"></i>
                    </div>
                </div>
            `;
        }).join('');
    },

    renderFixtureStatusDetail(fixtureId) {
        const fixture = this.currentStore.installedFixtures.find(f => f.id === fixtureId);
        this.currentInstalledFixture = fixture;

        document.getElementById('statusDetailImg').src = fixture.img;
        document.getElementById('statusDetailName').innerText = fixture.name;
        document.getElementById('statusDetailSize').innerText = fixture.size;
        document.getElementById('statusDetailStock').value = fixture.stock;
        document.getElementById('statusDetailBackBtn').onclick = () => this.navigateTo('storeDetail', this.currentStore);

        const history = (this.currentStore.requestHistory || []).find(h => h.fixtureId === fixture.id);
        const activeBox = document.getElementById('activeRequestInfo');
        const noBox = document.getElementById('noRequestInfo');

        if (history) {
            activeBox.style.display = 'block';
            noBox.style.display = 'none';
            document.getElementById('statusReqTypeText').innerText = history.type;
            document.getElementById('statusStoreName').innerText = this.currentStore.name;
            document.getElementById('statusReqDate').innerText = history.date;

            if (history.installDate) {
                document.getElementById('statusInstallDateRow').style.display = 'flex';
                document.getElementById('statusInstallDate').innerText = history.installDate;
            } else {
                document.getElementById('statusInstallDateRow').style.display = 'none';
            }
        } else {
            activeBox.style.display = 'none';
            noBox.style.display = 'block';
            document.getElementById('statusStoreNameNoReq').innerText = this.currentStore.name;
        }
    },

    handleFixtureStatusRequest() {
        const selectedRadio = document.querySelector('input[name="statusNewReq"]:checked');
        if (!selectedRadio) {
            alert('요청 내용을 선택해주세요.');
            return;
        }

        const type = selectedRadio.value;
        const fixture = this.currentInstalledFixture;
        const store = this.currentStore;

        const newReq = {
            id: 'req' + Date.now(),
            fixtureId: fixture.id,
            type: type,
            date: new Date().toISOString().split('T')[0].replace(/-/g, '/'),
            status: '요청완료'
        };

        if (!store.requestHistory) store.requestHistory = [];
        store.requestHistory.push(newReq);

        alert(`${type} 요청이 완료되었습니다.`);
        this.renderFixtureStatusDetail(fixture.id);
    },

    cancelFixtureRequest() {
        const fixture = this.currentInstalledFixture;
        const store = this.currentStore;

        store.requestHistory = store.requestHistory.filter(h => h.fixtureId !== fixture.id);

        alert('요청이 취소되었습니다.');
        this.renderFixtureStatusDetail(fixture.id);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
