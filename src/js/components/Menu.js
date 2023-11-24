export default function Menu() {
    return {
        currentMenuId: 0,
        init() {
            this.assignIdsToAllSubMenus();
        },
        assignIdsToAllSubMenus() {
            let subMenuId = 1;

            this.$el.querySelectorAll('.sub-menu').forEach(item => {
                item.dataset.subMenuId = subMenuId;
                subMenuId++;
            });
        },
        isOpen() {
            return this.currentMenuId === this.getSubMenuIdFromElement();
        },
        openMenu() {
            this.currentMenuId = this.getCurrentSubMenuId();
        },
        getSubMenuIdFromElement(){
            return parseInt(this.$el.dataset.subMenuId) || 0;
        },
        getCurrentSubMenuId(){
            return parseInt(this.$el.closest('li').querySelector('.sub-menu').dataset.subMenuId);
        }
    };
};
