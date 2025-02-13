function hideCollapseElements(...elements) {
    elements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (element.classList.contains('show')) {
            new bootstrap.Collapse(element, { toggle: false }).hide();
        }
    });
}

function showCollapseElements(...elements) {
    elements.forEach(elementId => {
        const element = document.getElementById(elementId);
        if (!element.classList.contains('show')) {
            new bootstrap.Collapse(element, { toggle: false }).show();
        }
    });
}

document.getElementById('Entree_Viande_btn').addEventListener('click', function() {
    hideCollapseElements('Entree_veggie_1');
    showCollapseElements('Entree_viande_1');
});

document.getElementById('Entree_Veggie_btn').addEventListener('click', function() {
    hideCollapseElements('Entree_viande_1');
    showCollapseElements('Entree_veggie_1');
});

document.getElementById('Entree_All_btn').addEventListener('click', function() {
    showCollapseElements('Entree_veggie_1', 'Entree_viande_1');
});

document.getElementById('Plat_Poisson_btn').addEventListener('click', function() {
    hideCollapseElements('Plat_viande_1', 'Plat_viande_2', 'Plat_veggie_1', 'Plat_veggie_2');
    showCollapseElements('Plat_poisson_1', 'Plat_poisson_2');
});

document.getElementById('Plat_Viande_btn').addEventListener('click', function() {
    hideCollapseElements('Plat_poisson_1', 'Plat_poisson_2', 'Plat_veggie_1', 'Plat_veggie_2');
    showCollapseElements('Plat_viande_1', 'Plat_viande_2');
});

document.getElementById('Plat_Veggie_btn').addEventListener('click', function() {
    hideCollapseElements('Plat_poisson_1', 'Plat_poisson_2', 'Plat_viande_1', 'Plat_viande_2');
    showCollapseElements('Plat_veggie_1', 'Plat_veggie_2');
});

document.getElementById('Plat_All_btn').addEventListener('click', function() {
    showCollapseElements('Plat_poisson_1', 'Plat_poisson_2', 'Plat_viande_1', 'Plat_viande_2', 'Plat_veggie_1', 'Plat_veggie_2');
});

document.getElementById('Dessert_sucre_btn').addEventListener('click', function() {
    hideCollapseElements('Dessert_fromage_1');
    showCollapseElements('Dessert_sucre_1', 'Dessert_sucre_2', 'Dessert_sucre_3', 'Dessert_sucre_4');
});

document.getElementById('Dessert_fromage_btn').addEventListener('click', function() {
    hideCollapseElements('Dessert_sucre_1', 'Dessert_sucre_2', 'Dessert_sucre_3', 'Dessert_sucre_4');
    showCollapseElements('Dessert_fromage_1');
});

document.getElementById('Dessert_All_btn').addEventListener('click', function() {
    showCollapseElements('Dessert_fromage_1', 'Dessert_sucre_1', 'Dessert_sucre_2', 'Dessert_sucre_3', 'Dessert_sucre_4');
});

document.getElementById('Boisson_sobre_btn').addEventListener('click', function() {
    hideCollapseElements('Boisson_alcool_1', 'Boisson_alcool_2', 'Boisson_alcool_3');
    showCollapseElements('Boisson_sobre_1', 'Boisson_sobre_2', 'Boisson_sobre_3');
});

document.getElementById('Boisson_alcool_btn').addEventListener('click', function() {
    hideCollapseElements('Boisson_sobre_1', 'Boisson_sobre_2', 'Boisson_sobre_3');
    showCollapseElements('Boisson_alcool_1', 'Boisson_alcool_2', 'Boisson_alcool_3');
});

document.getElementById('Boisson_All_btn').addEventListener('click', function() {
    showCollapseElements('Boisson_sobre_1', 'Boisson_sobre_2', 'Boisson_sobre_3', 'Boisson_alcool_1', 'Boisson_alcool_2', 'Boisson_alcool_3');
});

function showContainer(containerId) {
    document.getElementById('container_Entree').classList.add('d-none');
    document.getElementById('container_Plats').classList.add('d-none');
    document.getElementById('container_Dessert').classList.add('d-none');
    document.getElementById('container_Boissons').classList.add('d-none');

    document.getElementById(containerId).classList.remove('d-none');
    document.getElementById(containerId).classList.add('d-block');
}