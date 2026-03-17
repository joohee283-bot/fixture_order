const steelGuideData = [
    {
        id: 'sg1', name: '스타일러', category: '철제스탠드 내지', date: '2026.03.12', isUpdated: true,
        file: { A4: 'styler_a4.pptx', A3: 'styler_a3.pptx' },
        before: { color: '#5B8DB8', label: 'STYLER 이전', note: '기존 배경색 및 제품 배치' },
        after: { color: '#A50034', label: 'STYLER 신규', note: '브랜드 컬러 적용, 레이아웃 최적화' },
        changes: ['배경색 변경 (회색 → LG 레드)', '제품 이미지 고화질 교체', '하단 브랜드 워터마크 추가']
    },
    {
        id: 'sg2', name: '에어케어', category: '철제스탠드 내지', date: '2026.03.12', isUpdated: true,
        file: { A4: 'aircare_a4.pptx', A3: 'aircare_a3.pptx' },
        before: { color: '#6A9FAB', label: 'AIRCARE 이전', note: '기존 구성' },
        after: { color: '#A50034', label: 'AIRCARE 신규', note: '신규 구성' },
        changes: ['제품명 폰트 변경', '에너지등급 표시 추가', '색상 팔레트 최신화']
    },
    {
        id: 'sg3', name: '쿠킹', category: '철제스탠드 내지', date: '2026.03.12', isUpdated: false,
        file: { A4: 'cooking_a4.pptx', A3: 'cooking_a3.pptx' },
        before: null, 
        after: { color: '#E6E9ED', label: 'COOKING', note: '현재 등록된 최신 시안 가이드입니다.' },
        changes: []
    },
    {
        id: 'sg4', name: '워터케어', category: '철제스탠드 내지', date: '2026.03.12', isUpdated: true,
        file: { A4: 'watercare_a4.pptx', A3: 'watercare_a3.pptx' },
        before: { color: '#3A7DA5', label: 'WATERCARE 이전', note: '기존 구성' },
        after: { color: '#A50034', label: 'WATERCARE 신규', note: '신규 구성' },
        changes: ['정수기 신제품 추가', '혼매 배치 구성 반영', '하단 푸터 업데이트']
    },
    {
        id: 'sg5', name: 'TV', category: '철제스탠드 내지', date: '2026.03.02', isUpdated: false,
        file: { A4: 'tv_a4.pptx', A3: 'tv_a3.pptx' },
        before: null, 
        after: { color: '#E6E9ED', label: 'TV', note: '현재 등록된 최신 시안 가이드입니다.' },
        changes: []
    },
    {
        id: 'sg6', name: '에어컨', category: '철제스탠드 내지', date: '2026.03.02', isUpdated: false,
        file: { A4: 'aircon_a4.pptx', A3: 'aircon_a3.pptx' },
        before: null, 
        after: { color: '#E6E9ED', label: 'AIRCON', note: '현재 등록된 최신 시안 가이드입니다.' },
        changes: []
    },
    {
        id: 'sg7', name: '냉장고', category: '철제스탠드 내지', date: '2026.02.20', isUpdated: false,
        file: { A4: 'fridge_a4.pptx', A3: 'fridge_a3.pptx' },
        before: null, 
        after: { color: '#E6E9ED', label: 'FRIDGE', note: '현재 등록된 최신 시안 가이드입니다.' },
        changes: []
    },
    {
        id: 'sg8', name: '세탁기', category: '철제스탠드 내지', date: '2026.02.20', isUpdated: false,
        file: { A4: 'washer_a4.pptx', A3: 'washer_a3.pptx' },
        before: null, 
        after: { color: '#E6E9ED', label: 'WASHER', note: '현재 등록된 최신 시안 가이드입니다.' },
        changes: []
    },
    {
        id: 'sg9', name: 'PC/모니터', category: '철제스탠드 내지', date: '2026.02.05', isUpdated: false,
        file: { A4: 'pc_a4.pptx', A3: 'pc_a3.pptx' },
        before: null, 
        after: { color: '#E6E9ED', label: 'PC/MONITOR', note: '현재 등록된 최신 시안 가이드입니다.' },
        changes: []
    }
];

