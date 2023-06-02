const { Talleres, Proceso } = require('../db.js')

const editTaller = async (req, res) => {
    const taller = await Talleres.findOne({
        where: {
            id: req.query.id
        }
    })

    const talles = taller.talle.split('|');

    const tallesCantidad = talles.map(item => {
        const obj = item.split(' ');
        return `Talle ${obj[1]} 0 ${obj[2]} ${obj[2]}`
    })

    const proceso = await Proceso.findOrCreate({
        where: {
            modelo: taller.dataValues.modelo,
            nombre: taller.dataValues.nombre,
            talle: taller.dataValues.talle,
            id_talleres: taller.dataValues.id,
            talle: tallesCantidad.join('|'),
            nota: taller.dataValues.nota,
        }
    });
    res.status(200).json(proceso);
};

const getProceso = async (req, res) => {
    const proceso = await Proceso.findAll();
    console.log(proceso)
    res.status(200).json(proceso);
}

const deleteProceso = async (req, res) => {
    await Proceso.destroy({
        where: {
            id: req.query.id
        }
    });
    res.status(200);
}

const sendProceso = async (req, res) => {

    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;

    const taller = await Talleres.findOne({
        where: {
            id: req.query.id
        }
    })

    const talles = taller.talle.split('|');

    const tallesCantidad = talles.map(item => {
        const obj = item.split(' ');
        return `Talle ${obj[1]} 0 ${obj[2]} ${obj[2]}`
    })

    const nuevoTaller = await Talleres.create({
        modelo: taller.dataValues.modelo,
        nombre: taller.dataValues.nombre,
        price: taller.dataValues.price,
        fecha: formattedDate,
        talle: tallesCantidad.join('|'),
        color: taller.dataValues.color,
        color_persona: taller.dataValues.color_persona,
        nota: taller.dataValues.nota
    })
    res.status(200).json(nuevoTaller)
}

module.exports = {
    editTaller,
    getProceso,
    deleteProceso,
    sendProceso
}