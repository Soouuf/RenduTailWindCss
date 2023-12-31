import Alpine from "alpinejs";
import EditorPreview from "./components/EditorPreview";
import FlightTable from "./components/FlightTable";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import intersect from '@alpinejs/intersect'

window.Alpine = Alpine;
Alpine.plugin(intersect)

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start} = Alpine;
    data('EditorPreview', EditorPreview);
    data('FlightTable', FlightTable);
    data('Slider', Slider);
    data('Menu', Menu);
    start();
});
