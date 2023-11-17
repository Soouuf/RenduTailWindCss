export default function FlightTable() {
    return {
        perPage: 5,
        currentPage: 1,
        from: '',
        to: '',
        distanceMin: 0,
        totalPages: 0,
        distanceMax: 10000,
        datas: [],
        baseDatas: [],
        filteredDatas: [],

        init() {
            fetch('./public/data.json')
                .then(response => response.json())
                .then(data => {
                    this.datas = this.filteredDatas = this.baseDatas = data;
                    this.filterTable();
                })
                .catch(error => console.error('Erreur de chargement:', error));
        },
        countTotalPages() {
            this.totalPages = Math.ceil(this.filteredDatas.length / this.perPage);
        },
        fromValues() {
            return [...new Set(this.baseDatas.map(data => data.from))].sort();
        },
        toValues() {
            return [...new Set(this.baseDatas.map(data => data.to))].sort();
        },
        filterTable() {
            this.filteredDatas = this.baseDatas.filter(data => {
                let fromMatches = this.from !== '' ? (data.from === this.from) : true;
                let toMatches = this.to !== '' ? (data.to === this.to) : true;
                let distanceMinMatch = this.distanceMin >= 0 && this.distanceMin !== '' ? (data.kms >= this.distanceMin) : true;
                let distanceMaxMatch = this.distanceMax <= 10000 && this.distanceMax !== '' ? (data.kms <= this.distanceMax) : true;
                return fromMatches && toMatches && distanceMinMatch && distanceMaxMatch;
            });
            this.paginateTable();
        },

        setCurrentPage(page) {
            this.currentPage = page;
            this.paginateTable();
        },

        paginateTable() {
            this.countTotalPages();
            // décalage est l'index du tableau à partir duquel commencer à prendre les éléments
            let offset = (this.currentPage - 1) * this.perPage;
            // nous obtenons la sous-séquence du tableau original à afficher sur la page courante
            this.datas = this.filteredDatas.slice(offset, offset + this.perPage);
        }
    }
}
