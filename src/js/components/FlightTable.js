export default function FlightTable() {
    return {
        from: '',
        to: '',
        datas: [],
        baseDatas: [],
        init() {
            fetch('./public/data.json')
                .then(response => response.json())
                .then(data => {
                    this.datas = this.baseDatas = data;
                })
                .catch(error => console.error('Erreur de chargement:', error));
        },
        fromValues() {
            return [...new Set(this.baseDatas.map(data => data.from))].sort();
        },
        toValues() {
            return [...new Set(this.baseDatas.map(data => data.to))].sort();
        },
        filterTable() {
            this.datas = this.baseDatas.filter(data => {
                let fromMatches = this.from !== '' ? (data.from === this.from) : true;
                let toMatches = this.to !== '' ? (data.to === this.to) : true;
                return fromMatches && toMatches;
            });
        }
    }
}