const digitalGuideData = [
    {
        id: 'dg1', name: '디지털 컨텐츠 가이드_260209', category: '디지털 컨텐츠 가이드', date: '2026.03.04', isUpdated: true,
        file: { A4: 'digital_a4.pptx', A3: 'digital_a3.pptx' },
        before: { color: '#333', label: 'PREVIOUS', note: '구버전 가이드' },
        after: { color: '#A50034', label: 'CURRENT', note: '신규 가이드 반영' },
        changes: ['신규 제품 라인업 추가', '해상도 규격 최신화']
    }
];

const retailGuideData = [
    {
        id: 'rg1', name: '혼매/M] 리테일 디자인 가이드 0114', category: '리테일 가이드', date: '2026.03.04', isUpdated: true,
        file: { A4: 'retail_a4.pptx', A3: 'retail_a3.pptx' },
        before: { color: '#555', label: 'OLD', note: '2025 가이드' },
        after: { color: '#A50034', label: 'NEW', note: '2026 상반기 가이드' },
        changes: ['배치 규정 변경', 'POP 설치 가이드 고도화']
    }
];

const guideDataByCategory = {
    steel: steelGuideData,
    digital: digitalGuideData,
    retail: retailGuideData,
    latest: [...steelGuideData, ...digitalGuideData, ...retailGuideData]
        .filter(item => item.isUpdated)
        .sort((a, b) => new Date(b.date.replace(/\./g, '-')) - new Date(a.date.replace(/\./g, '-')))
};

const guideSelectedIds = {
    latest: new Set(),
    digital: new Set(),
    steel: new Set(),
    retail: new Set()
};

let steelSelectedIds = new Set();
let currentDownloadMode = 'all';   // 'all' | 'selected'
let currentDownloadSize = 'A4';
let currentFullGuideItemId = null;

