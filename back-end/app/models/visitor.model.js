module.exports = (mongoose) => {
    var schema = mongoose.Schema(
        {
            firstname: String ,
            lastname: String,
            email: String,
        },
        {
            timestamps: true
        }
    );

    const Visitor = mongoose.model("visitor", schema)
    return Visitor
}