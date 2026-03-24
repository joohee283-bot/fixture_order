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
        { id: 'v6', name: '연출 집기_시즌', type: 'vmd', size: '1000 x 1000', stock: 10, img: 'https://images.unsplash.com/photo-1512338135235-8027607730e7?auto=format&fit=crop&w=300&q=80', category: '연출 집기' },
        {
            id: 'v7', name: '시안1', type: 'vmd', size: 'N/A', stock: 10, img: 'images_filter/구독.jpg', category: '집기 세트', subItems: [
                { id: 'v7_1', name: '대형 집기', type: 'vmd', size: '3000 x 1200', stock: 3, img: 'images_filter/대형 집기.png', cost: '2,500,000원' },
                { id: 'v7_2', name: '중형 집기', type: 'vmd', size: '2400 x 1200', stock: 5, img: 'images_filter/중형 집기.png', cost: '1,800,000원' },
                { id: 'v7_3', name: '소형 집기', type: 'vmd', size: '1600 x 600', stock: 8, img: 'images_filter/소형 집기.png', cost: '1,200,000원' }
            ]
        },
        {
            id: 'v8', name: '시안2', type: 'vmd', size: 'N/A', stock: 10, img: 'images_filter/웨딩.jpg', category: '집기 세트', subItems: [
                { id: 'v8_1', name: '대형 집기', type: 'vmd', size: '3000 x 1200', stock: 3, img: 'images_filter/대형 집기.png', cost: '2,800,000원' },
                { id: 'v8_2', name: '중형 집기', type: 'vmd', size: '2400 x 1200', stock: 5, img: 'images_filter/중형 집기.png', cost: '2,000,000원' },
                { id: 'v8_3', name: '소형 집기', type: 'vmd', size: '1600 x 1200', stock: 8, img: 'images_filter/소형 집기.png', cost: '1,400,000원' }
            ]
        },
        {
            id: 'v9', name: '시안3', type: 'vmd', size: 'N/A', stock: 10, img: 'images_filter/오픈.jpg', category: '집기 세트', subItems: [
                { id: 'v9_1', name: '대형 집기', type: 'vmd', size: '3000 x 1200', stock: 3, img: 'images_filter/대형 집기.png', cost: '3,000,000원' },
                { id: 'v9_2', name: '중형 집기', type: 'vmd', size: '2400 x 1200', stock: 5, img: 'images_filter/중형 집기.png', cost: '2,200,000원' },
                { id: 'v9_3', name: '소형 집기', type: 'vmd', size: '1600 x 1200', stock: 8, img: 'images_filter/소형 집기.png', cost: '1,500,000원' }
            ]
        }
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

