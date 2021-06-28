module.exports = (sequelize, Sequelize) => {
  const CompanyProductOffering = sequelize.define("company_product_offering", {
    company_id: {
      type: Sequelize.INTEGER
    },
    product_id: {
      type: Sequelize.INTEGER
    }
  }, {
    tableName: "company_product_offering",
    timestamps: false
  });

  CompanyProductOffering.associate = function(models) {
    CompanyProductOffering.belongsTo(models.company, {foreignKey: "company_id"});
  }

  return CompanyProductOffering;
};
