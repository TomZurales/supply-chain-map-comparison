module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    }
  }, {
    tableName: "company",
    timestamps: false
  });

  Company.associate = function(models) {
    Company.hasMany(models.company_product_offering, {foreignKey: "company_id"});
  }

  return Company;
};
