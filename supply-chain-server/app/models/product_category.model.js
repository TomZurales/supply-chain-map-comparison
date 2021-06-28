module.exports = (sequelize, Sequelize) => {
  const ProductCategory = sequelize.define("product_category", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    tableName: 'product_category'
  });

  return ProductCategory;
};
