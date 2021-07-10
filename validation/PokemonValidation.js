module.exports = {
    create: () => {
        return [
            check("name", "Name is required!").not().isempty()
        ]
    }
}