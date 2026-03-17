const storeData = [
    {
        id: 's1',
        name: "신 홈플러스 전주완산점",
        address: "전라북도 전주시 기린대로 170 LG베스트샵 전주완산점",
        info: "34PY | 전체",
        phone: "063-263-2080",
        zones: ["주출입문", "주차장", "구독케어존", "집한채", "M&B", "냉장고", "세탁기", "TV"],
        distribution: "혼매",
        channel: "홈플러스",
        img: "images_store/신 홈플러스 전주완산점.jpg",
        images: [
            { id: 101, url: "images_store_zone/2.jpg", zone: "구독케어존", tag: "전경1" },
            { id: 102, url: "images_store_집한채/그림2.jpg", zone: "집한채", tag: "공간1" },
            { id: 103, url: "images_store_M&B/그림8.jpg", zone: "M&B", tag: "공간2" },
            { id: 104, url: "images_store_zone/5.jpg", zone: "냉장고", tag: "냉장고1" },
            { id: 105, url: "images_store_zone/7.jpg", zone: "TV", tag: "TV1" },
            { id: 106, url: "images_store_zone/8.jpg", zone: "세탁기", tag: "세탁기1" },
            { id: 107, url: "images_store_zone/10.jpg", zone: "세탁기", tag: "세탁기2" },
            { id: 108, url: "images_store_zone/2.jpg", zone: "주출입문", tag: "입구1" },
            { id: 109, url: "images_store_zone/4 (2).jpg", zone: "주차장", tag: "주차장1" },
        ],
        managers: {
            "HSAD": { name: "서지현", email: "jseo12@hsad.co.kr", tel: "010-2036-7605" },
            "마케터/지점장": { name: "김철수", email: "kim@lge.com", tel: "010-1234-5678" },
            "도급사": { name: "전완산", email: "wansan@contractor.co.kr", tel: "010-5555-6666" }
        },
        inspection: { date: "2025-08-04", status: "점검완료", grade: "성수기" },
        installedFixtures: [
            { id: 'if1', name: '듀얼 정수기 집기 (혼매)', type: 'marketing', category: '주방가전', size: '750 x 900 x 1000', stock: 13, status: 'Normal', requestId: null, img: 'images_filter/정수기.png' },
            { id: 'if2', name: '듀얼 정수기 집기 (혼매)', type: 'marketing', category: '주방가전', size: '1000 x 900 x 1000', stock: 5, status: 'Reviewing', requestId: 'req123', img: 'images_filter/정수기.png' }
        ],
        requestHistory: [
            { id: 'req123', fixtureId: 'if2', type: '추가제작', date: '2026/01/20', installDate: '2026/01/29', status: '검토중' }
        ]
    },
    {
        id: 's2',
        name: "신 홈플러스 전북전주점",
        address: "전라북도 전주시 백제대로 771 LG전자",
        info: "30PY | 전체",
        phone: "063-234-5678",
        zones: ["주출입문", "구독케어존", "냉장고", "PC", "모니터"],
        distribution: "혼매",
        channel: "홈플러스",
        img: "images_store/신 홈플러스 전북전주점.jpg",
        images: [
            { id: 201, url: "images_store_zone/12.jpg", zone: "구독케어존", tag: "전경1" },
            { id: 202, url: "images_store_zone/13.jpg", zone: "구독케어존", tag: "전경2" },
            { id: 203, url: "images_store_zone/14.jpg", zone: "냉장고", tag: "냉장고1" },
            { id: 204, url: "images_store_zone/16.jpg", zone: "PC", tag: "PC1" },
            { id: 205, url: "images_store_zone/17.jpg", zone: "주출입문", tag: "입구1" },
        ],
        managers: {
            "HSAD": { name: "정지운", email: "jw@hsad.co.kr", tel: "010-1111-2222" },
            "마케터/지점장": { name: "최정호", email: "jh@lge.com", tel: "010-3333-4444" },
            "도급사": { name: "박전주", email: "jj@contractor.co.kr", tel: "010-7777-8888" }
        },
        inspection: { date: "2025-08-10", status: "점검대기", grade: "비수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's3',
        name: "신 홈플러스 순천풍덕점",
        address: "전남 순천시 팔마로 222 홈플러스",
        info: "25PY | 전체",
        phone: "061-740-8000",
        zones: ["집한채", "M&B", "TV", "RAC", "에어케어"],
        distribution: "혼매",
        channel: "홈플러스",
        img: "images_store/신 홈플러스 순천풍덕점.jpg",
        images: [
            { id: 301, url: "images_store_집한채/그림3.jpg", zone: "집한채", tag: "공간1" },
            { id: 302, url: "images_store_집한채/그림4.jpg", zone: "집한채", tag: "공간2" },
            { id: 303, url: "images_store_M&B/그림9.jpg", zone: "M&B", tag: "비즈니스1" },
            { id: 304, url: "images_store_zone/17.jpg", zone: "TV", tag: "TV1" },
            { id: 305, url: "images_store_zone/18.jpg", zone: "RAC", tag: "RAC1" },
        ],
        managers: {
            "HSAD": { name: "김태희", email: "th@hsad.co.kr", tel: "010-9999-0000" },
            "마케터/지점장": { name: "이민정", email: "mj@lge.com", tel: "010-3333-2222" },
            "도급사": { name: "오순천", email: "sc@contractor.co.kr", tel: "010-4444-5555" }
        },
        inspection: { date: "2025-08-12", status: "점검완료", grade: "성수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's4',
        name: "신 홈플러스 순천점",
        address: "전남 순천시 중앙로 10 홈플러스",
        info: "28PY | 전체",
        phone: "061-720-8000",
        zones: ["구독케어존", "M&B", "세탁기", "청소기", "워터케어"],
        distribution: "혼매",
        channel: "홈플러스",
        img: "images_store/신 홈플러스 순천점.jpg",
        images: [
            { id: 401, url: "images_store_zone/17.jpg", zone: "구독케어존", tag: "케어1" },
            { id: 402, url: "images_store_M&B/그림9.jpg", zone: "M&B", tag: "비즈1" },
            { id: 403, url: "images_store_zone/18.jpg", zone: "세탁기", tag: "세탁기1" },
            { id: 404, url: "images_store_zone/20.jpg", zone: "청소기", tag: "청소기1" },
        ],
        managers: {
            "HSAD": { name: "박지성", email: "js@hsad.co.kr", tel: "010-7777-7777" },
            "마케터/지점장": { name: "손흥민", email: "hm@lge.com", tel: "010-1010-1010" },
            "도급사": { name: "이순천", email: "sc2@contractor.co.kr", tel: "010-2020-2020" }
        },
        inspection: { date: "2025-08-15", status: "점검진행", grade: "성수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's5',
        name: "하이마트 효자점",
        address: "전북 전주시 완산구 백제대로 100 LG베스트샵",
        info: "45PY | 전체",
        phone: "063-228-0001",
        zones: ["집한채", "냉장고", "AV", "쿠킹"],
        distribution: "혼매",
        channel: "하이마트",
        img: "images_store/하이마트 효자점.jpg",
        images: [
            { id: 501, url: "images_store_집한채/그림5.jpg", zone: "집한채", tag: "공간1" },
            { id: 502, url: "images_store_집한채/그림6.jpg", zone: "집한채", tag: "공간2" },
            { id: 503, url: "images_store_zone/20.jpg", zone: "냉장고", tag: "냉장고1" },
            { id: 504, url: "images_store_zone/5.jpg", zone: "AV", tag: "AV1" },
        ],
        managers: {
            "HSAD": { name: "유재석", email: "jsu@hsad.co.kr", tel: "010-1234-1234" },
            "마케터/지점장": { name: "강호동", email: "hd@lge.com", tel: "010-5678-5678" },
            "도급사": { name: "노홍철", email: "hc@contractor.co.kr", tel: "010-0909-0909" }
        },
        inspection: { date: "2025-08-18", status: "점검완료", grade: "비수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's6',
        name: "하이마트 아중점",
        address: "전주 덕진구 아중로 123 LG베스트샵",
        info: "32PY | 전체",
        phone: "063-241-1111",
        zones: ["구독케어존", "M&B", "세탁기", "CAC", "육성제품"],
        distribution: "전매",
        channel: "전문점",
        img: "images_store/77634904-c1a9-418f-8898-58c5de2aa19f.jpg",
        images: [
            { id: 601, url: "images_store_zone/4 (2).jpg", zone: "구독케어존", tag: "케어1" },
            { id: 602, url: "images_store_M&B/그림8.jpg", zone: "M&B", tag: "비즈1" },
            { id: 603, url: "images_store_zone/4 (3).jpg", zone: "세탁기", tag: "세탁1" },
            { id: 604, url: "images_store_zone/6 (1).jpg", zone: "CAC", tag: "CAC1" },
        ],
        managers: {
            "HSAD": { name: "지석진", email: "sj@hsad.co.kr", tel: "010-8888-8888" },
            "마케터/지점장": { name: "이광수", email: "ks@lge.com", tel: "010-4444-4444" },
            "도급사": { name: "전소민", email: "sm@contractor.co.kr", tel: "010-3333-3333" }
        },
        inspection: { date: "2025-08-20", status: "점검완료", grade: "성수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's7',
        name: "하이마트 평화점",
        address: "전주 완산구 평화로 456 LG베스트샵",
        info: "28PY | 전체",
        phone: "063-222-3333",
        zones: ["M&B", "TV", "PC", "모니터", "AV"],
        distribution: "전매",
        channel: "백화점",
        img: "images_store/878b85d9-e6ac-4a68-a516-2cb24b47bc80.jpg",
        images: [
            { id: 701, url: "images_store_M&B/그림9.jpg", zone: "M&B", tag: "전경1" },
            { id: 702, url: "images_store_M&B/그림8.jpg", zone: "M&B", tag: "전경2" },
            { id: 703, url: "images_store_zone/4 (4).jpg", zone: "TV", tag: "TV1" },
            { id: 704, url: "images_store_zone/9 (2).jpg", zone: "PC", tag: "PC1" },
        ],
        managers: {
            "HSAD": { name: "하하", email: "haha@hsad.co.kr", tel: "010-1111-1111" },
            "마케터/지점장": { name: "송지효", email: "jh2@lge.com", tel: "010-2222-2222" },
            "도급사": { name: "김종민", email: "jm@contractor.co.kr", tel: "010-3333-6666" }
        },
        inspection: { date: "2025-08-22", status: "점검대기", grade: "비수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's8',
        name: "하이마트 삼천점",
        address: "전주 완산구 거마대로 789 LG베스트샵",
        info: "35PY | 전체",
        phone: "063-231-1234",
        zones: ["구독케어존", "집한채", "냉장고", "세탁기", "워터케어"],
        distribution: "B2B",
        channel: "B2B",
        img: "images_store/eb975284-1904-4cd4-b612-bcb307f9f464.jpg",
        images: [
            { id: 801, url: "images_store_zone/4 (5).jpg", zone: "구독케어존", tag: "케어1" },
            { id: 802, url: "images_store_집한채/그림7.jpg", zone: "집한채", tag: "공간1" },
            { id: 803, url: "images_store_zone/4 (6).jpg", zone: "냉장고", tag: "냉장고1" },
            { id: 804, url: "images_store_zone/10.jpg", zone: "세탁기", tag: "세탁기1" },
        ],
        managers: {
            "HSAD": { name: "김종국", email: "jk@hsad.co.kr", tel: "010-5555-5555" },
            "마케터/지점장": { name: "양세찬", email: "sc3@lge.com", tel: "010-6666-6666" },
            "도급사": { name: "이지혜", email: "jh3@contractor.co.kr", tel: "010-7777-9999" }
        },
        inspection: { date: "2025-08-25", status: "점검완료", grade: "성수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's9',
        name: "이마트 광주수완점",
        address: "광주광역시 광산구 수완로 52 이마트",
        info: "40PY | 전체",
        phone: "062-958-1234",
        zones: ["TV", "RAC", "냉장고", "세탁기", "PC", "모니터"],
        distribution: "혼매",
        channel: "이마트",
        img: "images_store/77634904-c1a9-418f-8898-58c5de2aa19f.jpg",
        images: [
            { id: 901, url: "images_store_zone/2.jpg", zone: "TV", tag: "TV전경" },
            { id: 902, url: "images_store_zone/5.jpg", zone: "냉장고", tag: "냉장고1" },
            { id: 903, url: "images_store_zone/7.jpg", zone: "세탁기", tag: "세탁기1" },
            { id: 904, url: "images_store_zone/9 (2).jpg", zone: "PC", tag: "PC1" },
            { id: 905, url: "images_store_zone/9 (3).jpg", zone: "RAC", tag: "RAC1" },
        ],
        managers: {
            "HSAD": { name: "이수현", email: "sh@hsad.co.kr", tel: "010-1357-2468" },
            "마케터/지점장": { name: "박수진", email: "sj2@lge.com", tel: "010-2468-1357" },
            "도급사": { name: "강광주", email: "gj@contractor.co.kr", tel: "010-1122-3344" }
        },
        inspection: { date: "2025-09-01", status: "점검완료", grade: "성수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's10',
        name: "전자랜드 전주점",
        address: "전북 전주시 덕진구 팔달로 15 전자랜드",
        info: "38PY | 전체",
        phone: "063-252-8877",
        zones: ["TV", "AV", "모니터", "PC", "쿠킹", "청소기"],
        distribution: "혼매",
        channel: "전자랜드",
        img: "images_store/878b85d9-e6ac-4a68-a516-2cb24b47bc80.jpg",
        images: [
            { id: 1001, url: "images_store_zone/12.jpg", zone: "TV", tag: "TV1" },
            { id: 1002, url: "images_store_zone/13.jpg", zone: "AV", tag: "AV1" },
            { id: 1003, url: "images_store_zone/14.jpg", zone: "모니터", tag: "모니터1" },
            { id: 1004, url: "images_store_zone/20.jpg", zone: "청소기", tag: "청소기1" },
        ],
        managers: {
            "HSAD": { name: "오민준", email: "mj2@hsad.co.kr", tel: "010-3344-5566" },
            "마케터/지점장": { name: "임지현", email: "jh4@lge.com", tel: "010-5566-7788" },
            "도급사": { name: "차전주", email: "cj@contractor.co.kr", tel: "010-7788-1122" }
        },
        inspection: { date: "2025-09-05", status: "점검대기", grade: "비수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's11',
        name: "LG베스트샵 여수점",
        address: "전남 여수시 충민로 150 LG베스트샵",
        info: "42PY | 전체",
        phone: "061-682-5500",
        zones: ["집한채", "웨딩존", "키즈존", "냉장고", "세탁기", "에어케어"],
        distribution: "전매",
        channel: "전문점",
        img: "images_store/eb975284-1904-4cd4-b612-bcb307f9f464.jpg",
        images: [
            { id: 1101, url: "images_store_집한채/그림2.jpg", zone: "집한채", tag: "공간1" },
            { id: 1102, url: "images_store_집한채/그림3.jpg", zone: "웨딩존", tag: "웨딩1" },
            { id: 1103, url: "images_store_zone/6 (1).jpg", zone: "냉장고", tag: "냉장고1" },
            { id: 1104, url: "images_store_zone/6 (2).jpg", zone: "세탁기", tag: "세탁기1" },
            { id: 1105, url: "images_store_zone/9 (4).jpg", zone: "에어케어", tag: "에어1" },
        ],
        managers: {
            "HSAD": { name: "윤미래", email: "mr@hsad.co.kr", tel: "010-9988-7766" },
            "마케터/지점장": { name: "정해인", email: "hi@lge.com", tel: "010-6655-4433" },
            "도급사": { name: "권여수", email: "ys@contractor.co.kr", tel: "010-5544-3322" }
        },
        inspection: { date: "2025-09-08", status: "점검완료", grade: "성수기" },
        installedFixtures: [],
        requestHistory: []
    },
    {
        id: 's12',
        name: "하이마트 나주점",
        address: "전남 나주시 빛가람로 435 하이마트",
        info: "30PY | 전체",
        phone: "061-334-7700",
        zones: ["주출입문", "RAC", "CAC", "TV", "쿠킹"],
        distribution: "혼매",
        channel: "하이마트",
        img: "images_store/하이마트 효자점.jpg",
        images: [
            { id: 1201, url: "images_store_zone/4 (7).jpg", zone: "주출입문", tag: "입구1" },
            { id: 1202, url: "images_store_zone/8.jpg", zone: "RAC", tag: "RAC1" },
            { id: 1203, url: "images_store_zone/16.jpg", zone: "CAC", tag: "CAC1" },
            { id: 1204, url: "images_store_zone/17.jpg", zone: "TV", tag: "TV1" },
        ],
        managers: {
            "HSAD": { name: "배성우", email: "sw@hsad.co.kr", tel: "010-2233-4455" },
            "마케터/지점장": { name: "고아라", email: "ar@lge.com", tel: "010-4455-6677" },
            "도급사": { name: "황나주", email: "nj@contractor.co.kr", tel: "010-6677-8899" }
        },
        inspection: { date: "2025-09-10", status: "점검진행", grade: "성수기" },
        installedFixtures: [],
        requestHistory: []
    }
];

// Zone hierarchy data
const ZONE_HIERARCHY = {
    '매장외부': ['주출입문', '주차장'],
    '제품존': ['TV', 'RAC', 'PC', '냉장고', '세탁기', 'CAC', '에어케어', '워터케어', '육성제품', '청소기', '쿠킹', '모니터', 'AV'],
    '연출존': ['집한채', 'M&B', '구독케어존', '웨딩존', '키즈존', '기타']
};

// Global state for Store List
let pageLevel1 = 'all';
let pageActiveLevel2 = new Set(['all']);
let currentView = 'card';

// Global state for Gallery & Download
let currentLevel1Detail = 'all';
let selectedGalleryState = {
    '매장외부': new Set(['all']),
    '연출존': new Set(['all']),
    '제품존': new Set(['all'])
};
let filteredImages = [];
let currentZoomIndex = 0;

// Global state for Image Download modal (Store Detail)
let imgDlLevel1 = 'all';
let imgDlSelectedLevel2 = new Set(['all']);

// Global state for Store List Download modal
const distMapping = {
    'B2B': ['B2B'],
    '기타': ['기타'],
    '전매': ['기타', '전문점', '백화점', 'PC상가', 'HIP'],
    '혼매': ['홈플러스', '하이마트', '코스트코', '전자랜드', '이마트']
};

let selectedDists = new Set(['all']);
let selectedChannels = new Set(['all']);
let modalZoneLevel1 = 'all';
let modalSelectedLevel2 = new Set(['all']);

// Extend app object with Store Information methods
Object.assign(app, {
    setStoreView(view, btn) {
        currentView = view;
        const viewToggles = document.querySelectorAll('.view-toggle');
        viewToggles.forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        this.renderStoreList();
    },

    setStoreFilterLevel1(filter, btn) {
        pageLevel1 = filter;
        pageActiveLevel2.clear();
        pageActiveLevel2.add('all');
        const level1Btns = document.querySelectorAll('.zone-level1-row .filter-btn');
        level1Btns.forEach(b => {
            const btnText = b.textContent.replace(/\s/g, '');
            const filterText = filter === 'all' ? '전체' : filter;
            b.classList.toggle('active', btnText === filterText);
        });

        this.renderPageLevel2();
        this.renderStoreList();
    },

    renderPageLevel2() {
        const row = document.getElementById('zone-level2-row');
        if (!row) return;

        if (pageLevel1 === 'all') {
            row.style.display = 'none';
            row.innerHTML = '';
            return;
        }

        const options = ZONE_HIERARCHY[pageLevel1] || [];
        row.innerHTML = '';

        // Add "전체" button first
        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn' + (pageActiveLevel2.has('all') ? ' active' : '');
        allBtn.textContent = '전체';
        allBtn.onclick = () => this.toggleStoreFilterLevel2('all', allBtn);
        row.appendChild(allBtn);

        options.forEach(zone => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn' + (pageActiveLevel2.has(zone) ? ' active' : '');
            btn.textContent = zone;
            btn.onclick = () => this.toggleStoreFilterLevel2(zone, btn);
            row.appendChild(btn);
        });
        row.style.display = 'flex';
    },

    toggleStoreFilterLevel2(zone, btn) {
        if (zone === 'all') {
            pageActiveLevel2.clear();
            pageActiveLevel2.add('all');
        } else {
            pageActiveLevel2.delete('all');
            if (pageActiveLevel2.has(zone)) {
                pageActiveLevel2.delete(zone);
                if (pageActiveLevel2.size === 0) pageActiveLevel2.add('all');
            } else {
                pageActiveLevel2.add(zone);
            }
        }

        const row = document.getElementById('zone-level2-row');
        row.querySelectorAll('.filter-btn').forEach(b => {
            const z = b.textContent === '전체' ? 'all' : b.textContent;
            b.classList.toggle('active', pageActiveLevel2.has(z));
        });

        this.renderStoreList();
    },

    getZonesForFilter() {
        if (pageLevel1 === 'all') return null;
        if (pageActiveLevel2.has('all')) {
            return ZONE_HIERARCHY[pageLevel1] || [];
        }
        return Array.from(pageActiveLevel2);
    },

    renderStoreList() {
        const storeContainer = document.getElementById('store-container');
        const totalCountSpan = document.getElementById('store-total');
        const searchInput = document.getElementById('store-page-search-input');
        if (!storeContainer) return;

        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        const activeZones = this.getZonesForFilter();

        const filteredStores = storeData.filter(store => {
            const matchSearch = store.name.toLowerCase().includes(searchTerm) || store.address.toLowerCase().includes(searchTerm);
            const matchZone = activeZones === null || activeZones.some(z => store.zones.includes(z));
            return matchSearch && matchZone;
        });

        storeContainer.innerHTML = '';
        totalCountSpan.textContent = filteredStores.length;

        if (currentView === 'list') {
            storeContainer.style.display = 'block';
            filteredStores.forEach(store => {
                const item = document.createElement('div');
                item.className = 'store-list-item-renewal';
                item.style.padding = '1.25rem 1.5rem';
                item.style.borderBottom = '1px solid #eee';
                item.style.backgroundColor = '#fff';
                item.style.cursor = 'pointer';
                item.style.display = 'flex';
                item.style.justifyContent = 'space-between';
                item.style.alignItems = 'center';
                item.style.transition = 'background 0.2s';
                item.innerHTML = `
                    <div style="display: flex; flex-direction: column; gap: 4px;">
                        <strong style="font-size: 1.1rem;">${store.name}</strong>
                        <span style="font-size: 0.85rem; color: #888;">${store.address}</span>
                    </div>
                    <div style="font-size: 0.9rem; color: #666; font-weight: 500;">${store.info}</div>
                `;
                item.onmouseover = () => item.style.backgroundColor = '#f9f9f9';
                item.onmouseout = () => item.style.backgroundColor = '#fff';
                item.onclick = () => this.navigateTo('storeDetail', store);
                storeContainer.appendChild(item);
            });
        } else {
            storeContainer.style.display = 'grid';
            filteredStores.forEach(store => {
                const card = document.createElement('div');
                card.className = 'store-card';
                card.innerHTML = `
                    <div class="store-img-container">
                        <img src="${store.img}" alt="${store.name}" class="store-img">
                        <div class="store-tag">${store.inspection.grade}</div>
                    </div>
                    <div class="store-info">
                        <div class="store-name">${store.name}</div>
                        <div class="store-info-row">
                            <span class="store-info-badge">${store.info.split('|')[0].trim()}</span>
                            <span class="store-info-type">${store.info.split('|')[1].trim()}</span>
                        </div>
                        <div class="store-addr">${store.address}</div>
                        <div class="store-managers">
                            <div><span class="manager-label">HSAD</span><span class="manager-name">${store.managers.HSAD.name}</span></div>
                            <div><span class="manager-label">마케터/지점장</span><span class="manager-name">${store.managers["마케터/지점장"].name}</span></div>
                        </div>
                    </div>
                `;
                card.addEventListener('click', () => this.navigateTo('storeDetail', store));
                storeContainer.appendChild(card);
            });
        }
    },

    // Store List Download Modal
    openStoreListDownload() {
        const modal = document.getElementById('list-download-modal');
        if (modal) {
            modal.style.display = 'flex';
            // Reset modal state
            selectedDists = new Set(['all']);
            selectedChannels = new Set(['all']);
            modalZoneLevel1 = 'all';
            modalSelectedLevel2 = new Set(['all']);

            this.updateDlDistUI();
            this.updateChannelOptions();
            this.renderModalZoneLevel2();
            this.renderModalResults(storeData);
        }
    },

    closeStoreListDownload() {
        const modal = document.getElementById('list-download-modal');
        if (modal) modal.style.display = 'none';
    },

    toggleDlFilter(type, val, btn) {
        const selectedSet = type === 'dist' ? selectedDists : selectedChannels;
        if (val === 'all') {
            selectedSet.clear();
            selectedSet.add('all');
        } else {
            selectedSet.delete('all');
            if (selectedSet.has(val)) {
                selectedSet.delete(val);
                if (selectedSet.size === 0) selectedSet.add('all');
            } else {
                selectedSet.add(val);
            }
        }

        if (type === 'dist') {
            this.updateDlDistUI();
            this.updateChannelOptions();
        } else {
            this.updateDlChannelUI();
        }
        this.performModalSearch();
    },

    updateDlDistUI() {
        const container = document.getElementById('dist-btn-group');
        if (!container) return;
        container.querySelectorAll('.filter-btn-item').forEach(btn => {
            const val = btn.textContent === '전체' ? 'all' : btn.textContent;
            btn.classList.toggle('active', selectedDists.has(val));
        });
        this.renderDlTags('dist-tags-container', selectedDists, 'dist');
    },

    updateDlChannelUI() {
        const container = document.getElementById('channel-btn-group');
        if (!container) return;
        container.querySelectorAll('.filter-btn-item').forEach(btn => {
            const val = btn.textContent === '전체' ? 'all' : btn.textContent;
            btn.classList.toggle('active', selectedChannels.has(val));
        });
        this.renderDlTags('channel-tags-container', selectedChannels, 'channel');
    },

    updateChannelOptions() {
        const channelGroup = document.getElementById('channel-btn-group');
        if (!channelGroup) return;

        let availableChannels = [];
        if (selectedDists.has('all')) {
            availableChannels = Object.values(distMapping).flat();
        } else {
            selectedDists.forEach(d => {
                if (distMapping[d]) availableChannels.push(...distMapping[d]);
            });
        }
        availableChannels = [...new Set(availableChannels)];

        // Clean up selected channels
        if (!selectedChannels.has('all')) {
            selectedChannels.forEach(c => {
                if (!availableChannels.includes(c)) selectedChannels.delete(c);
            });
            if (selectedChannels.size === 0) selectedChannels.add('all');
        }

        channelGroup.innerHTML = `<button class="filter-btn-item ${selectedChannels.has('all') ? 'active' : ''}" onclick="app.toggleDlFilter('channel', 'all', this)">전체</button>` +
            availableChannels.map(c => `<button class="filter-btn-item ${selectedChannels.has(c) ? 'active' : ''}" onclick="app.toggleDlFilter('channel', '${c}', this)">${c}</button>`).join('');

        this.updateDlChannelUI();
    },

    renderDlTags(containerId, selectedSet, type) {
        let tc = document.getElementById(containerId);
        if (!tc) {
            tc = document.createElement('div');
            tc.className = 'selected-tags-container';
            tc.id = containerId;
            const group = document.getElementById(type === 'dist' ? 'dist-btn-group' : 'channel-btn-group');
            if (group) group.parentElement.appendChild(tc);
        }

        if (selectedSet.has('all')) {
            tc.innerHTML = '';
            tc.style.display = 'none';
            return;
        }

        tc.style.display = 'flex';
        tc.innerHTML = '';
        selectedSet.forEach(val => {
            const tag = document.createElement('div');
            tag.className = 'filter-tag';
            tag.innerHTML = `
                <span>${val}</span>
                <span class="tag-remove" onclick="app.removeDlTag('${type}', '${val}')">&times;</span>
            `;
            tc.appendChild(tag);
        });
    },

    removeDlTag(type, val) {
        const selectedSet = type === 'dist' ? selectedDists : selectedChannels;
        selectedSet.delete(val);
        if (selectedSet.size === 0) selectedSet.add('all');
        if (type === 'dist') {
            this.updateDlDistUI();
            this.updateChannelOptions();
        } else {
            this.updateDlChannelUI();
        }
        this.performModalSearch();
    },

    setDlZoneLevel1(val, btn) {
        modalZoneLevel1 = val;
        modalSelectedLevel2.clear();
        modalSelectedLevel2.add('all');

        const group = document.getElementById('modal-zone-level1-group');
        group.querySelectorAll('.filter-btn-item').forEach(b => {
            const btnText = b.textContent.replace(/\s/g, '');
            const valText = val === 'all' ? '전체' : val;
            b.classList.toggle('active', btnText === valText);
        });

        this.renderModalZoneLevel2();
        this.performModalSearch();
    },

    renderModalZoneLevel2() {
        const wrap = document.getElementById('modal-zone-level2-wrap');
        const group = document.getElementById('modal-zone-level2-group');
        const tags = document.getElementById('zone-tags-container');
        if (!wrap || !group) return;

        if (modalZoneLevel1 === 'all') {
            wrap.style.display = 'none';
            group.innerHTML = '';
            tags.innerHTML = '';
            return;
        }

        const options = ZONE_HIERARCHY[modalZoneLevel1] || [];
        wrap.style.display = 'block';
        group.innerHTML = '';

        const allBtn = document.createElement('button');
        allBtn.className = 'filter-btn-item' + (modalSelectedLevel2.has('all') ? ' active' : '');
        allBtn.textContent = '전체';
        allBtn.onclick = () => this.toggleDlZoneLevel2('all', allBtn);
        group.appendChild(allBtn);

        options.forEach(zone => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn-item' + (modalSelectedLevel2.has(zone) ? ' active' : '');
            btn.textContent = zone;
            btn.onclick = () => this.toggleDlZoneLevel2(zone, btn);
            group.appendChild(btn);
        });
        this.renderModalZoneTags();
    },

    renderModalZoneTags() {
        const tags = document.getElementById('zone-tags-container');
        if (!tags) return;
        tags.innerHTML = '';
        if (modalSelectedLevel2.has('all') || modalZoneLevel1 === 'all') return;

        modalSelectedLevel2.forEach(val => {
            const tag = document.createElement('div');
            tag.className = 'filter-tag';
            tag.innerHTML = `<span>${val}</span><span class="tag-remove" onclick="app.removeModalZoneTag('${val}')">&times;</span>`;
            tags.appendChild(tag);
        });
    },

    removeModalZoneTag(val) {
        modalSelectedLevel2.delete(val);
        if (modalSelectedLevel2.size === 0) modalSelectedLevel2.add('all');
        this.renderModalZoneLevel2();
        this.performModalSearch();
    },

    toggleDlZoneLevel2(val, btn) {
        if (val === 'all') {
            modalSelectedLevel2.clear();
            modalSelectedLevel2.add('all');
        } else {
            modalSelectedLevel2.delete('all');
            if (modalSelectedLevel2.has(val)) {
                modalSelectedLevel2.delete(val);
                if (modalSelectedLevel2.size === 0) modalSelectedLevel2.add('all');
            } else {
                modalSelectedLevel2.add(val);
            }
        }
        this.renderModalZoneLevel2();
        this.performModalSearch();
    },

    performModalSearch() {
        const searchTerm = document.getElementById('modal-search-input').value.toLowerCase();
        const startDateInput = document.getElementById('start-date').value;
        const endDateInput = document.getElementById('end-date').value;
        const startDate = startDateInput ? new Date(startDateInput) : null;
        const endDate = endDateInput ? new Date(endDateInput) : null;

        const getModalZones = () => {
            if (modalZoneLevel1 === 'all') return null;
            if (modalSelectedLevel2.has('all')) return ZONE_HIERARCHY[modalZoneLevel1] || [];
            return Array.from(modalSelectedLevel2);
        };

        const filtered = storeData.filter(s => {
            const matchSearch = s.name.toLowerCase().includes(searchTerm) || s.address.toLowerCase().includes(searchTerm);
            const matchDist = selectedDists.has('all') || selectedDists.has(s.distribution);
            const matchChannel = selectedChannels.has('all') || selectedChannels.has(s.channel);
            const activeZones = getModalZones();
            const matchZone = activeZones === null || s.zones.some(z => activeZones.includes(z));

            const storeDate = new Date(s.inspection.date);
            let matchDate = true;
            if (startDate) matchDate = matchDate && storeDate >= startDate;
            if (endDate) matchDate = matchDate && storeDate <= endDate;

            return matchSearch && matchDist && matchChannel && matchZone && matchDate;
        });

        this.renderModalResults(filtered);
    },

    renderModalResults(storesToRender) {
        const body = document.getElementById('modal-results-body');
        if (!body) return;
        body.innerHTML = storesToRender.map(s => `
            <tr>
                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;"><input type="checkbox" class="store-check" value="${s.id}" checked></td>
                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">${s.name}</td>
                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">${s.distribution}</td>
                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">${s.channel}</td>
                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left; max-width: 300px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${s.address}</td>
                <td style="padding:10px; border-bottom:1px solid #eee; text-align:left;">${s.inspection.status}</td>
            </tr>
        `).join('');
        const checkAll = document.getElementById('check-all-stores');
        if (checkAll) checkAll.checked = true;
    },

    toggleAllDlItemsRenewal(checked) {
        document.querySelectorAll('.store-check').forEach(cb => cb.checked = checked);
    },

    exportStoreListRenewal() {
        if (!window.XLSX) {
            alert('Excel 라이브러리를 로드할 수 없습니다.');
            return;
        }

        const checkedIds = Array.from(document.querySelectorAll('.store-check:checked')).map(cb => cb.value);
        const storesToExport = storeData.filter(s => checkedIds.includes(s.id));

        if (storesToExport.length === 0) {
            alert('다운로드할 매장을 선택해주세요.');
            return;
        }

        const data = storesToExport.map(s => ({
            '매장명': s.name,
            '유통': s.distribution,
            '채널': s.channel,
            '주소': s.address,
            '전화번호': s.phone || s.tel,
            '비고': s.info,
            '최근점검일': s.inspection.date,
            '점검상태': s.inspection.status,
            'ZONE': s.zones.join(', ')
        }));

        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "StoreList");
        XLSX.writeFile(wb, `LG_StoreList_${new Date().toISOString().slice(0, 10)}.xlsx`);
    },

    // Store Detail & Download
    renderStoreDetail(store) {
        this.currentStore = store;
        const root = document.getElementById('app-main');
        if (!root || !store) return;

        root.innerHTML = document.getElementById('tpl-store-detail').innerHTML;

        const detailContainer = document.getElementById('detail-card-layout');
        if (detailContainer) {
            detailContainer.innerHTML = `
                <div class="left-section">
                    <div class="main-img-container">
                        <img src="${store.img}" id="main-detail-img">
                        <div class="scene-tabs">
                            <div class="scene-tab active" onclick="app.updateActiveImage(0)">전경1</div>
                            <div class="scene-tab" onclick="app.updateActiveImage(1)">전경2</div>
                            <div class="scene-tab" onclick="app.updateActiveImage(2)">전경3</div>
                        </div>
                    </div>
                    <div class="thumb-nav" id="storeThumbnails">
                        ${(store.images || [{ url: store.img }]).slice(0, 3).map((img, i) => `
                            <img src="${img.url || img}" class="${i === 0 ? 'active' : ''}" onclick="app.updateActiveImage(${i})">
                        `).join('')}
                    </div>
                </div>
                <div class="right-section">
                    <div class="info-card">
                        <div class="info-header">
                            <h2><span class="store-path">${store.channel} |</span> ${store.name}</h2>
                            <p style="color: #666; font-size: 0.95rem;">${store.address}</p>
                            <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">
                                ${store.info}
                            </div>
                            <div style="margin-top: 0.5rem; color: #333; font-weight: 500;">
                                ${store.phone || store.tel}
                            </div>
                        </div>

                        <div class="manager-section">
                            <div style="font-weight: 600; margin-bottom: 1rem;">매장 담당자 정보</div>
                            <div class="manager-tabs">
                                <button class="manager-tab active" onclick="app.switchManagerTab('HSAD', this)">HSAD</button>
                                <button class="manager-tab" onclick="app.switchManagerTab('마케터/지점장', this)">마케터/지점장</button>
                                <button class="manager-tab" onclick="app.switchManagerTab('도급사', this)">도급사</button>
                            </div>
                            <div id="manager-info-content"></div>
                        </div>

                        <div class="bottom-action-grid">
                            <div class="action-card">
                                <div style="font-weight: 700; margin-bottom: 1rem;">점검 현황</div>
                                <div style="color: #666; line-height: 1.4;">${store.inspection.status}</div>
                            </div>
                            <div class="action-card">
                                <div style="font-weight: 700; margin-bottom: 1rem;">ZONE 별 매장 현황</div>
                                <button class="btn-gallery-open" onclick="app.openGallery()">사진 보기</button>
                                <div class="update-date">Update. 2026/03/12</div>
                            </div>
                        </div>
                    </div>
                    
                    <button class="btn-outline" onclick="app.openImageDownload()" style="width:100%; padding:1rem; border:1px solid var(--lg-red); color:var(--lg-red); font-weight:bold; display:flex; align-items:center; justify-content:center; gap:0.5rem; border-radius:8px; margin-top:20px;">
                        <i class='bx bx-download'></i> 매장 이미지 다운로드
                    </button>
                </div>
            `;
        }
        this.switchManagerTab('HSAD', document.querySelector('.manager-tab.active'));
        this.renderStoreFixtureStatusList('marketing');
    },

    updateActiveImage(index) {
        const store = this.currentStore;
        const mainImg = document.getElementById('main-detail-img');
        const sceneTabs = document.querySelectorAll('.scene-tab');
        const thumbImgs = document.querySelectorAll('#storeThumbnails img');
        if (!store || !mainImg) return;
        const targetImg = store.images && store.images[index] ? store.images[index].url : store.img;
        mainImg.src = targetImg;
        sceneTabs.forEach((t, i) => t.classList.toggle('active', i === index));
        thumbImgs.forEach((t, i) => t.classList.toggle('active', i === index));
    },

    switchManagerTab(role, btn) {
        document.querySelectorAll('.manager-tab').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        const manager = this.currentStore.managers ? this.currentStore.managers[role] : null;
        const content = document.getElementById('manager-info-content');
        if (!content) return;
        if (!manager) {
            content.innerHTML = '<div style="padding:20px 0; color:#999;">정보가 없습니다.</div>';
        } else {
            content.innerHTML = `
                <div class="manager-field">${manager.name}</div>
                <div class="manager-field">${manager.email}</div>
                <div class="manager-field">${manager.tel || manager.phone}</div>
            `;
        }
    },

    // Gallery Logic
    openGallery() {
        const modal = document.getElementById('gallery-modal');
        if (modal) {
            modal.style.display = 'flex';
            this.renderGalleryButtons();
            this.renderGallery();
        }
    },

    closeGallery() {
        const modal = document.getElementById('gallery-modal');
        if (modal) modal.style.display = 'none';
    },

    renderGalleryButtons() {
        const filterContainer = document.getElementById('gallery-filters');
        if (!filterContainer) return;
        filterContainer.innerHTML = `
            <div class="filter-level-1" style="display: flex; gap: 0.5rem; margin-bottom: 1rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; width: 100%;">
                <button class="filter-btn ${currentLevel1Detail === 'all' ? 'active' : ''}" onclick="app.setGalleryLevel1('all')">전체</button>
                <button class="filter-btn ${currentLevel1Detail === '매장외부' ? 'active' : ''}" onclick="app.setGalleryLevel1('매장외부')">매장 외부</button>
                <button class="filter-btn ${currentLevel1Detail === '제품존' ? 'active' : ''}" onclick="app.setGalleryLevel1('제품존')">제품존</button>
                <button class="filter-btn ${currentLevel1Detail === '연출존' ? 'active' : ''}" onclick="app.setGalleryLevel1('연출존')">연출존</button>
            </div>
            <div class="filter-level-2-gallery" style="display: flex; gap: 0.5rem; flex-wrap: wrap; width: 100%; min-height: 40px;"></div>
        `;
        this.renderGalleryLevel2();
    },

    setGalleryLevel1(l1) {
        currentLevel1Detail = l1;
        this.renderGalleryButtons();
        this.renderGallery();
    },

    renderGalleryLevel2() {
        const container = document.querySelector('.filter-level-2-gallery');
        if (!container || currentLevel1Detail === 'all' || !ZONE_HIERARCHY[currentLevel1Detail]) {
            if (container) container.innerHTML = '';
            return;
        }
        const candidates = ZONE_HIERARCHY[currentLevel1Detail];
        const buttonsToShow = ['all', ...candidates];
        const currentStateSet = selectedGalleryState[currentLevel1Detail];
        container.innerHTML = buttonsToShow.map(zone => {
            const isActive = currentStateSet.has(zone);
            return `<button class="filter-btn ${isActive ? 'active' : ''}" onclick="app.toggleGalleryLevel2('${zone}')">${zone === 'all' ? '전체' : zone}</button>`;
        }).join('');
    },

    toggleGalleryLevel2(zone) {
        const currentStateSet = selectedGalleryState[currentLevel1Detail];
        if (zone === 'all') {
            currentStateSet.clear();
            currentStateSet.add('all');
        } else {
            if (currentStateSet.has('all')) currentStateSet.delete('all');
            if (currentStateSet.has(zone)) {
                currentStateSet.delete(zone);
                if (currentStateSet.size === 0) currentStateSet.add('all');
            } else {
                currentStateSet.add(zone);
            }
        }
        this.renderGalleryLevel2();
        this.renderGallery();
    },

    renderGallery() {
        const container = document.getElementById('gallery-container');
        if (!container || !this.currentStore) return;
        filteredImages = (this.currentStore.images || []).filter(img => {
            let imgLevel1 = null;
            for (const [l1, l2list] of Object.entries(ZONE_HIERARCHY)) {
                if (l2list.includes(img.zone)) {
                    imgLevel1 = l1;
                    break;
                }
            }
            if (!imgLevel1) return currentLevel1Detail === 'all';
            const hasAnyExplicitSelection = Object.values(selectedGalleryState).some(set => !set.has('all'));
            if (!hasAnyExplicitSelection) {
                return currentLevel1Detail === 'all' || imgLevel1 === currentLevel1Detail;
            } else {
                const stateForThisImg = selectedGalleryState[imgLevel1];
                if (!stateForThisImg.has('all')) return stateForThisImg.has(img.zone);
                return stateForThisImg.has('all') && imgLevel1 === currentLevel1Detail;
            }
        });
        if (filteredImages.length === 0) {
            container.innerHTML = '<p style="grid-column:1/-1; text-align:center; padding:2rem; color:#999;">이미지가 없습니다.</p>';
        } else {
            container.innerHTML = filteredImages.map((img, idx) => `
                <div class="gallery-item" onclick="app.openZoom(${idx})">
                    <img src="${img.url}" alt="${img.tag}">
                </div>
            `).join('');
        }
    },

    openZoom(idx) {
        currentZoomIndex = idx;
        const modal = document.getElementById('zoom-modal');
        const img = document.getElementById('zoom-image');
        if (modal && img) {
            img.src = filteredImages[idx].url;
            modal.style.display = 'flex';
        }
    },

    navigateZoom(dir) {
        currentZoomIndex = (currentZoomIndex + dir + filteredImages.length) % filteredImages.length;
        const img = document.getElementById('zoom-image');
        if (img) img.src = filteredImages[currentZoomIndex].url;
    },

    closeZoom() {
        const modal = document.getElementById('zoom-modal');
        if (modal) modal.style.display = 'none';
    },

    // Image Download Modal Logic
    openImageDownload() {
        const modal = document.getElementById('download-modal');
        if (modal) {
            modal.style.display = 'flex';
            imgDlLevel1 = 'all';
            imgDlSelectedLevel2.clear();
            imgDlSelectedLevel2.add('all');
            this.renderImgDlLevel2();
        }
    },

    closeImageDownload() {
        const modal = document.getElementById('download-modal');
        if (modal) modal.style.display = 'none';
    },

    setImgDlLevel1(l1, btn) {
        imgDlLevel1 = l1;

        btn.parentElement.querySelectorAll('.chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.renderImgDlLevel2();
    },

    renderImgDlLevel2() {
        const container = document.getElementById('img-dl-level2-container');
        if (!container) return;

        if (imgDlLevel1 === 'all') {
            container.innerHTML = '';
            return;
        }

        const options = ZONE_HIERARCHY[imgDlLevel1] || [];
        container.innerHTML = `<button class="chip ${imgDlSelectedLevel2.has('all') ? 'active' : ''}" onclick="app.toggleImgDlLevel2('all', this)">전체</button>` +
            options.map(z => `<button class="chip ${imgDlSelectedLevel2.has(z) ? 'active' : ''}" onclick="app.toggleImgDlLevel2('${z}', this)">${z}</button>`).join('');
    },

    toggleImgDlLevel2(z, btn) {
        if (z === 'all') {
            imgDlSelectedLevel2.clear();
            imgDlSelectedLevel2.add('all');
        } else {
            imgDlSelectedLevel2.delete('all');
            if (imgDlSelectedLevel2.has(z)) {
                imgDlSelectedLevel2.delete(z);
                if (imgDlSelectedLevel2.size === 0) imgDlSelectedLevel2.add('all');
            } else {
                imgDlSelectedLevel2.add(z);
            }
        }
        btn.parentElement.querySelectorAll('.chip').forEach(b => {
            const text = b.textContent;
            b.classList.toggle('active', imgDlSelectedLevel2.has(text === '전체' ? 'all' : text));
        });
    },

    async executeImageDownload() {
        if (!window.JSZip || !window.saveAs) {
            alert('필요한 라이브러리가 로드되지 않았습니다.');
            return;
        }

        const btn = document.getElementById('confirmImgDownloadBtn');
        const imagesToDl = (this.currentStore.images || []).filter(img => {
            let imgLevel1 = null;
            for (const [l1, l2list] of Object.entries(ZONE_HIERARCHY)) {
                if (l2list.includes(img.zone)) {
                    imgLevel1 = l1;
                    break;
                }
            }
            if (!imgLevel1) return imgDlLevel1 === 'all';
            if (imgDlLevel1 === 'all') return true;
            if (imgLevel1 === imgDlLevel1) {
                return imgDlSelectedLevel2.has('all') || imgDlSelectedLevel2.has(img.zone);
            }
            return false;
        });

        if (imagesToDl.length === 0) {
            alert('다운로드할 이미지가 없습니다.');
            return;
        }

        btn.disabled = true;
        btn.innerText = '압축 중...';

        try {
            const jszip = new JSZip();
            for (const img of imagesToDl) {
                const response = await fetch(img.url);
                const blob = await response.blob();
                const fileName = `${img.zone}_${img.tag}_${img.url.split('/').pop()}`;
                jszip.file(fileName, blob);
            }
            const content = await jszip.generateAsync({ type: 'blob' });
            saveAs(content, `${this.currentStore.name}_images.zip`);
            this.closeImageDownload();
        } catch (error) {
            console.error(error);
            alert('다운로드 중 오류가 발생했습니다.');
        } finally {
            btn.disabled = false;
            btn.innerText = '다운로드';
        }
    },

    // Fixture Status Rendering (Integrated)
    renderStoreFixtureStatusList(type) {
        const container = document.getElementById('storeFixtureStatusList');
        if (!container || !this.currentStore) return;

        const fixtures = (this.currentStore.installedFixtures || []).filter(f => f.type === type);
        const mkActive = type === 'marketing' ? 'active' : '';
        const vmdActive = type === 'vmd' ? 'active' : '';

        let html = `
            <div class="flex-row-between mb-3" style="padding-bottom: 15px; border-bottom: 1px solid #eee;">
                <h4 style="font-size:1.1rem; font-weight:bold;">집기 현황</h4>
                <div style="display:flex; gap:8px;">
                    <button class="chip ${mkActive}" onclick="app.renderStoreFixtureStatusList('marketing')">마케팅 집기</button>
                    <button class="chip ${vmdActive}" onclick="app.renderStoreFixtureStatusList('vmd')">VMD 집기</button>
                </div>
            </div>
        `;

        if (fixtures.length === 0) {
            html += '<div class="text-center py-4 text-muted">설치된 집기가 없습니다.</div>';
        } else {
            html += fixtures.map(f => {
                const history = (this.currentStore.requestHistory || []).find(h => h.fixtureId === f.id);
                const statusBadge = history ? `<span style="background:#A50034; color:white; padding:1px 8px; border-radius:10px; font-size:0.7rem;">${history.status}</span>` : '<span style="color:#999; font-size:0.8rem;">정상</span>';
                return `
                    <div class="flex-row-between py-3" style="border-bottom: 1px solid #eee; cursor:pointer;" onclick="app.navigateTo('fixtureStatusDetail', '${f.id}')">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <img src="${f.img}" style="width:40px; height:40px; object-fit:contain; background:#f5f5f5; border-radius:4px;">
                            <div>
                                <div style="font-weight:bold; font-size:0.9rem;">${f.name}</div>
                                <div style="font-size:0.75rem; color:#888;">${f.size}</div>
                            </div>
                        </div>
                        <div>${statusBadge} <i class='bx bx-chevron-right' style="color:#ccc;"></i></div>
                    </div>
                `;
            }).join('');
        }
        container.innerHTML = html;
    },

    renderFixtureStatusDetail(fixtureId) {
        if (!this.currentStore) {
            console.error('No current store set for fixture status detail');
            return;
        }

        const fixtures = this.currentStore.installedFixtures || [];
        const fixture = fixtures.find(f => f.id === fixtureId);

        if (!fixture) {
            console.error('Fixture not found in current store:', fixtureId);
            return;
        }

        this.currentInstalledFixture = fixture;

        const history = (this.currentStore.requestHistory || []).find(h => h.fixtureId === fixtureId);
        const storeName = this.currentStore.name;

        let rightPanelHtml;
        if (history) {
            const installRowHtml = history.installDate
                ? `<div class="flex-row-between text-muted mt-2" style="font-size:0.95rem;">
                        <span>설치일</span><span>${history.installDate}</span>
                   </div>`
                : '';
            rightPanelHtml = `
                <h4 style="font-size:1.0rem; font-weight:bold; margin-bottom:16px;">요청 내용</h4>
                <div style="display:flex; align-items:center; gap:8px; margin-bottom:24px; padding:12px 0; border-bottom:1px solid #eee;">
                    <div style="width:18px; height:18px; border-radius:50%; background:#A50034; display:flex; align-items:center; justify-content:center;">
                        <div style="width:8px; height:8px; border-radius:50%; background:white;"></div>
                    </div>
                    <span style="font-weight:600;">${history.type}</span>
                </div>
                <div class="form-group">
                    <label style="font-size:1.0rem; font-weight:bold;">요청 매장</label>
                    <div class="selected-store-card-v2">
                        <div style="font-weight:bold; font-size: 1.1rem; margin-bottom:12px;">${storeName}</div>
                        <div class="flex-row-between text-muted" style="font-size:0.95rem;">
                            <span>요청일</span><span>${history.reqDate || history.date || ''}</span>
                        </div>
                        ${installRowHtml}
                    </div>
                </div>
                <div class="mt-5">
                    <button class="btn btn-block btn-light-border"
                        style="color:var(--text-main); height:54px; font-weight:bold; font-size: 1.1rem; border-radius: 8px;"
                        onclick="app.cancelFixtureRequest()">요청 취소</button>
                </div>
            `;
        } else {
            rightPanelHtml = `
                <h4 style="font-size:1.0rem; font-weight:bold; margin-bottom:16px;">요청 내용 <span style="color:var(--primary-color); font-size:0.8rem; font-weight:normal;">*필수</span></h4>
                <div class="checkbox-grid" style="margin-bottom: 32px;">
                    <label class="custom-checkbox"><input type="radio" name="statusNewReq" value="회수">
                        <span class="checkmark"></span> 회수</label>
                    <label class="custom-checkbox"><input type="radio" name="statusNewReq" value="A/S">
                        <span class="checkmark"></span> A/S</label>
                    <label class="custom-checkbox"><input type="radio" name="statusNewReq" value="추가제작">
                        <span class="checkmark"></span> 추가제작</label>
                </div>
                <div class="form-group" style="margin-bottom: 40px;">
                    <label style="font-size:1.0rem; font-weight:bold;">요청 매장</label>
                    <div class="selected-store-card-v2">
                        <div style="font-weight:bold; font-size: 1.1rem;">${storeName}</div>
                    </div>
                </div>
                <div class="mt-5">
                    <button class="btn btn-primary btn-block"
                        style="height:56px; font-weight:bold; background-color:#A50034; border-color:#A50034; font-size: 1.2rem; border-radius: 8px;"
                        onclick="app.handleFixtureStatusRequest()">요청하기</button>
                </div>
            `;
        }

        const html = `
            <div class="pc-content-container" style="padding-top: 20px;">
                <div class="page-header flex-row-center" style="margin-bottom: 24px;">
                    <button class="icon-btn" onclick="app.navigateTo('storeDetail', app.currentStore)">
                        <i class='bx bx-chevron-left' style="font-size:1.5rem;"></i>
                    </button>
                    <div style="font-weight:bold; font-size:1.1rem; flex:1; text-align:center;">집기 요청 현황</div>
                    <div style="width:40px;"></div>
                </div>

                <div class="fixture-detail-layout">
                    <div class="fixture-preview-side">
                        <div class="fixture-main-img-box">
                            <img src="${fixture.img}" alt="${fixture.name}" style="max-width:80%; max-height:80%; object-fit:contain;">
                        </div>
                    </div>

                    <div class="fixture-form-side">
                        <div class="pd-horizontal">
                            <h2 style="font-size: 1.8rem; font-weight: 800; margin-bottom: 24px; color: #333;">${fixture.name}</h2>
                            <div class="info-row-item">
                                <span class="info-label-text">사이즈</span>
                                <span class="info-value-text">${fixture.size}</span>
                            </div>
                            <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
                            ${rightPanelHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;

        const main = document.getElementById('app-main');
        if (main) main.innerHTML = html;
    },


    handleFixtureStatusRequest() {
        const selectedOption = document.querySelector('input[name="statusNewReq"]:checked');
        if (!selectedOption) {
            alert('요청 항목을 선택해주세요.');
            return;
        }

        const type = selectedOption.value;
        const today = new Date().toISOString().split('T')[0];

        if (!this.currentStore.requestHistory) this.currentStore.requestHistory = [];
        this.currentStore.requestHistory.push({
            id: 'req_' + Date.now(),
            fixtureId: this.currentInstalledFixture.id,
            type: type,
            status: '진행중',
            reqDate: today
        });

        alert(`${type} 요청이 완료되었습니다.`);
        this.navigateTo('storeDetail', this.currentStore);
    },

    cancelFixtureRequest() {
        if (!confirm('정말 요청을 취소하시겠습니까?')) return;

        const idx = this.currentStore.requestHistory.findIndex(h => h.fixtureId === this.currentInstalledFixture.id);
        if (idx > -1) {
            this.currentStore.requestHistory.splice(idx, 1);
        }

        alert('요청이 취소되었습니다.');
        this.navigateTo('storeDetail', this.currentStore);
    }
});