// Extend app object with Fixture Request methods
Object.assign(app, {
    toggleFabMenu() {
        const fabBtn = document.getElementById('fabMainBtn');
        const fabIcon = fabBtn.querySelector('.fab-icon');
        const fabText = fabBtn.querySelector('.fab-text');

        if (fabText.style.display === 'none') {
            fabText.style.display = 'inline-block';
            fabIcon.style.transform = 'rotate(45deg)';
            fabIcon.style.color = 'var(--text-main)';
            fabBtn.style.backgroundColor = 'white';
            fabBtn.style.color = 'var(--text-main)';
            fabBtn.style.border = '1px solid var(--border-color)';
            fabBtn.style.borderRadius = '30px';
            fabBtn.style.padding = '12px 24px';
            fabBtn.style.width = 'auto';
        } else {
            this.navigateTo('fixtureList', 'marketing');
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
        fabBtn.style.width = '60px';
        fabBtn.style.height = '60px';
    },

    switchFixtureTab(type) {
        this.currentTab = type;

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
        if (!slider) return;
        let categories = ['전체'];

        if (type === 'vmd') {
            categories.push('키즈존', '미니 키즈존', '연출 집기', '집기 세트');
        } else {
            categories.push('TV/오디오', 'PC/모니터', '주방가전', '생활가전', '에어컨/에어케어');
        }

        slider.innerHTML = categories.map((cat, idx) => `
            <button class="chip ${idx === 0 ? 'active' : ''}" onclick="app.filterCategory('${type}', '${cat}', this)">${cat}</button>
        `).join('');
    },

    filterCategory(type, category, btnElement) {
        document.querySelectorAll('#categorySlider .chip').forEach(c => {
            c.classList.remove('active');
        });
        btnElement.classList.add('active');

        this.renderFixtureList(type, category);
    },

    renderFixtureList(type, categoryFilter) {
        const grid = document.getElementById('fixtureGrid');
        if (!grid) return;

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

                card.innerHTML = `
                    <div class="card-img-wrap">
                        <img src="${item.img}" alt="${item.name}">
                    </div>
                    <div class="fixture-card-title">${item.name}</div>
                `;
            }

            grid.appendChild(card);
        });
    },

    renderSubItemList(categoryItem) {
        if (!categoryItem) return;

        const titleEl = document.getElementById('subItemListCategoryTitle');
        if (titleEl) titleEl.innerText = categoryItem.name;

        const backBtn = document.getElementById('subItemBackButton');
        if (backBtn) backBtn.onclick = () => this.navigateTo('fixtureList', categoryItem.type);

        const listContainer = document.getElementById('subItemVerticalList');
        if (!listContainer) return;
        listContainer.innerHTML = '';

        const items = categoryItem.subItems || [];

        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'vertical-list-item';
            card.onclick = () => {
                this.currentFixture = item;
                this.navigateTo('fixtureDetail');
            };

            card.innerHTML = `
                <div class="vertical-list-img">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="vertical-list-content">
                    <div class="vertical-list-title">${item.name}</div>
                </div>
            `;
            listContainer.appendChild(card);
        });
    },

    renderFixtureDetail() {
        if (!this.currentFixture) return;
        const item = this.currentFixture;

        const imgEl = document.getElementById('detailImg');
        const nameEl = document.getElementById('detailName');
        const sizeEl = document.getElementById('detailSize');
        const stockEl = document.getElementById('detailStock');
        const dateEl = document.getElementById('installDate');

        if (imgEl) imgEl.src = item.img;
        if (nameEl) nameEl.innerText = item.name;
        if (sizeEl) sizeEl.innerText = item.size;

        const costRow = document.getElementById('detailCostRow');
        const costEl = document.getElementById('detailCost');
        if (costRow && costEl) {
            if (item.cost) {
                costRow.style.display = 'flex';
                costEl.innerText = item.cost;
            } else {
                costRow.style.display = 'none';
            }
        }

        if (dateEl) dateEl.value = '';
        
        // Reset new fields
        this.removeUploadedImage();
        const remarksEl = document.getElementById('specialRemarks');
        if (remarksEl) remarksEl.value = '';
    },

    handleImageUpload(input) {
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = document.getElementById('positionImagePreview');
                const uploadBox = document.getElementById('positionImageUploadBox');
                const previewContainer = document.getElementById('positionImagePreviewContainer');
                
                if (preview) preview.src = e.target.result;
                if (uploadBox) uploadBox.style.display = 'none';
                if (previewContainer) previewContainer.style.display = 'block';
            }
            reader.readAsDataURL(input.files[0]);
        }
    },

    removeUploadedImage() {
        const input = document.getElementById('positionImageInput');
        const preview = document.getElementById('positionImagePreview');
        const uploadBox = document.getElementById('positionImageUploadBox');
        const previewContainer = document.getElementById('positionImagePreviewContainer');

        if (input) input.value = '';
        if (preview) preview.src = '';
        if (uploadBox) uploadBox.style.display = 'block';
        if (previewContainer) previewContainer.style.display = 'none';
    },

    submitRequest() {
        const requestType = document.querySelector('input[name="requestType"]:checked');
        if (!requestType) {
            alert('요청 내용을 선택해주세요.');
            return;
        }

        const installDate = document.getElementById('installDate');
        if (installDate && !installDate.value) {
            alert('희망 설치일을 선택해주세요.');
            return;
        }

        const storeInfo = document.getElementById('selectedStoreInfo');
        if (storeInfo && storeInfo.style.display === 'none') {
            alert('요청 매장을 입력해주세요.');
            return;
        }

        const remarksEl = document.getElementById('specialRemarks');
        const remarks = remarksEl ? remarksEl.value.trim() : '';

        let msg = '요청이 완료되었습니다.';
        if (remarks) {
            msg += '\n(특이사항: ' + remarks + ')';
        }
        
        alert(msg);
        this.navigateTo('home');
    }
});
