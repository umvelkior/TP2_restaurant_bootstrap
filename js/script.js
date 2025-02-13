function openMenu() {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("openbtn").style.display = "none";
}

function closeMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("openbtn").style.display = "flex";
}


document.getElementById('Poisson_btn').addEventListener('click', function() {
    var viandeCollapseElement = document.getElementById('Viande_1');
    if (viandeCollapseElement.classList.contains('show')) {
        var viandeCollapse = new bootstrap.Collapse(viandeCollapseElement, {
            toggle: false
        });
        viandeCollapse.hide();
    }
    var viande2CollapseElement = document.getElementById('Viande_2');
    if (viande2CollapseElement.classList.contains('show')) {
        var viande2Collapse = new bootstrap.Collapse(viande2CollapseElement, {
            toggle: false
        });
        viande2Collapse.hide();
    }



    var veggieCollapseElement = document.getElementById('Veggie_1');
    if (veggieCollapseElement.classList.contains('show')) {
        var veggieCollapse = new bootstrap.Collapse(veggieCollapseElement, {
            toggle: false
        });
        veggieCollapse.hide();
    }
    var veggie2CollapseElement = document.getElementById('Veggie_2');
    if (veggie2CollapseElement.classList.contains('show')) {
        var veggie2Collapse = new bootstrap.Collapse(veggie2CollapseElement, {
            toggle: false
        });
        veggie2Collapse.hide();
    }



    var poissonCollapseElement = document.getElementById('Poisson_1');
    var poissonCollapse = new bootstrap.Collapse(poissonCollapseElement, {
        toggle: false
    });
    var poisson2CollapseElement = document.getElementById('Poisson_2');
    var poisson2Collapse = new bootstrap.Collapse(poisson2CollapseElement, {
        toggle: false
    });

    if (!poissonCollapseElement.classList.contains('show')) {
        poissonCollapse.show();
    }
    if (!poisson2CollapseElement.classList.contains('show')) {
        poisson2Collapse.show();
    }
});

document.getElementById('Viande_btn').addEventListener('click', function() {
    var poissonCollapseElement = document.getElementById('Poisson_1');
    if (poissonCollapseElement.classList.contains('show')) {
        var poissonCollapse = new bootstrap.Collapse(poissonCollapseElement, {
            toggle: false
        });
        poissonCollapse.hide();
    }
    var poisson2CollapseElement = document.getElementById('Poisson_2');
    if (poisson2CollapseElement.classList.contains('show')) {
        var poisson2Collapse = new bootstrap.Collapse(poisson2CollapseElement, {
            toggle: false
        });
        poisson2Collapse.hide();
    }



    var veggieCollapseElement = document.getElementById('Veggie_1');
    if (veggieCollapseElement.classList.contains('show')) {
        var veggieCollapse = new bootstrap.Collapse(veggieCollapseElement, {
            toggle: false
        });
        veggieCollapse.hide();
    }
    var veggie2CollapseElement = document.getElementById('Veggie_2');
    if (veggie2CollapseElement.classList.contains('show')) {
        var veggie2Collapse = new bootstrap.Collapse(veggie2CollapseElement, {
            toggle: false
        });
        veggie2Collapse.hide();
    }



    var viandeCollapseElement = document.getElementById('Viande_1');
    var viandeCollapse = new bootstrap.Collapse(viandeCollapseElement, {
        toggle: false
    });
    var viande2CollapseElement = document.getElementById('Viande_2');
    var viande2Collapse = new bootstrap.Collapse(viande2CollapseElement, {
        toggle: false
    });

    if (!viandeCollapseElement.classList.contains('show')) {
        viandeCollapse.show();
    }
    if (!viande2CollapseElement.classList.contains('show')) {
        viande2Collapse.show();
    }
});

document.getElementById('Veggie_btn').addEventListener('click', function() {
    var poissonCollapseElement = document.getElementById('Poisson_1');
    if (poissonCollapseElement.classList.contains('show')) {
        var poissonCollapse = new bootstrap.Collapse(poissonCollapseElement, {
            toggle: false
        });
        poissonCollapse.hide();
    }
    var poisson2CollapseElement = document.getElementById('Poisson_2');
    if (poisson2CollapseElement.classList.contains('show')) {
        var poisson2Collapse = new bootstrap.Collapse(poisson2CollapseElement, {
            toggle: false
        });
        poisson2Collapse.hide();
    }



    var viandeCollapseElement = document.getElementById('Viande_1');
    if (viandeCollapseElement.classList.contains('show')) {
        var viandeCollapse = new bootstrap.Collapse(viandeCollapseElement, {
            toggle: false
        });
        viandeCollapse.hide();
    }
    var viande2CollapseElement = document.getElementById('Viande_2');
    if (viande2CollapseElement.classList.contains('show')) {
        var viande2Collapse = new bootstrap.Collapse(viande2CollapseElement, {
            toggle: false
        });
        viande2Collapse.hide();
    }



    var veggieCollapseElement = document.getElementById('Veggie_1');
    var veggieCollapse = new bootstrap.Collapse(veggieCollapseElement, {
        toggle: false
    });
    var veggie2CollapseElement = document.getElementById('Veggie_2');
    var veggie2Collapse = new bootstrap.Collapse(veggie2CollapseElement, {
        toggle: false
    });

    if (!veggieCollapseElement.classList.contains('show')) {
        veggieCollapse.show();
    }
    if (!veggie2CollapseElement.classList.contains('show')) {
        veggie2Collapse.show();
    }
});

document.getElementById('All_btn').addEventListener('click', function() {
    var poissonCollapseElement = document.getElementById('Poisson_1');
    var poissonCollapse = new bootstrap.Collapse(poissonCollapseElement, {
        toggle: false
    });
    var poisson2CollapseElement = document.getElementById('Poisson_2');
    var poisson2Collapse = new bootstrap.Collapse(poisson2CollapseElement, {
        toggle: false
    });

    if (!poissonCollapseElement.classList.contains('show')) {
        poissonCollapse.show();
    }
    if (!poisson2CollapseElement.classList.contains('show')) {
        poisson2Collapse.show();
    }



    var viandeCollapseElement = document.getElementById('Viande_1');
    var viandeCollapse = new bootstrap.Collapse(viandeCollapseElement, {
        toggle: false
    });
    var viande2CollapseElement = document.getElementById('Viande_2');
    var viande2Collapse = new bootstrap.Collapse(viande2CollapseElement, {
        toggle: false
    });

    if (!viandeCollapseElement.classList.contains('show')) {
        viandeCollapse.show();
    }
    if (!viande2CollapseElement.classList.contains('show')) {
        viande2Collapse.show();
    }



    var veggieCollapseElement = document.getElementById('Veggie_1');
    var veggieCollapse = new bootstrap.Collapse(veggieCollapseElement, {
        toggle: false
    });
    var veggie2CollapseElement = document.getElementById('Veggie_2');
    var veggie2Collapse = new bootstrap.Collapse(veggie2CollapseElement, {
        toggle: false
    });

    if (!veggieCollapseElement.classList.contains('show')) {
        veggieCollapse.show();
    }
    if (!veggie2CollapseElement.classList.contains('show')) {
        veggie2Collapse.show();
    }
});
