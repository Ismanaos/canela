const { Talleres } = require('../db.js')

const getTaller = async (req, res) => {
    const talleres = await Talleres.findAll();
    const nombre = req.query.data;
    if (nombre) {
        const tallerNombre = nombre.toLowerCase();
        const talleresFilter = talleres.filter(item =>
            item.dataValues.nombre.includes(tallerNombre)
            || item.dataValues.modelo.includes(tallerNombre)
            || item.dataValues.fecha == tallerNombre);
        return res.status(200).json(talleresFilter.reverse());
    }
    res.status(200).json(talleres.reverse());
}


const postTaller = async (req, res) => {
    const data = req.body;
    const talles = ['Talle 12', 'Talle 14', 'Talle 15', 'Talle 17', 'Talle 20', 'Talle 22']
    const lineItems = [];
    for (let i = 6; i >= 1; i--) {
        const goodKey = `good${i}`;
        const badKey = `bad${i}`;
        const cantidadKey = `cantidad${i}`;
        const talleValue = talles[i - 1];
        const goodValue = parseInt(data[goodKey]);
        const badValue = parseInt(data[badKey]);
        const cantidadValue = parseInt(data[cantidadKey]);

        if (!isNaN(goodValue) && !isNaN(badValue) && !isNaN(cantidadValue)) {
            const lineItem = `${talleValue} ${badValue} ${goodValue} ${cantidadValue}`;
            lineItems.push(lineItem);
        }
    }

    const talleres = await Talleres.create({
        ...data,
        talle: lineItems.join("|")
    });

    res.status(200).json(talleres);
};

const deleteTaller = async (req, res) => {
    const taller = await Talleres.destroy({
        where: {
            id: req.query.id
        }
    });
    res.status(200).json(taller);
}


module.exports = {
    getTaller,
    postTaller,
    deleteTaller
}