Object.assign(app, {
    // ─── Tab switching ────────────────────────────────────────────────
    switchGuideTab(tab, btnEl) {
        document.querySelectorAll('.guide-tab').forEach(b => b.classList.remove('active'));
        if (btnEl) btnEl.classList.add('active');
        document.querySelectorAll('.guide-tab-content').forEach(p => p.style.display = 'none');
        const panel = document.getElementById(`guide-tab-${tab}`);
        if (panel) {
            panel.style.display = 'block';
            this.renderGuideGrid(tab);
        }
    },

    // ─── Card rendering ───────────────────────────────────────────────
    renderGuideGrid(tab) {
        const grid = document.getElementById(`${tab}GuideGrid`);
        const searchInput = document.getElementById(`${tab}SearchInput`);
        if (!grid) return;

        const data = guideDataByCategory[tab] || [];
        const query = (searchInput?.value || '').toLowerCase();
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        if (filtered.length === 0) {
            grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:60px; color:var(--text-muted);">검색 결과가 없습니다.</div>';
            return;
        }

        const selectedSet = guideSelectedIds[tab];
        const allSelected = filtered.length > 0 && filtered.every(item => selectedSet.has(item.id));
        
        // Update Select All checkbox UI
        const selectAllBtn = document.getElementById(`${tab}SelectAll`);
        if (selectAllBtn) {
            const icon = selectAllBtn.querySelector('i');
            if (icon) icon.style.display = allSelected ? 'block' : 'none';
            selectAllBtn.style.borderColor = allSelected ? 'var(--primary-color)' : '#ccc';
        }

        grid.innerHTML = filtered.map(item => {
            const isSelected = selectedSet.has(item.id);
            const updateBadge = item.isUpdated ? `<span class="guide-tag-update">UPDATE</span>` : '';
            const checkIcon = isSelected ? 'block' : 'none';
            const borderColor = isSelected ? 'var(--primary-color)' : '#e5e5e5';
            const checkBorder = isSelected ? 'var(--primary-color)' : '#ccc';

            // Show checkbox and download button only for 'steel' tab
            const isSteel = tab === 'steel';
            const checkboxHtml = isSteel ? `
                <div class="steel-checkbox" style="border:2px solid ${checkBorder};" 
                     onclick="event.stopPropagation(); app.toggleGuideCard('${tab}', '${item.id}')">
                    <i class='bx bx-check' style="display:${checkIcon}; color:var(--primary-color);"></i>
                </div>` : '';
            
            const downloadBtnHtml = isSteel ? `
                <div style="display:flex; gap:8px;">
                    <button class="steel-dl-btn" onclick="event.stopPropagation(); app.downloadGuideItem('${tab}', '${item.id}')" title="다운로드">
                        <i class='bx bx-download'></i>
                    </button>
                </div>` : '';

            return `
                <div class="steel-guide-card ${isSelected ? 'selected' : ''}"
                     style="border:1px solid ${borderColor}; cursor:pointer;"
                     onclick="app.openItemComparison('${tab}', '${item.id}')">
                    <div class="steel-card-header">
                        <div style="display:flex; align-items:center; flex-wrap:wrap; gap:6px;">
                            <span class="guide-tag">${item.category}</span>${updateBadge}
                        </div>
                        ${checkboxHtml}
                    </div>
                    <div class="steel-card-name">${item.name}</div>
                    <div class="steel-card-footer">
                        <span class="steel-card-date">${item.date}</span>
                        ${downloadBtnHtml}
                    </div>
                </div>
            `;
        }).join('');
    },

    toggleAllGuides(tab) {
        const data = guideDataByCategory[tab] || [];
        const searchInput = document.getElementById(`${tab}SearchInput`);
        const query = (searchInput?.value || '').toLowerCase();
        const currentData = data.filter(item =>
            item.name.toLowerCase().includes(query) ||
            item.category.toLowerCase().includes(query)
        );

        const selectedSet = guideSelectedIds[tab];
        const allSelected = currentData.every(item => selectedSet.has(item.id));
        if (allSelected) {
            currentData.forEach(item => selectedSet.delete(item.id));
        } else {
            currentData.forEach(item => selectedSet.add(item.id));
        }
        this.renderGuideGrid(tab);
    },

    toggleGuideCard(tab, id) {
        const selectedSet = guideSelectedIds[tab];
        if (selectedSet.has(id)) selectedSet.delete(id);
        else selectedSet.add(id);
        this.renderGuideGrid(tab);
    },

    // ─── Download modal helpers ───────────────────────────────────────
    _openDownloadModal(tab, mode) {
        currentDownloadMode = mode;
        currentDownloadSize = 'A4';

        const data = guideDataByCategory[tab] || [];
        const selectedSet = guideSelectedIds[tab];
        const items = mode === 'all' ? data : data.filter(d => selectedSet.has(d.id));

        if (mode === 'selected' && items.length === 0) {
            alert('다운로드할 항목을 선택해주세요.');
            return;
        }

        const desc = document.getElementById('steelDownloadModalDesc');
        if (desc) {
            desc.textContent = mode === 'all'
                ? `전체 ${data.length}개 항목의 PPT 파일을 합쳐 다운로드합니다.`
                : `선택한 ${items.length}개 항목(${items.map(i => i.name).join(', ')})의 PPT 파일을 합쳐 다운로드합니다.`;
        }
        this._updateDownloadSizeUI(tab, 'A4', items);

        const modal = document.getElementById('steelDownloadModal');
        if (modal) modal.style.display = 'flex';
    },

    _updateDownloadSizeUI(tab, size, items) {
        currentDownloadSize = size;
        const a4Btn = document.getElementById('sizeBtn-A4');
        const a3Btn = document.getElementById('sizeBtn-A3');
        if (a4Btn) { a4Btn.className = 'size-select-btn' + (size === 'A4' ? ' size-select-active' : ''); }
        if (a3Btn) { a3Btn.className = 'size-select-btn' + (size === 'A3' ? ' size-select-active' : ''); }

        const data = guideDataByCategory[tab];
        const selectedSet = guideSelectedIds[tab];
        const target = items || (currentDownloadMode === 'all' ? data : data.filter(d => selectedSet.has(d.id)));
        const fnEl = document.getElementById('steelDownloadFilename');
        if (fnEl) {
            const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
            const categoryName = tab === 'steel' ? '철제스탠드_내지' : (tab === 'digital' ? '디지털_컨텐츠' : '가이드');
            fnEl.textContent = `${categoryName}_통합_${size}_${date}.pptx`;
        }
    },

    selectDownloadSize(size) {
        // Need to know current tab. Let's infer or store it.
        const activeTabBtn = document.querySelector('.guide-tab.active');
        const tab = activeTabBtn?.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'steel';
        this._updateDownloadSizeUI(tab, size);
    },

    downloadAllGuides(tab) { this._openDownloadModal(tab, 'all'); },

    downloadSelectedGuides(tab) { this._openDownloadModal(tab, 'selected'); },

    closeSteelDownloadModal() {
        const modal = document.getElementById('steelDownloadModal');
        if (modal) modal.style.display = 'none';
    },

    executeSteelDownload() {
        const activeTabBtn = document.querySelector('.guide-tab.active');
        const tab = activeTabBtn?.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 'steel';
        const data = guideDataByCategory[tab];
        const selectedSet = guideSelectedIds[tab];
        
        const items = currentDownloadMode === 'all' ? data : data.filter(d => selectedSet.has(d.id));
        const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const categoryName = tab === 'steel' ? '철제스탠드_내지' : (tab === 'digital' ? '디지털_컨텐츠' : '가이드');
        const filename = `${categoryName}_통합_${currentDownloadSize}_${date}.pptx`;

        const names = items.map(i => i.name).join(', ');
        alert(`✅ 다운로드 시작\n파일: ${filename}\n포함 항목: ${names}\n\n(실제 구현 시 서버에서 PPT 파일을 병합하여 제공합니다.)`);
        this.closeSteelDownloadModal();
    },

    downloadGuideItem(tab, id) {
        const data = guideDataByCategory[tab];
        const item = data.find(d => d.id === id);
        if (!item) return;
        currentDownloadMode = 'selected';
        guideSelectedIds[tab].clear();
        guideSelectedIds[tab].add(id);
        this._openDownloadModal(tab, 'selected');
    },

    // ─── Print Guide Modal ───────────────────────────────────────────
    // ─── 전체 가이드 comparison modal ────────────────────────────────
    openItemComparison(tab, id) {
        const data = guideDataByCategory[tab];
        const item = data.find(d => d.id === id);
        if (!item) return;

        if (!item.isUpdated && !item.after) {
            item.after = { color: '#f0f0f0', label: item.name, note: '최신 시안 가이드' };
        }

        const titleEl = document.querySelector('#steelFullGuideModal h3');
        const descEl = document.querySelector('#steelFullGuideModal p');
        if (titleEl) titleEl.textContent = item.isUpdated ? `${item.name} 업데이트 내역` : `${item.name} 시안 안내`;
        if (descEl) descEl.textContent = item.isUpdated ? 'A4 기준 | 이전 시안(좌) vs 업데이트 시안(우)' : 'A4 기준 | 최신 시안 안내';

        this._renderComparisonGrid([item]);

        const modal = document.getElementById('steelFullGuideModal');
        if (modal) modal.style.display = 'flex';
    },

    showPrintGuide() {
        // Reset to A4 by default
        this.switchPrintGuideSize('A4');
        const modal = document.getElementById('steelPrintGuideModal');
        if (modal) modal.style.display = 'flex';
    },

    closePrintGuideModal() {
        const modal = document.getElementById('steelPrintGuideModal');
        if (modal) modal.style.display = 'none';
    },

    switchPrintGuideSize(size) {
        // Update Buttons
        const btnA4 = document.getElementById('printSizeBtn-A4');
        const btnA3 = document.getElementById('printSizeBtn-A3');
        if (btnA4) btnA4.className = 'size-select-btn' + (size === 'A4' ? ' size-select-active' : '');
        if (btnA3) btnA3.className = 'size-select-btn' + (size === 'A3' ? ' size-select-active' : '');

        // Update Content visibility
        const contentA4 = document.getElementById('printGuideContent-A4');
        const contentA3 = document.getElementById('printGuideContent-A3');
        if (contentA4) contentA4.style.display = size === 'A4' ? 'block' : 'none';
        if (contentA3) contentA3.style.display = size === 'A3' ? 'block' : 'none';
    },

    showFullGuide() {
        const updatedItems = steelGuideData.filter(d => d.isUpdated && d.before);
        if (updatedItems.length === 0) {
            alert('업데이트된 항목이 없습니다.');
            return;
        }

        const titleEl = document.querySelector('#steelFullGuideModal h3');
        if (titleEl) titleEl.textContent = `전체 가이드 업데이트 내용`;

        this._renderComparisonGrid(updatedItems);

        const modal = document.getElementById('steelFullGuideModal');
        if (modal) modal.style.display = 'flex';
    },

    _renderComparisonGrid(items) {
        const container = document.getElementById('fullGuideGridContainer');
        if (!container) return;

        container.innerHTML = items.map(item => {
            // Case 1: Updated item (Comparison)
            if (item.isUpdated && item.before && item.after) {
                return `
                    <div style="background:#fff; border:1px solid #ddd; border-radius:12px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.05);">
                        <!-- Change summary -->
                        ${item.changes && item.changes.length > 0 ? `
                        <div style="margin-bottom:20px; background:#FFF8FA; border:1px solid #FFD0DB; border-radius:8px; padding:16px 20px; font-size:0.9rem; color:#333; line-height:1.7;">
                            <div style="font-weight:700; color:#A50034; margin-bottom:10px;">
                                <i class='bx bx-list-check'></i> 업데이트 내용 (${item.name})
                            </div>
                            <ul style="margin:0; padding-left:20px; color:#444;">
                                ${item.changes.map(c => `<li style="margin-bottom:4px;">${c}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}

                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;">
                            <!-- Before -->
                            <div>
                                <div style="text-align:center; margin-bottom:12px;">
                                    <span style="background:#eee; color:#666; font-size:0.8rem; font-weight:700; padding:4px 14px; border-radius:20px;">이전 시안</span>
                                </div>
                                <div style="background:#f5f5f5; border-radius:10px; overflow:hidden; border:1px solid #e0e0e0;">
                                    <div style="background:${item.before.color}; padding:40px 24px; min-height:300px; display:flex; flex-direction:column; justify-content:space-between; color:white; border-radius:10px;">
                                        <div>
                                            <div style="font-size:0.75rem; opacity:0.7; margin-bottom:8px; text-transform:uppercase; letter-spacing:2px;">BEFORE</div>
                                            <div style="font-size:1.5rem; font-weight:800; margin-bottom:12px;">${item.name}</div>
                                            <div style="font-size:0.85rem; opacity:0.85; line-height:1.6;">${item.before.note}</div>
                                        </div>
                                        <div style="background:rgba(255,255,255,0.15); border-radius:8px; padding:16px; font-size:0.8rem; opacity:0.9; margin-top:20px;">
                                            구 버전 A4 내지 시안
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- After -->
                            <div>
                                <div style="text-align:center; margin-bottom:12px;">
                                    <span style="background:#A50034; color:white; font-size:0.8rem; font-weight:700; padding:4px 14px; border-radius:20px;">업데이트 시안</span>
                                </div>
                                <div style="background:#f5f5f5; border-radius:10px; overflow:hidden; border:1px solid #e0e0e0;">
                                    <div style="background:${item.after.color}; padding:40px 24px; min-height:300px; display:flex; flex-direction:column; justify-content:space-between; color:white; border-radius:10px; position:relative; overflow:hidden;">
                                        <div style="position:absolute; top:12px; right:12px; background:rgba(255,255,255,0.25); color:white; font-size:0.7rem; font-weight:700; padding:3px 10px; border-radius:12px;">NEW</div>
                                        <div>
                                            <div style="font-size:0.75rem; opacity:0.7; margin-bottom:8px; text-transform:uppercase; letter-spacing:2px;">AFTER</div>
                                            <div style="font-size:1.5rem; font-weight:800; margin-bottom:12px;">${item.name}</div>
                                            <div style="font-size:0.85rem; opacity:0.85; line-height:1.6;">${item.after.note}</div>
                                        </div>
                                        <div style="background:rgba(255,255,255,0.15); border-radius:8px; padding:16px; font-size:0.8rem; opacity:0.9; margin-top:20px;">
                                            신규 버전 A4 내지 시안
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            } 
            // Case 2: Standard item (Solo)
            else {
                const soloData = item.after || { color: '#E6E9ED', label: item.name, note: '최신 시안 가이드' };
                return `
                    <div style="background:#fff; border:1px solid #ddd; border-radius:12px; padding:24px; box-shadow:0 4px 12px rgba(0,0,0,0.05); display:flex; flex-direction:column; align-items:center;">
                        <div style="width:100%; max-width:500px;">
                            <div style="text-align:center; margin-bottom:16px;">
                                <span style="background:#222; color:white; font-size:0.85rem; font-weight:700; padding:6px 18px; border-radius:20px;">최신 등록 시안</span>
                            </div>
                            <div style="background:#f5f5f5; border-radius:14px; overflow:hidden; border:1px solid #e0e0e0; box-shadow: 0 10px 30px rgba(0,0,0,0.05);">
                                <div style="background:${soloData.color}; padding:70px 32px; min-height:450px; display:flex; flex-direction:column; justify-content:space-between; color:#333; border-radius:14px;">
                                    <div>
                                        <div style="font-size:0.85rem; color:#666; font-weight:700; margin-bottom:10px; text-transform:uppercase; letter-spacing:2px;">CURRENT DESIGN</div>
                                        <div style="font-size:2.2rem; font-weight:800; margin-bottom:16px; color:#111;">${item.name}</div>
                                        <div style="font-size:1.1rem; color:#444; line-height:1.6; font-weight:500;">${soloData.note}</div>
                                    </div>
                                    <div style="background:rgba(0,0,0,0.05); border-radius:10px; padding:24px; font-size:0.95rem; color:#444; margin-top:30px; text-align:center; border: 1px dashed rgba(0,0,0,0.1);">
                                        최신 버전 A4 내지 시안 가이드 항목
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        }).join('');
    },

    downloadFullGuidePptx(size = 'A4') {
        const updatedItems = steelGuideData.filter(d => d.isUpdated && d.before);
        if (updatedItems.length === 0) {
            alert('다운로드할 업데이트 항목이 없습니다.');
            return;
        }

        const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
        const filename = `철제스탠드_내지_업데이트전체_${size}_${date}.pptx`;
        const names = updatedItems.map(i => i.name).join(', ');

        alert(`✅ 일괄 다운로드 시작\n파일: ${filename}\n포맷: ${size}\n포함 항목: ${names}\n\n(실제 구현 시 서버에서 ${size} 사이즈에 맞게 병합하여 제공합니다.)`);
    },

    closeFullGuideModal() {
        const modal = document.getElementById('steelFullGuideModal');
        if (modal) modal.style.display = 'none';
        currentFullGuideItemId = null;
    }
});
